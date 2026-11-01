
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    name: "Insights",
    category: "Independent Digital Product",
    status: "Live Product",
    description:
      "An article publishing platform designed to give writers a dedicated space to publish their ideas, organize content into series, and build an audience.",
    capabilities: [
      "Article publishing",
      "Content series",
      "Writer profiles",
      "Content discovery",
    ],
    image: "/images/work/insights.png",
    imageAlt: "Insights publishing platform interface",
    imagePosition: "object-top",
    year: "2026",
  },
  {
    number: "02",
    name: "Construction Operations Management",
    category: "Independent Software Product",
    status: "In Development",
    description:
      "A business management application being developed to bring construction site operations, workforce management, material purchases, expenses, and financial tracking into one connected system.",
    capabilities: [
      "Workforce and attendance",
      "Material and expense tracking",
      "Site management",
      "Financial records",
    ],
    image: "/images/work/construction-management.png",
    imageAlt: "Construction operations management application interface",
    imagePosition: "object-top",
    year: "2026",
  },
];

function ProjectVisual({
  image,
  imageAlt,
  imagePosition,
}: {
  image: string;
  imageAlt: string;
  imagePosition: string;
}) {
  return (
    <div className="relative aspect-16/10 overflow-hidden bg-[#EAE9E4] sm:aspect-video">
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(max-width: 1024px) 100vw, 60vw"
        className={`object-cover ${imagePosition}`}
      />
    </div>
  );
}

export default function SelectedWork() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-32">
      <div className="mx-auto max-w-360 lg:px-14">
        {/* Section introduction */}
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-brand" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
                Selected work
              </span>
            </div>

            <h2 className="mt-7 text-heading-1 text-ink">
              Thoughtful software.{" "}
              <span className="font-normal">Built to solve real problems.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#667085] sm:text-base">
              A look at the digital products and business systems we are
              designing and developing at Zyncode.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-brand"
          >
            Have a similar project?
            <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Project showcase */}
        <div className="mt-16 space-y-20 sm:mt-20 sm:space-y-24 lg:mt-24 lg:space-y-28">
          {projects.map((project) => (
            <article
              key={project.number}
              className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-16"
            >
              {/* Project visual */}
              <div className="min-w-0">
                <ProjectVisual
                  image={project.image}
                  imageAlt={project.imageAlt}
                  imagePosition={project.imagePosition}
                />
              </div>

              {/* Project information */}
              <div className="flex flex-col">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">
                    {project.category}
                  </span>

                  <span className="h-1 w-1 rounded-full bg-ink/30" />

                  <span className="text-xs text-[#667085]">
                    {project.status}
                  </span>
                </div>

                <div className="mt-6 flex items-start justify-between gap-4">
                  <h3 className="max-w-lg text-2xl font-semibold tracking-tight text-ink sm:text-3xl lg:text-[34px]">
                    {project.name}
                  </h3>

                  <span className="shrink-0 pt-2 text-xs font-medium text-[#98A2B3]">
                    {project.number}
                  </span>
                </div>

                <p className="mt-5 max-w-xl text-sm leading-[1.9] text-[#667085] sm:text-[15px]">
                  {project.description}
                </p>

                <div className="mt-8 border-t border-ink/10 pt-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#98A2B3]">
                    Key capabilities
                  </p>

                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
                    {project.capabilities.map((capability) => (
                      <span
                        key={capability}
                        className="text-xs font-medium text-ink/75 sm:text-[13px]"
                      >
                        <span className="mr-2 text-brand">/</span>
                        {capability}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-20 border-t border-ink/10 pt-8 sm:mt-24 lg:mt-28">
          <p className="max-w-2xl text-lg font-medium leading-relaxed tracking-tight text-ink sm:text-xl">
            Have a complex workflow, a product idea, or an application that
            needs to evolve?
          </p>

          <Link
            href="/contact"
            className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand"
          >
            Let&apos;s discuss what you have in mind
            <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
