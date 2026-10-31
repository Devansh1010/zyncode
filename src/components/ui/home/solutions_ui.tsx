export function WebsiteClarityPreview() {
    return (
        <div
            aria-hidden="true"
            className="grid min-w-0 grid-cols-2 gap-3 sm:gap-4"
        >
            {/* Generic website */}
            <div className="min-w-0 border border-ink/10 bg-[#F8F8F6] p-3 sm:p-4">
                <div className="flex items-center justify-between gap-2 border-b border-ink/10 pb-3">
                    <span className="truncate text-[9px] font-medium uppercase tracking-[0.12em] text-[#667085]">
                        Before
                    </span>

                    <span className="size-1.5 shrink-0 rounded-full bg-[#98A2B3]" />
                </div>

                <div className="space-y-3 pt-4">
                    <div className="h-1.5 w-2/5 bg-[#D0D5DD]" />

                    <div className="space-y-1.5">
                        <div className="h-3 w-full bg-[#D0D5DD]" />
                        <div className="h-3 w-4/5 bg-[#D0D5DD]" />
                    </div>

                    <div className="h-16 bg-[#E4E7EC] sm:h-20" />

                    <div className="space-y-1.5">
                        <div className="h-1.5 w-full bg-[#E4E7EC]" />
                        <div className="h-1.5 w-3/4 bg-[#E4E7EC]" />
                    </div>

                    <div className="h-7 w-3/5 border border-[#D0D5DD]" />
                </div>
            </div>

            {/* Clearly positioned website */}
            <div className="min-w-0 border border-brand/20 bg-[#F5F8FF] p-3 sm:p-4">
                <div className="flex items-center justify-between gap-2 border-b border-brand/10 pb-3">
                    <span className="truncate text-[9px] font-medium uppercase tracking-[0.12em] text-brand">
                        After
                    </span>

                    <span className="size-1.5 shrink-0 rounded-full bg-brand" />
                </div>

                <div className="space-y-3 pt-4">
                    <div className="h-1.5 w-2/5 bg-brand/35" />

                    <div className="space-y-1.5">
                        <div className="h-3 w-full bg-ink/80" />
                        <div className="h-3 w-4/5 bg-ink/80" />
                    </div>

                    <div className="flex h-16 items-end bg-[#DCE7FF] p-2 sm:h-20">
                        <div className="h-1.5 w-2/5 bg-brand/60" />
                    </div>

                    <div className="space-y-1.5">
                        <div className="h-1.5 w-full bg-ink/15" />
                        <div className="h-1.5 w-3/4 bg-ink/15" />
                    </div>

                    <div className="flex h-7 w-3/5 items-center justify-center bg-brand px-1">
                        <span className="truncate text-[8px] font-medium text-white">
                            Get in touch
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

const journeySteps = [
    {
        number: "01",
        title: "Discover",
        description: "Find your business",
    },
    {
        number: "02",
        title: "Understand",
        description: "Recognize your value",
    },
    {
        number: "03",
        title: "Trust",
        description: "Feel confident",
    },
    {
        number: "04",
        title: "Enquire",
        description: "Take the next step",
    },
] as const;

export function CustomerJourneyPreview() {
    return (
        <div
            aria-hidden="true"
            className="border border-ink/10 bg-[#FAFAF8] p-4 sm:p-5"
        >
            <div className="flex items-center justify-between gap-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink">
                    The customer journey
                </span>

                <span className="text-[10px] text-[#667085]">
                    Discover to enquire
                </span>
            </div>

            <div className="mt-6 grid grid-cols-4 gap-2">
                {journeySteps.map((step, index) => (
                    <div key={step.number} className="min-w-0">
                        <div className="flex items-center">
                            <span
                                className={[
                                    "flex size-7 shrink-0 items-center justify-center text-[9px] font-semibold",
                                    index === journeySteps.length - 1
                                        ? "bg-brand text-white"
                                        : "border border-ink/15 bg-white text-ink",
                                ].join(" ")}
                            >
                                {step.number}
                            </span>

                            {index < journeySteps.length - 1 && (
                                <span className="h-px min-w-0 flex-1 bg-ink/15" />
                            )}
                        </div>

                        <p className="mt-3 text-[10px] font-semibold leading-tight text-ink sm:text-[12px]">
                            {step.title}
                        </p>

                        <p className="mt-1 text-[9px] leading-relaxed text-[#667085] sm:text-[10px]">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-6 flex items-center justify-between gap-3 border-t border-ink/10 pt-4">
                <p className="text-[10px] leading-relaxed text-[#667085] sm:text-[11px]">
                    Every interaction should make the next step clearer.
                </p>

                <span className="shrink-0 bg-brand/8 px-2.5 py-1.5 text-[9px] font-medium text-brand">
                    Clearer path
                </span>
            </div>
        </div>
    );
}

export function WebsiteRedesignPreview() {
    return (
        <div
            aria-hidden="true"
            className="grid min-w-0 grid-cols-2 gap-3 sm:gap-4"
        >
            {/* Existing website */}
            <div className="min-w-0 border border-ink/10 bg-[#F4F4F2] p-3 sm:p-4">
                <div className="flex items-center justify-between gap-2 border-b border-ink/10 pb-3">
                    <span className="truncate text-[9px] font-medium uppercase tracking-widest text-[#667085]">
                        Existing
                    </span>

                    <span className="text-[9px] text-[#667085]">01</span>
                </div>

                <div className="space-y-3 pt-4">
                    <div className="flex items-center gap-2">
                        <span className="size-4 shrink-0 bg-[#D0D5DD]" />
                        <div className="h-1.5 w-2/5 bg-[#D0D5DD]" />
                    </div>

                    <div className="space-y-1.5 pt-2">
                        <div className="h-2.5 w-full bg-[#BFC4CC]" />
                        <div className="h-2.5 w-4/5 bg-[#BFC4CC]" />
                        <div className="h-2.5 w-3/5 bg-[#BFC4CC]" />
                    </div>

                    <div className="h-14 bg-[#E0E2E5] sm:h-16" />

                    <div className="space-y-1.5">
                        <div className="h-1.5 w-full bg-[#D0D5DD]" />
                        <div className="h-1.5 w-4/5 bg-[#D0D5DD]" />
                        <div className="h-1.5 w-3/5 bg-[#D0D5DD]" />
                    </div>

                    <div className="h-6 w-2/3 border border-[#C5C9D0]" />
                </div>
            </div>

            {/* Redesigned website */}
            <div className="min-w-0 border border-brand/20 bg-white p-3 sm:p-4">
                <div className="flex items-center justify-between gap-2 border-b border-ink/10 pb-3">
                    <span className="truncate text-[9px] font-medium uppercase tracking-widest text-brand">
                        Redesigned
                    </span>

                    <span className="text-[9px] text-brand">02</span>
                </div>

                <div className="space-y-3 pt-4">
                    <div className="flex items-center justify-between gap-2">
                        <div className="h-1.5 w-2/5 bg-ink/70" />
                        <div className="h-1.5 w-1/4 bg-ink/15" />
                    </div>

                    <div className="space-y-1.5 pt-2">
                        <div className="h-3 w-full bg-ink/80" />
                        <div className="h-3 w-4/5 bg-ink/80" />
                    </div>

                    <div className="flex h-14 items-end bg-[#E5ECFF] p-2 sm:h-16">
                        <div className="h-1.5 w-2/5 bg-brand" />
                    </div>

                    <div className="space-y-1.5">
                        <div className="h-1.5 w-full bg-ink/15" />
                        <div className="h-1.5 w-4/5 bg-ink/15" />
                    </div>

                    <div className="flex h-6 w-2/3 items-center justify-center bg-brand">
                        <span className="text-[8px] font-medium text-white">
                            Contact us
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

const workflowStages = [
    {
        number: "01",
        title: "New enquiry",
        description: "Request received",
        status: "NEW",
    },
    {
        number: "02",
        title: "In progress",
        description: "Work is underway",
        status: "ACTIVE",
    },
    {
        number: "03",
        title: "Completed",
        description: "Ready for review",
        status: "DONE",
    },
] as const;

export function WorkflowPreview() {
    return (
        <div
            aria-hidden="true"
            className="border border-ink/10 bg-[#FAFAF8] p-4 sm:p-5"
        >
            <div className="flex items-center justify-between gap-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink">
                    A connected workflow
                </span>

                <span className="text-[10px] text-[#667085]">One system</span>
            </div>

            <div className="mt-5 space-y-2">
                {workflowStages.map((stage, index) => (
                    <div
                        key={stage.number}
                        className={[
                            "flex min-w-0 items-center gap-3 border p-3",
                            index === 1
                                ? "border-brand/25 bg-[#F5F8FF]"
                                : "border-ink/10 bg-white",
                        ].join(" ")}
                    >
                        <span
                            className={[
                                "flex size-8 shrink-0 items-center justify-center text-[10px] font-semibold",
                                index === 1
                                    ? "bg-brand text-white"
                                    : "bg-[#F2F4F7] text-[#475467]",
                            ].join(" ")}
                        >
                            {stage.number}
                        </span>

                        <div className="min-w-0 flex-1">
                            <p className="truncate text-[11px] font-semibold text-ink sm:text-[12px]">
                                {stage.title}
                            </p>

                            <p className="mt-1 truncate text-[10px] text-[#667085]">
                                {stage.description}
                            </p>
                        </div>

                        <span
                            className={[
                                "shrink-0 text-[8px] font-semibold tracking-[0.08em]",
                                index === 1 ? "text-brand" : "text-[#667085]",
                            ].join(" ")}
                        >
                            {stage.status}
                        </span>
                    </div>
                ))}
            </div>

            <div className="mt-4 flex items-center gap-2 border-t border-ink/10 pt-4">
                <span className="size-1.5 shrink-0 rounded-full bg-brand" />

                <p className="text-[10px] leading-relaxed text-[#667085] sm:text-[11px]">
                    Less manual coordination. A clearer view of the work.
                </p>
            </div>
        </div>
    );
}

import type { SolutionVisualType } from "@/constants/solutions";

type SolutionVisualProps = {
    type: SolutionVisualType;
};

export function SolutionVisual({
    type,
}: SolutionVisualProps) {
    switch (type) {
        case "clarity":
            return <WebsiteClarityPreview />;

        case "journey":
            return <CustomerJourneyPreview />;

        case "redesign":
            return <WebsiteRedesignPreview />;

        case "workflow":
            return <WorkflowPreview />;
    }
}

import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";

import type { Solution } from "@/constants/solutions";


type SolutionCardProps = {
    solution: Solution;
    index: number;
};

export default function SolutionCard({
    solution,
    index,
}: SolutionCardProps) {
    const isLeftColumn = index % 2 === 0;
    const isFirstRow = index < 2;

    return (
        <article
            className={[
                "flex min-w-0 flex-col py-9 sm:py-11 lg:py-14",
                isLeftColumn
                    ? "md:border-r md:border-ink/15 md:pr-7 lg:pr-12"
                    : "md:pl-7 lg:pl-12",
                isFirstRow ? "md:border-b md:border-ink/15" : "",
                index > 0 ? "border-t border-ink/15 md:border-t-0" : "",
            ].join(" ")}
        >
            {/* Number and category */}
            <div className="flex items-center justify-between gap-4">
                <span className="text-[11px] font-semibold tabular-nums tracking-[0.12em] text-brand">
                    {solution.number}
                </span>

                <span className="text-right text-[9px] font-medium tracking-[0.12em] text-[#667085] sm:text-[10px]">
                    {solution.category}
                </span>
            </div>

            {/* Heading and description */}
            <div className="mt-6 max-w-125 sm:mt-7">
                <h3 className="text-[25px] font-medium leading-[1.16] tracking-[-0.045em] text-ink sm:text-[30px] lg:text-[34px]">
                    {solution.title}
                </h3>

                <p className="mt-4 text-[14px] leading-[1.9] text-[#667085] sm:text-[15px]">
                    {solution.description}
                </p>
            </div>

            {/* Illustration */}
            <div className="mt-7 sm:mt-8">
                <SolutionVisual type={solution.visual} />
            </div>

            {/* Practical outcomes */}
            <ul className="mt-7 space-y-3 sm:mt-8">
                {solution.outcomes.map((outcome) => (
                    <li
                        key={outcome}
                        className="flex items-start gap-3 text-[13px] leading-[1.7] text-[#475467] sm:text-[14px]"
                    >
                        <span className="mt-0.5 flex size-4.5 shrink-0 items-center justify-center rounded-full bg-brand/8 text-brand">
                            <Check size={11} strokeWidth={2.5} aria-hidden="true" />
                        </span>

                        <span>{outcome}</span>
                    </li>
                ))}
            </ul>

            {/* Contextual link */}
            <div className="mt-auto pt-7 sm:pt-8">
                <div className="border-t border-ink/10 pt-5">
                    <Link
                        href={solution.href}
                        className="group inline-flex min-h-10 items-center gap-2 text-[12px] font-semibold text-ink transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-4 sm:text-[13px]"
                    >
                        {solution.linkLabel}

                        <ChevronRight
                            size={15}
                            aria-hidden="true"
                            className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
                        />
                    </Link>
                </div>
            </div>
        </article>
    );
}