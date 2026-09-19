"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-border bg-background/85 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-18 items-center justify-between py-4">
        <Logo lang={lang} className="relative z-10" />

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-sm text-sm font-medium text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher lang={lang} label={dict.nav.selectLanguage} />
          <Button href="#cta" variant="secondary" className="!px-5 !py-2.5 text-sm">
            {dict.nav.cta}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative z-10 inline-flex items-center justify-center rounded-full border border-border-strong p-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:hidden"
          aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-0 z-0 flex h-dvh flex-col justify-between bg-background px-6 pb-8 pt-28 lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 + i * 0.05 }}
                  className="border-b border-border py-4 font-display text-3xl font-semibold tracking-tight text-foreground focus-visible:outline-none focus-visible:text-accent-text"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="flex flex-col gap-4">
              <LanguageSwitcher lang={lang} label={dict.nav.selectLanguage} />
              <Button href="#cta" onClick={() => setOpen(false)} className="w-full">
                {dict.nav.cta}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
