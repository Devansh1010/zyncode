import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  Compass,
  Layers3,
  MessageCircle,
  Rocket,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We start by learning about your business, your customers, and what you want to achieve.",
    outcome: "A clear understanding of your goals",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Define",
    description:
      "We identify the right solution, establish priorities, and agree on the scope before development begins.",
    outcome: "A defined plan and direction",
    icon: Compass,
  },
  {
    number: "03",
    title: "Design & build",
    description:
      "We turn the agreed direction into a usable digital experience, with careful attention to design, functionality, and detail.",
    outcome: "A solution built around your needs",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Launch & support",
    description:
      "We prepare the solution for launch and discuss the ongoing support or improvements your business may need.",
    outcome: "A clear path beyond launch",
    icon: Rocket,
  },
];

export default function HowItWorks() {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="relative overflow-hidden border-t border-[#101828]/10 bg-[#F7F6F2] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section introduction */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
              How it works
            </p>

            <h2
              id="how-it-works-heading"
              className="max-w-xl text-3xl font-medium leading-[1.12] tracking-[-0.045em] text-[#101828] sm:text-4xl md:text-5xl lg:text-[3.5rem]"
            >
              From first conversation to a solution you can use.
            </h2>
          </div>

          <div className="max-w-xl lg:justify-self-end">
            <p className="text-base leading-7 text-[#475467] sm:text-lg sm:leading-8">
              Good projects don&apos;t start with code. They start with
              understanding what needs to be solved. Here&apos;s how we turn
              your requirements into a practical digital solution.
            </p>
          </div>
        </div>

        {/* Process steps */}
        <div className="relative mt-16 sm:mt-20 lg:mt-24">
          {/* Desktop connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[1.35rem] hidden h-px bg-[#101828]/15 lg:block"
          />

          <div className="grid gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-4 lg:gap-7">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article key={step.number} className="relative">
                  {/* Number and icon */}
                  <div className="relative mb-7 flex items-center justify-between lg:mb-9">
                    <span className="relative z-10 flex size-11 items-center justify-center rounded-full border border-[#101828]/15 bg-[#F7F6F2] text-xs font-semibold tracking-wide text-[#101828]">
                      {step.number}
                    </span>

                    <Icon
                      aria-hidden="true"
                      className="size-5 text-[#2563EB]"
                      strokeWidth={1.6}
                    />
                  </div>

                  <div className="border-t border-[#101828]/15 pt-5">
                    <h3 className="text-xl font-medium tracking-[-0.03em] text-[#101828] sm:text-2xl">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#475467] sm:text-base">
                      {step.description}
                    </p>

                    <div className="mt-6 flex items-start gap-2.5">
                      <Check
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0 text-[#2563EB]"
                        strokeWidth={2}
                      />

                      <p className="text-sm leading-6 text-[#101828]">
                        {step.outcome}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Closing callout */}
        <div className="mt-16 flex flex-col gap-6 border-t border-[#101828]/15 pt-8 sm:mt-20 sm:flex-row sm:items-center sm:justify-between lg:mt-24 lg:pt-10">
          <div>
            <p className="text-lg font-medium tracking-[-0.02em] text-[#101828] sm:text-xl">
              Have a project in mind?
            </p>

            <p className="mt-2 max-w-lg text-sm leading-6 text-[#475467] sm:text-base">
              Tell us what you&apos;re trying to achieve. We&apos;ll start by
              understanding the problem before discussing the solution.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex min-h-12 w-fit shrink-0 items-center justify-center gap-3 rounded-full bg-[#101828] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F6F2]"
          >
            Discuss your project

            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      {/* Decorative detail */}
      <ArrowDownRight
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 -right-4 hidden size-36 text-[#101828]/[0.035] lg:block"
        strokeWidth={0.7}
      />
    </section>
  );
}