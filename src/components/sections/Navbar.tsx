"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Approach", href: "#approach" },
  { label: "Services", href: "#services" },
  { label: "News", href: "#news" },
  { label: "About", href: "#about" },
] as const;

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[50] transition-all duration-500 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md border-b border-slate-200/60"
          : "bg-transparent"
      }`}
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(-24px)",
        transition:
          "opacity 0.7s cubic-bezier(0.22,1,0.36,1) 100ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) 100ms, background-color 0.4s, backdrop-filter 0.4s, border-color 0.4s",
      }}
    >
      <div className="mx-auto flex items-center justify-between max-w-[1600px] w-full px-6 md:px-12 py-5">
        <a
          href="#"
          aria-label="Lumintik — home"
          className="text-slate-900 text-xl md:text-2xl font-bold tracking-[0.18em] leading-none select-none"
        >
          LUMINTIK
        </a>

        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-slate-700 hover:text-slate-900 text-sm font-medium px-4 py-2 rounded-full transition-colors duration-200 hover:bg-slate-100"
            >
              {item.label}
            </a>
          ))}

          <span className="mx-3 h-px w-8 bg-slate-300" aria-hidden />

          <a
            href="#join"
            className="text-slate-700 hover:text-slate-900 text-sm font-medium px-4 py-2 transition-colors duration-200"
          >
            Join
          </a>
          <a
            href="#contact"
            className="ml-1 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-blue-500 transition-colors duration-300"
          >
            Contact
            <svg
              width="14"
              height="14"
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
        </nav>

        <button
          aria-label="Open menu"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-white"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  );
}
