import './EditorialPage.css'

/** Estructura común y compacta para páginas interiores. */
function EditorialPage({ eyebrow, title, description, children }) {
  return (
    <main className="editorial-page">
      <header className="editorial-hero">
        <div className="editorial-container">
          <p className="editorial-eyebrow"><span />{eyebrow}</p>
          <h1>{title}</h1>
          {description && <p className="editorial-hero__description">{description}</p>}
        </div>
      </header>
      <div className="editorial-container editorial-content">{children}</div>
    </main>
  )
}

export default EditorialPage
