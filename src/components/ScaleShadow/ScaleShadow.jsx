import './ScaleShadow.css'

/**
 * ScaleShadow - Silueta decorativa de la balanza de la justicia en segundo plano
 *
 * @param {Object} props
 * @param {'gold' | 'light' | 'dark'} [props.variant='gold'] - Paleta de la sombra
 * @param {number|string} [props.size=400] - Tamaño (ancho y alto)
 * @param {number} [props.tilt=0] - Inclinación en grados
 * @param {boolean|'reverse'} [props.animated=true] - Animación sutil de flotación
 * @param {number} [props.opacity] - Opacidad personalizada opcional
 * @param {string} [props.className=''] - Clases CSS adicionales
 * @param {React.CSSProperties} [props.style] - Estilos inline adicionales
 */
export default function ScaleShadow({
  variant = 'gold',
  size = 400,
  tilt = 0,
  animated = true,
  opacity,
  className = '',
  style = {},
  ...rest
}) {
  const animClass =
    animated === 'reverse'
      ? 'scale-shadow--animated-reverse'
      : animated
        ? 'scale-shadow--animated'
        : ''

  const inlineStyles = {
    '--scale-size': typeof size === 'number' ? `${size}px` : size,
    '--scale-tilt': `${tilt}deg`,
    ...(opacity !== undefined ? { opacity } : {}),
    ...style,
  }

  return (
    <div
      className={`scale-shadow scale-shadow--${variant} ${animClass} ${className}`.trim()}
      style={inlineStyles}
      aria-hidden="true"
      {...rest}
    >
      <svg
        className="scale-shadow__svg"
        viewBox="0 0 400 400"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
      >
        {/* Anillo y remate decorativo superior */}
        <circle
          cx="200"
          cy="36"
          r="13"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        />
        <circle cx="200" cy="54" r="5" />
        <polygon points="200,56 195,78 205,78" />

        {/* Fiel / Barra transversal curvada */}
        <path d="M 64,82 C 105,74 155,76 200,78 C 245,76 295,74 336,82 C 341,83 341,88 336,89 C 295,81 245,83 200,85 C 155,83 105,81 64,89 C 59,88 59,83 64,82 Z" />
        <circle cx="62" cy="85.5" r="6" />
        <circle cx="338" cy="85.5" r="6" />

        {/* Pivote central clásico */}
        <circle
          cx="200"
          cy="81.5"
          r="9"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
        />
        <circle cx="200" cy="81.5" r="3.2" />

        {/* Columna central / Mástil */}
        <rect x="196" y="81" width="8" height="235" rx="4" />
        <rect x="193" y="112" width="14" height="5" rx="2.5" />
        <rect x="191" y="178" width="18" height="6" rx="3" />
        <rect x="193" y="248" width="14" height="5" rx="2.5" />
        <rect x="189" y="306" width="22" height="7" rx="3.5" />

        {/* Base escalonada y pedestal */}
        <path d="M 172,313 C 172,305 228,305 228,313 L 244,346 C 247,351 153,351 156,346 Z" />
        <rect x="138" y="346" width="124" height="9" rx="3.5" />
        <rect x="122" y="355" width="156" height="12" rx="4" />

        {/* Cuerdas y Platillo Izquierdo */}
        <line
          x1="62"
          y1="91"
          x2="26"
          y2="202"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="62"
          y1="91"
          x2="98"
          y2="202"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="62"
          y1="91"
          x2="62"
          y2="206"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="2 3"
        />
        <path d="M 22,202 C 22,240 102,240 102,202 Z" />
        <ellipse cx="62" cy="202" rx="40" ry="6.5" />

        {/* Cuerdas y Platillo Derecho */}
        <line
          x1="338"
          y1="91"
          x2="302"
          y2="202"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="338"
          y1="91"
          x2="374"
          y2="202"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="338"
          y1="91"
          x2="338"
          y2="206"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="2 3"
        />
        <path d="M 298,202 C 298,240 378,240 378,202 Z" />
        <ellipse cx="338" cy="202" rx="40" ry="6.5" />
      </svg>
    </div>
  )
}

