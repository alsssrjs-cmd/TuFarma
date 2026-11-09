(function () {
  'use strict';
  // ---------- Datos ----------
  var INDICE = window.INDICE || [];
  window.TEMAS_DATA = {};
  window.registrarTema = function (t) { if (t && t.id) window.TEMAS_DATA[t.id] = t; };

  var PARCIALES = {
    '1': { nombre: '1.er Parcial', sub: 'Farmacología general + SNA' },
    '2': { nombre: '2.º Parcial', sub: 'Farmacología especial' },
    '3': { nombre: '3.er Parcial', sub: 'Farmacología clínica' },
    'F': { nombre: 'Examen Final', sub: 'Acumulativo: lo que más cae de los 3' }
  };
  var app = document.getElementById('app');
  var backBtn = document.getElementById('back');
  var banner = document.getElementById('banner');

  // ---------- Utilidades ----------
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  // texto con **negrita**; nunca innerHTML
  function rich(parent, text) {
    String(text).split(/(\*\*[^*]+\*\*)/).forEach(function (part) {
      if (!part) return;
      if (part.slice(0, 2) === '**' && part.slice(-2) === '**') {
        parent.appendChild(el('strong', null, part.slice(2, -2)));
      } else {
        parent.appendChild(document.createTextNode(part));
      }
    });
    return parent;
  }
  function para(text) {
    var p = rich(el('p'), text);
    if (String(text).indexOf('⚠') !== -1) p.className = 'warn';
    return p;
  }
  function norm(s) { return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function fire(n) { return n >= 2 ? '🔥🔥' : n === 1 ? '🔥' : ''; }
  function showError(msg) { banner.textContent = '⚠ ' + msg; banner.hidden = false; }
  function clearError() { banner.hidden = true; }
  function clear() { while (app.firstChild) app.removeChild(app.firstChild); }
  function porId(id) { for (var i = 0; i < INDICE.length; i++) if (INDICE[i].id === id) return INDICE[i]; return null; }
  function esFinal(t) { return t.fuego >= 2; }
  function temasDe(p) {
    return INDICE.filter(function (t) { return p === 'F' ? esFinal(t) : String(t.parcial) === p; });
  }

  // ---------- Filtros ----------
  var DOCENTES = ['Calvimonte', 'Jacobs', 'Peralta', 'Zabala', 'Crespo'];
  var CLAVE_FILTRO = 'farma-filtro-v1';
  function tieneDocente(t, d) { return norm(t.docente).indexOf(norm(d)) !== -1; } // «Dr. Jacobs / Dra. Crespo» cuenta para ambos
  function parcialesDeDocente(d) {
    var o = [];
    INDICE.forEach(function (t) { var p = String(t.parcial); if (tieneDocente(t, d) && o.indexOf(p) === -1) o.push(p); });
    return o.sort();
  }
  function cargarFiltro() {
    var s = { p: '', d: '', f: false };
    try {
      var j = JSON.parse(localStorage.getItem(CLAVE_FILTRO) || 'null');
      if (j && typeof j === 'object') {
        if (['1', '2', '3', 'F'].indexOf(j.p) !== -1) s.p = j.p;
        if (DOCENTES.indexOf(j.d) !== -1) s.d = j.d;
        s.f = j.f === true;
      }
    } catch (e) { /* sin memoria: empieza limpio */ }
    return s;
  }
  function guardarFiltro(s) { try { localStorage.setItem(CLAVE_FILTRO, JSON.stringify(s)); } catch (e) { /* ignorar */ } }

  // ---------- Vistas ----------
  function itemTema(t, mostrarParcial) {
    var a = el('a', 'item'); a.href = '#/t/' + encodeURIComponent(t.id);
    var tt = el('div', 't');
    if (t.fuego) tt.appendChild(el('span', 'fire', fire(t.fuego) + ' '));
    tt.appendChild(document.createTextNode(t.titulo));
    tt.appendChild(el('span', t.archivo ? 'badge ok' : 'badge', t.archivo ? 'Resumen listo' : 'Pendiente'));
    a.appendChild(tt);
    a.appendChild(el('div', 'm', (mostrarParcial ? 'P' + t.parcial + ' · ' : '') + t.docente));
    return a;
  }
  function lista(temas, mostrarParcial) {
    var ul = el('ul', 'list');
    temas.forEach(function (t) { var li = el('li'); li.appendChild(itemTema(t, mostrarParcial)); ul.appendChild(li); });
    return ul;
  }

  function vistaInicio() {
    clear(); backBtn.hidden = true; document.title = 'Farmacología Final';
    app.appendChild(el('h1', null, 'Farmacología — Final'));
    app.appendChild(el('p', 'sub', 'Elige parcial, o busca un tema o fármaco.'));
    var inp = el('input'); inp.type = 'search'; inp.placeholder = 'Buscar: atropina, insulina, AINEs…';
    inp.setAttribute('aria-label', 'Buscar tema'); inp.autocomplete = 'off';
    app.appendChild(inp);
    var res = el('div'); var grid = el('div', 'grid');
    ['1', '2', '3', 'F'].forEach(function (p) {
      var ts = temasDe(p);
      var listos = ts.filter(function (t) { return t.archivo; }).length;
      var a = el('a', 'pcard' + (p === 'F' ? ' final' : '')); a.href = '#/p/' + p;
      a.appendChild(el('strong', null, PARCIALES[p].nombre));
      a.appendChild(el('span', null, PARCIALES[p].sub));
      a.appendChild(el('br'));
      a.appendChild(el('span', null, ts.length + ' temas · ' + listos + (listos === 1 ? ' resumido' : ' resumidos')));
      grid.appendChild(a);
    });
    var bar = el('div', 'filters');
    app.appendChild(bar); app.appendChild(grid); app.appendChild(res);
    var st = cargarFiltro();

    function chip(txt, activo, onClick, extra) {
      var b = el('button', 'fchip' + (activo ? ' on' : '') + (extra ? ' ' + extra : ''), txt);
      b.type = 'button'; b.setAttribute('aria-pressed', activo ? 'true' : 'false');
      b.addEventListener('click', onClick);
      return b;
    }
    function fila(titulo) {
      var r = el('div', 'frow'); r.appendChild(el('span', 'flabel', titulo)); bar.appendChild(r); return r;
    }
    function cambiar(k, v) { st[k] = v; guardarFiltro(st); pintar(); }

    function pintar() {
      // docente elegido: solo sus parciales; si el parcial elegido ya no existe, vuelve a Todos
      var disp = st.d ? parcialesDeDocente(st.d) : ['1', '2', '3'];
      if (st.p && st.p !== 'F' && disp.indexOf(st.p) === -1) { st.p = ''; guardarFiltro(st); }
      while (bar.firstChild) bar.removeChild(bar.firstChild);
      var r1 = fila(st.d ? 'Parciales de ' + st.d : 'Parcial');
      r1.appendChild(chip('Todos', !st.p, function () { cambiar('p', ''); }));
      disp.forEach(function (p) { r1.appendChild(chip(p + '.º', st.p === p, function () { cambiar('p', st.p === p ? '' : p); })); });
      r1.appendChild(chip('Final', st.p === 'F', function () { cambiar('p', st.p === 'F' ? '' : 'F'); }));
      var r2 = fila('Docente');
      DOCENTES.forEach(function (d) { r2.appendChild(chip(d, st.d === d, function () { cambiar('d', st.d === d ? '' : d); })); });
      var r3 = fila('Examen');
      r3.appendChild(chip('🔥🔥 Más entran en exámenes', st.f, function () { cambiar('f', !st.f); }, 'fire'));
      var hay = !!(st.p || st.d || st.f);
      if (hay) {
        var lim = el('button', 'fclear', 'Limpiar filtros'); lim.type = 'button';
        lim.addEventListener('click', function () { st = { p: '', d: '', f: false }; guardarFiltro(st); pintar(); });
        r3.appendChild(lim);
      }
      lista_();
    }

    function lista_() {
      var q = norm(inp.value.trim());
      var hay = !!(st.p || st.d || st.f);
      while (res.firstChild) res.removeChild(res.firstChild);
      grid.hidden = hay || q.length > 0;
      if (!hay && !q) return;
      var hits = INDICE.filter(function (t) {
        if (st.p && st.p !== 'F' && String(t.parcial) !== st.p) return false;
        if (st.d && !tieneDocente(t, st.d)) return false;
        if (st.f && !(t.fuego >= 2)) return false;
        if (q && norm(t.titulo + ' ' + t.docente + ' ' + (t.claves || []).join(' ')).indexOf(q) === -1) return false;
        return true;
      });
      // Final o 🔥: más frecuentes primero (orden estable por parcial)
      if (st.p === 'F' || st.f) {
        hits = hits.map(function (t, i) { return [t, i]; }).sort(function (a, b) {
          return ((b[0].fuego || 0) - (a[0].fuego || 0)) || (a[1] - b[1]);
        }).map(function (x) { return x[0]; });
      }
      res.appendChild(el('div', 'group count', hits.length + (hits.length === 1 ? ' tema' : ' temas')));
      if (hits.length) res.appendChild(lista(hits, true));
      else {
        var v = el('div', 'empty');
        v.appendChild(el('p', null, 'Ningún tema coincide con estos filtros' + (q ? ' y la búsqueda.' : '.')));
        var b = el('button', 'fclear', 'Limpiar filtros y búsqueda'); b.type = 'button';
        b.addEventListener('click', function () { st = { p: '', d: '', f: false }; guardarFiltro(st); inp.value = ''; pintar(); });
        v.appendChild(b); res.appendChild(v);
      }
    }
    inp.addEventListener('input', lista_);
    pintar();
  }

  function vistaParcial(p) {
    if (!PARCIALES[p]) { return vistaInicio(); }
    clear(); backBtn.hidden = false; document.title = PARCIALES[p].nombre;
    app.appendChild(el('h1', null, PARCIALES[p].nombre));
    app.appendChild(el('p', 'sub', PARCIALES[p].sub));
    if (p === 'F') {
      app.appendChild(el('div', 'note', 'El Final reúne los temas 🔥🔥 de los tres parciales (los que más caen). Ver frecuencia-examenes.md.'));
      ['1', '2', '3'].forEach(function (q) {
        var ts = temasDe('F').filter(function (t) { return String(t.parcial) === q; });
        if (!ts.length) return;
        app.appendChild(el('div', 'group', PARCIALES[q].nombre));
        app.appendChild(lista(ts, false));
      });
    } else {
      app.appendChild(lista(temasDe(p), false));
    }
    app.focus();
  }

  function vistaTema(id) {
    var meta = porId(id);
    if (!meta) { showError('Tema no encontrado.'); return vistaInicio(); }
    function cabecera() {
      clear();
      app.appendChild(el('h1', null, (meta.fuego ? fire(meta.fuego) + ' ' : '') + meta.titulo));
      var chips = el('div', 'chips');
      chips.appendChild(el('span', 'chip', PARCIALES[meta.parcial].nombre));
      chips.appendChild(el('span', 'chip', meta.docente));
      app.appendChild(chips);
    }
    backBtn.hidden = false; document.title = meta.titulo; cabecera();
    if (!meta.archivo) {
      app.appendChild(el('div', 'note', 'Este tema aún no está resumido en Modo Profe.' + (meta.fuente ? '' : ' ⚠ No hay diapositivas descargadas para este tema.')));
      if (meta.fuente) app.appendChild(el('p', 'sub', 'Fuente: ' + meta.fuente));
      return;
    }
    if (window.TEMAS_DATA[id]) return pintarTema(window.TEMAS_DATA[id]);
    var cargando = el('p', 'loading', 'Cargando tema…'); app.appendChild(cargando);
    var s = document.createElement('script');
    var done = false;
    var timer = setTimeout(function () { fin(false); }, 8000);
    function fin(ok) {
      if (done) return; done = true; clearTimeout(timer);
      if (location.hash.indexOf(encodeURIComponent(id)) === -1) return; // el usuario ya se fue
      if (ok && window.TEMAS_DATA[id]) { cabecera(); pintarTema(window.TEMAS_DATA[id]); }
      else {
        cargando.textContent = 'No se pudo cargar el tema (archivo ' + meta.archivo + ').';
        var b = el('button', 'back', 'Reintentar'); b.type = 'button'; b.style.color = 'inherit';
        b.style.background = 'var(--brand)'; b.style.color = 'var(--brand-ink)';
        b.addEventListener('click', function () { vistaTema(id); });
        app.appendChild(b);
      }
    }
    s.onload = function () { fin(true); };
    s.onerror = function () { fin(false); };
    s.src = 'data/' + meta.archivo;
    document.head.appendChild(s);
  }

  // ---------- Pantalla de resumen (Modo Profe) ----------
  function pintarTema(t) {
    var f = t.ficha || {};
    var chips = el('div', 'chips');
    if (f.fuente) chips.appendChild(el('span', 'chip', '📄 ' + f.fuente));
    if (f.diapositivas) chips.appendChild(el('span', 'chip', 'Diapositivas: ' + f.diapositivas));
    if (f.examenes) chips.appendChild(el('span', 'chip', '📝 ' + f.examenes));
    app.appendChild(chips);
    (f.avisos || []).forEach(function (a) { app.appendChild(para(a)); });

    var secs = [];
    function sec(id, titulo) {
      var s = el('section'); s.id = 'sec-' + id; s.appendChild(el('h2', null, titulo));
      app.appendChild(s); secs.push([id, titulo]); return s;
    }
    var nav = el('div', 'nav'); app.appendChild(nav);

    if (t.diapositiva && t.diapositiva.length) {
      var s1 = sec('diap', 'En la diapositiva');
      t.diapositiva.forEach(function (b) {
        if (b.titulo) s1.appendChild(el('h3', null, b.titulo));
        var ul = el('ul', 'pts');
        (b.puntos || []).forEach(function (p) { var li = rich(el('li'), p); if (p.indexOf('⚠') !== -1) li.className = 'warn'; ul.appendChild(li); });
        s1.appendChild(ul);
      });
    }
    if (t.explicacion && t.explicacion.length) {
      var s2 = sec('expl', 'Lo que dices (explicación)');
      t.explicacion.forEach(function (b) {
        if (b.titulo) s2.appendChild(el('h3', null, b.titulo));
        (b.p || []).forEach(function (x) { s2.appendChild(para(x)); });
        if (b.pausa) {
          var d = el('details', 'pausa'); d.appendChild(el('summary', null, '🤔 ' + b.pausa.q));
          d.appendChild(rich(el('div', 'ans'), b.pausa.a)); s2.appendChild(d);
        }
      });
    }
    if (t.memoria && t.memoria.filas) {
      var s3 = sec('mem', 'Cuadro de memoria');
      var wrap = el('div', 'tablewrap'); var tb = el('table');
      var th = el('thead'); var trh = el('tr');
      t.memoria.columnas.forEach(function (c) { trh.appendChild(el('th', null, c)); });
      th.appendChild(trh); tb.appendChild(th);
      var body = el('tbody');
      t.memoria.filas.forEach(function (r) {
        var tr = el('tr');
        r.forEach(function (c, i) { var td = rich(el('td'), c); td.setAttribute('data-l', t.memoria.columnas[i]); tr.appendChild(td); });
        body.appendChild(tr);
      });
      tb.appendChild(body); wrap.appendChild(tb); s3.appendChild(wrap);
      (t.memoria.notas || []).forEach(function (n) { s3.appendChild(para(n)); });
    }
    if (t.preguntan && t.preguntan.length) {
      var s4 = sec('preg', 'Lo que preguntan');
      t.preguntan.forEach(function (q) {
        var box = el('div', 'q'); box.appendChild(el('div', 'tag', q.tipo));
        box.appendChild(rich(el('div'), q.texto));
        if (q.trampa) box.appendChild(rich(el('div', 'trap'), '🪤 Trampa: ' + q.trampa));
        s4.appendChild(box);
      });
    }
    if (t.consejo) {
      var s5 = sec('cons', 'Consejo');
      (Array.isArray(t.consejo) ? t.consejo : [t.consejo]).forEach(function (c) { var d = rich(el('div', 'tip'), c); s5.appendChild(d); });
    }
    secs.forEach(function (s) {
      var b = el('button', null, s[1].replace(/ \(.*\)/, '')); b.type = 'button';
      b.addEventListener('click', function () {
        var e = document.getElementById('sec-' + s[0]);
        if (e) e.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      nav.appendChild(b);
    });
  }

  // ---------- Router ----------
  function route() {
    clearError();
    var h = location.hash.replace(/^#\/?/, '');
    var parts = h.split('/');
    try {
      if (parts[0] === 'p' && parts[1]) vistaParcial(decodeURIComponent(parts[1]));
      else if (parts[0] === 't' && parts[1]) vistaTema(decodeURIComponent(parts[1]));
      else vistaInicio();
    } catch (e) { showError('Error al mostrar la pantalla: ' + e.message); }
    window.scrollTo(0, 0);
  }
  backBtn.addEventListener('click', function () {
    var h = location.hash.replace(/^#\/?/, '').split('/');
    if (h[0] === 't') {
      var m = porId(decodeURIComponent(h[1] || ''));
      location.hash = m ? '#/p/' + m.parcial : '#/';
    } else location.hash = '#/';
  });
  window.addEventListener('hashchange', route);
  window.addEventListener('error', function (e) { showError('Error inesperado: ' + e.message); });
  route();

  // ---------- Offline ----------
  if (/^https?:$/.test(location.protocol)) { // el manifest solo se enlaza por http(s); en file:// daba error de consola
    var lm = document.createElement('link'); lm.rel = 'manifest'; lm.href = 'manifest.webmanifest'; document.head.appendChild(lm);
  }
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    navigator.serviceWorker.register('sw.js').catch(function () { /* sin offline, sigue funcionando */ });
  }
})();
