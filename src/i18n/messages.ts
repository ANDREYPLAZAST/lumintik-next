import type { Locale } from "@/lib/locale";

/** Section labels shared by every service detail page. */
export type DetailChrome = {
  back: string;
  overview: string;
  capabilities: string;
  process: string;
  deliverables: string;
  next: string;
  cta: string;
};

export type Messages = {
  seo: {
    home: { title: string; description: string };
    service: { titleTemplate: string };
  };
  detail: DetailChrome;
  nav: {
    work: string;
    approach: string;
    services: string;
    news: string;
    about: string;
    home: string;
    join: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    titleParts: string[];
    titleAccent: string;
    titleAccentRotations: string[];
    description: {
      lead: string;
      matters: string;
      buildingWith: string;
      and: string;
    };
    startProject: string;
    howWeWork: string;
  };
  buildingFor: {
    title: string;
    titleAccent: string;
    aria: string;
  };
  tape: string[];
  services: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    items: {
      productDevelopment: { title: string; desc: string };
      uxui: { title: string; desc: string };
      webEngineering: { title: string; desc: string };
      appliedAI: { title: string; desc: string };
      performanceSEO: { title: string; desc: string };
      brandMotion: { title: string; desc: string };
      platformInfra: { title: string; desc: string };
    };
  };
  projects: {
    marquee: string[];
    cards: Record<
      | "samsung"
      | "ezdocu"
      | "minnesota"
      | "claro"
      | "coca"
      | "atto"
      | "ezmig"
      | "lenspr"
      | "piebald"
      | "accesify"
      | "fridoom"
      | "reco"
      | "relatos",
      { title: string; desc: string }
    >;
    badge: { live: string };
  };
  whyWork: {
    eyebrow: string;
    headline: { lead: string; muted: string; tail: string };
    stats: { value: number; suffix: string; label: string }[];
  };
  footer: {
    cta: { lead: string; accent: string };
    tagline: string;
    sitemap: string;
    elsewhere: string;
    line: string;
    rights: string;
  };
  mobileMenu: {
    startProject: string;
    joinUs: string;
  };
  contactForm: {
    title: string;
    subtitle: string;
    name: string;
    service: string;
    serviceSelect: string;
    email: string;
    phone: string;
    company: string;
    role: string;
    message: string;
    attachment: string;
    terms: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    errorRequired: string;
    errorEmail: string;
    errorFile: string;
  };
};

