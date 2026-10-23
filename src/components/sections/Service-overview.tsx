import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  FileText,
  LayoutTemplate,
  MessageSquareText,
  PanelsTopLeft,
  Wrench,
} from "lucide-react";
import TalkToUsWpBtn from "../layout/TalkToUsWpBtn";

const services = [
  {
    number: "01",
    title: "Business Websites",
    description:
      "Create a professional online presence that helps customers understand your business, trust what you offer, and take the next step.",
    value:
      "For businesses that need a new website or a stronger online presence.",
    linkLabel: "Explore business websites",
    href: "/services/business-websites",
    visual: "website",
  },
  {
    number: "02",
    title: "Custom Web Applications",
    description:
      "Build digital tools around the way your business works, from managing information to simplifying repetitive workflows.",
    value:
      "For businesses that need software tailored to their operations.",
    linkLabel: "Explore custom applications",
    href: "/services/web-applications",
    visual: "application",
  },
  {
    number: "03",
    title: "Website Redesign",
    description:
      "Improve your website’s appearance, usability, and clarity so it better reflects your business today.",
    value:
      "For businesses whose existing website no longer meets their needs.",
    linkLabel: "Explore website redesign",
    href: "/services/website-redesign",
    visual: "redesign",
  },
  {
    number: "04",
    title: "Website Maintenance",
    description:
      "Keep your website updated, supported, and working as expected with maintenance suited to your needs.",
    value:
      "For businesses that need ongoing support for an existing website.",
    linkLabel: "Explore website maintenance",
    href: "/services/website-maintenance",
    visual: "maintenance",
  },
] as const;

type ServiceVisualType = (typeof services)[number]["visual"];

