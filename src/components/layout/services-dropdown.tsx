"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const serviceLinks = [
  {
    label: "Website Development",
    href: "/website-development-ahmedabad",
  },
  {
    label: "Custom Web Applications",
    href: "/custom-web-application-development",
  },
  {
    label: "Website Redesign",
    href: "/website-redesign",
  },
  {
    label: "Website Maintenance",
    href: "/website-maintenance",
  },
] as const;

export function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => setIsOpen((previous) => !previous)}
        className={[
          "flex items-center gap-1.5",
          "text-sm font-medium text-muted-foreground",
          "transition-colors hover:text-foreground",
          "focus-visible:outline-none",
          "focus-visible:ring-2 focus-visible:ring-ring",
          "focus-visible:ring-offset-4",
        ].join(" ")}
      >
        Services

        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          fill="none"
          className={[
            "size-3.5 transition-transform duration-200",
            isOpen ? "rotate-180" : "",
          ].join(" ")}
        >
          <path
            d="m4 6 4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-4 w-72 rounded-xl border border-border bg-background p-2 shadow-lg">
          {serviceLinks.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              onClick={() => setIsOpen(false)}
              className={[
                "block rounded-lg px-3 py-2.5",
                "text-sm text-foreground",
                "transition-colors hover:bg-muted",
                "focus-visible:outline-none",
                "focus-visible:ring-2 focus-visible:ring-ring",
              ].join(" ")}
            >
              {service.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}