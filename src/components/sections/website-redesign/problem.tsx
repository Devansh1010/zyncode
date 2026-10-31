
import {
    MessageSquareWarning,
    PanelsTopLeft,
    Wrench,
} from "lucide-react";

const problems = [
    {
        number: "01",
        icon: MessageSquareWarning,
        title: "Visitors struggle to understand your value.",
        description:
            "Your services may be excellent, but unclear messaging, buried information, or an outdated presentation makes it harder for potential customers to understand why they should choose you.",
    },
    {
        number: "02",
        icon: PanelsTopLeft,
        title: "Your website doesn't build enough confidence.",
        description:
            "Inconsistent design, dated visuals, or an experience that feels difficult to navigate can leave visitors questioning the quality of your business before they ever speak to you.",
    },
    {
        number: "03",
        icon: Wrench,
        title: "Your website gets in the way of growth.",
        description:
            "Slow pages, frustrating mobile experiences, or a website that's difficult to update can hold your business back when your services, customers, and goals evolve.",
    },
];

export function WhyRedesignWebsite() {
    return (
        <section className="flex min-h-svh items-center bg-surface px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
            <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
                {/* Left: Section introduction */}
                <div className="max-w-xl">
                    <div className="mb-7 flex items-center gap-3">
                        <p className="text-xs font-semibold uppercase tracking-widest text-brand">
                            The Problem
                        </p>
                    </div>

                    <h2 className="text-4xl font-semibold leading-[1.1] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
                        Why Redesign
                        <span className="mt-1 block text-ink/45">
                            Your Website?
                        </span>
                    </h2>

                    <p className="mt-7 max-w-lg text-base leading-8 text-ink/65 sm:text-lg">
                        Your website might have served you well when you first launched.
                        But as your business grows, customer expectations change and your
                        services evolve, the same website can start holding you back.
                    </p>
                </div>

                {/* Right: Three recognizable problems */}
                <div className="">
                    {problems.map((problem) => {
                        const Icon = problem.icon;

                        return (
                            <article
                                key={problem.number}
                                className="group grid grid-cols-[44px_1fr] gap-4 border-b border-ink/10 py-7 sm:grid-cols-[52px_1fr] sm:gap-6 sm:py-8"
                            >
                                <div className="flex h-11 w-11
                                rounded-full items-center justify-center border bg-page transition-colors duration-200 border-brand/30 text-brand sm:h-12 sm:w-12">
                                    <Icon
                                        aria-hidden="true"
                                        className="h-5 w-5"
                                        strokeWidth={1.6}
                                    />
                                </div>

                                <div>

                                    <h3 className="text-lg font-semibold leading-snug tracking-[-0.02em] text-ink sm:text-xl">
                                        {problem.title}
                                    </h3>

                                    <p className="mt-3 max-w-xl text-sm leading-7 text-ink/65 sm:text-base">
                                        {problem.description}
                                    </p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
