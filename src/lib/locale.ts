export const LOCALES = ["EN", "ES"] as const;
export type Locale = (typeof LOCALES)[number];

const NAV_TO_LOCALE: Record<string, Locale> = {
  en: "EN",
  es: "ES",
};

export function detectLocaleFromNavigator(): Locale {
  if (typeof navigator === "undefined") return "EN";
  const langs = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const raw of langs) {
    const code = raw?.toLowerCase().split("-")[0];
    if (code && code in NAV_TO_LOCALE) return NAV_TO_LOCALE[code];
  }
  return "EN";
}

const STORAGE_KEY = "lumintik:locale";

export function readStoredLocale(): Locale | null {
  if (typeof window === "undefined") return null;
  const v = window.localStorage.getItem(STORAGE_KEY);
  return v && (LOCALES as readonly string[]).includes(v) ? (v as Locale) : null;
}

export function writeStoredLocale(locale: Locale) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, locale);
}
