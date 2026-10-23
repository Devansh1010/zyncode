const problems = [
  {
    number: "01",
    title: "People visit, but don't understand your value.",
    description:
      "When your services, strengths, or offering aren't clear, potential customers have to work too hard to understand why they should choose your business.",
    outcome: "Your value should be clear from the first visit.",
  },
  {
    number: "02",
    title: "Your website doesn't build enough trust.",
    description:
      "An outdated design, unclear information, or a lack of useful business details can make visitors hesitate—even when your actual service is excellent.",
    outcome: "Give visitors reasons to feel confident.",
  },
  {
    number: "03",
    title: "The experience makes it difficult to take action.",
    description:
      "Confusing navigation, frustrating mobile layouts, or hard-to-find contact details can get between an interested visitor and their next step.",
    outcome: "Make the next step easy to find.",
  },
  {
    number: "04",
    title: "Your website no longer reflects your business.",
    description:
      "As your business grows, your services, customers, and goals change. Your website needs to keep up instead of holding your business back.",
    outcome: "Build an online presence that grows with you.",
  },
];

export default function BusinessProblems() {
  return (
    <section
      id="business-challenges"
      aria-labelledby="business-problems-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-12 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Section introduction */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="mb-6 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-[#2563EB]"
              />

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#667085]">
                Before we build
              </p>
            </div>

            <h2
              id="business-problems-heading"
              className="max-w-xl text-3xl font-semibold leading-[1.15] tracking-[-0.045em] text-[#101828] sm:text-4xl lg:text-5xl"
            >
              Your website should work as hard as your business does.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-[#667085] sm:text-lg sm:leading-8">
              A business website is often one of the first places people go
              to understand what you do and decide whether to trust you.
              Simply having a website isn&apos;t enough. The experience needs to
              help people move forward.
            </p>

            <p className="mt-5 max-w-lg text-sm leading-6 text-[#667085]">
              That&apos;s why we start by understanding your business, your
              customers, and what you need your website to accomplish.
            </p>

            <a
              href="#our-solutions"
              className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[#2563EB] transition-colors hover:text-[#1D4ED8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-4"
            >
              See how we approach these challenges

              <span aria-hidden="true" className="text-lg">
                →
              </span>
            </a>
          </div>

          {/* Business problems */}
          <div className="border-t border-[#E4E7EC]">
            {problems.map((problem) => (
              <article
                key={problem.number}
                className="grid gap-4 border-b border-[#E4E7EC] py-7 sm:grid-cols-[44px_1fr] sm:gap-5 sm:py-9"
              >
                <div className="flex items-start">
                  <span className="text-xs font-semibold tracking-wide text-[#2563EB]">
                    {problem.number}
                  </span>
                </div>

                <div>
                  <h3 className="max-w-lg text-xl font-semibold leading-snug tracking-[-0.025em] text-[#101828] sm:text-2xl">
                    {problem.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-[#667085] sm:text-base">
                    {problem.description}
                  </p>

                  <div className="mt-5 flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]"
                    />

                    <p className="text-sm font-medium leading-6 text-[#344054]">
                      {problem.outcome}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-14 flex flex-col gap-4 border-t border-[#E4E7EC] pt-8 sm:mt-16 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-2xl text-xl font-medium leading-relaxed tracking-[-0.025em] text-[#101828] sm:text-2xl">
            The right website starts with the right problem to solve.
          </p>

          <p className="max-w-sm text-sm leading-6 text-[#667085]">
            Not more features for the sake of it. A clearer, more useful
            experience for the people your business serves.
          </p>
        </div>
      </div>
    </section>
  );
}