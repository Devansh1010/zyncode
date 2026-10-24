
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  PenTool,
} from "lucide-react";

const studioFocus = [
  {
    number: "01",
    title: "Business thinking",
    description:
      "Understand your business, your customers, and the outcomes that matter before deciding what to build.",
    icon: BriefcaseBusiness,
  },
  {
    number: "02",
    title: "Digital design",
    description:
      "Turn complex ideas into clear, intuitive experiences that feel natural to use and easy to understand.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Thoughtful engineering",
    description:
      "Build reliable, practical digital solutions with a technical foundation designed to support your needs.",
    icon: Code2,
  },
] as const;

function StudioMark() {
  return (
    <div
      aria-hidden="true"
      className="relative aspect-square w-full max-w-75"
    >
      {/* Outer architectural frame */}
      <div className="absolute inset-[8%] border border-white/12" />

      {/* Offset frame */}
      <div className="absolute inset-[18%] -rotate-12 border border-white/18" />

      {/* Central structure */}
      <div className="absolute inset-[29%] rotate-12 border border-white/25">
        <div className="absolute inset-[18%] bg-brand" />
      </div>

      {/* Precision line */}
      <div className="absolute left-1/2 top-[8%] h-[84%] w-px -translate-x-1/2 bg-white/12" />

      {/* Horizontal axis */}
      <div className="absolute left-[8%] top-1/2 h-px w-[84%] -translate-y-1/2 bg-white/12" />

      {/* Center point */}
      <div className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />

      {/* Corner markers */}
      <span className="absolute left-[8%] top-[8%] size-2 bg-brand" />
      <span className="absolute bottom-[8%] right-[8%] size-2 bg-white/50" />

      {/* Caption */}
      <span className="absolute bottom-0 left-0 text-[10px] uppercase tracking-[0.18em] text-white/40">
        Independent by design
      </span>

      <span className="absolute right-0 top-0 font-mono text-[10px] text-white/40">
        Z / 01
      </span>
    </div>
  );
}

export default function TheStudio() {
  return (
    <section
      aria-labelledby="studio-heading"
      className="relative overflow-hidden bg-ink text-white"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        {/* Introduction */}
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(280px,0.7fr)] lg:items-center lg:gap-20">
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-brand"
              />

              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55">
                Inside Zyncode
              </p>
            </div>

            <h2
              id="studio-heading"
              className="max-w-3xl text-balance text-4xl font-medium leading-[1.08] tracking-[-0.055em] sm:text-5xl lg:text-[64px]"
            >
              Independent by nature.
              <br />

              <span className="text-subtle">
                Considered in every detail.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
              Great digital work starts with understanding people, not picking
              technology. Zyncode brings business thinking, digital design,
              and engineering together to create experiences that solve real
              problems and make a meaningful difference.
            </p>

            {/* Calls to action */}
            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-7">
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-3 bg-[#2563eb] px-5 text-sm font-medium text-white transition-colors hover:bg-[#1d4ed8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#101828]"
              >
                Discuss your project

                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
                />
              </Link>

              <Link
                href="/work"
                className="group inline-flex min-h-11 items-center gap-2 text-sm font-medium text-white/75 transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Explore our work

                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none"
                />
              </Link>
            </div>
          </div>

          {/* Decorative studio identity */}
          <div className="relative mx-auto w-full max-w-[300px] lg:ml-auto">
            <StudioMark />
          </div>
        </div>

        {/* Studio disciplines */}
        <div className="mt-20 border-t border-white/[0.15] sm:mt-24 lg:mt-28">
          <div className="grid md:grid-cols-3">
            {studioFocus.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className={[
                    "min-w-0 py-8 sm:py-9 lg:py-10",
                    index === 0
                      ? "md:pr-7 lg:pr-10"
                      : "border-t border-white/[0.15] md:border-l md:border-t-0 md:px-7 lg:px-10",
                    index === 2 ? "md:pr-0" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#94a3b8]">
                      / {item.number}
                    </span>

                    <Icon
                      aria-hidden="true"
                      className="size-[18px] text-white/45"
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3 className="mt-7 text-xl font-medium tracking-[-0.035em] sm:text-[22px]">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-7 text-white/55">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Closing statement */}
        <div className="flex flex-col gap-4 border-t border-white/[0.15] pt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p className="max-w-xl text-sm leading-6 text-white/50">
            One collaborative approach, from the first question to the finished
            experience.
          </p>

          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-white/70">
            <span className="size-1.5 bg-[#2563eb]" />
            Business. Design. Technology.
          </div>
        </div>
      </div>
    </section>
  );
}
