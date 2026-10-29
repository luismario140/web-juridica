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
              <span className="editorial-service-tab__content">
                <span className="editorial-service-tab__heading">
                  <span className="editorial-service-tab__index">0{index + 1}</span>
                  <strong>{service.title}</strong>
                </span>
                <small>{service.summary}</small>
                <span className="editorial-service-tab__action">
                  {index === activeIndex ? 'Seleccionado' : 'Ver línea'}
                </span>
              </span>
            </button>
          ))}
        </div>

        <article className="editorial-service-detail" aria-live="polite">
          <div className="editorial-copy">
            <p className="editorial-eyebrow"><span />Línea 0{activeIndex + 1}</p>
            <h2>{activeService.title}</h2>
            <p>{activeService.description}</p>
            <ul className="editorial-service-detail__list">
              {activeService.items.map((item, index) => (
                <li key={`${activeService.id}-${index}`}>{item}</li>
              ))}
            </ul>
            <ul className="editorial-service-tags" aria-label="Temas relacionados">
              {activeService.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
            <Link className="editorial-link" to="/contacto">
              {siteContent.services.action}
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </Link>
          </div>
          <div className="editorial-service-detail__visual">
            <img src={activeService.image} alt="" aria-hidden="true" />
            <span>{activeService.visualLabel}</span>
          </div>
        </article>
      </section>
    </EditorialPage>
  )
}

export default Services
