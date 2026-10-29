import { motion, useReducedMotion } from 'framer-motion'
import EditorialPage from '../../components/EditorialPage/EditorialPage.jsx'
import { siteContent } from '../../data/siteContent.js'
import fieldworkImage from '../../assets/imgterrito/recurso7.webp'
import './Territory.css'

/** Reúne el enfoque territorial y los públicos de la firma. */
function Territory() {
  const shouldReduceMotion = useReducedMotion()

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
              src={fieldworkImage}
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
          <p className="editorial-eyebrow"><span />Contexto local</p>
          <h2>Cada proyecto tiene una realidad propia.</h2>
          <p>
            Comprender el entorno y escuchar a quienes hacen parte del proyecto
            ayuda a orientar decisiones jurídicas y de gestión con pertinencia.
          </p>
        </div>
      </section>

      <section className="editorial-section" aria-labelledby="audience-title">
        <div className="editorial-section__heading">
          <p className="editorial-eyebrow"><span />{siteContent.audience.eyebrow}</p>
          <h2 id="audience-title">{siteContent.audience.title}</h2>
        </div>
        <div className="editorial-grid editorial-grid--three">
          {siteContent.audience.items.map((audience, index) => (
            <motion.article
              className="editorial-card territory-audience-card"
              key={audience.title}
              initial={shouldReduceMotion ? false : { y: 12 }}
              whileInView={shouldReduceMotion ? undefined : { y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.55,
                delay: shouldReduceMotion ? 0 : index * 0.12,
                ease: [0.2, 0.7, 0.2, 1],
              }}
            >
              <span className="editorial-card__number">0{index + 1}</span>
              <h3>{audience.title}</h3>
              <p>{audience.description}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </EditorialPage>
  )
}

export default Territory
