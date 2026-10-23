
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Compass,
  Focus,
  Users,
  Workflow,
} from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Understand before building.",
    description:
      "We start by learning about your business, your customers, and what you're trying to achieve. That understanding guides the decisions we make throughout the project.",
    icon: Compass,
    label: "Business first",
  },
  {
    number: "02",
    title: "Design around real people.",
    description:
      "Your website or application should be easy to understand and use. We organize information and interactions around what your audience needs to know and do.",
    icon: Users,
    label: "People first",
  },
  {
    number: "03",
    title: "Solve the right problem.",
    description:
      "Not every business needs a complex application or an expensive rebuild. We focus on finding an appropriate solution for your requirements, priorities, and budget.",
    icon: Focus,
    label: "Purpose first",
  },
  {
    number: "04",
    title: "Think beyond launch.",
    description:
      "A digital product is part of your business, not just a finished deliverable. We consider maintainability, future needs, and the practicalities of keeping it useful over time.",
    icon: Workflow,
    label: "Long-term thinking",
  },
] as const;

function ApproachVisual() {
  return (
    <div
      aria-label="Illustration of a business goal, audience needs, and a practical digital solution coming together"
      role="img"
      className="relative overflow-hidden border border-white/10 bg-[#182337] p-5 text-white sm:p-7"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:28px_28px]"
      />

      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/55">
            The thinking behind the work
          </span>

          <span className="flex size-8 items-center justify-center border border-white/15">
            <ArrowDownRight
              aria-hidden="true"
              className="size-4 text-[#8FAEFF]"
            />
          </span>
        </div>

        <div className="relative mx-auto my-9 flex min-h-[210px] max-w-[360px] items-center justify-center sm:my-12 sm:min-h-[245px]">
          {/* Connection lines */}
          <svg
            aria-hidden="true"
            viewBox="0 0 320 240"
            className="absolute inset-0 size-full"
            fill="none"
          >
            <path
              d="M160 120 L75 52 M160 120 L245 52 M160 120 L75 190 M160 120 L245 190"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="1"
            />
            <circle
              cx="160"
              cy="120"
              r="72"
              stroke="rgba(143,174,255,0.35)"
              strokeDasharray="3 5"
            />
          </svg>

          {/* Central point */}
          <div className="relative z-10 flex size-24 flex-col items-center justify-center border border-[#8FAEFF]/60 bg-[#2563EB] shadow-[0_0_55px_rgba(37,99,235,0.2)] sm:size-28">
            <Check aria-hidden="true" className="mb-1 size-5" />
            <span className="text-[10px] font-semibold tracking-wide">
              Right solution
            </span>
          </div>

          {/* Surrounding principles */}
          <div className="absolute left-0 top-0 flex items-center gap-2 border border-white/10 bg-[#202D42] px-2.5 py-2 sm:left-2">
            <Compass
              aria-hidden="true"
              className="size-3.5 text-[#8FAEFF]"
            />
            <span className="text-[9px] text-white/80">Business</span>
          </div>

          <div className="absolute right-0 top-0 flex items-center gap-2 border border-white/10 bg-[#202D42] px-2.5 py-2 sm:right-2">
            <Users
              aria-hidden="true"
              className="size-3.5 text-[#8FAEFF]"
            />
            <span className="text-[9px] text-white/80">People</span>
          </div>

          <div className="absolute bottom-0 left-0 flex items-center gap-2 border border-white/10 bg-[#202D42] px-2.5 py-2 sm:left-2">
            <Focus
              aria-hidden="true"
              className="size-3.5 text-[#8FAEFF]"
            />
            <span className="text-[9px] text-white/80">Purpose</span>
          </div>

          <div className="absolute bottom-0 right-0 flex items-center gap-2 border border-white/10 bg-[#202D42] px-2.5 py-2 sm:right-2">
            <Workflow
              aria-hidden="true"
              className="size-3.5 text-[#8FAEFF]"
            />
            <span className="text-[9px] text-white/80">Future</span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-white/15 pt-4">
          <p className="text-xs text-white/55">
            Different needs. One considered solution.
          </p>
          <span className="text-[10px] tabular-nums text-white/35">
            01 — 04
          </span>
        </div>
      </div>
    </div>
  );
}

export default function OurApproach() {
  return (
    <section
      aria-labelledby="our-approach-heading"
      className="bg-[#F7F6F2] text-[#101828]"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        {/* Editorial introduction */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-[#2563EB]"
              />
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#101828]/55">
                Our approach
              </p>
            </div>

            <p className="mt-5 max-w-xs text-sm leading-6 text-[#101828]/50">
              Business understanding, useful design, and technology chosen
              for a reason.
            </p>
          </div>

          <div>
            <h2
              id="our-approach-heading"
              className="max-w-4xl text-3xl font-medium leading-[1.12] tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Good digital experiences start with{" "}
              <span className="text-[#2563EB]">understanding.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#101828]/65 sm:text-lg sm:leading-8">
              The right solution isn&apos;t simply the one that looks
              impressive or uses the latest technology. It&apos;s the one
              that makes sense for your business and the people you serve.
            </p>
          </div>
        </div>

        {/* Principles and visual */}
        <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="border-t border-[#101828]/15">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <article
                  key={principle.number}
                  className="group border-b border-[#101828]/15 py-6 sm:py-7"
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span className="pt-1 text-xs tabular-nums text-[#2563EB]">
                      {principle.number}
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3 className="text-lg font-medium tracking-tight text-[#101828] transition-colors duration-200 group-hover:text-[#2563EB] sm:text-xl">
                          {principle.title}
                        </h3>

                        <span className="flex size-8 shrink-0 items-center justify-center border border-[#101828]/10 text-[#101828]/50 transition-colors duration-200 group-hover:border-[#2563EB]/30 group-hover:text-[#2563EB]">
                          <Icon aria-hidden="true" className="size-4" />
                        </span>
                      </div>

                      <p className="mt-3 max-w-xl text-sm leading-7 text-[#101828]/60 sm:text-base">
                        {principle.description}
                      </p>

                      <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.15em] text-[#101828]/40">
                        {principle.label}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="lg:pt-2">
            <ApproachVisual />

            <div className="mt-6 flex items-start gap-4 border-l-2 border-[#2563EB] pl-5 sm:pl-6">
              <div>
                <p className="text-xl font-medium leading-snug tracking-tight text-[#101828] sm:text-2xl">
                  The goal isn&apos;t to build more.
                  <br />
                  It&apos;s to build what matters.
                </p>

                <p className="mt-3 max-w-md text-sm leading-6 text-[#101828]/55">
                  Every decision should serve a purpose—from the first
                  conversation to the details people interact with every day.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Transition to the next section */}
        <div className="mt-16 flex flex-col gap-4 border-t border-[#101828]/15 pt-6 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-6 text-[#101828]/60">
            A considered approach makes the process clearer, too.
          </p>

          <Link
            href="/contact"
            className="group inline-flex min-h-11 w-fit items-center gap-3 text-sm font-medium text-[#101828] transition-colors hover:text-[#2563EB] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#101828]"
          >
            Tell us what you&apos;re working on
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
