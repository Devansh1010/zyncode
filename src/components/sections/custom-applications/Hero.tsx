import PrimaryBtn from "@/components/layout/PrimaryBtn";
import ExploreWorkBtn from "@/components/layout/ExploreWorkBtn";
import { CustomApplicationHeroArtwork } from "./CustomApplicationHeroArtwork";



export default function CustomApplicationHero() {
  return (
    <section
      aria-labelledby="custom-application-heading"
      className="relative isolate overflow-hidden bg-page"
    >
      {/* Background details */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[46%] top-0 hidden h-full w-px bg-ink/[0.035] lg:block" />

        <div className="absolute right-[5%] top-[12%] size-72 rounded-full bg-brand/[0.035] blur-3xl" />
      </div>

      <div className="mx-auto grid min-h-190 max-w-360 grid-cols-1 items-center gap-14 px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:min-h-197.5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:px-12 lg:pb-20 lg:pt-28 xl:px-16">

        {/* Content */}
        <div className="relative z-10 max-w-147.5">

          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-brand" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
              Custom Web Application Development
            </span>
          </div>

          {/* Heading */}
          <h1
            id="custom-application-heading"
            className="mt-7 max-w-155 text-display font-semibold text-ink"
          >
            Software built around the way your{" "}
            <span className="font-serif font-normal italic text-brand">
              business works.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-122.5 text-[15px] leading-[1.85] text-[#667085] sm:text-base">
            We design and develop custom web applications that streamline
            operations, connect disconnected workflows, and turn complex
            business requirements into reliable digital solutions.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <PrimaryBtn />
            <ExploreWorkBtn />
          </div>

          {/* Supporting detail */}
          <div className="mt-10 flex items-center gap-3 border-t border-ink/10 pt-6">
            <div className="flex -space-x-1">
              <span className="size-2 rounded-full bg-brand" />
              <span className="size-2 rounded-full bg-brand/50" />
              <span className="size-2 rounded-full bg-brand/20" />
            </div>

            <p className="text-xs leading-relaxed text-[#667085]">
              From business operations to complete digital products.
            </p>
          </div>
        </div>

        {/* Artwork */}
        <div className="relative flex min-w-0 items-center lg:pl-2">
          <CustomApplicationHeroArtwork />
        </div>
      </div>
    </section>
  );
}