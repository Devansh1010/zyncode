import { ArrowUpRight, Plus } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "What happens after I submit an enquiry?",
    answer:
      "We'll review the details you share and get in touch to understand your requirements, goals, and expectations. From there, we'll discuss a suitable approach and the next steps.",
  },
  {
    question: "Do I need to have everything planned before contacting you?",
    answer:
      "Not at all. You can reach out with just an idea, a business challenge, or something you'd like to improve. We'll help you clarify the requirements and explore possible solutions.",
  },
  {
    question: "How do you estimate project costs?",
    answer:
      "Every project is different. We consider its scope, complexity, functionality, integrations, and ongoing requirements before preparing a proposal. We'll discuss the expected investment before work begins.",
  },
  {
    question: "Can you work with my existing website or application?",
    answer:
      "Yes. We can assess an existing website or application and help with redesign, improvements, new functionality, performance, and ongoing technical support.",
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer:
      "Yes. We offer ongoing support to help keep websites and applications maintained, secure, updated, and running reliably. The scope depends on your requirements.",
  },
  {
    question: "Can we discuss the project before making a decision?",
    answer:
      "Absolutely. The initial conversation is an opportunity to understand your needs, discuss possible approaches, and determine whether we're the right fit. There's no obligation to proceed.",
  },
];

export function ContactFaq() {
  return (
    <section className="bg-surface px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        {/* Left: Introduction */}
        <div className="max-w-md">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Got Questions?
          </p>

          <h2 className="font-serif text-4xl leading-[1.1] tracking-[-0.04em] text-ink sm:text-5xl">
            A few things you might want to know.
          </h2>

          <p className="mt-6 text-sm leading-7 text-ink/60 sm:text-base sm:leading-8">
            Starting a project can come with a lot of questions. Here are a few
            answers to help you understand what working with us looks like.
          </p>

          <Link
            href="mailto:hello@zyncode.in"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-brand"
          >
            Still have questions? Get in touch
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Right: Questions */}
        <div className="border-t border-ink/10">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              open={index === 0}
              className="group border-b border-ink/10"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 marker:hidden [&::-webkit-details-marker]:hidden">
                <span className="flex items-start gap-4">
                  <span className="mt-0.5 text-xs tabular-nums text-ink/35">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-base font-medium leading-7 text-ink sm:text-lg">
                    {faq.question}
                  </span>
                </span>

                <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-ink/10 text-ink/55 transition-all group-open:rotate-45 group-open:border-brand group-open:text-brand">
                  <Plus size={17} />
                </span>
              </summary>

              <div className="pb-7 pl-9 pr-10">
                <p className="max-w-2xl text-sm leading-7 text-ink/60">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}