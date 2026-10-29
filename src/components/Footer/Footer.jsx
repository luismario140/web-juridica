import { Link } from 'react-router-dom'
import logoWhite from '../../assets/logo-white.png'
import { siteContent } from '../../data/siteContent.js'
import './Footer.css'

/** Firma visual compacta y enlaces a las secciones de la página principal. */
function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <Link
          className="footer-brand"
          to="/"
          aria-label="Ir al inicio"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img
            src={logoWhite}
            alt={siteContent.brand.name}
            className="footer-logo"
          />
        </Link>
        <nav className="footer-navigation" aria-label="Navegación del pie de página">
          {siteContent.navigation.map((item) => (
            <Link key={item.target} to={`/${item.target}`}>{item.label}</Link>
          ))}
          <Link to="/contacto">Contacto</Link>
        </nav>
        <p className="footer-motto">{siteContent.brand.footerLine}</p>
      </div>
      <div className="footer-meta">
        <span>© {currentYear} {siteContent.brand.name}. Todos los derechos reservados.</span>
        <span>{siteContent.brand.footerLocation} · {siteContent.brand.footerNote}</span>
      </div>
    </footer>
  )
}

export default Footer
