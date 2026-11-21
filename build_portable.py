# -*- coding: utf-8 -*-
"""
Genera Zoom_Musical_portable.html: UN solo archivo con todo adentro
(estilos, datos, codigo, portadas y tipografias). Se puede mandar por
correo o WhatsApp y se abre con doble clic en cualquier computador,
incluso sin internet.

Uso:   python build_portable.py
Hay que volver a correrlo cada vez que se cambie la pagina.
"""

import base64
import io
import os
import re
import urllib.request

RAIZ = os.path.dirname(os.path.abspath(__file__))
ORIGEN = os.path.join(RAIZ, 'Zoom_Musical.html')
DESTINO = os.path.join(RAIZ, 'Zoom_Musical_portable.html')

# Chrome moderno: sin esto Google Fonts devuelve .ttf (mucho mas pesado)
UA = ('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 '
      '(KHTML, like Gecko) Chrome/124.0 Safari/537.36')

SUBSETS = ('latin', 'latin-ext')


def leer(nombre):
    return io.open(os.path.join(RAIZ, nombre), encoding='utf-8').read()


def bajar(url):
    req = urllib.request.Request(url, headers={'User-Agent': UA})
    return urllib.request.urlopen(req, timeout=30).read()


def como_data_uri(ruta, mime):
    datos = open(ruta, 'rb').read()
    return 'data:%s;base64,%s' % (mime, base64.b64encode(datos).decode('ascii'))


# ---------------------------------------------------------------- 1. fuentes
def fuentes_incrustadas(url_css):
    css = bajar(url_css).decode('utf-8')

    # cada @font-face viene precedido por un comentario con el subset
    bloques = re.findall(r'/\*\s*([\w\-\[\]]+)\s*\*/\s*(@font-face\s*\{[^}]*\})', css)
    elegidos = [b for sub, b in bloques if sub in SUBSETS]
    print('   @font-face encontrados: %d, incrustados: %d' % (len(bloques), len(elegidos)))

    salida = []
    cache = {}
    for bloque in elegidos:
        for url in re.findall(r"url\((https://fonts\.gstatic\.com/[^)]+)\)", bloque):
            if url not in cache:
                cache[url] = 'data:font/woff2;base64,' + \
                    base64.b64encode(bajar(url)).decode('ascii')
            bloque = bloque.replace(url, cache[url])
        salida.append(bloque)
    print('   archivos woff2 bajados: %d' % len(cache))
    return '\n'.join(salida)


def construir():
    html = leer('Zoom_Musical.html')

    print('1. tipografias')
    url_css = re.search(r'href="(https://fonts\.googleapis\.com/css2[^"]+)"', html).group(1)
    css_fuentes = fuentes_incrustadas(url_css.replace('&amp;', '&'))

    print('2. portadas y fotos')
    datos = leer('data.js')
    # van las dos carpetas: antes solo entraban las portadas y las fotos
    # de la resena quedaban rotas al abrir el archivo en otro computador
    for carpeta in ('covers', 'photos'):
        for nombre in sorted(os.listdir(os.path.join(RAIZ, 'assets', carpeta))):
            ruta = os.path.join(RAIZ, 'assets', carpeta, nombre)
            mime = 'image/svg+xml' if nombre.endswith('.svg') else 'image/jpeg'
            ref = 'assets/%s/%s' % (carpeta, nombre)
            if ref in datos:
                datos = datos.replace("'" + ref + "'",
                                      "'" + como_data_uri(ruta, mime) + "'")
                print('   %-24s %6d KB' % (ref, os.path.getsize(ruta) // 1024))

    print('3. imagenes del css')
    estilos = leer('styles.css')

    def inline_url(m):
        comilla, ref = m.group(1), m.group(2)
        ruta = os.path.join(RAIZ, ref.replace('/', os.sep))
        if not os.path.exists(ruta):
            print('   FALTA: %s' % ref)
            return m.group(0)
        mime = 'image/svg+xml' if ref.endswith('.svg') else 'image/jpeg'
        print('   %-34s %6d KB' % (ref, os.path.getsize(ruta) // 1024))
        return 'url(%s%s%s)' % (comilla, como_data_uri(ruta, mime), comilla)

    estilos = re.sub(r"url\((['\"]?)(assets/[^)'\"]+)\1\)", inline_url, estilos)

    print('4. armando el archivo')
    # fuera los <link> de Google Fonts y el preconnect
    html = re.sub(r'\s*<link rel="preconnect"[^>]*>', '', html)
    html = re.sub(r'\s*<link href="https://fonts\.googleapis\.com[^>]*>',
                  '\n<style>\n' + css_fuentes + '\n</style>', html)
    # estilos y scripts adentro
    # con regex, asi no se rompe cuando los archivos llevan ?v=N
    def meter(patron, contenido, envoltura):
        # el reemplazo va como funcion a proposito: asi re.sub lo inserta
        # literal y no interpreta las barras invertidas del contenido.
        # (si se pasara como texto, el '\2605' de la estrella en el CSS
        #  se rompia y aparecia escrito tal cual en la pagina)
        texto = envoltura % contenido
        return re.sub(patron, lambda m: texto, html_ref[0], count=1)

    html_ref = [html]
    html_ref[0] = meter(r'<link rel="stylesheet" href="styles\.css[^"]*">',
                        estilos, '<style>\n%s\n</style>')
    html_ref[0] = meter(r'<script src="data\.js[^"]*"></script>',
                        datos, '<script>\n%s\n</script>')
    html_ref[0] = meter(r'<script src="app\.js[^"]*"></script>',
                        leer('app.js'), '<script>\n%s\n</script>')
    html = html_ref[0]

    for falta in ('<style>', 'const ALBUMS', 'function paint'):
        if falta not in html:
            raise SystemExit('ERROR: no se incrusto "%s"' % falta)

    # las barras invertidas tienen que llegar igual que en el original:
    # son codigos de caracter del CSS, como la estrella de La Seleccion
    for nombre, texto in (('styles.css', estilos), ('data.js', datos)):
        esperadas = texto.count('\\')
        if html.count('\\') < esperadas:
            raise SystemExit('ERROR: se perdieron barras invertidas de %s' % nombre)
    if '\\\\' in html and '\\\\' not in estilos + datos:
        raise SystemExit('ERROR: se duplicaron barras invertidas al incrustar')

    io.open(DESTINO, 'w', encoding='utf-8', newline='').write(html)

    # el chequeo de abajo solo mira src=/href=, y las imagenes de data.js
    # viven dentro de comillas simples en el JS: hay que mirarlas aparte
    sueltas = sorted(set(re.findall(r"'(assets/[^']+)'", html)))
    if sueltas:
        raise SystemExit('ERROR: quedaron rutas sin incrustar: %s' % sueltas)

    sobran = re.findall(r'(?:src|href)="(?!data:|#)([^"]+)"', html)
    print('\nListo: %s' % DESTINO)
    print('Peso: %.1f MB' % (os.path.getsize(DESTINO) / 1048576.0))
    print('Referencias externas que quedaron: %s' % (sobran if sobran else 'ninguna'))


if __name__ == '__main__':
    construir()
