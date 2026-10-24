import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  CircleDot,
  MousePointer2,
  PanelsTopLeft,
  Workflow,
} from "lucide-react";

const solutions = [
  {
    number: "01",
    category: "BE DISCOVERED. BE CHOSEN.",
    title: "Make your business easier to choose.",
    description:
      "Help potential customers understand what you do, see what makes you different, and feel confident taking the next step.",
    outcomes: [
      "A clearer presentation of your business",
      "A stronger first impression",
      "A more confident path to enquiry",
    ],
    visual: "clarity",
  },
  {
    number: "02",
    category: "TURN INTEREST INTO ACTION.",
    title: "Make every next step easier.",
    description:
      "Give visitors the information they need, remove unnecessary friction, and make contacting your business feel effortless.",
    outcomes: [
      "Information that's easier to find",
      "Clearer calls to action",
      "Smoother journeys across devices",
    ],
    visual: "journey",
  },
  {
    number: "03",
    category: "MOVE FORWARD WITH CONFIDENCE.",
    title: "Bring your online presence up to date.",
    description:
      "When your business has outgrown its website, improve the experience so it reflects the quality of your work today.",
    outcomes: [
      "A more relevant visual identity online",
      "Better structure and usability",
      "An experience built around current goals",
    ],
    visual: "evolution",
  },
  {
    number: "04",
    category: "WORK SMARTER, NOT HARDER.",
    title: "Make complicated work simpler.",
    description:
      "Connect disconnected processes and reduce repetitive manual work with digital tools designed around how your business operates.",
    outcomes: [
      "Less repetitive administrative work",
      "Information that's easier to manage",
      "Workflows suited to your operations",
    ],
    visual: "workflow",
  },
] as const;

type Solution = (typeof solutions)[number];
type SolutionVisualType = Solution["visual"];

function ClarityVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative flex h-28 w-full max-w-44 items-center justify-center"
    >
      <div className="absolute left-3 top-3 h-20 w-28 border border-[#101828]/10 bg-[#fffefa]" />

      <div className="relative z-10 w-32 border border-[#101828]/10 bg-[#fffefa] p-3 shadow-[0_8px_24px_rgba(16,24,40,0.06)]">
        <div className="mb-3 flex items-center justify-between">
          <div className="h-1.5 w-8 bg-[#101828]" />
          <div className="flex gap-1">
            <span className="size-1 rounded-full bg-[#94a3b8]" />
            <span className="size-1 rounded-full bg-[#94a3b8]" />
          </div>
        </div>

        <div className="h-2 w-full bg-[#101828]" />
        <div className="mt-1.5 h-2 w-3/4 bg-[#101828]" />

        <div className="mt-3 flex items-center justify-between gap-2">
          <div className="space-y-1">
            <div className="h-1 w-12 bg-[#d8d9d3]" />
            <div className="h-1 w-8 bg-[#d8d9d3]" />
          </div>

          <div className="flex size-7 items-center justify-center bg-[#2563eb] text-white">
            <ArrowUpRight className="size-3.5" />
          </div>
        </div>
      </div>

      <div className="absolute -right-1 bottom-2 flex items-center gap-1.5 border border-[#101828]/10 bg-[#f7f6f2] px-2 py-1.5">
        <span className="size-1.5 rounded-full bg-[#2563eb]" />
        <span className="text-[9px] text-[#62665f]">Clear positioning</span>
      </div>
    </div>
  );
}

function JourneyVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative flex h-28 w-full max-w-44 items-center justify-center"
    >
      <div className="flex w-full flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="flex size-8 shrink-0 items-center justify-center border border-[#101828]/10 bg-[#fffefa]">
            <PanelsTopLeft className="size-3.5 text-[#62665f]" />
          </div>

          <div className="flex-1 border border-[#101828]/10 bg-[#fffefa] px-2.5 py-2">
            <div className="h-1.5 w-16 bg-[#101828]" />
            <div className="mt-1.5 h-1 w-11 bg-[#d8d9d3]" />
          </div>

          <ArrowRight className="size-3.5 shrink-0 text-[#94a3b8]" />
        </div>

        <div className="ml-5 h-3 w-px bg-[#94a3b8]" />

        <div className="flex items-center gap-2">
          <div className="flex size-8 shrink-0 items-center justify-center border border-[#2563eb]/20 bg-[#e9efff]">
            <MousePointer2 className="size-3.5 text-[#2563eb]" />
          </div>

          <div className="flex flex-1 items-center justify-between border border-[#2563eb]/20 bg-[#fffefa] px-2.5 py-2">
            <div>
              <div className="h-1.5 w-14 bg-[#101828]" />
              <div className="mt-1.5 h-1 w-9 bg-[#d8d9d3]" />
            </div>

            <Check className="size-3.5 text-[#2563eb]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function EvolutionVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative flex h-28 w-full max-w-44 items-center justify-center gap-3"
    >
      <div className="w-14 border border-[#101828]/10 bg-[#eceae3] p-2">
        <div className="h-1.5 w-full bg-[#b9b9b0]" />
        <div className="mt-2 h-7 w-full bg-[#d6d4cb]" />
        <div className="mt-2 h-1 w-full bg-[#d6d4cb]" />
        <div className="mt-1 h-1 w-3/4 bg-[#d6d4cb]" />
      </div>

      <div className="flex size-7 shrink-0 items-center justify-center rounded-full border border-[#101828]/10 bg-[#fffefa]">
        <ArrowRight className="size-3.5 text-[#62665f]" />
      </div>

      <div className="w-16 border border-[#101828]/10 bg-[#fffefa] p-2 shadow-[0_8px_24px_rgba(16,24,40,0.05)]">
        <div className="flex items-center justify-between">
          <div className="h-1.5 w-5 bg-[#101828]" />
          <CircleDot className="size-2.5 text-[#2563eb]" />
        </div>

        <div className="mt-2 h-7 bg-[#dbe4d6]">
          <div className="h-full w-1/3 bg-[#b5c8ad]" />
        </div>

        <div className="mt-2 h-1 w-full bg-[#d8d9d3]" />
        <div className="mt-1 h-1 w-2/3 bg-[#d8d9d3]" />
      </div>

      <span className="absolute -bottom-1 right-0 text-[9px] text-[#62665f]">
        A better experience
      </span>
    </div>
  );
}

function WorkflowVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative flex h-28 w-full max-w-44 items-center justify-center"
    >
      <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center gap-2">
        <div className="space-y-2">
          <div className="border border-[#101828]/10 bg-[#fffefa] p-2">
            <div className="h-1.5 w-full bg-[#b8bbb3]" />
            <div className="mt-1.5 h-1 w-3/4 bg-[#d8d9d3]" />
          </div>

          <div className="border border-[#101828]/10 bg-[#fffefa] p-2">
            <div className="h-1.5 w-3/4 bg-[#b8bbb3]" />
            <div className="mt-1.5 h-1 w-full bg-[#d8d9d3]" />
          </div>
        </div>

        <ArrowRight className="size-4 text-[#2563eb]" />

        <div className="border border-[#2563eb]/20 bg-[#e9efff] p-2.5">
          <div className="flex size-7 items-center justify-center bg-[#2563eb] text-white">
            <Workflow className="size-4" />
          </div>

          <div className="mt-2 h-1.5 w-full bg-[#101828]/60" />
          <div className="mt-1.5 h-1 w-3/4 bg-[#101828]/20" />
        </div>
      </div>

      <div className="absolute -bottom-1 right-0 border border-[#101828]/10 bg-[#f7f6f2] px-2 py-1 text-[9px] text-[#62665f]">
        Connected workflows
      </div>
    </div>
  );
}

function SolutionVisual({ type }: { type: SolutionVisualType }) {
  switch (type) {
    case "clarity":
      return <ClarityVisual />;

    case "journey":
      return <JourneyVisual />;

    case "evolution":
      return <EvolutionVisual />;

    case "workflow":
      return <WorkflowVisual />;

    default: {
      const exhaustiveCheck: never = type;
      return exhaustiveCheck;
    }
  }
}

export default function SolutionsSection() {
  return (
    <section
      aria-labelledby="solutions-heading"
      className="overflow-hidden bg-[#f7f6f2] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Introduction */}
        <div className="grid gap-6 border-b border-[#101828]/15 pb-10 sm:pb-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
              Better digital experiences
            </p>

            <h2
              id="solutions-heading"
              className="max-w-2xl text-balance text-3xl font-medium leading-[1.12] tracking-[-0.045em] text-[#101828] sm:text-4xl lg:text-[48px]"
            >
              Good digital experiences make business easier.
            </h2>
          </div>

          <p className="max-w-lg text-base leading-7 text-[#62665f] lg:justify-self-end lg:pb-1">
            Your website or software should do more than exist. It should help
            customers make decisions, make your business easier to work with,
            and support where you want to go next.
          </p>
        </div>

        {/* Outcome-led editorial rows */}
        <div className="divide-y divide-[#101828]/15">
          {solutions.map((solution) => (
            <article
              key={solution.number}
              className="grid gap-5 py-8 sm:py-10 lg:grid-cols-[64px_minmax(0,1fr)_176px] lg:items-center lg:gap-8 lg:py-10"
            >
              <span className="font-mono text-xs text-[#2563eb]">
                {solution.number}
              </span>

              <div className="min-w-0">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#85877f]">
                  {solution.category}
                </p>

                <h3 className="max-w-2xl text-xl font-medium leading-snug tracking-[-0.035em] text-[#101828] sm:text-2xl lg:text-[28px]">
                  {solution.title}
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#62665f] sm:text-[15px] sm:leading-7">
                  {solution.description}
                </p>

                <ul className="mt-5 grid gap-x-5 gap-y-2 sm:grid-cols-2">
                  {solution.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex items-start gap-2 text-xs leading-5 text-[#62665f] sm:text-[13px]"
                    >
                      <Check
                        aria-hidden="true"
                        className="mt-0.5 size-3.5 shrink-0 text-[#2563eb]"
                      />

                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hidden justify-self-end lg:block">
                <SolutionVisual type={solution.visual} />
              </div>

              <div className="lg:hidden">
                <SolutionVisual type={solution.visual} />
              </div>
            </article>
          ))}
        </div>

        {/* Transition to services */}
        <div className="mt-5 flex flex-col gap-5 border-t border-[#101828]/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl">
            <p className="text-base font-medium tracking-tight text-[#101828] sm:text-lg">
              Every business is different. Your solution should be, too.
            </p>

            <p className="mt-2 text-sm leading-6 text-[#62665f]">
              We&apos;ll help you identify what you need and find the right
              approach for your business.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-medium text-[#101828] outline-none transition-colors hover:text-[#2563eb] focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f6f2]"
          >
            Let&apos;s discuss your goals

            <ArrowDownRight
              aria-hidden="true"
              className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5 motion-reduce:transform-none"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}