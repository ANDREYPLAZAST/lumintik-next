import type { Metadata } from "next";
import { LOCALES, LOCALE_TAGS, toSegment, type Locale } from "@/lib/locale";

export const SITE_NAME = "Lumintik SAS";
export const SITE_URL = "https://lumintik.com";

/**
 * Builds `canonical` + `hreflang` for one page in one language.
 *
 * @param locale the language being rendered
 * @param path   the route *without* the locale segment: "" for the home page,
 *               "/work/reco" for a case study.
 */
export function localizedAlternates(
  locale: Locale,
  path = "",
): NonNullable<Metadata["alternates"]> {
  const languages: Record<string, string> = {};
  for (const l of LOCALES) {
    languages[LOCALE_TAGS[l]] = `/${toSegment(l)}${path}`;
  }
  // Tells Google which version to serve when no language matches.
  languages["x-default"] = `/${toSegment("EN")}${path}`;

  return {
    canonical: `/${toSegment(locale)}${path}`,
    languages,
  };
}

/** Absolute URL for a localized path, for Open Graph and JSON-LD. */
export function absoluteUrl(locale: Locale, path = ""): string {
  return `${SITE_URL}/${toSegment(locale)}${path}`;
}
