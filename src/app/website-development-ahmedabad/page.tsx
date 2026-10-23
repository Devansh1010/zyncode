import type { Metadata } from "next";

import AhmedabadHero from "@/components/sections/website-development-ahmedabad/Ahmedabad-hero";
import BusinessProblems from "@/components/sections/website-development-ahmedabad/Business-problems";
import SolutionsSection from "@/components/sections/website-development-ahmedabad/Solutions-overview";
import WhyZyncode from "@/components/sections/website-development-ahmedabad/Why-zyncode";
import SelectedWork from "@/components/sections/Selected-work";
import WebsiteDevelopmentProcess from "@/components/sections/website-development-ahmedabad/Website-development-process";
import PricingGuidance from "@/components/sections/service/Pricing-guidance";
import AhmedabadBusinesses from "@/components/sections/website-development-ahmedabad/Ahmedabad-businesses";
import AhmedabadFaqs from "@/components/sections/website-development-ahmedabad/Ahmedabad-faqs";

export const metadata: Metadata = {
    title: "Website Development in Ahmedabad | Zyncode",
    description:
        "Looking for website development in Ahmedabad? Zyncode designs and builds business websites and custom digital experiences around your business goals.",
    alternates: {
        canonical: "/website-development-ahmedabad",
    },
};

export default function AhmedabadWebsiteDevelopmentPage() {
    return (
        <main>
            <AhmedabadHero />
            <BusinessProblems />
            <SolutionsSection />
            <WhyZyncode />
            <SelectedWork/>
            <WebsiteDevelopmentProcess/>
            <PricingGuidance/>
            <AhmedabadBusinesses/>
            <AhmedabadFaqs/>
        </main>
    );
}