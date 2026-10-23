
import Link from "next/link";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Check,
} from "lucide-react";

const capabilities = [
  "Business websites",
  "Custom web applications",
  "Website redesign",
];

function WebsitePreview() {
  return (
    <div className="relative">
      {/* Main browser preview */}
      <div className="relative z-10 overflow-hidden border border-[#101828]/10 bg-white shadow-[0_24px_80px_rgba(16,24,40,0.09)]">
        <div className="flex h-10 items-center justify-between border-b border-[#101828]/8 px-4">
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-[#101828]/15" />
            <span className="size-2 rounded-full bg-[#101828]/15" />
            <span className="size-2 rounded-full bg-[#101828]/15" />
          </div>

          <span className="text-[9px] tracking-wide text-[#101828]/40">
            YOUR BUSINESS, ONLINE
          </span>

          <ArrowUpRight
            aria-hidden="true"
            className="size-3.5 text-[#101828]/40"
          />
        </div>

        <div className="grid min-h-[310px] grid-cols-[1.1fr_0.9fr] sm:min-h-[360px]">
          <div className="flex flex-col justify-between p-5 sm:p-7">
            <div className="flex items-center gap-2">
              <span className="flex size-6 items-center justify-center bg-[#2563EB] text-[10px] font-semibold text-white">
                Z
              </span>
              <span className="text-[10px] font-semibold tracking-tight text-[#101828]">
                BUSINESS STUDIO
              </span>
            </div>

            <div className="py-7">
              <p className="mb-3 text-[9px] font-medium uppercase tracking-[0.17em] text-[#2563EB]">
                Built around you
              </p>

              <div className="space-y-2">
                <div className="h-5 w-full bg-[#101828]" />
                <div className="h-5 w-[78%] bg-[#101828]" />
                <div className="h-5 w-[90%] bg-[#101828]" />
              </div>

              <div className="mt-5 space-y-1.5">
                <div className="h-1.5 w-full bg-[#101828]/10" />
                <div className="h-1.5 w-[86%] bg-[#101828]/10" />
                <div className="h-1.5 w-[65%] bg-[#101828]/10" />
              </div>

              <div className="mt-6 flex items-center gap-2">
                <span className="inline-flex h-8 items-center bg-[#2563EB] px-3 text-[9px] font-medium text-white">
                  Get in touch
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-3.5 text-[#101828]/50"
                />
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-[#101828]/10 pt-3">
              <span className="text-[8px] uppercase tracking-wider text-[#101828]/40">
                Digital experience
              </span>
              <span className="text-[8px] text-[#101828]/40">01 / 03</span>
            </div>
          </div>

          <div className="relative overflow-hidden bg-[#EAE9E3]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_35%,rgba(37,99,235,0.12),transparent_65%)]" />

            <div className="absolute right-[8%] top-[12%] h-[70%] w-[75%] border border-[#101828]/10 bg-[#D9D9D1]">
              <div className="absolute inset-x-0 top-0 h-[8%] border-b border-[#101828]/10 bg-white/70" />

              <div className="absolute left-[12%] top-[20%] h-[3%] w-[50%] bg-[#101828]/70" />
              <div className="absolute left-[12%] top-[26%] h-[2%] w-[35%] bg-[#101828]/20" />

              <div className="absolute inset-x-[12%] bottom-[12%] top-[38%] overflow-hidden bg-[#C4C8C1]">
                <div className="absolute -right-[10%] -top-[10%] size-[90%] rounded-full border-[16px] border-[#101828]/10" />
                <div className="absolute bottom-0 left-[10%] h-[60%] w-[35%] bg-[#101828]/10" />
                <div className="absolute bottom-0 right-[8%] h-[75%] w-[25%] bg-[#2563EB]/60" />
              </div>
            </div>

            <div className="absolute bottom-[9%] left-[9%] flex h-[44%] w-[28%] items-start justify-center border-[3px] border-[#101828] bg-white p-1.5 shadow-lg">
              <div className="relative h-full w-full overflow-hidden bg-[#F7F6F2]">
                <div className="h-[5px] w-full bg-[#2563EB]" />
                <div className="mx-1 mt-2 h-1.5 w-[80%] bg-[#101828]" />
                <div className="mx-1 mt-1 h-1.5 w-[65%] bg-[#101828]" />
                <div className="mx-1 mt-2 h-10 bg-[#E1E2DC]" />
                <div className="mx-1 mt-2 h-1 w-[75%] bg-[#101828]/20" />
                <div className="mx-1 mt-1 h-1 w-[55%] bg-[#101828]/20" />
                <div className="mx-1 mt-2 h-3 bg-[#2563EB]" />
              </div>
            </div>

            <div className="absolute bottom-[12%] right-[8%] flex items-center gap-2 border border-[#101828]/10 bg-white px-3 py-2 shadow-sm">
              <span className="size-2 rounded-full bg-[#2563EB]" />
              <span className="text-[9px] font-medium text-[#101828]/75">
                Designed to connect
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary application preview */}
      <div className="absolute -bottom-7 -left-3 z-20 w-[48%] border border-[#101828]/10 bg-white p-3 shadow-[0_12px_35px_rgba(16,24,40,0.08)] sm:-left-7 sm:bottom-[-2rem] sm:p-4">
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="text-[9px] font-medium text-[#101828]/50">
              CUSTOM APPLICATION
            </p>
            <p className="mt-1 text-xs font-semibold tracking-tight text-[#101828] sm:text-sm">
              Work, organized.
            </p>
          </div>

          <span className="flex size-7 shrink-0 items-center justify-center bg-[#F0F3FA] text-[#2563EB]">
            <ArrowDownRight aria-hidden="true" className="size-4" />
          </span>
        </div>

        <div className="mt-4 flex gap-1.5">
          <div className="h-7 flex-1 border border-[#101828]/10 bg-[#F7F6F2]" />
          <div className="h-7 flex-1 border border-[#101828]/10 bg-[#F7F6F2]" />
          <div className="h-7 flex-1 border border-[#101828]/10 bg-[#E9EEFA]" />
        </div>
      </div>

      {/* Floating quality indicator */}
      <div className="absolute -right-2 -top-5 z-20 border border-[#101828]/10 bg-white px-3 py-2.5 shadow-sm sm:-right-5 sm:top-5 sm:px-4">
        <div className="flex items-center gap-2">
          <span className="flex size-6 items-center justify-center bg-[#EAF0FF] text-[#2563EB]">
            <Check aria-hidden="true" className="size-3.5" />
          </span>
          <div>
            <p className="text-[10px] font-semibold text-[#101828]">
              Made for your business
            </p>
            <p className="mt-0.5 text-[9px] text-[#101828]/50">
              Not a one-size-fits-all solution
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesHero() {
  return (
    <section
      aria-labelledby="services-hero-heading"
      className="overflow-hidden bg-[#F7F6F2]"
    >
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-16 sm:px-8 sm:pb-28 sm:pt-20 lg:px-12 lg:pb-32 lg:pt-24">
        <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Hero copy */}
          <div className="max-w-2xl">
            <div className="mb-7 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-[#2563EB]"
              />
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#101828]/55">
                Digital design & development
              </p>
            </div>

            <h1
              id="services-hero-heading"
              className="text-4xl font-medium leading-[1.08] tracking-[-0.05em] text-[#101828] sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem]"
            >
              Digital solutions built around{" "}
              <span className="text-[#2563EB]">your business.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-[#101828]/65 sm:text-lg sm:leading-8">
              From your first business website to a custom digital platform,
              we design and build experiences that help you communicate your
              value, serve your customers, and move your business forward.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="group inline-flex min-h-14 items-center justify-center gap-3 bg-[#2563EB] px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-[#1D4ED8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#101828]"
              >
                Discuss your project
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <a
                href="#our-services"
                className="group inline-flex min-h-14 items-center justify-center gap-2 px-5 py-4 text-sm font-medium text-[#101828] transition-colors hover:text-[#2563EB] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#101828]"
              >
                Explore our services
                <ArrowDown
                  aria-hidden="true"
                  className="size-4 transition-transform duration-200 group-hover:translate-y-1"
                />
              </a>
            </div>

            {/* Service categories */}
            <div className="mt-12 border-t border-[#101828]/12 pt-5">
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.15em] text-[#101828]/45">
                What we help you with
              </p>

              <ul className="flex flex-wrap gap-x-5 gap-y-2">
                {capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="flex items-center gap-2 text-xs text-[#101828]/65 sm:text-sm"
                  >
                    <span
                      aria-hidden="true"
                      className="size-1.5 rounded-full bg-[#2563EB]"
                    />
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Hero visual */}
          <div className="px-2 pb-10 pt-8 sm:px-5 sm:pb-12 lg:px-3">
            <WebsitePreview />
          </div>
        </div>

        {/* Bottom scroll cue */}
        <div className="mt-16 hidden items-center justify-between border-t border-[#101828]/10 pt-5 md:flex">
          <p className="text-xs text-[#101828]/45">
            The right digital solution starts with understanding your business.
          </p>

          <a
            href="#our-services"
            className="inline-flex items-center gap-2 text-xs font-medium text-[#101828]/60 transition-colors hover:text-[#2563EB] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#101828]"
          >
            Discover what we do
            <ArrowDown aria-hidden="true" className="size-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
