import HowItWorks from "@/components/sections/service/How-it-works";
import OurApproach from "@/components/sections/service/Our-approach";
import PricingGuidance from "@/components/sections/service/Pricing-guidance";
import SelectedWork from "@/components/sections/service/Selected-work";
import ServiceOverview from "@/components/sections/service/Service-overview";
import ServicesFaq from "@/components/sections/service/Services-faq";
import ServicesFinalCta from "@/components/sections/service/Services-final-cta";
import ServicesHero from "@/components/sections/service/Services-hero";

export const metadata = {
    title: "Web Design & Development Services | Zyncode",
    description:
        "Explore Zyncode's business website development, custom web applications, website redesign, and maintenance services for businesses in Ahmedabad and beyond.",
};

export default function ServicesPage() {
    return (
        <main>
            <ServicesHero />

            <ServiceOverview />

            <OurApproach />

            <HowItWorks />

            <SelectedWork />

            <PricingGuidance />

            <ServicesFaq />

            <ServicesFinalCta />
        </main>
    );
}

