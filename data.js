/* ============================================================
   Zoom Musical - datos de los albumes

   Cada album es un objeto de esta lista, en orden cronologico.
   Los textos salieron de las paginas de la revista de cada disco.
   Las imagenes las prepara build_assets.py y quedan en assets/.

   OJO: los nombres antes de los dos puntos (resena, picks, tracks)
   son estructura, no texto. Si se cambian, ese album deja de cargar.
   El texto editable es el que va entre comillas.
   ============================================================ */

const ALBUMS = [

/* ------------------------------------------------------------ HELP! */
{
  id: 'help',
  artist: 'The Beatles',
  title: 'Help!',
  year: 1965,
  genre: 'Pop rock &middot; Beat &middot; Folk pop',
  length: '34 min',
  issue: 'N.&ordm; 27 &middot; Julio 1965',
  navLabel: 'Help!',
  photo: 'assets/photos/help.jpg',
  photoCaption: 'The Beatles, 1965',
  resena: [
    'Help! muestra a The Beatles en plena expansión creativa: aún firmes en el pop rock directo que los hizo un fenómeno mundial, pero ya abriendo la puerta a un lenguaje más maduro y personal. El disco combina la energía y el pulso del beat con una variedad de tonos cada vez mayor, desde el ímpetu de "Ticket to Ride" hasta la delicadeza de "Yesterday", que revela una nueva profundidad en su escritura.',
    'Indisolublemente ligado a su película homónima, el álbum funciona a la vez como una celebración de su imagen cinematográfica y como un paso decisivo hacia una etapa artística más rica y ambiciosa, con melodías nítidas y canciones que se quedan en la memoria sin esfuerzo.'
  ],
  tracks: [
    { side: null, items: [
      ['Help!', ''],
      ['The Night Before', ''],
      ["You've Got to Hide Your Love Away", ''],
      ['I Need You', ''],
      ['Another Girl', ''],
      ["You're Going to Lose That Girl", ''],
      ['Ticket to Ride', ''],
      ['Act Naturally', ''],
      ["It's Only Love", ''],
      ['You Like Me Too Much', ''],
      ['Tell Me What You See', ''],
      ["I've Just Seen a Face", ''],
      ['Yesterday', ''],
      ['Dizzy Miss Lizzy', '']
    ]}
  ],
  picks: [
    ['Help!', 'El grito de auxilio más pegajoso del pop: urgencia, energía y un gancho que todavía suena fresco e irresistible.'],
    ["You've Got to Hide Your Love Away", 'Un folk-pop luminoso y delicado que anticipa el costado más introspectivo del grupo.'],
    ['Yesterday', 'Una de las melodías más perfectas jamás escritas: simple, emotiva y ya un clásico universal.']
  ],
  cover: 'assets/covers/help.jpg'
},

/* -------------------------------------------------------- REVOLVER */
{
  id: 'revolver',
  artist: 'The Beatles',
  title: 'Revolver',
  year: 1966,
  genre: 'Rock psicodélico &middot; Pop barroco',
  length: '35 min',
  /* la pagina no trae numero de edicion, trae esta bajada */
  issue: 'Revista privada de música popular',
  navLabel: 'Revolver',
  photo: 'assets/photos/revolver.jpg',
  photoCaption: 'The Beatles en el estudio, 1966',
  resena: [
    'Un nuevo giro en la asombrosa evolución de The Beatles. Revolver es, sin duda, su disco más innovador hasta la fecha: un conjunto de canciones que amplía el vocabulario del pop con una escritura cada vez más audaz, arreglos de gran imaginación y una libertad creativa que rompe definitivamente con las formas del beat.',
    'La experimentación en el estudio alcanza aquí un nivel decisivo (cuerdas, vientos, cintas al revés, efectos y texturas insólitas), al servicio de canciones de una riqueza y variedad extraordinarias. Revolver marca la transición de The Beatles hacia una etapa más introspectiva y psicodélica, y se consolida como una pieza clave en la historia del grupo y de la música popular.'
  ],
  tracks: [
    { side: null, items: [
      ['Taxman', ''],
      ['Eleanor Rigby', ''],
      ["I'm Only Sleeping", ''],
      ['Love You To', ''],
      ['Here, There and Everywhere', ''],
      ['Yellow Submarine', ''],
      ['She Said She Said', ''],
      ['Good Day Sunshine', ''],
      ['And Your Bird Can Sing', ''],
      ['For No One', ''],
      ['Doctor Robert', ''],
      ['I Want to Tell You', ''],
      ['Got to Get You into My Life', ''],
      ['Tomorrow Never Knows', '']
    ]}
  ],
  picks: [
    ['Eleanor Rigby', 'Un retrato conmovedor de la soledad moderna, elevado por su austero y brillante arreglo de cuerdas.'],
    ['Here, There and Everywhere', 'Una de las grandes melodías de McCartney: sencilla, melancólica y de una belleza impecable.'],
    ['Tomorrow Never Knows', 'Una visión sonora del futuro: hipnótica, experimental y radical, que abre de par en par las puertas del pop psicodélico.']
  ],
  cover: 'assets/covers/revolver.jpg'
},

/* ------------------------------------------------------ SGT PEPPER */
{
  id: 'sgtpepper',
  artist: 'The Beatles',
  title: "Sgt. Pepper's Lonely Hearts Club Band",
  year: 1967,
  /* esta pagina no trae genero ni duracion */
  genre: '',
  length: '',
  issue: '',
  navLabel: 'Sgt. Pepper',
  photo: 'assets/photos/sgtpepper.jpg',
  photoCaption: 'The Beatles, 1967',
  resena: [
    "Sgt. Pepper's Lonely Hearts Club Band es el gran experimento de The Beatles: un disco que rompió los límites del pop y convirtió al álbum en una obra de arte total. Con una producción innovadora, arreglos orquestales, sonidos de estudio y una identidad conceptual lúdica, el cuarteto retrata un mundo colorido y surrealista, donde la imaginación, la nostalgia y la reflexión conviven en perfecta armonía.",
    'Más que una colección de canciones, es una experiencia que redefinió lo que podía ser el rock.'
  ],
  tracks: [
    { side: null, items: [
      ["Sgt. Pepper's Lonely Hearts Club Band", ''],
      ['With a Little Help from My Friends', ''],
      ['Lucy in the Sky with Diamonds', ''],
      ['Getting Better', ''],
      ['Fixing a Hole', ''],
      ["She's Leaving Home", ''],
      ['Being for the Benefit of Mr. Kite!', ''],
      ['Within You Without You', ''],
      ["When I'm Sixty-Four", ''],
      ['Lovely Rita', ''],
      ['Good Morning Good Morning', ''],
      ["Sgt. Pepper's (Reprise)", ''],
      ['A Day in the Life', '']
    ]}
  ],
  picks: [
    ['Lucy in the Sky with Diamonds', 'Un viaje psicodélico y onírico. Sus imágenes surrealistas y su atmósfera hipnótica capturan el espíritu experimental del disco.'],
    ['Within You Without You', 'La gran exploración espiritual del álbum. Influencias de la música india, una instrumentación exquisita y una búsqueda introspectiva única en The Beatles.'],
    ['A Day in the Life', "Un cierre monumental. Cambios de clima, una orquesta desbordante y una mirada cruda a la vida moderna que resume toda la ambición creativa de Sgt. Pepper's."]
  ],
  cover: 'assets/covers/sgtpepper.jpg'
},

/* ------------------------------------------------------ ABBEY ROAD */
{
  id: 'abbeyroad',
  artist: 'The Beatles',
  title: 'Abbey Road',
  year: 1969,
  genre: 'Rock &middot; Pop rock',
  length: '47 min',
  issue: 'N.&ordm; 27 &middot; Londres &middot; Noviembre de 1969',
  navLabel: 'Abbey Road',
  photo: 'assets/photos/abbeyroad.jpg',
  photoCaption: 'The Beatles, 1969',
  resena: [
    'Con Abbey Road, The Beatles entregan un disco de una calidez y madurez extraordinarias. Es una colección de canciones de gran fuerza melódica y variedad, en la que cada miembro del grupo aporta composiciones memorables: del pulso hipnótico de "Come Together" a la serena elegancia de "Something" o el optimismo luminoso de "Here Comes the Sun".',
    'La producción, refinada y sólida, da al álbum un sonido rico y equilibrado, mientras que el célebre medley del lado B (una suite continua de canciones breves enlazadas con brillantez) muestra a los Beatles en plena maestría de estudio. Abbey Road se consolida así como una de sus obras más completas y perdurables, culminación de una década que cambió para siempre la música popular.'
  ],
  tracks: [
    { side: null, items: [
      ['Come Together', ''],
      ['Something', ''],
      ["Maxwell's Silver Hammer", ''],
      ['Oh! Darling', ''],
      ["Octopus's Garden", ''],
      ["I Want You (She's So Heavy)", ''],
      ['Here Comes the Sun', ''],
      ['Because', ''],
      ['You Never Give Me Your Money', ''],
      ['Sun King', ''],
      ['Mean Mr. Mustard', ''],
      ['Polythene Pam', ''],
      ['She Came In Through the Bathroom Window', ''],
      ['Golden Slumbers', ''],
      ['Carry That Weight', ''],
      ['The End', ''],
      ['Her Majesty', '']
    ]}
  ],
  picks: [
    ['Come Together', 'Un poderoso arranque de álbum: un rock de ritmo firme y clima denso, con una de las mejores interpretaciones vocales de Lennon.'],
    ['Something', 'La gran canción de George Harrison: una melodía de belleza clásica y emoción contenida, que se ha convertido ya en un estándar moderno.'],
    ['Here Comes the Sun', 'Radiante y llena de vida, es la canción más luminosa del disco. Con su irresistible melodía y su optimismo sereno, resume la calidez y el espíritu de Abbey Road.']
  ],
  cover: 'assets/covers/abbeyroad.jpg'
},

/* -------------------------------------------------------- LET IT BE */
{
  id: 'letitbe',
  artist: 'The Beatles',
  title: 'Let It Be',
  year: 1970,
  genre: 'Rock &middot; Pop rock',
  length: '35 min',
  /* la pagina no trae numero de edicion, trae esta bajada */
  issue: 'El último álbum de The Beatles',
  navLabel: 'Let It Be',
  photo: 'assets/photos/letitbe.jpg',
  photoCaption: 'The Beatles en la azotea de Savile Row',
  resena: [
    'Let It Be es el canto de despedida de The Beatles, un álbum que mira hacia atrás con la emoción de un final inevitable y, al mismo tiempo, confirma la grandeza de su legado. Más directo y despojado que sus trabajos anteriores, recobra la energía del grupo en vivo y muestra a la banda en su forma más humana: cansada, pero todavía capaz de crear canciones de una belleza sencilla y perdurable.',
    'Entre himnos de esperanza, momentos de introspección y una poderosa despedida en la azotea de Savile Row, Let It Be resume, con honestidad y emoción, la historia de la banda más influyente del siglo XX.'
  ],
  tracks: [
    { side: null, items: [
      ['Two of Us', ''],
      ['Dig a Pony', ''],
      ['Across the Universe', ''],
      ['I Me Mine', ''],
      ['Dig It', ''],
      ['Let It Be', ''],
      ['Maggie Mae', ''],
      ["I've Got a Feeling", ''],
      ['One After 909', ''],
      ['The Long and Winding Road', ''],
      ['For You Blue', ''],
      ['Get Back', '']
    ]}
  ],
  picks: [
    ['Let It Be', 'Un himno sereno y esperanzador que se convirtió en un clásico eterno.'],
    ['Across the Universe', 'Una pieza contemplativa y poética, de una belleza casi espiritual.'],
    ["I've Got a Feeling", 'La energía del grupo en estado puro, con el impulso de sus mejores días.']
  ],
  cover: 'assets/covers/letitbe.jpg'
},

/* ---------------------------------------------------------- MEDDLE */
{
  id: 'meddle',
  artist: 'Pink Floyd',
  title: 'Meddle',
  year: 1971,
  genre: 'Rock progresivo &middot; Psicodélico',
  length: '46 min',
  issue: 'N&deg; 12 &middot; Año III &middot; 1971',
  navLabel: 'Meddle',
  photo: 'assets/photos/meddle.jpg',
  photoCaption: 'Roger Waters en Pompeya, 1971',
  resena: [
    'Meddle (1971) muestra a Pink Floyd encontrando una voz propia. Sus canciones alternan fuerza rítmica, calma y experimentación.',
    'Echoes, la extensa pieza final, lleva las guitarras, el órgano y las texturas ambientales hacia un paisaje sonoro singular. El disco anticipa el sonido que la banda desarrollaria en los años siguientes.'
  ],
  tracks: [
    { side: null, items: [
      ['One of These Days', ''],
      ['A Pillow of Winds', ''],
      ['Fearless', ''],
      ['San Tropez', ''],
      ['Seamus', ''],
      ['Echoes', '']
    ]}
  ],
  picks: [
    ['Echoes', 'Un viaje hipnótico.'],
    ['Fearless', 'Una melodía cálida.'],
    ['One of These Days', 'Un arranque contundente.']
  ],
  cover: 'assets/covers/meddle.jpg'
},

/* ------------------------------------------- DARK SIDE OF THE MOON */
{
  id: 'darkside',
  artist: 'Pink Floyd',
  title: 'The Dark Side of the Moon',
  year: 1973,
  genre: 'Rock progresivo &middot; Art rock',
  length: '43 min',
  issue: 'N&deg; 08 &middot; Año III &middot; 1973',
  navLabel: 'Dark Side',
  photo: 'assets/photos/darkside.jpg',
  photoCaption: 'Pink Floyd, 1973',
  resena: [
    'Publicado en 1973, The Dark Side of the Moon es la obra más emblemática de Pink Floyd y uno de los discos esenciales del rock. Concebido como un viaje sonoro sobre la condición humana, aborda temas como el paso del tiempo, la presión social, la locura y la muerte, construyendo un relato continuo y cohesionado.',
    'Su producción, de una claridad y ambición poco comunes para la época, combina capas de guitarras, sintetizadores, efectos y una puesta en escena sonora que inmersa al oyente de principio a fin. Un disco que sigue sonando actual, tanto por su profundidad como por su precisión musical.'
  ],
  tracks: [
    { side: null, items: [
      ['Speak to Me', ''],
      ['Breathe (In the Air)', ''],
      ['On the Run', ''],
      ['Time', ''],
      ['The Great Gig in the Sky', ''],
      ['Money', ''],
      ['Us and Them', ''],
      ['Any Colour You Like', ''],
      ['Brain Damage', ''],
      ['Eclipse', '']
    ]}
  ],
  picks: [
    ['Time', 'Una reflexión brillante sobre el paso del tiempo y la vida que se escapa.'],
    ['The Great Gig in the Sky', 'La voz de Clare Torry convierte el dolor y la trascendencia en pura emoción.'],
    ['Us and Them', 'Un retrato lúcido de la división y el conflicto humano, con una atmósfera única.']
  ],
  cover: 'assets/covers/darkside.jpg'
},

/* ------------------------------------------------ WISH YOU WERE HERE */
{
  id: 'wywh',
  artist: 'Pink Floyd',
  title: 'Wish You Were Here',
  year: 1975,
  genre: 'Rock progresivo &middot; Art rock',
  length: '44 min',
  issue: 'Especial años 70 &middot; 1975',
  navLabel: 'Wish You Were Here',
  photo: 'assets/photos/wywh.jpg',
  photoCaption: 'Afiche de concierto de Pink Floyd',
  resena: [
    'Wish You Were Here (1975) convierte la ausencia en una experiencia sonora. Sus guitarras expresivas y largos pasajes instrumentales evocan la distancia entre las personas, mientras la banda cuestiona la industria musical.',
    'La suite Shine On You Crazy Diamond aporta una dimensión monumental; la canción que da título al álbum, en cambio, es íntima y directa. La obra une nostalgia, crítica y una necesidad profunda de conexión humana.'
  ],
  tracks: [
    { side: null, items: [
      ['Shine On You Crazy Diamond (Pts. I&ndash;V)', '13:32'],
      ['Welcome to the Machine', '7:31'],
      ['Have a Cigar', '5:08'],
      ['Wish You Were Here', '5:40'],
      ['Shine On You Crazy Diamond (Pts. VI&ndash;IX)', '12:29']
    ]}
  ],
  picks: [
    ['Shine On You Crazy Diamond', 'Una travesía instrumental emotiva.'],
    ['Welcome to the Machine', 'Una crítica mecánica y sombría.'],
    ['Wish You Were Here', 'Una despedida cercana e inolvidable.']
  ],
  cover: 'assets/covers/wywh.jpg'
},

/* --------------------------------------------- SONGS IN THE KEY OF LIFE */
{
  id: 'songs',
  artist: 'Stevie Wonder',
  title: 'Songs in the Key of Life',
  year: 1976,
  genre: 'Soul &middot; Funk &middot; R&amp;B',
  length: '1 h 45 min',
  issue: 'N.&ordm; 01 &middot; Discos que marcaron una época',
  navLabel: 'Songs in the Key of Life',
  photo: 'assets/photos/songs.jpg',
  photoCaption: 'Stevie Wonder en estudio, 1976',
  resena: [
    'Songs in the Key of Life es la obra cumbre de Stevie Wonder y uno de los discos más ambiciosos de la música popular. Publicado en 1976, es un viaje sonoro y espiritual que combina soul, funk, R&amp;B, jazz y pop con una diversidad, una calidez y una claridad de propósito pocas veces igualadas.',
    'Más que una colección de canciones, es un retrato panorámico de la vida: el amor, la fe, la injusticia social, la alegría cotidiana y la búsqueda de un mundo más justo conviven en un flujo musical elogioso y vibrante.',
    'Con arreglos deslumbrantes, melodías memorables y una producción de enorme riqueza, el álbum reafirma a Stevie Wonder como un artista total, capaz de unir virtuosismo, compromiso y una profunda sensibilidad humana.'
  ],
  tracks: [
    { side: 'LP (17 canciones)', items: [
      ["Love's in Need of Love Today", ''],
      ['Have a Talk with God', ''],
      ['Village Ghetto Land', ''],
      ['Contusion', ''],
      ['Sir Duke', ''],
      ['I Wish', ''],
      ['Knocks Me Off My Feet', ''],
      ['Pastime Paradise', ''],
      ['Summer Soft', ''],
      ['Ordinary Pain', ''],
      ["Isn't She Lovely", ''],
      ['Joy Inside My Tears', ''],
      ['Black Man', ''],
      ['Ngiculela &ndash; Es Una Historia &ndash; I Am Singing', ''],
      ["If It's Magic", ''],
      ['As', ''],
      ['Another Star', '']
    ]},
    { side: 'EP adicional (4 canciones)', items: [
      ['Saturn', ''],
      ['Ebony Eyes', ''],
      ['All Day Sucker', ''],
      ["Easy Goin' Evening (My Mama's Call)", '']
    ]}
  ],
  picks: [
    ['Sir Duke', 'Un homenaje festivo y contagioso a Duke Ellington, que celebra el poder unificador de la música con un ritmo irresistible y un arreglo brillante.'],
    ["Isn't She Lovely", 'La conmovedora celebración del nacimiento de su hija, una de las melodías más queridas y luminosas del álbum.'],
    ['Pastime Paradise', 'Una reflexión profunda y actual sobre la ilusión del éxito y la necesidad de buscar un sentido más auténtico en la vida.']
  ],
  cover: 'assets/covers/songs.jpg'
},

/* --------------------------------------------------------- ANIMALS */
{
  id: 'animals',
  artist: 'Pink Floyd',
  title: 'Animals',
  year: 1977,
  genre: 'Rock progresivo &middot; Art rock',
  length: '41 min',
  issue: 'Año II &middot; N&deg; 8 &middot; Octubre 1977',
  navLabel: 'Animals',
  photo: 'assets/photos/animals.jpg',
  photoCaption: 'Pink Floyd en vivo, gira de 1977',
  resena: [
    'Animals (1977) retrata una sociedad atravesada por la ambición, el poder y la obediencia. Sus extensas composiciones combinan guitarras ásperas, tensión dramática y una crítica social expresada mediante metáforas animales.',
    'El resultado es uno de los trabajos más sombríos e intensos de Pink Floyd.'
  ],
  tracks: [
    { side: null, items: [
      ['Pigs on the Wing (Part One)', ''],
      ['Dogs', ''],
      ['Pigs (Three Different Ones)', ''],
      ['Sheep', ''],
      ['Pigs on the Wing (Part Two)', '']
    ]}
  ],
  picks: [
    ['Dogs', 'Una pieza de tensión creciente.'],
    ['Pigs', 'Sarcasmo y guitarras incisivas.'],
    ['Sheep', 'Un desenlace feroz.']
  ],
  cover: 'assets/covers/animals.jpg'
},

/* -------------------------------------------------------- THE WALL */
{
  id: 'wall',
  artist: 'Pink Floyd',
  title: 'The Wall',
  year: 1979,
  genre: 'Rock progresivo &middot; Art rock',
  length: '81 min',
  issue: 'N.&ordm; 03 &middot; Discos que marcaron una época',
  navLabel: 'The Wall',
  photoCaption: 'Los martillos en marcha, imagen de The Wall',
  resena: [
    'The Wall es la obra más ambiciosa y personal de Pink Floyd. Concebido por Roger Waters como un relato conceptual, el álbum narra la gradual alienación de Pink, una figura que, golpeada por la guerra, una educación represiva, la fama y el aislamiento afectivo, levanta un "muro" emocional para protegerse del mundo. El resultado es un doble LP de enorme fuerza dramática, donde la banda combina su maestría sonora con una narrativa de gran impacto.',
    'Musicalmente, The Wall lleva el rock progresivo a un terreno más directo y teatral, con pasajes íntimos, momentos de gran intensidad y coros monumentales (como el inolvidable "Another Brick in the Wall, Part II"). Más que un disco, es una experiencia completa: una reflexión sobre la soledad, el control y la deshumanización de la vida moderna que, a más de cuatro décadas de su lanzamiento, sigue resonando con plena vigencia.'
  ],
  tracks: [
    { side: 'Disco 1', items: [
      ['In the Flesh?', '3:19'],
      ['The Thin Ice', '2:26'],
      ['Another Brick in the Wall (Part I)', '3:10'],
      ['The Happiest Days of Our Lives', '1:50'],
      ['Another Brick in the Wall (Part II)', '3:59'],
      ['Mother', '5:34'],
      ['Goodbye Blue Sky', '2:47'],
      ['Empty Spaces', '2:07'],
      ['Young Lust', '3:29'],
      ['One of My Turns', '3:37'],
      ["Don't Leave Me Now", '4:08'],
      ['Another Brick in the Wall (Part III)', '1:14']
    ]},
    { side: 'Disco 2', start: 13, items: [
      ['Goodbye Cruel World', '1:13'],
      ['Hey You', '4:40'],
      ['Is There Anybody Out There?', '2:44'],
      ['Nobody Home', '3:26'],
      ["Vernon's Little Gil", '1:07'],
      ['Bring the Boys Back Home', '1:27'],
      ['Comfortably Numb', '6:21'],
      ['The Show Must Go On', '1:36'],
      ['In the Flesh', '4:18'],
      ['Run Like Hell', '4:23'],
      ['Waiting for the Worms', '3:58'],
      ['Stop', '0:30'],
      ['The Trial', '5:13'],
      ['Outside the Wall', '1:46']
    ]}
  ],
  picks: [
    ['Another Brick in the Wall (Part II)', 'El tema más emblemático del disco. Su potente estribillo, con el célebre coro infantil, se convirtió en un himno contra la rígida educación y el conformismo.'],
    ['Comfortably Numb', 'Una de las cumbres de Pink Floyd. La voz de David Gilmour y su solos de guitarra construyen un clima de belleza y desolación que resume la esencia emocional del álbum.'],
    ['Hey You', 'Un llamado desesperado a la comunicación, donde Pink intenta romper el muro que lo aísla. Directa, conmovedora y de una gran carga humana.']
  ],
  cover: 'assets/covers/wall.jpg'
},

/* --------------------------------------------------- THE FINAL CUT */
{
  id: 'finalcut',
  artist: 'Pink Floyd',
  title: 'The Final Cut',
  year: 1983,
  genre: 'Rock progresivo &middot; Art rock',
  length: '46 min',
  issue: 'N.&ordm; 27 &middot; Primavera 1983',
  navLabel: 'The Final Cut',
  photo: 'assets/photos/finalcut.jpg',
  photoCaption: 'Pink Floyd',
  resena: [
    'Con The Final Cut, Pink Floyd entrega en 1983 su obra más sombría, introspectiva y explícitamente política. Concebido en gran medida por Roger Waters, el álbum retoma el hilo de The Wall, pero desde una perspectiva más directa y despojada: la guerra, la memoria y la fractura emocional (tanto individual como colectiva) se convierten aquí en el eje de un relato amargo y profundamente humano.',
    'A lo largo de sus doce piezas, el disco traza un mosaico de recuerdos, pérdidas y desilusiones, con la guerra de las Malvinas como sombra contemporánea y la herencia de la Segunda Guerra Mundial latiendo en el trasfondo. La música, contenida y de gran carga atmosférica, privilegia la canción y la narración, con arreglos sobrios, orquestaciones precisas y la voz de Waters en primer plano, igual de vulnerable que combativa.',
    'The Final Cut no es un disco de concesiones, sino un cierre doloroso: una elegía sobre las cicatrices que dejan los conflictos, la política de poder y el desgaste de las ilusiones.'
  ],
  tracks: [
    { side: null, items: [
      ['The Post War Dream', ''],
      ['Your Possible Pasts', ''],
      ['One of the Few', ''],
      ["The Hero's Return", ''],
      ["The Gunner's Dream", ''],
      ['Paranoid Eyes', ''],
      ['Get Your Filthy Hands Off My Desert', ''],
      ['The Fletcher Memorial Home', ''],
      ['Southampton Dock', ''],
      ['The Final Cut', ''],
      ['Not Now John', ''],
      ['Two Suns in the Sunset', '']
    ]}
  ],
  picks: [
    ["The Gunner's Dream", 'Un retrato hipnótico y desolador del combatiente, donde el sueño de la guerra se revela como una ilusión trágica, sostenida por una de las atmósferas más logradas del disco.'],
    ['The Final Cut', 'La pieza central y más directa, un ajuste de cuentas con la idea del sacrificio y la manipulación política, que condensa el tono elegíaco y la rabia contenida del álbum.'],
    ['Two Suns in the Sunset', 'Un final sobrecogedor: la visión de un mundo al borde de la aniquilación, donde la guerra se extiende del pasado al futuro en una imagen de devastadora claridad.']
  ],
  cover: 'assets/covers/finalcut.jpg'
},

/* ----------------------------------------------------- SODA STEREO */
{
  id: 'soda84',
  artist: 'Soda Stereo',
  title: 'Soda Stereo',
  year: 1984,
  /* la pagina de este disco no trae genero ni duracion */
  genre: '',
  length: '',
  issue: 'N&deg; 08',
  navLabel: 'Soda Stereo',
  photo: 'assets/photos/soda84.jpg',
  photoCaption: 'Soda Stereo, 1984',
  resena: [
    'El debut de Soda Stereo marca el punto de partida del rock latinoamericano moderno. Con una mezcla fresca de new wave, post-punk y pop, el trío argentino construye un sonido elegante, minimalista y a la vez lleno de energía. Las guitarras brillantes, los sintetizadores y la voz de Cerati anticipan la identidad que marcaría a toda una generación. Es un disco directo, juvenil y sorprendentemente sólido, que muestra una banda en plena búsqueda, pero ya con una personalidad inconfundible.'
  ],
  tracks: [
    { side: null, items: [
      ['&iquest;Por qu&eacute; no puedo ser del Jet-Set?', ''],
      ['Sobredosis de TV', ''],
      ['Te hacen falta vitaminas', ''],
      ['Trátame suavemente', ''],
      ['Dietético', ''],
      ['Tele-Ka', ''],
      ['Ni un segundo', ''],
      ['Un misil en mi placard', ''],
      ['El tiempo es dinero', ''],
      ['Afrodisíacos', '']
    ]}
  ],
  picks: [
    ['Trátame suavemente', 'La gran bisagra del disco. Una balada pop que ya muestra la sensibilidad y el magnetismo de Cerati.'],
    ['Sobredosis de TV', 'Una crítica genialmente simple y directa a la cultura mediática, con un ritmo hipnótico y contagioso.'],
    ['Te hacen falta vitaminas', 'Irónica, fresca y con un pulso new wave irresistible. Resume la actitud juvenil y desinhibida de la banda.']
  ],
  cover: 'assets/covers/soda84.jpg'
},

/* --------------------------------------------------- NADA PERSONAL */
{
  id: 'nadapersonal',
  artist: 'Soda Stereo',
  title: 'Nada Personal',
  year: 1985,
  genre: 'New wave &middot; Rock en español',
  length: '40 min',
  issue: '',   /* esta pagina no trae numero de edicion */
  navLabel: 'Nada Personal',
  photo: 'assets/photos/nadapersonal.jpg',
  photoCaption: 'Soda Stereo, 1985',
  resena: [
    'Nada Personal consolida a Soda Stereo como la gran banda del rock en español de los ochenta. Su segundo disco profundiza el sonido new wave del debut, con una producción más cuidada y una identidad propia que equilibra la energía del rock con la sofisticación de los sintetizadores.',
    'Las guitarras se vuelven más filosas, el bajo marca un pulso bailable y los teclados aportan atmósferas modernas y urbanas, acompañando letras que exploran la alienación, el deseo y la vida en la ciudad.'
  ],
  tracks: [
    { side: null, items: [
      ['Nada personal', ''],
      ['Si no fuera por...', ''],
      ['Cuando pase el temblor', ''],
      ['Danza rota', ''],
      ['El cuerpo del delito', ''],
      ['Juego de seducción', ''],
      ['Estoy azulado', ''],
      ['Observándonos (Satélites)', ''],
      ['Imágenes retro', ''],
      ['Ecos', '']
    ]}
  ],
  picks: [
    ['Nada personal', 'El manifiesto del disco. Una canción directa y punzante que mezcla actitud rockera con la sensibilidad new wave del trío.'],
    ['Cuando pase el temblor', 'Uno de sus grandes clásicos. Melancólica y expansiva, con una base rítmica contagiosa y un sintetizador que marca época.'],
    ['Juego de seducción', 'Rítmica y elegante, con un groove bailable que muestra el costado más pop y sofisticado de Soda Stereo.']
  ],
  cover: 'assets/covers/nadapersonal.jpg'
},

/* ---------------------------------------------------------- SIGNOS */
{
  id: 'signos',
  artist: 'Soda Stereo',
  title: 'Signos',
  year: 1986,
  genre: 'Rock en español &middot; New wave',
  length: '38 min',
  /* la pagina no trae numero de edicion, trae esta bajada */
  issue: 'Revista privada de música popular',
  navLabel: 'Signos',
  photo: 'assets/photos/signos.jpg',
  photoCaption: 'Soda Stereo, 1986',
  resena: [
    'Signos consolidó a Soda Stereo en una etapa de mayor sofisticación sonora y compositiva. Publicado en 1986, el álbum refina la energía new wave del trío con un pulso más elegante, atmosférico y nocturno: guitarras filosas, sintetizadores discretos y letras cargadas de deseo, distancia y misterio construyen un disco de identidad muy marcada.',
    'Lejos de sonar rígido, Signos equilibra precisión pop y tensión emocional, moviéndose entre señales ocultas, relaciones ambiguas y una sensibilidad urbana muy propia. Es un disco sobrio pero magnético, donde la banda pule su lenguaje y entrega varias de las piezas más memorables de su primera etapa.'
  ],
  tracks: [
    { side: null, items: [
      ['Sin sobresaltos', ''],
      ['El rito', ''],
      ['Prófugos', ''],
      ['No existes', ''],
      ['Persiana americana', ''],
      ['En camino', ''],
      ['Signos', ''],
      ['Final caja negra', '']
    ]}
  ],
  picks: [
    ['Prófugos', 'Una de las cumbres del disco: tensión, deseo y una melodía inolvidable que convirtió a Soda Stereo en un clásico continental.'],
    ['Persiana americana', 'Seductora y filosa, con una guitarra hipnótica y una de las atmósferas más icónicas del rock en español.'],
    ['Signos', 'El corazón conceptual del álbum: elegante, enigmática y cargada de esa sensibilidad nocturna que define todo el disco.']
  ],
  cover: 'assets/covers/signos.jpg'
},

/* ----------------------------------------------------- DOBLE VIDA */
{
  id: 'doblevida',
  artist: 'Soda Stereo',
  title: 'Doble Vida',
  year: 1988,
  genre: 'Rock en español &middot; New wave &middot; Pop rock',
  length: '42 min',
  /* la pagina no trae numero de edicion, trae esta bajada */
  issue: 'Rock &middot; Música &middot; Cultura &middot; Escenas de hoy',
  navLabel: 'Doble Vida',
  photo: 'assets/photos/doblevida.jpg',
  photoCaption: 'Soda Stereo, 1988',
  resena: [
    'Con Doble Vida, Soda Stereo consolida su madurez artística y abre una nueva etapa dentro del rock en español. El trío profundiza su exploración urbana, sumergiéndose en las tensiones de la gran ciudad, la soledad, el deseo y la convivencia de mundos opuestos (la calma y el vértigo, lo íntimo y lo colectivo) que dan sentido al título del álbum.',
    'Con una producción cuidada, texturas más densas y un equilibrio impecable entre tensión rockera y sensibilidad pop, el disco ofrece algunas de las canciones más emblemáticas del grupo, como "En la Ciudad de la Furia" y "Corazón Delator". Doble Vida es un álbum ambicioso, atmosférico y profundamente porteño, que confirma a Soda Stereo como la banda más influyente de su generación.'
  ],
  tracks: [
    { side: null, items: [
      ['Picnic en el 4° B', ''],
      ['En la Ciudad de la Furia', ''],
      ['Lo que Sangra (La Cúpula)', ''],
      ['En el Borde', ''],
      ['Languis', ''],
      ['Día Común - Doble Vida', ''],
      ['Corazón Delator', ''],
      ['El Ritmo de tus Ojos', ''],
      ['Terapia de Amor Intensiva', '']
    ]}
  ],
  picks: [
    ['En la Ciudad de la Furia', 'El corazón urbano del disco: una pieza poderosa y cinematográfica que capta la tensión, el aislamiento y la energía nocturna de la gran ciudad.'],
    ['Lo que Sangra (La Cúpula)', 'Hipnótica y envolvente, combina un clima introspectivo con un pulso rockero que crece hasta volverse desgarrador.'],
    ['Corazón Delator', 'Una de las cumbres del álbum: melancólica y urgente, refleja como pocas el lado más emotivo de Soda Stereo.']
  ],
  cover: 'assets/covers/doblevida.jpg'
},

/* -------------------------------------------------- CANCION ANIMAL */
{
  id: 'cancionanimal',
  artist: 'Soda Stereo',
  title: 'Canción Animal',
  year: 1990,
  genre: 'Rock alternativo &middot; Rock en español',
  length: '41 min',
  /* la pagina no trae numero de edicion, trae esta bajada */
  issue: 'Rock latino de los 90',
  navLabel: 'Canción Animal',
  photo: 'assets/photos/cancionanimal.jpg',
  photoCaption: 'Soda Stereo, 1990',
  resena: [
    'Canción Animal es el disco en el que Soda Stereo consolida su madurez artística y da un salto definitivo hacia un sonido más amplio, visceral y contemporáneo. Editado en 1990, el álbum combina la potencia del rock alternativo con melodías inolvidables, letras que oscilan entre lo íntimo y lo salvaje, y una producción ambiciosa que expande el universo sonoro del trío.',
    'Con himnos como "De Música Ligera", el disco se convirtió en un clásico inmediato del rock en español y en una de las obras cumbre de la banda, capturando el pulso de una generación que buscaba nuevas formas de libertad.'
  ],
  tracks: [
    { side: null, items: [
      ['(En) El Séptimo Día', ''],
      ['Un Millón de Años Luz', ''],
      ['Canción Animal', ''],
      ['1990 (Mil Nueve Noventa)', ''],
      ['Súbete a Mi Cohete', ''],
      ['De Música Ligera', ''],
      ['Hombre al Agua', ''],
      ['Entre Caníbales', ''],
      ['Té Para 3', ''],
      ['Cae el Sol', '']
    ]}
  ],
  picks: [
    ['De Música Ligera', 'El gran himno del álbum: una canción luminosa y contundente, de esas que definen a toda una época.'],
    ['Entre Caníbales', 'Oscura, intensa y magnética, muestra el costado más filoso y experimental de Soda Stereo.'],
    ['Té Para 3', 'Una pieza íntima y atmosférica, con una de las letras más sensibles del disco y una melodía que permanece.']
  ],
  cover: 'assets/covers/cancionanimal.jpg'
},

/* ---------------------------------------------------------- DYNAMO */
{
  id: 'dynamo',
  artist: 'Soda Stereo',
  title: 'Dynamo',
  year: 1992,
  genre: 'Rock alternativo &middot; Neo-psicodelia',
  length: '55 min',
  issue: '',   /* esta pagina no trae numero de edicion */
  navLabel: 'Dynamo',
  photo: 'assets/photos/dynamo.jpg',
  photoCaption: 'Soda Stereo, principios de los 90',
  resena: [
    'Con Dynamo, Soda Stereo llevó su búsqueda sonora a un nuevo territorio. Editado en 1992, el álbum amplía el pulso del rock alternativo hacia texturas más densas, psicodélicas y envolventes, con una producción moderna que lo conecta con la escena internacional de principios de los noventa.',
    'Lejos de fórmulas previsibles, el trío explora la repetición hipnótica, las atmósferas etéreas y un groove más físico, donde conviven la experimentación y la melodía. Dynamo es un disco de transiciones y climas, que confirma a Soda Stereo en plena madurez creativa y como una de las bandas más inquietas y visionarias del rock en español.'
  ],
  tracks: [
    { side: null, items: [
      ['Secuencia inicial', ''],
      ['Toma la ruta', ''],
      ['En remolinos', ''],
      ['Primavera 0', ''],
      ['Camaleón', ''],
      ['Luna roja', ''],
      ['Sweet Sahumerio', ''],
      ['Ameba', ''],
      ['Nuestra fe', ''],
      ['Claroscuro', ''],
      ['Fue', ''],
      ['Texturas', '']
    ]}
  ],
  picks: [
    ['En remolinos', 'Un viaje hipnótico y expansivo, donde la banda alcanza una de sus atmósferas más intensas y psicodélicas.'],
    ['Primavera 0', 'Una pieza de belleza oscura y calma tensa, con una melancolía luminosa que se despliega en capas.'],
    ['Fue', 'Uno de los momentos más emotivos del disco, con una melodía envolvente y un clima de despedida que deja una huella profunda.']
  ],
  cover: 'assets/covers/dynamo.jpg'
},

/* --------------------------------------------------- SUEÑO STEREO */
{
  id: 'suenostereo',
  artist: 'Soda Stereo',
  title: 'Sueño Stereo',
  year: 1995,
  genre: 'Rock alternativo &middot; Dream pop',
  length: '53 min',
  issue: 'El sueño eléctrico de Soda Stereo',
  navLabel: 'Sueño Stereo',
  photo: 'assets/photos/suenostereo.jpg',
  photoCaption: 'Soda Stereo, 1995',
  resena: [
    'Con Sueño Stereo, el trío se adentra en un territorio más atmosférico, introspectivo y sensorial. Editado en 1995, el álbum lleva el pulso del rock alternativo latino hacia un paisaje de texturas etéreas, loops hipnóticos y melodías que flotan entre el sueño y la vigilia, equilibrando la energía rockera con una nueva sensibilidad cercana al dream pop.',
    'Lejos de repetir fórmulas anteriores, Soda Stereo entrega una obra madura y expansiva, hecha de noches largas y climas electrónicos envolventes: un disco que, tres décadas después, sigue sonando futurista.'
  ],
  tracks: [
    { side: null, items: [
      ['Ella Usó Mi Cabeza Como un Revólver', '4:32'],
      ['Disco Eterno', '5:46'],
      ['Zoom', '3:27'],
      ['Ojo de la Tormenta', '4:33'],
      ['Efecto Doppler', '5:03'],
      ['Paseando por Roma', '3:35'],
      ['Pasos', '3:54'],
      ['Ángel Eléctrico', '4:36'],
      ['Crema de Estrellas', '4:37'],
      ['Planta', '4:52'],
      ['X-Playo', '4:07'],
      ['Moiré', '4:02']
    ]}
  ],
  picks: [
    ['Zoom', 'El pulso más futurista del disco: rock y electrónica fundidos en una melancolía hipnótica.'],
    ['Disco Eterno', 'Luminosa y envolvente, con uno de los climas más intensos de todo el álbum.'],
    ['Paseando por Roma', 'El costado más dream pop del trío: atmósfera, elegancia y pura ensoñación.']
  ],
  cover: 'assets/covers/suenostereo.jpg'
}

];
