const processSteps = [
  {
    number: "01",
    label: "Discover",
    title: "Understand the context.",
    description:
      "Before deciding what to build, we look at the business, its audience, its goals, and the challenges standing in the way.",
    outcome: "A clearer picture of the problem.",
    marker: "discover",
  },
  {
    number: "02",
    label: "Define",
    title: "Find the right direction.",
    description:
      "We turn what we learn into a clearer direction: what the experience needs to achieve, which features matter, and where to focus first.",
    outcome: "A defined purpose and scope.",
    marker: "define",
  },
  {
    number: "03",
    label: "Create",
    title: "Design and develop with intent.",
    description:
      "We bring the direction to life through considered design and purposeful engineering, balancing the needs of the people using the product with the goals of the business.",
    outcome: "A coherent digital experience.",
    marker: "create",
  },
  {
    number: "04",
    label: "Evolve",
    title: "Make room for what's next.",
    description:
      "We consider what happens after launch, including maintenance, feedback, and future needs, so the next step can be approached with clarity.",
    outcome: "A foundation for future improvement.",
    marker: "evolve",
  },
] as const;

function ProcessMarker({
  type,
}: {
  type: (typeof processSteps)[number]["marker"];
}) {
  return (
    <div
      aria-hidden="true"
      className="relative flex h-16 w-16 shrink-0 items-center justify-center"
    >
      {type === "discover" && (
        <>
          <div className="absolute h-12 w-12 rounded-full border border-[#101828]/20" />
          <div className="absolute h-7 w-7 rounded-full border border-[#2563EB]/60" />
          <div className="absolute h-2.5 w-2.5 rounded-full bg-[#2563EB]" />
        </>
      )}

      {type === "define" && (
        <>
          <div className="absolute left-2 top-2 h-10 w-10 rotate-[-12deg] rounded-xl border border-[#101828]/20" />
          <div className="absolute bottom-2 right-1 h-8 w-8 rounded-lg border border-[#2563EB]/60 bg-[#2563EB]/10" />
          <div className="absolute bottom-5 right-4 h-2 w-2 rounded-full bg-[#2563EB]" />
        </>
      )}

      {type === "create" && (
        <div className="grid h-11 w-11 grid-cols-3 gap-1">
          {Array.from({ length: 9 }, (_, index) => (
            <span
              key={index}
              className={`rounded-[2px] ${
                index === 1 || index === 3 || index === 4 || index === 7
                  ? "bg-[#2563EB]"
                  : "border border-[#101828]/20"
              }`}
            />
          ))}
        </div>
      )}

      {type === "evolve" && (
        <>
          <div className="absolute bottom-3 left-2 h-4 w-3 rounded-sm bg-[#2563EB]/25" />
          <div className="absolute bottom-3 left-6 h-7 w-3 rounded-sm bg-[#2563EB]/55" />
          <div className="absolute bottom-3 left-10 h-10 w-3 rounded-sm bg-[#2563EB]" />
          <div className="absolute right-1 top-1 text-lg font-medium text-[#101828]">
            ↗
          </div>
        </>
      )}
    </div>
  );
}

export default function HowWeThink() {
  return (
    <section
      id="how-we-think"
      aria-labelledby="how-we-think-heading"
      className="overflow-hidden bg-[#F7F6F2] text-[#101828]"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        {/* Introduction */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-[#2563EB]"
              />

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#101828]/60">
                How we think
              </p>
            </div>

            <h2
              id="how-we-think-heading"
              className="max-w-3xl text-3xl font-semibold leading-[1.12] tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-[3.5rem]"
            >
              Better outcomes begin with{" "}
              <span className="text-[#2563EB]">better questions.</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-[#101828]/65 sm:text-lg sm:leading-9 lg:pb-1">
            Every project starts with decisions. Understanding the problem
            first helps us choose what deserves attention, what the solution
            should do, and how to build it around real needs.
          </p>
        </div>

        {/* Process overview */}
        <div className="mt-16 border-t border-[#101828]/15 sm:mt-20">
          {processSteps.map((step, index) => (
            <article
              key={step.number}
              className="grid gap-5 border-b border-[#101828]/15 py-8 sm:py-10 lg:grid-cols-[100px_1fr_0.9fr] lg:gap-10 lg:py-12"
            >
              {/* Number and marker */}
              <div className="flex items-center justify-between lg:block">
                <span className="text-xs font-medium tracking-[0.14em] text-[#2563EB]">
                  / {step.number}
                </span>

                <div className="lg:mt-5">
                  <ProcessMarker type={step.marker} />
                </div>
              </div>

              {/* Main content */}
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#101828]/45">
                  {step.label}
                </p>

                <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.04em] sm:text-3xl">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#101828]/65 sm:text-base sm:leading-8">
                  {step.description}
                </p>
              </div>

              {/* Intended outcome */}
              <div className="flex items-start gap-3 lg:justify-self-end lg:pt-8">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]"
                />

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#101828]/45">
                    The intention
                  </p>

                  <p className="mt-2 max-w-xs text-sm font-medium leading-6 text-[#101828]/80 sm:text-base">
                    {step.outcome}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-12 flex flex-col gap-4 sm:mt-16 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
          <p className="max-w-2xl text-lg font-medium leading-8 tracking-[-0.025em] sm:text-xl sm:leading-9">
            The process can adapt to the project. The aim stays the same:
            solve the right problem with the right approach.
          </p>

          <a
            href="/services"
            className="inline-flex w-fit shrink-0 items-center gap-3 text-sm font-semibold text-[#101828] transition-colors hover:text-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-4"
          >
            Explore our services
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}