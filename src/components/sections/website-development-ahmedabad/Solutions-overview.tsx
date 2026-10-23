import Link from "next/link";

const solutions = [
  {
    number: "01",
    eyebrow: "For businesses building their presence",
    title: "Business website development",
    description:
      "Give your business a professional online presence that explains what you do, communicates your value, and helps potential customers take the next step.",
    benefits: [
      "Clear presentation of your services",
      "Responsive layouts for mobile and desktop",
      "Purposeful calls to action",
    ],
    href: "/services/business-websites",
    linkLabel: "Explore business websites",
    visual: "business",
  },
  {
    number: "02",
    eyebrow: "For businesses ready for a better experience",
    title: "Website redesign and optimization",
    description:
      "If your current website feels outdated, confusing, or difficult to use, improve its design, content structure, and user experience around your current business goals.",
    benefits: [
      "A clearer visual hierarchy",
      "Improved navigation and usability",
      "A more consistent brand experience",
    ],
    href: "/services/website-redesign",
    linkLabel: "Explore website redesign",
    visual: "redesign",
  },
  {
    number: "03",
    eyebrow: "For teams with more complex needs",
    title: "Custom web application development",
    description:
      "When a standard website isn't enough, build a web application around the workflows, information, and functionality your business needs.",
    benefits: [
      "Business-specific functionality",
      "Structured data and workflows",
      "Room to evolve as requirements grow",
    ],
    href: "/services/web-applications",
    linkLabel: "Explore web applications",
    visual: "application",
  },
  {
    number: "04",
    eyebrow: "For businesses that need ongoing support",
    title: "Website maintenance and support",
    description:
      "Keep your website maintained after launch with ongoing updates, technical attention, and improvements appropriate to your website and support requirements.",
    benefits: [
      "Ongoing maintenance planning",
      "Technical updates and checks",
      "Support based on an agreed scope",
    ],
    href: "/services/website-maintenance",
    linkLabel: "Explore website maintenance",
    visual: "maintenance",
  },
] as const;

function BusinessWebsiteVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative min-h-[260px] overflow-hidden rounded-xl bg-[#E9EDF4] p-5 sm:min-h-[300px] sm:p-7"
    >
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-[#C5D0E1]" />

      <div className="relative mx-auto max-w-sm border border-[#D9E0EA] bg-white p-4 shadow-sm sm:p-5">
        <div className="flex items-center justify-between border-b border-[#EAECF0] pb-3">
          <div className="h-2.5 w-20 rounded-sm bg-[#101828]" />
          <div className="h-6 w-16 rounded-full bg-[#2563EB]" />
        </div>

        <div className="grid grid-cols-[1.1fr_0.9fr] gap-4 py-6">
          <div>
            <div className="h-3 w-full rounded-sm bg-[#101828]" />
            <div className="mt-2 h-3 w-4/5 rounded-sm bg-[#101828]" />

            <div className="mt-4 space-y-1.5">
              <div className="h-1.5 w-full rounded-full bg-[#D0D5DD]" />
              <div className="h-1.5 w-4/5 rounded-full bg-[#D0D5DD]" />
            </div>

            <div className="mt-4 h-7 w-20 rounded-full bg-[#2563EB]" />
          </div>

          <div className="relative min-h-28 overflow-hidden rounded-t-full bg-[#CAD6E7]">
            <div className="absolute bottom-0 left-0 h-3/4 w-3/5 rounded-tr-[60px] bg-[#A8BCD9]" />
            <div className="absolute bottom-0 right-0 h-1/2 w-2/5 rounded-tl-[40px] bg-[#809FCB]" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 border-t border-[#EAECF0] pt-3">
          <div className="h-7 rounded bg-[#F2F4F7]" />
          <div className="h-7 rounded bg-[#F2F4F7]" />
          <div className="h-7 rounded bg-[#F2F4F7]" />
        </div>
      </div>

      <div className="absolute bottom-4 right-4 rounded-lg border border-[#D9E0EA] bg-white px-3 py-2 text-xs font-medium text-[#344054] shadow-sm">
        Business website
      </div>
    </div>
  );
}

function RedesignVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative min-h-[260px] overflow-hidden rounded-xl bg-[#F0EDE7] p-5 sm:min-h-[300px] sm:p-7"
    >
      <div className="absolute right-5 top-5 h-24 w-24 rounded-full border border-[#D7D0C5]" />

      <div className="relative flex min-h-[210px] items-center justify-center gap-3 sm:min-h-[240px]">
        <div className="w-[42%] -rotate-3 border border-[#D8D3CA] bg-[#FAF9F6] p-3 opacity-75 shadow-sm sm:p-4">
          <div className="h-2 w-4/5 rounded-sm bg-[#98A2B3]" />
          <div className="mt-3 h-14 bg-[#E4E2DC] sm:h-20" />
          <div className="mt-3 h-1.5 w-full rounded-full bg-[#D0D5DD]" />
          <div className="mt-1.5 h-1.5 w-3/4 rounded-full bg-[#D0D5DD]" />
          <div className="mt-3 h-5 w-14 rounded-sm bg-[#D0D5DD]" />
        </div>

        <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2563EB] text-lg text-white shadow-md">
          →
        </span>

        <div className="w-[42%] rotate-2 border border-[#D8D3CA] bg-white p-3 shadow-md sm:p-4">
          <div className="flex items-center justify-between">
            <div className="h-2 w-12 rounded-sm bg-[#101828]" />
            <div className="h-4 w-8 rounded-full bg-[#2563EB]" />
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="space-y-2 pt-2">
              <div className="h-2 w-full rounded-sm bg-[#101828]" />
              <div className="h-2 w-4/5 rounded-sm bg-[#101828]" />
              <div className="mt-3 h-1 w-full rounded-full bg-[#D0D5DD]" />
              <div className="h-1 w-3/4 rounded-full bg-[#D0D5DD]" />
            </div>

            <div className="h-20 rounded-t-full bg-[#C6D4E8] sm:h-24" />
          </div>

          <div className="mt-3 h-5 w-16 rounded-full bg-[#2563EB]" />
        </div>
      </div>

      <div className="absolute bottom-4 left-4 rounded-lg border border-[#E4E2DC] bg-white px-3 py-2 text-xs font-medium text-[#344054] shadow-sm">
        Before → Better experience
      </div>
    </div>
  );
}

function WebApplicationVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative min-h-[260px] overflow-hidden rounded-xl bg-[#E9EDF4] p-5 sm:min-h-[300px] sm:p-7"
    >
      <div className="absolute -bottom-12 -right-12 h-48 w-48 rounded-full border border-[#C5D0E1]" />

      <div className="relative mx-auto max-w-sm overflow-hidden rounded-lg border border-[#D9E0EA] bg-white shadow-sm">
        <div className="flex items-center gap-3 border-b border-[#EAECF0] p-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#2563EB] text-xs font-semibold text-white">
            Z
          </div>

          <div className="h-2 w-24 rounded-full bg-[#101828]" />

          <div className="ml-auto h-6 w-6 rounded-full bg-[#EAECF0]" />
        </div>

        <div className="grid grid-cols-[68px_1fr] sm:grid-cols-[82px_1fr]">
          <div className="space-y-3 border-r border-[#EAECF0] bg-[#F9FAFB] p-3">
            <div className="h-2 rounded-full bg-[#98A2B3]" />
            <div className="h-2 rounded-full bg-[#D0D5DD]" />
            <div className="h-2 rounded-full bg-[#D0D5DD]" />
            <div className="h-2 rounded-full bg-[#D0D5DD]" />
          </div>

          <div className="p-3 sm:p-4">
            <div className="h-3 w-3/5 rounded-sm bg-[#101828]" />

            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="rounded-md border border-[#EAECF0] p-2">
                <div className="h-1.5 w-1/2 rounded-full bg-[#98A2B3]" />
                <div className="mt-3 h-3 w-3/4 rounded-sm bg-[#101828]" />
              </div>

              <div className="rounded-md border border-[#EAECF0] p-2">
                <div className="h-1.5 w-1/2 rounded-full bg-[#98A2B3]" />
                <div className="mt-3 h-3 w-3/4 rounded-sm bg-[#101828]" />
              </div>
            </div>

            <div className="mt-3 rounded-md border border-[#EAECF0] p-3">
              <div className="h-2 w-2/5 rounded-full bg-[#101828]" />
              <div className="mt-3 space-y-2">
                <div className="h-2 w-full rounded-full bg-[#EAECF0]" />
                <div className="h-2 w-4/5 rounded-full bg-[#EAECF0]" />
                <div className="h-2 w-3/5 rounded-full bg-[#EAECF0]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 rounded-lg border border-[#D9E0EA] bg-white px-3 py-2 text-xs font-medium text-[#344054] shadow-sm">
        Custom workflow
      </div>
    </div>
  );
}

function MaintenanceVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative min-h-[260px] overflow-hidden rounded-xl bg-[#F0EDE7] p-5 sm:min-h-[300px] sm:p-7"
    >
      <div className="absolute -left-8 -top-8 h-36 w-36 rounded-full border border-[#D7D0C5]" />

      <div className="relative mx-auto max-w-sm rounded-lg border border-[#E4E2DC] bg-white p-5 shadow-sm sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="h-2 w-24 rounded-full bg-[#101828]" />
            <div className="mt-2 h-1.5 w-16 rounded-full bg-[#D0D5DD]" />
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EAF0FF] text-lg font-semibold text-[#2563EB]">
            ✓
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {[
            "Updates and maintenance",
            "Technical checks",
            "Ongoing improvements",
          ].map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-3 border-t border-[#EAECF0] pt-3"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#B2CCFF] text-[10px] text-[#2563EB]">
                ✓
              </span>

              <div className="flex-1">
                <p className="text-xs font-medium text-[#344054]">{item}</p>
              </div>

              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  index === 0 ? "bg-[#2563EB]" : "bg-[#D0D5DD]"
                }`}
              />
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-md bg-[#F7F6F2] px-3 py-2">
          <p className="text-xs leading-5 text-[#667085]">
            Support tailored to your website and agreed requirements.
          </p>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 rounded-lg border border-[#E4E2DC] bg-white px-3 py-2 text-xs font-medium text-[#344054] shadow-sm">
        Beyond launch
      </div>
    </div>
  );
}

function SolutionVisual({ visual }: { visual: (typeof solutions)[number]["visual"] }) {
  switch (visual) {
    case "business":
      return <BusinessWebsiteVisual />;
    case "redesign":
      return <RedesignVisual />;
    case "application":
      return <WebApplicationVisual />;
    case "maintenance":
      return <MaintenanceVisual />;
  }
}

export default function SolutionsOverview() {
  return (
    <section
      id="our-solutions"
      aria-labelledby="solutions-heading"
      className="bg-[#F7F6F2]"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-12 lg:py-32">
        {/* Section heading */}
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-[#2563EB]"
              />

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#667085]">
                What we can help with
              </p>
            </div>

            <h2
              id="solutions-heading"
              className="max-w-xl text-3xl font-semibold leading-[1.15] tracking-[-0.045em] text-[#101828] sm:text-4xl lg:text-5xl"
            >
              Website development solutions for different business needs.
            </h2>
          </div>

          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-base leading-7 text-[#667085] sm:text-lg sm:leading-8">
              Every business needs something different from its website.
              We help you identify the right approach, whether you&apos;re
              building your online presence, improving an existing site,
              developing a custom application, or planning ongoing support.
            </p>

            <p className="mt-4 text-sm leading-6 text-[#667085]">
              As a website development studio serving businesses in
              Ahmedabad, our starting point is understanding what you need
              your digital experience to accomplish.
            </p>
          </div>
        </div>

        {/* Solution rows */}
        <div className="mt-14 border-t border-[#DCDAD3] sm:mt-20">
          {solutions.map((solution) => (
            <article
              key={solution.number}
              className="grid gap-7 border-b border-[#DCDAD3] py-10 sm:py-12 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-14 lg:py-14"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold tracking-wide text-[#2563EB]">
                    {solution.number}
                  </span>

                  <span className="h-px w-6 bg-[#C5C7CC]" />

                  <p className="text-xs font-medium leading-5 text-[#667085] sm:text-sm">
                    {solution.eyebrow}
                  </p>
                </div>

                <h3 className="mt-5 max-w-xl text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#101828] sm:text-3xl lg:text-4xl">
                  {solution.title}
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-7 text-[#667085] sm:text-base sm:leading-8">
                  {solution.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {solution.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3 text-sm leading-6 text-[#344054]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]"
                      />

                      {benefit}
                    </li>
                  ))}
                </ul>

                <Link
                  href={solution.href}
                  className="mt-7 inline-flex min-h-10 items-center gap-3 text-sm font-semibold text-[#2563EB] transition-colors hover:text-[#1D4ED8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-4"
                >
                  {solution.linkLabel}

                  <span aria-hidden="true" className="text-lg">
                    →
                  </span>
                </Link>
              </div>

              <SolutionVisual visual={solution.visual} />
            </article>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="mt-12 flex flex-col gap-5 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#101828] sm:text-2xl">
              Not sure which solution fits?
            </h3>

            <p className="mt-2 max-w-xl text-sm leading-6 text-[#667085] sm:text-base">
              Tell us what you&apos;re trying to achieve. We can start with
              your requirements and work out the appropriate direction.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-[#101828] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#263449] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
          >
            Discuss your requirements

            <span aria-hidden="true" className="text-base">
              ↗
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}