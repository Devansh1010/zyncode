import Link from "next/link";
import {
    ArrowDownRight,
    ArrowUpRight,
} from "lucide-react";

import {
    InstagramIcon,
    LinkedInIcon,
} from "@/components/layout/social-icons";

import { BrandWordmark } from "@/components/layout/brand-wordmark";
import { SiteContainer } from "@/components/layout/site-container";

const serviceLinks = [
    {
        label: "Website Development",
        href: "/website-development-ahmedabad",
    },
    {
        label: "Custom Web Applications",
        href: "/custom-web-application-development",
    },
    {
        label: "Website Redesign",
        href: "/website-redesign",
    },
    {
        label: "Website Maintenance",
        href: "/website-maintenance",
    },
] as const;

const studioLinks = [
    { label: "Our Work", href: "/our-work" },
    { label: "Pricing", href: "/pricing" },
    { label: "About Zyncode", href: "/about" },
    { label: "Contact", href: "/contact" },
] as const;

const socialLinks = [
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/",
        icon: LinkedInIcon,
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/",
        icon: InstagramIcon,
    },
] as const;

const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Refund Policy", href: "/refund-policy" },
] as const;

const footerLinkClassName = [
    "group inline-flex w-fit items-center gap-1.5",
    "text-sm text-muted-foreground",
    "transition-colors duration-200",
    "hover:text-foreground",
    "focus-visible:outline-none",
    "focus-visible:ring-2 focus-visible:ring-ring",
    "focus-visible:ring-offset-4 focus-visible:ring-offset-background",
].join(" ");

export function SiteFooter() {
    return (
        <footer className="border-t border-border bg-muted/30">
            <SiteContainer>
                {/* Main footer */}
                <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.9fr_0.9fr] lg:gap-16 lg:py-20">
                    {/* Brand and positioning */}
                    <div className="flex flex-col items-start">
                        <BrandWordmark className="text-2xl" />

                        <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">
                            Digital experiences built around your business,
                            your customers, and the way you want to grow.
                        </p>

                        <Link
                            href="/contact"
                            className="group mt-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-background px-4 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                            Start a conversation
                            <ArrowUpRight
                                aria-hidden="true"
                                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </Link>

                        {/* Horizontal social links */}
                        <div className="mt-8">
                            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                                Find us online
                            </p>

                            <nav aria-label="Social media">
                                <ul className="flex items-center gap-2">
                                    {socialLinks.map(({ label, href, icon: Icon }) => (
                                        <li key={label}>
                                            <a
                                                href={href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${label} (opens in a new tab)`}
                                                title={label}
                                                className={[
                                                    "inline-flex size-10 items-center justify-center",
                                                    "rounded-full border border-border bg-background",
                                                    "text-muted-foreground",
                                                    "transition-all duration-200",
                                                    "hover:-translate-y-0.5 hover:border-primary",
                                                    "hover:text-primary hover:shadow-sm",
                                                    "focus-visible:outline-none",
                                                    "focus-visible:ring-2 focus-visible:ring-ring",
                                                    "focus-visible:ring-offset-2",
                                                ].join(" ")}
                                            >
                                                <Icon aria-hidden="true" className="size-4.5" />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>

                    {/* Services */}
                    <nav aria-label="Footer services">
                        <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
                            What we do
                        </h2>

                        <ul className="mt-5 space-y-4">
                            {serviceLinks.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className={footerLinkClassName}>
                                        <span>{item.label}</span>
                                        <ArrowUpRight
                                            aria-hidden="true"
                                            className="size-3.5 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Studio */}
                    <nav aria-label="Footer studio links">
                        <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
                            Explore
                        </h2>

                        <ul className="mt-5 space-y-4">
                            {studioLinks.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className={footerLinkClassName}>
                                        <span>{item.label}</span>
                                        <ArrowUpRight
                                            aria-hidden="true"
                                            className="size-3.5 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Bottom legal and copyright bar */}
                <div className="flex flex-col gap-5 border-t border-border py-6 lg:flex-row lg:items-center lg:justify-between">
                    <p className="text-xs leading-5 text-muted-foreground">
                        © {new Date().getFullYear()} Zyncode. All rights reserved.
                    </p>

                    <nav aria-label="Legal information">
                        <ul className="flex flex-wrap items-center gap-x-5 gap-y-3">
                            {legalLinks.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-xs font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <Link
                        href="/"
                        aria-label="Back to top — Zyncode homepage"
                        className="inline-flex w-fit items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
                    >
                        Back to top
                        <ArrowDownRight aria-hidden="true" className="size-3.5 -rotate-90" />
                    </Link>
                </div>
            </SiteContainer>
        </footer>
    );
}
