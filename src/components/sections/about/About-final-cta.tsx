import Link from "next/link";

export default function AboutFinalCta() {
  return (
    <section
      aria-labelledby="about-final-cta-heading"
      className="relative isolate overflow-hidden bg-[#101828] text-white"
    >
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-28 -z-10 h-80 w-80 rounded-full border border-white/[0.08] sm:-right-20 sm:-top-36 sm:h-[28rem] sm:w-[28rem]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-16 -z-10 h-56 w-56 rounded-full border border-white/[0.08] sm:-right-8 sm:-top-24 sm:h-80 sm:w-80"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[12%] top-[18%] -z-10 h-16 w-16 rotate-12 rounded-2xl bg-[#2563EB]/20 sm:h-24 sm:w-24"
      />

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          {/* Main message */}
          <div className="max-w-4xl">
            <div className="mb-7 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-[#2563EB]"
              />

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                Let&apos;s start a conversation
              </p>
            </div>

            <h2
              id="about-final-cta-heading"
              className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.05em] sm:text-5xl md:text-6xl lg:text-[5rem]"
            >
              Have a challenge{" "}
              <span className="text-[#94A3B8]">worth solving?</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 sm:text-lg sm:leading-9">
              Tell us what your business needs, what isn&apos;t working, or what
              you&apos;d like to build. We&apos;ll start by understanding the problem
              and exploring the right direction.
            </p>
          </div>

          {/* Primary CTA */}
          <div className="flex flex-col items-start gap-5 lg:items-end lg:pb-2">
            <Link
              href="/contact"
              className="group inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-[#2563EB] px-7 py-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-[#101828] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#101828] sm:text-base"
            >
              Discuss your project

              <span
                aria-hidden="true"
                className="text-lg transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transform-none"
              >
                ↗
              </span>
            </Link>

            <Link
              href="/services"
              className="group inline-flex min-h-10 items-center gap-2 text-sm font-medium text-white/65 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#101828]"
            >
              Explore our services

              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none"
              >
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Closing brand statement */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/15 pt-6 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-7 text-white/50">
            Start with the problem. Find the right way forward.
          </p>

          <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/45">
            Zyncode · Design & Development
          </span>
        </div>
      </div>
    </section>
  );
}