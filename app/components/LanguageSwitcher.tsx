"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Globe, ChevronDown } from "lucide-react";
import { locales, localeLabels, type Locale } from "../[lang]/locales";
import { cn } from "./ui/cn";

const SHORT_LABEL: Record<Locale, string> = {
  "pt-BR": "PT-BR",
  en: "EN",
  es: "ES",
  "pt-PT": "PT-PT",
};

export function LanguageSwitcher({ lang }: { lang: Locale }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 rounded-full border border-border-strong px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:border-accent/50"
        aria-label="Selecionar idioma"
        aria-expanded={open}
      >
        <Globe className="h-3.5 w-3.5" strokeWidth={1.75} />
        {SHORT_LABEL[lang]}
        <ChevronDown className="h-3 w-3" strokeWidth={2} />
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-xl border border-border-strong bg-background shadow-lg">
          {locales.map((locale) => (
            <Link
              key={locale}
              href={`/${locale}`}
              onClick={() => setOpen(false)}
              className={cn(
                "block px-4 py-2.5 text-sm transition-colors hover:bg-background-elevated",
                locale === lang
                  ? "font-semibold text-accent-text"
                  : "text-foreground",
              )}
            >
              {localeLabels[locale]}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
