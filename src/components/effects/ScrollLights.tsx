"use client";

import { useEffect, useRef, useState } from "react";

type Tint = "heroDark" | "blueLight" | "amber" | "white" | "footer";

const PALETTES: Record<Tint, { base: string; glow: string }> = {
  heroDark: {
    base: "#0a0a0a",
    glow: "radial-gradient(80% 60% at 50% 110%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 70%)",
  },
  blueLight: {
    base: "#ffffff",
    glow: "radial-gradient(95% 75% at 50% 100%, rgba(59,130,246,0.45) 0%, rgba(96,165,250,0.22) 35%, rgba(255,255,255,0) 70%), radial-gradient(60% 50% at 20% 95%, rgba(96,165,250,0.3) 0%, rgba(96,165,250,0) 70%), radial-gradient(60% 50% at 80% 95%, rgba(147,197,253,0.28) 0%, rgba(147,197,253,0) 70%)",
  },
  amber: {
    base: "#ffffff",
    glow: "radial-gradient(85% 65% at 50% 100%, rgba(251,191,36,0.28) 0%, rgba(251,191,36,0) 70%), radial-gradient(50% 40% at 15% 95%, rgba(252,211,77,0.2) 0%, rgba(252,211,77,0) 70%), radial-gradient(50% 40% at 85% 95%, rgba(253,224,71,0.18) 0%, rgba(253,224,71,0) 70%)",
  },
  white: {
    base: "#ffffff",
    glow: "radial-gradient(60% 50% at 50% 50%, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 70%)",
  },
  footer: {
    base: "#0a0a0a",
    glow: "radial-gradient(95% 75% at 50% 100%, rgba(59,130,246,0.55) 0%, rgba(96,165,250,0.25) 40%, rgba(0,0,0,0) 70%)",
  },
};

export function ScrollLights() {
  const [tint, setTint] = useState<Tint>("heroDark");
  const [rise, setRise] = useState(0);
  const lastTint = useRef<Tint>("heroDark");

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const vh = window.innerHeight || 1;
      const probe = vh * 0.65;

      const rise = document.getElementById("content-rise");
      const clients = document.getElementById("clients");
      const services = document.getElementById("services");
      const work = document.getElementById("work");
      const tape = document.getElementById("marquee-tape");
      const footer = document.getElementById("footer");

      let active: Tint = "heroDark";
      let progress = 0;

      const inView = (el: HTMLElement | null) => {
        if (!el) return null;
        const r = el.getBoundingClientRect();
        if (r.top <= probe && r.bottom >= probe) return r;
        return null;
      };

      const footerRect = inView(footer);
      const tapeRect = inView(tape);
      const workRect = inView(work);
      const servicesRect = inView(services);
      const clientsRect = inView(clients);

      if (footerRect) {
        active = "footer";
        progress = Math.max(0, Math.min(1, (probe - footerRect.top) / (footerRect.height || vh)));
      } else if (tapeRect) {
        active = "white";
      } else if (workRect) {
        active = "white";
      } else if (servicesRect) {
        active = "amber";
        progress = Math.max(0, Math.min(1, (probe - servicesRect.top) / (servicesRect.height || vh)));
      } else if (clientsRect) {
        active = "amber";
        progress = Math.max(0, Math.min(1, (probe - clientsRect.top) / (clientsRect.height || vh)));
      } else if (rise) {
        const r = rise.getBoundingClientRect();
        if (r.top <= probe) {
          active = "blueLight";
          const enter = probe - r.top;
          progress = Math.max(0, Math.min(1, enter / (vh * 0.5)));
        }
      }

      if (active !== lastTint.current) {
        lastTint.current = active;
        setTint(active);
      }
      setRise(progress);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const palette = PALETTES[tint];
  const lift = (1 - rise) * 35;
  const glowOpacity = tint === "white" ? 0 : 0.35 + rise * 0.65;

  return (
    <>
      <div
        aria-hidden
        className="fixed inset-0 z-0 pointer-events-none transition-colors duration-[1000ms] ease-out"
        style={{ backgroundColor: palette.base }}
      />
      <div
        aria-hidden
        className="fixed inset-0 z-0 pointer-events-none transition-[background,opacity,transform] duration-[800ms] ease-out"
        style={{
          background: palette.glow,
          filter: "blur(40px)",
          opacity: glowOpacity,
          transform: `translateY(${lift}vh)`,
        }}
      />
    </>
  );
}
