import type { Metadata } from "next";

import "./globals.css";

import { Header } from "@/components/layout/Header";
import { SiteFooter } from "@/components/layout/Footer";


export const metadata: Metadata = {
  title: {
    default: "Zyncode | Web Design & Development",
    template: "%s | Zyncode",
  },
  description:
    "Web design and development for businesses that want to build trust, improve customer experiences, and grow online.",
  openGraph: {
    type: "website",
    siteName: "Zyncode",
    title: "Zyncode | Web Design & Development",
    description:
      "Web design and development for businesses that want to build trust, improve customer experiences, and grow online.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Header />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}