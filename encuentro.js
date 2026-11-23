/* ENCUENTRO DE ADVIENTO · Divina Data
   Entrada con contraseña → sala de 26 días con candados → proyección en 6 pasos → ventana del día vivido */
(function(){
  "use strict";
  var A = window.ADVIENTO, E = window.ENCUENTRO, DIA = window.DIA, D = A.dias;
  var $ = function(s, r){ return (r || document).querySelector(s); };
  var esc = DIA.esc;
  var params = new URLSearchParams(location.search);
  var URL_PAGINA = A.paginaOficial || "https://www.divinadataoficial.com/#adviento";
  var CLAVE_OK = "dd-encuentro-2026-ok", CLAVE_VIV = "dd-adviento-2026-vividos";
  var reducido = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  function hoyLima(){
    var p = params.get("hoy");
    if (p && /^\d{4}-\d{2}-\d{2}$/.test(p)) return p;
    try { return new Intl.DateTimeFormat("en-CA", { timeZone: "America/Lima", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date()); }
    catch(e){ return new Date().toISOString().slice(0, 10); }
  }
  var HOY = hoyLima();
  function abierto(d){ return !!E.abrirTodo || d.f <= HOY; }
  function leer(k, def){ try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : def; } catch(e){ return def; } }
  function guardar(k, v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch(e){} }
  var vividos = leer(CLAVE_VIV, {}) || {};

  var COLORES = { morado: "#7A5AC8", rojo: "#C8463F", blanco: "#EDE6D3", rosa: "#D98BA6" };
  function colorDe(d){ return COLORES[d.color] || COLORES.morado; }

  var ICO = {
    candado: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
    abierto: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 7.8-1.2"/></svg>',
    hecho: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M7.5 12.5l3 3 6-6.5"/></svg>',
    llama: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2c1.5 3.2 5 5.4 5 9.6A5 5 0 0 1 12 17a5 5 0 0 1-5-5.4c0-1.7.8-3.1 1.9-4.1.2 1.6 1 2.6 2 3.1C10.6 7.8 11 4.6 12 2Z"/><rect x="10" y="17.5" width="4" height="4.5" rx="1"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="10"/><path d="M10 8.5v7l6-3.5-6-3.5Z" fill="currentColor"/></svg>',
    libro: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z"/><path d="M8 7h7"/></svg>'
  };

  function toast(t){
    var el = $("#toast"); el.textContent = t; el.classList.add("ver");
    clearTimeout(toast._t); toast._t = setTimeout(function(){ el.classList.remove("ver"); }, 3200);
  }
  function mostrar(id){
    ["vEntrada", "vSala", "vTv"].forEach(function(v){ $("#" + v).hidden = v !== id; });
    document.body.style.overflow = id === "vTv" ? "hidden" : "";
    window.scrollTo(0, 0);
  }

  /* ---------- corona (la misma de la página del camino) ---------- */
  function rnd(seed){ return function(){ seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }; }
  var nCorona = 0;
  function corona(svg){
    var pre = "c" + (++nCorona) + "-";
    var cx = 320, cy = 360, rx = 236, ry = 74, r = rnd(7);
    var defs = '<defs>' +
      '<radialGradient id="g-halo"><stop offset="0" stop-color="#F7D08F" stop-opacity=".75"/><stop offset=".35" stop-color="#F2B45A" stop-opacity=".28"/><stop offset="1" stop-color="#F2B45A" stop-opacity="0"/></radialGradient>' +
      '<linearGradient id="g-llama" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#E0782E"/><stop offset=".45" stop-color="#F2B45A"/><stop offset="1" stop-color="#FFF4D6"/></linearGradient>' +
      '<linearGradient id="g-morada" x1="0" x2="1"><stop offset="0" stop-color="#8A6AD0"/><stop offset=".45" stop-color="#6B4BB0"/><stop offset="1" stop-color="#3C2774"/></linearGradient>' +
      '<linearGradient id="g-rosa" x1="0" x2="1"><stop offset="0" stop-color="#F0B3C8"/><stop offset=".45" stop-color="#D98BA6"/><stop offset="1" stop-color="#9E5673"/></linearGradient>' +
      '<radialGradient id="g-mesa" cx=".5" cy=".5"><stop offset="0" stop-color="#2A2150"/><stop offset="1" stop-color="#140F27" stop-opacity="0"/></radialGradient></defs>';
    function hojas(desde){
      var s = "", tonos = ["#24493A","#2E5B46","#3E7558","#4F8A67","#1D3B2F"];
      for (var i = 0; i < 190; i++){
        var a = r() * Math.PI * 2, frente = Math.sin(a) > 0;
        if ((desde === "atras" && frente) || (desde === "frente" && !frente)) { r(); r(); r(); continue; }
        var j = (r() - .5) * 34, x = cx + (rx + j) * Math.cos(a), y = cy + (ry + j * .35) * Math.sin(a) - r() * 18;
        var ang = (Math.atan2(ry * Math.cos(a), -rx * Math.sin(a)) * 180 / Math.PI) + (r() - .5) * 70;
        var c = tonos[Math.floor(r() * tonos.length)];
        s += '<ellipse cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" rx="' + (16 + r() * 12).toFixed(1) + '" ry="5.5" transform="rotate(' + ang.toFixed(1) + ' ' + x.toFixed(1) + ' ' + y.toFixed(1) + ')" fill="' + c + '"/>';
        if (i % 17 === 0) s += '<circle cx="' + (x + 6).toFixed(1) + '" cy="' + (y - 4).toFixed(1) + '" r="5" fill="#9E3B3B"/><circle cx="' + (x + 4.5).toFixed(1) + '" cy="' + (y - 5.5).toFixed(1) + '" r="1.6" fill="#F3ECDD" opacity=".6"/>';
      }
      return s;
    }
    var velas = [ {x:206,y:392,h:150,c:"morada"}, {x:262,y:318,h:136,c:"morada"}, {x:380,y:318,h:136,c:"rosa"}, {x:436,y:392,h:150,c:"morada"} ];
    function vela(v, i){
      var w = 38, top = v.y - v.h, borde = v.c === "rosa" ? "#F3C3D4" : "#9C80DC";
      return '<g class="vela apagada" data-i="' + i + '">' +
        '<circle class="halo" cx="' + v.x + '" cy="' + (top - 26) + '" r="110" fill="url(#g-halo)"/>' +
        '<rect x="' + (v.x - w/2) + '" y="' + top + '" width="' + w + '" height="' + v.h + '" rx="6" fill="url(#g-' + v.c + ')"/>' +
        '<ellipse cx="' + v.x + '" cy="' + top + '" rx="' + (w/2) + '" ry="6" fill="' + borde + '"/>' +
        '<path d="M' + (v.x + 6) + ' ' + top + ' q3 16 -1 30 q-2 8 3 12" stroke="' + borde + '" stroke-width="5" fill="none" stroke-linecap="round"/>' +
        '<line x1="' + v.x + '" y1="' + top + '" x2="' + v.x + '" y2="' + (top - 12) + '" stroke="#1B1530" stroke-width="2.5" stroke-linecap="round"/>' +
        '<path class="humo" d="M' + v.x + ' ' + (top - 14) + ' q-8 -14 2 -26 q8 -12 -2 -24" stroke="rgba(243,236,221,.45)" stroke-width="3" fill="none" stroke-linecap="round"/>' +
        '<g class="llama"><g class="llama-in"><path d="M' + v.x + ' ' + (top - 58) + ' C' + (v.x + 13) + ' ' + (top - 38) + ' ' + (v.x + 15) + ' ' + (top - 20) + ' ' + v.x + ' ' + (top - 10) + ' C' + (v.x - 15) + ' ' + (top - 20) + ' ' + (v.x - 13) + ' ' + (top - 38) + ' ' + v.x + ' ' + (top - 58) + 'Z" fill="url(#g-llama)"/>' +
        '<path d="M' + v.x + ' ' + (top - 34) + ' C' + (v.x + 5) + ' ' + (top - 26) + ' ' + (v.x + 5) + ' ' + (top - 18) + ' ' + v.x + ' ' + (top - 13) + ' C' + (v.x - 5) + ' ' + (top - 18) + ' ' + (v.x - 5) + ' ' + (top - 26) + ' ' + v.x + ' ' + (top - 34) + 'Z" fill="#FFFBEF"/></g></g></g>';
    }
    var html = defs +
      '<ellipse cx="' + cx + '" cy="' + (cy + 18) + '" rx="320" ry="110" fill="url(#g-mesa)"/>' +
      '<ellipse cx="' + cx + '" cy="' + (cy + 10) + '" rx="' + (rx + 20) + '" ry="' + (ry + 14) + '" fill="#0B0818" opacity=".55"/>' +
      '<g>' + hojas("atras") + '</g>' + vela(velas[1], 1) + vela(velas[2], 2) +
      '<g>' + hojas("frente") + '</g>' + vela(velas[0], 0) + vela(velas[3], 3);
    svg.innerHTML = html.replace(/id="g-/g, 'id="' + pre + 'g-').replace(/url\(#g-/g, 'url(#' + pre + 'g-');
    return [].slice.call(svg.querySelectorAll(".vela")).sort(function(a, b){ return a.dataset.i - b.dataset.i; });
  }
  function encender(velas, n){ velas.forEach(function(g, i){ g.classList.toggle("apagada", i >= n); }); }
  function coronaHTML(){ return '<figure class="corona" aria-hidden="true"><svg viewBox="0 0 640 470"></svg></figure>'; }

  /* ---------- 1. Entrada ---------- */
  function sha256(txt){
    var bytes = new TextEncoder().encode(txt);
    return crypto.subtle.digest("SHA-256", bytes).then(function(buf){
      return Array.prototype.map.call(new Uint8Array(buf), function(b){ return ("0" + b.toString(16)).slice(-2); }).join("");
    });
  }
  function iniciarEntrada(){
    mostrar("vEntrada");
    var velas = corona($("#coronaEntrada svg"));
    var sem = HOY < A.inicio ? 1 : DIA.semanaDe(HOY) || 4;
    if (reducido) encender(velas, sem);
    else velas.forEach(function(g, i){ if (i < sem) setTimeout(function(){ g.classList.remove("apagada"); }, 400 + i * 500); });
    var f = $("#fClave"), inp = $("#clave"), err = $("#claveError");
    setTimeout(function(){ inp.focus(); }, 300);
    f.addEventListener("submit", function(ev){
      ev.preventDefault();
      var v = inp.value.replace(/\s+/g, "").toUpperCase();
      if (!v) return;
      if (!window.crypto || !crypto.subtle) { entrar(); return; }
      sha256(v).then(function(h){
        if (h === E.claveHash) { guardar(CLAVE_OK, 1); entrar(); }
        else {
          err.textContent = "La contraseña no coincide. Revísala y vuelve a intentarlo.";
          f.classList.remove("sacudir"); void f.offsetWidth; f.classList.add("sacudir");
          inp.select();
        }
      });
    });
  }
  function entrar(){
    var m = location.hash.match(/^#dia-(\d{4}-\d{2}-\d{2})$/);
    var i = m ? D.findIndex(function(d){ return d.f === m[1]; }) : -1;
    iniciarSala();
    if (i >= 0 && abierto(D[i])) abrirDia(i, 0);
  }

  /* ---------- 2. Sala ---------- */
  var salaLista = false;
  function iniciarSala(){
    mostrar("vSala");
    $("#avisoRevision").hidden = !E.abrirTodo;
    pintarSala();
    salaLista = true;
  }
  function estadoTile(d){
    if (vividos[d.f]) return { cls: "vivido", ico: ICO.hecho, lbl: "Vivido" };
    if (!abierto(d)) return { cls: "cerrado", ico: ICO.candado, lbl: "Cerrado hasta el " + DIA.fechaLarga(d.f) };
    if (d.f > HOY) return { cls: "", ico: ICO.abierto, lbl: "Abierto para revisión" };
    return { cls: "", ico: "", lbl: "Abierto" };
  }
  function pintarSala(){
    var cont = $("#semanas"); cont.innerHTML = "";
    A.semanas.forEach(function(s){
      var items = D.map(function(d, i){ return { d: d, i: i }; }).filter(function(o){ return DIA.semanaDe(o.d.f) === s.n; });
      var sec = document.createElement("section"); sec.className = "semana";
      sec.innerHTML = '<h3>Semana ' + s.n + ': ' + esc(s.nombre) + '</h3><p>' + esc(s.texto) + '</p><ol class="rejilla"></ol>';
      var ol = sec.querySelector("ol");
      items.forEach(function(o){
        var d = o.d, st = estadoTile(d), hoy = d.f === HOY;
        var li = document.createElement("li"), b = document.createElement("button");
        b.type = "button";
        b.className = "tile " + st.cls + (hoy ? " hoy" : "");
        b.style.setProperty("--color-dia", colorDe(d));
        b.setAttribute("aria-label", "Día " + (o.i + 1) + ", " + DIA.fechaLarga(d.f) + ": " + d.titulo + ". " + st.lbl);
        b.innerHTML = '<span class="franja" aria-hidden="true"></span>' +
          (st.ico ? '<span class="estado" aria-hidden="true">' + st.ico + '</span>' : '') +
          (hoy ? '<span class="hoy-pill">Hoy</span>' : '') +
          '<span class="num">' + (o.i + 1) + '</span><span class="fec">' + esc(DIA.fechaLarga(d.f)) + '</span><span class="tit">' + esc(d.titulo) + '</span>';
        b.addEventListener("click", function(){
          if (abierto(d)) abrirDia(o.i, 0);
          else toast("Este día se abre el " + DIA.fechaLarga(d.f) + " a las 12:00 a. m.");
        });
        li.appendChild(b); ol.appendChild(li);
      });
      cont.appendChild(sec);
    });
    // destacado: hoy, o el primer día si aún no empieza
    var iHoy = D.findIndex(function(d){ return d.f === HOY; });
    var antes = HOY < A.inicio, despues = HOY > A.fin;
    var i = iHoy >= 0 ? iHoy : antes ? 0 : D.length - 1, d = D[i];
    var que = iHoy >= 0 ? "Hoy, día " + (i + 1) + " de 26" : antes ? "Empezamos el domingo 29 de noviembre" : "Volver a vivir el último día";
    var puede = abierto(d);
    $("#destacado").innerHTML = '<p class="que">' + que + '</p><h2>' + esc(d.titulo) + '</h2><p class="cel">' + esc(DIA.mayus(DIA.fechaLarga(d.f))) + ' · ' + esc(d.cel) + '</p>' +
      '<div class="acciones">' + (puede ? '<button class="btn luz" type="button" id="bEmpezar">Empezar el encuentro</button>' : '<span class="btn linea" aria-disabled="true">' + ICO.candado.replace('<svg', '<svg width="20" height="20"') + 'Se abre a las 12:00 a. m.</span>') +
      '<a class="btn linea" href="' + esc(A.grupo) + '" target="_blank" rel="noopener">Grupo de WhatsApp</a></div>';
    var be = $("#bEmpezar"); if (be) be.addEventListener("click", function(){ abrirDia(i, 0); });
  }

  /* ---------- 3. Proyección ---------- */
  var PASOS = ["Preparamos el corazón", "Escuchamos la Palabra", "Acogemos el Evangelio", "Meditamos", "Oramos", "Vivimos"];
  var PASOS_TXT = [
    "Encendemos la vela de la corona, hacemos la señal de la cruz y pedimos: «Ven, Señor Jesús».",
    "La Palabra que Dios nos dirige hoy, con una explicación sencilla de cada lectura.",
    "El Evangelio del día, su video, la liturgia y la voz de los Padres de la Iglesia.",
    "Una reflexión, una palabra de los santos, dos preguntas y un minuto de silencio.",
    "La oración de los fieles, respondiendo «Ven, Señor Jesús», y el Padrenuestro.",
    "La oración final y un propósito concreto para vivir hoy."
  ];
  var X = null, escenas = [], pos = 0, idx = -1, velasTv = null;

  function idVideo(url){
    if (!url) return "";
    var m = String(url).match(/(?:youtu\.be\/|v=|embed\/|shorts\/|live\/)([A-Za-z0-9_-]{11})/);
    return m ? m[1] : (/^[A-Za-z0-9_-]{11}$/.test(url) ? url : "");
  }
  function rv(html, n){ return '<div class="rv" style="--d:' + (n || 0) + '">' + html + '</div>'; }

  function construir(x){
    var L = [];
    function add(paso, lbl, html, extra){ L.push(Object.assign({ paso: paso, lbl: lbl, html: html }, extra || {})); }
    function tarjetaPaso(p){
      add(p, "Paso " + (p + 1) + " de 6 · " + PASOS_TXT[p].split(",")[0].replace(/\.$/, ""), '<div class="paso-card">' + rv('<span class="paso-num" aria-hidden="true">' + (p + 1) + '</span>') +
        '<div>' + rv('<p class="t-eyebrow">' + ICO.llama + 'Paso ' + (p + 1) + ' de 6</p>', 1) + rv('<h2 class="t-titulo">' + PASOS[p] + '</h2>', 2) + rv('<p class="t-texto">' + PASOS_TXT[p] + '</p>', 3) + '</div></div>', { tipo: "paso" });
    }
    // portada
    add(-1, "Portada", '<div class="portada-dia"><div>' +
      rv('<p class="t-eyebrow">' + ICO.llama + 'Día ' + x.n + ' de 26 · ' + esc(DIA.mayus(x.fecha)) + '</p>') +
      rv('<h1 class="t-titulo">' + esc(x.titulo) + '</h1>', 1) +
      rv('<p class="cel">' + esc(x.cel) + '</p>', 2) +
      rv('<div class="chips"><span class="chip"><i></i>Color litúrgico: ' + esc(x.colorNombre) + '</span><span class="chip">Semana ' + x.semana + ': ' + esc(x.semanaNombre) + '</span></div>', 3) +
      rv('<p class="ayuda-teclas">Quien guía avanza con <kbd>→</kbd> o <kbd>Espacio</kbd>, vuelve con <kbd>←</kbd> y pone pantalla completa con <kbd>F</kbd>.</p>', 4) +
      '</div>' + rv(coronaHTML(), 2) + '</div>', { tipo: "portada" });

    // 1. Preparamos el corazón
    tarjetaPaso(0);
    add(0, "Encendemos la vela", '<div class="dos t-centro-m"><div>' +
      rv('<p class="t-eyebrow">' + ICO.llama + 'Encendemos ' + esc(x.vela || "la vela") + '</p>') +
      rv('<p class="t-grande">Cristo es la luz que viene a nuestra noche.</p>', 1) +
      rv('<p class="t-texto">Encendemos en casa ' + esc(x.vela || "una vela") + ' de la corona' + (x.semana > 1 ? ', junto con las de las semanas anteriores' : '') + '. Si no tienes corona, basta una vela.</p>', 2) +
      rv('<button class="btn luz toca" type="button" data-accion="encender">' + ICO.llama.replace('<svg', '<svg width="20" height="20"') + 'Encender la vela</button>', 3) +
      '</div>' + rv(coronaHTML(), 1) + '</div>', { tipo: "vela" });
    add(0, "Señal de la cruz", '<div class="t-centro">' +
      rv('<svg viewBox="0 0 24 60" width="40" height="100" style="margin:0 auto 1.2em" aria-hidden="true"><rect x="10" y="0" width="4" height="60" rx="2" fill="#F2B45A"/><rect x="0" y="16" width="24" height="4" rx="2" fill="#F2B45A"/></svg>') +
      rv('<p class="t-grande">' + esc(E.signoCruz) + '</p>', 1) + '</div>');
    add(0, "Ven, Señor Jesús", '<div class="t-centro">' +
      rv('<p class="t-eyebrow" style="justify-content:center">' + ICO.llama + 'Pedimos juntos</p>') +
      rv('<p class="t-titulo">«' + esc(E.invocacion) + '»</p>', 1) +
      rv('<p class="t-texto">Maranatha: así rezaban los primeros cristianos esperando al Señor.</p>', 2) + '</div>');
    if (x.ant) add(0, "Antífona " + x.ant.t, '<div>' +
      rv('<p class="t-eyebrow">' + ICO.llama + 'La Iglesia canta hoy en Vísperas</p>') +
      rv('<p class="t-grande">' + esc(x.ant.texto) + '</p>', 1) + '</div>');

    // 2. Escuchamos la Palabra
    tarjetaPaso(1);
    x.previas.forEach(function(l){
      add(1, l.etiqueta + " · " + l.cita, '<div>' +
        rv('<p class="t-eyebrow">' + ICO.libro + esc(l.etiqueta) + '</p>') +
        rv('<p class="t-cita">' + esc(l.cita) + '<small>Proclamamos el texto en voz alta desde la Biblia.</small></p>', 1) +
        rv('<p class="t-medio" style="margin-top:.7em">' + esc(l.res) + '</p>', 2) +
        (x.lecturasUrl ? rv('<a class="enlace-lect" href="' + x.lecturasUrl + '" target="_blank" rel="noopener">' + ICO.libro + 'Leer las lecturas completas del día</a>', 3) : '') + '</div>');
    });

    // 3. Acogemos el Evangelio
    tarjetaPaso(2);
    add(2, "Evangelio · " + x.evangelio.cita, '<div>' +
      rv('<p class="t-eyebrow">' + ICO.libro + 'Lectura del santo Evangelio' + (x.evangelista ? ' según san ' + esc(x.evangelista) : '') + '</p>') +
      rv('<p class="t-cita">' + esc(x.evangelio.cita) + '<small>Nos ponemos de pie para escuchar a Jesús.</small></p>', 1) +
      rv('<p class="t-medio" style="margin-top:.7em">' + esc(x.evangelio.res) + '</p>', 2) +
      rv('<p class="amen">Palabra del Señor. Gloria a ti, Señor Jesús.</p>', 3) + '</div>');
    var vid = idVideo(x.video);
    add(2, "Video del día", '<div>' + rv('<div class="video-marco' + (vid ? '' : ' video-vacio') + '">' +
      (vid ? '<iframe src="https://www.youtube-nocookie.com/embed/' + vid + '?rel=0&modestbranding=1" title="Video del día ' + x.n + '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe>'
           : '<div>' + ICO.play + '<p class="t-medio t-centro">El video de 3 minutos de hoy</p><p class="t-texto t-centro">Aparecerá aquí en cuanto se publique.</p></div>') + '</div>') + '</div>', { tipo: "video" });
    add(2, "La liturgia nos enseña", '<div>' +
      rv('<p class="t-eyebrow">' + ICO.llama + 'La liturgia nos enseña</p>') +
      rv('<h2 class="t-cita">' + esc(x.aprende.t) + '</h2>', 1) +
      rv('<p class="t-medio" style="margin-top:.5em">' + esc(x.aprende.p) + '</p>', 2) + '</div>');
    if (x.padre) add(2, "Los Padres de la Iglesia", '<div>' +
      rv('<p class="t-eyebrow">' + ICO.libro + 'La voz de los Padres de la Iglesia</p>') +
      rv('<p class="t-grande">' + esc(x.padre.d) + '</p>', 1) +
      rv('<p class="t-firma">' + esc(x.padre.q) + ' · <span>' + esc(x.padre.f) + '</span></p>', 2) + '</div>');

    // 4. Meditamos
    tarjetaPaso(3);
    add(3, "Reflexión", '<div>' + rv('<p class="t-eyebrow">' + ICO.llama + 'Para meditar</p>') + rv('<p class="t-grande">' + esc(x.med) + '</p>', 1) + '</div>');
    if (x.santo) add(3, "Palabra de los santos", '<div>' +
      rv('<p class="t-eyebrow">' + ICO.llama + 'Palabra de los santos</p>') +
      rv('<p class="t-grande">' + (x.santo.cita ? '«' + esc(x.santo.t) + '»' : esc(x.santo.t)) + '</p>', 1) +
      rv('<p class="t-firma">' + esc(x.santo.a) + ' · <span>' + esc(x.santo.f) + '</span></p>', 2) + '</div>');
    add(3, "Dos preguntas", '<div>' + rv('<p class="t-eyebrow">' + ICO.llama + 'Dos preguntas para el corazón</p>') +
      '<ol class="preguntas">' + x.preg.map(function(q, k){ return '<li class="rv" style="--d:' + (k * 2 + 1) + '">' + esc(q) + '</li>'; }).join("") + '</ol></div>');
    add(3, "Un minuto de silencio", '<div class="silencio">' +
      rv('<div class="anillo"><svg viewBox="0 0 120 120"><circle class="pista" cx="60" cy="60" r="52" fill="none" stroke-width="6"/><circle class="avance" cx="60" cy="60" r="52" fill="none" stroke-width="6" stroke-dasharray="326.7" stroke-dashoffset="326.7"/></svg><div class="seg" data-seg>60</div></div>') +
      '<div>' + rv('<p class="t-eyebrow">' + ICO.llama + 'Un minuto de silencio</p>', 1) +
      rv('<p class="t-grande" data-sil-txt>Nos quedamos en silencio con Jesús. Dejamos que su Palabra resuene en el corazón.</p>', 2) +
      rv('<button class="btn luz" type="button" data-accion="silencio" style="margin-top:1.2em">Empezar el minuto</button>', 3) + '</div></div>', { tipo: "silencio" });

    // 5. Oramos
    tarjetaPaso(4);
    x.preces.forEach(function(p, k){
      add(4, "Oración de los fieles · " + (k + 1) + " de " + x.preces.length, '<div>' +
        rv('<p class="t-eyebrow">' + ICO.llama + 'Oración de los fieles · ' + (k + 1) + ' de ' + x.preces.length + '</p>') +
        rv('<p class="t-grande">' + esc(p) + '</p>', 1) +
        '<div class="rv" style="--d:5"><span class="respuesta">' + ICO.llama + 'Ven, Señor Jesús</span></div></div>');
    });
    add(4, "Padrenuestro", '<div>' + rv('<p class="t-eyebrow">' + ICO.llama + 'Con las palabras que Jesús nos enseñó, decimos</p>') +
      rv('<p class="t-medio" style="max-width:42ch">' + esc(E.padrenuestro) + '</p>', 1) + '</div>');

    // 6. Vivimos
    tarjetaPaso(5);
    add(5, "Oración final", '<div>' + rv('<p class="t-eyebrow">' + ICO.llama + 'Oración final</p>') +
      rv('<p class="t-grande">' + esc(x.oracion) + '</p>', 1) +
      rv('<p class="t-texto">El Señor nos bendiga, nos guarde de todo mal y nos lleve a la vida eterna. <b>Amén.</b></p>', 2) + '</div>');
    add(5, "Propósito del día", '<div>' + rv('<p class="t-eyebrow">' + ICO.llama + 'Nuestro propósito para hoy</p>') +
      rv('<p class="t-grande">' + esc(x.vivir) + '</p>', 1) +
      rv('<button class="btn luz" type="button" data-accion="vivido" style="margin-top:1.4em">' + ICO.hecho.replace('<svg', '<svg width="22" height="22"') + 'Hemos vivido este día</button>', 2) + '</div>', { tipo: "final" });
    return L;
  }

  function pintarEscaleta(){
    var ol = $("#escaleta");
    ol.innerHTML = PASOS.map(function(p, k){
      return '<li data-p="' + k + '"><button type="button" aria-label="Ir al paso ' + (k + 1) + ': ' + p + '"><span class="barra"><i></i></span><span class="nombre">' + (k + 1) + '. ' + p + '</span></button></li>';
    }).join("");
    [].forEach.call(ol.querySelectorAll("button"), function(b, k){
      b.addEventListener("click", function(){ var j = escenas.findIndex(function(s){ return s.paso === k; }); if (j >= 0) ir(j); });
    });
  }
  function actualizarEscaleta(){
    var esc0 = escenas[pos], p = esc0.paso;
    [].forEach.call($("#escaleta").children, function(li, k){
      var deEste = escenas.map(function(s, j){ return s.paso === k ? j : -1; }).filter(function(j){ return j >= 0; });
      var pct = 0;
      if (p > k) pct = 100;
      else if (p === k) pct = Math.round(((deEste.indexOf(pos) + 1) / deEste.length) * 100);
      li.querySelector(".barra i").style.setProperty("--p", pct + "%");
      li.classList.toggle("hecho", p > k);
      li.classList.toggle("actual", p === k);
    });
  }

  function abrirDia(i, inicio){
    idx = i; X = DIA.datos(i); escenas = construir(X);
    var tv = $("#vTv");
    tv.style.setProperty("--color-dia", colorDe(D[i]));
    $("#tvQue").innerHTML = "<b>Encuentro de Adviento</b>Día " + X.n + " · " + esc(DIA.mayus(X.fecha));
    history.replaceState(null, "", "#dia-" + X.f);
    mostrar("vTv");
    pintarEscaleta();
    pos = -1; ir(inicio || 0, true);
    tv.focus && tv.setAttribute("tabindex", "-1");
    tv.focus({ preventScroll: true });
  }

  function ir(j, sinBarrido){
    j = Math.max(0, Math.min(escenas.length - 1, j));
    if (j === pos) return;
    var esc0 = escenas[j], cont = $("#escenario");
    var vieja = cont.querySelector(".escena:not(.sale)");
    if (vieja && !reducido) { vieja.classList.add("sale"); setTimeout(function(){ vieja.remove(); }, 460); }
    else if (vieja) vieja.remove();
    var el = document.createElement("div");
    el.className = "escena entra" + (esc0.tipo ? " es-" + esc0.tipo : "");
    el.innerHTML = esc0.html;
    cont.appendChild(el);
    pos = j;
    if (!sinBarrido && !reducido) { var b = $("#barrido"); b.classList.remove("va"); void b.offsetWidth; b.classList.add("va"); }
    // tercio inferior
    var t = $("#tercio");
    $("#tercioPaso").innerHTML = esc0.paso < 0 ? '<b>' + X.n + '</b><span>Día ' + X.n + ' de 26</span>' : '<b>' + (esc0.paso + 1) + '</b><span>' + PASOS[esc0.paso] + '</span>';
    $("#tercioLbl").innerHTML = '<span>' + esc(esc0.paso < 0 ? X.titulo : esc0.lbl) + (esc0.paso < 0 ? '<em>' + esc(X.cel) + '</em>' : '') + '</span>';
    t.classList.remove("anima"); void t.offsetWidth; t.classList.add("anima");
    actualizarEscaleta();
    $("#bAnt").disabled = pos === 0;
    // fondo que se mueve con el paso
    var fx = [72, 30, 64, 40, 70, 50, 60][esc0.paso + 1] || 60;
    $(".tv-fondo").style.setProperty("--fx", fx + "%");
    prepararEscena(el, esc0);
  }

  var silencioT = null;
  function prepararEscena(el, s){
    clearInterval(silencioT);
    var svg = el.querySelector(".corona svg");
    if (svg) {
      velasTv = corona(svg);
      var n = X.semana || 1;
      if (s.tipo === "vela") {
        encender(velasTv, n - 1);
        var fig = el.querySelector(".corona"); fig.classList.add("pide");
        var sig = velasTv[n - 1]; sig.classList.add("siguiente");
        s.pendiente = true;
        var btnV = el.querySelector('[data-accion="encender"]');
        var hacer = function(){ if (!s.pendiente) return; s.pendiente = false; sig.classList.remove("apagada"); fig.classList.remove("pide"); btnV.textContent = "Vela encendida"; btnV.disabled = true; };
        sig.addEventListener("click", hacer); btnV.addEventListener("click", hacer);
        s.accion = hacer;
      } else {
        encender(velasTv, 0);
        if (reducido) encender(velasTv, n);
        else velasTv.forEach(function(g, k){ if (k < n) setTimeout(function(){ g.classList.remove("apagada"); }, 500 + k * 420); });
      }
    }
    if (s.tipo === "silencio") {
      var btn = el.querySelector('[data-accion="silencio"]'), seg = el.querySelector("[data-seg]"), arco = el.querySelector(".avance"), txt = el.querySelector("[data-sil-txt]");
      var total = 60, L = 326.7;
      btn.addEventListener("click", function(){
        var t = total; btn.disabled = true; btn.textContent = "En silencio…";
        seg.textContent = t; arco.style.strokeDashoffset = L;
        silencioT = setInterval(function(){
          t--; seg.textContent = t; arco.style.strokeDashoffset = (L * t / total).toFixed(1);
          if (t <= 0) {
            clearInterval(silencioT); seg.textContent = "Amén"; seg.style.fontSize = "clamp(44px,5vw,96px)";
            txt.textContent = "Terminó el minuto. Guardamos en el corazón lo que Dios nos dijo.";
            btn.textContent = "Seguimos"; btn.disabled = false; btn.onclick = siguiente;
          }
        }, 1000);
      });
    }
    var bv = el.querySelector('[data-accion="vivido"]');
    if (bv) bv.addEventListener("click", abrirVivido);
  }

  function siguiente(){
    var s = escenas[pos];
    if (s && s.pendiente && s.accion) { s.accion(); return; }
    if (pos >= escenas.length - 1) { abrirVivido(); return; }
    ir(pos + 1);
  }
  function anterior(){ ir(pos - 1); }

  function salirTv(){
    clearInterval(silencioT);
    if (document.fullscreenElement) document.exitFullscreen().catch(function(){});
    history.replaceState(null, "", location.pathname + location.search);
    $("#escenario").innerHTML = "";
    iniciarSala();
  }
  function pantallaCompleta(){
    var el = document.documentElement;
    if (!document.fullscreenElement) { (el.requestFullscreen || el.webkitRequestFullscreen || function(){}).call(el); }
    else { (document.exitFullscreen || document.webkitExitFullscreen).call(document); }
  }

  /* ---------- 4. Día vivido ---------- */
  function enlaceWa(x){
    var t = "🕯️ Hoy vivimos el día " + x.n + " del Adviento con Divina Data: «" + x.titulo + "».\n\n" +
            "Mi propósito: " + x.vivir + "\n\nRecorre la ruta de oración de cada día y conoce todo lo que ofrece Divina Data: " + URL_PAGINA;
    return "https://wa.me/?text=" + encodeURIComponent(t);
  }
  function abrirVivido(){
    if (!X) return;
    vividos[X.f] = Date.now(); guardar(CLAVE_VIV, vividos);
    var v = $("#vVivido");
    $("#vivQue").textContent = "Día " + X.n + " de 26 vivido · " + DIA.mayus(X.fecha);
    $("#vivTit").textContent = X.titulo;
    var html = DIA.resumen(X);
    var cuerpo = $("#vivCuerpo"); cuerpo.innerHTML = html;
    [].forEach.call(cuerpo.querySelectorAll(".r-bloque"), function(b, k){ b.style.setProperty("--d", k); });
    var pdf = $("#vivPdf"); pdf.href = X.pdf; pdf.setAttribute("download", X.pdfNombre);
    $("#vivWa").href = enlaceWa(X);
    v.hidden = false; v.classList.remove("abre"); void v.offsetWidth; v.classList.add("abre");
    $(".vivido-caja").scrollTop = 0;
    setTimeout(function(){ $("#vivCerrar").focus(); }, 50);
  }
  function cerrarVivido(){ $("#vVivido").hidden = true; }
  $("#vivCerrar").addEventListener("click", cerrarVivido);
  $("#vivSala").addEventListener("click", function(){ cerrarVivido(); salirTv(); });
  $("#vVivido").addEventListener("click", function(e){ if (e.target.id === "vVivido") cerrarVivido(); });

  /* ---------- controles ---------- */
  $("#bSig").addEventListener("click", siguiente);
  $("#bAnt").addEventListener("click", anterior);
  $("#bSalir").addEventListener("click", salirTv);
  $("#bPantalla").addEventListener("click", pantallaCompleta);
  document.addEventListener("keydown", function(e){
    if (!$("#vVivido").hidden) { if (e.key === "Escape") cerrarVivido(); return; }
    if ($("#vTv").hidden) return;
    var tag = (e.target.tagName || "").toLowerCase();
    if (tag === "input" || tag === "textarea") return;
    var k = e.key;
    if ((k === " " || k === "Enter") && (tag === "button" || tag === "a")) return;
    if (k === "ArrowRight" || k === "PageDown" || k === " " || k === "Enter") { e.preventDefault(); siguiente(); }
    else if (k === "ArrowLeft" || k === "PageUp") { e.preventDefault(); anterior(); }
    else if (k === "Home") { e.preventDefault(); ir(0); }
    else if (k === "End") { e.preventDefault(); ir(escenas.length - 1); }
    else if (k === "f" || k === "F") { pantallaCompleta(); }
  });
  // deslizar en celulares
  var x0 = null, y0 = null;
  $("#escenario").addEventListener("touchstart", function(e){ x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
  $("#escenario").addEventListener("touchend", function(e){
    if (x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0; x0 = null;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) { dx < 0 ? siguiente() : anterior(); }
  });
  // los controles se atenúan cuando quien guía no mueve el mouse
  var quietoT = null;
  function despierta(){ var tv = $("#vTv"); tv.classList.remove("quieto"); clearTimeout(quietoT); if (matchMedia("(hover:hover)").matches) quietoT = setTimeout(function(){ tv.classList.add("quieto"); }, 3500); }
  document.addEventListener("mousemove", despierta); document.addEventListener("keydown", despierta);

  // reloj (hora de Lima)
  function reloj(){
    try { $("#reloj").textContent = new Intl.DateTimeFormat("es-PE", { timeZone: "America/Lima", hour: "numeric", minute: "2-digit", hour12: true }).format(new Date()).replace(/\s?a\.?\s?m\.?/i, " a. m.").replace(/\s?p\.?\s?m\.?/i, " p. m."); } catch(e){}
  }
  reloj(); setInterval(reloj, 15000);

  window.addEventListener("hashchange", function(){
    if (!leer(CLAVE_OK, 0)) return;
    var m = location.hash.match(/^#dia-(\d{4}-\d{2}-\d{2})$/);
    var i = m ? D.findIndex(function(d){ return d.f === m[1]; }) : -1;
    if (i >= 0 && i !== idx && abierto(D[i])) abrirDia(i, 0);
  });

  /* ---------- arranque ---------- */
  if (leer(CLAVE_OK, 0)) entrar(); else iniciarEntrada();
})();
