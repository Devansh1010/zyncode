import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ExternalLink,
} from "lucide-react";

const projects = [
  {
    number: "01",
    name: "Healthcare Website Concept",
    category: "Website design & development",
    type: "Concept project",
    description:
      "A considered digital experience for a healthcare business, designed to communicate credibility and help patients understand their next step.",
    challenge: "Build trust before the first appointment.",
    solution: "Clear information, patient-focused journeys, and a calm visual language.",
    href: "/contact",
    visual: "healthcare",
  },
  {
    number: "02",
    name: "Operations Workspace Concept",
    category: "Custom web application",
    type: "Concept project",
    description:
      "A conceptual operations platform that brings everyday business information into one structured workspace.",
    challenge: "Make complex operations easier to understand.",
    solution: "Organized information, clear priorities, and purposeful interface patterns.",
    href: "/contact",
    visual: "workspace",
  },
] as const;

function HealthcarePreview() {
  return (
    <div className="relative min-h-[300px] overflow-hidden bg-[#E9E7E0] p-4 sm:min-h-[390px] sm:p-7 lg:min-h-[440px] lg:p-9">
      <div className="mx-auto flex min-h-[270px] max-w-[560px] flex-col overflow-hidden border border-[#101828]/10 bg-[#FAF9F6] shadow-[0_20px_60px_rgba(16,24,40,0.09)] sm:min-h-[330px] lg:min-h-[365px]">
        <div className="flex items-center justify-between border-b border-[#101828]/10 px-4 py-3 sm:px-6">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#101828] sm:text-xs">
              WELLSPRING
            </p>
            <p className="mt-0.5 text-[8px] text-[#667085] sm:text-[10px]">
              Healthcare concept
            </p>
          </div>

          <div className="flex items-center gap-3 text-[8px] text-[#475467] sm:gap-5 sm:text-[10px]">
            <span>Our care</span>
            <span>Specialties</span>
            <span className="hidden sm:inline">Contact</span>
          </div>
        </div>

        <div className="grid flex-1 grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col justify-center p-4 sm:p-7 lg:p-9">
            <span className="text-[8px] font-medium uppercase tracking-[0.15em] text-[#667085] sm:text-[9px]">
              Care that starts with you
            </span>

            <h3 className="mt-3 text-xl font-medium leading-[1.12] tracking-[-0.05em] text-[#101828] sm:text-3xl lg:text-4xl">
              Feel better.
              <br />
              Feel understood.
            </h3>

            <p className="mt-3 max-w-[210px] text-[9px] leading-4 text-[#667085] sm:mt-4 sm:text-xs sm:leading-5">
              Healthcare built around your needs, your questions, and your
              wellbeing.
            </p>

            <div className="mt-5 flex w-fit items-center gap-2 bg-[#2563EB] px-3 py-2 text-[8px] font-medium text-white sm:mt-6 sm:px-4 sm:text-[10px]">
              Explore our care
              <ArrowUpRight aria-hidden="true" className="size-3" />
            </div>
          </div>

          <div className="relative m-3 overflow-hidden bg-[#D6DDD6] sm:m-5">
            <div className="absolute inset-x-3 bottom-3 top-8 rounded-t-[100px] border border-[#5C7165]/20 bg-[#B7C7B9] sm:inset-x-5 sm:bottom-5 sm:top-12 sm:rounded-t-[140px]" />

            <div className="absolute inset-x-0 bottom-0 h-[45%] bg-[#A5B6A7]" />

            <div className="absolute left-1/2 top-[23%] h-[34%] w-[35%] -translate-x-1/2 rounded-t-full bg-[#E9D5C3]" />

            <div className="absolute left-1/2 top-[15%] h-[19%] w-[40%] -translate-x-1/2 rounded-t-full bg-[#594B43]" />

            <div className="absolute bottom-[12%] left-1/2 h-[37%] w-[65%] -translate-x-1/2 rounded-t-[50%] bg-[#F1EEE6]" />

            <div className="absolute bottom-3 left-3 rounded-sm bg-[#FAF9F6]/90 px-2 py-1 text-[7px] text-[#475467] sm:bottom-4 sm:left-4 sm:text-[9px]">
              Illustrative artwork
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-[#101828]/10 px-4 py-2.5 sm:px-6">
          <span className="text-[8px] text-[#667085] sm:text-[10px]">
            Patient-first experience
          </span>
          <span className="text-[8px] text-[#667085] sm:text-[10px]">
            Concept 01
          </span>
        </div>
      </div>

      <div className="absolute bottom-5 right-5 hidden border border-[#101828]/10 bg-[#F7F6F2] px-4 py-3 sm:block">
        <p className="text-[9px] uppercase tracking-[0.12em] text-[#667085]">
          Design focus
        </p>
        <p className="mt-1 text-xs font-medium text-[#101828]">
          Clarity & trust
        </p>
      </div>
    </div>
  );
}

function WorkspacePreview() {
  return (
    <div className="relative min-h-[300px] overflow-hidden bg-[#E5E9EF] p-4 sm:min-h-[390px] sm:p-7 lg:min-h-[440px] lg:p-9">
      <div className="mx-auto flex min-h-[270px] max-w-[560px] overflow-hidden border border-[#101828]/10 bg-[#F9FAFB] shadow-[0_20px_60px_rgba(16,24,40,0.09)] sm:min-h-[330px] lg:min-h-[365px]">
        <aside className="flex w-[27%] shrink-0 flex-col border-r border-[#101828]/10 bg-[#F1F3F6] p-2 sm:p-4">
          <div className="flex items-center gap-1.5">
            <div className="size-4 rounded bg-[#2563EB] sm:size-5" />
            <span className="hidden text-[10px] font-semibold text-[#101828] sm:inline">
              WORKSPACE
            </span>
          </div>

          <div className="mt-6 space-y-3">
            {[100, 75, 85, 65].map((width, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className={`size-2 shrink-0 rounded-sm ${
                    index === 0 ? "bg-[#2563EB]" : "bg-[#98A2B3]/50"
                  }`}
                />
                <div
                  className={`h-1.5 rounded-full ${
                    index === 0 ? "bg-[#2563EB]/50" : "bg-[#D0D5DD]"
                  }`}
                  style={{ width: `${width}%` }}
                />
              </div>
            ))}
          </div>

          <div className="mt-auto hidden space-y-2 sm:block">
            <div className="h-px bg-[#101828]/10" />
            <div className="h-2 w-3/4 rounded-full bg-[#D0D5DD]" />
            <div className="h-2 w-1/2 rounded-full bg-[#D0D5DD]" />
          </div>
        </aside>

        <div className="min-w-0 flex-1 p-3 sm:p-5">
          <div className="flex items-center justify-between gap-2">
            <div>
              <p className="text-[8px] text-[#667085] sm:text-[10px]">
                MONDAY, 09:41 AM
              </p>
              <h3 className="mt-1 text-sm font-semibold tracking-[-0.04em] text-[#101828] sm:text-xl">
                Good morning.
              </h3>
            </div>

            <div className="size-6 rounded-full border border-[#101828]/10 bg-[#E5E9EF] sm:size-8" />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 sm:mt-6 sm:gap-3">
            {[
              { label: "Projects", value: "12" },
              { label: "In progress", value: "08" },
              { label: "Completed", value: "24" },
            ].map((item) => (
              <div
                key={item.label}
                className="border border-[#101828]/10 bg-white p-2 sm:p-3"
              >
                <p className="text-[7px] leading-3 text-[#667085] sm:text-[9px] sm:leading-4">
                  {item.label}
                </p>
                <p className="mt-1 text-sm font-semibold tracking-[-0.04em] text-[#101828] sm:text-xl">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 border border-[#101828]/10 bg-white p-3 sm:mt-5 sm:p-4">
            <div className="flex items-center justify-between gap-2">
              <p className="text-[9px] font-medium text-[#101828] sm:text-xs">
                Project overview
              </p>
              <span className="text-[7px] text-[#667085] sm:text-[9px]">
                This month
              </span>
            </div>

            <div className="mt-4 flex h-12 items-end gap-1.5 sm:h-16 sm:gap-2">
              {[35, 55, 42, 72, 50, 85, 63, 95, 68, 80, 58, 90].map(
                (height, index) => (
                  <div
                    key={index}
                    className={`flex-1 rounded-t-[2px] ${
                      index === 7 ? "bg-[#2563EB]" : "bg-[#D9E3F5]"
                    }`}
                    style={{ height: `${height}%` }}
                  />
                ),
              )}
            </div>
          </div>

          <div className="mt-3 flex items-center gap-2">
            <Check
              aria-hidden="true"
              className="size-3 text-[#2563EB] sm:size-4"
            />
            <div className="h-1.5 w-2/3 rounded-full bg-[#D0D5DD]" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 right-5 hidden border border-[#101828]/10 bg-[#F7F6F2] px-4 py-3 sm:block">
        <p className="text-[9px] uppercase tracking-[0.12em] text-[#667085]">
          Design focus
        </p>
        <p className="mt-1 text-xs font-medium text-[#101828]">
          Structure & clarity
        </p>
      </div>
    </div>
  );
}

export default function SelectedWork() {
  return (
    <section
      aria-labelledby="selected-work-heading"
      className="border-t border-[#101828]/10 bg-[#F7F6F2] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
              Selected work
            </p>

            <h2
              id="selected-work-heading"
              className="text-3xl font-medium leading-[1.12] tracking-[-0.045em] text-[#101828] sm:text-4xl md:text-5xl lg:text-[3.5rem]"
            >
              Good work starts with the right problem.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-[#475467] sm:text-lg sm:leading-8">
            Every business has different needs. These concept explorations show
            how design and development can respond to different challenges.
          </p>
        </div>

        <div className="mt-12 grid gap-12 sm:mt-16 lg:mt-20 lg:grid-cols-2 lg:gap-8">
          {projects.map((project) => (
            <article key={project.number} className="min-w-0">
              <div className="group relative overflow-hidden">
                {project.visual === "healthcare" ? (
                  <HealthcarePreview />
                ) : (
                  <WorkspacePreview />
                )}

                <div className="absolute right-4 top-4 flex items-center gap-2 border border-[#101828]/10 bg-[#F7F6F2]/95 px-3 py-2 text-[10px] font-medium text-[#101828]">
                  <span className="size-1.5 rounded-full bg-[#2563EB]" />
                  {project.type}
                </div>
              </div>

              <div className="mt-6 sm:mt-8">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-[#667085]">
                  <span>{project.number}</span>
                  <span aria-hidden="true" className="size-1 rounded-full bg-[#98A2B3]" />
                  <span>{project.category}</span>
                </div>

                <div className="mt-3 flex items-start justify-between gap-4">
                  <h3 className="text-xl font-medium tracking-[-0.035em] text-[#101828] sm:text-2xl">
                    {project.name}
                  </h3>

                  <ArrowUpRight
                    aria-hidden="true"
                    className="mt-1 size-5 shrink-0 text-[#2563EB] transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>

                <p className="mt-3 max-w-xl text-sm leading-7 text-[#475467] sm:text-base">
                  {project.description}
                </p>

                <div className="mt-5 grid gap-4 border-t border-[#101828]/10 pt-5 sm:grid-cols-2 sm:gap-6">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#667085]">
                      The challenge
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#101828]">
                      {project.challenge}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#667085]">
                      The direction
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#101828]">
                      {project.solution}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-[#101828]/15 pt-8 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-medium tracking-[-0.02em] text-[#101828]">
              Have a different challenge?
            </p>
            <p className="mt-2 text-sm leading-6 text-[#475467] sm:text-base">
              Let&apos;s explore what the right digital solution could look like
              for your business.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex min-h-12 w-fit shrink-0 items-center justify-center gap-3 rounded-full bg-[#101828] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F6F2]"
          >
            Discuss your project
            <ArrowDownRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}