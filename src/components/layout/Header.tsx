"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

import { BrandWordmark } from "./brand-wordmark";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/our-work" },
  { label: "About", href: "/about" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50",
        "transition-[background-color,border-color,backdrop-filter,box-shadow]",
        "duration-300",
        scrolled
          ? "border-b border-slate-200/70 bg-[#F7F6F2]/95 shadow-[0_4px_24px_rgba(16,24,40,0.035)] backdrop-blur-xl"
          : "border-b border-transparent bg-[#F7F6F2]/70 backdrop-blur-sm",
      ].join(" ")}
    >
      <div className="mx-auto flex h-19 max-w-360 items-center justify-between px-5 sm:px-8 lg:h-21 lg:px-14">
        {/* Brand */}
        <BrandWordmark />

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-10 md:flex lg:gap-12"
        >
          {navigation.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(`${item.href}/`));

            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={[
                  "relative py-2",
                  "text-[15px] font-medium tracking-[-0.015em] lg:text-base",
                  "transition-colors duration-200",
                  isActive
                    ? "text-[#101828]"
                    : "text-[#475467] hover:text-[#2563EB]",
                  "after:absolute after:inset-x-0 after:-bottom-0.5",
                  "after:h-[2px] after:origin-left after:rounded-full",
                  "after:transition-transform after:duration-200",
                  isActive
                    ? "after:scale-x-100 after:bg-[#2563EB]"
                    : "after:scale-x-0 after:bg-[#2563EB] hover:after:scale-x-100",
                  "focus-visible:outline-none focus-visible:ring-2",
                  "focus-visible:ring-[#2563EB] focus-visible:ring-offset-4",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className={[
              "group inline-flex min-h-11 items-center justify-center gap-2",
              "rounded-full bg-brand px-5 py-2.5",
              "text-sm font-medium text-white",
              "transition-all duration-200",
              "hover:-translate-y-0.5 hover:bg-[#1D4ED8]",
              "hover:shadow-[0_6px_18px_rgba(37,99,235,0.18)]",
              "focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-[#2563EB] focus-visible:ring-offset-4",
              "lg:px-6 lg:text-[15px]",
            ].join(" ")}
          >
            Let&apos;s talk
            <ArrowUpRight
              size={16}
              strokeWidth={1.8}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className={[
            "relative z-60 inline-flex size-10 items-center justify-center",
            "rounded-full border border-slate-200/90 bg-white/60",
            "text-ink transition-colors hover:bg-white",
            "focus-visible:outline-none focus-visible:ring-2",
            "focus-visible:ring-[#2563EB] focus-visible:ring-offset-2",
            "md:hidden",
          ].join(" ")}
        >
          {menuOpen ? (
            <X size={20} strokeWidth={1.7} />
          ) : (
            <Menu size={20} strokeWidth={1.7} />
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        className={[
          "absolute inset-x-0 top-full md:hidden",
          "border-b border-slate-200/80 bg-[#F7F6F2]",
          "shadow-[0_16px_32px_rgba(16,24,40,0.07)]",
          "transition-[opacity,transform,visibility] duration-200",
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0",
        ].join(" ")}
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto flex max-w-360 flex-col px-5 pb-6 pt-3 sm:px-8"
        >
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
              className={[
                "border-b border-slate-200/80 py-4",
                "text-base font-medium tracking-[-0.02em]",
                "text-ink transition-colors hover:text-brand",
                "focus-visible:outline-none focus-visible:ring-2",
                "focus-visible:ring-inset focus-visible:ring-[#2563EB]",
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            tabIndex={menuOpen ? 0 : -1}
            onClick={() => setMenuOpen(false)}
            className={[
              "mt-5 inline-flex min-h-12 items-center justify-center gap-2",
              "rounded-full bg-brand px-5 py-3",
              "text-sm font-medium text-white",
              "transition-colors hover:bg-[#1D4ED8]",
              "focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-[#2563EB] focus-visible:ring-offset-2",
            ].join(" ")}
          >
            Let&apos;s talk
            <ArrowUpRight size={17} strokeWidth={1.8} />
          </Link>
        </nav>
      </div>
    </header>
  );
}