"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import type { Locale } from "@/lib/locale";

const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;

/**
 * Initialised here, in the application bundle, rather than in
 * `instrumentation-client.ts`: Next compiles that file as its own entry point,
 * so it ships a second copy of posthog-js. `init()` would run on one instance
 * while every `capture()` in the app ran on the other — which silently sent
 * nothing at all.
 */
if (typeof window !== "undefined" && key && !posthog.__loaded) {
  try {
    posthog.init(key, {
      api_host:
        process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
      // Pins autocapture behaviour so a posthog-js upgrade can't silently
      // change what gets tracked.
      defaults: "2026-06-25",
      // That preset resolves capture_pageview to "history_change", which only
      // fires on History API navigations. Pageviews are sent from the router
      // below instead, so the first load counts too.
      capture_pageview: false,
      capture_pageleave: true,
    });
  } catch (err) {
    console.error("[posthog] init failed:", err);
  }
}

function PageviewTracker({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!key || !pathname) return;
    const qs = searchParams?.toString();
    posthog.capture("$pageview", {
      $current_url: `${window.location.origin}${pathname}${qs ? `?${qs}` : ""}`,
      locale,
    });
  }, [pathname, searchParams, locale]);

  return null;
}

export function PostHogProvider({ locale }: { locale: Locale }) {
  // useSearchParams needs a Suspense boundary or it opts the tree out of
  // static rendering.
  return (
    <Suspense fallback={null}>
      <PageviewTracker locale={locale} />
    </Suspense>
  );
}
