import { ArrowUpRight } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Understand the business",
    description:
      "We start by understanding your business, the challenges you're facing, and what you want the application to achieve. We discuss existing workflows, users, and the problems that need solving.",
    outcome: "Business goals and requirements understood",
  },
  {
    number: "02",
    title: "Define the solution",
    description:
      "We translate those requirements into a practical project direction. Together, we identify essential features, user roles, workflows, priorities, and the scope of development.",
    outcome: "Defined scope, features, and project direction",
  },
  {
    number: "03",
    title: "Design the experience",
    description:
      "Before building the application, we plan how people will use it. We structure the interface, map important interactions, and develop the visual direction around the needs of its users.",
    outcome: "Application structure and interface designs",
  },
  {
    number: "04",
    title: "Build and validate",
    description:
      "We develop the application in planned stages, implement its functionality, connect required services, and test important workflows to identify issues before launch.",
    outcome: "Developed and tested application",
  },
  {
    number: "05",
    title: "Launch and improve",
    description:
      "Once everything is reviewed and ready, we deploy the application. After launch, we can continue supporting it, addressing technical issues, and developing improvements as your business evolves.",
    outcome: "Live application and a path for ongoing improvements",
  },
];

export default function DevelopmentProcess() {
  return (
    <section className="bg-page px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-360 lg:px-14">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Introduction */}
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-brand" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
                How we work
              </span>
            </div>

            <h2 className="mt-7 max-w-xl text-heading-1 text-ink">
              A clear process. From the first conversation to launch.
            </h2>

            <p className="mt-6 max-w-md text-[15px] leading-[1.85] text-[#667085] sm:text-base">
              Building useful software requires more than development. We
              follow a structured process to understand your requirements,
              make informed decisions, and deliver an application that works
              for your business.
            </p>

            <a
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-ink"
            >
              Discuss your project

              <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Process timeline */}
          <div className="relative">
            {/* Connecting line */}
            <div
              aria-hidden="true"
              className="absolute bottom-10 left-3.75 top-3 w-px bg-ink/10 sm:left-4.75"
            />

            <div className="space-y-10 sm:space-y-12">
              {processSteps.map((step) => (
                <article
                  key={step.number}
                  className="group relative grid grid-cols-[32px_1fr] gap-5 sm:grid-cols-[40px_1fr] sm:gap-7"
                >
                  {/* Step indicator */}
                  <div className="relative z-10 flex size-8 items-center justify-center rounded-full border border-ink/15 bg-page text-[10px] font-semibold text-ink transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white sm:size-10 sm:text-xs">
                    {step.number}
                  </div>

                  {/* Step content */}
                  <div className="border-b border-ink/10 pb-10 sm:pb-12">
                    <h3 className="text-xl font-semibold tracking-tight text-ink transition-colors duration-200 group-hover:text-brand sm:text-2xl">
                      {step.title}
                    </h3>

                    <p className="mt-4 max-w-2xl text-sm leading-[1.9] text-[#667085] sm:text-[15px]">
                      {step.description}
                    </p>

                    {/* Expected outcome */}
                    <div className="mt-6 flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#98A2B3]">
                        Outcome
                      </span>

                      <span className="text-xs font-medium text-ink/75 sm:text-[13px]">
                        {step.outcome}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}