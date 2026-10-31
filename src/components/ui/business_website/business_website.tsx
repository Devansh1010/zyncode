import PrimaryBtn from "@/components/layout/PrimaryBtn";
import TalkToUsWpBtn from "@/components/layout/TalkToUsWpBtn";
import { benefits, faqs, inclusions, steps } from "@/constants/business_website";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
      {children}
    </p>
  );
}

export function BusinessWebsiteHero() {
  return (
    <section className="bg-[#F7F6F2] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
        <div>
          <SectionLabel>Business website development</SectionLabel>

          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tighter text-ink sm:text-5xl lg:text-6xl">
            Your business deserves a website that does more than look good.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-[#667085] sm:text-lg">
            We design and develop professional business websites that help
            people understand your services, feel confident in your business,
            and know what to do next.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <PrimaryBtn />

            <Link
              className="inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-[#344054] transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
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

                <div className="mt-5 h-5 w-full rounded bg-ink" />
                <div className="mt-2 h-5 w-4/5 rounded bg-ink" />
                <div className="mt-2 h-5 w-3/5 rounded bg-ink" />

                <div className="mt-5 space-y-2">
                  <div className="h-2 w-full rounded-full bg-[#EAECF0]" />
                  <div className="h-2 w-11/12 rounded-full bg-[#EAECF0]" />
                  <div className="h-2 w-3/4 rounded-full bg-[#EAECF0]" />
                </div>

                <div className="mt-6 h-9 w-32 rounded-full bg-brand" />
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

export function BusinessWebsiteBenefits() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <SectionLabel>More than an online presence</SectionLabel>

          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-4xl lg:text-5xl">
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
              <span className="text-sm font-medium tabular-nums text-brand">
                {benefit.number}
              </span>

              <h3 className="mt-5 text-xl font-medium tracking-[-0.03em] text-ink sm:text-2xl">
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

export function WhatsIncluded() {
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
              className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-4xl lg:text-5xl"
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
              className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-brand hover:text-[#1D4ED8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
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
                <span className="text-xs font-medium tabular-nums text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="text-lg font-medium tracking-[-0.02em] text-ink">
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

export function BusinessWebsiteProcess() {

  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>How we work</SectionLabel>

        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-4xl lg:text-5xl">
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
              <span className="text-sm font-medium tabular-nums text-brand">
                {step.number}
              </span>

              <h3 className="mt-5 text-xl font-medium text-ink">
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

export function BusinessWebsiteFaqs() {
  return (
    <section className="bg-[#F7F6F2] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <SectionLabel>Common questions</SectionLabel>

          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-4xl">
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
              <summary className="flex min-h-16 cursor-pointer list-none items-center gap-5 py-5 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand [&::-webkit-details-marker]:hidden">
                <span className="flex-1 text-base font-medium leading-7 text-ink group-open:text-brand">
                  {faq.question}
                </span>

                <span
                  aria-hidden="true"
                  className="relative flex size-8 shrink-0 items-center justify-center rounded-full border border-[#D9D8D2] text-[#344054] group-open:border-brand group-open:bg-brand group-open:text-white"
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

const CONTACT_EMAIL = "hello@zyncode.in";
const CONTACT_PHONE = "+91 XXXXXXXXXX";

export function BusinessWebsiteFinalCta() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="relative isolate overflow-hidden rounded-3xl border border-[#E5E7EB] bg-[#F7F8FA] px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          {/* Subtle decorative accent */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-28 -z-10 size-80 rounded-full border border-blue-200/60"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-16 -z-10 size-56 rounded-full border border-blue-200/60"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 -z-10 h-64 w-64 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.08),transparent_70%)]"
          />

          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              <span
                aria-hidden="true"
                className="h-px w-6 bg-brand"
              />
              Let&apos;s talk about your website
              <span
                aria-hidden="true"
                className="h-px w-6 bg-brand"
              />
            </p>

            <h2 className="mt-6 text-3xl font-semibold leading-[1.15] tracking-[-0.045em] text-ink sm:text-4xl lg:text-5xl">
              Your business deserves a website that works for it.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#667085] sm:text-lg sm:leading-8">
              Tell us about your business, your customers, and what you want
              your website to achieve. We&apos;ll help you figure out the right
              approach for your goals.
            </p>

            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <PrimaryBtn />

              <TalkToUsWpBtn />
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-4xl border-t border-[#DDE2E8] pt-7 sm:mt-14 sm:pt-8">
            <p className="mb-5 text-center text-xs font-medium uppercase tracking-[0.14em] text-[#667085]">
              Prefer to reach us directly?
            </p>

            <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-10">
              <a
                href={`mailto:${CONTACT_EMAIL} `}
                className="group inline-flex min-w-0 items-center gap-3 text-sm text-[#344054] transition-colors hover:text-brand"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#E4E7EC] bg-white text-brand transition-colors group-hover:border-blue-200">
                  <Mail aria-hidden="true" className="size-4" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-[#667085]">
                    Email us
                  </span>
                  <span className="mt-0.5 block break-all font-medium">
                    {CONTACT_EMAIL}
                  </span>
                </span>
              </a>

              <a
                href={`tel:${CONTACT_PHONE.replace(/[^\d+]/g, "")} `}
                className="group inline-flex min-w-0 items-center gap-3 text-sm text-[#344054] transition-colors hover:text-brand"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#E4E7EC] bg-white text-brand transition-colors group-hover:border-blue-200">
                  <Phone aria-hidden="true" className="size-4" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-[#667085]">
                    Call us
                  </span>
                  <span className="mt-0.5 block font-medium">
                    {CONTACT_PHONE}
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
