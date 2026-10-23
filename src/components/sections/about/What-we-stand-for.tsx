const commitments = [
  {
    number: "01",
    title: "Built around the business",
    description:
      "Every business has different goals, customers, and challenges. We shape the solution around what your business actually needs instead of forcing it into a predefined template.",
    visual: "business",
  },
  {
    number: "02",
    title: "Designed as a complete experience",
    description:
      "A strong website is more than an attractive interface. Content, navigation, visual hierarchy, and calls to action should work together to guide people through it.",
    visual: "experience",
  },
  {
    number: "03",
    title: "Engineered with intention",
    description:
      "The technology behind a digital experience matters, too. We consider functionality, maintainability, performance, and future needs when making technical decisions.",
    visual: "engineering",
  },
  {
    number: "04",
    title: "Made to move forward",
    description:
      "A launch creates a foundation for what comes next. We consider how a digital product can be maintained, evaluated, and improved as the business evolves.",
    visual: "growth",
  },
] as const;

function CommitmentVisual({
  type,
}: {
  type: (typeof commitments)[number]["visual"];
}) {
  if (type === "business") {
    return (
      <div
        aria-hidden="true"
        className="relative h-14 w-14"
      >
        <div className="absolute left-1 top-1 h-9 w-9 rounded-xl border border-[#101828]/20" />
        <div className="absolute bottom-1 right-1 h-9 w-9 rounded-xl border border-[#2563EB]/60 bg-[#2563EB]/10" />
        <div className="absolute left-5 top-5 h-4 w-4 rounded-full bg-[#2563EB]" />
      </div>
    );
  }

  if (type === "experience") {
    return (
      <div
        aria-hidden="true"
        className="relative flex h-14 w-14 items-center justify-center"
      >
        <div className="absolute h-12 w-12 rounded-full border border-[#101828]/15" />
        <div className="absolute h-8 w-8 rounded-full border border-[#101828]/25" />
        <div className="absolute h-3 w-3 rounded-full bg-[#2563EB]" />
        <div className="absolute right-0 top-0 h-2 w-2 rounded-full bg-[#101828]" />
      </div>
    );
  }

  if (type === "engineering") {
    return (
      <div
        aria-hidden="true"
        className="grid h-14 w-14 grid-cols-3 gap-1.5"
      >
        {Array.from({ length: 9 }, (_, index) => (
          <span
            key={index}
            className={`rounded-sm ${
              index === 4 || index === 7
                ? "bg-[#2563EB]"
                : "border border-[#101828]/20"
            }`}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="relative h-14 w-14"
    >
      <div className="absolute bottom-1 left-1 h-5 w-5 rounded-sm bg-[#2563EB]/20" />
      <div className="absolute bottom-1 left-7 h-8 w-5 rounded-sm bg-[#2563EB]/50" />
      <div className="absolute bottom-1 right-0 h-12 w-5 rounded-sm bg-[#2563EB]" />
      <div className="absolute right-0 top-0 h-2 w-2 rounded-full bg-[#101828]" />
    </div>
  );
}

export default function WhatWeStandFor() {
  return (
    <section
      aria-labelledby="stand-for-heading"
      className="bg-white text-[#101828]"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        {/* Section introduction */}
        <div className="max-w-3xl">
          <div className="mb-7 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-8 bg-[#2563EB]"
            />

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#101828]/60">
              What we stand for
            </p>
          </div>

          <h2
            id="stand-for-heading"
            className="text-3xl font-semibold leading-[1.15] tracking-[-0.045em] sm:text-4xl md:text-5xl"
          >
            The standard behind{" "}
            <span className="text-[#2563EB]">every decision.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#101828]/65 sm:text-lg sm:leading-9">
            Good work comes from more than a good idea. It takes the right
            questions, considered design decisions, dependable engineering,
            and an understanding of what happens after launch.
          </p>
        </div>

        {/* Commitments grid */}
        <div className="mt-14 grid border-t border-[#101828]/15 sm:mt-16 md:grid-cols-2">
          {commitments.map((commitment, index) => (
            <article
              key={commitment.number}
              className={`group grid grid-cols-[1fr_auto] gap-5 py-8 sm:py-10 ${
                index % 2 === 0
                  ? "md:border-r md:border-[#101828]/15 md:pr-8 lg:pr-12"
                  : "md:pl-8 lg:pl-12"
              } ${
                index >= 2
                  ? "border-t border-[#101828]/15"
                  : ""
              }`}
            >
              <div>
                <p className="text-xs font-medium tracking-[0.12em] text-[#2563EB]">
                  {commitment.number}
                </p>

                <h3 className="mt-5 max-w-sm text-xl font-semibold leading-snug tracking-[-0.03em] sm:text-2xl">
                  {commitment.title}
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-7 text-[#101828]/65 sm:text-base sm:leading-8">
                  {commitment.description}
                </p>
              </div>

              <div className="pt-1 transition-transform duration-300 group-hover:-translate-y-1 motion-reduce:transform-none">
                <CommitmentVisual type={commitment.visual} />
              </div>
            </article>
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-8 flex flex-col gap-4 border-t border-[#101828]/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-7 text-[#101828]/60 sm:text-base">
            Different projects call for different solutions. The commitment
            to making considered decisions stays the same.
          </p>

          <span className="shrink-0 text-sm font-medium text-[#101828]">
            Design with intent. Build with care.
          </span>
        </div>
      </div>
    </section>
  );
}