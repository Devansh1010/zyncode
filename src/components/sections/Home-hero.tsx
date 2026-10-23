
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Menu,
} from "lucide-react";
import PrimaryBtn from "../layout/PrimaryBtn";
import ExploreWorkBtn from "../layout/ExploreWorkBtn";

function BrowserFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[10px] border border-ink/10 bg-white shadow-[0_24px_70px_-24px_rgba(16,24,40,0.25)] ${className}`}
    >
      <div className="flex h-9 items-center gap-1.5 border-b border-slate-200/80 bg-[#FAFAF9] px-3">
        <span className="size-2 rounded-full bg-[#E5A39B]" />
        <span className="size-2 rounded-full bg-[#E8C778]" />
        <span className="size-2 rounded-full bg-[#91C8A6]" />
        <div className="mx-auto flex h-5 w-[45%] items-center justify-center rounded bg-slate-100 px-2">
          <span className="truncate text-[7px] tracking-wide text-slate-400">
            zyncode.studio / concept
          </span>
        </div>
      </div>
      {children}
    </div>
  );
}

function MainWebsitePreview() {
  return (
    <BrowserFrame className="relative z-10 w-full">
      <div className="p-3 sm:p-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <span className="text-[11px] font-bold tracking-tight text-[#172D26] sm:text-sm">
            FIELDWORK<span className="text-[#748C72]">®</span>
          </span>
          <div className="hidden items-center gap-4 text-[7px] text-slate-500 sm:flex">
            <span>Our approach</span>
            <span>Projects</span>
            <span>About us</span>
          </div>
          <span className="rounded-full bg-[#172D26] px-2.5 py-1.5 text-[7px] font-medium text-white sm:px-3 sm:text-[9px]">
            Start a project ↗
          </span>
        </div>

        <div className="grid grid-cols-[1.15fr_0.85fr] gap-2 py-4 sm:gap-4 sm:py-7">
          <div className="flex flex-col justify-center">
            <span className="mb-2 text-[6px] font-semibold uppercase tracking-[0.2em] text-[#748C72] sm:mb-3 sm:text-[8px]">
              Independent by nature
            </span>
            <h2 className="font-serif text-[clamp(18px,3.5vw,39px)] leading-[0.98] tracking-[-0.06em] text-[#172D26]">
              A better way
              <br />
              to build
              <br />
              <span className="italic text-[#748C72]">for tomorrow.</span>
            </h2>
            <p className="mt-2 max-w-42.5 text-[7px] leading-relaxed text-[#69756D] sm:mt-4 sm:text-[9px]">
              Considered spaces. Natural materials. A little more room to
              breathe.
            </p>
            <span className="mt-3 inline-flex items-center gap-1 text-[7px] font-semibold text-[#172D26] sm:mt-5 sm:text-[9px]">
              Discover our approach <ArrowUpRight size={10} />
            </span>
          </div>

          <div className="relative min-h-32.5 overflow-hidden rounded-sm bg-[#DCE2D4] sm:min-h-55">
            <div className="absolute -right-8 -top-5 size-32 rounded-full bg-[#B5C1A7] sm:size-48" />
            <div className="absolute inset-x-[12%] bottom-0 h-[77%] bg-[#F0EDE4]" />
            <div className="absolute bottom-0 left-[22%] h-[63%] w-[42%] bg-[#C0CBB4]" />
            <div className="absolute bottom-0 right-[9%] h-[48%] w-[26%] bg-[#879A7B]" />
            <div className="absolute bottom-0 left-[9%] h-[46%] w-[17%] bg-[#7C8C70]" />
            <div className="absolute left-[31%] top-[23%] h-[31%] w-[27%] border-[3px] border-[#F7F6F2] sm:border-[5px]" />
            <div className="absolute bottom-0 left-0 h-1/4 w-full bg-[#A9B49B]/60" />
          </div>
        </div>

        <div className="grid grid-cols-3 border-t border-slate-200 pt-3 sm:pt-4">
          {[
            ["01", "Design with care"],
            ["02", "Built to last"],
            ["03", "Made for living"],
          ].map(([number, label]) => (
            <div key={number} className="flex flex-col gap-1">
              <span className="text-[7px] text-[#748C72]">{number}</span>
              <span className="text-[6px] font-medium text-[#34463D] sm:text-[8px]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

function SecondaryWebsitePreview() {
  return (
    <BrowserFrame className="absolute -right-3 -top-7 z-0 hidden w-[45%] rotate-3 opacity-95 sm:block lg:-right-7 lg:-top-10">
      <div className="p-3">
        <div className="h-2 w-14 rounded-full bg-brand/70" />
        <div className="mt-4 h-2 w-[85%] rounded-full bg-slate-200" />
        <div className="mt-2 h-2 w-[63%] rounded-full bg-slate-100" />
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="h-16 rounded-sm bg-[#DCE6F6]" />
          <div className="h-16 rounded-sm bg-[#F0E6D9]" />
        </div>
      </div>
    </BrowserFrame>
  );
}

function MobileWebsitePreview() {
  return (
    <div className="absolute -bottom-6 left-[-4%] z-20 w-[29%] min-w-25 max-w-42.5 rotate-[-5deg] rounded-[18px] border-4 border-[#222A35] bg-[#222A35] p-0.75 shadow-[0_22px_40px_-15px_rgba(16,24,40,0.4)] sm:left-[-6%] sm:rounded-[24px] sm:border-[5px] sm:p-1">
      <div className="overflow-hidden rounded-[13px] bg-white sm:rounded-[18px]">
        <div className="flex h-5 items-center justify-center bg-white sm:h-7">
          <span className="h-1 w-8 rounded-full bg-[#222A35] sm:h-1.5 sm:w-10" />
        </div>
        <div className="px-2 pb-3 sm:px-3 sm:pb-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="text-[7px] font-bold text-[#172D26] sm:text-[9px]">
              FIELDWORK®
            </span>
            <Menu size={10} className="text-[#172D26]" />
          </div>
          <div className="py-3 sm:py-4">
            <p className="text-[6px] uppercase tracking-widest text-[#748C72] sm:text-[8px]">
              Made for living
            </p>
            <p className="mt-1 font-serif text-[17px] leading-[0.95] tracking-tight text-[#172D26] sm:text-[24px]">
              Room to
              <br />
              <i>breathe.</i>
            </p>
          </div>
          <div className="relative h-20 overflow-hidden bg-[#DCE2D4] sm:h-28">
            <div className="absolute inset-x-[12%] bottom-0 h-[75%] bg-[#F0EDE4]" />
            <div className="absolute bottom-0 left-[20%] h-[60%] w-[45%] bg-[#B5C1A7]" />
            <div className="absolute bottom-0 right-[9%] h-[45%] w-[25%] bg-[#879A7B]" />
          </div>
          <div className="mt-3 h-1 w-full rounded-full bg-slate-100" />
          <div className="mt-1.5 h-1 w-4/5 rounded-full bg-slate-100" />
          <div className="mt-3 flex items-center gap-1 text-[6px] font-semibold text-[#172D26] sm:text-[8px]">
            Explore our work <ArrowRight size={8} />
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroArtwork() {
  return (
    <div className="relative mx-auto w-full max-w-160 px-3 pb-8 pt-10 sm:px-8 sm:pb-12 sm:pt-12 lg:px-0 lg:pb-14 lg:pt-16">
      <div className="absolute right-[7%] top-[14%] size-20 rounded-full bg-[#DCE7FF]/60 blur-2xl sm:size-32" />
      <div className="absolute bottom-[5%] right-[2%] h-20 w-28 rounded-full bg-[#E8E5DC]/80 blur-2xl sm:h-32 sm:w-44" />

      <SecondaryWebsitePreview />

      <div className="relative z-10 translate-x-[2%]">
        <MainWebsitePreview />
      </div>

      <MobileWebsitePreview />

      <div className="absolute bottom-0 right-0 z-20 hidden items-center gap-2 rounded-full border border-white/80 bg-white/85 px-3 py-2 text-[10px] text-[#475467] shadow-sm backdrop-blur-sm sm:flex lg:right-[-2%]">
        <span className="flex size-5 items-center justify-center rounded-full bg-[#E5EDFF] text-brand">
          <Check size={11} />
        </span>
        Designed around real business needs
      </div>
    </div>
  );
}

export default function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F7F6F2]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[46%] top-0 hidden h-full w-px bg-ink/[0.035] lg:block" />
        <div className="absolute right-[8%] top-[18%] size-64 rounded-full bg-white/60 blur-3xl" />
      </div>

      <div className="mx-auto grid min-h-190 max-w-360 grid-cols-1 items-center gap-4 px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:min-h-205 lg:grid-cols-[0.88fr_1.12fr] lg:gap-6 lg:px-14 lg:pb-20 lg:pt-28">
        <div className="relative z-20 max-w-155 lg:pb-6">
          <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.19em] text-[#475467] sm:mb-8 sm:text-[11px]">
            <span className="h-px w-7 bg-brand" />
            Digital design & development
          </p>

          <h1 className="max-w-162.5 text-[clamp(43px,8vw,84px)] font-medium leading-[0.99] tracking-[-0.065em] text-ink text-balance">
            Websites built around your business{" "}
            <span className="font-serif font-normal italic text-brand">
              and your customers.
            </span>
          </h1>

          <p className="mt-6 max-w-110 text-[15px] leading-[1.8] text-[#667085] sm:mt-7 sm:text-base">
            We design and develop digital experiences that help businesses
            communicate their value, build trust and work smarter.
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