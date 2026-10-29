import { useState } from 'react'
import EditorialPage from '../../components/EditorialPage/EditorialPage.jsx'
import { siteContent } from '../../data/siteContent.js'

/** Formulario con validación nativa; no envía datos hasta conectar un servicio real. */
function Contact() {
  const [formStatus, setFormStatus] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setFormStatus(siteContent.contact.form.notSent)
  }

  return (
    <EditorialPage
      eyebrow={siteContent.contact.eyebrow}
      title={siteContent.contact.title}
      description={siteContent.contact.description}
    >
      <div className="editorial-contact-layout">
        <div className="editorial-copy">
          <p className="editorial-eyebrow"><span />Información de contacto</p>
          <h2>Canales oficiales por confirmar.</h2>
          <p>[Completar los datos de contacto y la información de privacidad antes de publicar.]</p>
          <dl className="editorial-contact-details">
            <div>
              <dt>{siteContent.contact.phoneLabel}</dt>
              <dd>{siteContent.contact.phone}</dd>
            </div>
            <div>
              <dt>{siteContent.contact.emailLabel}</dt>
              <dd>{siteContent.contact.email}</dd>
            </div>
            <div>
              <dt>{siteContent.contact.locationLabel}</dt>
              <dd>{siteContent.contact.location}</dd>
            </div>
          </dl>
        </div>

        <form className="editorial-form" onSubmit={handleSubmit}>
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
          </button>
          <p className="editorial-form__privacy">{siteContent.contact.form.privacyNote}</p>
          <p className="editorial-form__status" role="status">{formStatus}</p>
        </form>
      </div>
    </EditorialPage>
  )
}

export default Contact
