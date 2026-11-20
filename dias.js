/*
  ADVIENTO 2026 · DÍA A DÍA · Divina Data
  ---------------------------------------
  Para publicar el video de introducción: pega el enlace en  introVideo: ""  (abajo).
  Para publicar el video de un día: copia el enlace de YouTube y pégalo
  entre las comillas de  video: ""  de ese día. Ejemplo:
      video: "https://youtu.be/AbCdEfGhIjk"
  Sirve cualquier enlace de YouTube (youtu.be, youtube.com/watch?v=, shorts).
  El día se abre solo en su fecha (hora de Lima).

  Lecturas: Calendario litúrgico de la Conferencia Episcopal Peruana
  (numeración de salmos del Leccionario). Domingos: ciclo B.
*/
window.ADVIENTO = {
  /* Video de introducción (enlace de YouTube): */
  introVideo: "",
  /* Enlace que se comparte por WhatsApp (página oficial de Divina Data): */
  paginaOficial: "https://www.divinadataoficial.com/#adviento",
  /* Grupo de WhatsApp (oración cada noche a las 10:00 p. m.): */
  grupo: "https://chat.whatsapp.com/DhPlqGsIb1p7mvw0WoxptL",
  inicio: "2026-11-29",
  fin: "2026-12-24",
  semanas: [
    { n: 1, nombre: "Velar", desde: "2026-11-29", texto: "Jesús nos pide estar despiertos. Empezamos encendiendo la primera vela y aprendiendo a esperar." },
    { n: 2, nombre: "Preparar el camino", desde: "2026-12-06", texto: "Juan el Bautista grita en el desierto. Es la semana de enderezar lo torcido y volver a Dios." },
    { n: 3, nombre: "Alegrarse", desde: "2026-12-13", texto: "El Señor está cerca. La vela rosa nos recuerda que la espera cristiana es alegre." },
    { n: 4, nombre: "Acoger", desde: "2026-12-20", texto: "Con María y José, abrimos la casa y el corazón. Navidad está a la puerta." }
  ],
  dias: [
    { f: "2026-11-29", cel: "I Domingo de Adviento", rango: "Domingo", color: "morado",
      titulo: "Velen: el Señor viene",
      lects: [["1.ª lectura", "Is 63,16b-17.19b; 64,2b-7"], ["Salmo", "Sal 79"], ["2.ª lectura", "1Cor 1,3-9"], ["Evangelio", "Mc 13,33-37"]],
      aprende: { t: "¿Qué es el Adviento?", p: "Adviento viene del latín adventus: llegada, venida. Con este domingo empieza un nuevo año litúrgico para la Iglesia, y con él un camino de cuatro semanas hacia la Navidad." },
      vivir: "Enciende hoy la primera vela de tu corona, o una vela en casa, y reza un Padrenuestro en familia.",
      video: "" },

    { f: "2026-11-30", cel: "San Andrés, apóstol", rango: "Fiesta", color: "rojo",
      titulo: "Andrés deja las redes",
      lects: [["1.ª lectura", "Rom 10,9-18"], ["Salmo", "Sal 18"], ["Evangelio", "Mt 4,18-22"]],
      aprende: { t: "Santos en pleno Adviento", p: "Aunque estemos en Adviento, la Iglesia celebra a algunos santos. Hoy es fiesta de san Andrés, el hermano de Pedro, uno de los primeros que siguieron a Jesús. Por eso el color de hoy es el rojo de los apóstoles." },
      vivir: "Piensa en una persona a la que puedas acercar a Jesús, como Andrés llevó a su hermano, y escríbele hoy.",
      video: "" },

    { f: "2026-12-01", cel: "Martes de la I semana de Adviento", rango: "Feria", color: "morado",
      titulo: "Lo revelaste a los pequeños",
      lects: [["1.ª lectura", "Is 11,1-10"], ["Salmo", "Sal 71"], ["Evangelio", "Lc 10,21-24"]],
      aprende: { t: "Dos venidas en un mismo tiempo", p: "El Adviento tiene un doble sentido: nos prepara para celebrar la primera venida de Jesús en Belén y renueva la espera de su segunda venida al final de los tiempos." },
      vivir: "Haz hoy una oración sencilla, con tus propias palabras, como la de un niño que confía.",
      video: "" },

    { f: "2026-12-02", cel: "Miércoles de la I semana de Adviento", rango: "Feria", color: "morado",
      titulo: "Siete panes para una multitud",
      lects: [["1.ª lectura", "Is 25,6-10a"], ["Salmo", "Sal 22"], ["Evangelio", "Mt 15,29-37"]],
      aprende: { t: "¿Por qué el morado?", p: "El morado es el color de la espera y la preparación. En el Adviento no expresa tristeza: nos invita a recogernos y a preparar el corazón para lo que viene." },
      vivir: "Comparte hoy algo de tu mesa: un plato, un pan o una invitación a quien está solo.",
      video: "" },

    { f: "2026-12-03", cel: "San Francisco Javier, presbítero", rango: "Memoria", color: "blanco",
      titulo: "Una casa sobre roca",
      lects: [["1.ª lectura", "Is 26,1-6"], ["Salmo", "Sal 117"], ["Evangelio", "Mt 7,21.24-27"]],
      aprende: { t: "El patrono de las misiones", p: "San Francisco Javier, compañero de san Ignacio de Loyola, llevó el Evangelio hasta la India y Japón. La Iglesia lo celebra como patrono de las misiones." },
      vivir: "Elige una cosa concreta que vas a cumplir todo el Adviento. Esa será tu roca.",
      video: "" },

    { f: "2026-12-04", cel: "Viernes de la I semana de Adviento", rango: "Feria", color: "morado",
      titulo: "Dos ciegos que gritan",
      lects: [["1.ª lectura", "Is 29,17-24"], ["Salmo", "Sal 26"], ["Evangelio", "Mt 9,27-31"]],
      aprende: { t: "La corona de Adviento", p: "La corona nació en el siglo XIX en Alemania y se extendió por todo el mundo. Su forma redonda habla de la eternidad de Dios; el verde, de la vida y la esperanza; cada vela, de una semana más cerca de la luz." },
      vivir: "Pídele hoy a Jesús que te cure de una ceguera: algo que no quieres ver en tu vida.",
      video: "" },

    { f: "2026-12-05", cel: "Sábado de la I semana de Adviento", rango: "Feria", color: "morado",
      titulo: "La mies es mucha",
      lects: [["1.ª lectura", "Is 30,18-21.23-26"], ["Salmo", "Sal 146"], ["Evangelio", "Mt 9,35–10,1.6-8"]],
      aprende: { t: "Isaías, el profeta del Adviento", p: "En estos días casi todas las primeras lecturas son del profeta Isaías. Él anunció, siglos antes, al Mesías que vendría: por eso es la voz que más escuchamos en el Adviento." },
      vivir: "Ofrece una hora de tu fin de semana a tu parroquia o a alguien que necesite ayuda.",
      video: "" },

    { f: "2026-12-06", cel: "II Domingo de Adviento", rango: "Domingo", color: "morado",
      titulo: "Preparen el camino",
      lects: [["1.ª lectura", "Is 40,1-5.9-11"], ["Salmo", "Sal 84"], ["2.ª lectura", "2Pe 3,8-14"], ["Evangelio", "Mc 1,1-8"]],
      aprende: { t: "Juan el Bautista", p: "Juan es el último de los profetas y el precursor: el que va delante para preparar el camino del Señor. Por eso aparece en los domingos de Adviento." },
      vivir: "Enciende la segunda vela. Identifica un camino torcido en tu vida y da hoy un paso para enderezarlo.",
      video: "" },

    { f: "2026-12-07", cel: "San Ambrosio, obispo y doctor de la Iglesia", rango: "Memoria", color: "blanco",
      titulo: "Por el techo, hasta Jesús",
      lects: [["1.ª lectura", "Is 35,1-10"], ["Salmo", "Sal 84"], ["Evangelio", "Lc 5,17-26"]],
      aprende: { t: "San Ambrosio y su himno", p: "San Ambrosio fue obispo de Milán en el siglo IV y ayudó a la conversión de san Agustín. Se le atribuye el antiguo himno de Adviento «Veni, Redemptor gentium»: Ven, Redentor de los pueblos." },
      vivir: "Sé hoy como los amigos del paralítico: lleva a alguien a Jesús con una oración o una visita.",
      video: "" },

    { f: "2026-12-08", cel: "La Inmaculada Concepción de la Santísima Virgen María", rango: "Solemnidad · día de precepto", color: "blanco",
      titulo: "Llena de gracia",
      lects: [["1.ª lectura", "Gn 3,9-15.20"], ["Salmo", "Sal 97"], ["2.ª lectura", "Ef 1,3-6.11-12"], ["Evangelio", "Lc 1,26-38"]],
      aprende: { t: "¿Qué celebramos hoy?", p: "Que María, desde el primer instante de su existencia, fue preservada del pecado original. El papa Pío IX lo proclamó como dogma en 1854. Es día de precepto: los católicos participamos en la Misa." },
      vivir: "Participa hoy en la Santa Misa y reza un Avemaría por tu familia.",
      video: "" },

    { f: "2026-12-09", cel: "Miércoles de la II semana de Adviento", rango: "Feria", color: "morado",
      titulo: "Vengan a mí, los cansados",
      lects: [["1.ª lectura", "Is 40,25-31"], ["Salmo", "Sal 102"], ["Evangelio", "Mt 11,28-30"]],
      aprende: { t: "La venida de cada día", p: "San Bernardo habló de tres venidas del Señor: en Belén, al final de los tiempos y, entre las dos, la venida silenciosa de cada día a quien lo recibe." },
      vivir: "Entrégale a Jesús un cansancio concreto y regálate cinco minutos de silencio con Él.",
      video: "" },

    { f: "2026-12-10", cel: "Jueves de la II semana de Adviento", rango: "Feria", color: "morado",
      titulo: "Juan, el más grande",
      lects: [["1.ª lectura", "Is 41,13-20"], ["Salmo", "Sal 144"], ["Evangelio", "Mt 11,11-15"]],
      aprende: { t: "¿Por qué no se canta el Gloria?", p: "En los domingos de Adviento no se canta el Gloria. Lo guardamos para que resuene con toda su fuerza en la Navidad, cuando los ángeles lo canten en Belén." },
      vivir: "Escucha hoy con atención a alguien a quien sueles interrumpir.",
      video: "" },

    { f: "2026-12-11", cel: "Viernes de la II semana de Adviento", rango: "Feria", color: "morado",
      titulo: "Tocamos la flauta y no bailaron",
      lects: [["1.ª lectura", "Is 48,17-19"], ["Salmo", "Sal 1"], ["Evangelio", "Mt 11,16-19"]],
      aprende: { t: "¿Qué significa Maranatha?", p: "Es una expresión aramea que usaban los primeros cristianos y que conserva san Pablo (1Cor 16,22). Significa «¡Ven, Señor!». La Biblia termina con la misma súplica: «¡Ven, Señor Jesús!» (Ap 22,20)." },
      vivir: "Repite durante el día, en silencio, la oración más corta del Adviento: «Ven, Señor Jesús».",
      video: "" },

    { f: "2026-12-12", cel: "Nuestra Señora de Guadalupe, Patrona de América Latina", rango: "Fiesta", color: "blanco",
      titulo: "María se pone en camino",
      lects: [["1.ª lectura", "Eclo 24,17-22 (o Rom 8,28-30)"], ["Salmo", "Lc 1,46-55"], ["Evangelio", "Lc 1,39-47"]],
      aprende: { t: "La Morenita del Tepeyac", p: "En 1531 la Virgen se apareció a san Juan Diego en el cerro del Tepeyac, en México, y dejó su imagen en su tilma. Es Patrona de América Latina." },
      vivir: "Pon tu Adviento en manos de María: reza hoy un misterio del Rosario.",
      video: "" },

    { f: "2026-12-13", cel: "III Domingo de Adviento (Gaudete)", rango: "Domingo", color: "rosa",
      titulo: "Testigo de la luz",
      lects: [["1.ª lectura", "Is 61,1-2a.10-11"], ["Salmo", "Lc 1,46-50.53-54"], ["2.ª lectura", "1Tes 5,16-24"], ["Evangelio", "Jn 1,6-8.19-28"]],
      aprende: { t: "Domingo de la alegría", p: "Este domingo se llama Gaudete, «alégrense», por la antífona de entrada tomada de Flp 4,4. Por eso se puede usar el color rosa, y en la corona encendemos la vela rosa." },
      vivir: "Enciende la vela rosa. Haz hoy algo que lleve alegría a tu casa.",
      video: "" },

    { f: "2026-12-14", cel: "San Juan de la Cruz, presbítero y doctor de la Iglesia", rango: "Memoria", color: "blanco",
      titulo: "¿Con qué autoridad?",
      lects: [["1.ª lectura", "Núm 24,2-7.15-17a"], ["Salmo", "Sal 24"], ["Evangelio", "Mt 21,23-27"]],
      aprende: { t: "El santo de la noche oscura", p: "San Juan de la Cruz, carmelita del siglo XVI, enseñó que Dios se encuentra también en la oscuridad y el silencio. El Adviento es buen tiempo para hacer silencio por dentro." },
      vivir: "Apaga el celular quince minutos y quédate en silencio delante de Dios.",
      video: "" },

    { f: "2026-12-15", cel: "Martes de la III semana de Adviento", rango: "Feria", color: "morado",
      titulo: "Los dos hijos",
      lects: [["1.ª lectura", "Sof 3,1-2.9-13"], ["Salmo", "Sal 33"], ["Evangelio", "Mt 21,28-32"]],
      aprende: { t: "Confesarse antes de Navidad", p: "La conversión es el corazón del Adviento. Muchas parroquias ofrecen confesiones en estos días: es la mejor manera de preparar la casa para recibir a Jesús." },
      vivir: "Averigua cuándo hay confesiones en tu parroquia y separa ese momento.",
      video: "" },

    { f: "2026-12-16", cel: "Miércoles de la III semana de Adviento", rango: "Feria", color: "morado",
      titulo: "¿Eres tú el que ha de venir?",
      lects: [["1.ª lectura", "Is 45,6b-8.18.21b-26"], ["Salmo", "Sal 84"], ["Evangelio", "Lc 7,19-23"]],
      aprende: { t: "Empieza la recta final", p: "El Adviento tiene dos partes. Desde mañana, 17 de diciembre, la liturgia se centra directamente en la preparación de la Navidad y las lecturas cuentan lo que ocurrió antes del nacimiento de Jesús." },
      vivir: "Prepara el Nacimiento en tu casa, o revisa que esté listo, y bendícelo en familia.",
      video: "" },

    { f: "2026-12-17", cel: "Feria privilegiada de Adviento", rango: "Feria", color: "morado",
      titulo: "La familia de Jesús",
      ant: "Oh Sabiduría",
      lects: [["1.ª lectura", "Gn 49,2.8-10"], ["Salmo", "Sal 71"], ["Evangelio", "Mt 1,1-17"]],
      aprende: { t: "Las antífonas «Oh»", p: "Del 17 al 23 de diciembre, en las Vísperas, la Iglesia canta siete antífonas que llaman a Cristo con títulos del Antiguo Testamento. Hoy: «Oh Sabiduría»." },
      vivir: "Da gracias por tu propia familia, con sus luces y sombras, como la de Jesús.",
      video: "" },

    { f: "2026-12-18", cel: "Feria privilegiada de Adviento", rango: "Feria", color: "morado",
      titulo: "José, el hombre justo",
      ant: "Oh Adonai",
      lects: [["1.ª lectura", "Jr 23,5-8"], ["Salmo", "Sal 71"], ["Evangelio", "Mt 1,18-24"]],
      aprende: { t: "Oh Adonai", p: "Adonai significa «Señor». La antífona recuerda al Dios que se apareció a Moisés en la zarza ardiente y le dio la Ley en el Sinaí." },
      vivir: "Haz hoy un trabajo escondido por otro, sin que nadie lo sepa, como san José.",
      video: "" },

    { f: "2026-12-19", cel: "Feria privilegiada de Adviento", rango: "Feria", color: "morado",
      titulo: "Zacarías e Isabel",
      ant: "Oh Renuevo del tronco de Jesé",
      lects: [["1.ª lectura", "Jc 13,2-7.24-25a"], ["Salmo", "Sal 70"], ["Evangelio", "Lc 1,5-25"]],
      aprende: { t: "Oh Renuevo de Jesé", p: "Jesé fue el padre del rey David. Isaías anunció que de ese tronco brotaría un renuevo: Jesús, el descendiente de David." },
      vivir: "Visita o llama a una persona mayor de tu familia y escucha su historia.",
      video: "" },

    { f: "2026-12-20", cel: "IV Domingo de Adviento", rango: "Domingo", color: "morado",
      titulo: "Hágase en mí",
      ant: "Oh Llave de David",
      lects: [["1.ª lectura", "2Sam 7,1-5.8b-12.14a.16"], ["Salmo", "Sal 88"], ["2.ª lectura", "Rom 16,25-27"], ["Evangelio", "Lc 1,26-38"]],
      aprende: { t: "Oh Llave de David", p: "Cristo es la llave que abre lo que nadie puede cerrar. Este último domingo la Iglesia nos pone delante a María, que abrió la puerta a Dios con su «sí»." },
      vivir: "Enciende la cuarta vela. Dile a Dios tu propio «sí» en algo que te cuesta.",
      video: "" },

    { f: "2026-12-21", cel: "Feria privilegiada de Adviento", rango: "Feria", color: "morado",
      titulo: "La visita de María",
      ant: "Oh Sol que nace de lo alto",
      lects: [["1.ª lectura", "Cant 2,8-14 (o Sof 3,14-18a)"], ["Salmo", "Sal 32"], ["Evangelio", "Lc 1,39-45"]],
      aprende: { t: "Oh Sol que naces", p: "Se canta en el día más corto del año en el hemisferio norte, cuando la noche es más larga: Cristo es la luz que vence toda oscuridad." },
      vivir: "Visita a alguien que está enfermo o solo, aunque sea con una llamada.",
      video: "" },

    { f: "2026-12-22", cel: "Feria privilegiada de Adviento", rango: "Feria", color: "morado",
      titulo: "El Magníficat",
      ant: "Oh Rey de las naciones",
      lects: [["1.ª lectura", "1Sam 1,24-28"], ["Salmo", "1Sam 2,1-8"], ["Evangelio", "Lc 1,46-56"]],
      aprende: { t: "El canto de María", p: "El Magníficat es el canto de alabanza de María. La Iglesia lo reza cada tarde en las Vísperas, y con él se cantan las antífonas «Oh» de estos días." },
      vivir: "Escribe tres cosas por las que hoy puedes decir, como María: «Proclama mi alma la grandeza del Señor».",
      video: "" },

    { f: "2026-12-23", cel: "Feria privilegiada de Adviento", rango: "Feria", color: "morado",
      titulo: "Su nombre es Juan",
      ant: "Oh Emmanuel",
      lects: [["1.ª lectura", "Mal 3,1-4.23-24"], ["Salmo", "Sal 24"], ["Evangelio", "Lc 1,57-66"]],
      aprende: { t: "«Mañana estaré»", p: "Si se leen al revés las iniciales latinas de las siete antífonas (Sapientia, Adonai, Radix, Clavis, Oriens, Rex, Emmanuel) se forma «ERO CRAS»: «mañana estaré». Una tradición antigua lo lee como la respuesta de Cristo." },
      vivir: "Reconcíliate hoy con alguien, para llegar a la Navidad con el corazón en paz.",
      video: "" },

    { f: "2026-12-24", cel: "Feria privilegiada de Adviento (Misa de la mañana)", rango: "Feria", color: "morado",
      titulo: "El sol que nace de lo alto",
      lects: [["1.ª lectura", "2Sam 7,1-5.8b-12.14a.16"], ["Salmo", "Sal 88"], ["Evangelio", "Lc 1,67-79"]],
      aprende: { t: "¿Cuándo termina el Adviento?", p: "El Adviento termina esta tarde, antes de las primeras Vísperas de Navidad. Con la Misa de Nochebuena empezamos a celebrar el nacimiento del Señor." },
      vivir: "Participa en la Misa de Nochebuena y, antes de la cena, lean en familia el Evangelio del nacimiento (Lc 2,1-14).",
      video: "" }
  ]
};
