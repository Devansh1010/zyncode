import Link from "next/link";

const benefits = [
  {
    number: "01",
    title: "Make your value clear",
    description:
      "Help visitors understand what your business does, who you serve, and why your offering deserves their attention.",
  },
  {
    number: "02",
    title: "Build confidence",
    description:
      "Present your services, experience, and business information in a clear, consistent way that helps potential customers evaluate you.",
  },
  {
    number: "03",
    title: "Make the next step obvious",
    description:
      "Guide visitors towards the action that matters, whether that's making an inquiry, requesting a quote, or contacting your business.",
  },
] as const;

const inclusions = [
  {
    title: "Website structure and planning",
    description:
      "Organize your pages and information around what your audience needs to understand and do.",
  },
  {
    title: "Visual design",
    description:
      "Create a distinctive visual direction that reflects your business and supports a consistent experience.",
  },
  {
    title: "Responsive development",
    description:
      "Build an experience that adapts to mobile phones, tablets, and desktop screens.",
  },
  {
    title: "Clear inquiry pathways",
    description:
      "Make it easier for potential customers to contact your business through appropriate calls to action and contact options.",
  },
  {
    title: "SEO foundations",
    description:
      "Plan page titles, metadata, headings, internal links, and other relevant technical foundations as part of the agreed scope.",
  },
  {
    title: "Pre-launch review",
    description:
      "Review the completed website against the agreed requirements before it goes live.",
  },
] as const;

const faqs = [
  {
    question: "How much does a business website cost?",
    answer:
      "The cost depends on the number of pages, design requirements, content needs, functionality, and any third-party integrations. Once we understand your requirements, we can recommend a suitable scope and discuss the investment before the project begins.",
  },
  {
    question: "How long does it take to build a business website?",
    answer:
      "The timeline depends on the project scope, content readiness, required functionality, and how quickly feedback and approvals are provided. We can discuss a realistic timeline once the requirements are clear.",
  },
  {
    question: "Can you build a website for my specific industry?",
    answer:
      "We begin by understanding your business, audience, services, and goals. That information informs the website's structure and presentation. The approach should reflect your actual requirements rather than forcing your business into a generic template.",
  },
  {
    question: "Will my business website work on mobile devices?",
    answer:
      "Responsive development is part of our approach. The website should adapt to different screen sizes and provide readable content, usable navigation, and clear actions across devices.",
  },
  {
    question: "Will my website appear on Google?",
    answer:
      "We can implement relevant SEO foundations, including page metadata, heading structure, internal links, and technical considerations. Search visibility also depends on factors such as content relevance, competition, indexing, and ongoing optimization. No developer can guarantee specific organic rankings.",
  },
  {
    question: "Can I update my website after launch?",
    answer:
      "That depends on the website's implementation and your requirements. We can discuss how content updates should be handled and whether a content management system or ongoing support arrangement makes sense for your business.",
  },
  {
    question: "Do you provide maintenance after launch?",
    answer:
      "Zyncode offers website maintenance and support as a service. The appropriate arrangement depends on your website and the updates or technical support you need. We'll clarify the scope and any recurring costs before you commit.",
  },
] as const;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
      {children}
    </p>
  );
}

