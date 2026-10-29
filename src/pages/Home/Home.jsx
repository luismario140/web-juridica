import { Link } from 'react-router-dom'
import HeroPortraitCarousel from '../../components/HeroPortraitCarousel/HeroPortraitCarousel.jsx'
import { siteContent } from '../../data/siteContent.js'
import './Home.css'

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  )
}

/** Presentación concisa con acceso a las páginas de servicio y contacto. */
function Home() {
  return (
    <main className="landing-page">
      <section className="landing-hero landing-container" aria-labelledby="landing-title">
        <div className="landing-hero__copy">
          <div className="landing-hero__location">
            <span aria-hidden="true">⌖</span>
            {siteContent.hero.eyebrow}
          </div>
          <h1 id="landing-title">
            {siteContent.hero.title}
            <em>{siteContent.hero.emphasizedTitle}</em>
          </h1>
          <p className="landing-hero__description">{siteContent.hero.description}</p>
          <div className="landing-hero__actions">
            <Link className="landing-button landing-button--dark" to="/contacto">
              {siteContent.hero.primaryAction}<ArrowIcon />
            </Link>
            <Link className="landing-button landing-button--outline" to="/servicios">
              {siteContent.hero.secondaryAction}
            </Link>
          </div>
        </div>

        <HeroPortraitCarousel
          slides={siteContent.hero.portraitImages}
          profileName={siteContent.hero.profileName}
          profileDescription={siteContent.hero.profileDescription}
        />
      </section>

      <section className="landing-preview">
        <div className="landing-container">
          <div className="landing-preview__heading">
            <div>
              <p className="landing-eyebrow"><span />{siteContent.services.eyebrow}</p>
              <h2>{siteContent.services.title}</h2>
            </div>
            <Link className="landing-preview__all" to="/servicios">
              Ver todos los servicios <ArrowIcon />
            </Link>
          </div>
          <div className="landing-preview__grid">
            {siteContent.services.items.map((service, index) => (
              <Link className="landing-preview-card" key={service.id} to="/servicios">
                <span className="landing-preview-card__number">0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <span className="landing-preview-card__link">Conocer más <ArrowIcon /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}

export default Home
