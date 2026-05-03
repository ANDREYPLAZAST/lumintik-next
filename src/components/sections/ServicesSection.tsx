import { ServiceCard } from "@/components/sections/ServiceCard";
import { services } from "@/data/services";

const HEADING = "Our Services";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-white box-border outline-none px-5 py-14 md:px-0 md:py-20 z-[2] w-full"
    >
      <div className="box-border max-w-none w-full mx-auto md:max-w-screen-xl">
        <div className="items-start box-border gap-x-5 flex flex-col justify-between max-w-none gap-y-5 w-full mt-20 mb-5 mx-auto md:items-end md:gap-x-[normal] md:flex-row md:max-w-screen-xl md:gap-y-[normal] md:mb-10">
          <div className="box-border min-h-[auto] min-w-[auto]">
            <div className="box-border">
              <h2
                aria-label={HEADING}
                className="text-transparent text-[38px] font-bold bg-clip-text box-border leading-[38px] max-w-xl md:text-6xl md:leading-[60px]"
              >
                <span className="text-[38px] box-border leading-[38px] md:text-6xl md:leading-[60px]">
                  {HEADING.split("").map((ch, i) => {
                    const ratio = i / Math.max(1, HEADING.length - 1);
                    return (
                      <span
                        key={i}
                        className="text-[38px] bg-clip-text box-border inline-block leading-[38px] md:text-6xl md:leading-[60px]"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, rgb(59,130,246) 0%, rgb(15,23,42) 50%, rgb(59,130,246) 100%)",
                          backgroundSize: "1100% 100%",
                          backgroundPosition: `${ratio * 100}% top`,
                        }}
                      >
                        {ch === " " ? " " : ch}
                      </span>
                    );
                  })}
                </span>
              </h2>
            </div>
          </div>

          <a
            href="#services"
            className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full border border-blue-500/40 text-slate-900 hover:bg-blue-500 hover:text-white transition-colors duration-300"
          >
            <span>Learn more</span>
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

        <div className="box-border flex flex-col grid-cols-[repeat(1,minmax(0px,1fr))] border-slate-200 overflow-hidden -mt-1.5 rounded-xl border-b border-l border-r border-t border-solid md:grid md:flex-row md:grid-cols-[repeat(12,minmax(0px,1fr))] md:mt-0 md:border-r-0">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              videoSrc={service.videoSrc}
              span={service.span}
            />
          ))}
        </div>

        <a
          href="#services"
          className="mt-8 flex md:hidden items-center justify-center gap-2 px-6 py-3 rounded-full border border-blue-500/40 text-slate-900 w-full"
        >
          <span>Learn more</span>
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
    </section>
  );
}
