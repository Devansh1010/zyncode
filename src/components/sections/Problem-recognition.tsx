import { problems } from '@/constants/problem_recognization';
import { ProblemHeading, ProblemTakeaway, ProblemVisual } from '../ui/home/problem_recognization_ui';
import TalkToUsWpBtn from '../layout/TalkToUsWpBtn';
import ExploreWorkBtn from '../layout/ExploreWorkBtn';

export default function ProblemRecognitionSection({

}) {
  return (
    <section
      aria-labelledby="problem-recognition-title"
      className="relative overflow-hidden bg-[#F7F6F2] py-16 text-ink sm:py-20 lg:py-24"
    >
      {/* Header Block */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#62645F]">
              Local Business Reality Check
            </span>
          </div>

          <h2
            id="problem-recognition-title"
            className="text-balance text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl"
          >
            Is your website bringing in real business?
            <span className="mt-2 block font-serif font-normal italic text-brand">
              Or are potential customers going elsewhere?
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#62645F] sm:text-lg">
            Whether visitors are looking for a trusted specialist, evaluating high-value services, or exploring your products, they judge your capability in seconds. A slow, confusing, or outdated digital presence directly drains your growth pipeline.
          </p>
        </div>
      </div>

      {/*  Dynamic Problem Grid */}
      <div className="mt-12 border-t border-[#EAE8E2]">
        {problems.slice(0, 4).map((problem, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <div
              key={index}
              className="border-b border-[#EAE8E2]/70 bg-white/40 backdrop-blur-sm"
            >
              <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-5 py-12 sm:px-8 md:grid-cols-2 lg:gap-16 lg:px-12 lg:py-16">
                {/* Text Content */}
                <div className={isReversed ? 'order-1 md:order-2' : 'order-1'}>
                  {/* Category Pill Tag for Quick Context */}
                  {problem.category && (
                    <span className="mb-3 inline-block rounded bg-brand/10 px-2.5 py-1 text-xs font-medium text-brand">
                      {problem.category}
                    </span>
                  )}

                  <ProblemHeading problem={problem} />

                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#62645F] sm:text-base">
                    {problem.description}
                  </p>

                  {/* Left Accent Border replaces blue arrows */}
                  <div className="mt-6 border-l-2 border-brand/60 pl-4">
                    <ProblemTakeaway>
                      {problem.takeaway}
                    </ProblemTakeaway>
                  </div>
                </div>

                {/* Visual Representation */}
                <div className={isReversed ? 'order-2 min-w-0 md:order-1' : 'order-2 min-w-0'}>
                  <div className="overflow-hidden rounded-xl border border-[#EAE8E2] bg-white p-2 shadow-sm">
                    <ProblemVisual type={problem.visual} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Conversion Transition Block */}
      <div className="mx-auto max-w-7xl px-5 pt-16 sm:px-8 lg:px-12 lg:pt-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
          {/* Copy & Value Proposition */}
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-brand">
              <span className="size-1.5 rounded-full bg-brand" />
              A better way forward
            </span>

            <h3 className="mt-4 text-balance font-serif text-[clamp(1.8rem,3vw,2.65rem)] font-normal leading-[1.15] tracking-[-0.035em] text-[#424A56]">
              Your website should work harder for your business.
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#62645F] sm:text-base">
              From improving your existing website to building a custom digital
              solution, we focus on what your business needs, what your customers
              expect, and what will help you move forward.
            </p>

            {/* Key Benefits */}
            <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 text-sm font-normal leading-relaxed text-[#62645F] sm:grid-cols-2">
              <li className="flex items-start gap-2.5">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand/70" />
                Fast, mobile-friendly experiences
              </li>

              <li className="flex items-start gap-2.5">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand/70" />
                Clear paths to customer enquiries
              </li>

              <li className="flex items-start gap-2.5">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand/70" />
                Thoughtful design and intuitive navigation
              </li>

              <li className="flex items-start gap-2.5">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand/70" />
                Practical solutions with ongoing support
              </li>
            </ul>
          </div>

          {/* Actions */}
          <div className="flex flex-col items-stretch gap-3 sm:flex-row lg:min-w-52.5 ">
            <TalkToUsWpBtn
              msg="Hi Zyncode! I came across your website and would like to discuss improving my business's digital presence. I'm looking for the right solution for my business and would appreciate your guidance on the approach, scope, and next steps. Could we connect?"
            />

            <ExploreWorkBtn />
          </div>
        </div>

        {/* Reassurance */}
        <div className="mt-8 flex items-start gap-3 border-t border-[#EAE8E2] pt-5 text-xs leading-relaxed text-[#73756F] sm:items-center sm:text-sm">
          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand/70 sm:mt-0" />
          <span>
            A direct conversation with the people doing the work. Clear advice,
            no unnecessary complexity.
          </span>
        </div>
      </div>
    </section>
  );
}