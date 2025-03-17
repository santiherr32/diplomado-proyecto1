// Datos de imágenes (simulando una base de datos)
const imagenes = [
  {
    id: 1,
    titulo: "Amanecer en el lago",
    autor: "Carlos Rodríguez",
    descripcion:
      "Una hermosa captura del amanecer reflejado en las aguas tranquilas del lago. Los colores cálidos del sol naciente crean un contraste perfecto con el azul del agua.",
    categoria: "naturaleza",
    fecha: "15/01/2024",
    ubicacion: "Lago de Sanabria, España",
    thumbnail: "assets/naturaleza1-thumb.jpg",
    imagen: "assets/naturaleza1.jpeg",
    destacado: true,
  },
  {
    id: 2,
    titulo: "Torre Eiffel",
    autor: "Ana Gómez",
    descripcion:
      "Una perspectiva única de la icónica Torre Eiffel capturada durante el atardecer. Las luces comienzan a brillar mientras el cielo se tiñe de tonos anaranjados.",
    categoria: "arquitectura",
    fecha: "22/02/2024",
    ubicacion: "París, Francia",
    thumbnail: "assets/arquitectura1-thumb.jpg",
    imagen: "assets/arquitectura1.jpg",
    destacado: true,
  },
  {
    id: 3,
    titulo: "Atardecer urbano",
    autor: "Luis Martínez",
    descripcion:
      "El sol se pone entre los rascacielos creando un juego de luces y sombras en la jungla de concreto. Los reflejos en los cristales de los edificios multiplican el espectáculo.",
    categoria: "arquitectura",
    fecha: "10/03/2024",
    ubicacion: "Nueva York, EE.UU.",
    thumbnail: "assets/arquitectura2-thumb.jpg",
    imagen: "assets/arquitectura2.jpg",
    destacado: true,
  },
  {
    id: 4,
    titulo: "Mirada profunda",
    autor: "Elena Pérez",
    descripcion:
      "Un retrato en blanco y negro que captura la intensidad de una mirada. Los ojos, ventanas del alma, nos cuentan una historia de experiencias y emociones.",
    categoria: "retratos",
    fecha: "05/04/2024",
    ubicacion: "Madrid, España",
    thumbnail: "assets/retrato1-thumb.jpg",
    imagen: "assets/retrato1.jpg",
    destacado: true,
  },
  {
    id: 5,
    titulo: "Bosque de niebla",
    autor: "Pablo Sánchez",
    descripcion:
      "La niebla se desliza entre los árboles creando una atmósfera misteriosa y etérea. Los rayos de sol que se filtran entre las ramas añaden un toque mágico a la escena.",
    categoria: "naturaleza",
    fecha: "18/03/2024",
    ubicacion: "Selva Negra, Alemania",
    thumbnail: "assets/naturaleza2-thumb.jpg",
    imagen: "assets/naturaleza2.jpg",
    destacado: false,
  },
  {
    id: 6,
    titulo: "Puente Golden Gate",
    autor: "Carolina Jiménez",
    descripcion:
      "El emblemático puente rojo emerge entre la niebla matutina. Esta imagen captura la majestuosidad de esta obra de ingeniería en perfecta armonía con la naturaleza circundante.",
    categoria: "arquitectura",
    fecha: "27/01/2024",
    ubicacion: "San Francisco, EE.UU.",
    thumbnail: "assets/arquitectura3-thumb.jpg",
    imagen: "assets/arquitectura3.jpg",
    destacado: false,
  },
  {
    id: 7,
    titulo: "Sonrisa inocente",
    autor: "Marcos López",
    descripcion:
      "La sonrisa genuina de un niño nos recuerda la pureza y la alegría de los momentos simples. Un retrato que transmite felicidad instantánea.",
    categoria: "retratos",
    fecha: "12/02/2024",
    ubicacion: "Barcelona, España",
    thumbnail: "assets/retrato2-thumb.jpg",
    imagen: "assets/retrato2.jpg",
    destacado: false,
  },
  {
    id: 8,
    titulo: "Cascada tropical",
    autor: "Sofía Martínez",
    descripcion:
      "El agua cristalina se precipita entre la exuberante vegetación tropical. El sonido del agua chocando contra las rocas crea una sinfonía natural perfecta.",
    categoria: "naturaleza",
    fecha: "03/04/2024",
    ubicacion: "Isla de Bali, Indonesia",
    thumbnail: "assets/naturaleza3-thumb.jpg",
    imagen: "assets/naturaleza3.jpg",
    destacado: false,
  },
  {
    id: 9,
    titulo: "Opera de Sydney",
    autor: "Daniel Torres",
    descripcion:
      "Las icónicas velas de la Opera de Sydney brillan bajo la luz del atardecer. La arquitectura innovadora de este edificio contrasta con las aguas del puerto en esta vista panorámica.",
    categoria: "arquitectura",
    fecha: "16/02/2024",
    ubicacion: "Sydney, Australia",
    thumbnail: "assets/arquitectura4-thumb.jpg",
    imagen: "assets/arquitectura4.jpg",
    destacado: false,
  },
  {
    id: 10,
    titulo: "El músico",
    autor: "Laura Fernández",
    descripcion:
      "Un artista callejero se pierde en su melodía. Las emociones que transmite la música se reflejan en su rostro mientras sus manos acarician el instrumento con maestría.",
    categoria: "retratos",
    fecha: "21/03/2024",
    ubicacion: "Praga, República Checa",
    thumbnail: "assets/retrato3-thumb.jpg",
    imagen: "assets/retrato3.jpg",
    destacado: false,
  },
  {
    id: 11,
    titulo: "Aurora boreal",
    autor: "Javier Ruiz",
    descripcion:
      "El espectáculo natural de la aurora boreal ilumina el cielo nocturno con sus colores danzantes. Una exhibición de luces que ha fascinado a la humanidad durante siglos.",
    categoria: "naturaleza",
    fecha: "08/01/2024",
    ubicacion: "Tromso, Noruega",
    thumbnail: "assets/naturaleza4-thumb.jpg",
    imagen: "assets/naturaleza4.jpg",
    destacado: false,
  },
  {
    id: 12,
    titulo: "Anciano sabio",
    autor: "Isabel Navarro",
    descripcion:
      "Cada arruga en su rostro cuenta una historia de vida. Sus ojos, a pesar de los años, conservan un brillo de sabiduría y experiencia incomparables.",
    categoria: "retratos",
    fecha: "14/04/2024",
    ubicacion: "Marruecos",
    thumbnail: "assets/retrato4-thumb.jpg",
    imagen: "assets/retrato4.jpg",
    destacado: false,
  },
];

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  // Cargar imágenes destacadas en la página de inicio
  cargarDestacados();

  // Cargar todas las imágenes en la galería
  cargarGaleria("todas");

  // Configurar filtros de la galería
  configurarFiltros();

  // Configurar eventos para abrir el modal o detalle
  configurarEventosImagenes();

  // Configurar validación del formulario
  configurarFormulario();

  // Configurar eventos de los botones de categoría
  configurarBotonesCategorias();
});

