# Proyecto 1 DW: Galería Fotográfica

Este proyecto consiste en una aplicación web interactiva para una galería fotográfica, desarrollada utilizando HTML, CSS, Bootstrap y JavaScript. La aplicación permite a los usuarios explorar una colección de fotografías organizadas por categorías y ver detalles de cada imagen.

## Pagina web

[https://santiherr32.github.io/diplomado-proyecto1/]

## Características

- **Diseño Responsivo:** La aplicación se adapta perfectamente a diferentes tamaños de pantalla gracias a Bootstrap.
- **Navegación Intuitiva:** Menú de navegación claro y fácil de usar.
- **Categorías:** Las fotografías están organizadas en categorías (Naturaleza, Arquitectura, Retratos).
- **Filtrado:** Posibilidad de filtrar las imágenes por categoría.
- **Vista Detallada:** Al hacer clic en una imagen, se muestra una vista ampliada con información detallada.
- **Formulario de Contacto:** Incluye un formulario validado para contactar con el equipo.

## Estructura del Proyecto

```
galeria-fotografica/
│
├── index.html             # Página principal con todas las secciones
├── detalle.html           # Página de detalle de imagen
├── styles.css             # Estilos CSS
├── script.js              # Lógica JavaScript
│
└── assets/                # Carpeta de imágenes
    ├── naturaleza1.jpg
    ├── arquitectura1.jpg
    ├── retrato1.jpg
    └── ...
```

## Tecnologías Utilizadas

- **HTML5:** Estructura semántica con etiquetas como `<header>`, `<section>`, `<footer>`, etc.
- **CSS3:** Estilos personalizados para todos los elementos.
- **Bootstrap 5:** Framework CSS para diseño responsivo y componentes predefinidos.
- **JavaScript:** Funcionalidades dinámicas como filtrado, visualización de detalles y validación de formularios.

## Páginas Principales

1. **Inicio:** Muestra categorías destacadas y una selección de fotografías recomendadas.
2. **Galería:** Vista general con miniaturas y opciones de filtrado por categoría.
3. **Detalle de Imagen:** Vista ampliada con descripción completa, autor y metadatos.
4. **Sobre Nosotros:** Información sobre el equipo con formulario de contacto.

## Funcionalidades JavaScript

- Filtrado dinámico de imágenes por categoría.
- Visualización modal de detalles de imagen.
- Validación de formulario de contacto.
- Animaciones y transiciones suaves.

## Instalación y Uso

1. Clona este repositorio:
   ```
   git clone https://github.com/usuario/galeria-fotografica.git
   ```

2. Abre el archivo `index.html` en tu navegador para ver la aplicación.

3. Navega por las diferentes secciones usando el menú de navegación.

## Personalización

Para personalizar la galería con tus propias imágenes:

1. Reemplaza las imágenes en la carpeta `assets` con tus propias fotografías.
2. Edita el array `imagenes` en el archivo `script.js` para actualizar la información de cada imagen.
3. Ajusta los estilos en `styles.css` según tus preferencias.

## Autor

Desarrollado por Santiago Herrera - [santiherr32@pm.me]

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.
