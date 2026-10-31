// src/components/sections/contact/ContactOptions.tsx

import { ArrowUpRight, Mail, Phone, MessageCircle } from "lucide-react";

const contactMethods = [
  {
    title: "Call us",
    description: "Prefer speaking directly? Give us a call.",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
    icon: Phone,
    action: "Call now",
  },
  {
    title: "WhatsApp",
    description: "Have a quick question? Message us.",
    value: "Chat with our team",
    href: "https://wa.me/919876543210",
    icon: MessageCircle,
    action: "Start a conversation",
  },
  {
    title: "Email",
    description: "Share your requirements in detail.",
    value: "hello@zyncode.in",
    href: "mailto:hello@zyncode.in",
    icon: Mail,
    action: "Send an email",
  },
];

export function ContactOptions() {
  return (
    <div className="flex flex-col">
      <div className="mb-10">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
          Get in touch
        </p>

        <h2 className="font-serif text-3xl leading-tight tracking-[-0.035em] text-ink sm:text-4xl">
          Choose how you&apos;d like to connect.
        </h2>

        <p className="mt-4 max-w-md text-sm leading-7 text-ink/60">
          Every project starts with a conversation. Reach out through whichever
          channel works best for you.
        </p>
      </div>

      <div className="divide-y divide-ink/10 border-y border-ink/10">
        {contactMethods.map((method) => {
          const Icon = method.icon;

          return (
            <a
              key={method.title}
              href={method.href}
              target={method.href.startsWith("https://") ? "_blank" : undefined}
              rel={
                method.href.startsWith("https://")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group flex items-start gap-4 py-6"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-ink transition-colors group-hover:bg-brand group-hover:text-white">
                <Icon size={19} strokeWidth={1.7} />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-base font-semibold text-ink">
                  {method.title}
                </h3>

                <p className="mt-1 text-sm leading-6 text-ink/55">
                  {method.description}
                </p>

                <p className="mt-3 text-sm font-medium text-ink">
                  {method.value}
                </p>
              </div>

              <ArrowUpRight
                size={18}
                className="mt-1 shrink-0 text-ink/35 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}