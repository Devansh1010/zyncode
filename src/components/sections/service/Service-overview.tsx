import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Globe2,
  LayoutDashboard,
  MonitorSmartphone,
  Wrench,
} from "lucide-react";

const services = [
  {
    number: "01",
    category: "ESTABLISH YOUR PRESENCE",
    title: "Business Website Development",
    description:
      "A website should do more than make your business look established. It should help people understand what you offer, trust your business, and take the next step.",
    outcomes: [
      "A clearer presentation of your business",
      "A better experience across devices",
      "A stronger path from visitor to enquiry",
    ],
    href: "/services/business-websites",
    linkLabel: "Explore website development",
    visual: "website",
    visualLabel: "Business website concept",
  },
  {
    number: "02",
    category: "MAKE YOUR WEBSITE WORK BETTER",
    title: "Website Redesign & Optimization",
    description:
      "If your current website feels outdated, confusing, or difficult to use, we can identify what needs to improve and create a better experience around your business goals.",
    outcomes: [
      "Clearer content and navigation",
      "A more modern, consistent design",
      "Improvements guided by your priorities",
    ],
    href: "/services/website-redesign",
    linkLabel: "Explore website redesign",
    visual: "redesign",
    visualLabel: "Website redesign concept",
  },
  {
    number: "03",
    category: "BUILD A BETTER WAY TO WORK",
    title: "Custom Web Applications",
    description:
      "When off-the-shelf tools don't fit the way your business operates, a custom web application can bring your workflows, information, and processes together.",
    outcomes: [
      "Workflows built around your requirements",
      "Information organized in one place",
      "Tools designed for your actual process",
    ],
    href: "/services/web-applications",
    linkLabel: "Explore custom applications",
    visual: "application",
    visualLabel: "Custom web application concept",
  },
  {
    number: "04",
    category: "KEEP YOUR WEBSITE IN GOOD SHAPE",
    title: "Website Maintenance",
    description:
      "Your website needs attention after launch, too. Ongoing maintenance helps keep it updated, supported, and in a better position to serve your business.",
    outcomes: [
      "Routine updates and upkeep",
      "Help addressing technical issues",
      "Ongoing support based on agreed scope",
    ],
    href: "/services/website-maintenance",
    linkLabel: "Explore website maintenance",
    visual: "maintenance",
    visualLabel: "Website maintenance concept",
  },
] as const;

