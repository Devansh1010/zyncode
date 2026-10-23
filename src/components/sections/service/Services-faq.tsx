"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Plus } from "lucide-react";

const faqs = [
  {
    question: "Which service is right for my business?",
    answer:
      "It depends on what you're trying to achieve. A business website is a good starting point if you need to establish your online presence or generate enquiries. A redesign may be more appropriate if your current website no longer reflects your business or makes it difficult for visitors to take action. If you need functionality beyond a typical website, a custom web application may be worth exploring. We can discuss your requirements before deciding on the right direction.",
  },
  {
    question: "How much does a website or web application cost?",
    answer:
      "The cost depends on the scope, design requirements, functionality, integrations, and ongoing support involved. A straightforward business website has different requirements from a custom application with complex workflows. Once we understand your goals and requirements, we can discuss an appropriate scope and estimate. If you have a budget in mind, sharing it early can help us explore practical options.",
  },
  {
    question: "How long does a project take?",
    answer:
      "The timeline depends on the size and complexity of the project, the content and materials required, feedback cycles, and any integrations involved. A focused business website will generally require less work than a custom web application. We'll discuss the expected timeline after understanding the scope rather than giving you an estimate that doesn't reflect your actual requirements.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. A redesign can involve improving the visual design, simplifying navigation, restructuring content, improving mobile usability, or addressing performance and technical issues. The first step is understanding what's working, what's not, and what you want the website to achieve. From there, we can identify the improvements that matter most.",
  },
  {
    question: "Can you build a custom web application?",
    answer:
      "Yes. Custom web applications can help businesses manage information, organize workflows, and provide functionality that a standard website cannot easily deliver. The right approach depends on your users, business processes, required features, and technical constraints. We can discuss the problem you're trying to solve and determine a suitable scope before development begins.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Responsive design is an important part of the development process. The experience should adapt to different screen sizes so visitors can navigate, read content, and use important features on phones, tablets, and desktop computers. The exact testing and optimization requirements depend on the project.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Website maintenance can include updates, bug fixes, troubleshooting, and other agreed-upon improvements after launch. The work required depends on your website, its technology, and how frequently it needs attention. We'll discuss the support you need and clarify the scope of any maintenance arrangement before work begins.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "You don't need a complete technical specification. Start by telling us about your business, your audience, what you want to achieve, and any challenges you're facing with your current website or processes. If you have examples of websites you like, existing content, or a budget range, those can also help. We'll use that information to understand your needs and discuss the next steps.",
  },
];

export default function ServicesFaq() {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  function toggleItem(index: number) {
    setOpenItems((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index],
    );
  }

  return (
    <section
      aria-labelledby="services-faq-heading"
      className="border-t border-[#101828]/10 bg-[#F7F6F2] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        {/* Introduction */}
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
            Frequently asked questions
          </p>

          <h2
            id="services-faq-heading"
            className="max-w-lg text-3xl font-medium leading-[1.12] tracking-[-0.045em] text-[#101828] sm:text-4xl md:text-5xl lg:text-[3.5rem]"
          >
            A few things you might be wondering.
          </h2>

          <p className="mt-5 max-w-md text-base leading-7 text-[#475467] sm:text-lg sm:leading-8">
            Choosing a digital solution can raise a lot of questions. Here are
            some useful starting points to help you make an informed decision.
          </p>

          <div className="mt-8 border-t border-[#101828]/15 pt-6">
            <p className="text-sm font-medium text-[#101828]">
              Still have questions?
            </p>

            <p className="mt-2 max-w-sm text-sm leading-6 text-[#475467]">
              Tell us a little about your business and what you&apos;re looking to
              achieve.
            </p>

            <Link
              href="/contact"
              className="group mt-5 inline-flex min-h-11 items-center gap-2 rounded-full border border-[#101828]/15 px-5 py-2.5 text-sm font-medium text-[#101828] transition-colors hover:border-[#2563EB] hover:text-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F6F2]"
            >
              Ask us a question
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        {/* FAQ accordion */}
        <div className="min-w-0 border-t border-[#101828]/15">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index);
            const triggerId = `services-faq-trigger-${index}`;
            const panelId = `services-faq-panel-${index}`;

            return (
              <article
                key={faq.question}
                className="border-b border-[#101828]/15"
              >
                <h3>
                  <button
                    id={triggerId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(index)}
                    className="group flex min-h-[76px] w-full items-center justify-between gap-5 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#2563EB] sm:min-h-[84px] sm:py-6"
                  >
                    <span className="flex items-start gap-4 sm:gap-5">
                      <span
                        aria-hidden="true"
                        className="mt-1 text-xs font-medium tracking-wide text-[#2563EB]"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`text-base font-medium leading-7 tracking-[-0.02em] transition-colors sm:text-lg ${
                          isOpen
                            ? "text-[#2563EB]"
                            : "text-[#101828] group-hover:text-[#2563EB]"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </span>

                    <span
                      aria-hidden="true"
                      className={`flex size-8 shrink-0 items-center justify-center rounded-full border transition-colors ${
                        isOpen
                          ? "border-[#2563EB] bg-[#2563EB] text-white"
                          : "border-[#101828]/15 text-[#101828] group-hover:border-[#2563EB] group-hover:text-[#2563EB]"
                      }`}
                    >
                      <Plus
                        className={`size-4 transition-transform duration-200 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        strokeWidth={1.7}
                      />
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  hidden={!isOpen}
                  className="pb-6 pl-9 pr-2 sm:pb-7 sm:pl-[2.45rem] sm:pr-12"
                >
                  <p className="max-w-2xl text-sm leading-7 text-[#475467] sm:text-base sm:leading-8">
                    {faq.answer}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl border-t border-[#101828]/10 pt-6 sm:mt-20">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs text-[#667085] sm:text-sm">
            Have a question that isn&apos;t covered here?
          </p>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-[#101828] transition-colors hover:text-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
          >
            Get in touch
            <ArrowDownRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}