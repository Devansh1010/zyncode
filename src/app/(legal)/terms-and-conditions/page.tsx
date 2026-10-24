import type { Metadata } from "next";
import type { ReactNode } from "react";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions | Zyncode",
  description:
    "Read the terms governing your use of the Zyncode website, service inquiries, website content, and digital services.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

const sections = [
  { id: "acceptance", number: "01", label: "Acceptance of terms" },
  { id: "about", number: "02", label: "About Zyncode" },
  { id: "website-use", number: "03", label: "Use of this website" },
  { id: "services", number: "04", label: "Services and proposals" },
  { id: "client-responsibilities", number: "05", label: "Client responsibilities" },
  { id: "payments", number: "06", label: "Pricing and payments" },
  { id: "intellectual-property", number: "07", label: "Intellectual property" },
  { id: "third-party", number: "08", label: "Third-party services" },
  { id: "confidentiality", number: "09", label: "Confidentiality and privacy" },
  { id: "warranties", number: "10", label: "Warranties and disclaimers" },
  { id: "liability", number: "11", label: "Limitation of liability" },
  { id: "termination", number: "12", label: "Suspension and termination" },
  { id: "law", number: "13", label: "Governing law and disputes" },
  { id: "changes", number: "14", label: "Changes to these terms" },
  { id: "contact", number: "15", label: "Contact us" },
];

const lastUpdated = "24 October 2026";

