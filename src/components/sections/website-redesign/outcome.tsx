import Image from "next/image";
import {
    ArrowUpRight,
    Check,
    MousePointer2,
    ShieldCheck,
    Smartphone,
    Sparkles,
} from "lucide-react";

import TalkToUsWpBtn from "@/components/layout/TalkToUsWpBtn";

const outcomes = [
    {
        number: "01",
        title: "Your value becomes easier to understand.",
        description:
            "Clear messaging and purposeful content help visitors quickly understand what you offer, who you help, and why it matters.",
        result: "Clearer communication",
        icon: Sparkles,
    },
    {
        number: "02",
        title: "Your business makes a stronger impression.",
        description:
            "Consistent visual design, relevant information, and meaningful proof help your website reflect the quality of your business.",
        result: "Greater perceived credibility",
        icon: ShieldCheck,
    },
    {
        number: "03",
        title: "Visitors know what to do next.",
        description:
            "Intuitive navigation and strategically placed calls to action make it easier for interested visitors to contact you.",
        result: "A clearer enquiry journey",
        icon: MousePointer2,
    },
    {
        number: "04",
        title: "Your website becomes easier to evolve.",
        description:
            "A flexible and maintainable technical foundation gives your business room to improve and expand its online presence.",
        result: "Long-term flexibility",
        icon: Smartphone,
    },
];

