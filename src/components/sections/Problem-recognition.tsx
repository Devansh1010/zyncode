import { problems } from "@/constants/problem_recognization";

import { ProblemHeading, ProblemTakeaway, ProblemVisual } from "../ui/home/problem_recognization_ui";

import ExploreWorkBtn from "../layout/ExploreWorkBtn";
import TalkToUsWpBtn from "../layout/TalkToUsWpBtn";

export default function ProblemRecognition() {
  return (<section
    aria-labelledby="problem-recognition-title"
    className="relative overflow-hidden bg-[#F7F6F2] text-ink"
  >
    {/* Opening statement */} <div className="mx-auto max-w-360 px-5 pb-12 pt-20 sm:px-8 sm:pb-16 sm:pt-28 lg:px-12 lg:pb-20 lg:pt-32"> <div className="mx-auto max-w-200 text-center"> <div className="mb-6 inline-flex items-center gap-2.5"> <span className="h-px w-6 bg-brand/70" />


      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#62645F] sm:text-[11px]">
        Does this sound familiar?
      </span>

      <span className="h-px w-6 bg-brand/70" />
    </div>

      <h2
        id="problem-recognition-title"
        className="text-balance text-[clamp(2.5rem,5.7vw,5rem)] font-medium leading-[1.03] tracking-[-0.065em] text-ink"
      >
        You&apos;ve built something valuable.
        <span className="mt-2 block font-serif font-normal italic tracking-[-0.055em] text-brand">
          Does your digital experience show it?
        </span>
      </h2>

      <p className="mx-auto mt-7 max-w-145 text-pretty text-sm leading-7 text-[#62645F] sm:mt-8 sm:text-base sm:leading-8">
        Your website is often where potential customers decide whether to trust your business, understand your offering, and take the next step. If that experience is unclear or frustrating, valuable opportunities can be lost.
      </p>
    </div>
    </div>

    {/* Editorial problem 01 */}
    <div className="border-t border-[#EAE8E2]/70">
      <div className="mx-auto grid max-w-360 grid-cols-1 items-center gap-8 px-5 py-12 sm:px-8 sm:py-16 md:grid-cols-2 md:gap-10 lg:gap-16 lg:px-12 lg:py-20">
        <div className="order-1">
          <ProblemHeading problem={problems[0]} />

          <p className="mt-5 max-w-115 text-sm leading-7 text-[#62645F] sm:text-[15px]">
            {problems[0].description}
          </p>

          <ProblemTakeaway>{problems[0].takeaway}</ProblemTakeaway>
        </div>

        <div className="order-2 min-w-0">
          <ProblemVisual type={problems[0].visual} />
        </div>
      </div>
    </div>

    {/* Editorial problem 02 — reversed */}
    <div className="border-t border-[#EAE8E2]/70">
      <div className="mx-auto grid max-w-360 grid-cols-1 items-center gap-8 px-5 py-12 sm:px-8 sm:py-16 md:grid-cols-2 md:gap-10 lg:gap-16 lg:px-12 lg:py-20">
        <div className="order-2 min-w-0 md:order-1">
          <ProblemVisual type={problems[1].visual} />
        </div>

        <div className="order-1 md:order-2">
          <ProblemHeading problem={problems[1]} />

          <p className="mt-5 max-w-115 text-sm leading-7 text-[#62645F] sm:text-[15px]">
            {problems[1].description}
          </p>

          <ProblemTakeaway>{problems[1].takeaway}</ProblemTakeaway>
        </div>
      </div>
    </div>

    {/* Editorial problem 03 */}
    <div className="border-t border-[#EAE8E2]/70">
      <div className="mx-auto grid max-w-360 grid-cols-1 items-center gap-8 px-5 py-12 sm:px-8 sm:py-16 md:grid-cols-2 md:gap-10 lg:gap-16 lg:px-12 lg:py-20">
        <div className="order-1">
          <ProblemHeading problem={problems[2]} />

          <p className="mt-5 max-w-115 text-sm leading-7 text-[#62645F] sm:text-[15px]">
            {problems[2].description}
          </p>

          <ProblemTakeaway>{problems[2].takeaway}</ProblemTakeaway>
        </div>

        <div className="order-2 min-w-0">
          <ProblemVisual type={problems[2].visual} />
        </div>
      </div>
    </div>

    {/* Editorial problem 04 — reversed */}
    <div className="border-t border-[#EAE8E2]/70">
      <div className="mx-auto grid max-w-360 grid-cols-1 items-center gap-8 px-5 py-12 sm:px-8 sm:py-16 md:grid-cols-2 md:gap-10 lg:gap-16 lg:px-12 lg:py-20">
        <div className="order-2 min-w-0 md:order-1">
          <ProblemVisual type={problems[3].visual} />
        </div>

        <div className="order-1 md:order-2">
          <ProblemHeading problem={problems[3]} />

          <p className="mt-5 max-w-115 text-sm leading-7 text-[#62645F] sm:text-[15px]">
            {problems[3].description}
          </p>

          <ProblemTakeaway>{problems[3].takeaway}</ProblemTakeaway>
        </div>
      </div>
    </div>

    {/* Closing Transition — All Services */}
    <section className="relative overflow-hidden border-t border-[#EAE8E2] bg-[#F7F6F2] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      {/* Decorative rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-brand/10 sm:h-96 sm:w-96"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 top-1/2 h-52 w-52 -translate-y-1/2 rounded-full border border-brand/10 sm:h-72 sm:w-72"
      />

      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
        {/* Copy */}
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Let&apos;s Find the Right Way Forward
          </p>

          <h3 className="text-balance font-serif text-[clamp(1.75rem,3.2vw,3rem)] leading-[1.15] tracking-[-0.04em] text-ink">
            Better digital experiences start with understanding.
            <span className="text-ink/40">
              {" "}Your business, your customers, and what needs to change.
            </span>
          </h3>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#74766F] sm:text-base sm:leading-8">
            Whether you need a new website, a custom application, a more
            effective existing website, or reliable ongoing support, we
            start by understanding your goals and challenges. Then we help
            you identify the right solution for your business.
          </p>
        </div>

        {/* Actions */}
        <div className="relative flex flex-col items-start gap-4 sm:flex-row sm:items-center lg:items-stretch">
          <TalkToUsWpBtn />

          <ExploreWorkBtn />
        </div>
      </div>

      {/* Closing reassurance */}
      <div className="relative mx-auto mt-12 flex max-w-7xl items-center gap-3 border-t border-ink/10 pt-5 sm:mt-16">
        <span className="h-px w-6 shrink-0 bg-brand" />

        <p className="text-xs leading-6 text-[#74766F] sm:text-sm">
          No one-size-fits-all solutions. Just thoughtful digital work shaped
          around your business needs.
        </p>
      </div>
    </section>
  </section>


  );
}

