import React from 'react'
import PrimaryBtn from '../layout/PrimaryBtn'
import { Check, MessageCircle } from 'lucide-react'

const Callout = () => {
    return (
        <div>  <div className="mt-10 grid overflow-hidden border border-ink/10 bg-white sm:mt-14 lg:grid-cols-[1fr_auto]">
            <div className="p-6 sm:p-9 lg:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                    Before we recommend a solution
                </p>

                <h3 className="mt-4 max-w-2xl text-2xl font-medium leading-tight tracking-[-0.04em] text-ink sm:text-3xl">
                    You should understand what you&apos;re investing in.
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#475467] sm:text-base">
                    We&apos;ll first understand your requirements, then discuss a
                    suitable scope and the factors that influence its cost. The aim
                    is to find a practical solution for your business—not add
                    complexity you don&apos;t need.
                </p>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                        "A solution aligned with your goals",
                        "Clear priorities and requirements",
                        "An agreed project scope",
                        "A discussion about ongoing costs",
                    ].map((item) => (
                        <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm text-ink"
                        >
                            <Check
                                aria-hidden="true"
                                className="mt-0.5 size-4 shrink-0 text-brand"
                            />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex flex-col justify-between gap-6 border-t border-ink/10 bg-[#F1F3F6] p-6 sm:p-9 lg:w-72 lg:border-l lg:border-t-0 lg:p-8">
                <div>
                    <span className="inline-flex size-10 items-center justify-center rounded-full bg-white text-brand">
                        <MessageCircle
                            aria-hidden="true"
                            className="size-5"
                            strokeWidth={1.6}
                        />
                    </span>

                    <h4 className="mt-5 text-lg font-medium text-ink">
                        Not sure what you need?
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-[#475467]">
                        Start with your business goals. We can discuss the possible
                        approaches from there.
                    </p>
                </div>

                <PrimaryBtn />
            </div>
        </div></div>
    )
}

export default Callout