import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    Check,
    ChevronRight,
    LayoutGrid,
    MessageCircle,
} from "lucide-react";

const solutions = [
    {
        number: "01",
        category: "BUSINESS WEBSITES",
        title: "Give customers a reason to choose you.",
        description:
            "We shape your website around what makes your business different, making your services, strengths, and value easier for customers to understand.",
        outcomes: [
            "Clear messaging that explains what you offer",
            "A visual identity that reflects your business",
            "Information organized around your customers",
        ],
        linkLabel: "Explore business websites",
        href: "/website-development-ahmedabad",
        visual: "clarity",
    },
    {
        number: "02",
        category: "CUSTOMER EXPERIENCE",
        title: "Turn interest into a clear next step.",
        description:
            "We design customer journeys that help visitors find the information they need, build confidence in your business, and know how to contact you or take action.",
        outcomes: [
            "Clear paths to enquiries and contact",
            "Important information where customers expect it",
            "Convenient experiences across devices",
        ],
        linkLabel: "Explore website improvements",
        href: "/website-redesign",
        visual: "journey",
    },
    {
        number: "03",
        category: "WEBSITE REDESIGN",
        title: "Make your website reflect the business you've become.",
        description:
            "Whether you need a new website or an existing one needs improvement, we bring your design, messaging, and user experience closer to the quality of your business today.",
        outcomes: [
            "A more consistent, professional presentation",
            "Better mobile usability and information flow",
            "Improvements based on your current needs",
        ],
        linkLabel: "Explore redesign services",
        href: "/website-redesign",
        visual: "redesign",
    },
    {
        number: "04",
        category: "CUSTOM WEB APPLICATIONS",
        title: "Replace unnecessary manual work with better tools.",
        description:
            "When off-the-shelf tools or repetitive manual processes no longer fit the way you work, we can build digital applications around your actual workflows.",
        outcomes: [
            "Workflows tailored to your requirements",
            "Information organized in one appropriate place",
            "Fewer repetitive steps where automation makes sense",
        ],
        linkLabel: "Explore custom applications",
        href: "/custom-web-application-development",
        visual: "workflow",
    },
] as const;

function WebsiteClarityPreview() {
    return (
        <div
            aria-hidden="true"
            className="overflow-hidden rounded-md border border-[#101828]/10 bg-white shadow-[0_18px_50px_-28px_rgba(16,24,40,0.28)]"
        >
            <div className="flex h-8 items-center gap-1.5 border-b border-[#101828]/[0.07] bg-[#FBFAF8] px-3">
                <span className="size-1.5 rounded-full bg-[#E5A39B]" />
                <span className="size-1.5 rounded-full bg-[#E8C778]" />
                <span className="size-1.5 rounded-full bg-[#91C8A6]" />

                <div className="mx-auto flex h-4 w-[42%] items-center justify-center rounded-sm bg-[#101828]/[0.04]">
                    <span className="text-[7px] text-[#94A3B8]">
                        yourbusiness.com
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-[1.1fr_0.9fr] gap-3 p-4 sm:gap-5 sm:p-6">
                <div className="flex flex-col justify-center">
                    <div className="mb-3 h-1 w-12 rounded-full bg-[#2563EB]/60" />

                    <div className="space-y-1.5">
                        <div className="h-2.5 w-full rounded-sm bg-[#101828]" />
                        <div className="h-2.5 w-[84%] rounded-sm bg-[#101828]" />
                    </div>

                    <div className="mt-3 space-y-1.5">
                        <div className="h-1 w-full rounded-full bg-[#101828]/10" />
                        <div className="h-1 w-[90%] rounded-full bg-[#101828]/10" />
                        <div className="h-1 w-[68%] rounded-full bg-[#101828]/10" />
                    </div>

                    <div className="mt-4 flex w-fit items-center gap-2 rounded-sm bg-[#101828] px-3 py-2">
                        <span className="text-[8px] font-medium text-white">
                            Our services
                        </span>
                        <ArrowUpRight size={10} className="text-white" />
                    </div>
                </div>

                <div className="relative min-h-[130px] overflow-hidden bg-[#E5E9E0] sm:min-h-[175px]">
                    <div className="absolute right-[-12%] top-[-12%] size-28 rounded-full bg-[#C6D0BC]" />
                    <div className="absolute bottom-0 left-[10%] h-[72%] w-[70%] bg-[#F4F1E8]" />
                    <div className="absolute bottom-0 left-[28%] h-[54%] w-[42%] bg-[#B4C0A8]" />
                    <div className="absolute bottom-0 right-[9%] h-[38%] w-[25%] bg-[#7D9176]" />
                    <div className="absolute left-[34%] top-[31%] h-[28%] w-[26%] border-2 border-white/90" />
                </div>
            </div>

            <div className="flex items-center justify-between border-t border-[#101828]/[0.07] px-4 py-3 sm:px-6">
                <span className="text-[9px] font-medium text-[#475467]">
                    A clearer way to communicate your value
                </span>
                <ArrowUpRight size={13} className="text-[#2563EB]" />
            </div>
        </div>
    );
}

