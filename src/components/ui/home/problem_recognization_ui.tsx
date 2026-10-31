import { problems } from "@/constants/problem_recognization";
import { ArrowRight, Check, CircleHelp, FileText, LayoutGrid, Mail, MessageCircle, Search, Workflow } from "lucide-react";
import { ReactNode } from "react";

type VisualProps = {
  className?: string;
};

function BlueShape({ className = "" }: VisualProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-[42%_58%_62%_38%/43%_38%_62%_57%] bg-[#E8EDFC] ${className}`}
    />
  );
}

function Annotation({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`absolute z-20 font-serif text-sm italic leading-5 text-brand sm:text-base ${className}`}
    >
      {children}
    </span>
  );
}

function BrowserBar() {
  return (
    <div className="flex h-5 items-center gap-1.5 border-b border-[#ECEAE4] px-3">
      <span className="h-1.5 w-1.5 rounded-full bg-[#D8D6D0]" /> <span className="h-1.5 w-1.5 rounded-full bg-[#D8D6D0]" /> <span className="h-1.5 w-1.5 rounded-full bg-[#D8D6D0]" />
    </div>
  );
}

function MockButton({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center justify-center rounded-sm bg-brand px-3 py-1.5 text-[8px] font-medium text-white">
      {children}
    </span>
  );
}

function PositioningVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto min-h-72.5 w-full max-w-130 sm:min-h-82.5"
    >
      <BlueShape className="right-0 top-[16%] h-[65%] w-[72%] rotate-6" />


      {/* Generic website in the background */}
      <div className="absolute left-[2%] top-[13%] z-0 w-[58%] -rotate-3 overflow-hidden rounded-md border border-[#E5E3DD] bg-[#F0EFEA] opacity-90 shadow-sm sm:left-[4%] sm:w-[54%]">
        <BrowserBar />

        <div className="p-3 sm:p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[8px] font-semibold text-[#8A8A82] sm:text-[9px]">
              YourBrand
            </span>

            <div className="h-1 w-12 rounded-full bg-[#D8D6D0] sm:w-16" />
          </div>

          <p className="max-w-45 font-serif text-sm leading-tight text-[#62645F] sm:text-lg">
            Just another
            <br />
            great business.
          </p>

          <div className="mt-3 space-y-1.5">
            <div className="h-1 w-full rounded-full bg-[#D8D6D0]" />
            <div className="h-1 w-4/5 rounded-full bg-[#D8D6D0]" />
            <div className="h-1 w-3/5 rounded-full bg-[#D8D6D0]" />
          </div>

          <div className="mt-4 flex gap-2">
            <div className="h-10 flex-1 rounded-sm bg-[#E4E2DC]" />
            <div className="h-10 flex-1 rounded-sm bg-[#E4E2DC]" />
          </div>
        </div>
      </div>

      {/* Clear, differentiated website in the foreground */}
      <div className="absolute bottom-[6%] right-[1%] z-10 w-[78%] overflow-hidden rounded-md border border-white/80 bg-white shadow-[0_18px_45px_rgba(30,41,59,0.09)] sm:right-[2%] sm:w-[76%]">
        <BrowserBar />

        <div className="p-3 sm:p-4">
          <div className="mb-5 flex items-center justify-between gap-2 sm:mb-7">
            <span className="text-[8px] font-semibold text-brand sm:text-[9px]">
              YourBrand
            </span>

            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-[6px] text-[#62645F] sm:text-[7px]">
                Services
              </span>
              <span className="text-[6px] text-[#62645F] sm:text-[7px]">
                About
              </span>
              <span className="text-[6px] text-[#62645F] sm:text-[7px]">
                Contact
              </span>
            </div>
          </div>

          <div className="grid grid-cols-[1fr_0.72fr] gap-3 sm:gap-4">
            <div>
              <p className="font-serif text-base leading-[1.08] tracking-tight text-ink sm:text-[23px]">
                Built for
                <br />
                ambitious businesses.
              </p>

              <p className="mt-2 max-w-40 text-[7px] leading-3 text-[#74766F] sm:text-[8px]">
                Thoughtful digital experiences built around your business.
              </p>

              <div className="mt-3">
                <MockButton>Get started</MockButton>
              </div>
            </div>

            <div className="flex min-h-22.5 items-end overflow-hidden rounded-sm bg-[#E8E6DF] sm:min-h-27.5">
              <div className="w-full space-y-2 bg-white/70 p-2">
                <div className="h-1 w-3/4 rounded-full bg-[#D8D6D0]" />
                <div className="h-1 w-1/2 rounded-full bg-[#D8D6D0]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Annotation className="right-0 top-[1%] hidden max-w-31.25 sm:block">
        Same industry.
        <br />
        Very different story.
      </Annotation>

      <svg
        aria-hidden="true"
        viewBox="0 0 80 60"
        className="absolute right-[5%] top-[12%] z-20 hidden h-14 w-16 text-brand sm:block"
        fill="none"
      >
        <path
          d="M72 4C39 5 14 19 8 48M8 48L5 34M8 48L21 42"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>

  );
}

