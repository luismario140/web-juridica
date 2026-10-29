import professionalOfficePortrait from '../assets/images/recurso1.webp'
import professionalCorporatePortrait from '../assets/images/recurso2.webp'

// Textos provisionales de la maqueta. Sustituirlos aquí cuando el cliente valide
// el contenido definitivo; los campos entre corchetes son datos aún pendientes.
export const siteContent = {
  brand: {
    name: 'Jhon James Hurtado M.',
    descriptor: 'Consultoría Minera & Business Corp.',
    footerLine: 'Criterio y acompañamiento para decisiones de alto impacto.',
    footerLocation: 'Chocó - Colombia',
    footerNote: 'Territorio - Legalidad - Futuro',
  },
  navigation: [
    { label: 'Nosotros', target: 'nosotros' },
    { label: 'Servicios', target: 'servicios' },
    { label: 'Cómo trabajamos', target: 'como-trabajamos' },
    { label: 'Territorio', target: 'territorio' },
    { label: 'Preguntas', target: 'preguntas' },
  ],
  hero: {
    eyebrow: '(Chocó - Colombia) Territorio - Legalidad - Futuro',
    title: 'Criterio legal y visión estratégica para su proyecto minero',
    emphasizedTitle: 'avance con seguridad',
    description:
      'Acompañamos a titulares mineros, empresas y comunidades en la formalización, el licenciamiento ambiental y el cumplimiento normativo, con cercanía y conocimiento real del territorio.',
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
    profileName: 'Jhon James Hurtado Murillo',
    profileDescription: 'Abogado experto en derecho minero-ambiental',
  },
  indicators: [
    { value: '[+10]+', label: 'años en consultoría minero-ambiental' },
    { value: '[3]', label: 'frentes integrados en una estrategia' },
    { value: '[100%]', label: 'presencia en campo y territorio' },
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
    title: 'Un aliado que entiende la ley, el negocio y la gente del territorio.',
    description:
      'Somos una firma consultora en asuntos mineroambientales, estrategia de negocios corporativos y compliance, para quienes buscan eficiencia y tranquilidad en el desarrollo de sus operaciones.',
    secondParagraph:
      'Jhon James Hurtado Murillo es abogado experto en derecho minero-ambiental, con estudios en estrategia e innovación legal, responsabilidad del Estado, compliance y derecho de los negocios.',
    visualLabel: '[FOTOGRAFÍA O IMAGEN INSTITUCIONAL]',
    visualNote: 'Territorio - Legalidad - Futuro',
    principles: ['Eficacia', 'Eficiencia', 'Respeto', 'Responsabilidad'],
  },
  services: {
    eyebrow: 'Líneas de servicio',
    title: 'Tres frentes, una sola estrategia.',
    description:
      'Elija un frente para ver cómo le acompañamos. Cada proyecto se aborda desde una mirada completa: legal, técnica, empresarial, ambiental y reputacional.',
    action: 'Hablar sobre este servicio',
    items: [
      {
        id: 'legal-minero',
        title: 'Legal minero-ambiental',
        description:
          'Representación técnico-jurídica ante autoridades mineras y ambientales, para que su operación esté en regla y protegida.',
        items: [
          'Radicación de títulos mineros',
          'Licencias y permisos ambientales',
          'Acompañamiento en formalización minera',
          'Seguimiento normativo permanente',
          'Representación ante autoridades mineras y ambientales',
        ],
        tags: ['TÍTULOS', 'LICENCIAS', 'CUMPLIMIENTO'],
        visualLabel: '[IMAGEN RELACIONADA CON EL SERVICIO]',
      },
      {
        id: 'estrategia',
        title: 'Estrategia corporativa',
        description:
          'Estructuramos y fortalecemos su empresa para negociar, crecer y operar con solidez.',
        items: [
          'Constitución y reestructuración de compañías',
          'Due diligence',
          'Negociaciones estratégicas',
          'Planificación y desarrollo de proyectos',
          'Asistencia técnico-jurídica en procesos corporativos',
        ],
        tags: ['ESTRUCTURA', 'NEGOCIACIÓN', 'GOBERNANZA'],
        visualLabel: '[IMAGEN RELACIONADA CON EL SERVICIO]',
      },
      {
        id: 'compliance',
        title: 'Compliance',
        description:
          'Sistemas de prevención y transparencia que generan confianza ante clientes, aliados y autoridades.',
        items: [
          'Sistemas SAGRILAFT y SARLAFT',
          'Programa de Transparencia y Ética Empresarial',
          'Debida diligencia',
          'Auditorías internas',
          'Optimización de procesos',
        ],
        tags: ['SAGRILAFT', 'AUDITORÍA', 'CONFIANZA'],
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
