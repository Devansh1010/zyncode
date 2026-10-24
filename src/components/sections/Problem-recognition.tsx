"use client";

import {
  ArrowDownRight,
  ArrowRight,
  Check,
  Plus
} from "lucide-react";

const problems = [
  {
    number: "01",
    category: "POSITIONING",
    title: "Customers don't see what makes you different.",
    description:
      "Your business offers something worth choosing, but your website looks and sounds like many others. Visitors may leave without understanding why they should choose you.",
    visual: "positioning",
  },
  {
    number: "02",
    category: "CONVERSIONS",
    title: "Your website isn't turning interest into enquiries.",
    description:
      "Visitors may be interested in your services but struggle to find the information they need, build confidence in your business, or figure out what to do next.",
    visual: "conversion",
  },
  {
    number: "03",
    category: "DIGITAL PRESENCE",
    title: "Your online presence no longer reflects your business.",
    description:
      "Your services, experience, or ambitions have moved forward, but your website still tells an older story. Your digital presence should reflect the business you've built today.",
    visual: "growth",
  },
  {
    number: "04",
    category: "WORKFLOW & OPERATIONS",
    title: "Everyday work is harder than it needs to be.",
    description:
      "Information is scattered across spreadsheets, messages, and disconnected tools. A tailored digital application could bring the right parts of your workflow together.",
    visual: "workflow",
  },
] as const;

type ProblemVisualType = (typeof problems)[number]["visual"];

function PositioningVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative flex h-29.5 items-center justify-center overflow-hidden rounded-lg border border-[#E8E6DF] bg-[#F7F6F2] px-5"
    >
      <div className="grid w-full max-w-77.5 grid-cols-3 gap-2">
        <div className="flex h-16 flex-col justify-between rounded-md border border-[#E5E3DD] bg-white p-2.5">
          <span className="h-1.5 w-7 rounded-full bg-[#D8D6D0]" />
          <span className="h-1 w-full rounded-full bg-[#EAE8E2]" />
          <span className="h-1 w-3/4 rounded-full bg-[#EAE8E2]" />
        </div>

        <div className="flex h-16 flex-col justify-between rounded-md border border-brand bg-white p-2.5 shadow-[0_4px_14px_rgba(37,99,235,0.08)]">
          <span className="h-1.5 w-7 rounded-full bg-brand" />
          <span className="h-1 w-full rounded-full bg-[#DCE7FF]" />
          <span className="h-1 w-3/4 rounded-full bg-[#DCE7FF]" />
          <span className="mt-0.5 flex h-3 w-7 items-center justify-center rounded-sm bg-brand">
            <Check className="h-2 w-2 text-white" />
          </span>
        </div>

        <div className="flex h-16 flex-col justify-between rounded-md border border-[#E5E3DD] bg-white p-2.5">
          <span className="h-1.5 w-7 rounded-full bg-[#D8D6D0]" />
          <span className="h-1 w-full rounded-full bg-[#EAE8E2]" />
          <span className="h-1 w-3/4 rounded-full bg-[#EAE8E2]" />
        </div>
      </div>

      <span className="absolute bottom-2.5 right-3 text-[9px] font-medium uppercase tracking-[0.16em] text-[#8A8A82]">
        One clear difference
      </span>
    </div>


  );
}

function ConversionVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative flex h-29.5 items-center justify-center overflow-hidden rounded-lg border border-[#E8E6DF] bg-[#F7F6F2] px-5"
    >
      <div className="flex w-full max-w-77.5 items-center gap-2.5">
        <div className="flex h-13.5 flex-1 flex-col justify-center gap-2 rounded-md border border-[#E5E3DD] bg-white px-3">
          <span className="h-1.5 w-10 rounded-full bg-[#D8D6D0]" />
          <span className="h-1 w-full rounded-full bg-[#EAE8E2]" />
        </div>


        < div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#DDDAD2] bg-white" >
          <ArrowRight className="h-3.5 w-3.5 text-[#8A8A82]" />
        </div >

        <div className="flex h-[54px] flex-1 flex-col justify-center gap-2 rounded-md border border-[#2563EB]/30 bg-white px-3">
          <span className="h-1.5 w-12 rounded-full bg-[#2563EB]" />
          <span className="flex h-5 w-full items-center justify-center rounded-sm bg-[#2563EB] text-[8px] font-medium tracking-wide text-white">
            GET IN TOUCH
          </span>
        </div>
      </div >

      <span className="absolute bottom-2.5 right-3 text-[9px] font-medium uppercase tracking-[0.16em] text-[#8A8A82]">
        A clear next step
      </span>
    </div >


  );
}

function GrowthVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative flex h-29.5 items-center justify-center overflow-hidden rounded-lg border border-[#E8E6DF] bg-[#F7F6F2] px-5"
    >
      <div className="flex w-full max-w-77.5 items-center gap-3">
        <div className="flex h-15.5 flex-1 flex-col justify-between rounded-md border border-[#E5E3DD] bg-white p-2.5 opacity-75">
          <div className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D8D6D0]" />
            <span className="h-1 w-8 rounded-full bg-[#E5E3DD]" />
          </div>
          <span className="h-1 w-full rounded-full bg-[#EAE8E2]" />
          <span className="h-1 w-2/3 rounded-full bg-[#EAE8E2]" />
        </div>


        < ArrowRight className="h-4 w-4 shrink-0 text-[#9A9991]" />

        <div className="flex h-[76px] flex-1 flex-col justify-between rounded-md border border-brand/35 bg-white p-2.5 shadow-[0_4px_14px_rgba(37,99,235,0.06)]">
          <div className="flex items-center justify-between">
            <span className="h-1.5 w-9 rounded-full bg-[#2563EB]" />
            <span className="h-2 w-2 rounded-full bg-[#DCE7FF]" />
          </div>
          <span className="h-1 w-full rounded-full bg-[#DCE7FF]" />
          <span className="h-1 w-4/5 rounded-full bg-[#DCE7FF]" />
          <span className="h-1 w-1/2 rounded-full bg-[#EAE8E2]" />
        </div>
      </div >

      <span className="absolute bottom-2.5 right-3 text-[9px] font-medium uppercase tracking-[0.16em] text-[#8A8A82]">
        Built for today
      </span>
    </div >


  );
}

