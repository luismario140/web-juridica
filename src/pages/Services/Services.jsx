import { useState } from 'react'
import { Link } from 'react-router-dom'
import EditorialPage from '../../components/EditorialPage/EditorialPage.jsx'
import { siteContent } from '../../data/siteContent.js'

/** Presenta las líneas de servicio como opciones seleccionables. */
function Services() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeService = siteContent.services.items[activeIndex]

  return (
    <EditorialPage
      eyebrow={siteContent.services.eyebrow}
      title={siteContent.services.title}
      description={siteContent.services.description}
    >
      <section className="editorial-section" aria-label="Explorar líneas de servicio">
        <div className="editorial-service-tabs" role="group" aria-label="Seleccionar servicio">
          {siteContent.services.items.map((service, index) => (
            <button
              key={service.id}
              type="button"
              aria-pressed={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            >
              <span>0{index + 1}</span>{service.title}
            </button>
          ))}
        </div>

        <article className="editorial-service-detail" aria-live="polite">
          <div className="editorial-copy">
            <p className="editorial-eyebrow"><span />Línea 0{activeIndex + 1}</p>
            <h2>{activeService.title}</h2>
            <p>{activeService.description}</p>
            <ul>
              {activeService.items.map((item, index) => (
                <li key={`${activeService.id}-${index}`}>{item}</li>
              ))}
            </ul>
            <p>{activeService.tags.join(' · ')}</p>
            <Link className="editorial-link" to="/contacto">
              {siteContent.services.action}
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </Link>
          </div>
          <div className="editorial-service-detail__visual">
            <span>{activeService.visualLabel}</span>
          </div>
        </article>
      </section>
    </EditorialPage>
  )
}

export default Services
