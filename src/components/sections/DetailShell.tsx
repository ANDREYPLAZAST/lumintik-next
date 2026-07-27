"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
import { useLocale, useT } from "@/components/providers/LocaleProvider";
import { toSegment } from "@/lib/locale";

export type DetailShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  /** Outbound link to the live site. Omitted for services. */
  visitHref?: string;
  visitLabel?: string;
  /** Long-form copy. Omitted when we have nothing accurate to say. */
  overview?: string;
  heroImage?: string;
  gallery?: string[];
  /** Card at the foot of the page pointing to the next item. */
  next?: { label: string; title: string; href: string };
  /** Poster/looping video used instead of a hero image (service pages). */
  video?: { src: string; poster?: string };
};

function isRemote(src: string) {
  return src.startsWith("http");
}

export function DetailShell({
  eyebrow,
  title,
  description,
  visitHref,
  visitLabel,
  overview,
  heroImage,
  gallery = [],
  next,
  video,
}: Readonly<DetailShellProps>) {
  const t = useT();
  const { locale } = useLocale();
  const home = `/${toSegment(locale)}`;

  return (
    <div className="relative flex flex-col items-center bg-white min-h-screen">
      <Navbar />

      <main className="relative w-full flex flex-col items-center">
        {/* Dark hero, echoing the home page's opening gradient. */}
        <header
          className="relative w-full flex justify-center px-5 pt-32 pb-16 md:px-12 md:pt-44 md:pb-24"
          style={{
            background:
              "linear-gradient(180deg, #000000 0%, #0f172a 45%, #1e3a8a 100%)",
          }}
        >
          <div className="mx-auto max-w-[1600px] w-full">
            <Link
              href={`${home}#work`}
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              {t.detail.back}
            </Link>

            <p className="mt-10 text-[11px] font-medium tracking-[0.18em] uppercase text-blue-300">
              {eyebrow}
            </p>
            <h1 className="mt-4 text-white text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] max-w-[18ch]">
              {title}
            </h1>
            <p className="mt-6 text-white/70 text-lg md:text-2xl leading-relaxed max-w-[60ch]">
              {description}
            </p>

            {visitHref && (
              <a
                href={visitHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-10 px-6 py-3 rounded-full bg-white text-slate-900 text-sm font-medium hover:bg-blue-300 transition-colors duration-300"
              >
                {visitLabel ?? t.detail.visit}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            )}
          </div>
        </header>

        <div className="relative w-full bg-white flex flex-col items-center">
          <div className="mx-auto max-w-[1600px] w-full px-5 md:px-12">
            {/* Lead visual */}
            {video ? (
              <div className="-mt-10 md:-mt-16 relative w-full rounded-md overflow-hidden bg-slate-100 border border-slate-200 aspect-[16/9]">
                <video
                  src={video.src}
                  poster={video.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              heroImage && (
                <div className="-mt-10 md:-mt-16 relative w-full rounded-md overflow-hidden bg-slate-100 border border-slate-200 h-[320px] md:h-[620px]">
                  <Image
                    src={heroImage}
                    alt={title}
                    fill
                    priority
                    sizes="(min-width: 1536px) 1536px, (min-width: 768px) 92vw, 100vw"
                    quality={85}
                    unoptimized={isRemote(heroImage)}
                    className="object-cover object-top"
                  />
                </div>
              )
            )}

            {overview && (
              <section className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-6">
                <h2 className="md:col-span-4 text-[11px] font-medium tracking-[0.18em] uppercase text-slate-400">
                  {t.detail.overview}
                </h2>
                <p className="md:col-span-8 text-slate-700 text-xl md:text-2xl leading-relaxed">
                  {overview}
                </p>
              </section>
            )}

            {gallery.length > 0 && (
              <section className="mt-16 md:mt-24">
                <h2 className="text-[11px] font-medium tracking-[0.18em] uppercase text-slate-400">
                  {t.detail.screens}
                </h2>
                <div className="mt-6 flex flex-col gap-8 md:gap-12">
                  {gallery.map((src) => (
                    <div
                      key={src}
                      className="relative w-full rounded-md overflow-hidden bg-slate-100 border border-slate-200"
                    >
                      <Image
                        src={src}
                        alt={title}
                        width={2400}
                        height={1500}
                        sizes="(min-width: 1536px) 1536px, (min-width: 768px) 92vw, 100vw"
                        quality={80}
                        unoptimized={isRemote(src)}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {next && (
              <section className="mt-20 md:mt-28 border-t border-slate-200 pt-10">
                <Link href={next.href} className="group inline-flex flex-col gap-2">
                  <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-slate-400">
                    {next.label}
                  </span>
                  <span className="inline-flex items-center gap-3 text-slate-900 text-3xl md:text-5xl font-semibold transition-colors duration-300 group-hover:text-blue-500">
                    {next.title}
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </Link>
              </section>
            )}
          </div>

          <div className="w-full mt-20 md:mt-28">
            <ContactSection />
          </div>
        </div>
      </main>

      <div
        className="relative w-full flex justify-center overflow-clip h-screen"
        style={{
          background:
            "linear-gradient(180deg, #ffffff 0%, #93c5fd 12%, #3b82f6 26%, #1e3a8a 42%, #0f172a 65%, #0a0a0a 100%)",
        }}
      >
        <div className="w-full h-screen flex flex-col items-stretch overflow-hidden">
          <Footer />
        </div>
      </div>
    </div>
  );
}
