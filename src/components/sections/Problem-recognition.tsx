import { ArrowUpRight } from "lucide-react";

const problems = [
  {
    number: "01",
    title: "Customers don't see what makes you different",
    description:
      "Your business offers real value, but your website looks much like everyone else's. Visitors have little reason to understand why they should choose you.",
    detail: "YOUR VALUE ISN'T COMING THROUGH",
    visual: "differentiation",
  },
  {
    number: "02",
    title: "Your website isn't turning interest into enquiries",
    description:
      "People visit your website, but the next step isn't clear. Important information, trust signals, or contact options may be difficult to find.",
    detail: "INTEREST WITHOUT A CLEAR NEXT STEP",
    visual: "enquiries",
  },
  {
    number: "03",
    title: "Your online presence doesn't match your business",
    description:
      "Your business has grown, but your website hasn't kept up. An outdated design or unclear messaging can leave visitors with the wrong impression.",
    detail: "YOUR BUSINESS HAS MOVED FORWARD",
    visual: "growth",
  },
  {
    number: "04",
    title: "Everyday work is harder than it needs to be",
    description:
      "You're relying on repetitive manual tasks, scattered information, or disconnected tools when a better digital solution could make things simpler.",
    detail: "TOO MUCH WORK HAPPENS MANUALLY",
    visual: "process",
  },
] as const;

