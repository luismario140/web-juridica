import EditorialPage from '../../components/EditorialPage/EditorialPage.jsx'
import { siteContent } from '../../data/siteContent.js'

/** Reúne el enfoque territorial y los públicos de la firma. */
function Territory() {
  return (
    <EditorialPage
      eyebrow={siteContent.differentiator.eyebrow}
      title={siteContent.differentiator.title}
      description={siteContent.differentiator.description}
    >
      <section className="editorial-split" aria-label="Presencia y conocimiento del territorio">
        <div className="editorial-visual">
          <span>{siteContent.differentiator.visualLabel}</span>
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
