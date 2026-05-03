import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { BuildingFor } from "@/components/sections/BuildingFor";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";
import { Footer } from "@/components/sections/Footer";
import { HeroLights } from "@/components/effects/HeroLights";
import { LanguageBar } from "@/components/ui/LanguageBar";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center bg-white min-h-screen overflow-hidden">
      <HeroLights />
      <Navbar />
      <LanguageBar />
      <main className="relative w-full flex flex-col items-center">
        <Hero />
        <BuildingFor />
        <ServicesSection />
        <ProjectsShowcase />
      </main>
      <Footer />
    </div>
  );
}
