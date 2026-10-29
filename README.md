# Web Jurídica

Sitio web institucional construido con React, React Router y Vite. Esta guía explica cómo ejecutar el proyecto, dónde encontrar cada parte y qué archivos modificar para los cambios más habituales.

## Requisitos

- Node.js y npm instalados.
- Las dependencias del proyecto instaladas con `npm install`.

## Comandos

Ejecuta estos comandos desde la carpeta raíz del proyecto:

| Comando | Uso |
| --- | --- |
| `npm install` | Instala las dependencias definidas en `package.json`. |
| `npm run dev` | Inicia el servidor local de desarrollo de Vite. |
| `npm run build` | Genera la versión de producción en `dist/`. |
| `npm run preview` | Sirve localmente la última compilación de `dist/`. |
| `npm run lint` | Comprueba el código con ESLint. |

## Estructura del proyecto

```text
src/
  assets/                 Imágenes y recursos importados por la aplicación
  components/             Piezas reutilizables de interfaz
    Button/               Carpeta reservada para un botón (pendiente de implementar)
    EditorialPage/        Encabezado y estructura de páginas interiores
    Footer/               Pie de página compartido
    HeroPortraitCarousel/ Carrusel 3D de retratos del hero
    Navbar/               Navegación fija compartida
    ScaleShadow/          Ilustración decorativa de balanza
  layouts/                Estructuras compartidas entre rutas
  data/
    siteContent.js        Textos provisionales y contenido editable de la landing
  pages/                  Páginas y sus hojas de estilos
    Home/                 Portada breve con retrato y resumen de servicios
    About/                Presentación institucional y principios
    Services/             Líneas de servicio seleccionables
    Methodology/          Pasos del proceso de trabajo
    Territory/            Enfoque territorial y públicos
    Faq/                  Preguntas frecuentes
    Contact/              Datos y formulario de contacto
  styles/
    global.css            Paleta, tipografía y reglas globales
  App.jsx                 Rutas y contenido alternativo
  main.jsx                Punto de entrada de React y React Router
public/                   Recursos estáticos servidos sin importar desde JS
index.html                Documento HTML de entrada de Vite
```

Los componentes y páginas suelen tener su propio archivo `.jsx` y `.css`. Si cambias la estructura o el diseño de una página, busca primero su carpeta en `src/pages/`. Si el elemento aparece en varias rutas, revisa `src/components/` o `src/layouts/`.

## Navegación y páginas

`src/main.jsx` inicia React y envuelve la aplicación en `BrowserRouter`. `src/App.jsx` define las rutas, y `src/layouts/MainLayout.jsx` presenta el navbar, el contenido de la ruta y el footer compartidos.

| Dirección | Estado actual |
| --- | --- |
| `/` | Portada breve con carrusel profesional, indicadores y acceso al resumen de servicios. |
| `/nosotros` | Nosotros, implementada en `src/pages/About/`. |
| `/servicios` | Servicios, implementada en `src/pages/Services/`. |
| `/como-trabajamos` | Etapas del acompañamiento, en `src/pages/Methodology/`. |
| `/territorio` | Enfoque territorial y públicos, en `src/pages/Territory/`. |
| `/preguntas` | Preguntas frecuentes, en `src/pages/Faq/`. |
| `/areas-de-practica` | Actualmente muestra un marcador de contenido pendiente definido en `src/App.jsx`. La carpeta `src/pages/PracticeAreas/` está reservada, pero sus archivos están vacíos y aún no hay página implementada. |
| `/contacto` | Información y formulario sin integración de envío, en `src/pages/Contact/`. |
| Cualquier otra dirección | Muestra la página de no encontrado definida en `src/App.jsx`. |

Para implementar la ruta pendiente de áreas de práctica, crea la página en `src/pages/`, impórtala en `src/App.jsx` y reemplaza el `RoutePlaceholder`. El logo de navegación apunta directamente a `/`. Las rutas del menú y del footer se alimentan de `siteContent.navigation` en `src/data/siteContent.js`.

## Dónde hacer cambios habituales

### Textos y datos de la firma

Edita `src/data/siteContent.js`. Los textos por confirmar están organizados por sección (`hero`, `services`, `methodology`, `faq`, `contact`, entre otras). Sustituye los marcadores entre corchetes únicamente con información que la firma haya revisado y aprobado; en particular, verifica las cifras, el perfil profesional, el alcance de servicios y los datos de contacto.

La portada breve está en `src/pages/Home/Home.jsx` y `src/pages/Home/Home.css`. El contenido de cada sección se distribuye en su página correspondiente. La selección de servicios y las preguntas frecuentes funcionan sin dependencias externas. El formulario solo aplica validación del navegador y avisa que no está conectado; no envía ni almacena datos.

