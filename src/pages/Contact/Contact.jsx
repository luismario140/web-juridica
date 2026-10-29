import { useState } from 'react'
import EditorialPage from '../../components/EditorialPage/EditorialPage.jsx'
import { siteContent } from '../../data/siteContent.js'
import './Contact.css'

/** Página de contacto con formulario que prepara una consulta en WhatsApp. */
function Contact() {
  const [formStatus, setFormStatus] = useState('')
  const [whatsappFallbackUrl, setWhatsappFallbackUrl] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const selectedService = siteContent.services.items.find(
      (service) => service.id === formData.get('service'),
    )

    if (!selectedService) {
      setFormStatus(siteContent.contact.form.missingService)
      return
    }

    const message = [
      'Hola, quiero solicitar una consulta.',
      '',
      `*Nombre:* ${formData.get('name')}`,
      `*Teléfono:* ${formData.get('phone')}`,
      `*Correo:* ${formData.get('email')}`,
      `*Servicio:* ${selectedService.title}`,
      `*Mensaje:* ${formData.get('message')}`,
    ].join('\n')
    const phone = siteContent.contact.phone.replace(/\D/g, '')
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    const whatsappWindow = window.open(whatsappUrl, '_blank')

    if (!whatsappWindow) {
      setWhatsappFallbackUrl(whatsappUrl)
      setFormStatus(siteContent.contact.form.popupBlocked)
      return
    }

    whatsappWindow.opener = null
    setWhatsappFallbackUrl('')
    setFormStatus(siteContent.contact.form.whatsappReady)
  }

  return (
    <div className="contact-page">
      <EditorialPage
        eyebrow={siteContent.contact.eyebrow}
        title={siteContent.contact.title}
        description={siteContent.contact.description}
      >
        <div className="contact-layout">
          <aside className="contact-panel">
            <div className="contact-panel__heading">
              <p className="contact-panel__eyebrow">Información de contacto</p>
              <h2>Un análisis comienza por entender el contexto.</h2>
              <p>
                Indique el tema que desea consultar y describa brevemente la situación
                para que podamos comprender mejor su solicitud.
              </p>
            </div>

            <dl className="contact-panel__details">
              <div>
                <dt>{siteContent.contact.emailLabel}</dt>
                <dd>
                  <a href={`mailto:${siteContent.contact.email}`}>{siteContent.contact.email}</a>
                </dd>
              </div>
              <div>
                <dt>{siteContent.contact.locationLabel}</dt>
                <dd>{siteContent.contact.location}</dd>
              </div>
            </dl>

            <div className="contact-panel__process">
              <p className="contact-panel__eyebrow">Cómo iniciar</p>
              <ol>
                <li><span>01</span> Complete el formulario con sus datos.</li>
                <li><span>02</span> Revise el mensaje preparado en WhatsApp.</li>
                <li><span>03</span> Envíelo desde su cuenta para iniciar el contacto.</li>
              </ol>
            </div>
          </aside>

          <form className="contact-form editorial-form" onSubmit={handleSubmit}>
            <div className="contact-form__heading">
              <p className="editorial-eyebrow"><span />Cuéntenos su caso</p>
              <h2>Empecemos por lo importante.</h2>
              <p>Complete sus datos y prepararemos el mensaje para abrirlo en WhatsApp.</p>
            </div>
            <p className="editorial-form__notice">{siteContent.contact.form.submissionNotice}</p>
            <div className="editorial-form__row">
              <label>
                {siteContent.contact.form.name}
                <input autoComplete="name" name="name" required />
              </label>
              <label>
                {siteContent.contact.form.phone}
                <input autoComplete="tel" name="phone" type="tel" required />
              </label>
            </div>
            <label>
              {siteContent.contact.form.email}
              <input autoComplete="email" name="email" type="email" required />
            </label>
            <label>
              {siteContent.contact.form.service}
              <select name="service" defaultValue="" required>
                <option value="" disabled>{siteContent.contact.form.servicePlaceholder}</option>
                {siteContent.services.items.map((service) => (
                  <option key={service.id} value={service.id}>{service.title}</option>
                ))}
              </select>
            </label>
            <label>
              {siteContent.contact.form.message}
              <textarea
                name="message"
                placeholder={siteContent.contact.form.messagePlaceholder}
                rows="4"
                required
              />
            </label>
            <button className="editorial-link editorial-form__submit" type="submit">
              {siteContent.contact.form.submit}
              <span aria-hidden="true">↗</span>
            </button>
            <p className="editorial-form__privacy">{siteContent.contact.form.privacyNote}</p>
            <p className="editorial-form__status" role="status">
              {formStatus}
              {whatsappFallbackUrl && (
                <>
                  {' '}
                  <a href={whatsappFallbackUrl} target="_blank" rel="noopener noreferrer">
                    {siteContent.contact.form.openWhatsApp}
                  </a>
                </>
              )}
            </p>
          </form>
        </div>
      </EditorialPage>
    </div>
  )
}

export default Contact
