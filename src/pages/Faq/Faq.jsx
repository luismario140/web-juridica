import EditorialPage from '../../components/EditorialPage/EditorialPage.jsx'
import { siteContent } from '../../data/siteContent.js'

/** Preguntas frecuentes en acordeones nativos accesibles. */
function Faq() {
  return (
    <EditorialPage
      eyebrow={siteContent.faq.eyebrow}
      title={siteContent.faq.title}
      description="Resuelve tus dudas encuentra respuestas más frecuentes sobre nuestros servicios."
    >
      <section className="editorial-section editorial-faq" aria-label="Preguntas y respuestas">
        {siteContent.faq.items.map((item, index) => (
          <details key={item.question} open={index === 0}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </section>
    </EditorialPage>
  )
}

export default Faq
