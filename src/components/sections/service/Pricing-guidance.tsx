
import {
  ArrowUpRight,
  Check,
  Layers3,
  MessageCircle,
  SlidersHorizontal,
} from "lucide-react";
import Callout from "@/components/shared/Callout";

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
      className="border-t border-ink/10 bg-[#F7F6F2] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Introduction */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end lg:gap-16">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Pricing guidance
            </p>

            <h2
              id="pricing-guidance-heading"
              className="max-w-3xl text-3xl font-medium leading-[1.12] tracking-[-0.045em] text-ink sm:text-4xl md:text-5xl lg:text-[3.5rem]"
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
        <div className="mt-14 border-t border-ink/15 sm:mt-20">
          {pricingFactors.map((factor) => {
            const Icon = factor.icon;

            return (
              <article
                key={factor.number}
                className="grid gap-5 border-b border-ink/15 py-7 sm:py-9 lg:grid-cols-[100px_0.9fr_1.2fr] lg:gap-10 lg:py-10"
              >
                <div className="flex items-center justify-between lg:block">
                  <span className="text-sm font-medium tracking-wide text-brand">
                    {factor.number}
                  </span>

                  <Icon
                    aria-hidden="true"
                    className="size-5 text-[#98A2B3] lg:mt-6"
                    strokeWidth={1.5}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-medium tracking-[-0.035em] text-ink sm:text-2xl">
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
                        className="mt-1 size-3.5 shrink-0 text-brand"
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

        <Callout />

        <div className="mt-8 flex items-center gap-3 text-sm text-[#667085]">
          <ArrowUpRight
            aria-hidden="true"
            className="size-4 shrink-0 text-brand"
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