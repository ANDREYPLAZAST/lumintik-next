"use client";

import { useEffect, useRef, useState } from "react";
import { useT } from "@/components/providers/LocaleProvider";
import Spline from "@splinetool/react-spline";

export function Hero() {
  const t = useT();
  const [started, setStarted] = useState(false);
  const [shift, setShift] = useState(0);
  const [accentIndex, setAccentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const accents = t.hero.titleAccentRotations ?? [t.hero.titleAccent];
  const accentsLenRef = useRef(accents.length);
  accentsLenRef.current = accents.length;

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  // Re-trigger word entrance when language changes.
  useEffect(() => {
    setStarted(false);
    const id = setTimeout(() => setStarted(true), 60);
    return () => clearTimeout(id);
  }, [t]);

  // Track scroll progress within the hero wrapper to invert text colors.
  useEffect(() => {
    let ticking = false;
    let lastShift = -1;
    let lastAccent = -1;
    const update = () => {
      const rise = document.getElementById("content-rise");
      const vh = window.innerHeight || 1;
      if (rise) {
        const top = rise.getBoundingClientRect().top;
        const start = vh * 4.5;
        const end = vh * 2.5;
        const raw = (start - top) / (start - end);
        const nextShift = Math.max(0, Math.min(1, raw));
        const minShiftDelta = window.innerWidth < 768 ? 0.035 : 0.015;
        if (Math.abs(nextShift - lastShift) >= minShiftDelta) {
          lastShift = nextShift;
          setShift(nextShift);
        }

        // Rotate accent word across the full hero scroll.
        const heroStart = vh * 5;
        const heroEnd = 0;
        const hp = Math.max(0, Math.min(1, (heroStart - top) / (heroStart - heroEnd)));
        const len = accentsLenRef.current;
        const idx = Math.min(len - 1, Math.floor(hp * len));
        if (idx !== lastAccent) {
          lastAccent = idx;
          setAccentIndex(idx);
        }
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        globalThis.requestAnimationFrame(update);
        ticking = true;
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const lerp = (a: number[], b: number[], t: number) =>
    a.map((v, i) => Math.round(v + (b[i] - v) * t));
  const rgb = (c: number[]) => `rgb(${c.join(",")})`;
  // Final colors match v1: slate-900 title, blue-500 accent/eyebrow, slate-700 body, slate-900 matters
  const titleColor = rgb(lerp([255, 255, 255], [15, 23, 42], shift));
  const accentColor = rgb(lerp([147, 197, 253], [59, 130, 246], shift));
  const eyebrowColor = rgb(lerp([147, 197, 253], [59, 130, 246], shift));
  const bodyColor = rgb(lerp([203, 213, 225], [51, 65, 85], shift));
  const matterColor = rgb(lerp([255, 255, 255], [15, 23, 42], shift));

  return (
    <header
      id="hero"
      className="relative flex flex-col w-full h-full px-6 md:px-20 pt-28 md:pt-32 pb-10 md:pb-6 overflow-hidden z-[2]"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: shift,
          transition: "opacity 0.4s ease",
          background:
            "radial-gradient(110% 65% at 50% -15%, rgba(59,130,246,0.4) 0%, rgba(96,165,250,0.2) 25%, rgba(255,255,255,0) 55%)",
          maskImage:
            "linear-gradient(180deg, #000 0%, #000 55%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "linear-gradient(180deg, #000 0%, #000 55%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none mix-blend-screen"
        style={{
          opacity: isMobile ? 0 : shift,
          transition: "opacity 0.4s ease",
          background:
            "conic-gradient(from 200deg at 50% -5%, rgba(255,255,255,0) 0deg, rgba(96,165,250,0.55) 30deg, rgba(255,255,255,0) 60deg, rgba(59,130,246,0.5) 95deg, rgba(255,255,255,0) 130deg, rgba(147,197,253,0.55) 175deg, rgba(255,255,255,0) 215deg, rgba(59,130,246,0.45) 260deg, rgba(255,255,255,0) 300deg, rgba(96,165,250,0.5) 340deg, rgba(255,255,255,0) 360deg)",
          filter: isMobile ? "none" : "blur(28px)",
          maskImage:
            "linear-gradient(180deg, #000 0%, #000 50%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "linear-gradient(180deg, #000 0%, #000 50%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0) 100%)",
        }}
      />
      <div className="relative flex flex-col flex-1 justify-between w-full max-w-[1600px] mx-auto pt-6 md:pt-6 xl:pt-16 pb-8 md:pb-12">
        <div className="md:max-w-[80%]">
          <span
            className="block uppercase tracking-[0.2em] text-xs md:text-sm font-medium mb-5 md:mb-6"
            style={{
              color: eyebrowColor,
              opacity: started ? 1 : 0,
              transition: "opacity 0.6s ease 60ms, color 0.4s ease",
            }}
          >
            {t.hero.eyebrow}
          </span>

          <h1
            className="text-[36px] leading-[1.08] md:text-7xl md:leading-[1.1] font-semibold tracking-tight"
            style={{ color: titleColor, transition: "color 0.4s ease" }}
          >
            {t.hero.titleParts.map((text, i) => {
              const delay = i * 60;
              return (
                <span
                  key={text + i}
                  className="inline-block overflow-hidden align-bottom"
                  style={{ verticalAlign: "bottom" }}
                >
                  <span
                    className="inline-block"
                    style={{
                      opacity: started ? 1 : 0,
                      transform: started ? "translateY(0)" : "translateY(100%)",
                      transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
                    }}
                  >
                    {text}&nbsp;
                  </span>
                </span>
              );
            })}
            <span style={{ color: accentColor, transition: "color 0.4s ease" }}>
              <span
                className="relative inline-block overflow-hidden align-bottom"
                style={{
                  verticalAlign: "bottom",
                  minWidth: `${Math.max(...accents.map((w) => w.length))}ch`,
                  height: "1.1em",
                }}
              >
                {accents.map((word, i) => {
                  const isActive = started && i === accentIndex;
                  const isPast = i < accentIndex;
                  let accentTransform = "translateY(110%)";
                  if (isActive) accentTransform = "translateY(0)";
                  else if (isPast) accentTransform = "translateY(-110%)";
                  return (
                    <span
                      key={word + i}
                      className="absolute left-0 top-0 inline-block whitespace-nowrap"
                      style={{
                        opacity: isActive ? 1 : 0,
                        transform: accentTransform,
                        transition:
                          "opacity 0.55s cubic-bezier(0.22,1,0.36,1), transform 0.55s cubic-bezier(0.22,1,0.36,1)",
                      }}
                    >
                      {word}
                    </span>
                  );
                })}
              </span>
            </span>
          </h1>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          spline-viewer::part(logo) { display: none !important; }
          #logo { display: none !important; }
        `}} />
        <div
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-8 mt-[300px] md:mt-0 relative"
          style={{
            opacity: started ? 1 : 0,
            transform: started ? "translateY(0)" : "translateY(30px)",
            transition:
              "opacity 0.8s cubic-bezier(0.22,1,0.36,1) 1100ms, transform 0.8s cubic-bezier(0.22,1,0.36,1) 1100ms",
          }}
        >
          {/* Spline 3D Scene anchored to the top of the description block so it pushes up on mobile */}
          <div 
            className="absolute left-1/2 flex items-center justify-center -translate-x-[50%] bottom-[100%] md:left-auto md:-translate-x-0 md:right-[-75px] md:bottom-[calc(100%+285px)] xl:bottom-full w-[340px] h-[430px] md:w-[650px] md:h-[650px] mb-[-20px] md:mb-0 xl:mb-[-100px] pointer-events-none z-0"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 100% calc(100% - 70px), max(50%, calc(100% - 180px)) calc(100% - 70px), max(50%, calc(100% - 180px)) 100%, min(50%, 180px) 100%, min(50%, 180px) calc(100% - 70px), 0% calc(100% - 70px))"
            }}
          >
            {/* pointer-events-auto restores drag controls. scaleX(-1) reliably mirrors the model. touch-none allows mobile fingers to freely orbit without scrolling the page. onWheelCapture stops zooming. */}
            <div 
              className="absolute inset-0 w-full h-full pointer-events-none md:pointer-events-auto md:cursor-grab md:active:cursor-grabbing md:touch-none"
              style={{ transform: "scaleX(-1)" }}
              onWheelCapture={(e) => e.stopPropagation()}
            >
              <Spline scene="https://prod.spline.design/Hic65A1wo9S7zyNu/scene.splinecode?v=7" />
            </div>
          </div>

          <p
            className="text-sm md:text-xl leading-relaxed md:max-w-[60%] z-10 relative pointer-events-auto md:[transform:translateY(-26rem)] xl:[transform:translateY(0)]"
            style={{ color: bodyColor, transition: "color 0.4s ease" }}
          >
            {t.hero.description.lead}{" "}
            <span
              className="font-medium"
              style={{ color: matterColor, transition: "color 0.4s ease" }}
            >
              {t.hero.description.matters}
            </span>
            . {t.hero.description.buildingWith}{" "}
            <a
              href="https://www.samsung.com/"
              className="hover:opacity-70 transition-opacity"
              style={{ color: accentColor }}
            >
              Samsung
            </a>
            ,{" "}
            <a
              href="https://www.claro.com.co/"
              className="hover:opacity-70 transition-opacity"
              style={{ color: accentColor }}
            >
              Claro
            </a>
            {" "}
            {t.hero.description.and}{" "}
            <a
              href="#work"
              className="hover:opacity-70 transition-opacity"
              style={{ color: accentColor }}
            >
              EZDocuAI
            </a>
            {"."}
          </p>

          <div className="flex flex-col items-start md:items-end gap-2 md:gap-4 relative w-full md:w-auto md:[transform:translateY(-26rem)] xl:[transform:translateY(0)]">
            <div className="flex flex-wrap flex-col md:flex-row items-center gap-3 z-10 w-full md:w-auto">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 md:px-6 rounded-full text-sm font-medium transition-colors duration-300 w-full md:w-auto"
                style={{
                  backgroundColor: rgb(lerp([255, 255, 255], [15, 23, 42], shift)),
                  color: rgb(lerp([15, 23, 42], [255, 255, 255], shift)),
                }}
              >
                {t.hero.startProject}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a
                href="#approach"
                className="hidden md:inline-flex items-center justify-center gap-2 px-5 py-3 md:px-6 rounded-full border text-sm font-medium transition-colors duration-300 w-full md:w-auto"
                style={{
                  color: rgb(lerp([255, 255, 255], [15, 23, 42], shift)),
                  borderColor: `rgba(${shift > 0.5 ? "15,23,42" : "255,255,255"},0.3)`,
                }}
              >
                {t.hero.howWeWork}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
