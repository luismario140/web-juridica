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
    { value: '+10', label: 'años en consultoría minero-ambiental' },
    { value: '3', label: 'frentes integrados en una estrategia' },
    { value: '100%', label: 'presencia en campo y territorio' },
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
    title: 'Del diagnóstico a la operación responsable.',
    description:
      'Un proceso claro, con un solo equipo a su lado de principio a fin. Usted sabe siempre en qué punto está su proyecto.',
    steps: [
      {
        title: 'Diagnóstico',
        description: 'Escuchamos su caso y evaluamos la situación legal, técnica y ambiental de su proyecto.',
      },
      {
        title: 'Estrategia',
        description: 'Definimos una ruta clara, con prioridades, tiempos y riesgos identificados.',
      },
      {
        title: 'Gestión',
        description: 'Radicamos, tramitamos y le representamos ante las autoridades competentes.',
      },
      {
        title: 'Acompañamiento',
        description: 'Seguimos a su lado en la operación, el cumplimiento y la relación con el entorno.',
      },
    ],
  },
  differentiator: {
    eyebrow: 'Nuestro diferencial',
    title: 'Conocemos el territorio porque trabajamos en él.',
    description:
      'Derecho minero-ambiental, estrategia corporativa, compliance y presencia en campo. Escuchamos a las comunidades y a los mineros del Chocó para construir soluciones que funcionan en la realidad, no solo en el papel.',
  },
  audience: {
    eyebrow: 'A quién acompañamos',
    title: 'Si su operación está regulada, podemos ayudarle.',
    items: [
      {
        title: 'EMPRESAS MINERAS Y TITULARES',
        description: 'Operadores de proyectos extractivos, empresas junior y en exploración.',
      },
      {
        title: 'ORGANIZACIONES E INSTITUCIONES',
        description: 'Gremios, asociaciones, entes reguladores y descentralizados.',
      },
      {
        title: 'CORPORACIONES Y OPERADORES',
        description: 'Empresas con divisiones minero-ambientales y operaciones reguladas.',
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Resolvemos sus dudas antes de empezar.',
    items: [
      {
        question: 'Mi actividad minera aún es informal ¿Pueden ayudarme?',
        answer: 'Sí. Acompañamos la regularización de la actividad minera desde el diagnóstico inicial hasta la operación responsable, incluyendo la recuperación de las áreas intervenidas.',
      },
      {
        question: '¿Trabajan solo con grandes empresas?',
        answer: 'No. Acompañamos a titulares mineros, empresas junior y en exploración, gremios, asociaciones y corporaciones con divisiones minero-ambientales. Cada caso se atiende según su realidad.',
      },
      {
        question: '¿Qué pasa en la primera consulta estratégica?',
        answer: 'Escuchamos su situación, revisamos la documentación disponible y le explicamos con claridad los riesgos, las opciones y la ruta recomendada para su proyecto.',
      },
      {
        question: '¿Cómo manejan las relaciones con las comunidades?',
        answer: 'Integramos la relación con el entorno social en la estrategia desde el inicio, con respeto, diálogo y un enfoque de sostenibilidad que protege la operación y el territorio.',
      },
    ],
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Cuéntenos su situación. Le respondemos personalmente.',
    description:
      'Un especialista revisará su solicitud y le contactará para agendar una consulta estratégica. Sin compromiso y con total confidencialidad.',
    phoneLabel: 'WhatsApp / Teléfono',
    phone: '3137819046',
    emailLabel: 'Correo electrónico',
    email: 'jhonjameshurtadobussines@gmail.com',
    locationLabel: 'Ubicación',
    location: 'Chocó Colombia',
    form: {
      name: 'Nombre completo',
      phone: 'Teléfono / WhatsApp',
      email: 'Correo electrónico',
      service: '¿En qué podemos ayudarte?',
      message: 'Mensaje',
      submit: 'Validar formulario',
      servicePlaceholder: 'Selecciona un tema',
      messagePlaceholder: 'Cuéntenos brevemente su situación',
      submissionNotice:
        'Formulario de maqueta: no está conectado a un servicio de envío y no transmite tus datos.',
      notSent:
        'El formulario no está conectado; tus datos no se han enviado. Configura primero un canal oficial de recepción.',
      privacyNote: 'Sus datos se tratan de forma confidencial.',
    },
  },
}