function TermsSection({
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

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-[#F7F6F2] text-[#101828]">
      {/* Page introduction */}
      <section className="border-b border-[#E4E7EC]">
        <div className="mx-auto max-w-[1120px] px-5 pb-12 pt-36 sm:px-8 sm:pb-16 sm:pt-44 lg:px-12">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm text-[#667085] transition-colors hover:text-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-4"
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
                <FileText size={14} className="text-[#2563EB]" />
                Terms of use
              </div>

              <h1 className="max-w-3xl text-4xl font-medium leading-[1.08] tracking-[-0.055em] sm:text-5xl md:text-6xl">
                Clear terms.
                <br />
                <span className="text-[#2563EB]">
                  Clear expectations.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-[#667085] sm:text-lg sm:leading-8">
                These terms explain the conditions for using the Zyncode
                website and provide a general framework for understanding our
                digital services.
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

      {/* Main content */}
      <div className="mx-auto grid max-w-[1120px] gap-12 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-20 lg:px-12 lg:py-20">
        {/* Table of contents */}
        <aside className="lg:sticky lg:top-28 lg:h-fit">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#98A2B3]">
            On this page
          </p>

          <nav aria-label="Terms and conditions sections" className="mt-5">
            <ol className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-1">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="group flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-[#667085] transition-colors hover:bg-white/70 hover:text-[#101828] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                  >
                    <span className="font-mono text-[11px] text-[#98A2B3] transition-colors group-hover:text-[#2563EB]">
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
              Have a question about these terms?
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

        {/* Terms */}
        <article className="min-w-0">
          <div className="border-b border-[#E4E7EC] pb-8">
            <p className="text-sm leading-7 text-[#667085]">
              Please read these Terms and Conditions before using this
              website. They describe the general rules governing website use.
              Specific projects and services may also be subject to a separate
              written proposal, statement of work, or service agreement.
            </p>
          </div>

          <TermsSection
            id="acceptance"
            number="01"
            title="Acceptance of terms"
          >
            <p>
              These Terms and Conditions apply to your access to and use of
              the Zyncode website.
            </p>

            <p>
              By accessing or using the website, you agree to comply with
              these terms and applicable laws. If you do not agree with
              these terms, please discontinue use of the website.
            </p>

            <p>
              A separate written agreement may apply when you engage Zyncode
              for a project. If that agreement conflicts with these general
              website terms, the project agreement will govern the relevant
              project to the extent specified in that agreement and permitted
              by law.
            </p>
          </TermsSection>

          <TermsSection
            id="about"
            number="02"
            title="About Zyncode"
          >
            <p>
              Zyncode provides digital design and development services.
              Depending on the agreed project scope, these services may
              include business websites, website redesign and optimization,
              custom web applications, and website maintenance.
            </p>

            <p>
              Information on this website is provided to describe our
              services and approach. Publishing information about a service
              does not, by itself, constitute a binding offer to provide that
              service on specific terms.
            </p>
          </TermsSection>

          <TermsSection
            id="website-use"
            number="03"
            title="Use of this website"
          >
            <p>
              You agree to use this website lawfully and in a way that does
              not interfere with its operation or the rights of others.
            </p>

            <p>You must not:</p>

            <ul className="list-disc space-y-2 pl-5 marker:text-[#2563EB]">
              <li>
                Use the website for unlawful, deceptive, fraudulent, or
                harmful purposes.
              </li>
              <li>
                Attempt unauthorized access to the website, its infrastructure,
                or related systems.
              </li>
              <li>
                Introduce malicious code or interfere with website security
                and availability.
              </li>
              <li>
                Copy, scrape, republish, or exploit website content in ways
                that infringe applicable rights or laws.
              </li>
              <li>
                Misrepresent your identity or submit information you are not
                authorized to share.
              </li>
            </ul>

            <p>
              We may take reasonable steps to protect the website and its
              users against misuse, subject to applicable law.
            </p>
          </TermsSection>

          <TermsSection
            id="services"
            number="04"
            title="Services and proposals"
          >
            <p>
              The scope, deliverables, pricing, milestones, estimated
              schedule, and other conditions for a client project will be
              defined in the relevant proposal or written agreement.
            </p>

            <p>
              Website content describing our services is general information.
              It does not guarantee that a particular feature, integration,
              result, or delivery date will be available for every project.
            </p>

            <p>
              Any project timeline is subject to the agreed scope, timely
              access to required materials, client feedback, third-party
              dependencies, and other conditions specified in the project
              agreement.
            </p>

            <p>
              Changes to the agreed scope may require revised pricing,
              deliverables, or timelines. Any such changes should be agreed
              upon in writing before the additional work begins.
            </p>
          </TermsSection>

          <TermsSection
            id="client-responsibilities"
            number="05"
            title="Client responsibilities"
          >
            <p>
              For projects we undertake, clients are responsible for
              providing accurate information, required content, approvals,
              access, and feedback within the timeframes agreed for the
              project.
            </p>

            <p>
              Clients must ensure they have the necessary rights, permissions,
              and lawful basis to provide any text, images, logos, data, or
              other materials supplied to us.
            </p>

            <p>
              Delays in receiving materials, decisions, approvals, or access
              may affect the project schedule. The handling of such delays
              will be governed by the applicable project agreement.
            </p>

            <p>
              Any additional client responsibilities will be specified in the
              relevant proposal or service agreement.
            </p>
          </TermsSection>

          <TermsSection
            id="payments"
            number="06"
            title="Pricing and payments"
          >
            <p>
              Prices, payment schedules, deposits, taxes, expenses, and
              applicable payment methods will be communicated in the relevant
              proposal, invoice, or written agreement.
            </p>

            <p>
              A project may require an advance payment, milestone payments,
              or payment before delivery or launch, depending on the agreed
              terms.
            </p>

            <p>
              Any cancellation, refund, late-payment, suspension, or
              additional-work arrangements must be specified in the applicable
              agreement and will remain subject to applicable law.
            </p>

            <p>
              Do not rely on informal discussions or general website content
              as a substitute for the written commercial terms agreed for
              your project.
            </p>
          </TermsSection>

          <TermsSection
            id="intellectual-property"
            number="07"
            title="Intellectual property"
          >
            <h3 className="!mt-6 font-medium text-[#344054]">
              Zyncode website content
            </h3>

            <p>
              Unless otherwise stated, the design, text, graphics, branding,
              and other materials on this website are owned by Zyncode or
              used with permission and are protected by applicable
              intellectual-property laws.
            </p>

            <p>
              You may access the website for personal or legitimate business
              evaluation. You must not reproduce, distribute, modify, or
              commercially exploit protected content without appropriate
              authorization.
            </p>

            <h3 className="!mt-6 font-medium text-[#344054]">
              Client projects
            </h3>

            <p>
              Ownership and usage rights for project deliverables, source
              code, designs, content, and other project materials will be
              defined in the applicable written agreement.
            </p>

            <p>
              Unless the agreement states otherwise, engaging Zyncode does
              not automatically transfer ownership of every tool, component,
              library, template, method, or other material used to produce
              the work.
            </p>

            <p>
              Third-party software, fonts, stock assets, open-source
              libraries, and other licensed materials remain subject to their
              respective license terms.
            </p>

            <p>
              Any permission to display a completed project in Zyncode&apos;s
              portfolio, case studies, or promotional materials should be
              addressed in the project agreement or obtained separately
              where appropriate.
            </p>
          </TermsSection>

          <TermsSection
            id="third-party"
            number="08"
            title="Third-party services"
          >
            <p>
              Projects may depend on third-party services such as hosting
              providers, domain registrars, payment processors, APIs,
              analytics platforms, or software providers.
            </p>

            <p>
              These services may have their own terms, fees, availability
              requirements, and privacy practices. Their operation is
              generally governed by their respective providers.
            </p>

            <p>
              Unless expressly agreed otherwise in writing, Zyncode does not
              guarantee the continued availability, pricing, performance, or
              policies of third-party services.
            </p>

            <p>
              Responsibility for subscriptions, renewals, account ownership,
              and third-party fees should be established in the relevant
              project agreement.
            </p>
          </TermsSection>

          <TermsSection
            id="confidentiality"
            number="09"
            title="Confidentiality and privacy"
          >
            <p>
              We handle personal information in accordance with our{" "}
              <Link
                href="/privacy-policy"
                className="font-medium text-[#2563EB] underline decoration-[#2563EB]/30 underline-offset-4 transition-colors hover:text-[#1D4ED8]"
              >
                Privacy Policy
              </Link>
              .
            </p>

            <p>
              Information shared during a project may be subject to separate
              confidentiality obligations if agreed in writing or otherwise
              required by law.
            </p>

            <p>
              Clients should avoid sending passwords, payment credentials,
              or other sensitive information through ordinary contact forms
              or unsecured communication channels.
            </p>
          </TermsSection>

          <TermsSection
            id="warranties"
            number="10"
            title="Warranties and disclaimers"
          >
            <p>
              We aim to keep the information on this website useful and
              accurate. However, we do not guarantee that all website
              content will always be complete, current, uninterrupted, or
              free from errors.
            </p>

            <p>
              Unless expressly stated in a written agreement, website content
              is provided for general informational purposes and does not
              constitute a guarantee of a particular business, marketing,
              search-engine, traffic, revenue, or conversion outcome.
            </p>

            <p>
              Any project-specific warranties, support commitments,
              acceptance criteria, or service levels must be stated in the
              applicable agreement.
            </p>

            <p>
              Nothing in these terms excludes a warranty, right, or protection
              that cannot lawfully be excluded under applicable law.
            </p>
          </TermsSection>

          <TermsSection
            id="liability"
            number="11"
            title="Limitation of liability"
          >
            <p>
              To the extent permitted by applicable law, Zyncode will not be
              responsible for losses arising from unauthorized use of the
              website, interruptions beyond our reasonable control, or
              reliance on general website information without an applicable
              written agreement.
            </p>

            <p>
              Project-specific liability, remedies, and responsibility for
              losses will be governed by the applicable written agreement,
              subject to any mandatory legal requirements.
            </p>

            <p>
              Nothing in these terms excludes or limits liability where such
              exclusion or limitation is prohibited by law, including any
              liability that cannot legally be waived.
            </p>
          </TermsSection>

          <TermsSection
            id="termination"
            number="12"
            title="Suspension and termination"
          >
            <p>
              We may restrict or suspend access to the website where
              reasonably necessary to address security risks, unlawful
              activity, misuse, or technical issues.
            </p>

            <p>
              The termination, suspension, or cancellation of a client project
              will be governed by the relevant written agreement and
              applicable law.
            </p>

            <p>
              Ending a project does not automatically remove obligations or
              rights that accrued before termination or that are intended to
              continue afterward.
            </p>
          </TermsSection>

          <TermsSection
            id="law"
            number="13"
            title="Governing law and disputes"
          >
            <p>
              These terms are intended to be interpreted in accordance with
              applicable laws of India, subject to any mandatory rules that
              apply to the particular user or transaction.
            </p>

            <p>
              If a concern arises, the parties are encouraged to attempt to
              resolve it through good-faith communication before pursuing
              other available remedies.
            </p>

            <p>
              Any applicable jurisdiction, dispute-resolution process, or
              forum for legal proceedings should be confirmed in the relevant
              agreement and reviewed for enforceability under applicable law.
            </p>
          </TermsSection>

          <TermsSection
            id="changes"
            number="14"
            title="Changes to these terms"
          >
            <p>
              We may revise these terms to reflect changes to our website,
              services, business practices, or applicable legal requirements.
            </p>

            <p>
              Updated terms will be published on this page with a revised
              date. Changes will apply as permitted by applicable law.
            </p>

            <p>
              Where a separate agreement requires notice, consent, or another
              process for changes, that agreement will continue to govern.
            </p>
          </TermsSection>

          <TermsSection
            id="contact"
            number="15"
            title="Contact us"
          >
            <p>
              If you have questions about these Terms and Conditions, contact
              Zyncode through the contact page.
            </p>

            <div className="mt-6 rounded-xl border border-[#E4E7EC] bg-white/60 p-5 sm:p-6">
              <p className="font-medium text-[#101828]">Zyncode</p>

              <p className="mt-2 text-sm leading-6 text-[#667085]">
                Questions about website use or service terms
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
              Add your actual business contact details before publication.
            </p>
          </TermsSection>

          {/* Return link */}
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