function ProblemVisual({ type }: { type: (typeof problems)[number]["visual"] }) {
  switch (type) {
    case "differentiation":
      return (
        <div
          aria-hidden="true"
          className="flex items-center gap-2.5"
        >
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#101828]/10 bg-white text-[11px] font-medium text-[#667085]">
            A
          </div>

          <div className="h-px w-5 bg-[#94A3B8]" />

          <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#2563EB]/30 bg-[#2563EB]/[0.06] text-[11px] font-medium text-[#2563EB]">
            B
          </div>

          <div className="h-px w-5 bg-[#94A3B8]" />

          <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#101828]/10 bg-white text-[11px] font-medium text-[#667085]">
            C
          </div>
        </div>
      );

    case "enquiries":
      return (
        <div
          aria-hidden="true"
          className="w-full max-w-[220px] rounded-md border border-[#101828]/10 bg-white p-3"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="space-y-1.5">
              <div className="h-1.5 w-20 rounded-full bg-[#101828]/15" />
              <div className="h-1 w-14 rounded-full bg-[#101828]/[0.08]" />
            </div>

            <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-[#F7F6F2] text-[#667085]">
              <ArrowUpRight size={15} />
            </div>
          </div>

          <div className="mt-3 flex items-center gap-2">
            <div className="h-1.5 flex-1 rounded-full bg-[#101828]/[0.07]" />
            <div className="h-1.5 w-8 rounded-full bg-[#2563EB]/25" />
          </div>
        </div>
      );

    case "growth":
      return (
        <div
          aria-hidden="true"
          className="flex items-end gap-2"
        >
          <div className="flex h-[52px] w-[68px] flex-col justify-between rounded-sm border border-[#101828]/10 bg-white p-2">
            <div className="h-1 w-7 rounded-full bg-[#101828]/15" />
            <div className="h-1 w-full rounded-full bg-[#101828]/[0.07]" />
            <div className="h-1 w-4/5 rounded-full bg-[#101828]/[0.07]" />
          </div>

          <div className="flex h-[68px] w-[88px] flex-col justify-between rounded-sm border border-[#2563EB]/25 bg-[#2563EB]/[0.035] p-2.5">
            <div className="h-1.5 w-9 rounded-full bg-[#2563EB]/45" />
            <div className="h-1.5 w-full rounded-full bg-[#2563EB]/10" />
            <div className="h-1.5 w-4/5 rounded-full bg-[#2563EB]/10" />
          </div>
        </div>
      );

    case "process":
      return (
        <div
          aria-hidden="true"
          className="flex items-center gap-2"
        >
          <div className="flex size-9 items-center justify-center rounded-md border border-[#101828]/10 bg-white">
            <span className="h-3 w-3 rounded-sm border border-[#94A3B8]" />
          </div>

          <div className="h-px w-4 border-t border-dashed border-[#94A3B8]" />

          <div className="flex size-9 items-center justify-center rounded-md border border-[#101828]/10 bg-white">
            <span className="h-3 w-3 rounded-sm border border-[#94A3B8]" />
          </div>

          <div className="h-px w-4 border-t border-dashed border-[#94A3B8]" />

          <div className="flex size-9 items-center justify-center rounded-md border border-[#2563EB]/30 bg-[#2563EB]/[0.06]">
            <span className="h-3 w-3 rounded-sm bg-[#2563EB]" />
          </div>
        </div>
      );
  }
}

export default function ProblemRecognition() {
  return (
    <section
      aria-labelledby="problem-recognition-heading"
      className="relative bg-[#F7F6F2] px-5 py-20 sm:px-8 sm:py-28 lg:px-14 lg:py-32"
    >
      <div className="mx-auto max-w-[1296px]">
        {/* Section introduction */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
          <div>
            <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.19em] text-[#667085] sm:mb-7 sm:text-[11px]">
              <span className="h-px w-7 bg-[#2563EB]" />
              Does this sound familiar?
            </p>

            <h2
              id="problem-recognition-heading"
              className="max-w-[790px] text-[clamp(36px,5.4vw,66px)] font-medium leading-[1.06] tracking-[-0.055em] text-[#101828] [text-wrap:balance]"
            >
              Your business has more to offer.{" "}
              <span className="font-serif font-normal italic text-[#2563EB]">
                Does your website show it?
              </span>
            </h2>
          </div>

          <div className="max-w-[430px] lg:justify-self-end lg:pb-2">
            <p className="text-[15px] leading-[1.9] text-[#667085] sm:text-base">
              You know what makes your business different. But if your website
              doesn&apos;t communicate that clearly, potential customers may
              struggle to understand your value, trust what you offer, or know
              what to do next.
            </p>
          </div>
        </div>

        {/* Subtle transition into the problem grid */}
        <div className="mt-14 border-t border-[#101828]/15 sm:mt-20 lg:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {problems.map((problem, index) => (
              <article
                key={problem.number}
                className={[
                  "group relative flex min-w-0 flex-col py-8 sm:py-10 lg:py-12",
                  index % 2 === 0
                    ? "md:border-r md:border-[#101828]/15 md:pr-8 lg:pr-14"
                    : "md:pl-8 lg:pl-14",
                  index < 2
                    ? "md:border-b md:border-[#101828]/15"
                    : "",
                  index > 0
                    ? "border-t border-[#101828]/15 md:border-t-0"
                    : "",
                ].join(" ")}
              >
                {/* Number and understated detail */}
                <div className="flex items-center justify-between gap-4">
                  <span
                    className="text-[11px] font-semibold tabular-nums tracking-[0.12em] text-[#2563EB]"
                  >
                    {problem.number}
                  </span>

                  <span className="h-px w-8 bg-[#101828]/15 transition-colors duration-300 group-hover:bg-[#2563EB]" />
                </div>

                {/* Problem title and explanation */}
                <div className="mt-7 max-w-[490px] sm:mt-8">
                  <h3 className="max-w-[440px] text-[23px] font-medium leading-[1.2] tracking-[-0.04em] text-[#101828] sm:text-[27px] lg:text-[30px]">
                    {problem.title}
                  </h3>

                  <p className="mt-4 max-w-[440px] text-[14px] leading-[1.9] text-[#667085] sm:text-[15px]">
                    {problem.description}
                  </p>
                </div>

                {/* Secondary visual */}
                <div className="mt-7 flex min-h-[88px] items-center justify-between gap-4 border-t border-[#101828]/[0.07] pt-5 sm:mt-8">
                  <div className="min-w-0">
                    <p className="text-[9px] font-medium uppercase leading-relaxed tracking-[0.13em] text-[#667085] sm:text-[10px]">
                      {problem.detail}
                    </p>
                  </div>

                  <div className="shrink-0">
                    <ProblemVisual type={problem.visual} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Quiet closing statement */}
        <div className="mt-12 border-t border-[#101828]/15 pt-8 sm:mt-16 sm:pt-10 lg:mt-20 lg:pt-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto] sm:items-end sm:gap-8">
            <h3 className="max-w-[800px] text-[25px] font-medium leading-[1.2] tracking-[-0.045em] text-[#101828] sm:text-[32px] lg:text-[38px]">
              Your website should make choosing your business easier
              <span className="font-serif font-normal italic text-[#2563EB]">
                {" "}
                — not harder.
              </span>
            </h3>

            <p className="max-w-[280px] text-[13px] leading-[1.8] text-[#667085] sm:justify-self-end sm:text-right">
              That&apos;s where the right digital experience can make a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}