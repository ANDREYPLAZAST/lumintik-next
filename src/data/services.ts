import type { Messages } from "@/i18n/messages";

export type ServiceKey = keyof Messages["services"]["items"];

export type ServiceMeta = {
  key: ServiceKey;
  videoSrc: string;
  span: string;
};

export const services: ServiceMeta[] = [
  {
    key: "productDevelopment",
    videoSrc:
      "https://videos.pexels.com/video-files/3209828/3209828-hd_1280_720_25fps.mp4",
    span:
      "col-end-[span_1] col-start-[span_1] border-r-0 border-b md:col-end-[span_4] md:col-start-[span_4] md:border-r",
  },
  {
    key: "uxui",
    videoSrc:
      "https://videos.pexels.com/video-files/3129957/3129957-hd_1280_720_30fps.mp4",
    span:
      "col-end-[span_1] col-start-[span_1] border-r-0 border-b md:col-end-[span_8] md:col-start-[span_8] md:border-r",
  },
  {
    key: "webEngineering",
    videoSrc:
      "https://videos.pexels.com/video-files/2278095/2278095-hd_1280_720_30fps.mp4",
    span:
      "col-end-[span_1] col-start-[span_1] border-r-0 border-b md:col-end-[span_4] md:col-start-[span_4] md:border-r",
  },
  {
    key: "appliedAI",
    videoSrc:
      "https://videos.pexels.com/video-files/6963944/6963944-hd_1280_720_30fps.mp4",
    span:
      "col-end-[span_1] col-start-[span_1] border-r-0 border-b md:col-end-[span_5] md:col-start-[span_5] md:border-r",
  },
  {
    key: "performanceSEO",
    videoSrc:
      "https://videos.pexels.com/video-files/3045163/3045163-hd_1280_720_25fps.mp4",
    span:
      "col-end-[span_1] col-start-[span_1] border-r-0 border-b md:col-end-[span_3] md:col-start-[span_3] md:border-r",
  },
  {
    key: "brandMotion",
    videoSrc:
      "https://videos.pexels.com/video-files/4884234/4884234-hd_1280_720_25fps.mp4",
    span:
      "col-end-[span_1] col-start-[span_1] border-r-0 border-b md:col-end-[span_7] md:col-start-[span_7] md:border-b-0 md:border-r",
  },
  {
    key: "platformInfra",
    videoSrc:
      "https://videos.pexels.com/video-files/3129671/3129671-hd_1280_720_30fps.mp4",
    span:
      "col-end-[span_4] col-start-[span_4] border-r md:col-end-[span_5] md:col-start-[span_5]",
  },
];
