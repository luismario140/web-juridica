import { Link } from 'react-router-dom'
import EditorialPage from '../../components/EditorialPage/EditorialPage.jsx'
import { siteContent } from '../../data/siteContent.js'

/** Información institucional y principios editoriales sujetos a validación. */
function About() {
  return (
    <EditorialPage
      eyebrow={siteContent.about.eyebrow}
      title={siteContent.about.title}
      description={siteContent.about.description}
    >
      <section className="editorial-split" aria-label="Presentación de la firma">
        <div className="editorial-visual">
          <span>{siteContent.about.visualLabel}</span>
        </div>
        <div className="editorial-copy">
          <p className="editorial-eyebrow"><span />{siteContent.about.eyebrow}</p>
          <h2>{siteContent.about.title}</h2>
          <p>{siteContent.about.description}</p>
          <p>{siteContent.about.secondParagraph}</p>
          <p>{siteContent.about.visualNote}</p>
        </div>
      </section>

      <section className="editorial-section" aria-labelledby="about-principles-title">
        <div className="editorial-section__heading">
          <p className="editorial-eyebrow"><span />Principios</p>
          <h2 id="about-principles-title">Una forma de trabajar por validar.</h2>
          <p>Estos conceptos son una propuesta editorial y deben confirmarse con la firma.</p>
        </div>
        <div className="editorial-grid editorial-grid--two">
          {siteContent.about.principles.map((principle, index) => (
            <article className="editorial-card" key={principle}>
              <span className="editorial-card__number">0{index + 1}</span>
              <h3>{principle}</h3>
              <p>[Descripción del principio pendiente de validación institucional.]</p>
            </article>
          ))}
        </div>
      </section>

      <aside className="editorial-callout">
        <p className="editorial-eyebrow"><span />Siguiente paso</p>
        <h2>Conozcamos el contexto de tu organización.</h2>
        <Link className="editorial-link" to="/contacto">
          Ir a contacto
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14m-6-6 6 6-6 6" />
          </svg>
        </Link>
      </aside>
    </EditorialPage>
  )
}

export default About
