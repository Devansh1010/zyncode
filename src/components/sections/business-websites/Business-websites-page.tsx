import { BusinessWebsiteBenefits, BusinessWebsiteFaqs, BusinessWebsiteFinalCta, BusinessWebsiteHero, BusinessWebsiteProcess, WhatsIncluded } from "@/components/ui/business_website/business_website";


export default function BusinessWebsitesPage() {
  return (
    <main>
      <BusinessWebsiteHero />
      <BusinessWebsiteBenefits />
      <WhatsIncluded />
      <BusinessWebsiteProcess />
      <BusinessWebsiteFaqs />
      <BusinessWebsiteFinalCta />
    </main>
  );
}