import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Zyncode",
  description:
    "Learn how Zyncode collects, uses, stores, and protects personal information when you visit our website or contact us.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

const sections = [
  { id: "introduction", title: "01", label: "Introduction" },
  { id: "information", title: "02", label: "Information we collect" },
  { id: "usage", title: "03", label: "How we use your information" },
  { id: "cookies", title: "04", label: "Cookies and analytics" },
  { id: "sharing", title: "05", label: "Sharing your information" },
  { id: "retention", title: "06", label: "Data retention and security" },
  { id: "rights", title: "07", label: "Your privacy rights" },
  { id: "third-party", title: "08", label: "Third-party links" },
  { id: "changes", title: "09", label: "Changes to this policy" },
  { id: "contact", title: "10", label: "Contact us" },
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
  children: React.ReactNode;
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

        <div>
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

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#F7F6F2] text-[#101828]">
      {/* Intro */}
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
                <ShieldCheck size={14} className="text-[#2563EB]" />
                Your privacy matters
              </div>

              <h1 className="max-w-3xl text-4xl font-medium leading-[1.08] tracking-[-0.055em] sm:text-5xl md:text-6xl">
                Privacy, explained
                <span className="text-[#2563EB]"> clearly.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-[#667085] sm:text-lg sm:leading-8">
                This policy explains how Zyncode handles personal information
                when you visit our website, explore our services, or get in
                touch with us.
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
      <div className="mx-auto grid max-w-[1120px] gap-12 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-20 lg:px-12 lg:py-20">
        {/* Table of contents */}
        <aside className="lg:sticky lg:top-28 lg:h-fit">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#98A2B3]">
            On this page
          </p>

          <nav aria-label="Privacy policy sections" className="mt-5">
            <ol className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-1">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="group flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-[#667085] transition-colors hover:bg-white/70 hover:text-[#101828] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                  >
                    <span className="font-mono text-[11px] text-[#98A2B3] transition-colors group-hover:text-[#2563EB]">
                      {section.title}
                    </span>
                    <span>{section.label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-8 hidden border-t border-[#E4E7EC] pt-5 lg:block">
            <p className="text-sm leading-6 text-[#667085]">
              Have a question about your information?
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
              We respect your privacy and aim to handle personal information
              responsibly. Please read this policy to understand our
              information practices. The details below are a draft and must be
              checked against the services, tools, and processes Zyncode
              actually uses before publication.
            </p>
          </div>

          <PolicySection
            id="introduction"
            number="01"
            title="Introduction"
          >
            <p>
              This Privacy Policy applies to information collected through the
              Zyncode website and through communications you initiate with us.
            </p>
            <p>
              In this policy, &quot;Zyncode,&quot; &quot;we,&quot;
              &quot;our,&quot; and &quot;us&quot; refer to the business
              operating this website. &quot;You&quot; refers to a visitor or
              individual whose personal information we may process.
            </p>
            <p>
              By using our website, you acknowledge this policy. Where consent
              is legally required, we will seek it separately where
              appropriate.
            </p>
          </PolicySection>

          <PolicySection
            id="information"
            number="02"
            title="Information we collect"
          >
            <p>
              The information we collect depends on how you interact with our
              website and services. It may include the following categories,
              where applicable.
            </p>

            <h3 className="!mt-6 font-medium text-[#344054]">
              Information you provide
            </h3>
            <p>
              If you contact us or submit an inquiry, you may provide your
              name, email address, phone number, business name, website
              address, project requirements, and any other information you
              choose to include in your message.
            </p>

            <h3 className="!mt-6 font-medium text-[#344054]">
              Technical and usage information
            </h3>
            <p>
              Our website or its service providers may process technical
              information such as browser type, device information, pages
              visited, referring pages, approximate location derived from
              network information, and interaction events. Whether this
              information is collected depends on the tools we have enabled.
            </p>

            <h3 className="!mt-6 font-medium text-[#344054]">
              Information from other sources
            </h3>
            <p>
              If you contact us through a third-party service, we may receive
              the information you choose to share through that service, subject
              to its own privacy practices.
            </p>
          </PolicySection>

          <PolicySection id="usage" number="03" title="How we use your information">
            <p>Depending on the circumstances, we may use personal information to:</p>

            <ul className="list-disc space-y-2 pl-5 marker:text-[#2563EB]">
              <li>Respond to inquiries and discuss potential projects.</li>
              <li>Provide, manage, and improve our website and services.</li>
              <li>Communicate about requests, proposals, or ongoing work.</li>
              <li>Understand website usage and improve usability.</li>
              <li>Protect our website, prevent misuse, and maintain security.</li>
              <li>Meet applicable legal and regulatory obligations.</li>
            </ul>

            <p>
              We will not use your information for purposes incompatible with
              the reason it was collected unless permitted or required by
              applicable law.
            </p>
          </PolicySection>

          <PolicySection id="cookies" number="04" title="Cookies and analytics">
            <p>
              Cookies and similar technologies may be used to support website
              functionality, remember preferences, understand site usage, or
              measure performance.
            </p>
            <p>
              The technologies used depend on the tools configured on our
              website. Where required by law, we will request consent before
              using non-essential cookies or similar technologies.
            </p>
            <p>
              You can also manage cookies through your browser settings.
              Blocking certain cookies may affect some website functionality.
            </p>
            <p>
              Before publishing this section, identify the analytics,
              advertising, embedded content, and other tracking technologies
              actually used on the website.
            </p>
          </PolicySection>

          <PolicySection id="sharing" number="05" title="Sharing your information">
            <p>
              We do not sell personal information as part of our ordinary
              business practices. We may share information where necessary
              with:
            </p>

            <ul className="list-disc space-y-2 pl-5 marker:text-[#2563EB]">
              <li>
                Service providers that support website hosting, communication,
                form processing, analytics, or security.
              </li>
              <li>
                Professional advisers where reasonably necessary.
              </li>
              <li>
                Public authorities or other parties where disclosure is
                required by law or necessary to protect legal rights and
                security.
              </li>
              <li>
                A successor or relevant transaction party if our business is
                involved in a lawful merger, restructuring, or transfer.
              </li>
            </ul>

            <p>
              Service providers should only receive information appropriate
              for the services they perform and should be subject to suitable
              contractual or other safeguards where required.
            </p>
          </PolicySection>

          <PolicySection
            id="retention"
            number="06"
            title="Data retention and security"
          >
            <p>
              We retain personal information for as long as reasonably
              necessary for the purpose for which it was collected, including
              responding to inquiries, managing projects, maintaining required
              records, resolving disputes, and meeting legal obligations.
            </p>
            <p>
              Retention periods vary depending on the type of information and
              the reason it is held. Information may be deleted, anonymized,
              or securely disposed of when it is no longer needed, subject to
              applicable legal requirements.
            </p>
            <p>
              We use appropriate safeguards intended to protect information
              against unauthorized access, loss, misuse, or alteration.
              However, no method of transmission or storage can be guaranteed
              to be completely secure.
            </p>
          </PolicySection>

          <PolicySection id="rights" number="07" title="Your privacy rights">
            <p>
              Depending on applicable law and the circumstances, you may have
              rights to request access to personal information, correction of
              inaccurate information, deletion, withdrawal of consent, or
              other forms of privacy-related assistance.
            </p>
            <p>
              To make a request, contact us using the details below. We may
              need to verify your identity before acting on a request and may
              be legally permitted or required to retain certain information.
            </p>
            <p>
              We will handle requests in accordance with applicable law,
              including any relevant requirements under Indian data
              protection legislation.
            </p>
          </PolicySection>

          <PolicySection
            id="third-party"
            number="08"
            title="Third-party links"
          >
            <p>
              Our website may link to websites or services operated by third
              parties. Those services have their own privacy policies and
              practices, which we do not control.
            </p>
            <p>
              We encourage you to review the privacy information provided by
              any third-party service before sharing personal information
              with it.
            </p>
          </PolicySection>

          <PolicySection
            id="changes"
            number="09"
            title="Changes to this policy"
          >
            <p>
              We may update this Privacy Policy to reflect changes in our
              practices, technology, services, or legal obligations.
            </p>
            <p>
              When we make changes, we will update the date at the top of this
              page. Where required by law, we will provide additional notice
              or obtain consent for material changes.
            </p>
          </PolicySection>

          <PolicySection id="contact" number="10" title="Contact us">
            <p>
              If you have questions about this Privacy Policy or wish to make a
              privacy-related request, please contact Zyncode.
            </p>

            <div className="mt-6 rounded-xl border border-[#E4E7EC] bg-white/60 p-5 sm:p-6">
              <p className="font-medium text-[#101828]">Zyncode</p>
              <p className="mt-2 text-sm leading-6 text-[#667085]">
                Privacy-related questions and requests
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
              Before publication, add a monitored privacy contact email and
              any legally required business or grievance contact details.
            </p>
          </PolicySection>

          <div className="pt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#475467] transition-colors hover:text-brand"
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