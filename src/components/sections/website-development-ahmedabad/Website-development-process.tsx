
import Link from "next/link";

const processSteps = [
  {
    number: "01",
    title: "Understand your business",
    description:
      "We start by learning about your business, your audience, your services, and what you want your website to achieve.",
    outcome: "Clarity on your goals",
  },
  {
    number: "02",
    title: "Define the right approach",
    description:
      "We establish the website's structure, essential features, content requirements, and visual direction before moving into development.",
    outcome: "A clear project direction",
  },
  {
    number: "03",
    title: "Design and build",
    description:
      "We turn the agreed direction into a responsive website, focusing on clear communication, intuitive navigation, and a smooth experience across devices.",
    outcome: "Your website takes shape",
  },
  {
    number: "04",
    title: "Review and launch",
    description:
      "We review the completed website, address agreed changes, and prepare it for launch. Ongoing maintenance can be discussed if you need continued support.",
    outcome: "Ready for launch",
  },
] as const;

export default function WebsiteDevelopmentProcess() {
  return (
    <section
      aria-labelledby="development-process-heading"
      className="bg-[#F7F6F2] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
      id="development-process"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Section introduction */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
              How we work
            </p>

            <h2
              className="max-w-xl text-3xl font-semibold leading-[1.15] tracking-[-0.045em] text-[#101828] sm:text-4xl lg:text-5xl"
              id="development-process-heading"
            >
              A clear process.
              <br className="hidden sm:block" /> From first conversation
              to launch.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-[#667085] sm:text-lg sm:leading-8">
              You don&apos;t need to know the technical details before getting
              started. We&apos;ll understand your business, define what your
              website needs to accomplish, and work through the right solution
              together.
            </p>

            <Link
              className="group mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#2563EB] px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#1D4ED8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB]"
              href="/contact"
            >
              Discuss your project
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>

            <p className="mt-4 text-sm text-[#667085]">
              Have an idea? Let&apos;s work out the next step.
            </p>
          </div>

          {/* Process steps */}
          <div className="border-t border-[#D9D8D2]">
            {processSteps.map((step) => (
              <article
                className="group grid gap-4 border-b border-[#D9D8D2] py-7 transition-colors duration-200 sm:grid-cols-[64px_1fr] sm:gap-6 sm:py-9 lg:gap-8"
                key={step.number}
              >
                <span
                  aria-hidden="true"
                  className="text-sm font-medium tabular-nums text-[#2563EB]"
                >
                  {step.number}
                </span>

                <div>
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <h3 className="text-xl font-medium tracking-[-0.03em] text-[#101828] transition-colors duration-200 group-hover:text-[#2563EB] sm:text-2xl">
                      {step.title}
                    </h3>

                    <span className="inline-flex w-fit shrink-0 items-center rounded-full border border-[#D9D8D2] px-3 py-1.5 text-xs font-medium text-[#667085]">
                      {step.outcome}
                    </span>
                  </div>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-[#667085] sm:text-base sm:leading-7">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
