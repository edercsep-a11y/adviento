# Maranatha: Adviento 2026 día a día

Página de Divina Data para vivir el Adviento con un video de 3 minutos cada día
(29 de noviembre al 24 de diciembre de 2026).

Direcciones públicas: https://www.divinadataoficial.com/#adviento (camino) y https://www.divinadataoficial.com/encuentro (encuentro). Archivos: https://www.divinadataoficial.com/adviento/ (servidos desde este repositorio).
Enlace para compartir: https://www.divinadataoficial.com/#adviento (los botones de WhatsApp usan este).

## Video de introducción

Pega su enlace de YouTube en `introVideo: ""`, al inicio de `dias.js`.

## Cómo publicar el video de un día

1. Sube el video a YouTube (puede ser «No listado»).
2. Abre `dias.js` aquí en GitHub y toca el lápiz (Edit).
3. Busca el día por su fecha, por ejemplo `f: "2026-11-29"`.
4. Pega el enlace dentro de las comillas de `video: ""`:
   `video: "https://youtu.be/AbCdEfGhIjk"`
5. Dale a «Commit changes». En 1 o 2 minutos aparece en la página.

Cada día se abre solo en su fecha (hora de Lima).
Para revisar todos los días antes de tiempo: añade `?vista=todo` al final de la dirección.

La ruta de oración de cada día (resumen de lecturas, meditación, preces y oración final) está en `ruta.js`.

Lecturas: calendario litúrgico de la Conferencia Episcopal Peruana. Domingos: ciclo B.

## Encuentro de las 10 p. m. (proyección)

- Página: `encuentro.html` (botón «Entrar al encuentro» en la portada del Adviento).
- Contraseña de entrada: la que se comparte en el grupo de WhatsApp. Se pide una sola vez por dispositivo.
- **Candados:** en `encuentro-datos.js`, `abrirTodo: true` deja todos los días abiertos para revisar.
  Cámbialo a `abrirTodo: false` y cada día se abrirá a las 12:00 a. m. (hora de Lima) de su fecha.
- Quien guía avanza con la flecha derecha, la barra espaciadora o un presentador (clicker); `F` pone pantalla completa.
- Al terminar se abre la ventana del día vivido con su PDF (`pdf/adviento-2026-dia-NN.pdf`), con el logo, el sello y la marca de agua de Divina Data.
- Contenido: `dias.js` (lecturas y liturgia), `ruta.js` (meditación y oraciones) y `encuentro-datos.js` (Padres de la Iglesia, palabra de los santos y antífonas «Oh»).
