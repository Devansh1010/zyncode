import PrimaryBtn from "../layout/PrimaryBtn";


import { solutions } from "@/constants/solutions";
import SolutionCard from "../ui/home/solutions_ui";

export default function SolutionsSection() {
  return (
    <section
      aria-labelledby="solutions-heading"
      className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-14 lg:py-32"
    >
      <div className="mx-auto max-w-324">
        {/* Introduction */}
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div>
            <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.19em] text-[#667085] sm:mb-7 sm:text-[11px]">
              <span
                aria-hidden="true"
                className="h-px w-7 bg-brand"
              />

              The Zyncode approach
            </p>

            <h2
              id="solutions-heading"
              className="max-w-190 text-[clamp(36px,5vw,64px)] font-medium leading-[1.06] tracking-[-0.055em] text-ink text-balance"
            >
              Better digital experiences start with{" "}
              <span className="font-serif font-normal italic text-brand">
                understanding your business.
              </span>
            </h2>
          </div>

          <p className="max-w-110 text-[15px] leading-[1.9] text-[#667085] sm:text-base lg:justify-self-end lg:pb-2">
            We learn what your business offers, what your customers need, and
            what isn&apos;t working today. Then we design and build websites
            and digital tools around those needs — not generic solutions that
            force your business to adapt.
          </p>
        </div>
        
        <div className="mt-14 border-t border-ink/15 sm:mt-20 lg:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {solutions.map((solution, index) => (
              <SolutionCard
                key={solution.number}
                solution={solution}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Closing message */}
        <div className="mt-12 border-t border-ink/15 pt-9 sm:mt-16 sm:pt-12 lg:mt-20">
          <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#667085]">
                The right fit matters
              </p>

              <h3 className="max-w-200 text-[29px] font-medium leading-[1.14] tracking-[-0.045em] text-ink sm:text-[38px] lg:text-[46px]">
                The right solution isn&apos;t always a bigger website.{" "}
                <span className="font-serif font-normal italic text-brand">
                  It&apos;s a better fit for your business.
                </span>
              </h3>

              <p className="mt-5 max-w-2xl text-[14px] leading-[1.9] text-[#667085] sm:text-[15px]">
                We recommend an approach that fits your goals, your customers,
                and the way your business actually works.
              </p>
            </div>

            <div className="lg:pb-1">
              <PrimaryBtn />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}