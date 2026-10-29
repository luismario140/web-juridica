import professionalOfficePortrait from '../assets/images/recurso1.webp'
import professionalCorporatePortrait from '../assets/images/recurso2.webp'
import legalMiningImage from '../assets/images/recurso7.jpeg'
import corporateStrategyImage from '../assets/images/recurso8.jpeg'
import complianceImage from '../assets/images/recurso9.jpeg'

// Contenido editorial compartido por las páginas del sitio.
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
      'Asesoría jurídica y estratégica para titulares mineros, empresas y organizaciones que buscan gestionar sus proyectos con claridad normativa y una lectura cercana del territorio.',
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
  about: {
    eyebrow: 'Quiénes somos',
    title: 'Un aliado que entiende la ley, el negocio y la gente del territorio.',
    description:
      'Integramos asesoría minero-ambiental, estrategia corporativa y compliance para acompañar decisiones jurídicas y empresariales a lo largo de cada proyecto.',
    secondParagraph:
      'Jhon James Hurtado Murillo es abogado experto en derecho minero-ambiental, con estudios en estrategia e innovación legal, responsabilidad del Estado, compliance y derecho de los negocios.',
    visualNote: 'Territorio - Legalidad - Futuro',
    principles: [
      {
        id: 'eficacia',
        title: 'Eficacia',
        description: 'Orientar cada gestión hacia objetivos claros y resultados pertinentes para el proyecto.',
      },
      {
        id: 'eficiencia',
        title: 'Eficiencia',
        description: 'Aprovechar de forma responsable el tiempo, los recursos y los esfuerzos disponibles.',
      },
      {
        id: 'respeto',
        title: 'Respeto',
        description: 'Promover relaciones basadas en la escucha, el diálogo y la consideración por cada persona y comunidad.',
      },
      {
        id: 'responsabilidad',
        title: 'Responsabilidad',
        description: 'Actuar con transparencia y atender con rigor los compromisos y alcances acordados.',
      },
    ],
  },
  services: {
    eyebrow: 'Líneas de servicio',
    title: 'Tres frentes, una sola estrategia.',
    description:
      'Explore las áreas de asesoría y sus principales alcances. El acompañamiento se define según las necesidades, los antecedentes y los objetivos de cada proyecto.',
    action: 'Hablar sobre este servicio',
    items: [
      {
        id: 'legal-minero',
        title: 'Legal minero-ambiental',
        image: legalMiningImage,
        summary: 'Formalización, permisos y representación especializada.',
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
        visualLabel: 'Seguridad jurídica para su operación',
      },
      {
        id: 'estrategia',
        title: 'Estrategia corporativa',
        image: corporateStrategyImage,
        summary: 'Estructura, negociación y planificación empresarial.',
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
        visualLabel: 'Estructura y decisiones de negocio',
      },
      {
        id: 'compliance',
        title: 'Compliance',
        image: complianceImage,
        summary: 'Prevención de riesgos y fortalecimiento de controles.',
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
        visualLabel: 'Prevención, integridad y control',
      },
    ],
  },
  methodology: {
    eyebrow: 'Cómo trabajamos',
    title: 'Del diagnóstico a la operación responsable.',
    description:
      'Acordamos el alcance, las prioridades y la forma de seguimiento para que conozca los avances y las decisiones de cada etapa.',
    steps: [
      {
        title: 'Diagnóstico',
        description: 'Revisamos los antecedentes disponibles y entendemos el contexto jurídico, técnico y ambiental del proyecto.',
      },
      {
        title: 'Estrategia',
        description: 'Priorizamos acciones, plazos y riesgos de acuerdo con los objetivos y el alcance acordado.',
      },
      {
        title: 'Gestión',
        description: 'Adelantamos las gestiones y la representación ante las autoridades que correspondan al caso.',
      },
      {
        title: 'Acompañamiento',
        description: 'Revisamos avances y compromisos, y ajustamos la ruta cuando cambian las condiciones del proyecto.',
      },
    ],
  },
  differentiator: {
    eyebrow: 'Nuestro diferencial',
    title: 'Conocemos el territorio porque trabajamos en él.',
    description:
      'Integramos derecho minero-ambiental, estrategia corporativa y compliance con una lectura cercana del contexto social, ambiental y productivo del Chocó.',
  },
  audience: {
    eyebrow: 'A quién acompañamos',
    title: 'Asesoría para organizaciones con retos mineros y regulatorios.',
    items: [
      {
        title: 'TITULARES Y OPERADORES MINEROS',
        description: 'Acompañamiento para proyectos en exploración, desarrollo u operación, según su situación jurídica y ambiental.',
      },
      {
        title: 'GREMIOS Y ASOCIACIONES',
        description: 'Orientación jurídica y minero-ambiental para organizaciones que representan intereses colectivos.',
      },
      {
        title: 'ENTIDADES Y EMPRESAS',
        description: 'Apoyo a entidades y compañías con operaciones reguladas o necesidades de gestión corporativa y compliance.',
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Resolvemos sus dudas antes de empezar.',
    items: [
      {
        question: 'Mi actividad minera aún es informal. ¿Pueden orientarme?',
        answer: 'Podemos revisar la situación y la documentación disponible para identificar alternativas de formalización y las gestiones que podrían corresponder. La ruta depende de las condiciones de cada caso.',
      },
      {
        question: '¿Trabajan solo con grandes empresas?',
        answer: 'No. Atendemos consultas de titulares y operadores mineros, empresas, gremios y asociaciones. El alcance se acuerda de acuerdo con las necesidades de cada organización.',
      },
      {
        question: '¿Qué pasa en la primera consulta estratégica?',
        answer: 'Conversamos sobre sus objetivos, revisamos la información que tenga disponible y delimitamos los temas que requieren análisis. Luego podemos acordar el alcance de una asesoría.',
      },
      {
        question: '¿Cómo manejan las relaciones con las comunidades?',
        answer: 'Consideramos el contexto social y la comunicación con las comunidades como parte del análisis del proyecto, con respeto por las personas y las particularidades del territorio.',
      },
    ],
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Conversemos sobre su proyecto.',
    description:
      'Comparta el motivo de su consulta y prepare el mensaje para WhatsApp. Antes de enviarlo, podrá revisar la información desde su cuenta.',
    phoneLabel: 'WhatsApp / Teléfono',
    phone: '+57 313 781 9046',
    emailLabel: 'Correo electrónico',
    email: 'jhonjameshurtadobussines@gmail.com',
    locationLabel: 'Ubicación',
    location: 'Chocó, Colombia',
    form: {
      name: 'Nombre completo',
      phone: 'Teléfono / WhatsApp',
      email: 'Correo electrónico',
      service: '¿En qué podemos ayudarte?',   
      message: 'Mensaje',
      submit: 'Continuar por WhatsApp',
      servicePlaceholder: 'Seleccione un tema',
      messagePlaceholder: 'Describa brevemente su consulta',
      submissionNotice:
        'Se abrirá WhatsApp con el mensaje preparado. Revíselo y pulse Enviar; el sitio no lo envía automáticamente.',
      whatsappReady: 'WhatsApp se abrió con el mensaje preparado. Revíselo y pulse Enviar.',
      popupBlocked: 'El navegador bloqueó la ventana. Use el enlace que aparece abajo para abrir WhatsApp.',
      openWhatsApp: 'Abrir chat de WhatsApp',
      missingService: 'Seleccione el servicio sobre el que desea consultar.',
      privacyNote: 'La información que incluya se compartirá con WhatsApp cuando decida enviar el mensaje.',
    },
  },
}
