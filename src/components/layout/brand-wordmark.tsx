import Link from "next/link";

type BrandWordmarkProps = {
  className?: string;
  onClick?: () => void;
};

export function BrandWordmark({
  className,
  onClick,
}: BrandWordmarkProps) {
  return (
    <Link
      href="/"
      aria-label="Zyncode home"
      onClick={onClick}
      className={[
        "group inline-flex w-fit items-center",
        "rounded-sm",
        "text-[25px] font-semibold leading-none",
        "tracking-[-0.065em]",
        "text-ink",
        "transition-colors duration-200",
        "hover:text-brand",
        "focus-visible:outline-none",
        "focus-visible:ring-2 focus-visible:ring-[#2563EB]",
        "focus-visible:ring-offset-4",
        "lg:text-[28px]",
        className ?? "",
      ].join(" ")}
    >
      <span>zyncode</span>
    </Link>
  );
}