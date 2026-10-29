import { motion, useReducedMotion } from 'framer-motion'
import EditorialPage from '../../components/EditorialPage/EditorialPage.jsx'
import { siteContent } from '../../data/siteContent.js'
import recurso4 from '../../assets/imnoso/recurso4.webp'
import recurso5 from '../../assets/imnoso/recurso5.webp'
import './About.css'

/** Información institucional y principios editoriales sujetos a validación. */
function About() {
  const shouldReduceMotion = useReducedMotion()
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.16,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.65,
        ease: [0.25, 0.8, 0.25, 1],
      },
    },
  }

  const images = [
    {
      src: recurso4,
      alt: 'Jhon James Hurtado en una operación minera a cielo abierto.',
      label: 'Experiencia en terreno',
    },
    {
      src: recurso5,
      alt: 'Jhon James Hurtado conversa con un trabajador durante una visita de campo.',
      label: 'Acompañamiento cercano',
    },
  ]

  return (
    <EditorialPage
      eyebrow={siteContent.about.eyebrow}
      title={siteContent.about.title}
      description={siteContent.about.description}
    >
      <section className="about-intro" aria-label="Presentación de la firma">
        <div className="editorial-copy">
          <p className="editorial-eyebrow"><span />Experiencia y acompañamiento</p>
          <h2>Conocimiento que se construye en el territorio.</h2>
          <p>{siteContent.about.secondParagraph}</p>
          <p className="about-intro__signature">{siteContent.about.visualNote}</p>
        </div>
        <motion.div
          className="about-institutional-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          aria-label="Fotografías de experiencia profesional y trabajo de campo"
        >
          {images.map((image, index) => (
            <motion.figure
              className={`about-institutional__frame about-institutional__frame--${index + 1}`}
              variants={item}
              key={image.src}
            >
              <img
                src={image.src}
                alt={image.alt}
                width={index === 0 ? 840 : 724}
                height={index === 0 ? 750 : 680}
                loading="lazy"
                decoding="async"
              />
              <figcaption>{image.label}</figcaption>
            </motion.figure>
          ))}
          <span className="about-institutional__index" aria-hidden="true">01 — 02</span>
        </motion.div>
      </section>

      <section className="editorial-section" aria-labelledby="about-principles-title">
        <div className="editorial-section__heading">
          <p className="editorial-eyebrow"><span />Principios</p>
          <h2 id="about-principles-title">Principios que orientan nuestro trabajo.</h2>
          <p>Criterios para acompañar cada proyecto con claridad, cuidado y responsabilidad.</p>
        </div>
        <div className="editorial-grid editorial-grid--four about-principles-grid">
          {siteContent.about.principles.map((principle, index) => (
            <motion.article
              className="editorial-card"
              key={principle.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
              whileInView={{
                opacity: 1,
                y: shouldReduceMotion ? 0 : [0, -5, 0],
              }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: shouldReduceMotion ? 0.35 : 3.2,
                delay: shouldReduceMotion ? 0 : index * 0.42,
                repeat: shouldReduceMotion ? 0 : Infinity,
                ease: 'easeInOut',
              }}
            >
              <span className="editorial-card__number">0{index + 1}</span>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </EditorialPage>
  )
}

export default About
