import { lazy } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'

const About = lazy(() => import('./pages/About/About.jsx'))
const Contact = lazy(() => import('./pages/Contact/Contact.jsx'))
const Home = lazy(() => import('./pages/Home/Home.jsx'))
const Methodology = lazy(() => import('./pages/Methodology/Methodology.jsx'))
const Faq = lazy(() => import('./pages/Faq/Faq.jsx'))
const Services = lazy(() => import('./pages/Services/Services.jsx'))
const Territory = lazy(() => import('./pages/Territory/Territory.jsx'))

/**
 * Muestra una página temporal para una ruta que todavía no está implementada.
 * @param {{ title: string }} props Título que identifica la sección pendiente.
 */
function RoutePlaceholder({ title }) {
  return (
    <main>
      <h1>{title}</h1>
      <p>Contenido pendiente de implementar en su etapa.</p>
    </main>
  )
}

/** Presenta una salida clara cuando la URL no coincide con ninguna ruta. */
function NotFound() {
  return (
    <main>
      <h1>Página no encontrada</h1>
      <p>La dirección que buscas no existe o pudo haber cambiado.</p>
      <Link to="/">Volver al inicio</Link>
    </main>
  )
}

/** Registra las rutas de la aplicación bajo el layout compartido. */
function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="nosotros" element={<About />} />
        <Route path="servicios" element={<Services />} />
        <Route path="como-trabajamos" element={<Methodology />} />
        <Route path="territorio" element={<Territory />} />
        <Route path="preguntas" element={<Faq />} />
        <Route path="areas-de-practica" element={<RoutePlaceholder title="Áreas de práctica" />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