/* -------------------------------------------------------------------------- */
/* 02 — Conversion: interested but uncertain                                  */
/* -------------------------------------------------------------------------- */

function ConversionVisual() {
  return (<div
    aria-hidden="true"
    className="relative mx-auto flex min-h-72.5 w-full max-w-130 items-center sm:min-h-82.5"
  >
    <Annotation className="left-0 top-[3%] max-w-28.75 -rotate-3 sm:left-[1%]">
      Interested. <br />
      But unsure.
    </Annotation>

    <svg
      aria-hidden="true"
      viewBox="0 0 60 65"
      className="absolute left-[3%] top-[14%] h-12 w-12 text-brand sm:h-14 sm:w-14"
      fill="none"
    >
      <path
        d="M8 2C9 22 18 38 47 51M47 51L34 48M47 51L42 38"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

    {/* Search and uncertainty */}
    <div className="absolute bottom-[8%] left-[2%] z-10 w-[96%] overflow-hidden rounded-lg border border-white bg-white shadow-[0_18px_45px_rgba(30,41,59,0.08)] sm:left-[5%] sm:w-[88%]">
      <div className="grid grid-cols-[1fr_0.85fr]">
        <div className="p-3 sm:p-4">
          <div className="flex items-center gap-2 rounded-md border border-[#E8E6DF] px-2 py-2">
            <Search className="h-3 w-3 shrink-0 text-[#8A8A82]" />

            <span className="truncate text-[8px] text-[#62645F]">
              Best business near me...
            </span>
          </div>

          <div className="mt-3 space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F0EFEA]">
                <LayoutGrid className="h-3 w-3 text-[#74766F]" />
              </div>

              <div className="min-w-0">
                <p className="text-[9px] font-medium text-ink">
                  Website
                </p>
                <p className="text-[7px] leading-3 text-[#74766F]">
                  Looks good, but no clear next step
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F0EFEA]">
                <CircleHelp className="h-3 w-3 text-[#74766F]" />
              </div>

              <div className="min-w-0">
                <p className="text-[9px] font-medium text-ink">
                  Services
                </p>
                <p className="text-[7px] leading-3 text-[#74766F]">
                  Not sure if this is the right fit
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EAF0FF]">
                <MessageCircle className="h-3 w-3 text-brand" />
              </div>

              <div className="min-w-0">
                <p className="text-[9px] font-medium text-ink">
                  Contact
                </p>
                <p className="text-[7px] leading-3 text-[#74766F]">
                  Where do I even start?
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Abstract customer portrait placeholder */}
        <div className="relative min-h-55 overflow-hidden bg-[#E9E6DF] sm:min-h-62.5">
          <div className="absolute inset-0 bg-linear-to-br from-[#F0EDE6] via-[#DAD7CF] to-[#B8B7B0]" />

          <div className="absolute bottom-0 left-1/2 h-[65%] w-[78%] -translate-x-1/2 rounded-t-[48%] bg-[#77776F]" />

          <div className="absolute left-1/2 top-[15%] h-[34%] w-[36%] -translate-x-1/2 rounded-[45%] bg-[#C6B4A4]" />

          <div className="absolute left-[34%] top-[11%] h-[19%] w-[45%] rounded-t-[60%] bg-[#34332F]" />

          <div className="absolute bottom-0 left-0 right-0 h-[25%] bg-[#B9B6AD]/60" />
        </div>
      </div>
    </div>
  </div>

  );
}


