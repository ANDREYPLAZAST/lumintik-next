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
  | "fridoom";

export type ProjectMeta = {
  key: ProjectKey;
  image: string;
  href: string;
  badge?: boolean;
  logoMode?: boolean;
  background?: string;
};

export const featuredProject: ProjectMeta = {
  key: "samsung",
  image: "/projects/samsung/home-desktop.png",
  href: "https://imagiq.com",
  badge: true,
};

export const projects: ProjectMeta[] = [
  { key: "ezdocu", image: "/projects/ezdocu/home-desktop.png", href: "#work", badge: true },
  { key: "minnesota", image: "/projects/minnesota/hero-desktop.png", href: "#work", badge: true },
  { key: "claro", image: "/projects/claro/home.png", href: "https://www.claro.com.co/", badge: true },
  { key: "coca", image: "/projects/coca/home.png", href: "https://www.coca-cola.com/", badge: true },
  { key: "atto", image: "/projects/atto/home.png", href: "#work" },
  { key: "ezmig", image: "/projects/ezmig/home.png", href: "#work" },
  { key: "lenspr", image: "/projects/lenspr/home.png", href: "#work" },
  { key: "piebald", image: "/projects/piebald/loaded.png", href: "https://www.piebaldcapital.com/", badge: true },
  {
    key: "accesify",
    image: "/projects/accesify/home.png",
    href: "https://www.accesify.com/",
    badge: true,
  },
  {
    key: "fridoom",
    image: "/projects/fridoom/home.png",
    href: "https://fridoom.com/",
    badge: true,
  },
];