function WorkflowVisual() {
  return (<div
    aria-hidden="true"
    className="relative flex h-[118px] items-center justify-center overflow-hidden rounded-lg border border-[#E8E6DF] bg-[#F7F6F2] px-5"
  > <div className="flex w-full max-w-[310px] items-center justify-between gap-2"> <div className="flex flex-col gap-2"> <span className="flex h-6 w-[66px] items-center gap-1.5 rounded border border-[#E5E3DD] bg-white px-2"> <span className="h-2 w-2 rounded-sm bg-[#D8D6D0]" /> <span className="h-1 w-7 rounded-full bg-[#E5E3DD]" /> </span> <span className="flex h-6 w-[66px] items-center gap-1.5 rounded border border-[#E5E3DD] bg-white px-2"> <span className="h-2 w-2 rounded-sm bg-[#D8D6D0]" /> <span className="h-1 w-7 rounded-full bg-[#E5E3DD]" /> </span> </div>


      < div className="flex flex-col items-center gap-1 text-[#A5A39A]" >
        <Plus className="h-3 w-3" />
        <span className="h-5 w-px bg-[#D8D6D0]" />
        <Plus className="h-3 w-3" />
      </div >

      <ArrowRight className="h-4 w-4 shrink-0 text-[#9A9991]" />

      <div className="flex h-[66px] w-[96px] flex-col justify-center gap-2 rounded-md border border-[#2563EB]/35 bg-white px-3 shadow-[0_4px_14px_rgba(37,99,235,0.06)]">
        <span className="h-1.5 w-12 rounded-full bg-[#2563EB]" />
        <span className="h-1 w-full rounded-full bg-[#DCE7FF]" />
        <span className="h-1 w-3/4 rounded-full bg-[#DCE7FF]" />
      </div>
    </div >

    <span className="absolute bottom-2.5 right-3 text-[9px] font-medium uppercase tracking-[0.16em] text-[#8A8A82]">
      Connected workflows
    </span>
  </div >


  );
}

function ProblemVisual({ type }: { type: ProblemVisualType }) {
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

export default function ProblemRecognition() {
  return (<section
    aria-labelledby="problem-recognition-title"
    className="relative overflow-hidden bg-[#F7F6F2] py-20 sm:py-24 lg:py-32"
  > <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
      {/* Section introduction */} <div className="mx-auto mb-12 max-w-[800px] text-center sm:mb-16 lg:mb-20"> <div className="mb-6 inline-flex items-center gap-2.5"> <span className="h-px w-6 bg-[#2563EB]" /> <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#62645F] sm:text-[11px]">
        Does this sound familiar? </span> <span className="h-px w-6 bg-[#2563EB]" /> </div>


        < h2
          id="problem-recognition-title"
          className="text-balance text-[clamp(2.4rem,5.3vw,4.75rem)] font-medium leading-[1.06] tracking-[-0.065em] text-[#101828]"
        >
          Your business has more to offer.
          < span className="mt-1 block font-serif font-normal italic tracking-[-0.055em] text-[#2563EB]" >
            Does your digital experience show it ?
          </span >
        </h2 >

        <p className="mx-auto mt-6 max-w-[620px] text-pretty text-sm leading-7 text-[#62645F] sm:mt-7 sm:text-base sm:leading-8">
          Your website should communicate your value, help potential
          customers feel confident choosing you, and make the next step
          clear. And when your operations need more than a website, the right
          digital tools can make everyday work simpler.
        </p>
      </div >

      {/* Problem cards */}
      < div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5" >
        {
          problems.map((problem) => (
            <article
              key={problem.number}
              className="group flex min-w-0 flex-col rounded-xl border border-[#E4E2DB] bg-white p-5 transition-colors duration-300 hover:border-[#C9D8FA] sm:p-7 lg:p-8"
            >
              {/* Card metadata */}
              <div className="mb-6 flex items-center justify-between gap-4">
                <span className="font-mono text-xs tracking-wide text-[#8A8A82]">
                  / {problem.number}
                </span>

                <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#74766F] sm:text-[10px]">
                  {problem.category}
                </span>
              </div>

              {/* Heading and description */}
              <div className="mb-6 max-w-[470px]">
                <h3 className="text-balance text-xl font-medium leading-snug tracking-[-0.035em] text-[#101828] sm:text-[1.65rem] sm:leading-[1.25]">
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
            </article>
          ))
        }
      </div >

      {/* Transition to the next section */}
      < div className="mt-12 flex flex-col items-center text-center sm:mt-16" >
        <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#DCDAD2] text-[#2563EB]">
          <ArrowDownRight className="h-4 w-4" />
        </div>

        <p className="max-w-[650px] text-balance text-xl font-medium leading-snug tracking-[-0.035em] text-[#101828] sm:text-2xl sm:leading-relaxed">
          A better digital experience starts with understanding what your
          business needs — and what your customers need from you.
        </p>

        <p className="mt-3 max-w-[460px] text-sm leading-6 text-[#74766F]">
          That understanding shapes what we design, what we build, and how
          every part works together.
        </p>
      </div >
    </div >
  </section >


  );
}