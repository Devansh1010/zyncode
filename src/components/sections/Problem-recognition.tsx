import { problems } from "@/constants/problem_recognization";
import { ArrowDownRight } from "lucide-react";
import { ProblemVisual } from "../ui/home/problem_recognization_ui";

export default function ProblemRecognition() {
  return (
    <section
      aria-labelledby="problem-recognition-title"
      className="relative overflow-hidden bg-[#F7F6F2] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto w-full max-w-360 px-5 sm:px-8 lg:px-12">
        {/* Section introduction */}
        <div className="mx-auto mb-12 max-w-200 text-center sm:mb-16 lg:mb-20">
          <div className="mb-6 inline-flex items-center gap-2.5">
            <span aria-hidden="true" className="h-px w-6 bg-brand" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#62645F] sm:text-[11px]">
              Does this sound familiar?
            </span>

            <span aria-hidden="true" className="h-px w-6 bg-brand" />
          </div>

          <h2
            id="problem-recognition-title"
            className="text-balance text-[clamp(2.4rem,5.3vw,4.75rem)] font-medium leading-[1.06] tracking-[-0.065em] text-ink"
          >
            You&apos;re good at what you do.
            <span className="mt-2 block font-serif font-normal italic tracking-[-0.055em] text-brand">
              Does your online presence show it?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-155 text-pretty text-sm leading-7 text-[#62645F] sm:mt-7 sm:text-base sm:leading-8">
            You&apos;ve put time, effort, and experience into building your
            business. But when someone discovers you online, do they see the
            same quality you deliver in person?
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {problems.map((problem) => (
            <article
              key={problem.number}
              className="group flex min-w-0 flex-col rounded-xl border border-[#E4E2DB] bg-white p-5 transition-colors duration-300 hover:border-[#C9D8FA] sm:p-7 lg:p-8"
            >
              {/* Card metadata */}
              <div className="mb-6 flex items-center justify-between gap-4">
                <span className="font-mono text-xs tracking-wide text-[#8A8A82]">
                  / {problem.number}
                </span>

                <span className="text-right text-[9px] font-semibold uppercase tracking-[0.16em] text-[#74766F] sm:text-[10px]">
                  {problem.category}
                </span>
              </div>

              {/* Problem heading and description */}
              <div className="mb-6 max-w-125">
                <h3 className="text-balance text-xl font-medium leading-snug tracking-[-0.035em] text-ink sm:text-[1.65rem] sm:leading-tight">
                  {problem.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#62645F] sm:text-[15px]">
                  {problem.description}
                </p>
              </div>

              {/* Supporting visual */}
              <div className="mt-auto">
                <ProblemVisual type={problem.visual} />
              </div>

              {/* Human-centered takeaway */}
              <p className="mt-5 border-t border-[#EEECE6] pt-4 text-sm leading-6 text-ink">
                <span aria-hidden="true" className="mr-2 text-brand">
                  ↗
                </span>
                {problem.takeaway}
              </p>
            </article>
          ))}
        </div>

        {/* Transition to the next section */}
        <div className="mt-12 flex flex-col items-center text-center sm:mt-16">
          <div
            aria-hidden="true"
            className="mb-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#DCDAD2] text-brand"
          >
            <ArrowDownRight className="h-4 w-4" />
          </div>

          <h3 className="max-w-175 text-balance text-xl font-medium leading-snug tracking-[-0.035em] text-ink sm:text-2xl sm:leading-relaxed">
            Your business doesn&apos;t need more digital noise.
            <span className="block">It needs solutions that make sense.</span>
          </h3>

          <p className="mt-4 max-w-145 text-sm leading-7 text-[#74766F] sm:text-base">
            Whether you need a website that communicates your value more
            clearly or a custom application that simplifies your operations,
            the starting point is the same: understanding your business before
            deciding what to build.
          </p>
        </div>
      </div>
    </section>
  );
}