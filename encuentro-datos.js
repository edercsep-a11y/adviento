/*
  ENCUENTRO DE ADVIENTO · Divina Data
  Contenido que completa dias.js y ruta.js para la proyección de cada noche.

  padre:  voz de los Padres de la Iglesia junto al Evangelio
          (para los días que en ruta.js aún no la tenían). Idea en nuestras palabras + fuente.
  santo:  una palabra de los santos para la meditación.
          cita: true  → frase textual (en traducción al español), entre comillas.
          cita: false → la idea del santo contada en nuestras palabras.
  ant:    antífonas «Oh» de Vísperas (17 al 23 de diciembre), en traducción propia.
*/
window.ENCUENTRO = {
  /* Contraseña de entrada (se guarda solo su huella SHA-256, no el texto). */
  claveHash: "a09725777839c6062d4d665f5637a2e0ea91671cceb874f15b9ba14dfa591d0a",
  /* true = todos los días abiertos para revisar. Cámbialo a false para que cada día
     se abra a las 12:00 a. m. (hora de Lima) de su fecha. */
  abrirTodo: true,

  signoCruz: "En el nombre del Padre, y del Hijo, y del Espíritu Santo. Amén.",
  invocacion: "Ven, Señor Jesús",
  padrenuestro: "Padre nuestro, que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en la tentación, y líbranos del mal. Amén.",

  ant: {
    "2026-12-17": "Oh Sabiduría, que brotaste de los labios del Altísimo, abarcando del uno al otro confín y ordenándolo todo con firmeza y suavidad: ven y muéstranos el camino de la salvación.",
    "2026-12-18": "Oh Adonai, Pastor de la casa de Israel, que te apareciste a Moisés en la zarza ardiente y en el Sinaí le diste tu ley: ven a librarnos con el poder de tu brazo.",
    "2026-12-19": "Oh Renuevo del tronco de Jesé, que te alzas como signo para los pueblos; ante ti los reyes enmudecen y las naciones te suplican: ven a librarnos, no tardes más.",
    "2026-12-20": "Oh Llave de David y Cetro de la casa de Israel, que abres y nadie puede cerrar, cierras y nadie puede abrir: ven y libra a los cautivos que viven en tinieblas y en sombra de muerte.",
    "2026-12-21": "Oh Sol que naces de lo alto, Resplandor de la luz eterna y Sol de justicia: ven ahora a iluminar a los que viven en tinieblas y en sombra de muerte.",
    "2026-12-22": "Oh Rey de las naciones y Deseado de los pueblos, Piedra angular que de dos pueblos haces uno solo: ven y salva al hombre que formaste del barro.",
    "2026-12-23": "Oh Emmanuel, nuestro Rey y Legislador, esperanza de las naciones y Salvador de los pueblos: ven a salvarnos, Señor Dios nuestro."
  },

  dias: {
    "2026-11-29": {
      santo: { a: "San Agustín", t: "Nos hiciste, Señor, para ti, y nuestro corazón está inquieto hasta que descanse en ti.", f: "Confesiones, libro I, 1", cita: true }
    },
    "2026-11-30": {
      padre: { q: "San Juan Crisóstomo", d: "Hace notar que Andrés, después de estar con Jesús, no guardó el tesoro para sí: corrió enseguida a buscar a su hermano Pedro para compartirlo. Así actúa quien de verdad ha encontrado al Señor.", f: "Homilías sobre el Evangelio de san Juan, 19" },
      santo: { a: "San Juan Pablo II", t: "¡No tengáis miedo! ¡Abrid, más todavía, abrid de par en par las puertas a Cristo!", f: "Homilía en el inicio de su pontificado, 22 de octubre de 1978", cita: true }
    },
    "2026-12-01": {
      padre: { q: "San León Magno", d: "Enseña que los Magos no encontraron a Cristo haciendo milagros, sino niño, en silencio, en brazos de su Madre. Cristo ama la infancia, maestra de humildad: toda su victoria comenzó en la humildad y terminó en la humildad.", f: "Sermón en la Epifanía del Señor" },
      santo: { a: "Santa Teresa del Niño Jesús", t: "Para mí, la oración es un impulso del corazón, una sencilla mirada lanzada hacia el cielo, un grito de reconocimiento y de amor, tanto en medio del sufrimiento como en medio de la alegría.", f: "Manuscrito C, 25r (Catecismo, 2558)", cita: true }
    },
    "2026-12-02": {
      padre: { q: "San Agustín", d: "Dice que nos asombra la multiplicación de los panes, pero que es mayor milagro el gobierno del mundo: Dios multiplica cada año unas pocas semillas en cosechas enteras, y como lo hace todos los días, ya no lo admiramos.", f: "Tratados sobre el Evangelio de san Juan, 24" },
      santo: { a: "San Basilio Magno", t: "Enseña que el pan que guardas sin necesidad pertenece al hambriento, y el abrigo que duerme en tu armario pertenece al que no tiene con qué cubrirse.", f: "Homilía sobre las palabras «Destruiré mis graneros»", cita: false }
    },
    "2026-12-03": {
      padre: { q: "San Agustín", d: "Explica que la roca sobre la que se edifica es Cristo, y que edifica sobre roca quien escucha sus palabras y las pone en práctica.", f: "El sermón de la montaña, libro II" },
      santo: { a: "San Francisco Javier", t: "Escribía desde la India que deseaba recorrer las universidades de Europa gritando como un loco a quienes tenían más letras que caridad, para que vinieran a anunciar a Cristo a tantos que no lo conocían.", f: "Carta a san Ignacio de Loyola desde la India", cita: false }
    },
    "2026-12-04": {
      padre: { q: "San Gregorio Magno", d: "Comenta que el ciego, cuanto más lo mandaban callar, más fuerte gritaba. Así nosotros: cuando nos asaltan las distracciones y el ruido interior, hay que insistir con más fuerza en la oración, hasta que Jesús se detenga.", f: "Homilías sobre los Evangelios, 2" },
      santo: { a: "San Agustín", t: "Tu deseo es tu oración; si el deseo es continuo, continua es también la oración.", f: "Comentario al Salmo 37, 14", cita: true }
    },
    "2026-12-05": {
      padre: { q: "San Gregorio Magno", d: "Se duele de que la mies sea mucha y los obreros pocos: muchos han recibido el encargo, pero pocos trabajan de verdad en el campo del Señor. Nos pide no quedarnos dormidos en la tarea.", f: "Homilías sobre los Evangelios, 17" },
      santo: { a: "Santa Rosa de Lima", t: "Fuera de la cruz no hay otra escala por donde subir al cielo.", f: "Citada en el Catecismo de la Iglesia Católica, 618", cita: true }
    },
    "2026-12-06": {
      santo: { a: "San Carlos Borromeo", t: "Enseña que la Iglesia quiere que en este tiempo recordemos el inmenso amor de Dios que vino a nosotros, y que preparemos el alma, porque Cristo desea venir a ella cada día.", f: "Carta pastoral sobre el Adviento", cita: false }
    },
    "2026-12-07": {
      padre: { q: "San Ambrosio", d: "Comenta que grande es el Señor, que por la fe de unos perdona a otros. Por eso, si tu fe es débil, apóyate en la fe de los hermanos; y cuando puedas, sé tú la camilla que lleva a otro hasta Jesús.", f: "Exposición del Evangelio según san Lucas, libro V" },
      santo: { a: "San Ambrosio", t: "Cristo lo es todo para nosotros: si quieres curar tus heridas, es médico; si te abrasa la fiebre, es fuente; si temes la muerte, es la vida; si huyes de las tinieblas, es la luz; si buscas alimento, es el pan.", f: "Sobre la virginidad, 16, 99", cita: true }
    },
    "2026-12-08": {
      santo: { a: "La Virgen María a santa Bernadette", t: "Yo soy la Inmaculada Concepción.", f: "Lourdes, 25 de marzo de 1858", cita: true }
    },
    "2026-12-09": {
      padre: { q: "San Agustín", d: "Explica que el yugo de Cristo es suave porque el amor hace ligero lo pesado: lo que agobia al que no ama, se vuelve fácil para el que ama.", f: "Sermón 70" },
      santo: { a: "San Pío de Pietrelcina", t: "Reza, espera y no te preocupes.", f: "Consejo que repetía a sus hijos espirituales", cita: true }
    },
    "2026-12-10": {
      padre: { q: "San Gregorio Magno", d: "Enseña que Juan es más que profeta porque los profetas anunciaban al que había de venir, y Juan, además, lo señaló presente: «Este es».", f: "Homilías sobre los Evangelios, 6" },
      santo: { a: "San Agustín", t: "¿Quieres ser grande? Comienza por ser pequeño.", f: "Sermón 69, 2", cita: true }
    },
    "2026-12-11": {
      padre: { q: "San Agustín", d: "Dice: «Temo a Jesús que pasa y no vuelve». El Señor pasa hoy junto a nosotros; no dejemos para mañana la conversión con excusas.", f: "Sermón 88" },
      santo: { a: "Santa Teresa de Jesús", t: "Una muy determinada determinación de no parar hasta llegar.", f: "Camino de perfección, 21, 2", cita: true }
    },
    "2026-12-12": {
      padre: { q: "San Beda el Venerable", d: "Explica que María engrandece al Señor porque reconoce que todo lo ha recibido de Él. Quien vive en humildad, hace grande a Dios en su propia vida.", f: "Homilía sobre el Magníficat" },
      santo: { a: "Santa María de Guadalupe a san Juan Diego", t: "¿No estoy yo aquí, que soy tu madre?", f: "Nican Mopohua", cita: true }
    },
    "2026-12-13": {
      santo: { a: "San Francisco de Asís", t: "Enseñó al hermano León que la perfecta alegría no está en el éxito ni en los milagros, sino en soportar con paciencia y amor, por Cristo, lo que nos cuesta.", f: "Florecillas, capítulo 8", cita: false }
    },
    "2026-12-14": {
      santo: { a: "San Juan de la Cruz", t: "A la tarde te examinarán en el amor.", f: "Dichos de luz y amor, 59", cita: true }
    },
    "2026-12-15": {
      padre: { q: "San Juan Crisóstomo", d: "Ve en los dos hijos a quienes parecían lejos, como los publicanos y los paganos, que dijeron no pero se convirtieron; y a quienes decían sí con los labios, pero no obedecieron. Nadie está tan lejos que no pueda volver.", f: "Homilías sobre el Evangelio de san Mateo, 67" },
      santo: { a: "San Juan María Vianney, el Cura de Ars", t: "Enseñaba que no es el pecador quien vuelve primero a Dios para pedirle perdón: es Dios quien corre tras el pecador y lo hace volver a Él.", f: "Citado por Benedicto XVI, Carta para el Año Sacerdotal (2009)", cita: false }
    },
    "2026-12-16": {
      padre: { q: "San Juan Crisóstomo", d: "Explica que Juan no dudaba de Jesús: envió a sus discípulos para que ellos mismos lo vieran, escucharan sus obras y lo siguieran.", f: "Homilías sobre el Evangelio de san Mateo, 36" },
      santo: { a: "San Ignacio de Loyola", t: "El amor se debe poner más en las obras que en las palabras.", f: "Ejercicios espirituales, 230", cita: true }
    },
    "2026-12-17": {
      padre: { q: "San León Magno", d: "Contempla el misterio de nuestra reconciliación: el Hijo de Dios, sin dejar de ser lo que era, asumió lo que no era. Verdadero Dios y verdadero hombre, entró en nuestra historia real para salvarnos.", f: "Carta 31" },
      santo: { a: "Santa Teresa del Niño Jesús", t: "Todo es gracia.", f: "Últimas conversaciones, 5 de junio de 1897", cita: true }
    },
    "2026-12-18": {
      padre: { q: "San Bernardo", d: "Compara a san José con el antiguo José de Egipto: siervo fiel y prudente, a quien Dios confió el cuidado de su Madre y la protección de su Hijo.", f: "Homilía 2 sobre las excelencias de la Virgen Madre" },
      santo: { a: "Santa Teresa de Jesús", t: "No me acuerdo hasta ahora haberle suplicado cosa que la haya dejado de hacer.", f: "Libro de la Vida, 6, 6 (sobre san José)", cita: true }
    },
    "2026-12-19": {
      padre: { q: "San Ireneo de Lyon", d: "Enseña que Dios, con paciencia de Padre, fue acostumbrando poco a poco al hombre a recibir a Dios, y a Dios a habitar en el hombre.", f: "Contra las herejías, libro III, 20" },
      santo: { a: "San Agustín", t: "¡Tarde te amé, hermosura tan antigua y tan nueva, tarde te amé!", f: "Confesiones, libro X, 27", cita: true }
    },
    "2026-12-20": {
      santo: { a: "Santa Teresa de Jesús", t: "Vuestra soy, para vos nací: ¿qué mandáis hacer de mí?", f: "Poesías", cita: true }
    },
    "2026-12-21": {
      padre: { q: "Orígenes", d: "Contempla que, al llegar María con Jesús en su seno, Juan saltó de gozo e Isabel quedó llena del Espíritu Santo: la presencia de Jesús, llevada por María, santifica la casa que visita.", f: "Homilías sobre el Evangelio de san Lucas, 7" },
      santo: { a: "San Luis María Grignion de Montfort", t: "Enseña que llegamos a Jesús de la manera más segura por María, porque ella nunca se queda con nada: todo lo lleva a su Hijo.", f: "Tratado de la verdadera devoción a la Santísima Virgen", cita: false }
    },
    "2026-12-22": {
      santo: { a: "San Francisco de Asís", t: "Salve, Señora, santa Reina, santa Madre de Dios, María, que eres virgen hecha iglesia.", f: "Saludo a la Bienaventurada Virgen María", cita: true }
    },
    "2026-12-23": {
      padre: { q: "San Ambrosio", d: "Comenta que con razón se desató la lengua de Zacarías: la había atado la incredulidad y la desató la fe.", f: "Exposición del Evangelio según san Lucas, libro II" },
      santo: { a: "San Juan de la Cruz", t: "Donde no hay amor, ponga amor, y sacará amor.", f: "Carta a la M. María de la Encarnación (1591)", cita: true }
    },
    "2026-12-24": {
      padre: { q: "San Agustín", d: "Nos dice en la víspera de Navidad: «Despierta, hombre, porque por ti Dios se hizo hombre». Si Él no hubiera nacido en el tiempo, tú habrías muerto para siempre.", f: "Sermón 185" },
      santo: { a: "San León Magno", t: "Reconoce, cristiano, tu dignidad.", f: "Sermón 1 en la Natividad del Señor", cita: true }
    }
  }
};

