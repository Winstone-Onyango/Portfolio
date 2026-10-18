import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ToolsSlider } from "@/components/ToolsSlider";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { ExpertiseAreas } from "@/components/ExpertiseAreas";
import { CodesStandards } from "@/components/CodesStandards";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";
import siteBg from "@/assets/site-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Architectural background */}
      <div className="fixed inset-0 z-0">
        <img
          src={siteBg}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/92" />
      </div>

      <div className="relative z-10">
        <Header />
        <Hero />
        <Services />
        <ToolsSlider />
        <ExpertiseAreas />
        <Education />
        <ProjectsGrid />
        <CodesStandards />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
