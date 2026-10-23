import Link from "next/link";

export default function AhmedabadHero() {
  return (
    <section className="relative overflow-hidden bg-[#F7F6F2]">
      <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-14 px-6 py-20 sm:px-10 lg:grid-cols-[1fr_0.95fr] lg:gap-12 lg:px-12 lg:py-24">
        {/* Copy */}
        <div className="relative z-10 max-w-2xl">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-8 bg-[#2563EB]" />

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#475467]">
              Website Development · Ahmedabad
            </p>
          </div>

          <h1 className="text-4xl font-semibold leading-[1.12] tracking-[-0.055em] text-[#101828] sm:text-5xl lg:text-[4.25rem]">
            Websites built around your business, not just your brand.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-[#667085] sm:text-lg sm:leading-8">
            Looking for website development in Ahmedabad? Zyncode designs
            and builds business websites and custom digital experiences that
            help people understand what you offer, trust your business, and
            take the next step.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#2563EB] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1D4ED8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
            >
              Discuss your project
              <span aria-hidden="true" className="ml-3 text-base">
                ↗
              </span>
            </Link>

            <Link
              href="#our-solutions"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#D0D5DD] px-6 py-3 text-sm font-medium text-[#101828] transition-colors hover:border-[#98A2B3] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
            >
              Explore our solutions
            </Link>
          </div>

          <div className="mt-12 border-t border-[#E4E2DC] pt-6">
            <p className="text-sm leading-6 text-[#667085]">
              From your first business website to a more capable digital
              platform, start with the problem you need to solve.
            </p>
          </div>
        </div>

        {/* Visual composition */}
        <div
          aria-label="Illustrative website design concept showing a business website layout"
          role="img"
          className="relative mx-auto w-full max-w-[560px]"
        >
          <div className="absolute -right-2 top-5 h-40 w-40 rounded-full border border-[#D7D5CE] sm:-right-5 sm:h-52 sm:w-52" />

          <div className="absolute -bottom-5 -left-3 h-28 w-28 rounded-full bg-[#E6EAF2] sm:-left-6 sm:h-36 sm:w-36" />

          <div className="relative z-10 rounded-2xl border border-[#E4E2DC] bg-white p-3 shadow-[0_24px_80px_-32px_rgba(16,24,40,0.24)] sm:p-4">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b border-[#EAECF0] px-2 pb-4">
              <span className="h-2.5 w-2.5 rounded-full bg-[#D0D5DD]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#D0D5DD]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#D0D5DD]" />

              <div className="ml-4 h-7 flex-1 rounded-md bg-[#F2F4F7]" />

              <span className="ml-2 text-[10px] font-medium text-[#98A2B3]">
                WEB CONCEPT
              </span>
            </div>

            {/* Website concept */}
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="h-3 w-24 rounded-sm bg-[#101828]" />

                <div className="flex items-center gap-2 sm:gap-4">
                  <span className="h-1.5 w-8 rounded-full bg-[#D0D5DD] sm:w-10" />
                  <span className="h-1.5 w-8 rounded-full bg-[#D0D5DD] sm:w-10" />
                  <span className="h-7 w-16 rounded-full bg-[#2563EB] sm:w-20" />
                </div>
              </div>

              <div className="mt-9 grid grid-cols-[1.05fr_0.95fr] items-center gap-4 sm:mt-12 sm:gap-6">
                <div>
                  <div className="h-2 w-14 rounded-full bg-[#93B4F8]" />

                  <div className="mt-4 space-y-2">
                    <div className="h-4 w-full rounded-sm bg-[#101828]" />
                    <div className="h-4 w-[88%] rounded-sm bg-[#101828]" />
                    <div className="h-4 w-[68%] rounded-sm bg-[#101828]" />
                  </div>

                  <div className="mt-4 space-y-1.5">
                    <div className="h-1.5 w-full rounded-full bg-[#EAECF0]" />
                    <div className="h-1.5 w-[85%] rounded-full bg-[#EAECF0]" />
                    <div className="h-1.5 w-[65%] rounded-full bg-[#EAECF0]" />
                  </div>

                  <div className="mt-5 h-8 w-24 rounded-full bg-[#2563EB]" />
                </div>

                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[#E8EDF5]">
                  <div className="absolute inset-x-3 bottom-3 top-3 rounded-t-full border border-[#C7D4E8]" />

                  <div className="absolute bottom-0 left-0 h-[58%] w-[65%] rounded-tr-[80px] bg-[#C3D2E7]" />

                  <div className="absolute bottom-0 right-0 h-[78%] w-[48%] rounded-tl-[80px] bg-[#9DB5D7]" />

                  <div className="absolute right-3 top-3 h-9 w-9 rounded-full border border-white/80" />
                </div>
              </div>

              {/* Supporting content blocks */}
              <div className="mt-8 grid grid-cols-3 gap-2 border-t border-[#EAECF0] pt-5 sm:mt-10 sm:gap-3">
                <div className="rounded-lg bg-[#F7F6F2] p-3">
                  <div className="h-2 w-8 rounded-full bg-[#98A2B3]" />
                  <div className="mt-3 h-2 w-full rounded-full bg-[#D0D5DD]" />
                  <div className="mt-1.5 h-2 w-3/4 rounded-full bg-[#E4E7EC]" />
                </div>

                <div className="rounded-lg bg-[#F7F6F2] p-3">
                  <div className="h-2 w-8 rounded-full bg-[#98A2B3]" />
                  <div className="mt-3 h-2 w-full rounded-full bg-[#D0D5DD]" />
                  <div className="mt-1.5 h-2 w-3/4 rounded-full bg-[#E4E7EC]" />
                </div>

                <div className="rounded-lg bg-[#F7F6F2] p-3">
                  <div className="h-2 w-8 rounded-full bg-[#98A2B3]" />
                  <div className="mt-3 h-2 w-full rounded-full bg-[#D0D5DD]" />
                  <div className="mt-1.5 h-2 w-3/4 rounded-full bg-[#E4E7EC]" />
                </div>
              </div>
            </div>
          </div>

          {/* Floating annotation */}
          <div className="absolute -bottom-7 right-3 z-20 max-w-[210px] rounded-xl border border-[#E4E2DC] bg-white p-4 shadow-lg sm:-right-4 sm:max-w-[230px]">
            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EAF0FF] text-sm font-semibold text-[#2563EB]">
                ↗
              </span>

              <div>
                <p className="text-sm font-semibold text-[#101828]">
                  Built with intention
                </p>

                <p className="mt-1 text-xs leading-5 text-[#667085]">
                  Clear messaging. Useful journeys. Purposeful functionality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}