function WebsiteVisual() {
  return (
    <div className="relative min-h-[260px] overflow-hidden bg-[#E9E8E1] p-5 sm:min-h-[310px] sm:p-7">
      <div className="absolute -right-12 -top-12 size-48 rounded-full border border-[#101828]/10 sm:size-64" />
      <div className="absolute -right-5 -top-5 size-36 rounded-full border border-[#101828]/10 sm:size-48" />

      <div className="relative z-10 mx-auto max-w-[340px] border border-[#101828]/10 bg-white shadow-[0_16px_45px_rgba(16,24,40,0.09)]">
        <div className="flex h-8 items-center justify-between border-b border-[#101828]/10 px-3">
          <div className="flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-[#101828]/20" />
            <span className="size-1.5 rounded-full bg-[#101828]/20" />
            <span className="size-1.5 rounded-full bg-[#101828]/20" />
          </div>
          <span className="text-[8px] text-[#101828]/40">
            example-business.com
          </span>
          <Globe2 aria-hidden="true" className="size-3 text-[#101828]/40" />
        </div>

        <div className="grid grid-cols-[1.1fr_0.9fr]">
          <div className="p-4 sm:p-5">
            <div className="mb-4 h-2 w-12 bg-[#2563EB]" />

            <div className="space-y-2">
              <div className="h-3 w-full bg-[#101828]" />
              <div className="h-3 w-[75%] bg-[#101828]" />
            </div>

            <div className="mt-3 space-y-1.5">
              <div className="h-1 w-full bg-[#101828]/15" />
              <div className="h-1 w-[85%] bg-[#101828]/15" />
              <div className="h-1 w-[65%] bg-[#101828]/15" />
            </div>

            <div className="mt-5 h-7 w-24 bg-[#2563EB]" />
          </div>

          <div className="relative min-h-40 overflow-hidden bg-[#D6D8D0]">
            <div className="absolute -right-5 top-5 size-28 rounded-full bg-[#C2C7BE]" />
            <div className="absolute bottom-0 left-4 h-24 w-12 bg-[#101828]/15" />
            <div className="absolute bottom-0 right-5 h-32 w-14 bg-[#2563EB]/65" />
            <div className="absolute bottom-0 right-0 h-20 w-8 bg-[#101828]/15" />
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-[#101828]/10 px-4 py-2.5">
          <span className="text-[8px] uppercase tracking-wider text-[#101828]/45">
            Made for your audience
          </span>
          <ArrowUpRight
            aria-hidden="true"
            className="size-3.5 text-[#2563EB]"
          />
        </div>
      </div>

      <div className="absolute bottom-5 left-5 z-20 flex items-center gap-2 border border-[#101828]/10 bg-white px-3 py-2 shadow-sm sm:bottom-7 sm:left-7">
        <MonitorSmartphone
          aria-hidden="true"
          className="size-4 text-[#2563EB]"
        />
        <span className="text-[10px] font-medium text-[#101828]">
          Designed for every screen
        </span>
      </div>
    </div>
  );
}

function RedesignVisual() {
  return (
    <div className="relative min-h-[260px] overflow-hidden bg-[#E9E8E1] p-5 sm:min-h-[310px] sm:p-7">
      <div className="absolute right-6 top-6 text-[9px] font-medium uppercase tracking-[0.18em] text-[#101828]/40">
        Before / After
      </div>

      <div className="relative mx-auto mt-8 grid max-w-[350px] grid-cols-2 gap-3 sm:mt-10">
        <div className="relative border border-[#101828]/10 bg-[#F7F6F2] p-3 opacity-80">
          <span className="text-[8px] uppercase tracking-wider text-[#101828]/45">
            Before
          </span>

          <div className="mt-4 h-2 w-[85%] bg-[#101828]/35" />
          <div className="mt-2 h-2 w-[65%] bg-[#101828]/20" />

          <div className="mt-4 grid grid-cols-2 gap-1.5">
            <div className="h-12 bg-[#D6D5CE]" />
            <div className="h-12 bg-[#D6D5CE]" />
          </div>

          <div className="mt-4 h-5 w-full border border-[#101828]/15" />
          <div className="mt-2 h-1 w-[80%] bg-[#101828]/15" />
          <div className="mt-1 h-1 w-[60%] bg-[#101828]/15" />
        </div>

        <div className="relative border border-[#2563EB]/20 bg-white p-3 shadow-[0_12px_35px_rgba(16,24,40,0.08)]">
          <span className="text-[8px] uppercase tracking-wider text-[#2563EB]">
            After
          </span>

          <div className="mt-4 h-2 w-[85%] bg-[#101828]" />
          <div className="mt-2 h-2 w-[65%] bg-[#101828]" />

          <div className="mt-4 h-14 overflow-hidden bg-[#E5E7DF]">
            <div className="ml-auto h-full w-1/3 bg-[#2563EB]/60" />
          </div>

          <div className="mt-3 h-5 w-4/5 bg-[#2563EB]" />
          <div className="mt-3 h-1 w-full bg-[#101828]/10" />
          <div className="mt-1 h-1 w-[75%] bg-[#101828]/10" />
        </div>

        <div className="absolute left-1/2 top-1/2 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-[#101828]/10 bg-white shadow-sm">
          <ArrowUpRight
            aria-hidden="true"
            className="size-4 text-[#2563EB]"
          />
        </div>
      </div>

      <div className="absolute bottom-5 left-5 flex items-center gap-2 sm:bottom-7 sm:left-7">
        <span className="size-2 rounded-full bg-[#2563EB]" />
        <span className="text-[10px] font-medium text-[#101828]/65">
          Better clarity. Better experience.
        </span>
      </div>
    </div>
  );
}

function ApplicationVisual() {
  return (
    <div className="relative min-h-[260px] overflow-hidden bg-[#E9E8E1] p-5 sm:min-h-[310px] sm:p-7">
      <div className="mx-auto max-w-[360px] overflow-hidden border border-[#101828]/10 bg-white shadow-[0_16px_45px_rgba(16,24,40,0.08)]">
        <div className="flex h-10 items-center justify-between border-b border-[#101828]/10 px-3">
          <div className="flex items-center gap-2">
            <LayoutDashboard
              aria-hidden="true"
              className="size-3.5 text-[#2563EB]"
            />
            <span className="text-[9px] font-semibold text-[#101828]">
              WORKSPACE
            </span>
          </div>
          <div className="size-5 rounded-full bg-[#E9E8E1]" />
        </div>

        <div className="grid grid-cols-[65px_1fr] sm:grid-cols-[82px_1fr]">
          <div className="space-y-3 border-r border-[#101828]/10 bg-[#F7F6F2] p-2.5">
            <div className="h-1.5 w-full bg-[#101828]/20" />
            <div className="h-1.5 w-[80%] bg-[#101828]/10" />
            <div className="h-1.5 w-full bg-[#2563EB]/45" />
            <div className="h-1.5 w-[65%] bg-[#101828]/10" />
          </div>

          <div className="p-3 sm:p-4">
            <div className="h-2 w-24 bg-[#101828]" />
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="border border-[#101828]/10 p-2">
                <div className="h-1 w-6 bg-[#101828]/20" />
                <div className="mt-2 h-3 w-7 bg-[#101828]" />
              </div>
              <div className="border border-[#101828]/10 p-2">
                <div className="h-1 w-6 bg-[#101828]/20" />
                <div className="mt-2 h-3 w-7 bg-[#2563EB]" />
              </div>
              <div className="border border-[#101828]/10 p-2">
                <div className="h-1 w-6 bg-[#101828]/20" />
                <div className="mt-2 h-3 w-7 bg-[#101828]" />
              </div>
            </div>

            <div className="mt-4 border border-[#101828]/10 p-3">
              <div className="mb-3 h-1.5 w-20 bg-[#101828]/30" />
              {[0, 1, 2].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 border-t border-[#101828]/8 py-2"
                >
                  <span className="size-4 bg-[#E9E8E1]" />
                  <span
                    className={`h-1.5 ${
                      item === 1 ? "w-16" : "w-20"
                    } bg-[#101828]/15`}
                  />
                  <span className="ml-auto size-2 rounded-full bg-[#2563EB]/70" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 right-5 flex items-center gap-2 border border-[#101828]/10 bg-white px-3 py-2 shadow-sm sm:bottom-7 sm:right-7">
        <span className="size-2 rounded-full bg-[#2563EB]" />
        <span className="text-[10px] font-medium text-[#101828]">
          Built around your workflow
        </span>
      </div>
    </div>
  );
}

function MaintenanceVisual() {
  return (
    <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden bg-[#E9E8E1] p-5 sm:min-h-[310px] sm:p-7">
      <div className="absolute -bottom-24 -left-20 size-64 rounded-full border border-[#101828]/10" />
      <div className="absolute -bottom-16 -left-12 size-48 rounded-full border border-[#101828]/10" />

      <div className="relative z-10 w-full max-w-[310px] border border-[#101828]/10 bg-white p-5 shadow-[0_16px_45px_rgba(16,24,40,0.08)] sm:p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#101828]/45">
              Website care
            </p>
            <p className="mt-1.5 text-base font-medium tracking-tight text-[#101828]">
              Keep things running.
            </p>
          </div>

          <span className="flex size-9 items-center justify-center bg-[#EAF0FF] text-[#2563EB]">
            <Wrench aria-hidden="true" className="size-4" />
          </span>
        </div>

        <div className="mt-5 divide-y divide-[#101828]/10 border-y border-[#101828]/10">
          {[
            "Updates and upkeep",
            "Technical checks",
            "Ongoing support",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 py-3">
              <span className="flex size-5 items-center justify-center bg-[#EAF0FF] text-[#2563EB]">
                <Check aria-hidden="true" className="size-3" />
              </span>
              <span className="text-xs text-[#101828]/75">{item}</span>
            </div>
          ))}
        </div>

        <p className="mt-4 text-[10px] leading-5 text-[#101828]/45">
          Support tailored to your website and agreed requirements.
        </p>
      </div>
    </div>
  );
}

function ServiceVisual({ type }: { type: (typeof services)[number]["visual"] }) {
  switch (type) {
    case "website":
      return <WebsiteVisual />;
    case "redesign":
      return <RedesignVisual />;
    case "application":
      return <ApplicationVisual />;
    case "maintenance":
      return <MaintenanceVisual />;
  }
}

export default function ServiceOverview() {
  return (
    <section
      id="our-services"
      aria-labelledby="services-overview-heading"
      className="scroll-mt-24 bg-[#F7F6F2] text-[#101828]"
    >
      <div className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-28 lg:px-12 lg:pb-32">
        {/* Section introduction */}
        <div className="grid gap-6 border-t border-[#101828]/15 pt-8 md:grid-cols-[0.85fr_1.15fr] md:gap-12 lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-7 bg-[#2563EB]"
              />
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#101828]/55">
                What we do
              </p>
            </div>
          </div>

          <div>
            <h2
              id="services-overview-heading"
              className="max-w-3xl text-3xl font-medium leading-[1.12] tracking-[-0.045em] sm:text-4xl md:text-5xl"
            >
              The right solution for where your business is going.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#101828]/60 sm:text-lg sm:leading-8">
              Every business has different needs. We help you find the right
              digital solution, whether you&apos;re building your presence,
              improving what you already have, or creating something new.
            </p>
          </div>
        </div>

        {/* Service rows */}
        <div className="mt-14 sm:mt-20">
          {services.map((service) => (
            <article
              key={service.number}
              className="grid gap-7 border-t border-[#101828]/15 py-9 sm:gap-9 sm:py-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16 lg:py-14"
            >
              {/* Text */}
              <div className="flex h-full flex-col items-start">
                <div className="flex w-full items-center justify-between gap-4">
                  <span className="text-xs font-medium tabular-nums text-[#2563EB]">
                    {service.number} / 04
                  </span>

                  <span className="text-right text-[9px] font-medium uppercase tracking-[0.15em] text-[#101828]/40 sm:text-[10px]">
                    {service.category}
                  </span>
                </div>

                <h3 className="mt-7 max-w-lg text-2xl font-medium leading-tight tracking-[-0.04em] sm:text-3xl lg:text-[2.15rem]">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-[#101828]/65 sm:text-base sm:leading-7">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex items-start gap-3 text-sm leading-6 text-[#101828]/75"
                    >
                      <Check
                        aria-hidden="true"
                        className="mt-1 size-4 shrink-0 text-[#2563EB]"
                      />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.href}
                  className="group mt-7 inline-flex min-h-11 items-center gap-3 border-b border-[#101828]/25 pb-2 text-sm font-medium transition-colors hover:border-[#2563EB] hover:text-[#2563EB] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#101828]"
                >
                  {service.linkLabel}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>

              {/* Custom visual */}
              <div className="relative">
                <ServiceVisual type={service.visual} />

                <p className="mt-3 text-[10px] uppercase tracking-[0.12em] text-[#101828]/40">
                  {service.visualLabel} · Illustrative preview
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Closing transition */}
        <div className="flex flex-col gap-4 border-t border-[#101828]/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-6 text-[#101828]/60 sm:text-base">
            Not sure which service fits? You don&apos;t need to have everything
            figured out before we talk.
          </p>

          <Link
            href="/contact"
            className="group inline-flex min-h-11 w-fit items-center gap-3 text-sm font-medium text-[#101828] transition-colors hover:text-[#2563EB] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#101828]"
          >
            Let&apos;s work it out together
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