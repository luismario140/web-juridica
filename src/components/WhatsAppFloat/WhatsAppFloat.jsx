import './WhatsAppFloat.css'

function WhatsAppFloat() {
  const phone = '3137819046'
  const message = encodeURIComponent('Hola, me gustaría agendar una consulta.')
  const href = `https://wa.me/${phone}?text=${message}`

  return (
    <a
      className="whatsapp-float"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16.04 4C9.4 4 4 9.39 4 16.02c0 2.12.55 4.19 1.6 6.02L4 28l6.08-1.59a12 12 0 0 0 5.96 1.55c6.64 0 12.04-5.39 12.04-12.02S22.68 4 16.04 4zm6.98 17.02c-.29.81-1.69 1.55-2.36 1.65-.61.09-1.39.13-2.24-.14-.52-.16-1.18-.39-2.03-.76-3.57-1.54-5.9-5.12-6.08-5.36-.18-.24-1.45-1.93-1.45-3.68s.92-2.61 1.25-2.97c.33-.36.72-.45.96-.45h.69c.22 0 .52-.08.81.62.29.7.99 2.42 1.08 2.6.09.18.15.39.03.63-.12.24-.18.39-.36.6-.18.21-.38.47-.54.63-.18.18-.37.38-.16.74.21.36.93 1.53 2 2.48 1.37 1.22 2.53 1.6 2.89 1.78.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.81-.18.33.12 2.09.99 2.45 1.17.36.18.6.27.69.42.09.15.09.87-.2 1.68z"
        />
      </svg>
      <span className="whatsapp-float__pulse" aria-hidden="true" />
      <span className="whatsapp-float__bubble" aria-hidden="true">
        <span className="whatsapp-float__bubble-dot" />
        ¿Hablamos?
      </span>
    </a>
  )
}

export default WhatsAppFloat
