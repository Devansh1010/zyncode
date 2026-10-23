
import Link from "next/link";

const businessNeeds = [
  {
    number: "01",
    title: "Build a stronger online presence",
    description:
      "Give potential customers a clear understanding of your services, your expertise, and what makes your business worth considering.",
    audience: "For businesses creating their first professional website.",
    label: "Business websites",
  },
  {
    number: "02",
    title: "Get more from your existing website",
    description:
      "Improve how your services are presented, make information easier to navigate, and create a clearer path from visitor to inquiry.",
    audience: "For businesses ready to redesign or improve their website.",
    label: "Redesign & optimization",
  },
  {
    number: "03",
    title: "Go beyond a traditional website",
    description:
      "Build custom functionality to support specific business workflows, customer interactions, or operational needs.",
    audience: "For businesses that need more than standard website pages.",
    label: "Custom web applications",
  },
] as const;

export default function AhmedabadBusinesses() {
  return (
    <section
      aria-labelledby="ahmedabad-businesses-heading"
      className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
      id="ahmedabad-businesses"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Introduction */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
            For businesses in Ahmedabad
          </p>

          <h2
            className="max-w-xl text-3xl font-semibold leading-[1.15] tracking-[-0.045em] text-[#101828] sm:text-4xl lg:text-5xl"
            id="ahmedabad-businesses-heading"
          >
            Your business has something valuable to offer. Make sure your
            website shows it.
          </h2>

          <p className="mt-6 max-w-lg text-base leading-7 text-[#667085] sm:text-lg sm:leading-8">
            Whether you&apos;re building your online presence for the first time
            or improving an existing website, the goal is the same: help people
            understand what you offer, why it matters, and what they should do
            next.
          </p>

          <p className="mt-4 max-w-lg text-base leading-7 text-[#667085]">
            Zyncode designs and develops digital experiences around your
            business, your audience, and the decisions you want visitors to
            make.
          </p>

          <Link
            className="group mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#2563EB] px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#1D4ED8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB]"
            href="/contact"
          >
            Talk about your project
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>

        {/* Business needs */}
        <div className="border-t border-[#E4E7EC]">
          {businessNeeds.map((need) => (
            <article
              className="group border-b border-[#E4E7EC] py-8 sm:py-10"
              key={need.number}
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  aria-hidden="true"
                  className="text-sm font-medium tabular-nums text-[#2563EB]"
                >
                  {need.number}
                </span>

                <span className="rounded-full border border-[#E4E7EC] px-3 py-1.5 text-xs font-medium text-[#667085]">
                  {need.label}
                </span>
              </div>

              <h3 className="mt-6 max-w-lg text-xl font-medium leading-snug tracking-[-0.03em] text-[#101828] transition-colors duration-200 group-hover:text-[#2563EB] sm:text-2xl">
                {need.title}
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-[#667085] sm:text-base">
                {need.description}
              </p>

              <p className="mt-5 text-sm font-medium text-[#344054]">
                {need.audience}
              </p>
            </article>
          ))}

          <p className="pt-7 text-base leading-7 text-[#344054] sm:pt-8 sm:text-lg">
            The right solution starts with understanding your business—not
            choosing a template.
          </p>
        </div>
      </div>
    </section>
  );
}
