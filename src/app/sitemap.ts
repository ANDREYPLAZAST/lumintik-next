import type { MetadataRoute } from "next";
import { LOCALES, LOCALE_TAGS, toSegment } from "@/lib/locale";
import { services } from "@/data/services";
import { SITE_URL } from "@/lib/seo";

/** Locale-less paths that exist in every language. */
function routes(): string[] {
  return ["", ...services.map((s) => `/services/${s.slug}`)];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes().flatMap((path) =>
    LOCALES.map((locale) => ({
      url: `${SITE_URL}/${toSegment(locale)}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
      // Each entry advertises its translations, so crawlers pair them up.
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [LOCALE_TAGS[l], `${SITE_URL}/${toSegment(l)}${path}`]),
        ),
      },
    })),
  );
}
