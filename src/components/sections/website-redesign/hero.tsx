
import ExploreWorkBtn from "@/components/layout/ExploreWorkBtn";
import PrimaryBtn from "@/components/layout/PrimaryBtn";
import Image from "next/image";

export function WebsiteRedesignHero() {
    return (
        <section className="relative overflow-hidden bg-page">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-28">
                {/* Left: Content */}
                <div className="relative z-10 max-w-2xl">
                    <div className="mb-7 flex items-center gap-3">
                        <span className="h-px w-8 bg-brand" />
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                            Website Redesign
                        </p>
                    </div>

                    <h1 className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-ink sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
                        A Fresh Look{" "}
                        <span className="text-brand">Better Results.</span>
                    </h1>

                    <p className="mt-7 max-w-lg text-base leading-8 text-ink/70 sm:text-lg sm:leading-8">
                        If your website feels outdated, confuses potential customers, or
                        no longer supports your goals, we redesign it to communicate your
                        value, build trust, and make the next step easier.
                    </p>

                    {/* CTAs */}
                    <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                        <PrimaryBtn />
                        <ExploreWorkBtn />

                    </div>

                    <p className="mt-7 text-sm leading-6 text-ink/55">
                        Thoughtful design. Clear communication. Built around your business.
                    </p>
                </div>

                {/* Right: Website redesign visual */}
                <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
                    {/* Decorative frame */}
                    <div
                        aria-hidden="true"
                        className="absolute -right-3 -top-3 h-28 w-28 border-r border-t border-brand/30 sm:-right-5 sm:-top-5 sm:h-36 sm:w-36"
                    />

                    <div className="relative overflow-hidden border border-ink/8 bg-surface p-2 shadow-[0_24px_80px_-32px_rgba(16,24,40,0.22)] sm:p-3">
                        {/* Browser chrome */}
                        <div className="flex h-10 items-center justify-between border-b border-ink/8 px-3 sm:px-4">
                            <div className="flex items-center gap-1.5">
                                <span className="h-2 w-2 rounded-full bg-ink/15" />
                                <span className="h-2 w-2 rounded-full bg-ink/15" />
                                <span className="h-2 w-2 rounded-full bg-ink/15" />
                            </div>

                            <span className="text-[10px] tracking-wide text-subtle sm:text-xs">
                                redesigned-website.com
                            </span>

                            <span className="w-8" />
                        </div>

                        {/* Replace with your actual redesign image */}
                        <div className="relative aspect-4/3 overflow-hidden bg-[#F1F0EC]">
                            <Image
                                src="/images/services/redesign-hero
                                .jpeg"
                                alt="Website redesign showcasing a refined layout, clear typography, and modern business-focused visual design"
                                fill
                                priority
                                sizes="(max-width: 1024px) 90vw, 45vw"
                                className="object-cover object-top"
                            />
                        </div>
                    </div>

                    {/* Small supporting label */}
                    <div className="relative ml-auto mt-4 flex max-w-xs items-start gap-3 border-l-2 border-brand pl-4 sm:mt-5">
                        <div>
                            <p className="text-sm font-semibold text-ink">
                                More than a visual refresh
                            </p>
                            <p className="mt-1 text-sm leading-6 text-ink/60">
                                A clearer experience built around your customers and business goals.
                            </p>
                        </div>
                    </div>

                    <div
                        aria-hidden="true"
                        className="absolute -bottom-4 -left-4 -z-10 h-24 w-24 bg-brand/6 sm:-bottom-6 sm:-left-6 sm:h-32 sm:w-32"
                    />
                </div>
            </div>
        </section>
    );
}