/* -------------------------------------------------------------------------- */
/* 03 — Digital presence: business evolution vs website                       */
/* -------------------------------------------------------------------------- */

function GrowthVisual() {
  return (<div
    aria-hidden="true"
    className="relative mx-auto min-h-72.5 w-full max-w-130 sm:min-h-82.5"
  >
    <BlueShape className="right-[2%] top-[22%] h-[55%] w-[74%] rotate-3" />


    <Annotation className="right-[1%] top-[1%] max-w-26.25 sm:right-[3%]">
      Your business
      <br />
      has grown.
    </Annotation>

    <svg
      aria-hidden="true"
      viewBox="0 0 65 55"
      className="absolute right-[12%] top-[9%] z-20 h-12 w-12 text-brand"
      fill="none"
    >
      <path
        d="M60 3C35 4 17 18 9 43M9 43L7 29M9 43L22 36"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

    {/* Earlier website */}
    <div className="absolute left-[1%] top-[25%] z-0 w-[48%] overflow-hidden rounded-md border border-[#E5E3DD] bg-[#F4F2EC] shadow-sm sm:left-[3%]">
      <BrowserBar />

      <div className="p-3 sm:p-4">
        <p className="font-serif text-sm leading-tight text-[#62645F] sm:text-lg">
          Reliable services.
          <br />
          Trusted for years.
        </p>

        <div className="mt-3 space-y-1.5">
          <div className="h-1 w-full rounded-full bg-[#D8D6D0]" />
          <div className="h-1 w-4/5 rounded-full bg-[#D8D6D0]" />
          <div className="h-1 w-3/5 rounded-full bg-[#D8D6D0]" />
        </div>

        <div className="mt-3 h-12 rounded-sm bg-[#E4E2DC] sm:h-16" />
      </div>
    </div>

    {/* Current, evolved business */}
    <div className="absolute bottom-[13%] right-[1%] z-10 w-[65%] overflow-hidden rounded-md border border-white bg-white shadow-[0_16px_40px_rgba(30,41,59,0.08)] sm:right-[2%] sm:w-[66%]">
      <BrowserBar />

      <div className="grid grid-cols-[1fr_0.75fr] gap-2 p-3 sm:gap-3 sm:p-4">
        <div>
          <p className="font-serif text-sm leading-tight text-ink sm:text-lg">
            Modern solutions
            <br />
            for growing businesses.
          </p>

          <div className="mt-3 space-y-1.5">
            <div className="h-1 w-full rounded-full bg-[#DCE7FF]" />
            <div className="h-1 w-4/5 rounded-full bg-[#DCE7FF]" />
          </div>

          <div className="mt-3">
            <MockButton>Get started</MockButton>
          </div>
        </div>

        <div className="min-h-23.75 rounded-sm bg-[#E8E6DF] sm:min-h-28.75" />
      </div>
    </div>

    {/* Timeline */}
    <div className="absolute bottom-[1%] left-[14%] right-[12%] flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-[#B5B4AC]" />
        <span className="text-[8px] uppercase tracking-wide text-[#8A8A82]">
          Then
        </span>
      </div>

      <div className="mx-3 h-px flex-1 bg-[#D8D6D0]" />

      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-brand" />
        <span className="text-[8px] uppercase tracking-wide text-brand">
          Now
        </span>
      </div>
    </div>
  </div>


  );
}

/* -------------------------------------------------------------------------- */
/* 04 — Workflow: disconnected tools brought together                         */
/* -------------------------------------------------------------------------- */

