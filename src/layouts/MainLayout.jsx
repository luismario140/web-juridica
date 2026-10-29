import { Suspense, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import logoIcon from '../assets/logo-icon.webp'
import Footer from '../components/Footer/Footer.jsx'
import Navbar from '../components/Navbar/Navbar.jsx'
import WhatsAppFloat from '../components/WhatsAppFloat/WhatsAppFloat.jsx'
import './MainLayout.css'

/** Mantiene navbar y footer alrededor del contenido de la ruta actual. */
function MainLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <div className="main-layout">
      <div className="site-watermark" aria-hidden="true">
        <img src={logoIcon} alt="" draggable="false" />
      </div>
      <Navbar />
      <div className="main-layout__content">
        <Suspense fallback={<div className="route-loading" role="status">Cargando página…</div>}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default MainLayout
