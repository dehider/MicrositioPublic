/* Perfiles transcritos del PDF Perfiles.pdf. Los campos no incluidos en el documento se omiten. */
const CONCURSANTES = [
 {id:1,nombre:"Dayana Manjarres",artistico:"La dama del acordeón",categoria:"Acordeoneros",edad:"19 años",canciones:"El Mejoral; El Siniestro de Ovejas; Alicia Adorada; Llegó la Patrona",ritmo:"Paseo, merengue, son y puya",descripcion:"Estudiante de Ingeniería Ambiental en la UNAD. Representa la Zona Caribe. Cuenta que su interés por el acordeón comenzó a los cinco años, motivada por su abuelo paterno. Con el apoyo de su padre adquirió su instrumento y lleva un año en la música. Ha participado en el Festival de Mujeres EVAFE en 2024, 2025 y 2026, y en el festival de Mariangola, Cesar, en 2026."},
 {id:2,nombre:"Daniel Andrés Julio Pabón",categoria:"Acordeoneros",canciones:"La Loma (paseo); Patillal (merengue); El Saludo (son); Déjenme Quieto (puya)",descripcion:"Acordeonero vallenato y discípulo del maestro Kalata Mendoza. Toca el acordeón desde los 12 años y señala que es tataranieto de Compadre Chipuco. Participa por primera vez en festivales vallenatos, con el propósito de crecer musicalmente y mantener viva la tradición."},
 {id:3,nombre:"Diego José Leal Domínguez",categoria:"Acordeoneros",descripcion:"Profesor de acordeón, con más de cinco años dedicados a la enseñanza del acordeón diatónico y más de 18 años de formación musical. Ha participado como acordeonista en agrupaciones, orquestas y más de 30 festivales vallenatos. Ha enseñado en escuelas de formación de Nocaima y Útica, Cundinamarca. Actualmente es profesor de la academia Harold Ortega y docente de cátedra de la Universidad Sergio Arboleda."},
 {id:4,nombre:"Jorge Andrés Moreno Calderón",artistico:"Jorge Moreno",categoria:"Acordeoneros",edad:"22 años",ciudad:"Bogotá",canciones:"Tuve un amor (son); El mismo de siempre (paseo); El Núñez León (merengue); Vean cómo corren (puya)",descripcion:"Estudiante del programa de Música y acordeonista de música tradicional vallenata. Comenzó a tocar a los ocho años y, según su perfil, ha sido Rey Vallenato en más de 15 festivales nacionales."},
 {id:5,nombre:"Nafer Stiven Sanguino Bacca",artistico:"Suena el vallenato, suena mi fe",categoria:"Acordeoneros",canciones:"Suena mi acordeón (son); La fiesta de los pájaros (puya)",descripcion:"Joven acordeonero cuyo recorrido comenzó desde pequeño. Aprendió de manera empírica y expresa que su fe en Cristo es su inspiración y guía en cada nota."},
 {id:6,nombre:"Yoni Alejandro Rojas Rojas",artistico:"Alejo Rojas (mencionado en la descripción)",categoria:"Acordeoneros",canciones:"Fidelina (son); Alejo el ciego (puya); Siniestro de Ovejas (merengue); El pollo vallenato (paseo)",descripcion:"El documento lo describe como un joven invidente de Cáqueza, Cundinamarca, apasionado por el acordeón desde niño. Inició su camino musical a los ocho años y debutó en tarima a los diez. Ha compartido escenario con artistas del género, obtenido reconocimientos en festivales nacionales y fue nominado a Mejor Acordeonero del Año en los Premios Abel Antonio Villa 2025.",nota:"El PDF registra como nombre completo “Yoni Alejandro Rojas Rojas”, pero en la descripción utiliza “Alejo Rojas”. Se conserva esta diferencia tal como aparece en la fuente."},
 {id:7,nombre:"Sara Valentina Rhenals Escobar",categoria:"Acordeoneros",edad:"18 años",descripcion:"Integrante de la familia Unadista de la Zona Caribe – Santa Marta. Estudiante de cuarto semestre de Ingeniería Ambiental."},
 {id:8,nombre:"Carlos Alberto Martínez Guerra",categoria:"Canción inédita",cancion:"Un mito del folclor",ritmo:"Paseo",descripcion:"Contador Público, especialista y magíster. Describe una tradición musical familiar vinculada con Rita Damiana Maestre, la vieja Vila Maestre y el compositor Marcelino Guerra Maestre. El perfil señala que obtuvo el tercer lugar en canción inédita en el Festival Vallenato de Valledupar en 1984."},
 {id:9,nombre:"Fernando Luis Ortega Rodríguez",artistico:"Nando Ortega",categoria:"Canción inédita",cancion:"El papel del tutor",ritmo:"Paseo",descripcion:"Compositor apasionado por la música vallenata, con interés en crear obras que conserven su esencia y riqueza narrativa. Su trayectoria se orienta principalmente al paseo romántico y sentimental. El perfil indica que conserva más de cien obras y que obtuvo el tercer lugar en el VI Festival Internacional de Música Vallenata de la UNAD, en noviembre de 2025."},
 {id:10,nombre:"Luisa Fernanda Castaño Riaño",artistico:"Luisa Castaño",categoria:"Canción inédita",edad:"32 años",ciudad:"Bogotá D. C.",cancion:"Me duele tu partida",ritmo:"Vallenato",descripcion:"Apasionada por el vallenato y por mantener viva esta música. En su perfil expresa que participar en la final de la UNAD 2026 es un sueño cumplido y una oportunidad para compartir su voz y sentimiento."},
 {id:11,nombre:"Mábel Socarrás Aguirrez",categoria:"Canción inédita",cancion:"De frente al mundo",ritmo:"Paseo",autor:"Edgardo Molina",descripcion:"Comunicadora Social, especialista en Comunicación Organizacional y maestrante en Educación. Se desempeña como docente de inclusión del CEAD Curumaní. Su perfil destaca la vocación de servicio, el compromiso con las comunidades y su pasión por la música."},
 {id:12,nombre:"Miguel Ángel Cortés Sanjuan",categoria:"Canción inédita",cancion:"Que vuelva la inspiración",ritmo:"Paseo",descripcion:"La canción propone recuperar la creación del verso inédito y la melodía, y rinde homenaje a las raíces de los juglares. El perfil del autor lo presenta como Contador Público y docente universitario que transforma experiencias de la vida en versos y melodías."},
 {id:13,nombre:"Sindy Madiony Rojas Silva",categoria:"Canción inédita",cancion:"Con Toito el Corazón",ritmo:"Merengue vallenato",descripcion:"Docente del Servicio Social Unadista (SISSU) del CCAV Facatativá, profesional en Administración de Empresas, especialista en Proyectos Sociales y Económicos y magíster en Innovación de Experiencia de Usuario. Disfruta el vallenato y componer frases inspiradas en experiencias de vida."},
 {id:14,nombre:"Yeycol David Aristizabal Torres",categoria:"Canción inédita",cancion:"Vacío de sentimiento",ritmo:"Paseo",descripcion:"El perfil presenta la canción como una composición nacida del sentimiento, que busca expresar que, aun en medio de un vacío emocional, las personas permanecen conectadas de corazón a corazón."},
 {id:15,nombre:"María José Ospino Ovalle",categoria:"Canción inédita",cancion:"Que me caiga el mundo encima",ritmo:"Paseo",descripcion:"La canción aborda el valor de vivir un amor sin esconderlo, a pesar de los prejuicios y las críticas. Su letra expresa la decisión de romper el silencio y luchar por lo que se siente."},
 {id:16,nombre:"María María Mendoza López",categoria:"Canción inédita",cancion:"Dame una oportunidad",ritmo:"Paseo",descripcion:"La composición nace de una experiencia personal frente al desamor. Su historia parte de la vulnerabilidad y la búsqueda de una última conversación, y avanza hacia una decisión de seguir adelante sin rencor."},
 {id:17,nombre:"Arístides Vargas",categoria:"Voz revelación",cancion:"Canciones lindas",ritmo:"Paseo",descripcion:"El perfil destaca su participación desde niño en Los Niños del Vallenato y presentaciones en escenarios de Estados Unidos, América Latina, la Casa Blanca, la Casa Rosada y el Festival de Cine de Viña del Mar. También menciona su participación en Idol Colombia, el Festival Mar de Acordeones y grabaciones musicales."},
 {id:18,nombre:"Damilis Esther Yepez Castro",categoria:"Voz revelación",cancion:"Así fue mi querer",ritmo:"Paseo – vallenato romántico",descripcion:"Participante del CEAD Curumaní, Cesar. Cuenta que desde niña le apasiona el canto y que la música vallenata es uno de sus sentimientos más apreciados. Expresa orgullo por representar a su alma mater y a su tierra."},
 {id:19,nombre:"Ingri Constanza Rodríguez Herrera",categoria:"Voz revelación",cancion:"Amor de papel",ritmo:"Paseo",descripcion:"Profesional en Administración en Salud y especialista en Gestión Pública. El perfil relata que canta desde los tres años, que ha participado en orquestas de merengue y vallenato y que actualmente cursa una maestría en Dirección Sanitaria y Gestión Clínica."},
 {id:20,nombre:"José David Olivo Pinto",categoria:"Voz revelación",cancion:"Cariñito de mi vida",ritmo:"Paseo vallenato",ciudad:"Buenavista, La Guajira",descripcion:"Nacido el 28 de agosto de 1982 en Buenavista, La Guajira. Desde niño cantaba en las plazas de su pueblo. Es estudiante de Psicología de la UNAD en el CEAD Riohacha y ha trabajado como formador cultural y gestor, además de desempeñarse como vocalista y corista."},
 {id:21,nombre:"Kelly Geovanna Pérez Anangonó",categoria:"Voz revelación",cancion:"La espinita",autor:"Nicolás Jiménez Jáuregui",ritmo:"Paseo",descripcion:"Cuenta que nació en una familia de músicos y que comenzó a cantar en tarima a los cuatro años. Además de cantante, es estilista integral, bailarina, tiene interés por la actuación y estudia Administración de Empresas en la UNAD."},
 {id:22,nombre:"Liliana Paola García Pedrosa",categoria:"Voz revelación",cancion:"Los ay, ay, ay…",descripcion:"Estudiante de tercer periodo académico de Administración de Empresas. Se describe como una mujer trabajadora, alegre y comprometida con sus metas, orgullosa de su familia y apasionada por la música vallenata."},
 {id:23,nombre:"Angélica Patricia Salcedo Padilla",categoria:"Voz revelación",estamento:"Docente",centro:"CEAD Santa Marta",descripcion:"Comunicadora social y periodista, magíster en Marketing y docente de la UNAD en el CEAD Santa Marta. Su perfil destaca su vínculo con el folclor vallenato desde niña y su entorno musical familiar.",nota:"El PDF deja sin diligenciar los campos de canción, autor e interpretación original."},
 {id:24,nombre:"Mateo Barrios Villazón",categoria:"Voz revelación",cancion:"Solo para ti",ritmo:"Paseo vallenato",edad:"19 años",ciudad:"Valledupar, Cesar",descripcion:"Joven de Valledupar que expresa que la música vallenata ha sido una de sus grandes pasiones desde pequeño y que desea seguir aprendiendo y creciendo musicalmente."},
 {id:25,nombre:"Nayirys Durán Coronado",categoria:"Voz revelación",cancion:"Mañanita de invierno",ritmo:"Vallenato romántico",descripcion:"Explica que eligió la canción porque la conecta con la naturaleza y el sentimiento. Busca evocar la frescura del campo y la calidez de su tierra mediante una interpretación sincera."},
 {id:26,nombre:"Selena del Pilar Chaparro Castañeda",categoria:"Voz revelación",cancion:"Si no me falla el corazón",ritmo:"Vallenato",descripcion:"Licenciada en Lenguas Extranjeras con énfasis en Inglés y especialista en Educación Superior y Transformación Digital. Participa para compartir su voz y celebrar la riqueza de la música vallenata."},
 {id:27,nombre:"Valentina Mejía Yances",categoria:"Voz revelación",cancion:"Mañanitas de invierno",ritmo:"Paseo",edad:"25 años",ciudad:"Buenavista, Sucre",descripcion:"Cantante vallenata y estudiante de quinto semestre de Artes Visuales en la UNAD. Graduada en Música Instrumental por la EBAH. El perfil menciona reconocimientos como Cantante Revelación en 2020 y 2021, segundo lugar en Voz Revelación en el Festival Internacional Universitario Vallenato de la UNAD 2025 y participación en espacios culturales de Sucre y Telecaribe."},
 {id:28,nombre:"Folclor y Tradición CEAD Valledupar",categoria:"Pilón Valledupar",tipo:"Grupo de danza",descripcion:"Grupo de danza de Valledupar comprometido con la preservación, promoción y proyección de las manifestaciones culturales de la identidad vallenata. El perfil señala que cuenta con más de dos años de trayectoria y que su labor incluye investigación, apropiación y transmisión de conocimientos sobre la historia, las creencias, las costumbres y las tradiciones de la región."},
 {id:29,nombre:"Mateo Moreno Rivera",categoria:"Piquería",edad:"30 años",estamento:"Estudiante",programa:"Zootecnia – segundo semestre",ciudad:"Sahagún, Córdoba",descripcion:"Estudiante de Zootecnia. El perfil indica que está vinculado a la música desde hace aproximadamente 14 años como percusionista, verseador y compositor. Señala que ha sido Rey de la Piquería en distintos departamentos y ha participado en más de 20 festivales, con segundos y terceros puestos."}
];

