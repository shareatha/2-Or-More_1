"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/shared/Button";
import { LogoFull } from "@/components/shared/Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-white/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "shadow-[0_2px_20px_rgba(0,0,0,0.08)]" : ""
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-3 sm:px-8 lg:px-12">
        <Link href="/" aria-label="2 OR MORE home" className="block h-16 shrink-0">
          <LogoFull fit="height" />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:text-gold-dark"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/#inquire" variant="primary" className="px-6 py-2.5 text-xs">
            Let&apos;s Plan It
          </Button>
        </div>

        <button
          className="text-ink md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-beige bg-white px-6 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-body text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:text-gold-dark"
              >
                {link.label}
              </Link>
            ))}
            <Button
              href="/#inquire"
              variant="primary"
              className="mt-2 w-full px-6 py-3 text-xs"
              onClick={() => setMobileOpen(false)}
            >
              Let&apos;s Plan It
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
