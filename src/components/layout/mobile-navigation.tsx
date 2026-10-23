"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

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

const studioLinks = [
  { label: "Our Work", href: "/our-work" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
] as const;

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function closeMenu() {
    setIsOpen(false);
  }

  const linkClassName =
    "flex min-h-11 items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <div ref={menuRef} className="relative md:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-panel"
        onClick={() => setIsOpen((previous) => !previous)}
        className="inline-flex size-11 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {isOpen ? (
          <X aria-hidden="true" className="size-5" />
        ) : (
          <Menu aria-hidden="true" className="size-5" />
        )}
      </button>

      {isOpen && (
        <nav
          id="mobile-navigation-panel"
          aria-label="Mobile navigation"
          className="absolute right-0 top-full z-50 mt-3 max-h-[min(75vh,36rem)] w-[min(22rem,calc(100vw-2rem))] overflow-y-auto rounded-2xl border border-border bg-background p-4 shadow-xl"
        >
          <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            Services
          </p>

          <div className="space-y-1">
            {serviceLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={linkClassName}
              >
                {item.label}
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 text-muted-foreground"
                />
              </Link>
            ))}
          </div>

          <div className="my-4 border-t border-border" />

          <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            Studio
          </p>

          <div className="space-y-1">
            {studioLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={linkClassName}
              >
                {item.label}
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 text-muted-foreground"
                />
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            onClick={closeMenu}
            className="mt-4 flex min-h-12 items-center justify-between rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Let&apos;s Talk
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </nav>
      )}
    </div>
  );
}
