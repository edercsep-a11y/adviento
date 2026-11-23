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
