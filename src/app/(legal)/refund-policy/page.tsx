import type { Metadata } from "next";
import type { ReactNode } from "react";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  RefreshCw,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Refund Policy | Zyncode",
  description:
    "Understand Zyncode's draft refund, cancellation, and payment policies for website design, development, and maintenance services.",
  alternates: {
    canonical: "/refund-policy",
  },
};

const sections = [
  { id: "overview", number: "01", label: "Overview" },
  { id: "project-payments", number: "02", label: "Project payments" },
  { id: "cancellations", number: "03", label: "Cancellations" },
  { id: "completed-work", number: "04", label: "Completed work" },
  { id: "revisions", number: "05", label: "Revisions and scope changes" },
  { id: "maintenance", number: "06", label: "Maintenance services" },
  { id: "third-party", number: "07", label: "Third-party costs" },
  { id: "exceptions", number: "08", label: "Exceptions and legal rights" },
  { id: "request", number: "09", label: "How to request a refund" },
  { id: "processing", number: "10", label: "Review and processing" },
  { id: "contact", number: "11", label: "Contact us" },
];

const lastUpdated = "24 October 2026";

function PolicySection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="scroll-mt-28 border-b border-[#E4E7EC] py-9 sm:py-11"
    >
      <div className="grid gap-4 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-7">
        <span className="pt-1 font-mono text-xs tracking-wide text-[#98A2B3]">
          {number}
        </span>

        <div className="min-w-0">
          <h2
            id={`${id}-heading`}
            className="text-xl font-medium tracking-[-0.035em] text-[#101828] sm:text-2xl"
          >
            {title}
          </h2>

          <div className="mt-5 space-y-4 text-[15px] leading-7 text-[#667085] sm:text-base sm:leading-8">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-[#F7F6F2] text-ink">
      {/* Introduction */}
      <section className="border-b border-[#E4E7EC]">
        <div className="mx-auto max-w-280 px-5 pb-12 pt-36 sm:px-8 sm:pb-16 sm:pt-44 lg:px-12">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm text-[#667085] transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-4"
          >
            <ArrowLeft
              size={15}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to home
          </Link>

          <div className="mt-12 grid gap-8 md:grid-cols-[1fr_240px] md:items-end lg:gap-16">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E4E7EC] bg-white/60 px-3 py-1.5 text-xs font-medium text-[#475467]">
                <RefreshCw size={14} className="text-brand" />
                Payments and cancellations
              </div>

              <h1 className="max-w-3xl text-4xl font-medium leading-[1.08] tracking-[-0.055em] sm:text-5xl md:text-6xl">
                A clear approach
                <br />
                to <span className="text-brand">refunds.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-[#667085] sm:text-lg sm:leading-8">
                We believe payment terms should be clear before a project
                begins. This policy explains how refund and cancellation
                requests are intended to be handled for Zyncode services.
              </p>
            </div>

            <div className="border-t border-[#D0D5DD] pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#98A2B3]">
                Last updated
              </p>
              <p className="mt-2 text-sm font-medium text-[#344054]">
                {lastUpdated}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Policy content */}
      <div className="mx-auto grid max-w-280 gap-12 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-20 lg:px-12 lg:py-20">
        {/* Table of contents */}
        <aside className="lg:sticky lg:top-28 lg:h-fit">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#98A2B3]">
            On this page
          </p>

          <nav aria-label="Refund policy sections" className="mt-5">
            <ol className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-1">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="group flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-[#667085] transition-colors hover:bg-white/70 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                  >
                    <span className="font-mono text-[11px] text-[#98A2B3] transition-colors group-hover:text-brand">
                      {section.number}
                    </span>
                    <span>{section.label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-8 hidden border-t border-[#E4E7EC] pt-5 lg:block">
            <p className="text-sm leading-6 text-[#667085]">
              Need clarification about a payment?
            </p>

            <Link
              href="/contact"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[#2563EB] transition-colors hover:text-[#1D4ED8]"
            >
              Contact us
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </aside>

        {/* Main policy */}
        <article className="min-w-0">
          <div className="border-b border-[#E4E7EC] pb-8">
            <p className="text-sm leading-7 text-[#667085]">
              This draft applies to payments for services provided by
              Zyncode, including website design, development, redesign,
              custom applications, and maintenance. The final policy should
              be read alongside the written proposal, invoice, or service
              agreement applicable to your project.
            </p>

            <div className="mt-5 rounded-lg border border-[#E4E7EC] bg-white/60 p-4 sm:p-5">
              <p className="text-sm leading-6 text-[#475467]">
                <strong className="font-medium text-[#101828]">
                  Before you pay:
                </strong>{" "}
                Review the agreed scope, payment milestones, deliverables,
                cancellation conditions, and any refund terms in your
                project agreement.
              </p>
            </div>
          </div>

          <PolicySection
            id="overview"
            number="01"
            title="Overview"
          >
            <p>
              Zyncode provides customized digital services. Project payments
              may cover planning, research, design, development, testing,
              implementation, and other agreed work.
            </p>

            <p>
              Refund eligibility depends on the service purchased, the work
              completed, the payment terms agreed in writing, and applicable
              law.
            </p>

            <p>
              This policy does not remove any rights or remedies that cannot
              legally be excluded or restricted.
            </p>
          </PolicySection>

          <PolicySection
            id="project-payments"
            number="02"
            title="Project payments"
          >
            <p>
              Project pricing and payment schedules will be specified in the
              relevant proposal, invoice, or written service agreement.
            </p>

            <p>
              Depending on the agreement, payments may be linked to project
              commencement, design approval, development milestones, final
              delivery, or launch.
            </p>

            <p>
              A payment made for work already performed, resources already
              committed, or deliverables already supplied may not be eligible
              for a full refund. Any deduction or amount retained must be
              assessed in accordance with the agreement and applicable law.
            </p>

            <p>
              The final commercial terms should clearly explain whether an
              advance payment is refundable, partly refundable, or
              non-refundable in specific circumstances.
            </p>
          </PolicySection>

          <PolicySection
            id="cancellations"
            number="03"
            title="Cancellations"
          >
            <p>
              If you wish to cancel a project, please notify Zyncode in
              writing as soon as possible.
            </p>

            <p>
              On receiving a cancellation request, the parties should review
              the agreed cancellation terms, work completed up to the
              cancellation date, outstanding payments, and any authorized
              expenses or commitments.
            </p>

            <p>
              Where a refund is due, its amount will be determined according
              to the applicable agreement and law. Any remaining balance
              payable for completed work or other valid contractual
              obligations will be handled accordingly.
            </p>

            <p>
              Cancellation conditions should be agreed before work begins,
              rather than determined unexpectedly after a dispute arises.
            </p>
          </PolicySection>

          <PolicySection
            id="completed-work"
            number="04"
            title="Completed work"
          >
            <p>
              Services that have already been completed, delivered, or
              approved may not qualify for a full refund merely because a
              client later changes their preferences or business plans.
            </p>

            <p>
              If you believe an agreed deliverable has not been supplied or
              materially differs from the written project scope, contact us
              with the relevant details so the issue can be reviewed.
            </p>

            <p>
              Any remedy, correction, partial refund, or other resolution
              will depend on the facts, the project agreement, and applicable
              law.
            </p>
          </PolicySection>

          <PolicySection
            id="revisions"
            number="05"
            title="Revisions and scope changes"
          >
            <p>
              Projects may include a defined number or type of revisions, as
              specified in the proposal or service agreement.
            </p>

            <p>
              Requests that fall outside the agreed scope may require
              additional fees or a revised timeline. Such changes should be
              agreed in writing before additional work begins.
            </p>

            <p>
              A disagreement about a design preference or a request for
              additional features does not, by itself, establish refund
              eligibility. We encourage clients to raise concerns promptly
              so they can be assessed against the agreed requirements.
            </p>
          </PolicySection>

          <PolicySection
            id="maintenance"
            number="06"
            title="Maintenance services"
          >
            <p>
              Website maintenance and support may be provided as a recurring
              service or under another arrangement agreed in writing.
            </p>

            <p>
              The applicable agreement should specify the billing cycle,
              included services, exclusions, cancellation notice, and when
              access or support will end.
            </p>

            <p>
              Any refund of prepaid maintenance fees will depend on the
              agreed cancellation and billing terms, the service period
              involved, and applicable law.
            </p>

            <p>
              Work already completed, third-party costs, and services
              already made available may be treated differently from unused
              prepaid service periods where the agreement and law permit.
            </p>
          </PolicySection>

          <PolicySection
            id="third-party"
            number="07"
            title="Third-party costs"
          >
            <p>
              A project may involve third-party expenses, such as domain
              registrations, hosting, premium software, licenses, paid APIs,
              stock assets, or external subscriptions.
            </p>

            <p>
              These expenses may be paid directly by the client or purchased
              on the client&apos;s behalf with authorization.
            </p>

            <p>
              Refunds for third-party products and services are subject to
              the relevant provider&apos;s terms. Zyncode cannot promise a refund
              from an external provider where that provider does not offer
              one.
            </p>

            <p>
              Any third-party cost included in a refund calculation should
              be handled transparently and in accordance with the project
              agreement and applicable law.
            </p>
          </PolicySection>

          <PolicySection
            id="exceptions"
            number="08"
            title="Exceptions and legal rights"
          >
            <p>
              Nothing in this policy is intended to exclude or limit rights
              or remedies available to consumers or other customers under
              applicable law.
            </p>

            <p>
              If a payment was processed incorrectly, charged more than
              agreed, or relates to a service that was not provided as
              contractually required, please contact us so the circumstances
              can be reviewed.
            </p>

            <p>
              Each request will be assessed according to the relevant facts,
              the applicable agreement, and any mandatory legal requirements.
            </p>
          </PolicySection>

          <PolicySection
            id="request"
            number="09"
            title="How to request a refund"
          >
            <p>
              To request a refund review, contact Zyncode through our contact
              page or the communication channel specified in your project
              agreement.
            </p>

            <p>Please include, where available:</p>

            <ul className="list-disc space-y-2 pl-5 marker:text-[#2563EB]">
              <li>Your name and business name, if applicable.</li>
              <li>The project or service concerned.</li>
              <li>The invoice number and payment date.</li>
              <li>The amount you are requesting to be refunded.</li>
              <li>A brief explanation and any supporting information.</li>
            </ul>

            <p>
              Please do not include passwords, full payment-card details, or
              other unnecessary sensitive information in your request.
            </p>
          </PolicySection>

          <PolicySection
            id="processing"
            number="10"
            title="Review and processing"
          >
            <p>
              We will review the request, relevant project records, payment
              information, and applicable contractual terms.
            </p>

            <p>
              If a refund is approved, the amount, method, and expected
              processing timeframe should be communicated to you. The time
              required for the funds to appear may depend on the payment
              provider or financial institution.
            </p>

            <p>
              We should not promise a fixed review or processing timeframe
              until Zyncode has adopted one it can consistently meet.
            </p>
          </PolicySection>

          <PolicySection
            id="contact"
            number="11"
            title="Contact us"
          >
            <p>
              If you have questions about this Refund Policy or wish to
              discuss a payment, please contact Zyncode.
            </p>

            <div className="mt-6 rounded-xl border border-[#E4E7EC] bg-white/60 p-5 sm:p-6">
              <p className="font-medium text-[#101828]">Zyncode</p>

              <p className="mt-2 text-sm leading-6 text-[#667085]">
                Refund and payment inquiries
              </p>

              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#2563EB] transition-colors hover:text-[#1D4ED8]"
              >
                Contact us
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <p className="text-sm">
              Add a monitored contact email and any required business
              details before publishing this policy.
            </p>
          </PolicySection>

          <div className="pt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#475467] transition-colors hover:text-[#2563EB]"
            >
              <ArrowLeft size={15} />
              Return to Zyncode
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}   