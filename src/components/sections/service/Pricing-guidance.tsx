import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  Layers3,
  MessageCircle,
  SlidersHorizontal,
} from "lucide-react";

const pricingFactors = [
  {
    number: "01",
    title: "Scope & functionality",
    description:
      "A focused business website has different requirements from a custom platform with user accounts, integrations, or complex workflows.",
    examples: ["Pages and features", "Custom functionality", "Third-party integrations"],
    icon: Layers3,
  },
  {
    number: "02",
    title: "Design & user experience",
    description:
      "The research, design depth, content structure, and interactions needed to serve your audience all influence the work involved.",
    examples: ["Custom visual design", "Content structure", "User journeys"],
    icon: SlidersHorizontal,
  },
  {
    number: "03",
    title: "Ongoing requirements",
    description:
      "Hosting, maintenance, updates, and future improvements should be considered separately from the initial build.",
    examples: ["Maintenance needs", "Hosting requirements", "Future improvements"],
    icon: MessageCircle,
  },
];

export default function PricingGuidance() {
  return (
    <section
      aria-labelledby="pricing-guidance-heading"
      className="border-t border-[#101828]/10 bg-[#F7F6F2] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Introduction */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end lg:gap-16">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
              Pricing guidance
            </p>

            <h2
              id="pricing-guidance-heading"
              className="max-w-3xl text-3xl font-medium leading-[1.12] tracking-[-0.045em] text-[#101828] sm:text-4xl md:text-5xl lg:text-[3.5rem]"
            >
              The right investment starts with the right scope.
            </h2>
          </div>

          <div className="max-w-lg lg:justify-self-end">
            <p className="text-base leading-7 text-[#475467] sm:text-lg sm:leading-8">
              There&apos;s no single price for every digital project. The cost
              depends on what your business needs, how the solution should work,
              and the level of design and development involved.
            </p>
          </div>
        </div>

        {/* Pricing factors */}
        <div className="mt-14 border-t border-[#101828]/15 sm:mt-20">
          {pricingFactors.map((factor) => {
            const Icon = factor.icon;

            return (
              <article
                key={factor.number}
                className="grid gap-5 border-b border-[#101828]/15 py-7 sm:py-9 lg:grid-cols-[100px_0.9fr_1.2fr] lg:gap-10 lg:py-10"
              >
                <div className="flex items-center justify-between lg:block">
                  <span className="text-sm font-medium tracking-wide text-[#2563EB]">
                    {factor.number}
                  </span>

                  <Icon
                    aria-hidden="true"
                    className="size-5 text-[#98A2B3] lg:mt-6"
                    strokeWidth={1.5}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-medium tracking-[-0.035em] text-[#101828] sm:text-2xl">
                    {factor.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-7 text-[#475467] sm:text-base">
                    {factor.description}
                  </p>
                </div>

                <ul className="grid content-start gap-3 sm:grid-cols-3 lg:gap-4">
                  {factor.examples.map((example) => (
                    <li
                      key={example}
                      className="flex items-start gap-2.5 text-sm leading-6 text-[#475467]"
                    >
                      <Check
                        aria-hidden="true"
                        className="mt-1 size-3.5 shrink-0 text-[#2563EB]"
                        strokeWidth={2}
                      />
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        {/* Pricing transparency callout */}
        <div className="mt-10 grid overflow-hidden border border-[#101828]/10 bg-white sm:mt-14 lg:grid-cols-[1fr_auto]">
          <div className="p-6 sm:p-9 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2563EB]">
              Before we recommend a solution
            </p>

            <h3 className="mt-4 max-w-2xl text-2xl font-medium leading-tight tracking-[-0.04em] text-[#101828] sm:text-3xl">
              You should understand what you&apos;re investing in.
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#475467] sm:text-base">
              We&apos;ll first understand your requirements, then discuss a
              suitable scope and the factors that influence its cost. The aim
              is to find a practical solution for your business—not add
              complexity you don&apos;t need.
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "A solution aligned with your goals",
                "Clear priorities and requirements",
                "An agreed project scope",
                "A discussion about ongoing costs",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-[#101828]"
                >
                  <Check
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-[#2563EB]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-between gap-6 border-t border-[#101828]/10 bg-[#F1F3F6] p-6 sm:p-9 lg:w-72 lg:border-l lg:border-t-0 lg:p-8">
            <div>
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-white text-[#2563EB]">
                <MessageCircle
                  aria-hidden="true"
                  className="size-5"
                  strokeWidth={1.6}
                />
              </span>

              <h4 className="mt-5 text-lg font-medium text-[#101828]">
                Not sure what you need?
              </h4>

              <p className="mt-2 text-sm leading-6 text-[#475467]">
                Start with your business goals. We can discuss the possible
                approaches from there.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#101828] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F1F3F6]"
            >
              Discuss your project

              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* Optional next step */}
        <div className="mt-8 flex items-center gap-3 text-sm text-[#667085]">
          <ArrowDownRight
            aria-hidden="true"
            className="size-4 shrink-0 text-[#2563EB]"
          />
          <p>
            Have a defined project in mind? Share your requirements to discuss
            the next steps.
          </p>
        </div>
      </div>
    </section>
  );
}