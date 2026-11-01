
import { ArrowUpRight } from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "Business Operations Software",
    description:
      "Bring your business processes into one organized system. We build applications that help teams manage daily operations, coordinate work, track information, and make better-informed decisions.",
    examples: [
      "Business management systems",
      "Employee and resource management",
      "Workflow and reporting systems",
    ],
  },
  {
    number: "02",
    title: "Customer & Partner Portals",
    description:
      "Create dedicated digital spaces where customers, vendors, and business partners can access information, manage activities, and interact with your business without unnecessary back-and-forth.",
    examples: [
      "Customer and client portals",
      "Vendor and supplier platforms",
      "Booking and service management",
    ],
  },
  {
    number: "03",
    title: "SaaS Products & MVPs",
    description:
      "Turn a product idea into a working application. Whether you're validating a new opportunity or developing a subscription-based platform, we help shape the product and build the software behind it.",
    examples: [
      "Startup MVP development",
      "Subscription-based applications",
      "Multi-user SaaS platforms",
    ],
  },
  {
    number: "04",
    title: "Integrations & Application Modernization",
    description:
      "Make your existing software work better. We improve applications, connect third-party services, and replace inefficient workflows without assuming everything needs to be rebuilt.",
    examples: [
      "Third-party API integrations",
      "Existing application improvements",
      "Legacy workflow modernization",
    ],
  },
];

export default function ApplicationCapabilities() {
  return (
    <section className="bg-page px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-360 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Section introduction */}
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-brand" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
                What we build
              </span>
            </div>

            <h2 className="mt-7 max-w-xl text-heading-1 text-ink">
              Software designed around your business requirements.
            </h2>

            <p className="mt-6 max-w-md text-[15px] leading-[1.85] text-[#667085] sm:text-base">
              Every business has different processes, people, and challenges.
              We develop custom applications that fit the way your business
              operates and the direction you want it to grow.
            </p>
          </div>

          {/* Capability list */}
          <div className="border-t border-ink/15">
            {capabilities.map((capability) => (
              <article
                key={capability.number}
                className="group border-b border-ink/15 py-8 sm:py-10 lg:py-11"
              >
                <div className="grid gap-5 sm:grid-cols-[48px_1fr] sm:gap-7">
                  {/* Number */}
                  <span className="pt-1 text-sm font-semibold tracking-tight text-brand">
                    {capability.number}
                  </span>

                  <div>
                    {/* Title and interaction */}
                    <div className="flex items-start justify-between gap-5">
                      <h3 className="max-w-xl text-xl font-semibold tracking-tight text-ink transition-colors duration-200 group-hover:text-brand sm:text-2xl lg:text-[26px]">
                        {capability.title}
                      </h3>

                      <span
                        aria-hidden="true"
                        className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-full border border-ink/15 transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white"
                      >
                        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mt-4 max-w-2xl text-sm leading-[1.85] text-[#667085] sm:text-[15px]">
                      {capability.description}
                    </p>

                    {/* Examples */}
                    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                      {capability.examples.map((example) => (
                        <span
                          key={example}
                          className="text-xs font-medium text-ink/65 sm:text-[13px]"
                        >
                          <span className="mr-2 text-brand">/</span>
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
