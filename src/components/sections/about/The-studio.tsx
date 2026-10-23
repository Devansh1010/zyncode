const studioFocus = [
  {
    number: "01",
    title: "Business understanding",
    description:
      "Start with the goals, challenges, and people behind the project.",
  },
  {
    number: "02",
    title: "Digital design",
    description:
      "Shape clear, cohesive experiences around real user needs.",
  },
  {
    number: "03",
    title: "Thoughtful engineering",
    description:
      "Build practical digital solutions with a considered technical foundation.",
  },
];

function StudioMark() {
  return (
    <div
      aria-hidden="true"
      className="relative h-44 w-44 sm:h-52 sm:w-52"
    >
      {/* Outer frame */}
      <div className="absolute inset-0 rounded-[2rem] border border-white/15" />

      {/* Offset inner frame */}
      <div className="absolute inset-5 rotate-[-10deg] rounded-[1.5rem] border border-white/25" />

      {/* Accent shape */}
      <div className="absolute inset-[31%] rotate-12 rounded-2xl bg-[#2563EB]" />

      {/* Center detail */}
      <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />

      {/* Corner markers */}
      <span className="absolute -left-1 -top-1 h-2 w-2 rounded-full bg-[#2563EB]" />
      <span className="absolute -bottom-1 -right-1 h-2 w-2 rounded-full bg-white/60" />
    </div>
  );
}

export default function TheStudio() {
  return (
    <section
      aria-labelledby="studio-heading"
      className="overflow-hidden bg-[#101828] text-white"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        {/* Editorial introduction */}
        <div className="grid gap-12 lg:grid-cols-[1fr_0.65fr] lg:items-center lg:gap-20">
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-[#2563EB]"
              />

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                The studio
              </p>
            </div>

            <h2
              id="studio-heading"
              className="max-w-3xl text-3xl font-semibold leading-[1.12] tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-[3.75rem]"
            >
              Independent by nature.
              <br />
              <span className="text-[#94A3B8]">
                Considered in every detail.
              </span>
            </h2>
          </div>

          <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center lg:flex-col lg:items-start">
            <p className="max-w-xl text-base leading-8 text-white/65 sm:text-lg sm:leading-9">
              Zyncode brings business thinking, digital design, and development
              together to create useful digital experiences. The starting
              point isn&apos;t a particular technology or visual trend. It&apos;s
              understanding what the business needs, who the experience is
              for, and what it should help them accomplish.
            </p>

            <div className="hidden shrink-0 sm:block lg:ml-1">
              <StudioMark />
            </div>
          </div>
        </div>

        {/* Studio focus */}
        <div className="mt-16 border-t border-white/15 sm:mt-20 lg:mt-24">
          <div className="grid gap-0 md:grid-cols-3">
            {studioFocus.map((item, index) => (
              <article
                key={item.number}
                className={`py-8 sm:py-10 ${
                  index !== 0
                    ? "border-t border-white/15 md:border-l md:border-t-0 md:pl-7 lg:pl-10"
                    : "md:pr-7 lg:pr-10"
                } ${index === 1 ? "lg:px-10" : ""}`}
              >
                <p className="text-xs font-medium tracking-[0.14em] text-[#94A3B8]">
                  / {item.number}
                </p>

                <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Closing line */}
        <div className="mt-5 flex flex-col gap-3 border-t border-white/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-7 text-white/55 sm:text-base">
            Different disciplines, working toward one clear purpose.
          </p>

          <span className="text-sm font-medium text-white/80">
            Business. Design. Technology.
          </span>
        </div>
      </div>
    </section>
  );
}