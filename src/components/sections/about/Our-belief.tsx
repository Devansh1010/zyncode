const principles = [
  {
    number: "01",
    title: "Clarity over complexity",
    description:
      "Make information easier to understand, value easier to recognize, and decisions easier to make.",
  },
  {
    number: "02",
    title: "People before pixels",
    description:
      "Design around the needs, questions, and behavior of the people who will actually use the experience.",
  },
  {
    number: "03",
    title: "Purpose behind every detail",
    description:
      "Every meaningful design and technical decision should serve a reason—not just make something look impressive.",
  },
];

export default function OurBelief() {
  return (
    <section
      id="our-belief"
      aria-labelledby="our-belief-heading"
      className="bg-[#F7F6F2] text-[#101828]"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        {/* Editorial introduction */}
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-[#2563EB]"
              />

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#101828]/60">
                What we believe
              </p>
            </div>

            <h2
              id="our-belief-heading"
              className="max-w-3xl text-3xl font-semibold leading-[1.15] tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-[3.5rem]"
            >
              Good digital experiences make things clearer for people—and more{" "}
              <span className="text-[#2563EB]">valuable for businesses.</span>
            </h2>
          </div>

          <div className="flex items-end lg:pb-2">
            <p className="max-w-xl text-base leading-8 text-[#101828]/65 sm:text-lg sm:leading-9">
              A website or digital product should do more than look good. It
              should help people understand what you offer, feel confident in
              their decisions, and take the next step. That means understanding
              the business behind the screen just as carefully as the people
              using it.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-14 h-px bg-[#101828]/15 sm:my-16 lg:my-20" />

        {/* Principles */}
        <div className="grid gap-0 md:grid-cols-3">
          {principles.map((principle, index) => (
            <article
              key={principle.number}
              className={`py-7 md:py-2 ${
                index !== 0
                  ? "border-t border-[#101828]/12 md:border-l md:border-t-0 md:pl-7 lg:pl-10"
                  : "md:pr-7 lg:pr-10"
              } ${
                index === 1 ? "lg:px-10" : ""
              }`}
            >
              <span className="text-xs font-medium tracking-[0.12em] text-[#2563EB]">
                {principle.number}
              </span>

              <h3 className="mt-6 max-w-xs text-xl font-semibold leading-snug tracking-[-0.03em] sm:text-2xl">
                {principle.title}
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-7 text-[#101828]/60 sm:text-base sm:leading-8">
                {principle.description}
              </p>
            </article>
          ))}
        </div>

        {/* Closing thought */}
        <div className="mt-12 border-l-2 border-[#2563EB] py-1 pl-5 sm:mt-16 sm:pl-7">
          <p className="max-w-3xl text-lg font-medium leading-8 tracking-[-0.02em] text-[#101828]/80 sm:text-xl sm:leading-9">
            The goal isn&apos;t simply to put something online. It&apos;s to make the
            experience useful for the people it serves.
          </p>
        </div>
      </div>
    </section>
  );
}