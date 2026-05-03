"use client";

import { useEffect, useState } from "react";

const part1 = [
  { text: "We", delay: 0 },
  { text: "build", delay: 60 },
  { text: "software", delay: 120 },
  { text: "that", delay: 180 },
  { text: "feels", delay: 240 },
] as const;

const blueWords = [{ text: "inevitable.", delay: 320 }] as const;

export function Hero() {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <header className="relative content-center items-center bg-transparent box-border gap-x-0 flex flex-col shrink-0 h-[1000px] justify-start max-w-[1600px] order-2 gap-y-0 w-full overflow-hidden pt-[72px] pb-0 px-6 md:order-none md:pt-32 md:pb-6 md:px-20 z-[2]">
      <div className="relative content-start items-start box-border flex basis-0 flex-col grow shrink-0 h-px justify-between w-full pt-10 pb-[90px] md:pt-16 md:pb-12">
        <div className="block md:contents">
          <div className="static block md:relative md:flex md:flex-col md:shrink-0 md:justify-center md:max-w-[80%] md:w-full">
            <p className="text-slate-900 text-base box-content leading-[normal] text-start break-normal md:text-slate-900 md:text-7xl md:box-border md:leading-[79.2px] md:break-words md:text-left overflow-hidden">
              <span
                className="inline-block uppercase tracking-[0.2em] text-blue-500 text-xs md:text-sm font-medium mb-6"
                style={{
                  opacity: started ? 1 : 0,
                  transition: "opacity 0.6s ease 60ms",
                }}
              >
                Software studio · 2026
              </span>
              <br />
              {part1.map(({ text, delay }) => (
                <span
                  key={text + delay}
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
              ))}
              <span className="text-slate-900 md:text-blue-500">
                {blueWords.map(({ text, delay }) => (
                  <span
                    key={text + delay}
                    className="inline-block overflow-hidden align-bottom"
                    style={{ verticalAlign: "bottom" }}
                  >
                    <span
                      className="inline-block"
                      style={{
                        opacity: started ? 1 : 0,
                        transform: started
                          ? "translateY(0)"
                          : "translateY(100%)",
                        transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
                      }}
                    >
                      {text}&nbsp;
                    </span>
                  </span>
                ))}
              </span>
            </p>
          </div>
        </div>

        <div
          className="relative content-center items-center box-border gap-x-2 flex flex-col shrink-0 h-min justify-start order-1 gap-y-2 w-full overflow-hidden md:items-end md:flex-row md:justify-between md:order-none md:gap-x-8 md:gap-y-0"
          style={{
            opacity: started ? 1 : 0,
            transform: started ? "translateY(0)" : "translateY(30px)",
            transition:
              "opacity 0.8s cubic-bezier(0.22,1,0.36,1) 1100ms, transform 0.8s cubic-bezier(0.22,1,0.36,1) 1100ms",
          }}
        >
          <div className="relative box-border flex flex-col shrink-0 justify-center max-w-none w-full md:max-w-[60%]">
            <p className="text-slate-700 text-lg md:text-xl box-border leading-relaxed text-left">
              Software engineering studio for companies that understand the
              difference between a product that works and one that{" "}
              <span className="text-slate-900 font-medium">matters</span>.
              Currently building with{" "}
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
              and{" "}
              <a
                href="#work"
                className="text-blue-500 hover:text-slate-900 transition-colors"
              >
                EZDocuAI
              </a>
              .
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-blue-500 transition-colors duration-300"
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
            <a
              href="#approach"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 text-slate-900 text-sm font-medium hover:bg-slate-100 transition-colors duration-300"
            >
              How we work
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
