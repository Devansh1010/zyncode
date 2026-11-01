import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Check,
  Database,
  FileSpreadsheet,
  MessagesSquare,
  Workflow,
} from "lucide-react";

const sources = [
  {
    label: "Spreadsheets",
    description: "Manual data and records",
    icon: FileSpreadsheet,
  },
  {
    label: "Team communication",
    description: "Updates across departments",
    icon: MessagesSquare,
  },
  {
    label: "Existing tools",
    description: "Disconnected business systems",
    icon: Database,
  },
];

const outcomes = [
  "Connected workflows",
  "Centralized information",
  "Better operational visibility",
];

export function CustomApplicationHeroArtwork() {
  return (
    <div
      role="img"
      aria-label="Illustration showing disconnected business tools becoming one unified application with connected workflows and better operational visibility."
      className="relative mx-auto w-full max-w-162.5"
    >
      {/* Background decoration */}
      <div className="absolute -right-8 -top-8 size-64 rounded-full bg-brand/4.5 blur-3xl" />

      <div className="relative rounded-[28px] border border-ink/8 bg-white p-5 shadow-[0_30px_90px_-45px_rgba(16,24,40,0.22)] sm:p-7">

        {/* Top heading */}
        <div className="flex items-center justify-between border-b border-ink/[0.07] pb-5">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-subtle">
              From complexity to clarity
            </p>

            <h3 className="mt-1 text-lg font-semibold tracking-tight text-ink sm:text-xl">
              Connected operations
            </h3>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-[#F0FDF4] px-3 py-1.5">
            <span className="size-1.5 rounded-full bg-[#16A34A]" />

            <span className="text-[10px] font-semibold text-[#15803D] sm:text-xs">
              Unified system
            </span>
          </div>
        </div>

        {/* Workflow */}
        <div className="mt-7 grid grid-cols-[1fr_32px_1.15fr] items-center gap-2 sm:grid-cols-[1fr_44px_1.2fr] sm:gap-3">

          {/* Inputs */}
          <div className="space-y-3">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-subtle sm:text-[11px]">
              Before
            </p>

            {sources.map((source) => {
              const Icon = source.icon;

              return (
                <div
                  key={source.label}
                  className="rounded-xl border border-ink/8 bg-[#FAFAF9] p-2.5 sm:p-3"
                >
                  <Icon className="size-4 text-ink/60 sm:size-4.5" />

                  <p className="mt-2 text-[10px] font-semibold leading-tight text-ink sm:text-xs">
                    {source.label}
                  </p>

                  <p className="mt-1 hidden text-[10px] leading-relaxed text-subtle sm:block">
                    {source.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Connection */}
          <div className="flex flex-col items-center justify-center gap-3 text-brand">
            <ArrowRight className="size-4 sm:size-5" />

            <div className="h-20 w-px border-l border-dashed border-brand/40 sm:h-24" />

            <ArrowRight className="size-4 sm:size-5" />
          </div>

          {/* Central application */}
          <div className="relative overflow-hidden rounded-2xl border border-brand/20 bg-[#F8FAFF] p-3 sm:p-4">

            <div className="absolute right-0 top-0 size-24 rounded-full bg-brand/6 blur-2xl" />

            <div className="relative">
              <div className="flex size-9 items-center justify-center rounded-xl bg-brand text-white shadow-lg shadow-brand/20">
                <Workflow className="size-4.5" />
              </div>

              <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand sm:text-[11px]">
                After
              </p>

              <h4 className="mt-1 text-sm font-semibold leading-tight tracking-tight text-ink sm:text-base">
                Your business
                application
              </h4>

              <p className="mt-2 text-[10px] leading-relaxed text-[#667085] sm:text-xs">
                One system designed around your operations.
              </p>

              <div className="mt-5 space-y-2.5 border-t border-brand/10 pt-4">
                {[
                  "Business data",
                  "Team workflows",
                  "Operational tools",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="size-3.5 shrink-0 text-brand" />

                    <span className="text-[9px] font-medium text-ink/75 sm:text-[11px]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Outcomes */}
        <div className="mt-7 border-t border-ink/[0.07] pt-5">
          <div className="flex items-center gap-2">
            <BarChart3 className="size-4 text-brand" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-subtle sm:text-[11px]">
              What changes
            </p>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {outcomes.map((outcome) => (
              <div key={outcome} className="flex items-center gap-2">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand/10">
                  <Check className="size-3 text-brand" />
                </span>

                <span className="text-[10px] font-medium leading-relaxed text-ink sm:text-[11px]">
                  {outcome}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom supporting label */}
      <div className="mt-4 flex items-center justify-center gap-2 text-subtle">
        <ArrowDown className="size-3.5" />

        <span className="text-[10px] font-medium tracking-wide sm:text-xs">
          Designed around your business requirements
        </span>
      </div>
    </div>
  );
}