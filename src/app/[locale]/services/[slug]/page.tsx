import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailShell } from "@/components/sections/DetailShell";
import { findServiceBySlug, services } from "@/data/services";
import { messages } from "@/i18n/messages";
import { LOCALES, OG_LOCALES, fromSegment, toSegment } from "@/lib/locale";
import { SITE_NAME, absoluteUrl, localizedAlternates } from "@/lib/seo";

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    services.map((s) => ({ locale: toSegment(locale), slug: s.slug })),
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/services/[slug]">): Promise<Metadata> {
  const { locale: segment, slug } = await params;
  const locale = fromSegment(segment);
  const service = findServiceBySlug(slug);
  if (!locale || !service) return {};

  const t = messages[locale];
  const item = t.services.items[service.key];
  const title = t.seo.service.titleTemplate.replace("%s", item.title);
  const path = `/services/${service.slug}`;

  return {
    title,
    description: item.desc,
    alternates: localizedAlternates(locale, path),
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title,
      description: item.desc,
      url: absoluteUrl(locale, path),
      locale: OG_LOCALES[locale],
      alternateLocale: LOCALES.filter((l) => l !== locale).map((l) => OG_LOCALES[l]),
    },
    twitter: { card: "summary_large_image", title, description: item.desc },
  };
}

export default async function ServicePage({
  params,
}: PageProps<"/[locale]/services/[slug]">) {
  const { locale: segment, slug } = await params;
  const locale = fromSegment(segment);
  const service = findServiceBySlug(slug);
  if (!locale || !service) notFound();

  const t = messages[locale];
  const item = t.services.items[service.key];

  const index = services.findIndex((s) => s.slug === service.slug);
  const upcoming = services[(index + 1) % services.length];

  return (
    <DetailShell
      eyebrow={t.services.eyebrow}
      title={item.title}
      description={item.desc}
      video={{ src: service.videoSrc, poster: service.posterSrc }}
      next={
        upcoming && upcoming.slug !== service.slug
          ? {
              label: t.services.title,
              title: t.services.items[upcoming.key].title,
              href: `/${toSegment(locale)}/services/${upcoming.slug}`,
            }
          : undefined
      }
    />
  );
}
