
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const ExploreWorkBtn = () => {
  return (
    <Link
      href="/work"
      className="group inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 bg-transparent px-5 py-3 text-sm font-medium text-ink transition-all duration-200 hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
    >
      <span>Explore Our Work</span>
      <ArrowUpRight
        aria-hidden="true"
        className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
};

export default ExploreWorkBtn;
