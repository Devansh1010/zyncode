import type { HTMLAttributes } from "react";

type SiteContainerProps = HTMLAttributes<HTMLDivElement>;

export function SiteContainer({
  className,
  children,
  ...props
}: SiteContainerProps) {
  return (
    <div
      className={[
        "mx-auto w-full max-w-7xl",
        "px-4 sm:px-6 lg:px-8",
        className ?? "",
      ].join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}