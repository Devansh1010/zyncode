import Link from "next/link";

type BrandWordmarkProps = {
    className?: string;
};

export function BrandWordmark({
    className,
}: BrandWordmarkProps) {
    return (
        <Link
            href="/"
            aria-label="Zyncode home"
            className={[
                "inline-flex w-fit items-center",
                "text-xl font-semibold tracking-[-0.055em]",
                "text-foreground",
                "transition-opacity hover:opacity-75",
                "focus-visible:outline-none",
                "focus-visible:ring-2 focus-visible:ring-ring",
                "focus-visible:ring-offset-4",
                className ?? "",
            ].join(" ")}
        >
            zyncode
        </Link>
    );
}