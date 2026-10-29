import { Link } from 'react-router-dom'
import EditorialPage from '../../components/EditorialPage/EditorialPage.jsx'
import { siteContent } from '../../data/siteContent.js'
import recurso3 from '../../assets/imgterrito/recurso3.webp'
import './Methodology.css'

/** Explica en cuatro etapas el proceso de acompañamiento propuesto. */
function Methodology() {
  return (
    <EditorialPage
      eyebrow={siteContent.methodology.eyebrow}
      title={siteContent.methodology.title}
      description={siteContent.methodology.description}
    >
      <section className="editorial-section" aria-label="Etapas de trabajo">
        <div className="editorial-steps">
          {siteContent.methodology.steps.map((step, index) => (
            <article className="editorial-step" key={step.title}>
              <span className="editorial-step__number">0{index + 1}</span>
              <h2>{step.title}</h2>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="methodology-differential" aria-labelledby="methodology-differential-title">
        <div className="methodology-differential__media">
          <img
            src={recurso3}
            alt="Territorio y trabajo de campo"
            width="1320"
            height="838"
            loading="lazy"
            decoding="async"
          />
          <div className="methodology-differential__overlay" aria-hidden="true" />
        </div>
        <div className="methodology-differential__content">
          <p className="editorial-eyebrow"><span />{siteContent.differentiator.eyebrow}</p>
          <h2 id="methodology-differential-title">{siteContent.differentiator.title}</h2>
          <p>{siteContent.differentiator.description}</p>
        </div>
      </section>

      <aside className="editorial-callout editorial-section">
        <p className="editorial-eyebrow"><span />Un siguiente paso claro</p>
        <h2>Cuéntanos en qué etapa está tu proyecto.</h2>
        <Link className="editorial-link" to="/contacto">
          Contactar
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14m-6-6 6 6-6 6" />
          </svg>
        </Link>
      </aside>
    </EditorialPage>
  )
}

export default Methodology
