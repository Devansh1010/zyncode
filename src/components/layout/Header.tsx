
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import PrimaryBtn from "./PrimaryBtn";

const navigation = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/our-work" },
  { label: "About", href: "/about" },
  // { label: "Insights", href: "/insights" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${scrolled
          ? "border-b border-slate-200/70 bg-[#F7F6F2]/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
        }`}
    >
      <div className="mx-auto flex h-19 max-w-360 items-center justify-between px-5 sm:px-8 lg:px-14">
        <Link
          href="/"
          aria-label="Zyncode home"
          className="relative z-10 text-[25px] font-bold tracking-[-1.5px] text-ink"
        >
          zyncode<span className="text-brand">.</span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-9 md:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[13px] font-medium text-[#475467] transition-colors hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-full bg-ink px-5 py-3 text-[12px] font-semibold text-white transition-colors hover:bg-brand sm:inline-flex"
        >
          Discuss your project
          <ArrowUpRight size={15} aria-hidden="true" />
        </Link>

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="relative z-10 inline-flex size-10 items-center justify-center rounded-full border border-slate-200 text-ink md:hidden"
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full border-b border-slate-200 bg-[#F7F6F2] px-5 pb-6 pt-3 shadow-lg md:hidden"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-slate-200/80 py-4 text-base font-medium text-ink"
              >
                {item.label}
              </Link>
            ))}

            <PrimaryBtn />
          </nav>
        </div>
      )}
    </header>
  );
}