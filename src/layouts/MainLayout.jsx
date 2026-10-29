import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import logoIcon from '../assets/logo-icon.png'
import Footer from '../components/Footer/Footer.jsx'
import Navbar from '../components/Navbar/Navbar.jsx'
import './MainLayout.css'

/** Mantiene navbar y footer alrededor del contenido de la ruta actual. */
function MainLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="main-layout">
      <div className="site-watermark" aria-hidden="true">
        <img src={logoIcon} alt="" draggable="false" />
      </div>
      <Navbar />
      <div className="main-layout__content">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout