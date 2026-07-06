import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/components/providers/LocaleProvider";
import { Splash } from "@/components/effects/Splash";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const SITE_NAME = "Lumintik SAS";
const SITE_URL = "https://lumintik.com";
const TITLE = "Lumintik SAS — Software studio that builds inevitable products";
const DESCRIPTION =
  "Lumintik SAS is a software engineering studio for companies that care about craft. Headless commerce, applied AI, web engineering and design systems for Samsung, Claro, Coca-Cola, EZDocuAI and more.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · Lumintik SAS",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Lumintik",
    "Lumintik SAS",
    "software studio",
    "software engineering",
    "headless commerce",
    "applied AI",
    "Next.js studio",
    "design engineering",
    "web performance",
    "Samsung Imagiq",
    "Claro",
    "EZDocuAI",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  alternates: {
    // The site serves EN/ES from a single client-switched URL, so there are no
    // distinct localized URLs to advertise as hreflang alternates.
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    locale: "en_US",
    alternateLocale: ["es_ES"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@lumintik",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: SITE_NAME,
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1120" },
  ],
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const ORGANIZATION_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  legalName: SITE_NAME,
  alternateName: "Lumintik",
  url: SITE_URL,
  logo: `${SITE_URL}/lumintik-logo.png`,
  image: `${SITE_URL}/lumintik-icon.png`,
  description: DESCRIPTION,
  email: "andrey@lumintik.com",
  sameAs: [
    "https://github.com/ANDREYPLAZAST",
  ],
};

const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: ["en", "es"],
  publisher: { "@type": "Organization", name: SITE_NAME },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <head>
        <link rel="preconnect" href="https://prod.spline.design" crossOrigin="" />
        <link rel="dns-prefetch" href="https://prod.spline.design" />
        <link rel="preconnect" href="https://unpkg.com" crossOrigin="" />
        <link
          rel="preload"
          as="fetch"
          href="https://prod.spline.design/Hic65A1wo9S7zyNu/scene.splinecode?v=7"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSONLD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSONLD) }}
        />
      </head>
      <body className="bg-white text-slate-900 antialiased font-sans">
        <LocaleProvider>
          <Splash />
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
