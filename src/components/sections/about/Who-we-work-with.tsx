import Link from "next/link";

const audiences = [
  {
    number: "01",
    label: "Establish",
    title: "Businesses ready for a stronger online presence.",
    description:
      "You want your business to make a stronger first impression, communicate its value clearly, and give potential customers a reason to take the next step.",
    fit: "Business website development",
    href: "/services/business-websites",
    visual: "presence",
  },
  {
    number: "02",
    label: "Reimagine",
    title: "Businesses that have outgrown their website.",
    description:
      "Your business has evolved, but your website hasn't kept up. You need a clearer message, a better user experience, or a digital presence that reflects where you're headed.",
    fit: "Website redesign & optimization",
    href: "/services/website-redesign",
    visual: "redesign",
  },
  {
    number: "03",
    label: "Build",
    title: "Teams that need more than a website.",
    description:
      "Off-the-shelf tools don't fully address your needs. You want a custom digital product that fits your workflow, brings information together, or makes a recurring task easier.",
    fit: "Custom web applications",
    href: "/services/web-applications",
    visual: "application",
  },
] as const;

function AudienceVisual({
  type,
}: {
  type: (typeof audiences)[number]["visual"];
}) {
  if (type === "presence") {
    return (
      <div
        aria-hidden="true"
        className="relative h-24 w-28 sm:h-28 sm:w-32"
      >
        <div className="absolute left-1 top-2 h-[4.5rem] w-[4.5rem] rounded-2xl border border-[#101828]/15 bg-white/60 sm:h-20 sm:w-20" />

        <div className="absolute bottom-2 right-0 h-16 w-16 rounded-2xl border border-[#2563EB]/30 bg-[#2563EB]/10 sm:h-[4.5rem] sm:w-[4.5rem]" />

        <div className="absolute left-4 top-5 h-2 w-8 rounded-full bg-[#101828]/70" />

        <div className="absolute left-4 top-9 h-1.5 w-5 rounded-full bg-[#101828]/20" />

        <div className="absolute bottom-5 right-4 h-3 w-3 rounded-full bg-[#2563EB]" />
      </div>
    );
  }

  if (type === "redesign") {
    return (
      <div
        aria-hidden="true"
        className="relative h-24 w-28 sm:h-28 sm:w-32"
      >
        <div className="absolute left-0 top-4 h-16 w-16 rotate-[-8deg] rounded-xl border border-[#101828]/15 bg-white/70 sm:h-[4.5rem] sm:w-[4.5rem]" />

        <div className="absolute bottom-1 right-0 h-[4.5rem] w-[4.5rem] rotate-[6deg] rounded-xl border border-[#2563EB]/30 bg-[#2563EB]/10 sm:h-20 sm:w-20" />

        <div className="absolute left-4 top-9 h-1.5 w-7 rounded-full bg-[#101828]/20" />

        <div className="absolute bottom-7 right-3 h-2 w-8 rounded-full bg-[#2563EB]" />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="relative h-24 w-28 sm:h-28 sm:w-32"
    >
      <div className="absolute inset-x-1 top-2 h-20 rounded-xl border border-[#101828]/15 bg-white/60 sm:h-[5.5rem]" />

      <div className="absolute left-1 top-2 h-5 w-[calc(100%-0.5rem)] rounded-t-xl border-b border-[#101828]/10 bg-[#101828]/5" />

      <div className="absolute left-4 top-11 h-2 w-2 rounded-sm bg-[#2563EB]" />

      <div className="absolute left-8 top-11 h-1.5 w-10 rounded-full bg-[#101828]/20" />

      <div className="absolute bottom-5 left-4 h-1.5 w-14 rounded-full bg-[#101828]/15" />

      <div className="absolute bottom-2 right-0 h-5 w-5 rounded-full bg-[#2563EB]" />
    </div>
  );
}

export default function WhoWeWorkWith() {
  return (
    <section
      aria-labelledby="who-we-work-with-heading"
      className="bg-[#F7F6F2] text-[#101828]"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        {/* Introduction */}
        <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-[#2563EB]"
              />

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#101828]/60">
                Who we work with
              </p>
            </div>

            <h2
              id="who-we-work-with-heading"
              className="max-w-3xl text-3xl font-semibold leading-[1.12] tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-[3.5rem]"
            >
              Different businesses.
              <br />
              Different{" "}
              <span className="text-[#2563EB]">challenges.</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-[#101828]/65 sm:text-lg sm:leading-9 lg:pb-1">
            Some businesses need to establish a stronger online presence.
            Others have outgrown their existing website or need a digital
            tool built around the way they work. The right solution starts
            with understanding the difference.
          </p>
        </div>

        {/* Audience rows */}
        <div className="mt-14 border-t border-[#101828]/15 sm:mt-16">
          {audiences.map((audience) => (
            <article
              key={audience.number}
              className="group grid gap-5 border-b border-[#101828]/15 py-8 sm:py-10 lg:grid-cols-[64px_minmax(0,1fr)_160px] lg:items-center lg:gap-8 lg:py-12"
            >
              {/* Number */}
              <span className="text-xs font-medium tracking-[0.14em] text-[#2563EB]">
                / {audience.number}
              </span>

              {/* Main content */}
              <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-8">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#101828]/45">
                    {audience.label}
                  </p>

                  <h3 className="mt-3 max-w-xl text-xl font-semibold leading-snug tracking-[-0.035em] sm:text-2xl lg:text-[1.75rem]">
                    {audience.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[#101828]/65 sm:text-base sm:leading-8">
                    {audience.description}
                  </p>

                  <Link
                    href={audience.href}
                    className="mt-5 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-[#101828] transition-colors hover:text-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F7F6F2]"
                  >
                    {audience.fit}
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none"
                    >
                      →
                    </span>
                  </Link>
                </div>

                {/* Abstract illustration */}
                <div className="hidden sm:block">
                  <AudienceVisual type={audience.visual} />
                </div>
              </div>

              {/* Row marker */}
              <div className="hidden justify-self-end lg:block">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#101828]/15 text-lg transition-colors duration-200 group-hover:border-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white"
                >
                  ↗
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-10 flex flex-col gap-5 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-base leading-8 text-[#101828]/65">
            Not sure which direction makes sense for your business? Start
            with the problem you&apos;re trying to solve.
          </p>

          <Link
            href="/contact"
            className="inline-flex min-h-12 w-fit shrink-0 items-center justify-center gap-3 rounded-full bg-[#101828] px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F7F6F2]"
          >
            Let&apos;s talk about your project
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}