import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Whitelist the quality values used across the app (Next 16 requires this).
    qualities: [75, 80, 85],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  experimental: {
    serverActions: {
      // Allow contact-form file attachments (default body limit is 1 MB).
      bodySizeLimit: "10mb",
    },
  },
  // PostHog reverse proxy: analytics is served from our own domain, so the
  // ad blockers that blocklist *.i.posthog.com don't silently drop the traffic.
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
    ];
  },
  // PostHog's ingest endpoints are sensitive to a trailing-slash redirect.
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
