import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Clock3,
  Menu,
  MoveUpRight,
} from "lucide-react";
import TalkToUsWpBtn from "../layout/TalkToUsWpBtn";

const projects = [
  {
    number: "01",
    category: "Business Website · Concept",
    title: "Healthcare Website Concept",
    description:
      "A calm, professional digital experience designed to help patients understand a healthcare practice, explore its services, and feel more confident about taking the next step.",
    linkLabel: "Explore business websites",
    href: "/services/business-websites",
    visual: "healthcare",
  },
  {
    number: "02",
    category: "Custom Web Application · Concept",
    title: "Operations Workspace Concept",
    description:
      "A practical interface concept for organizing business records, keeping information accessible, and making everyday operational work easier to follow.",
    linkLabel: "Explore custom applications",
    href: "/services/web-applications",
    visual: "workspace",
  },
  {
    number: "03",
    category: "Website Redesign · Concept",
    title: "A More Considered Web Experience",
    description:
      "A redesign concept exploring stronger visual hierarchy, clearer messaging, and a more direct path from discovering a business to contacting it.",
    linkLabel: "Explore website redesign",
    href: "/services/website-redesign",
    visual: "redesign",
  },
] as const;

type ProjectVisualType = (typeof projects)[number]["visual"];

function BrowserFrame({
  children,
  address = "website-concept.example",
  className = "",
}: {
  children: React.ReactNode;
  address?: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden border border-[#101828]/10 bg-white ${className}`}
    >
      <div className="flex h-9 items-center gap-3 border-b border-[#101828]/10 bg-[#fbfbf8] px-3 sm:h-10 sm:px-4">
        <div className="flex shrink-0 items-center gap-1.5">
          <span className="size-2 rounded-full bg-[#d8d6cf]" />
          <span className="size-2 rounded-full bg-[#d8d6cf]" />
          <span className="size-2 rounded-full bg-[#d8d6cf]" />
        </div>

        <div className="flex h-5 min-w-0 flex-1 items-center justify-center bg-[#f0efe9] px-2">
          <span className="truncate text-[9px] text-[#8a8a80]">
            {address}
          </span>
        </div>
      </div>

      {children}
    </div>
  );
}

/**
 * Illustrative website preview.
 * This is a concept visualization, not a screenshot of a real client website.
 */
function HealthcareConcept() {
  return (
    <BrowserFrame address="healthcare-website-concept.example">
      <div className="bg-[#fbfaf6]">
        <header className="flex items-center justify-between border-b border-[#253d31]/10 px-4 py-3 sm:px-7 sm:py-4">
          <div className="flex items-center gap-2">
            <div className="flex size-6 items-center justify-center bg-[#244936] text-white">
              <span className="text-sm">+</span>
            </div>

            <div>
              <p className="text-[10px] font-semibold tracking-tight text-[#244936] sm:text-xs">
                PRACTICE NAME
              </p>
              <p className="mt-0.5 text-[7px] tracking-wide text-[#777e71]">
                CARE, WITH CLARITY
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-5 md:flex">
            <span className="text-[9px] text-[#58675b]">Our approach</span>
            <span className="text-[9px] text-[#58675b]">Treatments</span>
            <span className="text-[9px] text-[#58675b]">About us</span>
          </div>

          <div className="flex items-center gap-1.5 bg-[#244936] px-2.5 py-2 text-[8px] text-white sm:px-3.5">
            Book a visit
            <ArrowUpRight className="size-2.5" />
          </div>
        </header>

        <div className="grid min-h-[230px] grid-cols-2 sm:min-h-[300px]">
          <div className="flex flex-col items-start justify-center px-4 py-6 sm:px-8 sm:py-10">
            <span className="text-[8px] uppercase tracking-[0.16em] text-[#6f806e] sm:text-[9px]">
              A more personal approach
            </span>

            <h3 className="mt-3 max-w-[260px] font-serif text-xl leading-[1.1] tracking-[-0.045em] text-[#244936] sm:mt-4 sm:text-3xl lg:text-[38px]">
              Care that starts with understanding.
            </h3>

            <p className="mt-3 max-w-[220px] text-[9px] leading-relaxed text-[#6c756a] sm:mt-4 sm:text-[11px]">
              Clear information, a welcoming experience, and care centered
              around you.
            </p>

            <div className="mt-4 flex items-center gap-2 border-b border-[#244936] pb-1.5 text-[9px] font-medium text-[#244936] sm:mt-6 sm:text-[10px]">
              Discover our approach
              <ArrowRight className="size-3" />
            </div>
          </div>

          <div className="relative m-2 overflow-hidden bg-[#e3e5d8] sm:m-4">
            <div className="absolute inset-0 bg-[linear-gradient(145deg,#e3e5d8_0%,#c9d3c2_100%)]" />

            <div className="absolute right-[12%] top-[12%] size-[65%] rounded-t-full bg-[#aabda6]" />

            <div className="absolute bottom-0 left-0 h-[52%] w-full bg-[#b7c6b0]" />

            <div className="absolute bottom-0 right-[17%] h-[78%] w-[33%] bg-[#f0eee3]" />

            <div className="absolute bottom-[15%] left-[12%] h-[35%] w-[42%] border border-white/70" />

            <div className="absolute bottom-3 left-3 bg-[#fbfaf6]/90 px-2 py-1.5 sm:bottom-5 sm:left-5 sm:px-3 sm:py-2">
              <p className="text-[7px] uppercase tracking-wider text-[#244936] sm:text-[8px]">
                Your first visit
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 border-t border-[#253d31]/10">
          {[
            ["01", "Understand"],
            ["02", "Feel informed"],
            ["03", "Take the next step"],
          ].map(([number, label]) => (
            <div
              key={number}
              className="border-r border-[#253d31]/10 px-3 py-3 last:border-r-0 sm:px-5 sm:py-4"
            >
              <span className="text-[8px] text-[#83917d]">{number}</span>
              <p className="mt-1.5 text-[8px] font-medium text-[#244936] sm:text-[10px]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

/**
 * Illustrative application preview.
 * Example interface data is visual placeholder content, not a client result.
 */
function WorkspaceConcept() {
  return (
    <div className="overflow-hidden border border-[#101828]/10 bg-white">
      <div className="flex min-h-[245px] sm:min-h-[290px]">
        <aside className="hidden w-[24%] shrink-0 border-r border-[#101828]/10 bg-[#f7f8fa] p-4 sm:block">
          <div className="flex items-center gap-2">
            <div className="flex size-6 items-center justify-center bg-[#2563eb] text-white">
              <Menu className="size-3" />
            </div>
            <span className="text-[10px] font-semibold text-[#101828]">
              Workspace
            </span>
          </div>

          <div className="mt-7 space-y-4">
            {["Overview", "Records", "Enquiries", "Activity"].map(
              (item, index) => (
                <div key={item} className="flex items-center gap-2">
                  <span
                    className={`size-1.5 ${index === 0 ? "bg-[#2563eb]" : "bg-[#d0d4dc]"
                      }`}
                  />
                  <span
                    className={`text-[9px] ${index === 0
                        ? "font-medium text-[#2563eb]"
                        : "text-[#818795]"
                      }`}
                  >
                    {item}
                  </span>
                </div>
              ),
            )}
          </div>
        </aside>

        <div className="min-w-0 flex-1 bg-white p-4 sm:p-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[9px] text-[#858a95]">WORKSPACE / OVERVIEW</p>
              <h3 className="mt-1.5 text-sm font-medium tracking-tight text-[#101828] sm:text-base">
                Your work, organized.
              </h3>
            </div>

            <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#edf1fa] text-[9px] text-[#3156a5]">
              JD
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2 sm:gap-3">
            <div className="border border-[#101828]/10 p-3">
              <div className="flex items-center gap-1.5 text-[#777f8d]">
                <Menu className="size-3" />
                <span className="text-[9px]">Records</span>
              </div>
              <p className="mt-2 text-xl font-medium tracking-tight text-[#101828]">
                128
              </p>
              <p className="mt-1 text-[8px] text-[#858a95]">
                Example interface data
              </p>
            </div>

            <div className="border border-[#101828]/10 p-3">
              <div className="flex items-center gap-1.5 text-[#777f8d]">
                <Clock3 className="size-3" />
                <span className="text-[9px]">Open tasks</span>
              </div>
              <p className="mt-2 text-xl font-medium tracking-tight text-[#101828]">
                08
              </p>
              <p className="mt-1 text-[8px] text-[#858a95]">
                Example interface data
              </p>
            </div>
          </div>

          <div className="mt-4 border border-[#101828]/10">
            <div className="flex items-center justify-between border-b border-[#101828]/10 px-3 py-2.5">
              <span className="text-[9px] font-medium text-[#101828]">
                Recent activity
              </span>
              <span className="text-[8px] text-[#2563eb]">View records</span>
            </div>

            {[
              ["Project record", "Updated recently"],
              ["New enquiry", "Needs review"],
              ["Work assignment", "In progress"],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="flex items-center justify-between gap-3 border-b border-[#101828]/[0.06] px-3 py-2.5 last:border-b-0"
              >
                <div className="min-w-0">
                  <p className="truncate text-[9px] font-medium text-[#343b49]">
                    {title}
                  </p>
                  <p className="mt-1 text-[8px] text-[#858a95]">{detail}</p>
                </div>

                <ChevronRight className="size-3 shrink-0 text-[#9ba1ac]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Illustrative redesign preview.
 * This is not a real before-and-after comparison.
 */
function RedesignConcept() {
  return (
    <BrowserFrame address="website-redesign-concept.example">
      <div className="bg-[#f8f7f3]">
        <div className="flex items-center justify-between border-b border-[#101828]/10 px-4 py-3 sm:px-5">
          <span className="text-[10px] font-semibold tracking-tight text-[#101828]">
            STUDIO / BUSINESS
          </span>

          <div className="flex items-center gap-2">
            <span className="hidden text-[8px] text-[#747770] sm:inline">
              About
            </span>
            <span className="hidden text-[8px] text-[#747770] sm:inline">
              Services
            </span>
            <div className="bg-[#101828] px-2.5 py-2 text-[8px] text-white">
              Get in touch
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[1fr_0.8fr]">
          <div className="flex flex-col items-start justify-center px-4 py-7 sm:px-6 sm:py-10">
            <span className="text-[8px] uppercase tracking-[0.15em] text-[#777970]">
              Built around your needs
            </span>

            <h3 className="mt-3 max-w-[220px] text-xl font-medium leading-[1.1] tracking-[-0.055em] text-[#101828] sm:mt-4 sm:text-3xl">
              Make your next step clear.
            </h3>

            <p className="mt-3 max-w-[190px] text-[9px] leading-relaxed text-[#73766f] sm:mt-4 sm:text-[10px]">
              A clearer story. A more considered experience. A better way to
              connect.
            </p>

            <div className="mt-4 flex items-center gap-2 border-b border-[#2563eb] pb-1.5 text-[9px] font-medium text-[#2563eb] sm:mt-6">
              Discover what we do
              <ArrowUpRight className="size-3" />
            </div>
          </div>

          <div className="relative m-2 min-h-[180px] overflow-hidden bg-[#e4e7e0] sm:m-4 sm:min-h-[230px]">
            <div className="absolute right-[-10%] top-[8%] size-[70%] rounded-full bg-[#c6d2c2]" />
            <div className="absolute bottom-0 left-0 h-[45%] w-full bg-[#d2d9ce]" />
            <div className="absolute bottom-0 left-[17%] h-[65%] w-[29%] bg-[#f8f7f3]" />
            <div className="absolute bottom-0 right-[13%] h-[80%] w-[27%] bg-[#a8b7a5]" />
            <div className="absolute left-[13%] top-[20%] h-[24%] w-[35%] border border-white/80" />
          </div>
        </div>

        <div className="grid grid-cols-3 border-t border-[#101828]/10">
          {[
            ["01", "Clear messaging"],
            ["02", "Considered design"],
            ["03", "Useful journeys"],
          ].map(([number, label]) => (
            <div
              key={number}
              className="border-r border-[#101828]/10 px-3 py-3 last:border-r-0 sm:px-4 sm:py-4"
            >
              <span className="text-[8px] text-[#858a95]">{number}</span>
              <p className="mt-1.5 text-[8px] font-medium text-[#101828] sm:text-[9px]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

function ProjectVisual({ type }: { type: ProjectVisualType }) {
  switch (type) {
    case "healthcare":
      return <HealthcareConcept />;
    case "workspace":
      return <WorkspaceConcept />;
    case "redesign":
      return <RedesignConcept />;
  }
}

export default function SelectedWork() {
  const [featuredProject, ...supportingProjects] = projects;

  return (
    <section
      id="selected-work"
      aria-labelledby="selected-work-heading"
      className="overflow-hidden bg-[#f7f6f2] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section introduction */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
              Selected work
            </p>

            <h2
              id="selected-work-heading"
              className="max-w-3xl text-balance text-3xl font-medium leading-[1.1] tracking-[-0.05em] text-[#101828] sm:text-4xl lg:text-[52px]"
            >
              Digital experiences, designed with purpose.
            </h2>
          </div>

          <p className="max-w-lg text-sm leading-7 text-[#62665f] sm:text-base lg:justify-self-end lg:pb-1">
            Every business has a different story to tell and different
            challenges to solve. Here’s a look at how we approach digital
            experiences through design, development, and practical
            problem-solving.
          </p>
        </div>

        {/* Featured project */}
        <article className="mt-10 sm:mt-14 lg:mt-16">
          <Link
            href={featuredProject.href}
            className="group block outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f6f2]"
            aria-label={`${featuredProject.linkLabel}: ${featuredProject.title}`}
          >
            <div className="overflow-hidden">
              <div className="transition-transform duration-500 ease-out motion-reduce:transform-none motion-reduce:transition-none group-hover:scale-[1.005]">
                <ProjectVisual type={featuredProject.visual} />
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-5 sm:mt-7 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#2563eb] sm:text-[11px]">
                  {featuredProject.category}
                </p>

                <h3 className="mt-2.5 text-2xl font-medium tracking-[-0.045em] text-[#101828] sm:text-3xl lg:text-4xl">
                  {featuredProject.title}
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#62665f] sm:text-[15px] sm:leading-7">
                  {featuredProject.description}
                </p>
              </div>

              <span className="inline-flex min-h-11 shrink-0 items-center gap-2 self-start text-sm font-medium text-[#101828] transition-colors group-hover:text-[#2563eb] sm:self-auto">
                {featuredProject.linkLabel}
                <MoveUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
                />
              </span>
            </div>
          </Link>
        </article>

        {/* Supporting projects */}
        <div className="mt-14 grid grid-cols-1 gap-10 border-t border-[#101828]/15 pt-10 sm:mt-16 sm:gap-8 sm:pt-12 md:grid-cols-2 lg:mt-20 lg:gap-10">
          {supportingProjects.map((project) => (
            <article key={project.number} className="min-w-0">
              <Link
                href={project.href}
                className="group block outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f6f2]"
                aria-label={`${project.linkLabel}: ${project.title}`}
              >
                <div className="overflow-hidden">
                  <div className="transition-transform duration-500 ease-out motion-reduce:transform-none motion-reduce:transition-none group-hover:scale-[1.005]">
                    <ProjectVisual type={project.visual} />
                  </div>
                </div>

                <div className="mt-5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#2563eb] sm:text-[11px]">
                    {project.category}
                  </p>

                  <h3 className="mt-2.5 text-xl font-medium tracking-[-0.04em] text-[#101828] sm:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-[#62665f]">
                    {project.description}
                  </p>

                  <span className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[#101828] transition-colors group-hover:text-[#2563eb]">
                    {project.linkLabel}
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
                    />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="mt-16 flex flex-col gap-5 border-t border-[#101828]/15 pt-8 sm:mt-20 sm:flex-row sm:items-center sm:justify-between sm:pt-10">
          <div>
            <h3 className="text-xl font-medium tracking-[-0.035em] text-[#101828] sm:text-2xl">
              Have something different in mind?
            </h3>

            <p className="mt-2 max-w-xl text-sm leading-6 text-[#62665f]">
              Tell us what your business needs, and let’s explore what we can
              build together.
            </p>
          </div>

          <TalkToUsWpBtn />
        </div>
      </div>
    </section>
  );
}