const en: Messages = {
  seo: {
    home: {
      title: "Lumintik SAS — Software studio that builds inevitable products",
      description:
        "Lumintik SAS is a software engineering studio for companies that care about craft. Headless commerce, applied AI, web engineering and design systems for Samsung, Claro, Coca-Cola, EZDocuAI and more.",
    },
    service: { titleTemplate: "%s — Services" },
  },
  detail: {
    back: "All services",
    overview: "Overview",
    capabilities: "What it covers",
    process: "How we work",
    deliverables: "What you get",
    next: "Next service",
    cta: "Start a project",
  },
  nav: {
    work: "Work",
    approach: "Approach",
    services: "Services",
    news: "News",
    about: "About",
    home: "Home",
    join: "Join",
    contact: "Contact",
  },
  hero: {
    eyebrow: "Software studio · 2026",
    titleParts: ["We", "build", "software", "that", "feels"],
    titleAccent: "intuitive.",
    titleAccentRotations: ["intuitive.", "scalable.", "indispensable."],
    description: {
      lead: "Software engineering studio for companies that understand the difference between a product that works and one that",
      matters: "matters",
      buildingWith: "Currently building with",
      and: "and",
    },
    startProject: "Start a project",
    howWeWork: "How we work",
  },
  buildingFor: {
    title: "Who we",
    titleAccent: "build for.",
    aria: "Companies we build for",
  },
  tape: [
    "Software that feels inevitable",
    "Headless commerce at the edge",
    "Applied AI, shipped to production",
    "Design and engineering, in the same room",
    "Built by engineers, not by templates",
  ],
  services: {
    eyebrow: "Our services",
    title: "Our",
    titleAccent: "services.",
    items: {
      productDevelopment: {
        title: "Product Development",
        desc: "From discovery to ship — software products that earn trust.",
      },
      uxui: {
        title: "UX / UI",
        desc: "Interfaces designed for clarity, scale and conversion.",
      },
      webEngineering: {
        title: "Web Engineering",
        desc: "Performant, accessible web at the edge — sub-second LCP by default.",
      },
      appliedAI: {
        title: "Applied AI",
        desc: "Practical AI pipelines — RAG, agents, streaming LLM workflows.",
      },
      performanceSEO: {
        title: "Performance & SEO",
        desc: "Core Web Vitals, technical SEO, and infra-level wins.",
      },
      brandMotion: {
        title: "Brand & Motion",
        desc: "Identity systems, motion design and storytelling that scales.",
      },
      platformInfra: {
        title: "Platform & Infra",
        desc: "Multi-region, observability-first platforms ready for prime time.",
      },
    },
  },
  projects: {
    marquee: ["SHOW CASE", "PROJECTS", "CASE STUDIES", "WORKS"],
    cards: {
      samsung: {
        title: "Samsung Imagiq",
        desc: "Headless e-commerce moving $200M COP / week with sub-second LCP.",
      },
      ezdocu: {
        title: "EZDocuAI",
        desc: "Certified document translation in minutes. 7-microservice AI pipeline.",
      },
      minnesota: {
        title: "Minnesota Entertainment",
        desc: "An 11B-view catalogue in one brand-first scroll. GSAP-driven.",
      },
      claro: {
        title: "Claro",
        desc: "Enterprise portal for 2M+ users. Edge-first, multi-region telecom platform.",
      },
      coca: {
        title: "Coca-Cola",
        desc: "Activation platform across 12 markets. Shipped in 6 weeks.",
      },
      atto: {
        title: "Attosound",
        desc: "AI-driven audio product. Microservice gateway and event-bus for real-time streaming.",
      },
      ezmig: {
        title: "EZMig",
        desc: "SaaS for immigration attorneys. USCIS forms in minutes with LLM streaming.",
      },
      lenspr: {
        title: "LensPR",
        desc: "B2B platform for PR agencies: from landing page to a custom client-management dashboard.",
      },
      piebald: {
        title: "Piebald Capital",
        desc: "Boutique investment bank — Shadow Banking, SPACs across Mexico, USA and Spain.",
      },
      accesify: {
        title: "Accesify",
        desc: "E-commerce for premium phone accessories — iPhone & Samsung cases, screen protectors and more.",
      },
      fridoom: {
        title: "Fridoom",
        desc: "Personal finance brand with 50,000+ followers across social media — practical financial education for the next generation.",
      },
      reco: {
        title: "RECO",
        desc: "Foreign-trade ecosystem pairing 30 years of customs expertise with AI — platform, products and support in one place.",
      },
      relatos: {
        title: "Relatos por Venezuela",
        desc: "Short films turned into humanitarian aid: donate from US$5, unlock the collection, fund earthquake relief.",
      },
    },
    badge: { live: "Live" },
  },
  whyWork: {
    eyebrow: "Why work with us?",
    headline: {
      lead: "It's not just about shipping software. It's about ",
      muted: "engineering products that earn trust",
      tail: " and outlast trends.",
    },
    stats: [
      { value: 100, suffix: "%", label: "Work completed in house" },
      { value: 2, suffix: "+", label: "Years crafting digital products" },
      { value: 15, suffix: "+", label: "Happy clients across 3 continents" },
      { value: 12, suffix: "+", label: "Industries shipped — fintech, AI, telecom, e-commerce" },
    ],
  },
  footer: {
    cta: { lead: "Let's build something", accent: "inevitable." },
    tagline: "Software engineering studio for companies that care about craft.",
    sitemap: "Sitemap",
    elsewhere: "Elsewhere",
    line: "Lumintik SAS · Software studio · 2026",
    rights: "",
  },
  mobileMenu: {
    startProject: "Start a project",
    joinUs: "Join us",
  },
  contactForm: {
    title: "Get a Quote",
    subtitle: "Complete the form and discover how we can help you achieve your growth goals with custom solutions.",
    name: "Name *",
    service: "Service/Solution of interest",
    serviceSelect: "Select a product",
    email: "Email address *",
    phone: "Phone",
    company: "Company name",
    role: "Your role",
    message: "Tell us a bit about your company",
    attachment: "Attach file (PDF, Image, etc.)",
    terms: "By submitting you agree to our privacy policy and terms and conditions",
    submit: "Send",
    sending: "Sending…",
    success: "Thanks! Your message is on its way — we'll be in touch shortly.",
    error: "Something went wrong sending your message. Please try again or email us directly.",
    errorRequired: "Please complete the required fields.",
    errorEmail: "Please enter a valid email address.",
    errorFile: "The attachment is too large (max 8 MB).",
  },
};

