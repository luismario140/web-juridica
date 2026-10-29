import professionalOfficePortrait from '../assets/images/recurso1.webp'
import professionalCorporatePortrait from '../assets/images/recurso2.webp'

// Textos provisionales de la maqueta. Sustituirlos aquí cuando el cliente valide
// el contenido definitivo; los campos entre corchetes son datos aún pendientes.
export const siteContent = {
  brand: {
    name: 'Jhon James Hurtado M.',
    descriptor: 'Consultoría Minera & Business Corp.',
    footerLine: 'Criterio y acompañamiento para decisiones de alto impacto.',
    footerLocation: '[TERRITORIO POR CONFIRMAR]',
    footerNote: '[LEMA INSTITUCIONAL POR VALIDAR]',
  },
  navigation: [
    { label: 'Nosotros', target: 'nosotros' },
    { label: 'Servicios', target: 'servicios' },
    { label: 'Cómo trabajamos', target: 'como-trabajamos' },
    { label: 'Territorio', target: 'territorio' },
    { label: 'Preguntas', target: 'preguntas' },
  ],
  hero: {
    eyebrow: '[UBICACIÓN Y ENFOQUE POR CONFIRMAR]',
    title: '[TÍTULO PRINCIPAL SOBRE CRITERIO Y VISIÓN ESTRATÉGICA]',
    emphasizedTitle: '[FRASE DESTACADA DEL HERO]',
    description:
      '[Descripción breve de la consultoría y del tipo de acompañamiento que ofrece la firma.]',
    primaryAction: 'Solicitar consulta',
    secondaryAction: 'Conocer servicios',
    portraitImages: [
      {
        src: professionalOfficePortrait,
        alt: 'Retrato profesional sentado en su oficina.',
        label: 'Retrato en oficina',
      },
      {
        src: professionalCorporatePortrait,
        alt: 'Retrato profesional en un espacio corporativo.',
        label: 'Retrato corporativo',
      },
    ],
    profileName: '[NOMBRE Y APELLIDO]',
    profileDescription: '[CARGO O DESCRIPCIÓN PROFESIONAL VALIDADA]',
  },
  indicators: [
    { value: '[XX]+', label: '[AÑOS DE EXPERIENCIA POR CONFIRMAR]' },
    { value: '[N]', label: '[FRENTES DE TRABAJO POR CONFIRMAR]' },
    { value: '[XX%]', label: '[INDICADOR DE RESULTADO POR VALIDAR]' },
  ],
  capabilities: [
    '[CAPACIDAD: RELACIÓN CON COMUNIDADES]',
    '[CAPACIDAD: ESTRUCTURACIÓN CORPORATIVA]',
    '[CAPACIDAD: DEBIDA DILIGENCIA]',
    '[CAPACIDAD: GESTIÓN AMBIENTAL]',
    '[CAPACIDAD: OPTIMIZACIÓN DE PROCESOS]',
  ],
  about: {
    eyebrow: 'Quiénes somos',
    title: '[PRESENTACIÓN INSTITUCIONAL EN UNA FRASE]',
    description:
      '[Descripción de la firma, su enfoque de trabajo y las necesidades que atiende.]',
    secondParagraph:
      '[Perfil profesional y trayectoria: completar únicamente con información verificada.]',
    visualLabel: '[FOTOGRAFÍA O IMAGEN INSTITUCIONAL]',
    visualNote: '[MENSAJE BREVE SOBRE EL ENFOQUE DE LA FIRMA]',
    principles: ['Eficacia', 'Eficiencia', 'Respeto', 'Responsabilidad'],
  },
  services: {
    eyebrow: 'Líneas de servicio',
    title: 'Tres frentes, una sola estrategia.',
    description:
      '[Introducción breve a las líneas de servicio y cómo se relacionan entre sí.]',
    action: 'Hablar sobre este servicio',
    items: [
      {
        id: 'legal-minero',
        title: 'Legal minero-ambiental',
        description:
          '[Descripción del servicio, su alcance y el tipo de acompañamiento ofrecido.]',
        items: [
          '[GESTIÓN MINERA POR CONFIRMAR]',
          '[TRÁMITE AMBIENTAL POR DEFINIR]',
          '[ACTIVIDAD DE FORMALIZACIÓN POR VALIDAR]',
          '[SEGUIMIENTO NORMATIVO POR CONFIRMAR]',
          '[REPRESENTACIÓN O ACOMPAÑAMIENTO POR DEFINIR]',
        ],
        tags: ['[ÁREA]', '[ÁREA]', '[ÁREA]'],
        visualLabel: '[IMAGEN RELACIONADA CON EL SERVICIO]',
      },
      {
        id: 'estrategia',
        title: 'Estrategia corporativa',
        description:
          '[Descripción de la asesoría estratégica y del alcance que defina la firma.]',
        items: [
          '[PLANIFICACIÓN EMPRESARIAL POR DEFINIR]',
          '[ANÁLISIS DE PROYECTOS POR VALIDAR]',
          '[ACOMPAÑAMIENTO EN NEGOCIACIONES POR CONFIRMAR]',
          '[GESTIÓN CORPORATIVA POR DEFINIR]',
        ],
        tags: ['[ÁREA]', '[ÁREA]', '[ÁREA]'],
        visualLabel: '[IMAGEN RELACIONADA CON EL SERVICIO]',
      },
      {
        id: 'compliance',
        title: 'Compliance',
        description:
          '[Descripción del servicio de cumplimiento y de sus límites profesionales.]',
        items: [
          '[REVISIÓN DE CUMPLIMIENTO POR DEFINIR]',
          '[MATRIZ DE RIESGOS POR VALIDAR]',
          '[REVISIÓN DE PROCESOS POR CONFIRMAR]',
          '[CAPACITACIÓN O ACOMPAÑAMIENTO POR DEFINIR]',
        ],
        tags: ['[ÁREA]', '[ÁREA]', '[ÁREA]'],
        visualLabel: '[IMAGEN RELACIONADA CON EL SERVICIO]',
      },
    ],
  },
  methodology: {
    eyebrow: 'Cómo trabajamos',
    title: '[TÍTULO SOBRE EL PROCESO DE TRABAJO]',
    description:
      '[Explicación breve de cómo se acompaña al cliente desde el primer contacto.]',
    steps: [
      {
        title: 'Diagnóstico',
        description: '[Descripción del análisis inicial y la información necesaria.]',
      },
      {
        title: 'Estrategia',
        description: '[Descripción de la ruta de trabajo que se acuerde.]',
      },
      {
        title: 'Gestión',
        description: '[Descripción de las actividades y responsabilidades acordadas.]',
      },
      {
        title: 'Acompañamiento',
        description: '[Descripción del seguimiento y la comunicación con el cliente.]',
      },
    ],
  },
  differentiator: {
    eyebrow: 'Nuestro diferencial',
    title: '[FRASE CENTRAL SOBRE LA PROPUESTA DE VALOR]',
    description:
      '[Descripción verificable del enfoque, la experiencia o la metodología de la firma.]',
    visualLabel: '[IMAGEN DE TERRITORIO O TRABAJO DE CAMPO]',
  },
  audience: {
    eyebrow: 'A quién acompañamos',
    title: '[TÍTULO PARA LOS PÚBLICOS DE LA FIRMA]',
    items: [
      {
        title: '[EMPRESAS MINERAS Y TITULARES]',
        description: '[Descripción del público y sus posibles necesidades.]',
      },
      {
        title: '[ORGANIZACIONES E INSTITUCIONES]',
        description: '[Descripción del público y sus posibles necesidades.]',
      },
      {
        title: '[CORPORACIONES Y OPERADORES]',
        description: '[Descripción del público y sus posibles necesidades.]',
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: '[TÍTULO PARA LAS PREGUNTAS FRECUENTES]',
    items: [
      {
        question: '¿Qué información conviene preparar antes de una consulta?',
        answer: '[Respuesta provisional que la firma debe revisar y aprobar.]',
      },
      {
        question: '¿Con qué tipo de organizaciones trabaja la firma?',
        answer: '[Respuesta provisional que la firma debe revisar y aprobar.]',
      },
      {
        question: '¿Cómo se define el alcance de un servicio?',
        answer: '[Respuesta provisional que la firma debe revisar y aprobar.]',
      },
      {
        question: '¿Cómo se aborda una consulta relacionada con el territorio?',
        answer: '[Respuesta provisional que la firma debe revisar y aprobar.]',
      },
    ],
  },
  contact: {
    eyebrow: 'Contacto',
    title: '[INVITACIÓN A CONTAR EL CASO O PROYECTO]',
    description:
      '[Descripción del proceso de contacto, tiempos de respuesta y manejo de información, por validar.]',
    phoneLabel: 'WhatsApp / Teléfono',
    phone: '[NÚMERO DE CONTACTO]',
    emailLabel: 'Correo electrónico',
    email: '[CORREO DE CONTACTO]',
    locationLabel: 'Ubicación',
    location: '[CIUDAD O TERRITORIO POR CONFIRMAR]',
    form: {
      name: 'Nombre completo',
      phone: 'Teléfono / WhatsApp',
      email: 'Correo electrónico',
      service: '¿En qué podemos ayudarte?',
      message: 'Mensaje',
      submit: 'Validar formulario',
      servicePlaceholder: 'Selecciona un tema',
      messagePlaceholder: '[DESCRIBE BREVEMENTE TU CONSULTA]',
      submissionNotice:
        'Formulario de maqueta: no está conectado a un servicio de envío y no transmite tus datos.',
      notSent:
        'El formulario no está conectado; tus datos no se han enviado. Configura primero un canal oficial de recepción.',
      privacyNote: '[AVISO DE PRIVACIDAD Y TRATAMIENTO DE DATOS POR VALIDAR]',
    },
  },
}
