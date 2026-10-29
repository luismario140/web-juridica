import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, animate, motion, useMotionValue } from 'framer-motion'
import './HeroPortraitCarousel.css'

const AUTOPLAY_DELAY = 3600
const SPRING = { type: 'spring', stiffness: 175, damping: 24, mass: 0.62 }
const REDUCED_TRANSITION = { duration: 0 }

const modulo = (value, divisor) => ((value % divisor) + divisor) % divisor

/** Carrusel cilíndrico 3D con arrastre, autoplay y vista ampliada de cada foto. */
function HeroPortraitCarousel({ slides, profileName, profileDescription }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeSlide, setActiveSlide] = useState(null)
  const [isHovered, setIsHovered] = useState(false)
  const [hasFocus, setHasFocus] = useState(false)
  const [isInteracting, setIsInteracting] = useState(false)
  const [stageWidth, setStageWidth] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const stageRef = useRef(null)
  const didDrag = useRef(false)
  const rotation = useMotionValue(0)
  const isPaused = isHovered || hasFocus || isInteracting || Boolean(activeSlide)
  const faceCount = Math.max(slides.length * 2, 4)
  const angleStep = 360 / faceCount
  const cylinderWidth = Math.max(900, stageWidth * 2.8)
  const faceWidth = cylinderWidth / faceCount
  const radius = faceWidth / (2 * Math.tan(Math.PI / faceCount))
  const transition = prefersReducedMotion ? REDUCED_TRANSITION : SPRING

  const faces = useMemo(
    () => Array.from({ length: faceCount }, (_, index) => ({
      ...slides[index % slides.length],
      faceIndex: index,
    })),
    [faceCount, slides],
  )

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return undefined

    const observer = new ResizeObserver(([entry]) => {
      setStageWidth(entry.contentRect.width)
    })
    observer.observe(stage)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches)
    updatePreference()
    mediaQuery.addEventListener('change', updatePreference)
    return () => mediaQuery.removeEventListener('change', updatePreference)
  }, [])

  useEffect(() => {
    if (isPaused || slides.length < 2) return undefined
    if (prefersReducedMotion) return undefined

    const intervalId = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % faceCount)
      animate(rotation, rotation.get() - angleStep, transition)
    }, AUTOPLAY_DELAY)

    return () => window.clearInterval(intervalId)
  }, [angleStep, faceCount, isPaused, prefersReducedMotion, rotation, slides.length, transition])

  useEffect(() => {
    if (!activeSlide) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setActiveSlide(null)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [activeSlide])

  const rotateBy = (direction) => {
    const targetIndex = modulo(activeIndex + direction, faceCount)
    setActiveIndex(targetIndex)
    animate(rotation, rotation.get() - direction * angleStep, transition)
  }

  const showPhoto = (photoIndex) => {
    const currentFace = -rotation.get() / angleStep
    const photoFaceIndexes = Array.from(
      { length: faceCount / slides.length },
      (_, copyIndex) => photoIndex + copyIndex * slides.length,
    )
    const candidateFaces = photoFaceIndexes.flatMap((faceIndex) => [
      faceIndex - faceCount,
      faceIndex,
      faceIndex + faceCount,
    ])
    const targetFace = candidateFaces.reduce((closest, candidate) => (
      Math.abs(candidate - currentFace) < Math.abs(closest - currentFace)
        ? candidate
        : closest
    ))

    setActiveIndex(modulo(targetFace, faceCount))
    animate(rotation, -targetFace * angleStep, transition)
  }

  const handlePanStart = () => {
    rotation.stop()
    didDrag.current = false
    setIsInteracting(true)
  }

  const handlePan = (_, info) => {
    rotation.set(rotation.get() + info.delta.x * 0.28)
    if (Math.abs(info.offset.x) > 10) didDrag.current = true
  }

  const handlePanEnd = (_, info) => {
    const projectedRotation = rotation.get() + info.velocity.x * 0.12
    const targetFace = Math.round(-projectedRotation / angleStep)
    const targetIndex = modulo(targetFace, faceCount)

    setActiveIndex(targetIndex)
    animate(rotation, -targetFace * angleStep, transition)
    setIsInteracting(false)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      rotateBy(-1)
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      rotateBy(1)
    }
  }

  return (
    <div
      className="hero-portrait"
      role="region"
      aria-roledescription="carrusel"
      aria-label="Fotografías del profesional"
      tabIndex="0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setHasFocus(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setHasFocus(false)
      }}
      onKeyDown={handleKeyDown}
    >
      <div className="hero-portrait__stage" ref={stageRef}>
        <motion.div
          className="hero-portrait__cylinder"
          style={{
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: 'preserve-3d',
          }}
          onPanStart={handlePanStart}
          onPan={handlePan}
          onPanEnd={handlePanEnd}
        >
          {faces.map((face) => (
            <motion.button
              className="hero-portrait__face"
              key={`${face.src}-${face.faceIndex}`}
              type="button"
              aria-label={`Ampliar fotografía: ${face.label}`}
              aria-haspopup="dialog"
              aria-hidden={face.faceIndex !== activeIndex}
              tabIndex={face.faceIndex === activeIndex ? 0 : -1}
              style={{
                width: faceWidth,
                marginLeft: -faceWidth / 2,
                transform: `rotateY(${face.faceIndex * angleStep}deg) translateZ(${radius}px)`,
              }}
              onClick={() => {
                if (didDrag.current) {
                  didDrag.current = false
                  return
                }
                setActiveSlide(face)
              }}
            >
              <img
                src={face.src}
                alt=""
                sizes="(max-width: 680px) 85vw, 40vw"
                loading={face.faceIndex < slides.length ? 'eager' : 'lazy'}
                fetchPriority={face.faceIndex === 0 ? 'high' : 'auto'}
                decoding="async"
                draggable="false"
              />
            </motion.button>
          ))}
        </motion.div>
      </div>

      <div className="hero-portrait__profile">
        <span className="hero-portrait__seal" aria-hidden="true">JH</span>
        <span>
          <strong>{profileName}</strong>
          <small>{profileDescription}</small>
        </span>
      </div>

      <div className="hero-portrait__controls" role="group" aria-label="Controles del carrusel">
        <button type="button" aria-label="Fotografía anterior" onClick={() => rotateBy(-1)}>
          <span aria-hidden="true">←</span>
        </button>
        <div className="hero-portrait__pagination">
          {slides.map((slide, index) => (
            <button
              className={index === activeIndex % slides.length ? 'is-active' : ''}
              key={slide.src}
              type="button"
              aria-label={`Mostrar fotografía: ${slide.label}`}
              aria-pressed={index === activeIndex % slides.length}
              onClick={() => showPhoto(index)}
            />
          ))}
        </div>
        <button type="button" aria-label="Fotografía siguiente" onClick={() => rotateBy(1)}>
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <span className="hero-portrait__counter" aria-hidden="true">
        {String((activeIndex % slides.length) + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </span>
      <span className="hero-portrait__status" aria-live="polite">
        {faces[activeIndex].label}
      </span>

      <AnimatePresence>
        {activeSlide && (
          <motion.div
            className="hero-portrait__lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`Fotografía ampliada: ${activeSlide.label}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveSlide(null)}
          >
            <motion.img
              src={activeSlide.src}
              alt={activeSlide.alt}
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
            />
            <button
              className="hero-portrait__lightbox-close"
              type="button"
              aria-label="Cerrar fotografía ampliada"
              onClick={() => setActiveSlide(null)}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default HeroPortraitCarousel
