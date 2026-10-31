
import HomeHero from "@/components/sections/Home-hero";
import ProblemRecognition from "../components/sections/Problem-recognition";
import SolutionsSection from "@/components/sections/Solutions-section";
import SelectedWork from "@/components/sections/Selected-work";
import FinalCTA from "@/components/sections/Final-cta";
import HowWeThink from "@/components/sections/about/How-we-think";

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <ProblemRecognition />
      <SolutionsSection />
      <SelectedWork />
      <HowWeThink />
      <FinalCTA />
    </main>
  );
}