// Función para cargar las imágenes destacadas
function cargarDestacados() {
  const destacadosContainer = document.getElementById("destacados-container");

  if (destacadosContainer) {
    const imagenesDestacadas = imagenes.filter((img) => img.destacado);
    let contenido = "";

    imagenesDestacadas.forEach((img) => {
      contenido += `
                <div class="col-md-3 col-sm-6">
                    <div class="card gallery-item" data-id="${img.id}">
                        <img src="${img.thumbnail}" class="card-img-top" alt="${img.titulo}">
                        <div class="card-body">
                            <h5 class="card-title">${img.titulo}</h5>
                            <p class="card-text">Por: ${img.autor}</p>
                            <button class="btn btn-sm btn-outline-secondary ver-detalle-btn" data-id="${img.id}">Ver detalle</button>
                        </div>
                    </div>
                </div>
            `;
    });

    destacadosContainer.innerHTML = contenido;
  }
}

// Función para cargar la galería según la categoría seleccionada
function cargarGaleria(categoria) {
  const galleryContainer = document.getElementById("gallery-container");

  if (galleryContainer) {
    let imagenesAMostrar = [];

    if (categoria === "todas") {
      imagenesAMostrar = imagenes;
    } else {
      imagenesAMostrar = imagenes.filter((img) => img.categoria === categoria);
    }

    let contenido = "";

    if (imagenesAMostrar.length === 0) {
      contenido =
        '<div class="col-12 text-center"><p>No hay imágenes disponibles en esta categoría.</p></div>';
    } else {
      imagenesAMostrar.forEach((img) => {
        contenido += `
                    <div class="col-lg-3 col-md-4 col-sm-6 fade-in">
                        <div class="card gallery-item" data-id="${img.id}">
                            <img src="${img.thumbnail}" class="card-img-top" alt="${img.titulo}">
                            <div class="card-body">
                                <h5 class="card-title">${img.titulo}</h5>
                                <p class="card-text">Por: ${img.autor}</p>
                                <button class="btn btn-sm btn-outline-secondary ver-detalle-btn" data-id="${img.id}">Ver detalle</button>
                            </div>
                        </div>
                    </div>
                `;
      });
    }

    galleryContainer.innerHTML = contenido;

    // Configurar eventos después de cargar imágenes
    configurarEventosImagenes();
  }
}