function BusinessWebsiteHero() {
  return (
    <section className="bg-[#F7F6F2] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
        <div>
          <SectionLabel>Business website development</SectionLabel>

          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.05em] text-[#101828] sm:text-5xl lg:text-6xl">
            Your business deserves a website that does more than look good.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-[#667085] sm:text-lg">
            We design and develop professional business websites that help
            people understand your services, feel confident in your business,
            and know what to do next.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#2563EB] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1D4ED8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB]"
              href="/contact"
            >
              Discuss your project
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>

            <Link
              className="inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-[#344054] transition-colors hover:text-[#2563EB] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB]"
              href="#whats-included"
            >
              Explore what&apos;s included
            </Link>
          </div>

          <p className="mt-5 text-sm leading-6 text-[#667085]">
            Built around your business, your audience, and your goals.
          </p>
        </div>

        <div
          aria-label="Illustrative business website layout"
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="rounded-2xl border border-[#E4E7EC] bg-white p-3 shadow-[0_24px_80px_rgba(16,24,40,0.08)] sm:p-5">
            <div className="flex items-center gap-1.5 border-b border-[#E4E7EC] px-2 pb-4">
              <span className="size-2.5 rounded-full bg-[#D0D5DD]" />
              <span className="size-2.5 rounded-full bg-[#D0D5DD]" />
              <span className="size-2.5 rounded-full bg-[#D0D5DD]" />

              <div className="ml-4 h-7 flex-1 rounded-md bg-[#F2F4F7]" />
            </div>

            <div className="grid gap-5 p-3 py-7 sm:grid-cols-[1.1fr_0.9fr] sm:gap-6 sm:p-5 sm:py-10">
              <div className="flex flex-col justify-center">
                <div className="h-2 w-20 rounded-full bg-[#BFDBFE]" />

                <div className="mt-5 h-5 w-full rounded bg-[#101828]" />
                <div className="mt-2 h-5 w-4/5 rounded bg-[#101828]" />
                <div className="mt-2 h-5 w-3/5 rounded bg-[#101828]" />

                <div className="mt-5 space-y-2">
                  <div className="h-2 w-full rounded-full bg-[#EAECF0]" />
                  <div className="h-2 w-11/12 rounded-full bg-[#EAECF0]" />
                  <div className="h-2 w-3/4 rounded-full bg-[#EAECF0]" />
                </div>

                <div className="mt-6 h-9 w-32 rounded-full bg-[#2563EB]" />
              </div>

              <div className="flex min-h-44 flex-col justify-between rounded-xl bg-[#F2F4F7] p-4 sm:min-h-60 sm:p-5">
                <div className="flex items-center justify-between">
                  <div className="size-8 rounded-lg bg-white" />
                  <div className="h-2 w-12 rounded-full bg-[#D0D5DD]" />
                </div>

                <div>
                  <div className="h-3 w-4/5 rounded-full bg-[#D0D5DD]" />
                  <div className="mt-3 h-3 w-3/5 rounded-full bg-[#D0D5DD]" />

                  <div className="mt-5 grid grid-cols-3 gap-2">
                    <div className="h-12 rounded-md bg-white" />
                    <div className="h-12 rounded-md bg-white" />
                    <div className="h-12 rounded-md bg-white" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 border-t border-[#E4E7EC] p-4 sm:p-5">
              <div className="h-2 rounded-full bg-[#EAECF0]" />
              <div className="h-2 rounded-full bg-[#EAECF0]" />
              <div className="h-2 rounded-full bg-[#EAECF0]" />
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-[#667085]">
            An illustrative website layout, not a client project.
          </p>
        </div>
      </div>
    </section>
  );
}

function BusinessWebsiteBenefits() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <SectionLabel>More than an online presence</SectionLabel>

          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#101828] sm:text-4xl lg:text-5xl">
            Your website should help people choose you.
          </h2>

          <p className="mt-5 text-base leading-7 text-[#667085] sm:text-lg sm:leading-8">
            A website should do more than list your services. It should help
            the right people understand your value and make an informed
            decision about working with you.
          </p>
        </div>

        <div className="mt-12 grid gap-0 border-t border-[#E4E7EC] md:grid-cols-3 md:gap-8">
          {benefits.map((benefit) => (
            <article
              className="border-b border-[#E4E7EC] py-8 md:border-b-0 md:py-10"
              key={benefit.number}
            >
              <span className="text-sm font-medium tabular-nums text-[#2563EB]">
                {benefit.number}
              </span>

              <h3 className="mt-5 text-xl font-medium tracking-[-0.03em] text-[#101828] sm:text-2xl">
                {benefit.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#667085] sm:text-base">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatsIncluded() {
  return (
    <section
      aria-labelledby="business-website-inclusions-heading"
      className="bg-[#F7F6F2] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32"
      id="whats-included"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionLabel>What&apos;s included</SectionLabel>

            <h2
              className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#101828] sm:text-4xl lg:text-5xl"
              id="business-website-inclusions-heading"
            >
              Everything starts with the right foundations.
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-[#667085] sm:text-lg sm:leading-8">
              Every project has different needs. We establish the scope around
              your business requirements, then agree on the deliverables before
              development begins.
            </p>

            <Link
              className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[#2563EB] hover:text-[#1D4ED8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB]"
              href="/contact"
            >
              Discuss your requirements
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="border-t border-[#D9D8D2]">
            {inclusions.map((item, index) => (
              <article
                className="grid gap-3 border-b border-[#D9D8D2] py-6 sm:grid-cols-[36px_1fr] sm:gap-5 sm:py-7"
                key={item.title}
              >
                <span className="text-xs font-medium tabular-nums text-[#2563EB]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="text-lg font-medium tracking-[-0.02em] text-[#101828]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#667085] sm:text-base">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BusinessWebsiteProcess() {
  const steps = [
    {
      number: "01",
      title: "Understand",
      description:
        "We learn about your business, audience, goals, and requirements.",
    },
    {
      number: "02",
      title: "Plan",
      description:
        "We define the structure, content needs, features, and visual direction.",
    },
    {
      number: "03",
      title: "Design and build",
      description:
        "We create the website around the agreed scope and intended user experience.",
    },
    {
      number: "04",
      title: "Review and launch",
      description:
        "We review the completed work and prepare the website for launch.",
    },
  ] as const;

  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>How we work</SectionLabel>

        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#101828] sm:text-4xl lg:text-5xl">
            A clear path from idea to launch.
          </h2>

          <p className="max-w-2xl text-base leading-7 text-[#667085] sm:text-lg sm:leading-8">
            You don&apos;t need to arrive with every detail figured out. We work
            through the requirements together so the project has a clear
            direction before development begins.
          </p>
        </div>

        <div className="mt-12 grid border-t border-[#E4E7EC] sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article
              className="border-b border-[#E4E7EC] py-7 sm:px-5 sm:py-8 lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0"
              key={step.number}
            >
              <span className="text-sm font-medium tabular-nums text-[#2563EB]">
                {step.number}
              </span>

              <h3 className="mt-5 text-xl font-medium text-[#101828]">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#667085]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BusinessWebsiteFaqs() {
  return (
    <section className="bg-[#F7F6F2] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <SectionLabel>Common questions</SectionLabel>

          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#101828] sm:text-4xl">
            Before you get started.
          </h2>

          <p className="mt-5 text-base leading-7 text-[#667085]">
            A few things worth knowing before planning your business website.
          </p>
        </div>

        <div className="border-t border-[#D9D8D2]">
          {faqs.map((faq) => (
            <details
              className="group border-b border-[#D9D8D2]"
              key={faq.question}
            >
              <summary className="flex min-h-16 cursor-pointer list-none items-center gap-5 py-5 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#2563EB] [&::-webkit-details-marker]:hidden">
                <span className="flex-1 text-base font-medium leading-7 text-[#101828] group-open:text-[#2563EB]">
                  {faq.question}
                </span>

                <span
                  aria-hidden="true"
                  className="relative flex size-8 shrink-0 items-center justify-center rounded-full border border-[#D9D8D2] text-[#344054] group-open:border-[#2563EB] group-open:bg-[#2563EB] group-open:text-white"
                >
                  <span className="absolute h-px w-3 bg-current" />
                  <span className="absolute h-3 w-px bg-current transition-transform group-open:scale-y-0" />
                </span>
              </summary>

              <div className="max-w-2xl pb-6 pr-8">
                <p className="text-sm leading-7 text-[#667085] sm:text-base">
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

function BusinessWebsiteFinalCta() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-5xl rounded-2xl bg-[#101828] px-6 py-12 text-center sm:px-12 sm:py-16 lg:px-20 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#93C5FD]">
          Your next step
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
          Let&apos;s build a website that makes your business easier to understand.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#D0D5DD] sm:text-lg sm:leading-8">
          Tell us about your business, what you need, and what you&apos;d like your
          website to accomplish. We&apos;ll discuss the right next step.
        </p>

        <Link
          className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#2563EB] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1D4ED8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          href="/contact"
        >
          Discuss your project
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}

export default function BusinessWebsitesPage() {
  return (
    <main>
      <BusinessWebsiteHero />
      <BusinessWebsiteBenefits />
      <WhatsIncluded />
      <BusinessWebsiteProcess />
      <BusinessWebsiteFaqs />
      <BusinessWebsiteFinalCta />
    </main>
  );
}