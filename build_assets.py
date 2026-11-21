# -*- coding: utf-8 -*-
"""
Prepara TODAS las imagenes de la pagina a partir de los archivos
originales, y las deja en assets/ con el nombre que usa cada album.

  portada  ->  assets/covers/<album>.jpg        (se copia tal cual)
  fondo    ->  assets/backgrounds/<album>.jpg   (max 1600 de ancho)
  foto     ->  assets/photos/<album>.jpg        (max  900 de ancho)

Uso:   python build_assets.py

Reemplaza a build_fondos.py y build_portadas.py, que hacian esto
mismo por separado.

Si agregan un disco: copien su carpeta al proyecto y sumen una fila
a la tabla de abajo. Lo que no tenga foto o fondo, se deja sin poner.
"""

import os
import shutil

import pymupdf

RAIZ = os.path.dirname(os.path.abspath(__file__))

ANCHO_FONDO = 1600.0
ANCHO_FOTO = 900.0
CALIDAD = 85

# una carpeta por disco, agrupadas por banda
SODA84 = 'Soda Stereo/1- Soda Stereo (1984)'
NADA = 'Soda Stereo/2- Nada Personal (1985)'
SIGNOS = 'Soda Stereo/3- Signos (1986)'
DOBLEVIDA = 'Soda Stereo/4- Doble Vida (1988)'
CANCION = 'Soda Stereo/5- Cancion Animal (1990)'
DYNAMO = 'Soda Stereo/6- Dynamo (1992)'
SUENOSTEREO = 'Soda Stereo/7- Sueño Stereo (1995)'
ABBEY = 'The Beatles/Abbey Road'
SGT = 'The Beatles/Sgt. Pepper Lonely Hearts Club Band'
REVOLVER = 'The Beatles/Revolver'
LETITBE = 'The Beatles/Let It Be'
HELP = 'The Beatles/Help!'
MEDDLE = 'Pink Floyd/Meddle (1971)'
DARKSIDE = 'Pink Floyd/Dark side of the moon (1973)'
WYWH = 'Pink Floyd/Wish you were here (1975)'
ANIMALS = 'Pink Floyd/Animals (1977)'
WALL = 'Pink Floyd/The Wall (1979)'
FINALCUT = 'Pink Floyd/The Final Cut (1983)'
SONGS = 'Stevie Wonder/Songs in the key of life'