// Configurar los botones de filtro
function configurarFiltros() {
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const categoria = this.getAttribute("data-filter");

      // Actualizar estado activo de los botones
      filterButtons.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      // Cargar imágenes filtradas
      cargarGaleria(categoria);
    });
  });
}

// Configurar eventos para ver detalles
function configurarEventosImagenes() {
  const verDetalleButtons = document.querySelectorAll(".ver-detalle-btn");

  //verDetalleButtons.item(1).click = function()

  verDetalleButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const id = parseInt(this.getAttribute("data-id"));
      const myBackdrop = document.querySelector(".modal-backdrop");
      myBackdrop && myBackdrop.remove();
      document.body.style = "none";
      mostrarModal(id);
    });
  });
}

// Mostrar modal con detalle de imagen
function mostrarModal(id) {
  const imagen = imagenes.find((img) => img.id === id);

  if (imagen) {
    const imageModal = new bootstrap.Modal(
      document.getElementById("imageModal"),
      { backdrop: "static", keyboard: false }
    );

    // Actualizar contenido del modal
    document.getElementById("imageModalLabel").textContent = imagen.titulo;
    document.getElementById("modal-image").src = imagen.imagen;
    document.getElementById("modal-image").alt = imagen.titulo;
    document.querySelector(
      ".modal-author"
    ).textContent = `Por: ${imagen.autor}`;
    document.querySelector(".modal-description").textContent =
      imagen.descripcion;
    document.querySelector(".modal-category").textContent =
      imagen.categoria.charAt(0).toUpperCase() + imagen.categoria.slice(1);
    document.querySelector(".modal-date").textContent = imagen.fecha;
    document.querySelector(".modal-location").textContent = imagen.ubicacion;

    // Mostrar modal
    imageModal.show();
  }
}

// Configurar validación del formulario de contacto
function configurarFormulario() {
  const formulario = document.getElementById("contactForm");

  if (formulario) {
    formulario.addEventListener("submit", function (e) {
      e.preventDefault();

      // Validar formulario
      if (validarFormulario()) {
        // En un caso real, aquí enviaríamos los datos al servidor
        // Para esta demo, solo mostramos un mensaje de éxito
        document.getElementById("formSuccess").classList.remove("d-none");
        formulario.reset();

        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
          document.getElementById("formSuccess").classList.add("d-none");
        }, 5000);
      }
    });
  }
}

// Validar campos del formulario
function validarFormulario() {
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const asunto = document.getElementById("asunto");
  const mensaje = document.getElementById("mensaje");
  let esValido = true;

  // Validar nombre
  if (nombre.value.trim() === "") {
    mostrarError(nombre);
    esValido = false;
  } else {
    ocultarError(nombre);
  }

  // Validar email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    mostrarError(email);
    esValido = false;
  } else {
    ocultarError(email);
  }

  // Validar asunto
  if (asunto.value.trim() === "") {
    mostrarError(asunto);
    esValido = false;
  } else {
    ocultarError(asunto);
  }

  // Validar mensaje
  if (mensaje.value.trim() === "") {
    mostrarError(mensaje);
    esValido = false;
  } else {
    ocultarError(mensaje);
  }

  return esValido;
}

// Mostrar mensaje de error
function mostrarError(elemento) {
  elemento.classList.add("is-invalid");
}

// Ocultar mensaje de error
function ocultarError(elemento) {
  elemento.classList.remove("is-invalid");
}

// Configurar botones de categorías
function configurarBotonesCategorias() {
  const categoriaBtns = document.querySelectorAll(".categoria-btn");

  categoriaBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const categoria = this.getAttribute("data-categoria");
      const filterButtons = document.querySelectorAll(".filter-btn");

      // Actualizar estado activo de los botones de filtro
      filterButtons.forEach((btn) => {
        if (btn.getAttribute("data-filter") === categoria) {
          btn.click();
        }
      });
    });
  });
}

/* const imageModal = document.getElementById("imageModal");
imageModal.getInstance().hide();
document.querySelector('[data-dismiss="modal"]').click();

document.querySelector(".btn-close").addEventListener("click", function () {
  imageModal.hide();
}); */
