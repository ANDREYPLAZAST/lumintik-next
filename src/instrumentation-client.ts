import posthog from "posthog-js";

const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;

// Without a key (fresh clone, preview env with no vars) analytics simply stays
// off — it must never be the reason a page fails to load.
if (key) {
  try {
    posthog.init(key, {
      api_host:
        process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
      // Pins autocapture/pageview behaviour to a dated preset so a posthog-js
      // upgrade can't silently change what gets tracked.
      defaults: "2026-06-25",
    });
  } catch (err) {
    console.error("[posthog] init failed:", err);
  }
}
