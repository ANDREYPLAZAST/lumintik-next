export type Project = {
  title: string;
  desc: string;
  image: string;
  href: string;
  badge?: string;
  /** When true, render the image as a centered logo over `background` instead of cover. */
  logoMode?: boolean;
  background?: string;
};

export const featuredProject: Project = {
  title: "Samsung Imagiq",
  desc: "Headless e-commerce moving $200M COP / week with sub-second LCP.",
  image: "/projects/samsung/home-desktop.png",
  href: "https://imagiq.com",
  badge: "Live",
};

export const projects: Project[] = [
  {
    title: "EZDocuAI",
    desc: "Certified document translation in minutes. 7-microservice AI pipeline.",
    image: "/projects/ezdocu/home-desktop.png",
    href: "#work",
    badge: "Live",
  },
  {
    title: "Minnesota Entertainment",
    desc: "An 11B-view catalogue in one brand-first scroll. GSAP-driven.",
    image: "/projects/minnesota/hero-desktop.png",
    href: "#work",
    badge: "Live",
  },
  {
    title: "Claro",
    desc: "Enterprise portal for 2M+ users. Edge-first, multi-region telecom platform.",
    image: "/projects/claro/home.png",
    href: "https://www.claro.com.co/",
    badge: "Live",
  },
  {
    title: "Coca-Cola",
    desc: "Activation platform across 12 markets. Shipped in 6 weeks.",
    image: "/projects/coca/home.png",
    href: "https://www.coca-cola.com/",
    badge: "Live",
  },
  {
    title: "Attosound",
    desc: "AI-driven audio product. Microservice gateway and event-bus for real-time streaming.",
    image: "/projects/atto/home.png",
    href: "#work",
  },
  {
    title: "EZMig",
    desc: "SaaS for immigration attorneys. USCIS forms in minutes with LLM streaming (NestJS + Anthropic).",
    image: "/projects/ezmig/home.png",
    href: "#work",
  },
  {
    title: "LensPR",
    desc: "B2B platform for PR agencies: from landing page to a custom client-management dashboard.",
    image: "/projects/lenspr/home.png",
    href: "#work",
  },
  {
    title: "Piebald Capital",
    desc: "Boutique investment bank — Shadow Banking, SPACs across Mexico, USA and Spain.",
    image: "/projects/piebald/hero.png",
    href: "https://www.piebaldcapital.com/",
    badge: "Live",
  },
];
