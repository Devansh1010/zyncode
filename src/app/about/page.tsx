import type { Metadata } from "next";
import AboutHero from "@/components/sections/about/About-hero";
import OurBelief from "@/components/sections/about/Our-belief";
import WhatWeStandFor from "@/components/sections/about/What-we-stand-for";
import HowWeThink from "@/components/sections/about/How-we-think";
import TheStudio from "@/components/sections/about/The-studio";
import WhoWeWorkWith from "@/components/sections/about/Who-we-work-with";
import AboutFinalCta from "@/components/sections/about/About-final-cta";

export const metadata: Metadata = {
    title: "About Zyncode | Digital Design & Development Studio",
    description:
        "Discover Zyncode, an independent digital design and development studio creating business-focused websites and digital experiences.",
};

export default function AboutPage() {
    return (
        <main>
            <AboutHero />
            <OurBelief />
            <WhatWeStandFor />
            <HowWeThink />
            <TheStudio />
            <WhoWeWorkWith/>
            <AboutFinalCta/>
        </main>
    );
}