function CustomerJourneyPreview() {
    return (
        <div
            aria-hidden="true"
            className="rounded-md border border-[#101828]/10 bg-white p-4 shadow-[0_18px_50px_-28px_rgba(16,24,40,0.25)] sm:p-6"
        >
            <div className="flex items-center justify-between gap-3 border-b border-[#101828]/[0.07] pb-4">
                <div>
                    <div className="h-2 w-24 rounded-full bg-[#101828]" />
                    <div className="mt-2 h-1 w-32 rounded-full bg-[#101828]/10" />
                </div>

                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#EAF0FF] text-[#2563EB]">
                    <MessageCircle size={15} />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3 py-5">
                <div className="rounded-sm bg-[#F7F6F2] p-3">
                    <div className="mb-3 flex size-7 items-center justify-center rounded-sm bg-white text-[#667085]">
                        <LayoutGrid size={14} />
                    </div>
                    <div className="h-1.5 w-[90%] rounded-full bg-[#101828]/25" />
                    <div className="mt-2 h-1 w-full rounded-full bg-[#101828]/10" />
                    <div className="mt-1.5 h-1 w-[72%] rounded-full bg-[#101828]/10" />
                </div>

                <div className="rounded-sm border border-[#2563EB]/20 bg-[#2563EB]/[0.035] p-3">
                    <div className="mb-3 flex size-7 items-center justify-center rounded-sm bg-[#2563EB] text-white">
                        <ArrowUpRight size={14} />
                    </div>
                    <div className="h-1.5 w-[90%] rounded-full bg-[#101828]/25" />
                    <div className="mt-2 h-1 w-full rounded-full bg-[#101828]/10" />
                    <div className="mt-1.5 h-1 w-[72%] rounded-full bg-[#101828]/10" />
                </div>
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-[#101828]/[0.07] pt-4">
                <div>
                    <p className="text-[10px] font-semibold text-[#101828]">
                        Ready to get in touch?
                    </p>
                    <p className="mt-1 text-[9px] text-[#667085]">
                        Make the next step easy to find.
                    </p>
                </div>

                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#101828] text-white">
                    <ArrowRight size={14} />
                </div>
            </div>
        </div>
    );
}

function RedesignPreview() {
    return (
        <div
            aria-hidden="true"
            className="grid grid-cols-2 gap-3 sm:gap-4"
        >
            <div>
                <div className="mb-2 flex items-center justify-between">
                    <span className="text-[9px] font-medium text-[#667085]">
                        BEFORE
                    </span>
                    <span className="size-1.5 rounded-full bg-[#94A3B8]" />
                </div>

                <div className="overflow-hidden border border-[#101828]/10 bg-white">
                    <div className="border-b border-[#101828]/[0.06] px-2 py-3 sm:px-3">
                        <div className="h-1.5 w-10 rounded-full bg-[#101828]/30" />
                        <div className="mt-3 h-2 w-full bg-[#101828]/15" />
                        <div className="mt-1.5 h-2 w-[76%] bg-[#101828]/15" />
                        <div className="mt-3 h-1 w-full bg-[#101828]/10" />
                        <div className="mt-1 h-1 w-[82%] bg-[#101828]/10" />
                    </div>

                    <div className="grid grid-cols-2 gap-1.5 p-2">
                        <div className="h-12 bg-[#D9D9D6] sm:h-16" />
                        <div className="h-12 bg-[#E8E7E2] sm:h-16" />
                    </div>

                    <div className="px-2 pb-3">
                        <div className="h-1 w-full bg-[#101828]/10" />
                        <div className="mt-1 h-1 w-[70%] bg-[#101828]/10" />
                    </div>
                </div>
            </div>

            <div>
                <div className="mb-2 flex items-center justify-between">
                    <span className="text-[9px] font-medium text-[#2563EB]">
                        REIMAGINED
                    </span>
                    <span className="size-1.5 rounded-full bg-[#2563EB]" />
                </div>

                <div className="overflow-hidden border border-[#2563EB]/20 bg-white shadow-[0_12px_30px_-20px_rgba(37,99,235,0.45)]">
                    <div className="border-b border-[#101828]/[0.06] px-2 py-3 sm:px-3">
                        <div className="h-1.5 w-10 rounded-full bg-[#2563EB]" />
                        <div className="mt-3 h-2 w-full bg-[#101828]" />
                        <div className="mt-1.5 h-2 w-[76%] bg-[#101828]" />
                        <div className="mt-3 h-1 w-full bg-[#101828]/10" />
                        <div className="mt-1 h-1 w-[82%] bg-[#101828]/10" />
                    </div>

                    <div className="relative mx-2 mt-2 h-[53px] overflow-hidden bg-[#E5E9E0] sm:h-[69px]">
                        <div className="absolute bottom-0 left-[15%] h-[65%] w-[40%] bg-[#F4F1E8]" />
                        <div className="absolute bottom-0 right-[10%] h-[50%] w-[30%] bg-[#94A58B]" />
                    </div>

                    <div className="p-2">
                        <div className="flex items-center justify-between gap-2">
                            <div className="h-1 w-3/5 rounded-full bg-[#101828]/20" />
                            <div className="h-4 w-10 rounded-sm bg-[#101828]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function WorkflowPreview() {
    return (
        <div
            aria-hidden="true"
            className="overflow-hidden rounded-md border border-[#101828]/10 bg-white shadow-[0_18px_50px_-28px_rgba(16,24,40,0.28)]"
        >
            <div className="flex min-h-11 items-center justify-between gap-3 border-b border-[#101828]/[0.07] px-3 sm:px-5">
                <div className="flex items-center gap-2">
                    <div className="flex size-6 items-center justify-center rounded-sm bg-[#101828] text-white">
                        <LayoutGrid size={12} />
                    </div>
                    <span className="text-[10px] font-semibold text-[#101828]">
                        Work overview
                    </span>
                </div>

                <span className="text-[9px] text-[#667085]">Concept interface</span>
            </div>

            <div className="grid grid-cols-[76px_1fr] sm:grid-cols-[100px_1fr]">
                <div className="space-y-3 border-r border-[#101828]/[0.07] bg-[#FBFAF8] p-3">
                    <div className="h-1.5 w-full rounded-full bg-[#2563EB]/50" />
                    <div className="h-1 w-[85%] rounded-full bg-[#101828]/10" />
                    <div className="h-1 w-full rounded-full bg-[#101828]/10" />
                    <div className="h-1 w-[75%] rounded-full bg-[#101828]/10" />
                </div>

                <div className="min-w-0 p-3 sm:p-5">
                    <div className="mb-4 flex items-center justify-between gap-2">
                        <div>
                            <div className="h-2 w-20 rounded-full bg-[#101828]/70 sm:w-28" />
                            <div className="mt-2 h-1 w-24 rounded-full bg-[#101828]/10 sm:w-32" />
                        </div>

                        <div className="flex size-7 shrink-0 items-center justify-center rounded-sm bg-[#EAF0FF] text-[#2563EB]">
                            <Check size={13} />
                        </div>
                    </div>

                    <div className="space-y-2">
                        {[
                            ["New enquiry", "Received"],
                            ["Project details", "In review"],
                            ["Next steps", "Pending"],
                        ].map(([title, status], index) => (
                            <div
                                key={title}
                                className="flex items-center justify-between gap-2 border border-[#101828]/[0.07] p-2 sm:p-3"
                            >
                                <div className="flex min-w-0 items-center gap-2">
                                    <span
                                        className={`size-1.5 shrink-0 rounded-full ${index === 0
                                                ? "bg-[#2563EB]"
                                                : "bg-[#94A3B8]"
                                            }`}
                                    />
                                    <span className="truncate text-[9px] font-medium text-[#344054]">
                                        {title}
                                    </span>
                                </div>

                                <span className="shrink-0 text-[8px] text-[#667085]">
                                    {status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function SolutionVisual({
    type,
}: {
    type: (typeof solutions)[number]["visual"];
}) {
    switch (type) {
        case "clarity":
            return <WebsiteClarityPreview />;

        case "journey":
            return <CustomerJourneyPreview />;

        case "redesign":
            return <RedesignPreview />;

        case "workflow":
            return <WorkflowPreview />;
    }
}

export default function SolutionsSection() {
    return (
        <section
            aria-labelledby="solutions-heading"
            className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-14 lg:py-32"
        >
            <div className="mx-auto max-w-[1296px]">
                {/* Introduction */}
                <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
                    <div>
                        <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.19em] text-[#667085] sm:mb-7 sm:text-[11px]">
                            <span className="h-px w-7 bg-[#2563EB]" />
                            The Zyncode approach
                        </p>

                        <h2
                            id="solutions-heading"
                            className="max-w-[760px] text-[clamp(36px,5vw,64px)] font-medium leading-[1.06] tracking-[-0.055em] text-[#101828] [text-wrap:balance]"
                        >
                            Better digital experiences start with{" "}
                            <span className="font-serif font-normal italic text-[#2563EB]">
                                understanding your business.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-[440px] text-[15px] leading-[1.9] text-[#667085] sm:text-base lg:justify-self-end lg:pb-2">
                        Your business isn&apos;t like everyone else&apos;s. We take the time to
                        understand what you offer, who you serve, and what needs to work
                        better—then design and build a digital solution around those needs.
                    </p>
                </div>

                {/* Solutions grid */}
                <div className="mt-14 border-t border-[#101828]/15 sm:mt-20 lg:mt-24">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {solutions.map((solution, index) => (
                            <article
                                key={solution.number}
                                className={[
                                    "flex min-w-0 flex-col py-9 sm:py-11 lg:py-14",
                                    index % 2 === 0
                                        ? "md:border-r md:border-[#101828]/15 md:pr-7 lg:pr-12"
                                        : "md:pl-7 lg:pl-12",
                                    index < 2
                                        ? "md:border-b md:border-[#101828]/15"
                                        : "",
                                    index > 0
                                        ? "border-t border-[#101828]/15 md:border-t-0"
                                        : "",
                                ].join(" ")}
                            >
                                {/* Number and category */}
                                <div className="flex items-center justify-between gap-4">
                                    <span className="text-[11px] font-semibold tabular-nums tracking-[0.12em] text-[#2563EB]">
                                        {solution.number}
                                    </span>

                                    <span className="text-right text-[9px] font-medium tracking-[0.12em] text-[#667085] sm:text-[10px]">
                                        {solution.category}
                                    </span>
                                </div>

                                {/* Outcome-focused content */}
                                <div className="mt-6 max-w-[500px] sm:mt-7">
                                    <h3 className="text-[25px] font-medium leading-[1.16] tracking-[-0.045em] text-[#101828] sm:text-[30px] lg:text-[34px]">
                                        {solution.title}
                                    </h3>

                                    <p className="mt-4 text-[14px] leading-[1.9] text-[#667085] sm:text-[15px]">
                                        {solution.description}
                                    </p>
                                </div>

                                {/* Purpose-built concept visual */}
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
                                            <span className="mt-0.5 flex size-[18px] shrink-0 items-center justify-center rounded-full bg-[#2563EB]/[0.08] text-[#2563EB]">
                                                <Check size={11} strokeWidth={2.5} />
                                            </span>

                                            <span>{outcome}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Secondary service link */}
                                <div className="mt-7 border-t border-[#101828]/[0.08] pt-5 sm:mt-8">
                                    <Link
                                        href={solution.href}
                                        className="group inline-flex min-h-8 items-center gap-2 text-[12px] font-semibold text-[#101828] transition-colors hover:text-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-4 sm:text-[13px]"
                                    >
                                        {solution.linkLabel}

                                        <ChevronRight
                                            size={15}
                                            className="transition-transform duration-200 group-hover:translate-x-1"
                                        />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* Closing message */}
                <div className="mt-12 border-t border-[#101828]/15 pt-9 sm:mt-16 sm:pt-12 lg:mt-20">
                    <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
                        <div>
                            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#667085]">
                                The right fit matters
                            </p>

                            <h3 className="max-w-[800px] text-[29px] font-medium leading-[1.14] tracking-[-0.045em] text-[#101828] sm:text-[38px] lg:text-[46px]">
                                The right solution isn&apos;t always a bigger website.{" "}
                                <span className="font-serif font-normal italic text-[#2563EB]">
                                    It&apos;s a better fit for your business.
                                </span>
                            </h3>

                            <p className="mt-5 max-w-[590px] text-[14px] leading-[1.9] text-[#667085] sm:text-[15px]">
                                We start by understanding what you need to achieve, then
                                recommend an approach that fits your goals, audience, and
                                requirements.
                            </p>
                        </div>

                        <div className="lg:pb-1">
                            <Link
                                href="/contact"
                                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#101828] px-6 text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
                            >
                                Discuss your project

                                <ArrowUpRight
                                    size={16}
                                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}