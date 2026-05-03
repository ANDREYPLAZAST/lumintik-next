import { MarqueeRow } from "@/components/ui/MarqueeRow";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { featuredProject, projects } from "@/data/projects";

const MARQUEE_ITEMS = ["SHOW CASE", "PROJECTS", "CASE STUDIES", "WORKS"];

export function ProjectsShowcase() {
  return (
    <section
      id="work"
      className="relative bg-white w-full px-5 py-14 md:px-12 md:py-24 z-[2]"
    >
      <style>{`
        @keyframes lumintik-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.3333%); }
        }
      `}</style>

      <div className="mx-auto max-w-[1600px] w-full">
        <div className="relative -mb-2">
          <MarqueeRow items={MARQUEE_ITEMS} duration={28} primary />
          <div className="-mt-10 opacity-50">
            <MarqueeRow
              items={MARQUEE_ITEMS}
              duration={36}
              primary={false}
              reverse
            />
          </div>
        </div>

        <div className="mt-12 md:mt-16 flex flex-col gap-12 md:gap-16">
          <ProjectCard card={featuredProject} large />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((card) => (
              <ProjectCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
