"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { cn } from "./ui/cn";
import type { Locale } from "../[lang]/locales";
import type { Dictionary } from "../[lang]/dictionaries";

export function Header({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: dict.nav.services, href: "#servicos" },
    { label: dict.nav.howWeWork, href: "#como-trabalhamos" },
    { label: dict.nav.results, href: "#prova" },
    { label: dict.nav.testimonials, href: "#depoimentos" },
    { label: dict.nav.about, href: "#sobre" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-18 items-center justify-between py-4">
        <Logo lang={lang} />

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher lang={lang} />
          <Button href="#cta" variant="secondary" className="!px-5 !py-2.5 text-sm">
            {dict.nav.cta}
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher lang={lang} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-full border border-border-strong p-2 text-foreground"
            aria-label="Abrir menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-lg lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-muted transition-colors hover:bg-background-elevated hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button href="#cta" className="mt-2 w-full">
              {dict.nav.cta}
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
