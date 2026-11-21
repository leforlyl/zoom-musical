/* ===========================================================
   Zoom Musical - logica de la pagina
   Cambiar de album = cambiar body[data-theme] + repintar la ficha.
   =========================================================== */

const $  = (s) => document.querySelector(s);
const el = (id) => document.getElementById(id);

const byId = (id) => ALBUMS.find(a => a.id === id);

/* Version de las imagenes. Subir este numero cuando se reemplace una
   portada o una foto, si no el navegador sigue mostrando la vieja.
   En el archivo portable las rutas son data: y no se les agrega nada. */
const ASSET_V = 16;
const conVersion = (ruta) =>
  ruta.startsWith('data:') ? ruta : ruta + '?v=' + ASSET_V;

/* portada: una sola fuente de verdad para home y ficha */
const coverHTML = (a) =>
  `<img src="${conVersion(a.cover)}" alt="Portada de ${a.title}, de ${a.artist}">`;
let current = null;              // id del album abierto (null = home)
const SWITCH_MS = 300;           // debe calzar con el fade de styles.css

/* ------------------------------------------------ home: grilla */
function buildGrid(){
  el('grid').innerHTML = ALBUMS.map(a => `
    <button class="card" type="button" data-album="${a.id}">
      <div class="cover">${coverHTML(a)}</div>
      <p class="card-artist">${a.artist}</p>
      <p class="card-title">${a.title}</p>
      <p class="card-year">${a.year} &middot; ${a.length}</p>
    </button>`).join('');
}

/* ------------------------------------------- nav superior */
function buildSwitcher(){
  el('switcher').innerHTML = ALBUMS.map(a =>
    `<button type="button" data-album="${a.id}">${a.navLabel}</button>`
  ).join('');
}

function markSwitcher(){
  el('switcher').querySelectorAll('button').forEach(b => {
    b.setAttribute('aria-current', String(b.dataset.album === current));
  });
}

/* ------------------------------------------- pintar la ficha */
function paint(a){
  el('issue').innerHTML  = a.issue || '';
  el('issue').hidden     = !a.issue;
  el('cover').innerHTML  = coverHTML(a);
  el('artist').innerHTML = a.artist;
  el('title').innerHTML  = a.title;
  el('year').innerHTML   = a.year;
  /* hay paginas que no traen genero o duracion: se arma solo con lo que hay */
  const meta = [a.genre, a.length].filter(Boolean).join(' &middot; ');
  el('meta').innerHTML   = meta;
  el('meta').hidden      = !meta;
  el('photo').innerHTML  = a.photo
    ? `<img src="${conVersion(a.photo)}" alt="${a.photoCaption}">` : '';
  el('photoCaption').innerHTML = a.photoCaption;

  el('resena').innerHTML = a.resena.map(p => `<p>${p}</p>`).join('');

  el('tracks').innerHTML = a.tracks.map(group => `
    ${group.side ? `<p class="side-label">${group.side}</p>` : ''}
    <ol class="tl" style="counter-reset:t ${(group.start || 1) - 1}">
      ${group.items.map(([name, dur]) => `
        <li><span class="tl-name">${name}</span>${dur ? `<span class="tl-dur">${dur}</span>` : ''}</li>
      `).join('')}
    </ol>`).join('');

  el('picks').innerHTML = a.picks.map(([t, d]) =>
    `<li><b>${t}</b><span>${d}</span></li>`
  ).join('');

  /* anterior / siguiente, en orden cronologico */
  const i = ALBUMS.indexOf(a);
  const prev = ALBUMS[(i - 1 + ALBUMS.length) % ALBUMS.length];
  const next = ALBUMS[(i + 1) % ALBUMS.length];
  el('prev').innerHTML = `<small>&#8592; Anterior</small><strong>${prev.title}</strong>`;
  el('next').innerHTML = `<small>Siguiente &#8594;</small><strong>${next.title}</strong>`;
  el('prev').dataset.album = prev.id;
  el('next').dataset.album = next.id;
}

/* ------------------------------------------- cambios de vista */

/* El tema manda: si en el CSS declaro --fondo para este album, marco el
   body para que se aplique la foto de fondo. Asi la lista de albumes con
   foto vive en un solo lugar (styles.css) y no hay que repetirla aca. */
function setTheme(id){
  document.body.dataset.theme = id;
  const fondo = getComputedStyle(document.body).getPropertyValue('--fondo').trim();
  document.body.dataset.fondo = fondo && fondo !== 'none' ? 'si' : 'no';
}

function transition(fn){
  document.body.classList.add('is-switching');
  setTimeout(() => {
    fn();
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    document.body.classList.remove('is-switching');
  }, SWITCH_MS);
}

function openAlbum(id, push = true){
  const a = byId(id);
  if (!a || id === current) return;
  transition(() => {
    current = id;
    setTheme(id);
    paint(a);
    el('home').hidden = true;
    el('album').hidden = false;
    markSwitcher();
    document.title = `${a.artist} - ${a.title} | Zoom Musical`;
  });
  if (push) history.pushState({ id }, '', '#' + id);
}

function goHome(push = true){
  if (current === null) return;
  transition(() => {
    current = null;
    setTheme('home');
    el('album').hidden = true;
    el('home').hidden = false;
    markSwitcher();
    document.title = 'Zoom Musical - Discos que marcaron una época';
  });
  if (push) history.pushState({ id: null }, '', '#');
}

/* ------------------------------------------- eventos */
document.addEventListener('click', (e) => {
  const home = e.target.closest('[data-go-home]');
  if (home){ e.preventDefault(); goHome(); return; }

  const pick = e.target.closest('[data-album]');
  if (pick) openAlbum(pick.dataset.album);
});

document.addEventListener('keydown', (e) => {
  if (current === null) return;
  if (e.key === 'Escape') goHome();
  if (e.key === 'ArrowRight') el('next').click();
  if (e.key === 'ArrowLeft')  el('prev').click();
});

window.addEventListener('popstate', () => {
  const id = location.hash.slice(1);
  byId(id) ? openAlbum(id, false) : goHome(false);
});

/* ------------------------------------------- textos que dependen del catalogo */
const NUMEROS = ['cero', 'un', 'dos', 'tres', 'cuatro', 'cinco', 'seis',
                 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce', 'trece',
                 'catorce', 'quince', 'dieciseis', 'diecisiete', 'dieciocho',
                 'diecinueve', 'veinte'];

function buildCatalogTexts(){
  const anos = ALBUMS.map(a => a.year);
  const n = ALBUMS.length;
  /* "once" en vez de "11"; pasado el final de la lista usa el numero,
     pero como texto: si queda numero, poner la mayuscula tira error */
  const palabra = NUMEROS[n] || String(n);

  el('kicker').textContent = Math.min(...anos) + ' - ' + Math.max(...anos);
  el('footCount').textContent = n + ' álbumes';
  el('lead').textContent =
    palabra[0].toUpperCase() + palabra.slice(1) + ' álbumes, ' + palabra +
    ' mundos. Elige uno y la revista entera se vuelve de su color.';
}

/* ------------------------------------------- arranque */
buildCatalogTexts();
buildGrid();
buildSwitcher();
markSwitcher();

const start = location.hash.slice(1);
if (byId(start)) openAlbum(start, false);

/* precarga: deja las portadas listas para que el cambio sea instantaneo */