function WorkflowVisual() {
  return (<div
    aria-hidden="true"
    className="relative mx-auto flex min-h-72.5 w-full max-w-130 items-center justify-center sm:min-h-82.5"
  > <BlueShape className="left-[3%] top-[13%] h-[73%] w-[78%] -rotate-6" />


    <Annotation className="right-[1%] top-[5%] max-w-28.75 sm:right-[5%]">
      Less chaos.
      <br />
      More progress.
    </Annotation>

    <svg
      aria-hidden="true"
      viewBox="0 0 65 55"
      className="absolute right-[12%] top-[17%] z-20 h-12 w-12 text-brand"
      fill="none"
    >
      <path
        d="M59 3C37 6 19 17 8 43M8 43L7 29M8 43L22 36"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

    {/* Disconnected tools */}
    <div className="absolute left-[5%] top-[25%] z-10 flex flex-col gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white bg-white shadow-sm sm:h-12 sm:w-12">
        <MessageCircle className="h-5 w-5 text-[#7A8C75]" />
      </div>

      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white bg-white shadow-sm sm:h-12 sm:w-12">
        <FileText className="h-5 w-5 text-[#8A8A82]" />
      </div>

      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white bg-white shadow-sm sm:h-12 sm:w-12">
        <Mail className="h-5 w-5 text-[#8A8A82]" />
      </div>
    </div>

    {/* Connection lines */}
    <svg
      aria-hidden="true"
      viewBox="0 0 100 180"
      className="absolute left-[18%] top-[26%] h-[48%] w-[23%] text-brand/50"
      fill="none"
    >
      <path
        d="M0 25C42 25 38 65 100 65M0 90C42 90 38 90 100 90M0 155C42 155 38 115 100 115"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="3 4"
      />
    </svg>

    {/* One connected workflow */}
    <div className="absolute right-[1%] top-[30%] z-10 w-[66%] rounded-lg border border-white bg-white p-4 shadow-[0_16px_40px_rgba(30,41,59,0.08)] sm:right-[3%] sm:w-[65%] sm:p-5">
      <div className="mb-4 flex items-center justify-between gap-2">
        <p className="text-[11px] font-medium text-ink sm:text-xs">
          All in one place
        </p>

        <Workflow className="h-4 w-4 text-brand" />
      </div>

      <div className="space-y-2">
        {[
          "Client updates",
          "Project progress",
          "Team tasks",
          "Files & documents",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 rounded-md border border-[#EEECE6] px-2.5 py-2"
          >
            <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#EAF0FF]">
              <Check className="h-2.5 w-2.5 text-brand" />
            </span>

            <span className="text-[9px] text-[#62645F] sm:text-[10px]">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>

  );
}

/* -------------------------------------------------------------------------- */
/* Problem visual dispatcher                                                   */
/* -------------------------------------------------------------------------- */

export function ProblemVisual({ type }: { type: (typeof problems)[number]["visual"] }) {
  switch (type) {
    case "positioning":
      return <PositioningVisual />;


    case "conversion":
      return <ConversionVisual />;

    case "growth":
      return <GrowthVisual />;

    case "workflow":
      return <WorkflowVisual />;


  }
}

/* -------------------------------------------------------------------------- */
/* Reusable editorial text components                                         */
/* -------------------------------------------------------------------------- */

export function ProblemHeading({
  problem,
}: {
  problem: (typeof problems)[number];
}) {
  return (<div> <div className="mb-5 flex items-center gap-5"> <span className="font-mono text-sm font-semibold tracking-wide text-brand">
    {problem.number} </span>


    <span className="h-px w-10 bg-brand/70" />

    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#62645F] sm:text-[10px]">
      {problem.category}
    </span>
  </div>

    <h3 className="max-w-125 text-balance font-serif text-[clamp(1.75rem,3vw,2.65rem)] leading-[1.12] tracking-[-0.045em] text-ink">
      {problem.title}
    </h3>
  </div>


  );
}

export function ProblemTakeaway({ children }: { children: ReactNode }) {
  return (<div className="mt-6 inline-flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.13em] text-brand sm:mt-7"> <ArrowRight className="h-3.5 w-3.5 shrink-0" />


    <span>{children}</span>
  </div>


  );
}