export function WebsiteRedesignOutcomes() {
    return (
        <section className="overflow-hidden bg-surface px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
            <div className="mx-auto max-w-7xl">
                {/* Section heading */}
                <div className="mb-16 grid gap-8 lg:mb-24 lg:grid-cols-[1fr_0.7fr] lg:items-end">
                    <div className="max-w-3xl">
                        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                            The Difference It Makes
                        </p>

                        <h2 className="text-4xl font-semibold leading-[1.1] tracking-[-0.045em] text-ink sm:text-5xl lg:text-6xl">
                            A website that works as hard as your business does.
                        </h2>
                    </div>

                    <p className="max-w-lg text-base leading-8 text-ink/65 lg:justify-self-end">
                        A redesign should do more than change how your website looks.
                        It should improve how people experience your business, understand
                        your value, and decide to work with you.
                    </p>
                </div>

                {/* Main content */}
                <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
                    {/* Outcomes */}
                    <div className="divide-y divide-ink/10">
                        {outcomes.map((outcome) => {
                            const Icon = outcome.icon;

                            return (
                                <article
                                    key={outcome.number}
                                    className="group py-7 first:pt-0 last:pb-0"
                                >
                                    <div className="flex items-start gap-4">
                                        <span className="pt-1 text-xs font-medium tabular-nums text-subtle">
                                            {outcome.number}
                                        </span>

                                        <div className="min-w-0 flex-1">
                                            <h3 className="text-xl font-semibold leading-snug tracking-tight text-ink sm:text-2xl">
                                                {outcome.title}
                                            </h3>

                                            <p className="mt-3 max-w-lg text-sm leading-7 text-ink/60 sm:text-base">
                                                {outcome.description}
                                            </p>

                                            <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand">
                                                <Icon size={16} strokeWidth={1.8} />
                                                {outcome.result}
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                    {/* Visual showcase */}
                    <div className="relative min-w-0">
                        <div className="sticky top-24">
                            <div className="relative overflow-hidden rounded-2xl border border-ink/10 bg-page p-3 shadow-[0_24px_80px_-35px_rgba(16,24,40,0.22)] sm:p-5">
                                {/* Browser header */}
                                <div className="flex items-center justify-between border-b border-ink/10 pb-4">
                                    <div className="flex items-center gap-1.5">
                                        <span className="size-2.5 rounded-full bg-ink/15" />
                                        <span className="size-2.5 rounded-full bg-ink/15" />
                                        <span className="size-2.5 rounded-full bg-ink/15" />
                                    </div>

                                    <div className="rounded-md border border-ink/10 bg-white px-5 py-1.5 text-[10px] text-ink/45 sm:text-xs">
                                        www.yourbusiness.com
                                    </div>

                                    <span className="text-xs text-ink/35">↗</span>
                                </div>

                                {/* Website preview */}
                                <div className="relative mt-3 overflow-hidden rounded-lg bg-white">
                                    {/* Website navigation */}
                                    <div className="flex items-center justify-between border-b border-ink/5 px-4 py-4 sm:px-7">
                                        <div className="text-sm font-bold tracking-tight text-ink sm:text-base">
                                            BRAND<span className="text-brand">.</span>
                                        </div>

                                        <div className="hidden items-center gap-5 text-[10px] font-medium text-ink/55 sm:flex">
                                            <span>About</span>
                                            <span>Services</span>
                                            <span>Our Work</span>
                                            <span>Contact</span>
                                        </div>

                                        <div className="rounded-md bg-brand px-3 py-2 text-[9px] font-medium text-white sm:text-[10px]">
                                            Get in touch
                                        </div>
                                    </div>

                                    {/* Website hero */}
                                    <div className="grid min-h-77.5 grid-cols-1 sm:grid-cols-[1fr_0.85fr]">
                                        <div className="flex flex-col justify-center px-5 py-9 sm:px-7 sm:py-12">
                                            <span className="mb-4 text-[9px] font-semibold uppercase tracking-[0.16em] text-brand sm:text-[10px]">
                                                Thoughtful solutions for your business
                                            </span>

                                            <h3 className="max-w-xs text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-ink sm:text-4xl">
                                                Make your next move with confidence.
                                            </h3>

                                            <p className="mt-4 max-w-xs text-[10px] leading-5 text-ink/55 sm:text-xs sm:leading-6">
                                                Discover a better way to achieve your goals with
                                                solutions designed around your needs.
                                            </p>

                                            <div className="mt-6 flex items-center gap-3">
                                                <span className="inline-flex items-center gap-2 rounded-md bg-brand px-3 py-2.5 text-[9px] font-medium text-white sm:text-[10px]">
                                                    Explore our services
                                                    <ArrowUpRight size={12} />
                                                </span>
                                            </div>
                                        </div>

                                        <div className="relative min-h-45 overflow-hidden bg-[#E9E7DF]">
                                            <Image
                                                src="/images/services/redesign-hero
                                                .jpeg"
                                                alt="Professional business environment illustrating a refined website experience"
                                                fill
                                                sizes="(max-width: 640px) 100vw, 40vw"
                                                className="object-cover"
                                            />

                                            <div className="absolute inset-0 bg-ink/5" />
                                        </div>
                                    </div>

                                    {/* Trust indicators */}
                                    <div className="grid grid-cols-3 border-t border-ink/10 bg-[#FAFAF8]">
                                        {[
                                            "Clear messaging",
                                            "Built on trust",
                                            "Easy to navigate",
                                        ].map((item) => (
                                            <div
                                                key={item}
                                                className="flex items-center justify-center gap-1.5 border-r border-ink/10 px-2 py-4 last:border-r-0"
                                            >
                                                <Check
                                                    size={11}
                                                    className="shrink-0 text-brand"
                                                />
                                                <span className="text-center text-[8px] font-medium text-ink/65 sm:text-[10px]">
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Visual annotation */}
                                <div className="mt-4 flex items-center justify-between gap-3">
                                    <div>
                                        <p className="text-[10px] font-semibold text-ink">
                                            Designed around your customers
                                        </p>
                                        <p className="mt-1 text-[9px] text-ink/45">
                                            A more purposeful website experience
                                        </p>
                                    </div>

                                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                                        <ArrowUpRight size={17} />
                                    </div>
                                </div>
                            </div>

                            {/* Floating outcome label */}
                            <div className="absolute -bottom-6 -left-2 hidden max-w-52.5 rounded-xl border border-ink/10 bg-white p-4 shadow-xl sm:block lg:-left-8">
                                <div className="flex items-center gap-2">
                                    <div className="flex size-8 items-center justify-center rounded-full bg-brand/10 text-brand">
                                        <Check size={15} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-ink">
                                            Better user experience
                                        </p>
                                        <p className="mt-0.5 text-[10px] text-ink/45">
                                            Every detail has a purpose.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Closing CTA */}
                <div className="mt-24 overflow-hidden rounded-2xl bg-ink px-7 py-10 sm:mt-32 sm:px-10 sm:py-10 lg:px-12">
                    <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
                        <div className="max-w-2xl">
                            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
                                Ready for a better website?
                            </p>

                            <h3 className="text-2xl font-medium leading-snug tracking-tight text-white sm:text-3xl">
                                Not just a different-looking website.
                                <span className="text-white/45">
                                    {" "}A better experience for the people who matter to your business.
                                </span>
                            </h3>

                        </div>

                        <div className="flex justify-center items-center gap-2">
                            <TalkToUsWpBtn />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}