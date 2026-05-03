import type { MetadataRoute } from "next";

const SITE_URL = "https://lumintik.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const sections = ["", "#work", "#approach", "#services", "#news", "#about", "#contact"];

  return sections.map((hash) => ({
    url: `${SITE_URL}/${hash}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: hash === "" ? 1 : 0.7,
  }));
}
