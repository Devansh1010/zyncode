import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const PrimaryBtn = () => {
    return (
        <Link
            href="/contact"
            className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-ink px-6 text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
        >
            Discuss your project
            <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
        </Link>
    )
}

export default PrimaryBtn