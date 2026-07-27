import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  LOCALE_SEGMENT_LIST,
  STORAGE_KEY,
  detectLocaleFromHeader,
  fromSegment,
  toSegment,
} from "@/lib/locale";

/**
 * Sends locale-less URLs to a language. A returning visitor keeps the language
 * they picked (cookie); everyone else gets their browser's preference.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = LOCALE_SEGMENT_LIST.some(
    (seg) => pathname === `/${seg}` || pathname.startsWith(`/${seg}/`),
  );
  if (hasLocale) return;

  const stored = fromSegment(request.cookies.get(STORAGE_KEY)?.value ?? "");
  const locale = stored ?? detectLocaleFromHeader(request.headers.get("accept-language"));

  const url = request.nextUrl.clone();
  url.pathname = `/${toSegment(locale)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Everything except Next internals and the files that must stay at the root
  // (sitemap.xml, robots.txt, manifest, icons, /projects/* images).
  matcher: [
    "/((?!_next|api|.*\\..*|sitemap.xml|robots.txt|manifest.webmanifest).*)",
  ],
};