# album -> de donde sale cada imagen (rutas relativas a esta carpeta)
ALBUMES = {
    'revolver': {
        'cover': REVOLVER + '/Revolver portada.jpeg',
        'fondo': REVOLVER + '/Fondo Revolver.jpeg',
        'foto': REVOLVER + '/Revolver foto 1.jpg',
    },
    'sgtpepper': {
        'cover': SGT + '/Sgt Pepper portada.jpeg',
        'fondo': SGT + '/Fondo Sgt Pepper.jpeg',
        # de las dos fotos, la 1 es apaisada y entra mejor en la polaroid
        'foto': SGT + '/Sgt pepper foto 1.jpg',
    },
    'abbeyroad': {
        'cover': ABBEY + '/Abbey Road portada.jpeg',
        'fondo': ABBEY + '/avenida_londinense_vintage_bajo__C3_A1rboles_E0_B2_A8__E0_B2_A8_E0_B2_A1.png',
        # la foto 1 es vertical y el marco la cortaria mucho; la 2 es apaisada
        'foto': ABBEY + '/Abbey road foto 2.jpg',
    },
    'letitbe': {
        'cover': LETITBE + '/Let it be portada.jpeg',
        'fondo': LETITBE + '/fondo let it be.jpeg',
        # la 1 es la azotea y es apaisada; la 2 es el estudio, mas cerrada
        'foto': LETITBE + '/Let it be foto 1.png',
    },
    'help': {
        'cover': HELP + '/help portada.jpg',
        'fondo': HELP + '/Zoom_Musical_Help_1965_Fondo_Web.jpg',
        # la foto 1 es la sesion a color del estudio de espejos, apaisada
        # y de mayor resolucion que la 2 (la de las medallas, en la revista)
        'foto': HELP + '/Help foto 1.jpg',
    },
    'meddle': {
        'cover': MEDDLE + '/Portada_Pink_Floyd_Meddle_1971.jpg',
        'fondo': MEDDLE + '/Fondo Meddle.jpeg',
        'foto': MEDDLE + '/Foto_Pink_Floyd_Meddle.jpg',
    },
    'darkside': {
        'cover': DARKSIDE + '/Portada_Pink_Floyd_The_Dark_Side_of_the_Moon_1973.jpg',
        'fondo': DARKSIDE + '/Fondo_Dark_side_of_the_moon.jpeg',
        'foto': DARKSIDE + '/Foto_Pink_Floyd_Dark_side_of_the_moon.jpg',
    },
    'wywh': {
        'cover': WYWH + '/Portada_Pink_Floyd_Wish_You_Were_Here_1975.jpg',
        'fondo': WYWH + '/Fondo Wish you were here.jpeg',
        'foto': WYWH + '/Foto_Pink_Floyd_Wish_You_Were_Here_poster.jpg',
    },
    'songs': {
        'cover': SONGS + '/Portada_Stevie_Wonder_Songs_in_the_Key_of_Life_1976.jpg',
        'fondo': SONGS + '/Fondo Songs in the key of life.jpeg',
        'foto': SONGS + '/Foto_Stevie_Wonder_Songs_in_the_key_of_life.jpg',
    },
    'animals': {
        'cover': ANIMALS + '/Portada_Pink_Floyd_Animals_1977.jpg',
        'fondo': ANIMALS + '/Fondo Animals.jpeg',
        'foto': ANIMALS + '/Foto_Pink_Floyd_Animals.jpg',
    },
    'wall': {
        'cover': WALL + '/Portada_Pink_Floyd_The_Wall_1979.jpg',
    },
    'finalcut': {
        # PROVISORIO: no llego archivo de portada, esto es un recorte de la
        # pagina de la revista. Cuando haya una portada de verdad en la
        # carpeta, cambiar esta linea por el nombre de ese archivo.
        'cover': FINALCUT + '/Portada_The_Final_Cut_RECORTE_PROVISORIO.jpg',
        'fondo': FINALCUT + '/Fondo The Final Cut.png',
        'foto': FINALCUT + '/The Final Cut Foto.png',
    },
    'soda84': {
        'cover': SODA84 + '/Soda stereo 1984 Portada.jpeg',
        'fondo': SODA84 + '/Fondo soda 1984.png',
        'foto': SODA84 + '/Soda Stereo 1984 foto.jpg',
    },
    'nadapersonal': {
        'cover': NADA + '/Nada Personal.jpeg',
        'fondo': NADA + '/Zoom_Musical_Nada_Personal_1985_Fondo_Web.png',
        'foto': NADA + '/Nada Personal foto.jpg',
    },
    'signos': {
        'cover': SIGNOS + '/signos portada.jpeg',
        'fondo': SIGNOS + '/Fondo Signos.jpeg',
        # la foto 1 es la misma que usa la revista (mayor resolucion
        # que la 2, que es la de la sesion casual en el jardin)
        'foto': SIGNOS + '/signos foto 1.jpg',
    },
    'doblevida': {
        'cover': DOBLEVIDA + '/doble vida portada.jpeg',
        'fondo': DOBLEVIDA + '/Fondo Doble vida.jpeg',
        # la foto 1 es en blanco y negro, la misma que usa la revista;
        # la 2 es a color pero igual de vertical, no mejora el encuadre
        'foto': DOBLEVIDA + '/doble vida foto 1.jpeg',
    },
    'cancionanimal': {
        # OJO: el nombre del archivo lleva tilde, por eso arriba va
        # declarada la codificacion utf-8
        'cover': CANCION + '/Canción animal portada.jpg',
        'fondo': CANCION + '/Fondo Cancion Animal.jpeg',
        # la foto 1 es apaisada y entra en la polaroid; la 2 es vertical
        'foto': CANCION + '/Cancion animal foto 1.jpeg',
    },
    'dynamo': {
        'cover': DYNAMO + '/Portada_Soda_Stereo_Dynamo_1992.jpg',
        'fondo': DYNAMO + '/Fondo Dynamo.jpeg',
        'foto': DYNAMO + '/Foto_Dynamo.jpg',
    },
    'suenostereo': {
        # OJO: el nombre de la carpeta y los archivos llevan tilde, por eso
        # arriba va declarada la codificacion utf-8
        'cover': SUENOSTEREO + '/sueño stereo portada.jpeg',
        'fondo': SUENOSTEREO + '/Zoom_Musical_Sueno_Stereo_1995_Fondo_Web.jpg',
        # la foto 3 es la de la sesion con el revolver gigante, apaisada y
        # en alta resolucion; entra mejor en la polaroid que la 1 y la 2
        'foto': SUENOSTEREO + '/sueño stereo foto 3.jpg',
    },
}

DESTINOS = {
    'cover': ('covers', None),            # None = copiar sin tocar
    'fondo': ('backgrounds', ANCHO_FONDO),
    'foto': ('photos', ANCHO_FOTO),
}


def redimensionar(origen, destino, ancho_max):
    # OJO: p.rect viene en puntos, no en pixeles. Para un png a 96 dpi son
    # tres cuartos del ancho real, asi que calcular la escala contra rect
    # achicaba todo un 25% de mas. La escala se saca del ancho REAL.
    ancho_real = pymupdf.Pixmap(origen).width
    d = pymupdf.open(origen)
    p = d[0]
    objetivo = min(ancho_real, ancho_max)
    escala = objetivo / p.rect.width
    pix = p.get_pixmap(matrix=pymupdf.Matrix(escala, escala))
    pix.save(destino, jpg_quality=CALIDAD)
    return pix.width, pix.height


def main():
    for carpeta, _ in DESTINOS.values():
        os.makedirs(os.path.join(RAIZ, 'assets', carpeta), exist_ok=True)

    for album in sorted(ALBUMES):
        for tipo, origen_rel in sorted(ALBUMES[album].items()):
            carpeta, ancho = DESTINOS[tipo]
            origen = os.path.join(RAIZ, origen_rel.replace('/', os.sep))
            destino = os.path.join(RAIZ, 'assets', carpeta, album + '.jpg')

            if not os.path.exists(origen):
                print('%-13s %-7s FALTA  %s' % (album, tipo, origen_rel))
                continue

            if ancho is None:
                shutil.copyfile(origen, destino)
                pix = pymupdf.Pixmap(destino)
                w, h = pix.width, pix.height
            else:
                w, h = redimensionar(origen, destino, ancho)

            aviso = ''
            if tipo == 'cover' and abs(w - h) > 8:
                aviso = '  <- NO es cuadrada'
            print('%-13s %-7s %4dx%-4d  %3d KB%s' % (
                album, tipo, w, h, os.path.getsize(destino) // 1024, aviso))


if __name__ == '__main__':
    main()
