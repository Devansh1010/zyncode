const problems = [
  {
    number: "01",
    title: "Too much depends on manual work.",
    description:
      "Your team repeatedly enters information, follows up on tasks, updates records, or moves data between systems. Work that should be straightforward takes more time and creates unnecessary room for errors.",
  },
  {
    number: "02",
    title: "Your tools don't work together.",
    description:
      "Important information lives in different applications, spreadsheets, and communication channels. Your team struggles to get a complete picture because everything operates separately.",
  },
  {
    number: "03",
    title: "Your existing software limits growth.",
    description:
      "Your business has new requirements, but your current software cannot accommodate them. Workarounds become increasingly complicated, and adapting your processes to the software becomes frustrating.",
  },
  {
    number: "04",
    title: "You have an idea that needs to become reality.",
    description:
      "You see an opportunity for a new digital product, platform, or business application. Turning that idea into a usable, reliable product requires the right technical approach.",
  },
];

export default function ProblemRecognition() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-360 lg:px-14">

        {/* Section introduction */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-brand" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
              When existing systems hold you back
            </span>
          </div>

          <h2 className="mt-7 text-heading-1 text-ink">
            Your business has evolved. Your systems need to catch up.
          </h2>

          <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#667085] sm:text-base">
            As businesses grow, processes become more complicated. What once
            worked with spreadsheets, manual coordination, and off-the-shelf
            tools can eventually become difficult to manage.
          </p>
        </div>

        {/* Problem grid */}
        <div className="mt-16 grid grid-cols-1 gap-x-16 sm:mt-20 sm:grid-cols-2 lg:gap-x-24">

          {problems.map((problem) => (
            <article
              key={problem.number}
              className="group border-t border-ink/10 py-8 sm:py-10 lg:py-12"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold tracking-tight text-brand">
                  {problem.number}
                </span>

                <span className="h-px w-8 bg-ink/20 transition-all duration-300 group-hover:w-12 group-hover:bg-brand" />
              </div>

              <h3 className="mt-7 max-w-md text-heading-3 text-ink transition-colors duration-200 group-hover:text-brand">
                {problem.title}
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-[1.85] text-[#667085] sm:text-[15px]">
                {problem.description}
              </p>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}