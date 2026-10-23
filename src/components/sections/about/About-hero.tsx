import Link from "next/link";

function StudioComposition() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-[510px]"
    >
      {/* Outer frame */}
      <div className="absolute inset-[7%] rounded-[2rem] border border-[#101828]/10" />

      {/* Structural grid */}
      <div
        className="absolute inset-[14%] rounded-[1.5rem] opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(16,24,40,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,24,40,0.07) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Main geometric form */}
      <div className="absolute left-[24%] top-[19%] h-[48%] w-[48%] rotate-[-12deg] rounded-[1.75rem] border border-[#101828]/15 bg-[#F7F6F2] shadow-[0_24px_70px_rgba(16,24,40,0.08)]">
        <div className="absolute inset-[12%] rounded-[1.25rem] border border-[#101828]/10" />

        <div className="absolute left-[15%] top-[15%] h-3 w-3 rounded-full bg-[#2563EB]" />

        <div className="absolute bottom-[17%] left-[15%] right-[15%] space-y-2.5">
          <div className="h-2 w-[72%] rounded-full bg-[#101828]" />
          <div className="h-1.5 w-[52%] rounded-full bg-[#101828]/20" />
          <div className="h-1.5 w-[64%] rounded-full bg-[#101828]/20" />
        </div>
      </div>

      {/* Electric-blue accent */}
      <div className="absolute right-[13%] top-[19%] h-[22%] w-[22%] rounded-[1.25rem] bg-[#2563EB] shadow-[0_20px_50px_rgba(37,99,235,0.18)]">
        <div className="absolute inset-[18%] rounded-full border border-white/35" />
        <div className="absolute inset-[34%] rounded-full border border-white/50" />
        <div className="absolute inset-[44%] rounded-full bg-white" />
      </div>

      {/* Lower structural element */}
      <div className="absolute bottom-[16%] left-[14%] flex h-[20%] w-[38%] items-end gap-2 rounded-[1.25rem] border border-[#101828]/10 bg-white/70 p-4 backdrop-blur-sm">
        <div className="h-[38%] flex-1 rounded-t-sm bg-[#2563EB]/30" />
        <div className="h-[65%] flex-1 rounded-t-sm bg-[#2563EB]/55" />
        <div className="h-full flex-1 rounded-t-sm bg-[#2563EB]" />
        <div className="h-[48%] flex-1 rounded-t-sm bg-[#2563EB]/40" />
      </div>

      {/* Small floating marker */}
      <div className="absolute bottom-[25%] right-[17%] flex h-12 w-12 items-center justify-center rounded-full border border-[#101828]/10 bg-[#F7F6F2]">
        <span className="h-2 w-2 rounded-full bg-[#101828]" />
      </div>

      {/* Fine connecting line */}
      <div className="absolute right-[26%] top-[45%] h-[20%] w-px rotate-[28deg] bg-[#101828]/20" />

      {/* Small corner marker */}
      <div className="absolute left-[17%] top-[17%] h-2 w-2 rounded-full bg-[#101828]/40" />

      <div className="absolute bottom-[7%] right-[8%] h-2 w-2 rounded-full bg-[#2563EB]" />
    </div>
  );
}

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#F7F6F2]">
      <div className="mx-auto grid min-h-[650px] w-full max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:min-h-[720px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-12 lg:py-28">
        {/* Content */}
        <div className="relative z-10 max-w-2xl">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-8 bg-[#2563EB]" />

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#101828]/65">
              About Zyncode
            </p>
          </div>

          <h1 className="max-w-[680px] text-4xl font-semibold leading-[1.12] tracking-[-0.055em] text-[#101828] sm:text-5xl md:text-6xl lg:text-[4.5rem]">
            Technology should move your business{" "}
            <span className="text-[#2563EB]">forward.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-[#101828]/65 sm:text-lg sm:leading-9">
            We are an independent digital design and development studio
            creating websites and digital experiences around businesses,
            their audiences, and the problems they need to solve.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#our-belief"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#101828] px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F7F6F2]"
            >
              Explore our approach
              <span aria-hidden="true" className="ml-3 text-base">
                ↓
              </span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#101828]/15 px-6 py-3 text-sm font-medium text-[#101828] transition-colors duration-200 hover:border-[#2563EB] hover:text-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F7F6F2]"
            >
              Discuss your project
              <span aria-hidden="true" className="ml-3">
                ↗
              </span>
            </Link>
          </div>
        </div>

        {/* Abstract editorial visual */}
        <div className="relative mx-auto w-full max-w-[540px] lg:translate-x-3">
          <StudioComposition />
        </div>
      </div>

      {/* Bottom divider */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="h-px w-full bg-[#101828]/10" />
      </div>
    </section>
  );
}