const es: Messages = {
  seo: {
    home: {
      title: "Lumintik SAS — Estudio de software que construye productos inevitables",
      description:
        "Lumintik SAS es un estudio de ingeniería de software para empresas que cuidan el detalle. Headless commerce, IA aplicada, ingeniería web y design systems para Samsung, Claro, Coca-Cola, EZDocuAI y más.",
    },
    service: { titleTemplate: "%s — Servicios" },
  },
  detail: {
    back: "Todos los servicios",
    overview: "Resumen",
    capabilities: "Qué incluye",
    process: "Cómo trabajamos",
    deliverables: "Qué recibes",
    next: "Siguiente servicio",
    cta: "Empezar un proyecto",
  },
  nav: {
    work: "Proyectos",
    approach: "Enfoque",
    services: "Servicios",
    news: "Novedades",
    about: "Nosotros",
    home: "Inicio",
    join: "Únete",
    contact: "Contacto",
  },
  hero: {
    eyebrow: "Estudio de software · 2026",
    titleParts: ["Creamos", "software", "que", "se", "siente"],
    titleAccent: "intuitivo.",
    titleAccentRotations: ["intuitivo.", "escalable.", "indispensable."],
    description: {
      lead: "Estudio de ingeniería de software para empresas que entienden la diferencia entre un producto que funciona y uno que",
      matters: "importa",
      buildingWith: "Actualmente construyendo con",
      and: "y",
    },
    startProject: "Iniciar un proyecto",
    howWeWork: "Cómo trabajamos",
  },
  buildingFor: {
    title: "Para quién",
    titleAccent: "construimos.",
    aria: "Empresas para las que construimos",
  },
  tape: [
    "Software que se siente inevitable",
    "Commerce headless en el edge",
    "IA aplicada, lista para producción",
    "Diseño e ingeniería, en la misma sala",
    "Hecho por ingenieros, no por plantillas",
  ],
  services: {
    eyebrow: "Nuestros servicios",
    title: "Nuestros",
    titleAccent: "servicios.",
    items: {
      productDevelopment: {
        title: "Desarrollo de Producto",
        desc: "De la idea al lanzamiento — productos de software que se ganan la confianza.",
      },
      uxui: {
        title: "UX / UI",
        desc: "Interfaces diseñadas para claridad, escala y conversión.",
      },
      webEngineering: {
        title: "Ingeniería Web",
        desc: "Web rápida y accesible en el edge — LCP sub-segundo por defecto.",
      },
      appliedAI: {
        title: "IA Aplicada",
        desc: "Pipelines de IA prácticos — RAG, agentes y flujos LLM en streaming.",
      },
      performanceSEO: {
        title: "Performance y SEO",
        desc: "Core Web Vitals, SEO técnico y mejoras a nivel de infraestructura.",
      },
      brandMotion: {
        title: "Marca y Motion",
        desc: "Sistemas de identidad, motion design y narrativa que escala.",
      },
      platformInfra: {
        title: "Plataforma e Infraestructura",
        desc: "Plataformas multi-región con observabilidad lista para producción.",
      },
    },
  },
  projects: {
    marquee: ["MOSTRARIO", "PROYECTOS", "CASOS DE ESTUDIO", "TRABAJOS"],
    cards: {
      samsung: {
        title: "Samsung Imagiq",
        desc: "E-commerce headless moviendo $200M COP / semana con LCP sub-segundo.",
      },
      ezdocu: {
        title: "EZDocuAI",
        desc: "Traducción de documentos certificada en minutos. Pipeline de IA con 7 microservicios.",
      },
      minnesota: {
        title: "Minnesota Entertainment",
        desc: "Un catálogo de 11B vistas en un scroll brand-first. Impulsado por GSAP.",
      },
      claro: {
        title: "Claro",
        desc: "Portal corporativo para 2M+ usuarios. Plataforma de telco edge-first y multi-región.",
      },
      coca: {
        title: "Coca-Cola",
        desc: "Plataforma de activación en 12 mercados. Lanzada en 6 semanas.",
      },
      atto: {
        title: "Attosound",
        desc: "Producto de audio impulsado por IA. Gateway de microservicios y event-bus para streaming en tiempo real.",
      },
      ezmig: {
        title: "EZMig",
        desc: "SaaS para abogados de inmigración. Formularios USCIS en minutos con LLM en streaming.",
      },
      lenspr: {
        title: "LensPR",
        desc: "Plataforma B2B para agencias de PR: desde la landing hasta un dashboard de gestión a medida.",
      },
      piebald: {
        title: "Piebald Capital",
        desc: "Banca de inversión boutique — Shadow Banking, SPACs en México, EE.UU. y España.",
      },
      accesify: {
        title: "Accesify",
        desc: "E-commerce de accesorios premium para móviles — fundas para iPhone y Samsung, protectores de pantalla y más.",
      },
      fridoom: {
        title: "Fridoom",
        desc: "Marca de finanzas personales con más de 50.000 seguidores en redes sociales — educación financiera práctica para nuevas generaciones.",
      },
      reco: {
        title: "RECO",
        desc: "Ecosistema de comercio exterior que une 30 años de experiencia aduanal con IA — plataforma, productos y soporte en un solo lugar.",
      },
      relatos: {
        title: "Relatos por Venezuela",
        desc: "Cortometrajes convertidos en ayuda humanitaria: dona desde US$5, accede a la colección y financia la asistencia tras el terremoto.",
      },
    },
    badge: { live: "En vivo" },
  },
  whyWork: {
    eyebrow: "¿Por qué trabajar con nosotros?",
    headline: {
      lead: "No se trata solo de lanzar software. Se trata de ",
      muted: "ingeniería de productos que se ganan la confianza",
      tail: " y trascienden las tendencias.",
    },
    stats: [
      { value: 100, suffix: "%", label: "Trabajo realizado in-house" },
      { value: 2, suffix: "+", label: "Años creando productos digitales" },
      { value: 15, suffix: "+", label: "Clientes felices en 3 continentes" },
      { value: 12, suffix: "+", label: "Industrias atendidas — fintech, IA, telco, e-commerce" },
    ],
  },
  footer: {
    cta: { lead: "Construyamos algo", accent: "inevitable." },
    tagline: "Estudio de ingeniería de software para empresas que valoran el oficio.",
    sitemap: "Mapa del sitio",
    elsewhere: "En otros lugares",
    line: "Lumintik SAS · Estudio de software · 2026",
    rights: "",
  },
  mobileMenu: {
    startProject: "Iniciar un proyecto",
    joinUs: "Únete",
  },
  contactForm: {
    title: "Cotización",
    subtitle: "Completa el formulario de cotización y descubre cómo podemos ayudarte a alcanzar tus objetivos de crecimiento con soluciones personalizadas.",
    name: "Nombre *",
    service: "Servicio/Solución de interés",
    serviceSelect: "Selecciona un producto",
    email: "Correo electrónico *",
    phone: "Teléfono",
    company: "Nombre de la empresa",
    role: "Tu cargo",
    message: "Cuéntanos un poco sobre tu empresa",
    attachment: "Adjuntar archivo (PDF, Imagen, etc.)",
    terms: "Al enviar aceptas la política de tratamiento de datos personales y los términos y condiciones",
    submit: "Enviar",
    sending: "Enviando…",
    success: "¡Gracias! Tu mensaje va en camino — te contactaremos muy pronto.",
    error: "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo o escríbenos directamente.",
    errorRequired: "Por favor completa los campos obligatorios.",
    errorEmail: "Por favor ingresa un correo electrónico válido.",
    errorFile: "El archivo adjunto es demasiado grande (máx. 8 MB).",
  },
};

export const messages: Record<Locale, Messages> = { EN: en, ES: es };
