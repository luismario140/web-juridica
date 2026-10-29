import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { siteContent } from '../../data/siteContent.js'
import './Navbar.css'

/** Navegación compartida; el estado local controla el menú desplegable móvil. */
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="navbar">
        <Link
          className="brand"
          to="/"
          aria-label="Jhon James Hurtado M., inicio"
          onClick={() => {
            closeMenu()
            window.scrollTo(0, 0)
          }}
        >
          <img
            src={logo}
            alt="Jhon James Hurtado M."
            className="brand-logo"
          />
        </Link>

        <button
          className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
        </button>

        <nav
          className={`primary-navigation${menuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
          aria-label="Navegación principal"
        >
          <ul>
            {siteContent.navigation.map((item) => (
              <li key={item.target}>
                <Link to={`/${item.target}`} onClick={closeMenu}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <Link className="nav-cta" to="/contacto" onClick={closeMenu}>
            Agendar consulta
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