function WebsitePreview() {
  return (
    <div className="relative h-full min-h-[220px] overflow-hidden bg-[#ebe9e1] p-4 sm:p-6">
      <div className="mx-auto max-w-[390px] overflow-hidden border border-black/10 bg-[#fffefa] shadow-[0_12px_35px_rgba(16,24,40,0.08)]">
        <div className="flex h-8 items-center justify-between border-b border-black/[0.07] px-3">
          <div className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-[#d9d5ca]" />
            <span className="size-1.5 rounded-full bg-[#d9d5ca]" />
            <span className="size-1.5 rounded-full bg-[#d9d5ca]" />
          </div>
          <span className="text-[8px] tracking-wide text-[#858477]">
            YOUR BUSINESS
          </span>
        </div>

        <div className="p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <div className="h-2 w-16 bg-[#172b24]" />
            <div className="flex items-center gap-2">
              <span className="h-1 w-6 bg-[#d6d4cb]" />
              <span className="h-1 w-6 bg-[#d6d4cb]" />
              <span className="h-5 w-14 bg-[#2563eb]" />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-[1.1fr_0.9fr] gap-3 sm:mt-8 sm:gap-4">
            <div className="flex flex-col items-start justify-center">
              <div className="h-1 w-14 bg-[#a6a79b]" />
              <div className="mt-3 h-3 w-full bg-[#172b24]" />
              <div className="mt-1.5 h-3 w-[82%] bg-[#172b24]" />
              <div className="mt-3 h-1 w-full bg-[#d9d7ce]" />
              <div className="mt-1.5 h-1 w-[85%] bg-[#d9d7ce]" />
              <div className="mt-1.5 h-1 w-[70%] bg-[#d9d7ce]" />
              <div className="mt-4 flex h-6 w-20 items-center justify-center bg-[#2563eb]">
                <span className="text-[7px] font-medium text-white">
                  GET IN TOUCH
                </span>
              </div>
            </div>

            <div className="relative min-h-[112px] overflow-hidden bg-[#d7ded1]">
              <div className="absolute -right-4 -top-3 size-20 rounded-full bg-[#b4c2aa]" />
              <div className="absolute bottom-0 left-0 h-[60%] w-[75%] bg-[#9cab91]" />
              <div className="absolute bottom-0 right-0 h-[78%] w-[30%] bg-[#e4e3d7]" />
              <div className="absolute bottom-3 left-3 h-7 w-12 border border-white/60" />
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2 border-t border-black/[0.08] pt-3">
            <div>
              <div className="h-1.5 w-12 bg-[#172b24]" />
              <div className="mt-2 h-1 w-full bg-[#dedcd3]" />
              <div className="mt-1 h-1 w-3/4 bg-[#dedcd3]" />
            </div>
            <div>
              <div className="h-1.5 w-10 bg-[#172b24]" />
              <div className="mt-2 h-1 w-full bg-[#dedcd3]" />
              <div className="mt-1 h-1 w-3/4 bg-[#dedcd3]" />
            </div>
            <div>
              <div className="h-1.5 w-12 bg-[#172b24]" />
              <div className="mt-2 h-1 w-full bg-[#dedcd3]" />
              <div className="mt-1 h-1 w-3/4 bg-[#dedcd3]" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-3 right-3 flex items-center gap-2 border border-black/[0.08] bg-[#fffefa]/90 px-3 py-2 backdrop-blur-sm sm:bottom-5 sm:right-5">
        <span className="size-1.5 rounded-full bg-[#2563eb]" />
        <span className="text-[10px] text-[#55574f]">
          Designed around your business
        </span>
      </div>
    </div>
  );
}

function ApplicationPreview() {
  return (
    <div className="relative h-full min-h-[220px] overflow-hidden bg-[#e9e9e4] p-4 sm:p-6">
      <div className="mx-auto flex min-h-[185px] max-w-[390px] overflow-hidden border border-black/10 bg-white shadow-[0_12px_35px_rgba(16,24,40,0.06)]">
        <aside className="hidden w-[28%] shrink-0 border-r border-black/[0.07] bg-[#f8f8f5] p-3 sm:block">
          <div className="mb-6 flex items-center gap-1.5">
            <div className="size-4 bg-[#2563eb]" />
            <div className="h-1.5 w-12 bg-[#172033]" />
          </div>

          <div className="space-y-3">
            {[0, 1, 2, 3].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span
                  className={`size-2 ${
                    item === 0 ? "bg-[#2563eb]" : "bg-[#d4d6d1]"
                  }`}
                />
                <span
                  className={`h-1 w-12 ${
                    item === 0 ? "bg-[#a5b9ed]" : "bg-[#e0e1dc]"
                  }`}
                />
              </div>
            ))}
          </div>
        </aside>

        <div className="min-w-0 flex-1 p-3 sm:p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="h-2 w-24 bg-[#172033]" />
              <div className="mt-2 h-1 w-32 max-w-full bg-[#d9dbd6]" />
            </div>
            <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#eef1f8] text-[9px] text-[#3156a5]">
              JD
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2">
            <div className="border border-black/[0.08] p-2.5">
              <div className="flex items-center gap-1.5">
                <FileText className="size-3 text-[#2563eb]" />
                <span className="text-[9px] text-[#73766e]">Records</span>
              </div>
              <div className="mt-2 text-sm font-medium text-[#172033]">128</div>
              <div className="mt-1 h-1 w-14 bg-[#e1e3de]" />
            </div>

            <div className="border border-black/[0.08] p-2.5">
              <div className="flex items-center gap-1.5">
                <MessageSquareText className="size-3 text-[#2563eb]" />
                <span className="text-[9px] text-[#73766e]">Enquiries</span>
              </div>
              <div className="mt-2 text-sm font-medium text-[#172033]">24</div>
              <div className="mt-1 h-1 w-10 bg-[#e1e3de]" />
            </div>
          </div>

          <div className="mt-3 border border-black/[0.08]">
            <div className="flex items-center justify-between border-b border-black/[0.07] px-2.5 py-2">
              <span className="text-[9px] font-medium text-[#343a46]">
                Recent records
              </span>
              <span className="text-[8px] text-[#2563eb]">View all</span>
            </div>

            {[0, 1, 2].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between gap-2 border-b border-black/[0.05] px-2.5 py-2 last:border-0"
              >
                <div className="flex min-w-0 items-center gap-2">
                  <div className="size-5 shrink-0 bg-[#f0f1ec]" />
                  <div className="min-w-0">
                    <div className="h-1.5 w-20 max-w-full bg-[#c6c9c3]" />
                    <div className="mt-1 h-1 w-12 bg-[#e4e5e0]" />
                  </div>
                </div>
                <span className="shrink-0 text-[8px] text-[#73766e]">
                  {item === 0 ? "Today" : item === 1 ? "Yesterday" : "Oct 18"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-3 right-3 flex items-center gap-2 border border-black/[0.08] bg-white/90 px-3 py-2 backdrop-blur-sm sm:bottom-5 sm:right-5">
        <WorkflowMarker />
        <span className="text-[10px] text-[#55574f]">
          Built around your workflow
        </span>
      </div>
    </div>
  );
}

function WorkflowMarker() {
  return (
    <span className="flex size-4 items-center justify-center bg-[#e8edfc]">
      <PanelsTopLeft className="size-2.5 text-[#2563eb]" />
    </span>
  );
}

function RedesignPreview() {
  return (
    <div className="relative h-full min-h-[220px] overflow-hidden bg-[#e9e6df] p-4 sm:p-6">
      <div className="mx-auto max-w-[390px] border border-black/10 bg-white shadow-[0_12px_35px_rgba(16,24,40,0.06)]">
        <div className="flex items-center justify-between border-b border-black/[0.07] px-3 py-2.5">
          <div className="h-2 w-16 bg-[#172033]" />
          <div className="flex items-center gap-2">
            <span className="h-1 w-6 bg-[#d8d9d4]" />
            <span className="h-1 w-6 bg-[#d8d9d4]" />
            <span className="h-4 w-12 bg-[#172033]" />
          </div>
        </div>

        <div className="grid grid-cols-[1fr_0.85fr]">
          <div className="flex flex-col justify-center p-4 sm:p-5">
            <div className="h-1 w-12 bg-[#8b8d84]" />
            <div className="mt-3 h-3 w-full bg-[#172033]" />
            <div className="mt-1.5 h-3 w-[75%] bg-[#172033]" />
            <div className="mt-3 h-1 w-full bg-[#dedfd9]" />
            <div className="mt-1.5 h-1 w-[88%] bg-[#dedfd9]" />
            <div className="mt-1.5 h-1 w-[62%] bg-[#dedfd9]" />
            <div className="mt-4 flex items-center gap-2">
              <div className="h-6 w-16 bg-[#2563eb]" />
              <div className="h-1 w-8 bg-[#c8c9c2]" />
            </div>
          </div>

          <div className="relative m-2 overflow-hidden bg-[#e3e8ef]">
            <div className="absolute -right-6 top-4 size-24 rounded-full bg-[#c2d0e4]" />
            <div className="absolute bottom-0 left-0 h-[50%] w-full bg-[#b6c6d8]" />
            <div className="absolute bottom-0 right-4 h-[68%] w-[30%] bg-[#8fa7c0]" />
            <div className="absolute bottom-3 left-3 h-10 w-12 border border-white/70" />
          </div>
        </div>

        <div className="grid grid-cols-3 border-t border-black/[0.07]">
          {["Clarity", "Structure", "Usability"].map((item) => (
            <div key={item} className="border-r border-black/[0.07] p-3 last:border-0">
              <div className="text-[9px] font-medium text-[#172033]">
                {item}
              </div>
              <div className="mt-2 h-1 w-full bg-[#dedfd9]" />
              <div className="mt-1 h-1 w-2/3 bg-[#dedfd9]" />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-3 right-3 flex items-center gap-2 border border-black/[0.08] bg-white/90 px-3 py-2 backdrop-blur-sm sm:bottom-5 sm:right-5">
        <LayoutTemplate className="size-3 text-[#2563eb]" />
        <span className="text-[10px] text-[#55574f]">
          A clearer digital experience
        </span>
      </div>
    </div>
  );
}

function MaintenancePreview() {
  return (
    <div className="relative h-full min-h-[220px] overflow-hidden bg-[#e8e9e3] p-4 sm:p-6">
      <div className="mx-auto max-w-[390px] border border-black/10 bg-[#fffefa] shadow-[0_12px_35px_rgba(16,24,40,0.06)]">
        <div className="flex items-center justify-between border-b border-black/[0.07] px-4 py-3">
          <div className="flex items-center gap-2">
            <Wrench className="size-3.5 text-[#2563eb]" />
            <span className="text-[10px] font-medium text-[#172033]">
              Website care
            </span>
          </div>
          <span className="text-[9px] text-[#77796f]">Activity</span>
        </div>

        <div className="p-4 sm:p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[10px] text-[#77796f]">
                Maintenance overview
              </p>
              <p className="mt-1.5 text-sm font-medium text-[#172033]">
                Your website, looked after.
              </p>
            </div>
            <div className="flex size-8 shrink-0 items-center justify-center bg-[#edf2e9]">
              <Check className="size-4 text-[#4d7650]" />
            </div>
          </div>

          <div className="mt-5 divide-y divide-black/[0.07] border-y border-black/[0.07]">
            <div className="flex items-center gap-3 py-3">
              <span className="flex size-7 shrink-0 items-center justify-center bg-[#f0f1eb]">
                <Clock3 className="size-3.5 text-[#77796f]" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-medium text-[#343a32]">
                  Routine updates
                </p>
                <p className="mt-1 text-[9px] text-[#85877f]">
                  Keep site content current
                </p>
              </div>
              <span className="text-[9px] text-[#4d7650]">Planned</span>
            </div>

            <div className="flex items-center gap-3 py-3">
              <span className="flex size-7 shrink-0 items-center justify-center bg-[#f0f1eb]">
                <Wrench className="size-3.5 text-[#77796f]" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-medium text-[#343a32]">
                  Technical support
                </p>
                <p className="mt-1 text-[9px] text-[#85877f]">
                  Help when something needs attention
                </p>
              </div>
              <span className="text-[9px] text-[#77796f]">Available</span>
            </div>

            <div className="flex items-center gap-3 py-3">
              <span className="flex size-7 shrink-0 items-center justify-center bg-[#f0f1eb]">
                <PanelsTopLeft className="size-3.5 text-[#77796f]" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-medium text-[#343a32]">
                  Website improvements
                </p>
                <p className="mt-1 text-[9px] text-[#85877f]">
                  Small changes within agreed scope
                </p>
              </div>
              <span className="text-[9px] text-[#77796f]">As needed</span>
            </div>
          </div>

          <p className="mt-3 text-[9px] leading-relaxed text-[#85877f]">
            An illustrative view of the kinds of ongoing support available.
          </p>
        </div>
      </div>

      <div className="absolute bottom-3 right-3 flex items-center gap-2 border border-black/[0.08] bg-white/90 px-3 py-2 backdrop-blur-sm sm:bottom-5 sm:right-5">
        <Check className="size-3 text-[#4d7650]" />
        <span className="text-[10px] text-[#55574f]">
          Support beyond launch
        </span>
      </div>
    </div>
  );
}

function ServiceVisual({ type }: { type: ServiceVisualType }) {
  switch (type) {
    case "website":
      return <WebsitePreview />;
    case "application":
      return <ApplicationPreview />;
    case "redesign":
      return <RedesignPreview />;
    case "maintenance":
      return <MaintenancePreview />;
  }
}

export default function ServiceOverview() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative overflow-hidden bg-[#f7f6f2] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section introduction */}
        <div className="grid gap-6 border-b border-[#101828]/15 pb-10 sm:pb-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
          <div>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
              What we do
            </p>

            <h2
              id="services-heading"
              className="max-w-2xl text-balance text-3xl font-medium leading-[1.12] tracking-[-0.045em] text-[#101828] sm:text-4xl lg:text-[48px]"
            >
              Digital solutions for the challenges your business faces.
            </h2>
          </div>

          <p className="max-w-lg text-base leading-7 text-[#62665f] lg:justify-self-end lg:pb-1">
            From your first business website to a custom application or a
            complete redesign, we help you choose and build the digital
            solution that fits your needs.
          </p>
        </div>

        {/* Service index */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.number}
              className={[
                "group flex min-w-0 flex-col py-9 sm:py-10 lg:py-12",
                index % 2 === 0
                  ? "md:border-r md:border-[#101828]/15 md:pr-6 lg:pr-8"
                  : "md:pl-6 lg:pl-8",
                index < 2
                  ? "md:border-b md:border-[#101828]/15"
                  : "",
                index === 0 || index === 1 ? "md:pb-10 lg:pb-12" : "",
                index === 2 || index === 3 ? "md:pt-10 lg:pt-12" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {/* Service heading and description */}
              <div className="mb-6 flex items-start gap-4 sm:gap-5">
                <span className="mt-1 shrink-0 font-mono text-xs text-[#2563eb]">
                  {service.number}
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-medium tracking-[-0.035em] text-[#101828] sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-[#62665f] sm:text-[15px] sm:leading-7">
                    {service.description}
                  </p>

                  <p className="mt-3 max-w-lg text-xs leading-5 text-[#85877f] sm:text-[13px]">
                    {service.value}
                  </p>
                </div>
              </div>

              {/* Individual concept visual */}
              <div className="mb-5 overflow-hidden">
                <ServiceVisual type={service.visual} />
              </div>

              {/* Service link */}
              <div className="mt-auto pl-0 sm:pl-9">
                <Link
                  href={service.href}
                  className="group/link inline-flex min-h-11 items-center gap-2 py-2 text-sm font-medium text-[#101828] outline-none transition-colors hover:text-[#2563eb] focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f6f2]"
                >
                  <span>{service.linkLabel}</span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 motion-reduce:transform-none"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Gentle contact prompt */}
        <div className="mt-3 flex flex-col gap-5 border-t border-[#101828]/15 pt-7 sm:mt-5 sm:flex-row sm:items-center sm:justify-between sm:pt-8">
          <p className="max-w-xl text-sm leading-6 text-[#62665f]">
            Not sure which service fits? Tell us what you’re trying to achieve,
            and we’ll help you explore the right approach.
          </p>

          <TalkToUsWpBtn />
        </div>
      </div>
    </section>
  );
}