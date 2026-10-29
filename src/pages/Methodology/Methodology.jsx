import { motion, useReducedMotion } from 'framer-motion'
import EditorialPage from '../../components/EditorialPage/EditorialPage.jsx'
import { siteContent } from '../../data/siteContent.js'
import differentiatorImage from '../../assets/imgterrito/recurso3.webp'
import './Methodology.css'

/** Explica en cuatro etapas el proceso de acompañamiento propuesto. */
function Methodology() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <EditorialPage
      eyebrow={siteContent.methodology.eyebrow}
      title={siteContent.methodology.title}
      description={siteContent.methodology.description}
    >
      <section className="editorial-section" aria-label="Etapas de trabajo">
        <div className="editorial-steps">
          {siteContent.methodology.steps.map((step, index) => (
            <motion.article
              className="editorial-step"
              key={step.title}
              whileInView={shouldReduceMotion ? undefined : {
                y: [0, -5, 0],
                scale: [1, 1.012, 1],
              }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 2.6,
                delay: shouldReduceMotion ? 0 : index * 0.35,
                repeat: shouldReduceMotion ? 0 : Infinity,
                ease: [0.34, 1.56, 0.64, 1],
              }}
            >
              <span className="editorial-step__number">0{index + 1}</span>
              <h2>{step.title}</h2>
              <p>{step.description}</p>
            </motion.article>
          ))}
        </div>
      </section>
      <section
        className="editorial-section methodology-differentiator"
        aria-labelledby="methodology-differentiator-title"
      >
        <img
          className="methodology-differentiator__image"
          src={differentiatorImage}
          alt=""
          loading="lazy"
          decoding="async"
        />
        <div className="methodology-differentiator__content">
          <p className="editorial-eyebrow"><span />{siteContent.differentiator.eyebrow}</p>
          <h2 id="methodology-differentiator-title">{siteContent.differentiator.title}</h2>
          <p>{siteContent.differentiator.description}</p>
        </div>
      </section>
    </EditorialPage>
  )
}

export default Methodology
