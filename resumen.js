/* Datos y resumen del día vivido · usado por encuentro.html y pdf.html */
(function(){
  var A = window.ADVIENTO, R = window.RUTA, E = window.ENCUENTRO;
  var D = A.dias;
  var MESES = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
  var DIAS_S = ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"];
  var EVANG = { Mt: "Mateo", Mc: "Marcos", Lc: "Lucas", Jn: "Juan" };
  var NOMBRE_COLOR = { morado: "Morado", rojo: "Rojo", blanco: "Blanco", rosa: "Rosa" };
  var CUAL_VELA = ["", "la primera vela", "la segunda vela", "la vela rosa", "la cuarta vela"];

  function partes(iso){ var a = iso.split("-").map(Number); return new Date(Date.UTC(a[0], a[1]-1, a[2], 12)); }
  function fechaLarga(iso){ var d = partes(iso); return DIAS_S[d.getUTCDay()] + " " + d.getUTCDate() + " de " + MESES[d.getUTCMonth()]; }
  function fechaCorta(iso){ var d = partes(iso); return d.getUTCDate() + " " + MESES[d.getUTCMonth()].slice(0,3); }
  function semanaDe(iso){ var n = 0; A.semanas.forEach(function(s){ if (iso >= s.desde) n = s.n; }); return n; }
  function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
  function mayus(s){ return s ? s.charAt(0).toUpperCase() + s.slice(1) : s; }
  function dosDigitos(n){ return (n < 10 ? "0" : "") + n; }

  function datos(i){
    var d = D[i], r = R[d.f] || {}, e = (E && E.dias[d.f]) || {};
    var lects = d.lects.map(function(l, k){ return { etiqueta: l[0], cita: l[1], res: (r.res || [])[k] || "" }; });
    var ev = null, previas = [];
    lects.forEach(function(l){ if (/^Evangelio/i.test(l.etiqueta)) ev = l; else previas.push(l); });
    if (!ev) { ev = lects[lects.length - 1]; previas = lects.slice(0, -1); }
    var libro = (ev.cita.match(/^(Mt|Mc|Lc|Jn)/) || [])[1];
    var sem = semanaDe(d.f);
    return {
      i: i, n: i + 1, f: d.f, cel: d.cel, rango: d.rango, color: d.color, titulo: d.titulo,
      fecha: fechaLarga(d.f), fechaCorta: fechaCorta(d.f), semana: sem,
      semanaNombre: (A.semanas[sem - 1] || {}).nombre || "", vela: CUAL_VELA[sem] || "",
      ant: E && E.ant && E.ant[d.f] ? { t: d.ant, texto: E.ant[d.f] } : null,
      previas: previas, evangelio: ev, evangelista: EVANG[libro] || "",
      aprende: d.aprende, padre: r.padre || e.padre || null, santo: e.santo || null,
      med: r.med || "", preg: r.preg || [], preces: r.preces || [], oracion: r.oracion || "",
      vivir: d.vivir, video: d.video || "", colorNombre: NOMBRE_COLOR[d.color] || mayus(d.color),
      lecturasUrl: d.f === "2026-12-12" ? "" : "https://www.ewtn.com/es/catolicismo/lecturas/" + d.f,
      pdf: "pdf/adviento-2026-dia-" + dosDigitos(i + 1) + ".pdf",
      pdfNombre: "Adviento-2026-Dia-" + dosDigitos(i + 1) + "-Divina-Data.pdf"
    };
  }

  function voz(p){ return p ? '<p class="r-voz">' + esc(p.d) + '</p><p class="r-firma">' + esc(p.q) + '<cite>' + esc(p.f) + '</cite></p>' : ""; }
  function santo(s){
    if (!s) return "";
    return '<blockquote class="r-cita' + (s.cita ? '' : ' idea') + '">' + (s.cita ? '«' + esc(s.t) + '»' : esc(s.t)) + '</blockquote><p class="r-firma">' + esc(s.a) + '<cite>' + esc(s.f) + '</cite></p>';
  }

  /* Resumen pedagógico del día, en bloques ordenados */
  function resumen(x){
    var palabra = x.previas.map(function(l){
      return '<li><b>' + esc(l.etiqueta) + ': ' + esc(l.cita) + '</b><span>' + esc(l.res) + '</span></li>';
    }).join("");
    return '' +
      '<section class="r-bloque r-clave"><h3>La luz de hoy</h3><p class="r-grande">' + esc(x.med) + '</p></section>' +
      '<section class="r-bloque"><h3>Escuchamos la Palabra</h3><ul class="r-lista">' + palabra + '</ul></section>' +
      '<section class="r-bloque"><h3>Acogimos el Evangelio</h3><p class="r-cita-biblica">' + esc(x.evangelio.cita) + (x.evangelista ? ', según san ' + esc(x.evangelista) : '') + '</p><p>' + esc(x.evangelio.res) + '</p></section>' +
      '<section class="r-bloque"><h3>La liturgia nos enseña</h3><p class="r-sub">' + esc(x.aprende.t) + '</p><p>' + esc(x.aprende.p) + '</p></section>' +
      (x.padre ? '<section class="r-bloque"><h3>La voz de los Padres</h3>' + voz(x.padre) + '</section>' : '') +
      (x.santo ? '<section class="r-bloque"><h3>Palabra de los santos</h3>' + santo(x.santo) + '</section>' : '') +
      '<section class="r-bloque"><h3>Para seguir meditando</h3><ol class="r-preg" type="I">' + x.preg.map(function(p){ return '<li>' + esc(p) + '</li>'; }).join("") + '</ol></section>' +
      (x.ant ? '<section class="r-bloque"><h3>Antífona «' + esc(x.ant.t) + '»</h3><p class="r-antifona">' + esc(x.ant.texto) + '</p></section>' : '') +
      '<section class="r-bloque"><h3>Oramos</h3><p class="r-oracion">' + esc(x.oracion) + '</p></section>' +
      '<section class="r-bloque r-proposito"><h3>Mi propósito</h3><p class="r-grande">' + esc(x.vivir) + '</p></section>';
  }

  window.DIA = { datos: datos, resumen: resumen, esc: esc, fechaLarga: fechaLarga, fechaCorta: fechaCorta, semanaDe: semanaDe, mayus: mayus, total: D.length };
})();
