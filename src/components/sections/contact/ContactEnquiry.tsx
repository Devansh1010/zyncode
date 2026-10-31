import { ContactOptions } from "./ContactOptions";
import { ContactForm } from "./ContactForm";

export function ContactEnquiry() {
  return (
    <section
      id="project-enquiry"
      className="bg-page px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-28">
          <ContactOptions />
        </div>

        <ContactForm />
      </div>
    </section>
  );
}