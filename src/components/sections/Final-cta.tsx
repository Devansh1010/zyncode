import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

const contactMethods = [
  {
    label: "WhatsApp",
    description: "Chat with us directly",
    href: "https://wa.me/919876543210",
    icon: MessageCircle,
    external: true,
  },
  {
    label: "Call us",
    description: "Let's talk about your project",
    href: "tel:+919876543210",
    icon: Phone,
    external: false,
  },
  {
    label: "Email us",
    description: "Send us your requirements",
    href: "mailto:hello@zyncode.in",
    icon: Mail,
    external: false,
  },
] as const;

export default function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden bg-[#101828] text-white"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-20">
          {/* Main CTA */}
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-[#2563EB]"
              />
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">
                Have a project in mind?
              </p>
            </div>

            <h2
              id="final-cta-heading"
              className="max-w-3xl text-4xl font-medium leading-[1.08] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Let&apos;s build something that{" "}
              <span className="text-white/45">
                moves your business forward.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
              Tell us what you&apos;re working towards. We&apos;ll help you
              figure out the right digital solution for your business.
            </p>

            <div className="mt-9">
              <Link
                href="/contact"
                className="group inline-flex min-h-14 items-center justify-center gap-4 bg-[#2563EB] px-6 py-4 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#1D4ED8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Discuss your project
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <p className="mt-4 text-sm text-white/45">
                No technical brief required. Just start with a conversation.
              </p>
            </div>
          </div>

          {/* Alternative contact methods */}
          <div className="lg:pb-1">
            <p className="mb-5 text-sm text-white/50">
              Prefer another way to connect?
            </p>

            <div className="border-t border-white/15">
              {contactMethods.map((method) => {
                const Icon = method.icon;

                return (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.external ? "_blank" : undefined}
                    rel={
                      method.external ? "noopener noreferrer" : undefined
                    }
                    aria-label={`${method.label}: ${method.description}`}
                    className="group flex min-h-[88px] items-center justify-between gap-4 border-b border-white/15 py-5 transition-colors duration-200 hover:bg-white/[0.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <span className="flex items-center gap-4">
                      <span className="flex size-11 shrink-0 items-center justify-center border border-white/15 text-white/75 transition-colors duration-200 group-hover:border-[#2563EB] group-hover:text-white">
                        <Icon aria-hidden="true" className="size-5" />
                      </span>

                      <span className="flex flex-col gap-1">
                        <span className="text-base font-medium text-white">
                          {method.label}
                        </span>
                        <span className="text-sm text-white/50">
                          {method.description}
                        </span>
                      </span>
                    </span>

                    <ArrowDownRight
                      aria-hidden="true"
                      className="size-4 shrink-0 text-white/40 transition-all duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:text-white"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-16 flex flex-col gap-3 border-t border-white/15 pt-6 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/50">
            Independent studio. Business-focused thinking. Built around your
            needs.
          </p>

          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-2 text-sm text-white/80 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Start a conversation
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}