document.addEventListener('DOMContentLoaded', function () {
  const grid = document.getElementById('concursantesGrid');
  const busqueda = document.getElementById('buscarConcursante');
  const filtros = document.getElementById('filtrosCategorias');
  const contador = document.getElementById('totalConcursantes');
  const modal = document.getElementById('perfilModal');
  const cerrar = document.getElementById('cerrarPerfil');
  const contenido = document.getElementById('perfilContenido');
  let categoriaActiva = 'Todas';

  const categorias = ['Todas','Acordeoneros','Canción inédita','Voz revelación','Piquería','Pilón Valledupar'];
  categorias.forEach(cat => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'filtro-categoria' + (cat === 'Todas' ? ' activo' : '');
    b.textContent = cat; b.setAttribute('aria-pressed', cat === 'Todas' ? 'true' : 'false');
    b.addEventListener('click', () => {
      categoriaActiva = cat;
      filtros.querySelectorAll('button').forEach(x => { x.classList.toggle('activo', x === b); x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      render();
    });
    filtros.appendChild(b);
  });

  function crearFoto(p, grande = false) {
    // Fotografías individuales extraídas de Perfiles.pdf, conservando el encuadre original.
    // El perfil 24 no tiene una fotografía propia identificable en el documento fuente.
    if (p.id === 24) return null;
    const foto = document.createElement('img');
    foto.className = grande ? 'perfil-modal__foto' : 'concursante-card__foto';
    foto.alt = 'Fotografía de ' + p.nombre;
    foto.loading = grande ? 'eager' : 'lazy';
    foto.decoding = 'async';
    foto.src = 'images/concursante-' + String(p.id).padStart(2, '0') + '.jpg';
    // Respaldo temporal para que no desaparezca la foto si aún no se han cargado los archivos individuales.
    foto.addEventListener('error', function respaldo() {
      const indice = p.id - 1;
      const fallback = document.createElement('div');
      fallback.className = grande ? 'perfil-modal__foto concursante-foto-respaldo' : 'concursante-card__foto concursante-foto-respaldo';
      fallback.setAttribute('role', 'img');
      fallback.setAttribute('aria-label', 'Fotografía de ' + p.nombre);
      fallback.style.backgroundImage = "url('images/concursantes-sprite.jpg')";
      fallback.style.backgroundPosition = ((indice % 6) * 20) + '% ' + (Math.floor(indice / 6) * 25) + '%';
      foto.replaceWith(fallback);
    }, { once: true });
    return foto;
  }

  function render() {
    const q = busqueda.value.trim().toLocaleLowerCase('es');
    const visibles = CONCURSANTES.filter(p => (categoriaActiva === 'Todas' || p.categoria === categoriaActiva) &&
      [p.nombre,p.artistico,p.categoria,p.cancion,p.ciudad].filter(Boolean).join(' ').toLocaleLowerCase('es').includes(q));
    grid.textContent = '';
    visibles.forEach(p => {
      const card = document.createElement('article'); card.className = 'concursante-card';
      const foto = crearFoto(p);
      const cuerpo = document.createElement('div'); cuerpo.className = 'concursante-card__cuerpo';
      const info = document.createElement('div'); info.className = 'concursante-card__info';
      const top = document.createElement('div'); top.className = 'concursante-card__top';
      const tag = document.createElement('span'); tag.className = 'concursante-card__categoria'; tag.textContent = p.categoria;
      const icon = document.createElement('span'); icon.className = 'concursante-card__icono'; icon.setAttribute('aria-hidden','true');
      icon.textContent = p.categoria === 'Acordeoneros' ? '🪗' : p.categoria === 'Canción inédita' ? '🎼' : p.categoria === 'Voz revelación' ? '🎤' : p.categoria === 'Piquería' ? '🗣️' : '💃';
      top.append(tag,icon);
      const h = document.createElement('h3'); h.textContent = p.nombre;
      const sub = document.createElement('p'); sub.className = 'concursante-card__sub'; sub.textContent = p.artistico || p.tipo || p.ciudad || 'Participante del VII Festival';
      const song = document.createElement('p'); song.className = 'concursante-card__cancion'; song.textContent = p.cancion ? '♪ ' + p.cancion : p.canciones ? '♪ ' + p.canciones.split(';')[0] : 'Perfil artístico';
      const btn = document.createElement('button'); btn.type = 'button'; btn.className = 'concursante-card__ver'; btn.textContent = 'Ver perfil completo →';
      btn.addEventListener('click', () => abrirPerfil(p));
      info.append(top,h,sub,song,btn);
      cuerpo.appendChild(info);
      if (foto) cuerpo.appendChild(foto);
      card.appendChild(cuerpo); grid.appendChild(card);
    });
    contador.textContent = visibles.length + (visibles.length === 1 ? ' perfil' : ' perfiles');
    document.getElementById('sinResultados').hidden = visibles.length !== 0;
  }

  function abrirPerfil(p) {
    contenido.textContent = '';
    const foto = crearFoto(p, true); if (foto) contenido.appendChild(foto);
    const encabezado = document.createElement('div'); encabezado.className = 'perfil-modal__encabezado';
    const tag = document.createElement('span'); tag.className = 'concursante-card__categoria'; tag.textContent = p.categoria;
    const h = document.createElement('h2'); h.id = 'perfilTitulo'; h.textContent = p.nombre;
    encabezado.append(tag,h);
    if (p.artistico) { const alias = document.createElement('p'); alias.textContent = 'Nombre artístico: ' + p.artistico; encabezado.appendChild(alias); }
    contenido.appendChild(encabezado);
    const campos = [['Edad',p.edad],['Ciudad',p.ciudad],['Estamento',p.estamento],['Programa',p.programa],['Centro',p.centro],['Canción',p.cancion],['Ritmo',p.ritmo],['Autor',p.autor],['Canciones / repertorio',p.canciones],['Tipo',p.tipo]];
    const dl = document.createElement('dl'); dl.className = 'perfil-modal__datos';
    campos.forEach(([k,v]) => { if (!v) return; const wrap=document.createElement('div'); const dt=document.createElement('dt');dt.textContent=k;const dd=document.createElement('dd');dd.textContent=v;wrap.append(dt,dd);dl.appendChild(wrap); });
    contenido.appendChild(dl);
    const desc = document.createElement('p'); desc.className = 'perfil-modal__descripcion'; desc.textContent = p.descripcion; contenido.appendChild(desc);
    if (p.nota) { const nota=document.createElement('p');nota.className='perfil-modal__nota';nota.textContent=p.nota;contenido.appendChild(nota); }
    modal.hidden = false; document.body.classList.add('perfil-modal-abierto'); cerrar.focus();
  }
  function cerrarPerfil() { modal.hidden = true; document.body.classList.remove('perfil-modal-abierto'); }
  cerrar.addEventListener('click', cerrarPerfil);
  modal.querySelectorAll('[data-cerrar-perfil]').forEach(el => el.addEventListener('click', cerrarPerfil));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) cerrarPerfil(); });
  busqueda.addEventListener('input', render);
  render();
});
