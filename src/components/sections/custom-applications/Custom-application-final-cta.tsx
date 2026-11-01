
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CustomApplicationFinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-ink px-5 py-24 sm:px-8 sm:py-28 lg:px-14 lg:py-36">
      {/* Decorative background typography */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 select-none text-[clamp(180px,27vw,420px)] font-semibold leading-none tracking-tighter text-white/2.5"
      >
        Z
      </div>

      <div className="relative mx-auto max-w-360 lg:px-14">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-brand" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-subtle">
              Have a project in mind?
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-8 max-w-4xl text-heading-1 text-white">
            Have a business problem that{" "}
            <span className="text-brand">
              software could solve?
            </span>
          </h2>

          {/* Supporting copy */}
          <p className="mt-7 max-w-2xl text-[15px] leading-[1.9] text-white/65 sm:text-base">
            Whether you&apos;re streamlining business operations, developing a new
            digital product, or improving an existing application, let&apos;s
            discuss what you need and how we can approach it.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-white px-7 text-[13px] font-semibold text-ink transition-colors duration-200 hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Discuss your project

              <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/work"
              className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-full border border-white/20 px-7 text-[13px] font-semibold text-white transition-colors duration-200 hover:border-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Explore our work

              <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Reassurance */}
          <p className="mt-9 text-xs leading-relaxed text-white/40">
            Start with a conversation. We&apos;ll understand your requirements
            before recommending an approach.
          </p>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-20 h-px w-full bg-white/10 sm:mt-24" />

        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs font-medium tracking-wide text-white/50">
            Thoughtful software. Built around your business.
          </span>

          <span className="text-xs text-white/35">
            Zyncode · Custom Application Development
          </span>
        </div>
      </div>
    </section>
  );
}
