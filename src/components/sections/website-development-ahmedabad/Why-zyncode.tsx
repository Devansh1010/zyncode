const principles = [
  {
    number: "01",
    title: "We start with your business.",
    description:
      "Before choosing layouts or features, we work to understand your business, your audience, and what you need your website to accomplish. The solution should fit the problem—not the other way around.",
    keywords: "Business-first thinking",
  },
  {
    number: "02",
    title: "We design for real people.",
    description:
      "A website should make it easy for visitors to understand your offering, find relevant information, build confidence, and take the next step. Every interaction should have a reason to exist.",
    keywords: "User-focused design",
  },
  {
    number: "03",
    title: "We build beyond appearances.",
    description:
      "Visual design matters, but so do performance, accessibility, maintainability, and reliable functionality. We bring design and engineering together to create useful digital experiences.",
    keywords: "Design meets engineering",
  },
  {
    number: "04",
    title: "We think beyond launch day.",
    description:
      "Your business and its needs can change over time. We consider maintainability, future improvements, and appropriate ongoing support as part of the broader website conversation.",
    keywords: "Built for the next step",
  },
];

export default function WhyZyncode() {
  return (
    <section
      id="why-zyncode"
      aria-labelledby="why-zyncode-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-12 lg:py-32">
        {/* Section heading */}
        <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-[#2563EB]"
              />

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#667085]">
                The Zyncode approach
              </p>
            </div>

            <h2
              id="why-zyncode-heading"
              className="max-w-xl text-3xl font-semibold leading-[1.15] tracking-[-0.045em] text-[#101828] sm:text-4xl lg:text-5xl"
            >
              More than a website. A better way to solve the problem.
            </h2>
          </div>

          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-base leading-7 text-[#667085] sm:text-lg sm:leading-8">
              Choosing a website development partner means choosing how
              your digital presence will be planned, designed, and built.
              At Zyncode, we believe the strongest work begins with
              understanding what your business and its audience actually
              need.
            </p>
          </div>
        </div>

        {/* Principles */}
        <div className="mt-14 grid gap-x-12 sm:mt-20 sm:grid-cols-2 lg:gap-x-20">
          {principles.map((principle) => (
            <article
              key={principle.number}
              className="border-t border-[#E4E7EC] py-8 sm:py-10"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-semibold tracking-wide text-[#2563EB]">
                  {principle.number}
                </span>

                <span className="text-right text-xs font-medium text-[#98A2B3]">
                  {principle.keywords}
                </span>
              </div>

              <h3 className="mt-6 max-w-md text-xl font-semibold leading-snug tracking-[-0.03em] text-[#101828] sm:text-2xl">
                {principle.title}
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#667085] sm:text-base sm:leading-8">
                {principle.description}
              </p>
            </article>
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-8 border-t border-[#E4E7EC] pt-8 sm:mt-12 sm:pt-10">
          <p className="max-w-3xl text-xl font-medium leading-relaxed tracking-[-0.025em] text-[#101828] sm:text-2xl">
            The goal isn&apos;t to add more to your website. It&apos;s to make
            every important part of the experience work together.
          </p>
        </div>
      </div>
    </section>
  );
}