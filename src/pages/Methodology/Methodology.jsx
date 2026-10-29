import { Link } from 'react-router-dom'
import EditorialPage from '../../components/EditorialPage/EditorialPage.jsx'
import { siteContent } from '../../data/siteContent.js'

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
