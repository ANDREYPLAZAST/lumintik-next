import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailShell } from "@/components/sections/DetailShell";
import { caseStudies, findProjectBySlug } from "@/data/projects";
import { messages } from "@/i18n/messages";
import { LOCALES, OG_LOCALES, fromSegment, toSegment } from "@/lib/locale";
import { SITE_NAME, absoluteUrl, localizedAlternates } from "@/lib/seo";

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    caseStudies.map((p) => ({ locale: toSegment(locale), slug: p.slug! })),
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/work/[slug]">): Promise<Metadata> {
  const { locale: segment, slug } = await params;
  const locale = fromSegment(segment);
  const project = findProjectBySlug(slug);
  if (!locale || !project) return {};

  const t = messages[locale];
  const card = t.projects.cards[project.key];
  const title = t.seo.caseStudy.titleTemplate.replace("%s", card.title);
  const path = `/work/${project.slug}`;

  return {
    title,
    description: card.desc,
    alternates: localizedAlternates(locale, path),
    openGraph: {
      type: "article",
      siteName: SITE_NAME,
      title,
      description: card.desc,
      url: absoluteUrl(locale, path),
      locale: OG_LOCALES[locale],
      alternateLocale: LOCALES.filter((l) => l !== locale).map((l) => OG_LOCALES[l]),
      images: [{ url: project.image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: card.desc,
      images: [project.image],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: PageProps<"/[locale]/work/[slug]">) {
  const { locale: segment, slug } = await params;
  const locale = fromSegment(segment);
  const project = findProjectBySlug(slug);
  if (!locale || !project) notFound();

  const t = messages[locale];
  const card = t.projects.cards[project.key];

  const index = caseStudies.findIndex((p) => p.slug === project.slug);
  const upcoming = caseStudies[(index + 1) % caseStudies.length];

  return (
    <DetailShell
      eyebrow={t.detail.eyebrow}
      title={card.title}
      description={card.desc}
      // "#work" is an on-page anchor, not a real destination — only offer the
      // button when the project actually has a public site.
      visitHref={project.href.startsWith("http") ? project.href : undefined}
      overview={t.cases[project.key]?.overview}
      heroImage={project.image}
      gallery={project.gallery}
      next={
        upcoming && upcoming.slug !== project.slug
          ? {
              label: t.detail.next,
              title: t.projects.cards[upcoming.key].title,
              href: `/${toSegment(locale)}/work/${upcoming.slug}`,
            }
          : undefined
      }
    />
  );
}