La página “Nosotros” se compone en `src/pages/About/About.jsx`; su galería compacta y la distribución responsive se ajustan en `src/pages/About/About.css`. Los textos biográficos y las descripciones de principios están en `about` dentro de `src/data/siteContent.js`.

El carrusel 3D está en `src/components/HeroPortraitCarousel/`. Usa las fotografías de `src/assets/images/`, rota automáticamente, se pausa al pasar el puntero o al enfocarlo, y admite controles, teclado y arrastre horizontal con mouse o touch. Sus imágenes llevan una máscara radial que suaviza los bordes contra el fondo oscuro de las tarjetas. Para cambiar las fotos, su orden o los textos accesibles, edita `hero.portraitImages` en `src/data/siteContent.js`.

La composición fotográfica de la página Territorio está en `src/pages/Territory/Territory.jsx` y sus estilos en `src/pages/Territory/Territory.css`. Las dos imágenes se importan desde `src/assets/imgterrito/`; para sustituirlas, cambia esos imports y actualiza sus textos alternativos y pies de foto. El difuminado de los bordes se aplica con gradientes visibles hacia el fondo de la página, y la animación flotante respeta la preferencia de movimiento reducido.

Las tarjetas de principios en “Nosotros” tienen un pulso con rebote suave y escalonado cuando entran en pantalla; se desactiva para usuarios que prefieren movimiento reducido. El acceso flotante de WhatsApp se encuentra en `src/components/WhatsAppFloat/` y alterna la burbuja “¿Hablamos?” junto al icono; al pasar el cursor o enfocarlo, permanece visible.

Las rutas de páginas se cargan de forma diferida desde `src/App.jsx`; así el navegador descarga cada página cuando se visita. Las fotos y los logos usados por la web tienen versiones WebP optimizadas; los originales se conservan. Las imágenes fuera de pantalla usan carga diferida y, al cambiar de ruta, la página sube al inicio de inmediato.

### Fondo general y colores

Edita las variables CSS de `:root` en `src/styles/global.css`. El fondo general usa `--color-ivory`; `--color-paper` sirve para superficies de secciones o tarjetas. La landing define además tonos cálidos propios al inicio de `src/pages/Home/Home.css` para seguir la referencia PDF.

Al añadir o cambiar un color, revisa los componentes y páginas que usan la variable para mantener contraste y coherencia. El navbar tiene un fondo translúcido propio en `src/components/Navbar/Navbar.css` para conservar el efecto glass mientras se desplaza.

### Navbar y footer

- Marcado, enlaces y menú móvil: `src/components/Navbar/Navbar.jsx`.
- Posición sticky, apariencia glass y estilos responsive: `src/components/Navbar/Navbar.css`.
- El navbar forma parte de `MainLayout`, por lo que un cambio allí afecta a todas las rutas que usan ese layout. Sus enlaces se alimentan de `siteContent.navigation`.
- La firma compacta del footer está en `src/components/Footer/`.

### Una página

Modifica el archivo `.jsx` y el `.css` de la carpeta correspondiente en `src/pages/`. Conserva las clases existentes y sus variantes responsive cuando sea posible.

### Elementos compartidos

El footer está en `src/components/Footer/` y la ilustración decorativa en `src/components/ScaleShadow/`. Sus cambios pueden afectar varias páginas. `src/components/Button/` está reservado para un botón reutilizable, pero todavía no contiene una implementación.

## Comentarios en el código

Los componentes activos incluyen comentarios breves sobre su responsabilidad y, donde hace falta, sobre su comportamiento interno. Las hojas CSS indican qué página o componente estilizan; los detalles visuales se documentan cerca de las reglas que requieren contexto. Para una vista general del propósito de cada archivo y las tareas habituales, usa esta guía.

### Imágenes y logos

Para recursos importados desde componentes, coloca o selecciona el archivo en `src/assets/` y usa un `import` explícito, como hace el navbar con el logo. Los recursos de `public/` se sirven directamente por su ruta y no pasan por el sistema de imports de Vite.

## Estilos y mantenimiento

- Los estilos globales y las variables de diseño viven en `src/styles/global.css`.
- Los estilos particulares se mantienen junto a su página o componente.
- Usa las variables globales existentes para colores, fuentes, anchos y espacios en vez de repetir valores cuando corresponda.
- Comprueba el resultado en escritorio y móvil; navbar y páginas contienen reglas responsive.
- Antes de dar por terminado un cambio, ejecuta `npm run lint` y `npm run build`.

## Referencia visual y contenido editorial

El diseño adapta la propuesta cálida en varias páginas para mantener Inicio breve: el hero y los indicadores están en Inicio; identidad y principios, en Nosotros; servicios, metodología, territorio, preguntas y contacto tienen rutas propias. Los textos y datos pendientes siguen en `src/data/siteContent.js`. Los rectángulos con rótulos reservan imágenes que deberán sustituirse por fotografías aprobadas; no se presentan cifras ni afirmaciones profesionales sin confirmar.
