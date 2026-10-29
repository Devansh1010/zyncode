import { ProblemVisualType } from "@/constants/problem_recognization";
import {
  ArrowRight,
  Check,
  CircleHelp,
  FileText,
  MessageCircle,
  PanelsTopLeft,
  Search,
  Workflow,
} from "lucide-react";


function VisualFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="relative flex min-h-36 items-center justify-center overflow-hidden rounded-lg border border-[#E8E6DF] bg-[#F7F6F2] p-4 sm:min-h-40 sm:p-5"
    >
      {children}
    </div>
  );
}

function PositioningVisual() {
  return (
    <VisualFrame>
      <div className="grid w-full max-w-90 grid-cols-2 gap-3">
        {/* Generic presentation */}
        <div className="rounded-md border border-[#E5E3DD] bg-white p-3 opacity-70">
          <div className="mb-3 flex items-center gap-1.5">
            <PanelsTopLeft className="h-3.5 w-3.5 text-[#8A8A82]" />

            <span className="text-[9px] font-medium uppercase tracking-wide text-[#74766F]">
              Before
            </span>
          </div>

          <div className="mb-2 h-1.5 w-3/4 rounded-full bg-[#D8D6D0]" />
          <div className="mb-1.5 h-1 w-full rounded-full bg-[#EAE8E2]" />
          <div className="h-1 w-4/5 rounded-full bg-[#EAE8E2]" />

          <div className="mt-4 flex gap-1.5">
            <div className="h-7 flex-1 rounded-sm bg-[#F0EFEA]" />
            <div className="h-7 flex-1 rounded-sm bg-[#F0EFEA]" />
          </div>
        </div>

        {/* Clearer differentiation */}
        <div className="rounded-md border border-brand/35 bg-white p-3 shadow-[0_4px_14px_rgba(37,99,235,0.06)]">
          <div className="mb-3 flex items-center gap-1.5">
            <Check className="h-3.5 w-3.5 text-brand" />

            <span className="text-[9px] font-medium uppercase tracking-wide text-brand">
              Clear value
            </span>
          </div>

          <div className="mb-2 h-1.5 w-4/5 rounded-full bg-brand" />
          <div className="mb-1.5 h-1 w-full rounded-full bg-[#DCE7FF]" />
          <div className="h-1 w-3/4 rounded-full bg-[#DCE7FF]" />

          <div className="mt-4 flex items-center gap-1.5 rounded-sm bg-brand px-2 py-1.5">
            <Check className="h-3 w-3 text-white" />

            <span className="text-[8px] font-medium text-white">
              WHY CHOOSE US
            </span>
          </div>
        </div>
      </div>

      <span className="absolute bottom-2 right-3 text-[8px] font-medium uppercase tracking-[0.14em] text-[#8A8A82]">
        From generic to distinctive
      </span>
    </VisualFrame>
  );
}

function ConversionVisual() {
  return (
    <VisualFrame>
      <div className="w-full max-w-90 space-y-3">
        {/* Unclear customer journey */}
        <div className="flex items-center gap-3 rounded-md border border-[#E5E3DD] bg-white px-3 py-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#F3F1EC]">
            <CircleHelp className="h-4 w-4 text-[#8A8A82]" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-medium text-ink">
              Still have questions?
            </p>

            <div className="mt-1.5 h-1 w-3/4 rounded-full bg-[#EAE8E2]" />
          </div>

          <span className="text-[9px] text-[#8A8A82]">Unclear</span>
        </div>

        <div className="flex justify-center">
          <ArrowRight className="h-4 w-4 rotate-90 text-[#A5A39A]" />
        </div>

        {/* Clear customer journey */}
        <div className="flex items-center gap-3 rounded-md border border-brand/30 bg-white px-3 py-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#EAF0FF]">
            <MessageCircle className="h-4 w-4 text-brand" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-medium text-ink">
              Ready to talk?
            </p>

            <div className="mt-1.5 h-1 w-2/3 rounded-full bg-[#DCE7FF]" />
          </div>

          <span className="rounded-sm bg-brand px-2 py-1 text-[8px] font-medium text-white">
            CONTACT
          </span>
        </div>
      </div>

      <span className="absolute bottom-2 right-3 text-[8px] font-medium uppercase tracking-[0.14em] text-[#8A8A82]">
        A clearer path to enquiry
      </span>
    </VisualFrame>
  );
}

