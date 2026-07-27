export type ProjectKey =
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
  | "relatos";

export type ProjectMeta = {
  key: ProjectKey;
  image: string;
  /** The live site. Used as the outbound link on the case-study page. */
  href: string;
  badge?: boolean;
  /**
   * Case-study URL segment. Projects without a slug have no case study — their
   * card links straight to `href` instead (client-confidential work).
   */
  slug?: string;
  /** Extra screenshots shown in the case-study gallery, after `image`. */
  gallery?: string[];
};

export const featuredProject: ProjectMeta = {
  key: "samsung",
  image:
    "https://res.cloudinary.com/dukysmhpu/image/upload/f_auto,q_auto:good,w_1920,c_limit/v1777949341/Disen%CC%83o_sin_ti%CC%81tulo_hyawmt.jpg",
  href: "https://imagiq.com",
  badge: true,
  slug: "samsung-imagiq",
  gallery: [
    "/projects/samsung/home-desktop.png",
    "/projects/samsung/plp-desktop.png",
    "/projects/samsung/pdp-desktop.png",
    "/projects/samsung/dashboard-home.png",
    "/projects/samsung/dashboard-orders.png",
    "/projects/samsung/home-mobile.png",
    "/projects/samsung/pdp-mobile.png",
    "/projects/samsung/cart-mobile.png",
  ],
};

export const projects: ProjectMeta[] = [
  {
    key: "ezdocu",
    image: "/projects/ezdocu/home-desktop.png",
    href: "#work",
    badge: true,
    slug: "ezdocuai",
    gallery: [
      "/projects/ezdocu/how-desktop.png",
      "/projects/ezdocu/features-desktop.png",
      "/projects/ezdocu/pricing-desktop.png",
      "/projects/ezdocu/home-mobile.png",
      "/projects/ezdocu/editor-mobile.png",
    ],
  },
  {
    key: "minnesota",
    image: "/projects/minnesota/hero-desktop.png",
    href: "https://www.minnesotaent.net/",
    badge: true,
    slug: "minnesota-entertainment",
    gallery: [
      "/projects/minnesota/films-desktop.png",
      "/projects/minnesota/management-desktop.png",
      "/projects/minnesota/records-desktop.png",
      "/projects/minnesota/hero-mobile.png",
      "/projects/minnesota/films-mobile.png",
    ],
  },
  // Claro and Coca-Cola stay card-only: no case study, straight to the live site.
  { key: "claro", image: "/projects/claro/home.png", href: "https://www.claro.com.co/", badge: true },
  { key: "coca", image: "/projects/coca/home.png", href: "https://www.coca-cola.com/", badge: true },
  { key: "atto", image: "/projects/atto/home.png", href: "#work", slug: "attosound" },
  { key: "ezmig", image: "/projects/ezmig/home.png", href: "#work", slug: "ezmig" },
  {
    key: "lenspr",
    image: "/projects/lenspr/home.png",
    href: "https://www.lenspr.com/es",
    slug: "lenspr",
  },
  {
    key: "piebald",
    image: "/projects/piebald/loaded.png",
    href: "https://www.piebaldcapital.com/",
    badge: true,
    slug: "piebald-capital",
    gallery: ["/projects/piebald/hero.png", "/projects/piebald/secondary.png"],
  },
  {
    key: "accesify",
    image: "/projects/accesify/home.png",
    href: "https://www.accesify.com/",
    badge: true,
    slug: "accesify",
  },
  {
    key: "fridoom",
    image: "/projects/fridoom/home.png",
    href: "https://fridoom.com/",
    badge: true,
    slug: "fridoom",
  },
  {
    key: "reco",
    image: "/projects/reco/home.png",
    href: "https://www.reco.com.mx/",
    badge: true,
    slug: "reco",
    gallery: ["/projects/reco/home-desktop.jpg", "/projects/reco/home-mobile.png"],
  },
  {
    key: "relatos",
    image: "/projects/relatos/home.png",
    href: "https://www.relatosporvenezuela.org/",
    badge: true,
    slug: "relatos-por-venezuela",
    gallery: [
      "/projects/relatos/home-desktop.jpg",
      "/projects/relatos/home-mobile.png",
    ],
  },
];

/** Every project that has a case-study page, featured one included. */
export const allProjects: ProjectMeta[] = [featuredProject, ...projects];

export const caseStudies: ProjectMeta[] = allProjects.filter((p) => p.slug);

export function findProjectBySlug(slug: string): ProjectMeta | undefined {
  return caseStudies.find((p) => p.slug === slug);
}
