import Image from "next/image";

export function ContactHero() {
  return (
    <section className="flex min-h-[60vh] items-center bg-page px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: Content */}
        <div className="max-w-xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Contact Us
          </p>

          <h1 className="text-balance font-serif text-[clamp(2.75rem,5vw,4.75rem)] leading-[1.06] tracking-[-0.045em] text-ink">
            Have a project in mind?
            <span className="text-ink/40"> Let&apos;s talk.</span>
          </h1>

          <p className="mt-7 max-w-lg text-sm leading-7 text-ink/65 sm:text-base sm:leading-8">
            Whether you&apos;re building something new, improving what already
            exists, or looking for reliable technical support, we&apos;d love
            to understand what you&apos;re working towards.
          </p>
        </div>

        {/* Right: Image */}
        <div className="relative aspect-5/4 overflow-hidden rounded-xl bg-[#EAE8E2] mt-7">
          <Image
            src="/images/contact/contact-hero.webp"
            alt="A collaborative project discussion in a modern workspace"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}