function GrowthVisual() {
  return (
    <VisualFrame>
      <div className="flex w-full max-w-90 items-center gap-3">
        {/* Business has evolved */}
        <div className="min-w-0 flex-1 rounded-md border border-brand/30 bg-white p-3">
          <div className="mb-3 flex items-center gap-1.5">
            <PanelsTopLeft className="h-3.5 w-3.5 text-brand" />

            <span className="text-[9px] font-medium text-ink">
              Your business
            </span>
          </div>

          <div className="mb-2 h-1.5 w-4/5 rounded-full bg-brand" />
          <div className="mb-1.5 h-1 w-full rounded-full bg-[#DCE7FF]" />
          <div className="h-1 w-3/4 rounded-full bg-[#DCE7FF]" />

          <div className="mt-4 flex items-center gap-1.5 text-[9px] text-brand">
            <Check className="h-3 w-3" />
            <span>Moving forward</span>
          </div>
        </div>

        <ArrowRight className="h-4 w-4 shrink-0 text-[#A5A39A]" />

        {/* Website hasn't evolved */}
        <div className="min-w-0 flex-1 rounded-md border border-[#E5E3DD] bg-white p-3">
          <div className="mb-3 flex items-center gap-1.5">
            <FileText className="h-3.5 w-3.5 text-[#8A8A82]" />

            <span className="text-[9px] font-medium text-[#74766F]">
              Your website
            </span>
          </div>

          <div className="mb-2 h-1.5 w-3/4 rounded-full bg-[#D8D6D0]" />
          <div className="mb-1.5 h-1 w-full rounded-full bg-[#EAE8E2]" />
          <div className="h-1 w-4/5 rounded-full bg-[#EAE8E2]" />

          <div className="mt-4 flex items-center gap-1.5 text-[9px] text-[#8A8A82]">
            <CircleHelp className="h-3 w-3" />
            <span>Still catching up</span>
          </div>
        </div>
      </div>

      <span className="absolute bottom-2 right-3 text-[8px] font-medium uppercase tracking-[0.14em] text-[#8A8A82]">
        Growth deserves a better presence
      </span>
    </VisualFrame>
  );
}

function WorkflowVisual() {
  return (
    <VisualFrame>
      <div className="w-full max-w-90">
        {/* Disconnected information */}
        <div className="mb-3 grid grid-cols-3 gap-2">
          <div className="rounded-md border border-[#E5E3DD] bg-white p-2">
            <FileText className="mb-2 h-3.5 w-3.5 text-[#8A8A82]" />

            <p className="text-[9px] font-medium text-ink">Records</p>

            <div className="mt-2 h-1 w-full rounded-full bg-[#EAE8E2]" />
          </div>

          <div className="rounded-md border border-[#E5E3DD] bg-white p-2">
            <MessageCircle className="mb-2 h-3.5 w-3.5 text-[#8A8A82]" />

            <p className="text-[9px] font-medium text-ink">Messages</p>

            <div className="mt-2 h-1 w-full rounded-full bg-[#EAE8E2]" />
          </div>

          <div className="rounded-md border border-[#E5E3DD] bg-white p-2">
            <Search className="mb-2 h-3.5 w-3.5 text-[#8A8A82]" />

            <p className="text-[9px] font-medium text-ink">Updates</p>

            <div className="mt-2 h-1 w-full rounded-full bg-[#EAE8E2]" />
          </div>
        </div>

        <div className="flex justify-center">
          <ArrowRight className="h-4 w-4 rotate-90 text-[#A5A39A]" />
        </div>

        {/* Connected workflow */}
        <div className="mt-3 flex items-center gap-3 rounded-md border border-brand/30 bg-white p-3 shadow-[0_4px_14px_rgba(37,99,235,0.05)]">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#EAF0FF]">
            <Workflow className="h-4 w-4 text-brand" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-medium text-ink">
              One connected workflow
            </p>

            <div className="mt-2 h-1 w-full rounded-full bg-[#DCE7FF]" />
          </div>

          <Check className="h-4 w-4 shrink-0 text-brand" />
        </div>
      </div>

      <span className="absolute bottom-2 right-3 text-[8px] font-medium uppercase tracking-[0.14em] text-[#8A8A82]">
        Less friction, more control
      </span>
    </VisualFrame>
  );
}

export function ProblemVisual({
  type,
}: {
  type: ProblemVisualType;
}) {
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