"use client";

import { useEffect, useState } from "react";
import { useT } from "@/components/providers/LocaleProvider";

export function Hero() {
  const t = useT();
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 80);
    return () => clearTimeout(t);
  }, []);

  // Re-trigger word entrance when language changes.
  useEffect(() => {
    setStarted(false);
    const id = setTimeout(() => setStarted(true), 60);
    return () => clearTimeout(id);
  }, [t]);

  return (
    <header className="relative flex flex-col w-full max-w-[1600px] min-h-[100svh] md:h-[1000px] px-6 md:px-20 pt-28 md:pt-32 pb-10 md:pb-6 overflow-hidden z-[2]">
      <div className="flex flex-col flex-1 justify-between w-full pt-6 md:pt-16 pb-8 md:pb-12">
        <div className="md:max-w-[80%]">
          <span
            className="block uppercase tracking-[0.2em] text-blue-500 text-xs md:text-sm font-medium mb-5 md:mb-6"
            style={{
              opacity: started ? 1 : 0,
              transition: "opacity 0.6s ease 60ms",
            }}
          >
            {t.hero.eyebrow}
          </span>

          <h1 className="text-slate-900 text-[44px] leading-[1.05] md:text-7xl md:leading-[1.1] font-semibold tracking-tight">
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
            <span className="text-blue-500">
              <span className="inline-block overflow-hidden align-bottom" style={{ verticalAlign: "bottom" }}>
                <span
                  className="inline-block"
                  style={{
                    opacity: started ? 1 : 0,
                    transform: started ? "translateY(0)" : "translateY(100%)",
                    transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${t.hero.titleParts.length * 60 + 80}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${t.hero.titleParts.length * 60 + 80}ms`,
                  }}
                >
                  {t.hero.titleAccent}
                </span>
              </span>
            </span>
          </h1>
        </div>

        <div
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-8 mt-10 md:mt-0"
          style={{
            opacity: started ? 1 : 0,
            transform: started ? "translateY(0)" : "translateY(30px)",
            transition:
              "opacity 0.8s cubic-bezier(0.22,1,0.36,1) 1100ms, transform 0.8s cubic-bezier(0.22,1,0.36,1) 1100ms",
          }}
        >
          <p className="text-slate-700 text-base md:text-xl leading-relaxed md:max-w-[60%]">
            {t.hero.description.lead}{" "}
            <span className="text-slate-900 font-medium">
              {t.hero.description.matters}
            </span>
            . {t.hero.description.buildingWith}{" "}
            <a
              href="https://www.samsung.com/"
              className="text-blue-500 hover:text-slate-900 transition-colors"
            >
              Samsung
            </a>
            ,{" "}
            <a
              href="https://www.claro.com.co/"
              className="text-blue-500 hover:text-slate-900 transition-colors"
            >
              Claro
            </a>{" "}
            {t.hero.description.and}{" "}
            <a
              href="#work"
              className="text-blue-500 hover:text-slate-900 transition-colors"
            >
              EZDocuAI
            </a>
            .
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 md:px-6 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-blue-500 transition-colors duration-300"
            >
              {t.hero.startProject}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a
              href="#approach"
              className="inline-flex items-center gap-2 px-5 py-3 md:px-6 rounded-full border border-slate-300 text-slate-900 text-sm font-medium hover:bg-slate-100 transition-colors duration-300"
            >
              {t.hero.howWeWork}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
