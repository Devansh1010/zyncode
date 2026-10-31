import PrimaryBtn from "../layout/PrimaryBtn";
import ExploreWorkBtn from "../layout/ExploreWorkBtn";
import { HeroArtwork } from "../ui/home/hero_ui";


export default function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F7F6F2]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[46%] top-0 hidden h-full w-px bg-ink/[0.035] lg:block" />
        <div className="absolute right-[8%] top-[18%] size-64 rounded-full bg-white/60 blur-3xl" />
      </div>

      <div className="mx-auto grid min-h-190 max-w-360 grid-cols-1 items-center gap-4 px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:min-h-205 lg:grid-cols-[0.88fr_1.12fr] lg:gap-6 lg:px-14 lg:pb-20 lg:pt-28">
        <div className="relative z-20 max-w-155 lg:pb-6">

          <h1 className="max-w-162.5 text-[clamp(43px,8vw,84px)] font-medium leading-[0.99] tracking-[-0.065em] text-ink text-balance">
            Websites built around your business{" "}
            <span className="font-serif font-normal italic text-brand">
              and your customers.
            </span>
          </h1>

          <p className="mt-6 max-w-110 text-[15px] leading-[1.8] text-[#667085] sm:mt-7 sm:text-base">
           We design and develop business websites that communicate your value, build customer trust, and make it easier for people to choose your business.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-9">
            <PrimaryBtn />

            <ExploreWorkBtn/>
          </div>
        </div>

        <div className="relative flex min-w-0 items-center lg:pl-3">
          <HeroArtwork />
        </div>
      </div>
    </section>
  );
}