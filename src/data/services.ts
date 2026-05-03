export type Service = {
  title: string;
  description: string;
  videoSrc: string;
  /** Tailwind classes describing column span on desktop and mobile borders. */
  span: string;
};

export const services: Service[] = [
  {
    title: "Product Development",
    description:
      "Production-ready MVPs in 8–12 weeks. Stable architecture, agile design, validated metrics before launch.",
    videoSrc:
      "https://videos.pexels.com/video-files/3209828/3209828-hd_1280_720_25fps.mp4",
    span:
      "col-end-[span_1] col-start-[span_1] border-r-0 border-b md:col-end-[span_4] md:col-start-[span_4] md:border-r",
  },
  {
    title: "UX/UI & Design Engineering",
    description:
      "Visual systems and product design that ship. Senior designers paired with engineers from day one.",
    videoSrc:
      "https://videos.pexels.com/video-files/3129957/3129957-hd_1280_720_30fps.mp4",
    span:
      "col-end-[span_1] col-start-[span_1] border-r-0 border-b md:col-end-[span_8] md:col-start-[span_8] md:border-r",
  },
  {
    title: "Web Engineering",
    description:
      "Headless commerce, SaaS dashboards and high-traffic platforms on Next.js, NestJS and the edge.",
    videoSrc:
      "https://videos.pexels.com/video-files/2278095/2278095-hd_1280_720_30fps.mp4",
    span:
      "col-end-[span_1] col-start-[span_1] border-r-0 border-b md:col-end-[span_4] md:col-start-[span_4] md:border-r",
  },
  {
    title: "Applied AI",
    description:
      "OCR, LLM pipelines and human-in-the-loop products. Built for accuracy, not for the demo.",
    videoSrc:
      "https://videos.pexels.com/video-files/6963944/6963944-hd_1280_720_30fps.mp4",
    span:
      "col-end-[span_1] col-start-[span_1] border-r-0 border-b md:col-end-[span_5] md:col-start-[span_5] md:border-r",
  },
  {
    title: "Performance & SEO",
    description:
      "Core Web Vitals in the green. Hybrid rendering, structured data, and observability that catches regressions in production.",
    videoSrc:
      "https://videos.pexels.com/video-files/3045163/3045163-hd_1280_720_25fps.mp4",
    span:
      "col-end-[span_1] col-start-[span_1] border-r-0 border-b md:col-end-[span_3] md:col-start-[span_3] md:border-r",
  },
  {
    title: "Brand & Motion",
    description:
      "Brand-first sites with measured GSAP animations — narrative that matches the catalogue.",
    videoSrc:
      "https://videos.pexels.com/video-files/4884234/4884234-hd_1280_720_25fps.mp4",
    span:
      "col-end-[span_1] col-start-[span_1] border-r-0 border-b md:col-end-[span_7] md:col-start-[span_7] md:border-b-0 md:border-r",
  },
  {
    title: "Platform & Infra",
    description:
      "Microservices, edge-first deploys and multi-region. Built to scale without rewrites.",
    videoSrc:
      "https://videos.pexels.com/video-files/3129671/3129671-hd_1280_720_30fps.mp4",
    span:
      "col-end-[span_4] col-start-[span_4] border-r md:col-end-[span_5] md:col-start-[span_5]",
  },
];
