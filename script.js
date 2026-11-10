document.addEventListener('DOMContentLoaded', function () {
  var menuBoton = document.getElementById('menuBoton'), nav = document.getElementById('menuPrincipal');
  function cerrarMenuMovil() {
    if (!nav || !menuBoton) return;
    nav.classList.remove('abierto');
    document.body.classList.remove('menu-abierto');
    menuBoton.setAttribute('aria-expanded', 'false');
    menuBoton.setAttribute('aria-label', 'Abrir menú');
  }
  if (menuBoton && nav) {
    menuBoton.addEventListener('click', function () {
      var abierto = !nav.classList.contains('abierto');
      nav.classList.toggle('abierto', abierto);
      document.body.classList.toggle('menu-abierto', abierto);
      menuBoton.setAttribute('aria-expanded', abierto ? 'true' : 'false');
      menuBoton.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') cerrarMenuMovil();
    });
  }

  var navDrop = document.querySelector('.nav-drop'), navDropBoton = document.getElementById('masSeccionesBoton');
  if (navDrop && navDropBoton) {
    navDropBoton.addEventListener('click', function (e) {
      e.stopPropagation();
      var abierto = navDrop.classList.toggle('abierto');
      navDropBoton.setAttribute('aria-expanded', abierto ? 'true' : 'false');
    });
    document.addEventListener('click', function (e) {
      if (!navDrop.contains(e.target)) { navDrop.classList.remove('abierto'); navDropBoton.setAttribute('aria-expanded','false'); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { navDrop.classList.remove('abierto'); navDropBoton.setAttribute('aria-expanded','false'); }
    });
  }

  var contador = document.getElementById('contadorFestival');
  if (contador) {
    var fechaObjetivo = new Date(contador.dataset.fecha).getTime();
    function actualizar() {
      var dif = fechaObjetivo - new Date().getTime();
      if (dif <= 0) return;
      document.getElementById('cDias').textContent = String(Math.floor(dif/864e5)).padStart(2,'0');
      document.getElementById('cHoras').textContent = String(Math.floor(dif/36e5%24)).padStart(2,'0');
      document.getElementById('cMin').textContent = String(Math.floor(dif/6e4%60)).padStart(2,'0');
      document.getElementById('cSeg').textContent = String(Math.floor(dif/1e3%60)).padStart(2,'0');
    }
    actualizar(); setInterval(actualizar, 1000);
  }

  document.querySelectorAll('.dias-tabs button').forEach(function (tab) {
    tab.addEventListener('click', function () {
      document.querySelectorAll('.dias-tabs button').forEach(function(t){t.classList.remove('activo');});
      document.querySelectorAll('.dia-panel').forEach(function(p){p.classList.remove('activo');});
      tab.classList.add('activo');
      document.getElementById(tab.dataset.dia).classList.add('activo');
    });
  });

  document.querySelectorAll('.acordeon-item__pregunta').forEach(function (boton) {
    boton.addEventListener('click', function () {
      var item = boton.closest('.acordeon-item');
      var resp = item.querySelector('.acordeon-item__respuesta');
      var abierto = item.classList.toggle('abierto');
      resp.style.maxHeight = abierto ? resp.scrollHeight + 'px' : 0;
    });
  });

  var banner = document.getElementById('cookiesBanner');
  try {
    if (!localStorage.getItem('festival_unad_cookies_preview')) banner.hidden = false;
  } catch(e){ banner.hidden = false; }
  document.getElementById('cookiesAceptar').addEventListener('click', function(){
    try{ localStorage.setItem('festival_unad_cookies_preview','todas'); }catch(e){}
    banner.hidden = true;
  });
  document.getElementById('cookiesRechazar').addEventListener('click', function(){
    try{ localStorage.setItem('festival_unad_cookies_preview','esenciales'); }catch(e){}
    banner.hidden = true;
  });
  // Garantiza que el aviso desaparezca visualmente al aceptar o rechazar,
  // incluso si una regla CSS de display:flex intenta prevalecer sobre [hidden].
  function cerrarAvisoCookies(){
    banner.hidden = true;
    banner.style.display = 'none';
    banner.setAttribute('aria-hidden','true');
  }
  document.getElementById('cookiesAceptar').addEventListener('click', cerrarAvisoCookies);
  document.getElementById('cookiesRechazar').addEventListener('click', cerrarAvisoCookies);

  // Revelado progresivo al desplazarse, barra de lectura y acceso rápido al inicio.
  document.querySelectorAll('main section, main .tarjeta, main .seccion__cabecera, main .galeria figure, main .evento-fila, main .formulario').forEach(function(el){
    el.classList.add('reveal');
  });
  if ('IntersectionObserver' in window) {
    var observador = new IntersectionObserver(function(entradas){
      entradas.forEach(function(entrada){
        if(entrada.isIntersecting){ entrada.target.classList.add('visible'); observador.unobserve(entrada.target); }
      });
    }, {threshold:0.12});
    document.querySelectorAll('.reveal').forEach(function(el){observador.observe(el);});
  } else {
    document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('visible');});
  }
  var arriba = document.getElementById('volverArriba');
  function actualizarScroll(){
    arriba.classList.toggle('visible', window.scrollY > 500);
  }
  window.addEventListener('scroll', actualizarScroll, {passive:true});
  actualizarScroll();
  arriba.addEventListener('click', function(){window.scrollTo({top:0,behavior:'smooth'});});
  // En móvil, cerrar el menú al elegir una sección.
  if(nav) nav.querySelectorAll('a').forEach(function(enlace){
    enlace.addEventListener('click', cerrarMenuMovil);
  });


  // Las opciones pendientes del menú se muestran como vistas de página en construcción.
  var paginaConstruccion = document.getElementById('paginaConstruccion');
  var tituloConstruccion = document.getElementById('construccionTitulo');
  var descripcionConstruccion = document.getElementById('construccionDescripcion');
  var seccionesPrincipales = Array.prototype.slice.call(document.querySelectorAll('main > section')).filter(function(sec){return sec.id !== 'paginaConstruccion';});
  function abrirConstruccion(enlace){
    var texto = (enlace.textContent || '').replace(/[📌📄🏛️🎉🔍🏆📅🧑‍⚖️🎙️🎖️💬🌱📖🌟🚀🎪📰🍽️📈📷]/gu,'').trim();
    if(tituloConstruccion) tituloConstruccion.textContent = texto || 'Próximamente';
    if(descripcionConstruccion) descripcionConstruccion.textContent = 'Estamos preparando la sección “' + (texto || 'Festival Vallenato') + '”. Muy pronto encontrarás aquí información oficial, contenidos y novedades de esta edición del Festival Internacional Universitario de Música Vallenata.';
    seccionesPrincipales.forEach(function(sec){sec.hidden = true;});
    if(paginaConstruccion){paginaConstruccion.hidden = false; paginaConstruccion.classList.add('visible');}
    if(navDrop) navDrop.classList.remove('abierto');
    if(navDropBoton) navDropBoton.setAttribute('aria-expanded','false');
    if(nav) nav.classList.remove('abierto');
    if(menuBoton) menuBoton.setAttribute('aria-expanded','false');
    history.replaceState(null, '', '#paginaConstruccion');
    window.scrollTo({top:0,behavior:'smooth'});
  }
  document.querySelectorAll('[data-construccion]').forEach(function(enlace){
    enlace.addEventListener('click', function(e){e.preventDefault();abrirConstruccion(enlace);});
  });
  function mostrarContenidoPrincipal(){
    if(paginaConstruccion) paginaConstruccion.hidden = true;
    seccionesPrincipales.forEach(function(sec){sec.hidden = false;});
  }
  if(nav) nav.querySelectorAll('a[href^="#"]:not([data-construccion])').forEach(function(enlace){
    enlace.addEventListener('click', function(){mostrarContenidoPrincipal();});
  });
  document.querySelectorAll('a[href="#inicio"]').forEach(function(enlace){
    enlace.addEventListener('click', function(){mostrarContenidoPrincipal();});
  });

  // El botón APP queda preparado para que se agregue el enlace definitivo después.
  document.querySelectorAll('[data-app-placeholder]').forEach(function(enlace){
    enlace.addEventListener('click', function(event){
      if(enlace.getAttribute('href') === '#'){
        event.preventDefault();
        alert('El enlace de la APP está pendiente de configurar. Puedes agregarlo en el atributo href de este botón.');
      }
    });
  });


  // ===== Ventana emergente de cada edición del Festival =====
  // Todas las ediciones usan la MISMA estructura. Para completar una edición, edita su bloque aquí.
  // La clave es el número romano de la tarjeta. Lo que quede vacío ('') se muestra como "Por confirmar".
  //  - banner:   enlace (https) de la imagen tipo banner del encabezado.
  //  - video:    enlace de inserción (https), por ejemplo https://www.youtube.com/embed/ID_DEL_VIDEO
  //  - fotos:    lista de enlaces (https) de imágenes, uno por foto: ['https://...jpg', 'https://...jpg']
  //  - enlace:   fuente oficial; si queda vacío se usa el enlace de la tarjeta (si lo tiene).
  //  - detalle:  texto opcional; si queda vacío se usa la descripción de la tarjeta.
  var EDICIONES = {
    'I':   { anio: '2020', fechas: '', sede: '', modalidad: 'Virtual', homenaje: '', banner: 'images/I-FESTIVAL.jpg', video: '', fotos: [], enlace: '', detalle: '' },
    'II':  { anio: '', fechas: '', sede: '', modalidad: '', homenaje: '', banner: 'images/II-FESTIVAL.jpg', video: 'https://www.youtube.com/embed/FoPTj0aptV0', fotos: [], enlace: '', detalle: '' },
    'III': { anio: '2022', fechas: '', sede: '', modalidad: 'Virtual', homenaje: 'Rita Fernández Padilla', banner: 'images/III-FESTIVAL.jpg', video: 'https://www.youtube.com/embed/9c56cUg5JlM', fotos: [], enlace: '', detalle: '' },
    'IV':  { anio: '', fechas: '', sede: '', modalidad: '', homenaje: '', banner: 'images/IV-FESTIVAL.jpg', video: 'https://www.youtube.com/embed/XNdsrA1vLRY', fotos: [], enlace: '', detalle: '' },
    'V':   { anio: '2024', fechas: '', sede: '', modalidad: '', homenaje: 'Silvio Brito', banner: 'images/V-FESTIVAL.jpg', video: 'https://www.youtube.com/embed/q04_bxr2y9Y', fotos: [], enlace: '', detalle: '' },
    'VI':  { anio: '2025', fechas: '', sede: '', modalidad: '', homenaje: 'El Pollo Irra', banner: 'images/VI-FESTIVAL.png', video: 'https://www.youtube.com/embed/XNdsrA1vLRY', fotos: [], enlace: '', detalle: '' },
    'VII': {
      anio: '2026',
      fechas: '17 al 19 de noviembre de 2026',
      sede: 'CEAD Valledupar',
      modalidad: 'Híbrida, con transmisión por TV UNAD Virtual',
      homenaje: 'Poncho Zuleta y Cocha Molina',
      banner: 'images/VII-FESTIVAL.png', video: '', fotos: [], enlace: '',
      detalle: 'Tres días de acordeón, canción inédita y piquería, con actividades académicas y conciertos en torno al legado de los maestros homenajeados.'
    }
  };
  var CASILLAS_FOTOS = 4;
  var POR_CONFIRMAR = 'Por confirmar';

  var edicionModal = document.getElementById('edicionModal');
  var ventanaModal = edicionModal ? edicionModal.querySelector('.edicion-modal__ventana') : null;
  var cerrarEdicionModal = document.getElementById('cerrarEdicionModal');
  var bannerModal = document.getElementById('edicionModalBanner');
  var datosModal = document.getElementById('edicionModalDatos');
  var detalleModal = document.getElementById('edicionModalDetalle');
  var enlaceModal = document.getElementById('edicionModalEnlace');
  var videoModal = document.getElementById('edicionModalVideo');
  var pistaFotos = document.getElementById('edicionModalFotos');
  var fotosAnterior = document.getElementById('edicionFotosAnterior');
  var fotosSiguiente = document.getElementById('edicionFotosSiguiente');
  var edicionModalAnteriorFocus = null;

  function crear(etiqueta, clase, texto) {
    var nodo = document.createElement(etiqueta);
    if (clase) nodo.className = clase;
    if (texto !== undefined && texto !== null) nodo.textContent = texto;
    return nodo;
  }
  function esHttps(url) { return typeof url === 'string' && /^https:\/\//i.test(url.trim()); }

  function pintarBanner(url, titulo) {
    bannerModal.textContent = '';
    if (esHttps(url) || /^images\/(I|II|III|IV|V)-FESTIVAL\.jpg$|^images\/(VI|VII)-FESTIVAL\.png$/i.test(String(url || '').trim())) {
      var img = crear('img');
      img.src = url.trim();
      img.alt = 'Banner de la ' + titulo;
      img.loading = 'lazy';
      bannerModal.appendChild(img);
    }
  }
  function pintarDatos(info, titulo) {
    datosModal.textContent = '';
    [
      ['Edición', titulo],
      ['Año', info.anio],
      ['Fechas', info.fechas],
      ['Sede', info.sede],
      ['Modalidad', info.modalidad],
      ['Homenaje', info.homenaje]
    ].forEach(function (par) {
      var fila = crear('div', 'em-dato');
      fila.appendChild(crear('dt', null, par[0]));
      fila.appendChild(crear('dd', null, par[1] || POR_CONFIRMAR));
      datosModal.appendChild(fila);
    });
  }
  function pintarEnlace(url) {
    if (esHttps(url)) {
      enlaceModal.href = url.trim();
      enlaceModal.textContent = 'Consultar fuente oficial ↗';
      enlaceModal.classList.remove('em-enlace--inactivo');
      enlaceModal.removeAttribute('aria-disabled');
      enlaceModal.removeAttribute('tabindex');
      enlaceModal.target = '_blank';
    } else {
      enlaceModal.removeAttribute('href');
      enlaceModal.removeAttribute('target');
      enlaceModal.textContent = 'Enlace oficial por incorporar';
      enlaceModal.classList.add('em-enlace--inactivo');
      enlaceModal.setAttribute('aria-disabled', 'true');
      enlaceModal.setAttribute('tabindex', '-1');
    }
  }
  function pintarVideo(url, titulo) {
    videoModal.textContent = '';
    if (esHttps(url)) {
      var marco = crear('iframe');
      marco.src = url.trim();
      marco.title = 'Video de la ' + titulo;
      marco.loading = 'lazy';
      marco.allowFullscreen = true;
      marco.setAttribute('allow', 'accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen');
      marco.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
      videoModal.appendChild(marco);
    }
  }
  function pintarFotos(fotos, titulo) {
    pistaFotos.textContent = '';
    var validas = (fotos || []).filter(esHttps);
    validas.forEach(function (url, i) {
      var fig = crear('figure', 'em-foto');
      var img = crear('img');
      img.src = url.trim();
      img.alt = 'Fotografía ' + (i + 1) + ' de la ' + titulo;
      img.loading = 'lazy';
      fig.appendChild(img);
      pistaFotos.appendChild(fig);
    });
    for (var i = validas.length; i < CASILLAS_FOTOS; i++) {
      var vacia = crear('figure', 'em-foto em-foto--vacia');
      vacia.setAttribute('aria-hidden', 'true');
      pistaFotos.appendChild(vacia);
    }
    pistaFotos.scrollLeft = 0;
  }
  function actualizarFlechasFotos() {
    if (!pistaFotos) return;
    fotosAnterior.disabled = pistaFotos.scrollLeft <= 4;
    fotosSiguiente.disabled = pistaFotos.scrollLeft + pistaFotos.clientWidth >= pistaFotos.scrollWidth - 4;
  }
  function abrirEdicionModal(card) {
    if (!edicionModal || !card) return;
    var marco = card.querySelector('.edicion-card__marco');
    if (!marco) return;
    var numeroNodo = marco.querySelector('.edicion-card__numero');
    var tituloNodo = marco.querySelector('h3');
    var descripcionNodo = marco.querySelector('p');
    var enlaceNodo = marco.querySelector('a[href^="http"]');
    var numero = numeroNodo ? numeroNodo.textContent.trim() : '';
    var titulo = tituloNodo ? tituloNodo.textContent : 'Edición del Festival';
    var info = EDICIONES[numero] || {};

    document.getElementById('edicionModalTitulo').textContent = titulo;
    pintarBanner(info.banner, titulo);
    pintarDatos(info, titulo);
    detalleModal.textContent = info.detalle || (descripcionNodo ? descripcionNodo.textContent : '');
    pintarEnlace(info.enlace || (enlaceNodo ? enlaceNodo.href : ''));
    pintarVideo(info.video, titulo);
    pintarFotos(info.fotos, titulo);

    edicionModalAnteriorFocus = document.activeElement;
    edicionModal.hidden = false;
    document.body.classList.add('edicion-modal-abierto');
    if (ventanaModal) ventanaModal.scrollTop = 0;
    actualizarFlechasFotos();
    if (cerrarEdicionModal) cerrarEdicionModal.focus();
  }
  function cerrarModalEdicion() {
    if (!edicionModal || edicionModal.hidden) return;
    edicionModal.hidden = true;
    videoModal.textContent = ''; // detiene la reproducción del video al cerrar
    document.body.classList.remove('edicion-modal-abierto');
    if (edicionModalAnteriorFocus && typeof edicionModalAnteriorFocus.focus === 'function') edicionModalAnteriorFocus.focus();
  }
  document.querySelectorAll('.edicion-card').forEach(function (card) {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-haspopup', 'dialog');
    card.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      abrirEdicionModal(card);
    });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        abrirEdicionModal(card);
      }
    });
  });
  if (cerrarEdicionModal) cerrarEdicionModal.addEventListener('click', cerrarModalEdicion);
  if (edicionModal) {
    edicionModal.querySelectorAll('[data-cerrar-edicion]').forEach(function (nodo) { nodo.addEventListener('click', cerrarModalEdicion); });
  }
  if (enlaceModal) {
    enlaceModal.addEventListener('click', function (e) {
      if (enlaceModal.getAttribute('aria-disabled') === 'true') e.preventDefault();
    });
  }
  if (pistaFotos && fotosAnterior && fotosSiguiente) {
    fotosAnterior.addEventListener('click', function () { pistaFotos.scrollBy({ left: -pistaFotos.clientWidth * 0.85 }); });
    fotosSiguiente.addEventListener('click', function () { pistaFotos.scrollBy({ left: pistaFotos.clientWidth * 0.85 }); });
    pistaFotos.addEventListener('scroll', actualizarFlechasFotos, { passive: true });
    window.addEventListener('resize', actualizarFlechasFotos);
  }
  document.addEventListener('keydown', function (e) {
    if (!edicionModal || edicionModal.hidden) return;
    if (e.key === 'Escape') { cerrarModalEdicion(); return; }
    if (e.key === 'Tab' && ventanaModal) {
      // Mantiene el foco dentro de la ventana mientras está abierta.
      var enfocables = Array.prototype.filter.call(
        ventanaModal.querySelectorAll('button:not([disabled]), a[href], iframe, [tabindex="0"]'),
        function (nodo) { return nodo.offsetParent !== null; }
      );
      if (!enfocables.length) return;
      var primero = enfocables[0], ultimo = enfocables[enfocables.length - 1];
      if (!ventanaModal.contains(document.activeElement)) { e.preventDefault(); primero.focus(); }
      else if (e.shiftKey && document.activeElement === primero) { e.preventDefault(); ultimo.focus(); }
      else if (!e.shiftKey && document.activeElement === ultimo) { e.preventDefault(); primero.focus(); }
    }
  });

  // Navegación del pasillo 3D por ediciones.
  var pasillo = document.querySelector('.pasillo-recorrido');
  var anterior = document.getElementById('pasilloAnterior');
  var siguiente = document.getElementById('pasilloSiguiente');
  if(pasillo && anterior && siguiente){
    anterior.addEventListener('click', function(){pasillo.scrollBy({left:-310, behavior:'smooth'});});
    siguiente.addEventListener('click', function(){pasillo.scrollBy({left:310, behavior:'smooth'});});
  }

});
