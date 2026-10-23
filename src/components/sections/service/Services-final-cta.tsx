import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function ServicesFinalCta() {
    return (
        <section
            aria-labelledby="services-final-cta-heading"
            className="relative isolate overflow-hidden border-t border-white/10 bg-[#101828] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
        >
            {/* Subtle decorative elements */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-32 -z-10 size-[26rem] rounded-full border border-white/[0.06] sm:-right-16 sm:-top-40 sm:size-[34rem]"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-20 -z-10 size-[20rem] rounded-full border border-white/[0.06] sm:-right-4 sm:-top-28 sm:size-[27rem]"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-0 -z-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
            />

            <div className="mx-auto max-w-7xl">
                <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
                    {/* Main message */}
                    <div className="max-w-4xl">
                        <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#94A3B8]">
                            <span
                                aria-hidden="true"
                                className="size-1.5 rounded-full bg-[#2563EB]"
                            />
                            Have a project in mind?
                        </p>

                        <h2
                            id="services-final-cta-heading"
                            className="max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.05em] text-[#F7F6F2] sm:text-5xl md:text-6xl lg:text-7xl"
                        >
                            Let&apos;s make your next move{" "}
                            <span className="text-[#94A3B8]">count.</span>
                        </h2>

                        <p className="mt-7 max-w-2xl text-base leading-7 text-[#CBD5E1] sm:mt-8 sm:text-lg sm:leading-8">
                            Whether you&apos;re building something new, improving an existing
                            website, or solving a business challenge with technology,
                            let&apos;s explore the right solution for you.
                        </p>
                    </div>

                    {/* Primary action */}
                    <div className="flex flex-col items-start gap-4 lg:items-end lg:pb-2">
                        <Link
                            href="/contact"
                            className="group inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-[#2563EB] px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-[#1D4ED8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#101828] sm:min-h-16 sm:px-8 sm:text-base"
                        >
                            Discuss your project

                            <ArrowUpRight
                                aria-hidden="true"
                                className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </Link>

                        <Link
                            href="/services"
                            className="group inline-flex min-h-11 items-center gap-2 px-1 py-2 text-sm text-[#CBD5E1] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101828]"
                        >
                            Explore our services

                            <ArrowDownRight
                                aria-hidden="true"
                                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                            />
                        </Link>
                    </div>
                </div>

                {/* Closing statement */}
                <div className="mt-16 flex flex-col gap-4 border-t border-white/15 pt-6 sm:mt-20 sm:flex-row sm:items-center sm:justify-between lg:mt-24">
                    <p className="max-w-xl text-sm leading-6 text-[#94A3B8]">
                        Start with the challenge. We&apos;ll explore the solution together.
                    </p>

                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-[#94A3B8]">
                        Zyncode — Digital design & development
                    </span>
                </div>
            </div>
        </section>
    );
}