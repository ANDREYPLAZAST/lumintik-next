import type { MetadataRoute } from "next";

const SITE_URL = "https://lumintik.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // Single-page site: only the homepage is a real, indexable URL.
  // (URL fragments like /#work are not separate pages and are ignored by crawlers.)
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