/* LECTURA DE LOS PADRES · una por día, con la misma estructura:
   enc:   encabezado al estilo del Oficio de Lectura
   tema:  título de la lectura
   texto: la enseñanza del Padre, contada en nuestras palabras y fiel a su obra
   clave: frase central (cita: true = frase textual en traducción; false = la idea en nuestras palabras)
   vida:  para nuestra vida, hoy */
window.ENCUENTRO.patristica = {
  "2026-11-29": { enc: "De las catequesis de san Cirilo de Jerusalén, obispo", tema: "Las dos venidas de Cristo",
    texto: "San Cirilo enseñaba a quienes se preparaban para el bautismo que no anunciamos una sola venida de Cristo, sino dos. En la primera vino escondido y humilde, envuelto en pañales en un pesebre; en la segunda vendrá con gloria, rodeado de ángeles. En la primera aceptó la cruz sin rechazar la humillación; en la segunda vendrá como juez de vivos y muertos. Por eso la Iglesia vive entre las dos: agradecida por la que ya sucedió y despierta ante la que vendrá.",
    clave: { t: "Anunciamos la venida de Cristo, y no solo la primera, sino también la segunda, mucho más gloriosa.", cita: true },
    vida: "Velar es vivir hoy de tal manera que, si el Señor viniera esta noche, nos encuentre amando." },
  "2026-11-30": { enc: "De las homilías de san Juan Crisóstomo, obispo, sobre el Evangelio de san Juan", tema: "Andrés lleva a su hermano a Jesús",
    texto: "San Juan Crisóstomo se detiene en la prisa de Andrés. Después de pasar aquel día con Jesús, no guarda para sí lo que ha descubierto: corre a buscar a su hermano Simón. Ve en ello la señal de un amor fraterno verdadero y de un alma que de verdad ha encontrado lo que buscaba. Andrés no hace un largo discurso; dice lo esencial, «Hemos encontrado al Mesías», y lleva a su hermano hasta Jesús. Así comienza toda misión: compartiendo con los nuestros el tesoro recibido.",
    clave: { t: "Quien de verdad ha encontrado a Cristo no puede guardarlo para sí.", cita: false },
    vida: "Piensa en un hermano, un amigo o un compañero, y cuéntale hoy con sencillez lo que Jesús hace en tu vida." },
  "2026-12-01": { enc: "De los sermones de san León Magno, papa, en la Epifanía del Señor", tema: "Cristo ama la infancia",
    texto: "San León observa que los Magos no encontraron a Cristo resucitando muertos ni dando la vista a los ciegos, sino niño, en silencio, en brazos de su Madre. Aquel Niño predicaba sin palabras: lo que su voz aún no decía, lo enseñaba su humildad. Toda la victoria del Salvador sobre el mal comenzó en la humildad y en la humildad se consumó. Por eso Cristo ama la infancia: la sencillez del corazón que confía, que no se impone y que se deja enseñar.",
    clave: { t: "Cristo ama la infancia, maestra de humildad.", cita: true },
    vida: "Hazte pequeño hoy en algo concreto: pide perdón, pide ayuda o deja que otro tenga la razón." },
  "2026-12-02": { enc: "De los tratados de san Agustín, obispo, sobre el Evangelio de san Juan", tema: "Los milagros de cada día",
    texto: "San Agustín explica que la multiplicación de los panes nos asombra porque es rara, pero que es mayor milagro el gobierno de todo el mundo. Con unas pocas semillas Dios llena cada año los campos de cosechas, y como lo hace todos los días, ya no lo admiramos. Por eso el Señor, en ciertos momentos, hizo obras extraordinarias: para despertar a los que dormían ante sus maravillas de siempre. Los milagros de Jesús son también palabras: nos enseñan a mirar con gratitud el pan de cada día.",
    clave: { t: "Los milagros de Jesús hablan: hay que saber leerlos como palabras.", cita: false },
    vida: "Antes de comer hoy, detente un momento a dar gracias por el pan y por quienes lo hicieron posible." },
  "2026-12-03": { enc: "Del comentario de san Agustín, obispo, al Sermón de la montaña", tema: "Edificar sobre la roca",
    texto: "Al terminar su comentario al Sermón de la montaña, san Agustín se detiene en la casa construida sobre roca. La roca es Cristo, y edifica sobre ella quien no se contenta con escuchar sus palabras, sino que las pone en práctica. La lluvia, los ríos y los vientos son las pruebas de la vida: no se pueden evitar, pero no derriban la casa fundada en Cristo. La fe que solo escucha se queda en arena; la fe que obra se vuelve roca.",
    clave: { t: "Escuchar sin cumplir es edificar sobre arena.", cita: false },
    vida: "Elige una palabra del Evangelio de estos días y ponla en práctica hoy, aunque sea en algo pequeño." },
  "2026-12-04": { enc: "De las homilías de san Gregorio Magno, papa, sobre los Evangelios", tema: "La oración que insiste",
    texto: "San Gregorio comenta la curación del ciego que gritaba junto al camino. La gente que iba delante lo mandaba callar, pero él gritaba más fuerte. Gregorio ve en esa gente los pensamientos y distracciones que se agolpan en el corazón cuando queremos orar y nos dicen que no vale la pena. Cuanto más nos asaltan, más debemos insistir; entonces Jesús se detiene, nos llama y nos devuelve la luz.",
    clave: { t: "Cuando crece el ruido interior, la oración debe hacerse más fuerte.", cita: false },
    vida: "Repite hoy varias veces la oración del ciego: «Jesús, Hijo de David, ten compasión de mí»." },
  "2026-12-05": { enc: "De las homilías de san Gregorio Magno, papa, sobre los Evangelios", tema: "La mies es mucha",
    texto: "San Gregorio se duele de que haya muchos que han recibido un encargo en la Iglesia y, sin embargo, sean pocos los que trabajan de verdad en la mies del Señor. Recuerda que Jesús envía a sus discípulos de dos en dos, porque nadie ama solo: la caridad siempre mira a otro. Y pide vivir el servicio no como un honor, sino como una tarea de la que daremos cuentas. También hoy la mies es mucha y el Señor busca obreros.",
    clave: { t: "El Señor los envía de dos en dos, porque la caridad no puede darse entre menos de dos.", cita: true },
    vida: "Ofrece al Señor una tarea concreta en tu parroquia o en tu casa, y hazla junto con alguien." },
  "2026-12-06": { enc: "Del comentario de Eusebio de Cesarea, obispo, sobre el libro de Isaías", tema: "La voz en el desierto",
    texto: "Eusebio explica que la profecía de la voz que grita en el desierto se cumplió cuando Juan predicó junto al Jordán. El desierto no era solo un lugar: era la humanidad seca y sin camino, que esperaba que Dios viniera a visitarla. Por eso el anuncio comienza allí, donde parecía no haber nada. Preparar el camino del Señor es abrir, en nuestro propio desierto, un sendero por donde Dios pueda llegar.",
    clave: { t: "Dios empieza a hablar en el desierto, donde parecía no haber nada.", cita: false },
    vida: "Mira con fe el lugar más seco de tu vida y ofréceselo hoy a Dios como camino." },
  "2026-12-07": { enc: "De la exposición de san Ambrosio, obispo, sobre el Evangelio de san Lucas", tema: "La fe de los amigos",
    texto: "San Ambrosio contempla al paralítico bajado por el techo y admira la grandeza del Señor, que por la fe de unos perdona a otros. Si alguno duda de que sus pecados puedan ser perdonados, que se apoye en la oración de la Iglesia y de los hermanos. El Señor no mira solo la fe del enfermo, sino la de quienes lo cargan; por eso nadie se salva solo, y todos podemos ser camilla para otro. Primero le perdona los pecados y después lo cura: lo más hondo es sanar el alma.",
    clave: { t: "Grande es el Señor, que por el mérito de unos perdona a otros.", cita: true },
    vida: "Reza hoy, con nombre propio, por alguien que no puede o no quiere acercarse a Dios." },
  "2026-12-08": { enc: "De los sermones de san Anselmo, obispo", tema: "Madre de la creación renovada",
    texto: "San Anselmo canta que el cielo, la tierra y todas las criaturas se alegran por María, porque por ella han recobrado su belleza original. Dios creó todas las cosas, y María dio a luz al que todo lo renueva. Así, Dios es Padre de la creación, y María es madre de la creación renovada en Cristo. Preservada del pecado desde su concepción, es la primera en quien brilla la vida nueva que Dios quiere para todos.",
    clave: { t: "Dios es Padre de todas las cosas creadas, y María es madre de todas las cosas recreadas.", cita: true },
    vida: "Reza hoy un Avemaría despacio, pidiendo a María un corazón limpio para recibir a Jesús." },
  "2026-12-09": { enc: "De los sermones de san Agustín, obispo", tema: "El yugo suave",
    texto: "San Agustín se pregunta cómo puede ser suave un yugo y ligera una carga, si el camino del Evangelio exige tanto. Responde que el amor lo cambia todo: lo que es áspero y pesado para quien no ama, se vuelve fácil para quien ama. Lo vemos en quienes se esfuerzan sin descanso por aquello que quieren; con cuánta mayor razón lo hace el amor de Dios. No se trata de cargar menos, sino de cargar con Él.",
    clave: { t: "El amor vuelve fáciles, y casi nada, las cosas más duras.", cita: true },
    vida: "Haz hoy por amor una tarea que sueles hacer a disgusto, y ofrécesela a Jesús." },
  "2026-12-10": { enc: "De las homilías de san Gregorio Magno, papa, sobre los Evangelios", tema: "Más que profeta",
    texto: "San Gregorio explica por qué Jesús llama a Juan «más que profeta». Los profetas anunciaban al que había de venir; Juan, además, lo señaló presente: «Este es el Cordero de Dios». Su grandeza no está en lo que dice de sí mismo, sino en que sabe apartarse para que todos miren a Cristo. Por eso Juan se mantuvo en la santidad: porque permaneció humilde.",
    clave: { t: "Juan es más que profeta, porque al que había anunciado lo mostró presente.", cita: true },
    vida: "Ayuda hoy a alguien a mirar a Jesús, sin ponerte tú en el centro." },
  "2026-12-11": { enc: "De los sermones de san Agustín, obispo", tema: "Jesús que pasa",
    texto: "Comentando a los ciegos de Jericó, san Agustín recuerda que Jesús pasa: pasa por nuestra vida en su Palabra, en sus sacramentos y en los hermanos. Los ciegos gritaron mientras pasaba y no lo dejaron ir. Por eso Agustín confiesa que teme a Jesús que pasa: no porque el Señor sea duro, sino porque nosotros podemos dejar pasar el momento con excusas. La conversión no se deja para mañana.",
    clave: { t: "Temo a Jesús que pasa.", cita: true },
    vida: "No dejes para mañana lo que Dios te pide hoy: esa llamada, esa confesión, ese perdón." },
  "2026-12-12": { enc: "De las homilías de san Beda el Venerable, presbítero", tema: "Proclama mi alma la grandeza del Señor",
    texto: "San Beda explica que María engrandece al Señor porque reconoce que todo lo ha recibido de Él: no se gloría de sí misma, sino de lo que Dios hizo en su pequeñez. Quien vive así, en humildad y gratitud, hace grande a Dios en su propia vida. Beda recuerda que la Iglesia canta este cántico cada tarde en las Vísperas, para que su memoria encienda en nosotros la misma alabanza.",
    clave: { t: "Engrandece al Señor quien reconoce que todo lo ha recibido de Él.", cita: false },
    vida: "Como María en el Tepeyac, acércate hoy a alguien sencillo y hazle sentir que Dios lo mira con amor." },
  "2026-12-13": { enc: "De los sermones de san Agustín, obispo", tema: "La voz y la Palabra",
    texto: "San Agustín compara a Juan con la voz y a Cristo con la Palabra. Cuando quiero decirte algo, la palabra nace primero en mi corazón; la voz la lleva hasta ti y luego pasa, pero la palabra queda en los dos. Así Juan, la voz, pasó; Cristo, la Palabra que existe desde el principio, permanece. Por eso la alegría de Juan es disminuir para que Cristo crezca.",
    clave: { t: "Juan era la voz por un tiempo; Cristo es la Palabra eterna desde el principio.", cita: true },
    vida: "Sé hoy voz de Jesús con una palabra de ánimo para alguien que está triste." },
  "2026-12-14": { enc: "De la Subida del Monte Carmelo, de san Juan de la Cruz, presbítero", tema: "Dios nos lo dijo todo en su Hijo",
    texto: "San Juan de la Cruz enseña que, al darnos a su Hijo, Dios nos habló de una vez y para siempre. Quien todavía quisiera pedirle visiones o revelaciones nuevas le haría agravio, porque no pondría los ojos totalmente en Cristo. El Padre nos dice: míralo a Él, porque en Él te lo he dicho y revelado todo. El Adviento es aprender a escuchar y a mirar solo a Cristo.",
    clave: { t: "Todo nos lo habló junto y de una vez en esta sola Palabra, y no tiene más que hablar.", cita: true },
    vida: "Quédate quince minutos en silencio mirando a Jesús en el Evangelio o en el Sagrario." },
  "2026-12-15": { enc: "De las homilías de san Juan Crisóstomo, obispo, sobre el Evangelio de san Mateo", tema: "Decir sí con la vida",
    texto: "San Juan Crisóstomo ve en los dos hijos a dos pueblos: los que parecían lejos, como los publicanos y los paganos, que primero dijeron no y después obedecieron; y los que decían sí con los labios, pero no hicieron la voluntad del Padre. Jesús muestra así que nadie está tan lejos que no pueda volver, y que nadie está tan seguro que no pueda perderse. Lo que agrada al Padre no es la promesa, sino la obediencia.",
    clave: { t: "Lo que agrada al Padre no es la promesa, sino la obediencia.", cita: false },
    vida: "Cumple hoy algo que prometiste a Dios o a alguien y todavía no has hecho." },
  "2026-12-16": { enc: "De las homilías de san Juan Crisóstomo, obispo, sobre el Evangelio de san Mateo", tema: "¿Eres tú el que ha de venir?",
    texto: "San Juan Crisóstomo explica que Juan, desde la cárcel, no dudaba de Jesús: lo había reconocido desde el seno de su madre. Envía a sus discípulos para que ellos mismos lo vean, escuchen sus obras y se queden con Él. Y Jesús no responde con un título, sino con hechos: los ciegos ven, los pobres reciben la buena noticia. Así se reconoce a Dios: por las vidas que transforma.",
    clave: { t: "Jesús no responde con títulos, sino con obras.", cita: false },
    vida: "Haz hoy una obra de misericordia concreta, sin anunciarla." },
  "2026-12-17": { enc: "De las cartas de san León Magno, papa", tema: "El misterio de nuestra reconciliación",
    texto: "San León enseña que de nada nos serviría que Cristo fuera solo Dios o solo hombre. Si no fuera verdadero Dios, no podría salvarnos; si no fuera verdadero hombre, no sería uno de nosotros. Por eso el Hijo de Dios entró en nuestra historia real, con una genealogía de santos y de pecadores, y tomó nuestra naturaleza para reconciliarla con el Padre. Sin dejar de ser lo que era, asumió lo que no era.",
    clave: { t: "Verdadero Dios para salvarnos, verdadero hombre para ser uno de nosotros.", cita: false },
    vida: "Da gracias por tu historia familiar y pon en manos de Dios lo que en ella necesita reconciliación." },
  "2026-12-18": { enc: "De las homilías de san Bernardo, abad, sobre las excelencias de la Virgen Madre", tema: "José, el siervo fiel",
    texto: "San Bernardo compara a san José con el antiguo José de Egipto. Aquel guardó el trigo para alimentar a su pueblo; este recibió en custodia el Pan vivo bajado del cielo, para sí y para el mundo entero. Dios lo eligió como siervo fiel y prudente, y le confió el consuelo de su Madre y el cuidado de su Hijo. José no dice una sola palabra en el Evangelio, pero su fidelidad habla por él.",
    clave: { t: "Aquel José guardó el trigo; este custodió el Pan vivo bajado del cielo.", cita: false },
    vida: "Haz hoy un servicio escondido por tu familia, sin esperar que nadie lo note." },
  "2026-12-19": { enc: "Del tratado de san Ireneo, obispo, Contra las herejías", tema: "La paciencia de Dios",
    texto: "San Ireneo contempla la larga historia de la salvación como la pedagogía de un Padre. Dios fue acostumbrando poco a poco al hombre a recibir a Dios, y a Dios a habitar en el hombre. En la debilidad humana se manifiesta el poder de Dios, como en Zacarías e Isabel, a quienes respondió después de muchos años de oración. Nada se pierde de esa espera: el que espera en Dios no espera en vano.",
    clave: { t: "Dios acostumbra al hombre a recibirlo, y se acostumbra Él a habitar en el hombre.", cita: false },
    vida: "Persevera hoy en esa oración que llevas tiempo haciendo sin ver todavía la respuesta." },
  "2026-12-20": { enc: "De las homilías de san Bernardo, abad, sobre las excelencias de la Virgen Madre", tema: "Responde, Virgen",
    texto: "San Bernardo imagina a toda la humanidad pendiente de los labios de María: Adán y su descendencia, los patriarcas y los profetas, el mundo entero espera su respuesta. De su sí depende el consuelo de los afligidos, la libertad de los cautivos y la salvación de todos. Por eso le suplica que no tarde: que abra el corazón a la fe, los labios al consentimiento y las entrañas al Creador.",
    clave: { t: "Responde una palabra y recibe la Palabra.", cita: true },
    vida: "Dile hoy a Dios tu propio sí en eso que te cuesta." },
  "2026-12-21": { enc: "De las homilías de Orígenes, presbítero, sobre el Evangelio de san Lucas", tema: "La visita que santifica",
    texto: "Orígenes contempla a María que se levanta y va de prisa a la montaña. Lleva en su seno a Jesús, y al llegar, la casa de Zacarías se llena de gracia: Juan salta de gozo e Isabel queda llena del Espíritu Santo. No es María quien santifica por sí misma, sino Jesús, a quien ella lleva. Cuando Cristo entra en una casa, todo en ella se renueva.",
    clave: { t: "Quien lleva a Jesús, lleva la alegría a donde llega.", cita: false },
    vida: "Visita o llama hoy a alguien que está solo, y llévale a Jesús con tu presencia." },
  "2026-12-22": { enc: "De la exposición de san Ambrosio, obispo, sobre el Evangelio de san Lucas", tema: "El alma de María",
    texto: "San Ambrosio comenta el Magníficat y desea que el alma de María esté en cada uno de nosotros para glorificar al Señor, y su espíritu para alegrarse en Dios. Según la carne, Cristo tiene una sola madre; pero según la fe, Cristo es fruto de todos, porque toda alma que cree recibe la Palabra de Dios y la guarda. Quien acoge la Palabra con fe concibe a Cristo en su corazón y lo da a luz en sus obras.",
    clave: { t: "Que en cada uno esté el alma de María para glorificar al Señor.", cita: true },
    vida: "Escribe tres cosas por las que hoy puedes decir: «Proclama mi alma la grandeza del Señor»." },
  "2026-12-23": { enc: "De la exposición de san Ambrosio, obispo, sobre el Evangelio de san Lucas", tema: "La lengua desatada",
    texto: "San Ambrosio explica que con razón se desató la lengua de Zacarías: la había atado la incredulidad y la desató la fe. Mientras dudaba, quedó mudo; cuando obedeció y escribió el nombre que Dios había elegido, recobró la voz para bendecir. El primer fruto de la fe es la alabanza. Así también nosotros: cuando dejamos de discutir con Dios y le obedecemos, el corazón se abre para cantar.",
    clave: { t: "La había atado la incredulidad, y la desató la fe.", cita: true },
    vida: "Reconcíliate hoy con alguien, y deja que tu boca vuelva a bendecir." },
  "2026-12-24": { enc: "De los sermones de san Agustín, obispo", tema: "Por ti Dios se hizo hombre",
    texto: "En la víspera de Navidad, san Agustín nos sacude: despierta, hombre, porque por ti Dios se hizo hombre. Estarías muerto para siempre si Él no hubiera nacido en el tiempo; nunca habrías quedado libre del pecado si Él no hubiera tomado una carne semejante a la tuya. La verdad brotó de la tierra cuando Cristo nació de la Virgen. Celebremos con alegría el día en que el Grande se hizo pequeño por nosotros.",
    clave: { t: "Despierta, hombre: por ti Dios se hizo hombre.", cita: true },
    vida: "Esta noche, antes de la cena, lean en familia el Evangelio del nacimiento (Lc 2,1-14) y den gracias juntos." }
};
