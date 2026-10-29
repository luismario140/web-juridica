import EditorialPage from '../../components/EditorialPage/EditorialPage.jsx'
import { siteContent } from '../../data/siteContent.js'
import fieldworkImageOne from '../../assets/imgterrito/recurso3.webp'
import fieldworkImageTwo from '../../assets/imgterrito/recurso7.webp'
import './Territory.css'

/** Reúne el enfoque territorial y los públicos de la firma. */
function Territory() {
  return (
    <EditorialPage
      eyebrow={siteContent.differentiator.eyebrow}
      title={siteContent.differentiator.title}
      description={siteContent.differentiator.description}
    >
      <section className="editorial-split territory-split" aria-label="Presencia y conocimiento del territorio">
        <div className="territory-gallery" aria-label="Imágenes de trabajo en territorio">
          <figure className="territory-photo territory-photo--primary">
            <img
              src={fieldworkImageOne}
              alt="Dos personas revisan una batea en un cauce de agua."
              width="1320"
              height="838"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Trabajo de campo</figcaption>
          </figure>
          <figure className="territory-photo territory-photo--secondary">
            <img
              src={fieldworkImageTwo}
              alt="Un profesional y un acompañante observan una batea en el cauce."
              width="1320"
              height="852"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Reconocimiento del entorno</figcaption>
          </figure>
        </div>
        <div className="editorial-copy">
          <p className="editorial-eyebrow"><span />Territorio</p>
          <h2>{siteContent.differentiator.title}</h2>
          <p>{siteContent.differentiator.description}</p>
          <p>[Incluir únicamente ubicaciones, alianzas y experiencia territorial confirmadas.]</p>
        </div>
      </section>

      <section className="editorial-section" aria-labelledby="audience-title">
        <div className="editorial-section__heading">
          <p className="editorial-eyebrow"><span />{siteContent.audience.eyebrow}</p>
          <h2 id="audience-title">{siteContent.audience.title}</h2>
        </div>
        <div className="editorial-grid editorial-grid--three">
          {siteContent.audience.items.map((audience, index) => (
            <article className="editorial-card" key={audience.title}>
              <span className="editorial-card__number">0{index + 1}</span>
              <h3>{audience.title}</h3>
              <p>{audience.description}</p>
            </article>
          ))}
        </div>
      </section>
    </EditorialPage>
  )
}

export default Territory
