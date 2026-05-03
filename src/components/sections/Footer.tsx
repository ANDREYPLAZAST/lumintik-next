const FOOTER_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/ANDREYPLAZAST" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Email", href: "mailto:hello@lumintik.com" },
] as const;

export function Footer() {
  return (
    <footer className="relative w-full bg-neutral-900 text-white z-[2]">
      <div className="mx-auto max-w-[1600px] w-full px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Let&apos;s build something{" "}
              <span className="italic text-blue-400">inevitable.</span>
            </h3>
            <p className="mt-4 text-slate-400 text-base max-w-md">
              Software engineering studio for companies that care about craft.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-white text-neutral-900 text-sm font-medium hover:bg-blue-500 hover:text-white transition-colors duration-300"
            >
              Start a project
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          <nav aria-label="Footer navigation">
            <h4 className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Sitemap
            </h4>
            <ul className="mt-6 flex flex-col gap-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white text-base transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Social links">
            <h4 className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Elsewhere
            </h4>
            <ul className="mt-6 flex flex-col gap-3">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-slate-300 hover:text-white text-base transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-slate-500 text-xs tracking-[0.18em] uppercase">
            Lumintik · Software studio · 2026
          </p>
          <p className="text-slate-500 text-xs">
            Just a mark of my existence in the vastness of the web.
          </p>
        </div>
      </div>
    </footer>
  );
}
