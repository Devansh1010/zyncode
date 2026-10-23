
import HomeHero from "@/components/sections/Home-hero";
import ProblemRecognition from "../components/sections/Problem-recognition";
import SolutionsSection from "@/components/sections/Solutions-section";
import { SiteFooter } from "@/components/layout/site-footer";
import ServiceOverview from "@/components/sections/Service-overview";
import SelectedWork from "@/components/sections/Selected-work";
import FinalCTA from "@/components/sections/Final-cta";

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <ProblemRecognition />
      <SolutionsSection />
      <ServiceOverview />
      <SelectedWork />
      <FinalCTA />
    </main>
  );
}