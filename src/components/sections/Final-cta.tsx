
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
    description: "Let's discuss your project",
    href: "tel:+919876543210",
    icon: Phone,
    external: false,
  },
  {
    label: "Email us",
    description: "Tell us what you have in mind",
    href: "mailto:hello@zyncode.in",
    icon: Mail,
    external: false,
  },
] as const;

export default function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="bg-ink text-white"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        {/* Main content */}
        <div className="grid gap-14 lg:grid-cols-[1fr_340px] lg:items-center lg:gap-20">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="mb-8 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-brand"
              />
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/55">
                Start a conversation
              </p>
            </div>

            {/* Headline */}
            <h2
              id="final-cta-heading"
              className="text-4xl font-medium leading-[1.12] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-[4.5rem]"
            >
              Have something in mind?
              <span className="mt-2 block text-white/45">
                Let&apos;s make it happen.
              </span>
            </h2>

            {/* Supporting copy */}
            <p className="mt-7 max-w-xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              Tell us about your business, your goals, or a
              problem you want to solve. We&apos;ll help you
              find the right digital solution.
            </p>

            {/* Primary action */}
            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#1d4ed8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
              >
                Discuss your project
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <span className="text-sm text-white/40">
                No technical brief needed.
              </span>
            </div>
          </div>

          {/* Alternative contact methods */}
          <div className="lg:pl-2">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.14em] text-white/45">
              Or reach us directly
            </p>

            <div className="border-t border-white/15">
              {contactMethods.map((method) => {
                const Icon = method.icon;

                return (
                  <a
                    key={method.label}
                    href={method.href}
                    target={
                      method.external
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      method.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={`${method.label}: ${method.description}`}
                    className="group flex min-h-20.5 items-center justify-between gap-4 border-b border-white/15 py-4 transition-colors duration-200 hover:border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
                  >
                    <span className="flex min-w-0 items-center gap-4">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/65 transition-colors duration-200 group-hover:border-brand group-hover:text-white">
                        <Icon
                          aria-hidden="true"
                          className="size-4.5"
                        />
                      </span>

                      <span className="flex min-w-0 flex-col gap-1">
                        <span className="text-sm font-medium text-white">
                          {method.label}
                        </span>

                        <span className="text-xs leading-5 text-white/45 sm:text-sm">
                          {method.description}
                        </span>
                      </span>
                    </span>

                    <ArrowDownRight
                      aria-hidden="true"
                      className="size-4 shrink-0 text-white/35 transition-all duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:text-white"
                    />
                  </a>
                );
              })}
            </div>

            <p className="mt-5 text-xs leading-6 text-white/40">
              Working with businesses
              ready to move forward.
            </p>
          </div>
        </div>

        {/* Minimal closing line */}
        <div className="mt-16 border-t border-white/15 pt-6 sm:mt-20">
          <p className="text-sm leading-6 text-white/45">
            Independent studio. Clear thinking. Digital work
            built around your business.
          </p>
        </div>
      </div>
    </section>
  );
}
