
import {
    Search,
    ScanSearch,
    Route,
    CheckCheck,
    ArrowUpRight,
} from "lucide-react";

import Link from "next/link";

const steps = [
    {
        number: "01",
        title: "Understand your business first.",
        subtitle: "Discovery before design",
        description:
            "We learn about your business, services, customers, and goals. We explore what makes your business different, what your customers need, and what your website should actually help you achieve.",
        outcome: "A clear understanding of your business and audience.",
        icon: Search,
    },
    {
        number: "02",
        title: "Find what's holding you back.",
        subtitle: "Problem diagnosis",
        description:
            "We examine your current website from your customers' perspective. We identify confusing messaging, trust gaps, navigation problems, and friction that may prevent visitors from taking the next step.",
        outcome: "A prioritized list of problems worth solving.",
        icon: ScanSearch,
    },
    {
        number: "03",
        title: "Plan the experience around the problem.",
        subtitle: "Strategy before screens",
        description:
            "We map the information, content, page structure, and customer journey needed to address those problems. Every important section gets a purpose instead of being added just to fill a page.",
        outcome: "A purposeful structure and design direction.",
        icon: Route,
    },
    {
        number: "04",
        title: "Redesign, refine, and validate.",
        subtitle: "Thoughtful execution",
        description:
            "We bring the strategy to life through considered visual design, responsive development, and practical testing. We refine the experience so it works across devices and makes the next step clearer for your customers.",
        outcome: "A website designed around your business goals.",
        icon: CheckCheck,
    },
];

export function WebsiteRedesignApproach() {
    return (
        <section className="relative bg-page px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
            <div className="mx-auto w-full max-w-7xl">
                {/* Section introduction */}
                <div className="mb-16 grid gap-8 lg:mb-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-px w-8 bg-brand" />
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                                Our Approach
                            </p>
                        </div>

                        <h2 className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-ink sm:text-5xl lg:text-6xl">
                            Before we redesign,
                            <span className="block text-ink/45">
                                we understand.
                            </span>
                        </h2>
                    </div>

                    <div className="max-w-xl lg:ml-auto">
                        <p className="text-base leading-8 text-ink/70 sm:text-lg">
                            A better-looking website isn&apos;t always a better website.
                            We start by understanding what&apos;s not working, why it
                            matters to your customers, and what needs to change.
                        </p>

                        <p className="mt-4 text-base leading-8 text-ink/70 sm:text-lg">
                            That understanding guides every decision—from your
                            messaging and page structure to the smallest interaction.
                            So the redesign solves a real problem, not just changes
                            how things look.
                        </p>
                    </div>
                </div>

                {/* Four-step journey */}
                <div className="relative">
                    {/* Static decorative curve — desktop only */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 hidden lg:block"
                    >
                        <svg
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            className="h-full w-full"
                            fill="none"
                        >
                            <path
                                d="M50 0 C44 8 56 17 50 25 S44 42 50 50 S56 67 50 75 S44 92 50 100"
                                stroke="currentColor"
                                strokeWidth="0.25"
                                vectorEffect="non-scaling-stroke"
                                className="text-ink/20"
                            />
                        </svg>
                    </div>

                    <div className="relative">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const isLeft = index % 2 === 0;

                            return (
                                <article
                                    key={step.number}
                                    className="relative grid gap-5 border-b border-ink/10 py-9 first:pt-0 last:border-b-0 last:pb-0 lg:min-h-57.5 lg:grid-cols-[1fr_72px_1fr] lg:items-center lg:gap-8 lg:py-10"
                                >
                                    <div
                                        className={
                                            isLeft
                                                ? "lg:col-start-1 lg:row-start-1 lg:pr-8"
                                                : "lg:col-start-3 lg:row-start-1 lg:pl-8"
                                        }
                                    >
                                        <div className="border-l border-ink/10 pl-5 sm:pl-7">
                                            <div className="mb-5 flex items-center gap-3">
                                                <span className="flex h-11 w-11 rounded-full items-center justify-center border border-brand/20 bg-surface text-brand">
                                                    <Icon
                                                        aria-hidden="true"
                                                        className="h-5 w-5"
                                                        strokeWidth={1.6}
                                                    />
                                                </span>

                                                <span className="text-xs font-semibold tracking-[0.16em] text-brand">
                                                    STEP {step.number}
                                                </span>
                                            </div>

                                            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink/45">
                                                {step.subtitle}
                                            </p>

                                            <h3 className="max-w-md text-2xl font-semibold leading-tight tracking-[-0.035em] text-ink sm:text-3xl">
                                                {step.title}
                                            </h3>

                                            <p className="mt-4 max-w-lg text-sm leading-7 text-ink/65 sm:text-base sm:leading-8">
                                                {step.description}
                                            </p>

                                            <div className="mt-5 flex items-start gap-2.5">
                                                <CheckCheck
                                                    aria-hidden="true"
                                                    className="mt-1 h-4 w-4 shrink-0 text-brand"
                                                />

                                                <p className="text-sm leading-6 text-ink/80">
                                                    {step.outcome}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Center waypoint */}
                             

                                    {/* Empty opposing column */}
                                    <div
                                        aria-hidden="true"
                                        className={
                                            isLeft
                                                ? "hidden lg:col-start-3 lg:row-start-1 lg:block"
                                                : "hidden lg:col-start-1 lg:row-start-1 lg:block"
                                        }
                                    />
                                </article>
                            );
                        })}
                    </div>
                </div>

                {/* Closing statement */}
                <div className="mt-12 border-t border-ink/10 pt-7 sm:mt-16 sm:pt-9">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <p className="max-w-2xl text-lg font-medium leading-8 tracking-[-0.02em] text-ink sm:text-xl">
                            Every design decision has a reason.
                            <span className="text-ink/45">
                                {" "}Every change starts with understanding.
                            </span>
                        </p>

                        <Link
                            href="#contact"
                            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-ink"
                        >
                            Discuss your redesign
                            <ArrowUpRight
                                aria-hidden="true"
                                className="h-4 w-4"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
