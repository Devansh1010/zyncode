import type { Metadata } from "next";

import BusinessWebsitesPage from "@/components/sections/business-websites/Business-websites-page";

export const metadata: Metadata = {
  title: "Business Website Development | Zyncode",
  description:
    "Get a professional business website designed around your services, customers, and goals. Explore Zyncode's website design and development services.",
  alternates: {
    canonical: "/services/business-websites",
  },
};

export default function BusinessWebsitesRoute() {
  return <BusinessWebsitesPage />;
}