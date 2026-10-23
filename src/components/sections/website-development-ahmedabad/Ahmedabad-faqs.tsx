import Link from "next/link";

const faqs = [
  {
    question: "How much does website development cost in Ahmedabad?",
    answer:
      "The cost depends on the scope of your project, the number of pages, design requirements, content needs, and any custom functionality or integrations. A straightforward business website requires a different level of work than a complex web application. Once we understand your requirements, we can recommend a suitable scope and discuss the cost before work begins.",
  },
  {
    question: "What's included in a business website development project?",
    answer:
      "The scope depends on your requirements. A typical project may include website structure and planning, responsive design, development, contact pathways, and preparation for search engines. Content creation, advanced integrations, third-party services, and ongoing maintenance may require separate consideration. We'll clarify the agreed deliverables before the project begins.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on the website's complexity, the amount of content, the features required, and how quickly feedback and approvals are provided. A smaller business website will generally require less work than a custom web application. We'll discuss the expected timeline once the project scope is clear.",
  },
  {
    question: "Do I need to provide the website content and images?",
    answer:
      "It helps to have information about your business, services, audience, and any existing brand materials ready. If you already have website copy and images, we can plan around them. If you need help organizing your content, we can discuss the support required and clarify whether content creation is included in your project scope.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. A redesign can address more than the visual appearance of your website. Depending on your needs, we can review its structure, messaging, navigation, mobile experience, and how easily visitors can take the next step. We'll first understand what needs improvement and whether a redesign or a more focused set of changes makes sense.",
  },
  {
    question: "Will my website be optimized for Google?",
    answer:
      "We can account for SEO foundations during development, including page structure, relevant metadata, internal linking, mobile usability, and technical considerations. The right approach depends on your project and content. SEO best practices can help search engines understand your website, but they cannot guarantee specific rankings or a particular number of leads.",
  },
  {
    question: "Who owns the domain, website, and hosting account?",
    answer:
      "Domain registration, hosting, and third-party services should be clearly discussed before a project begins. Our recommended approach is to keep your domain registered in your name and ensure responsibilities, account access, recurring costs, and website handover arrangements are agreed upon. The exact ownership and handover terms should be documented in your proposal.",
  },
  {
    question: "What happens after my website launches?",
    answer:
      "Launching your website is an important milestone, but you may still need updates, technical maintenance, or further improvements. Zyncode offers website maintenance and support as a service. We'll clarify the support you need, what's included, and any ongoing fees before you commit to a maintenance arrangement.",
  },
  {
    question: "Can you build custom functionality for my business?",
    answer:
      "Yes. If your business needs more than standard website pages, we can discuss a custom web application or additional functionality. This could involve specific workflows, data management, integrations, or interactive features. We'll first understand the problem you're trying to solve and then discuss the appropriate scope and technical approach.",
  },
] as const;

export default function AhmedabadFaqs() {
  return (
    <section
      aria-labelledby="ahmedabad-faqs-heading"
      className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
      id="faqs"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        {/* Section introduction */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
            Before we get started
          </p>

          <h2
            className="max-w-lg text-3xl font-semibold leading-[1.15] tracking-[-0.045em] text-[#101828] sm:text-4xl lg:text-5xl"
            id="ahmedabad-faqs-heading"
          >
            Good questions deserve clear answers.
          </h2>

          <p className="mt-6 max-w-lg text-base leading-7 text-[#667085] sm:text-lg sm:leading-8">
            From project costs to what happens after launch, here&apos;s what
            you should know before choosing the right website development
            partner for your business.
          </p>

          <div className="mt-8 border-t border-[#E4E7EC] pt-6">
            <p className="text-base font-medium text-[#101828]">
              Still have questions about your project?
            </p>

            <p className="mt-2 text-sm leading-6 text-[#667085]">
              Tell us what you&apos;re trying to achieve. We can discuss your
              requirements and the next steps.
            </p>

            <Link
              className="group mt-5 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#2563EB] px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#1D4ED8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB]"
              href="/contact"
            >
              Discuss your project
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>

        {/* FAQ accordion */}
        <div className="border-t border-[#D9D8D2]">
          {faqs.map((faq, index) => (
            <details
              className="group border-b border-[#D9D8D2]"
              key={faq.question}
            >
              <summary className="flex min-h-20 cursor-pointer list-none items-center gap-4 py-6 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#2563EB] [&::-webkit-details-marker]:hidden sm:gap-6 sm:py-7">
                <span
                  aria-hidden="true"
                  className="hidden w-7 shrink-0 text-xs font-medium tabular-nums text-[#2563EB] sm:block"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="flex-1 text-base font-medium leading-7 tracking-[-0.02em] text-[#101828] transition-colors duration-200 group-open:text-[#2563EB] sm:text-lg">
                  {faq.question}
                </span>

                <span
                  aria-hidden="true"
                  className="relative ml-auto flex size-8 shrink-0 items-center justify-center rounded-full border border-[#E4E7EC] text-[#344054] transition-colors duration-200 group-hover:border-[#2563EB] group-open:border-[#2563EB] group-open:bg-[#2563EB] group-open:text-white"
                >
                  <span className="absolute h-px w-3 bg-current" />
                  <span className="absolute h-3 w-px bg-current transition-transform duration-200 group-open:scale-y-0" />
                </span>
              </summary>

              <div className="pb-7 pl-0 sm:pb-8 sm:pl-[3.25rem]">
                <p className="max-w-2xl text-sm leading-7 text-[#667085] sm:text-base sm:leading-8">
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