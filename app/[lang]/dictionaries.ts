import "server-only";
import { notFound } from "next/navigation";

export { locales, defaultLocale, localeLabels, hasLocale } from "./locales";
export type { Locale } from "./locales";
import { hasLocale, type Locale } from "./locales";

export type Dictionary = {
  meta: { title: string; description: string };
  nav: {
    services: string;
    howWeWork: string;
    results: string;
    testimonials: string;
    about: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    titlePre: string;
    titleHighlight: string;
    titlePost: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    statGeneratedLabel: string;
    statCompaniesLabel: string;
  };
  problem: {
    title: string;
    items: string[];
    closingPre: string;
    closingHighlight: string;
  };
  positioning: {
    titlePre: string;
    titleHighlight: string;
    description: string;
    nodes: [string, string, string, string];
  };
  services: {
    eyebrow: string;
    title: string;
    items: { title: string; description: string }[];
  };
  howWeWork: {
    eyebrow: string;
    title: string;
    steps: { title: string; description: string }[];
  };
  proof: {
    statGeneratedLabel: string;
    statCompaniesLabel: string;
    description: string;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    placeholderQuote: string;
    placeholderName: string;
  };
  about: {
    eyebrow: string;
    titlePre: string;
    titleHighlight: string;
    description: string;
    pillars: [string, string, string, string];
  };
  finalCta: {
    title: string;
    subtitle: string;
    button: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
};

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  "pt-BR": () => import("./dictionaries/pt-BR").then((m) => m.default),
  en: () => import("./dictionaries/en").then((m) => m.default),
  es: () => import("./dictionaries/es").then((m) => m.default),
  "pt-PT": () => import("./dictionaries/pt-PT").then((m) => m.default),
};

export const getDictionary = async (locale: string) => {
  if (!hasLocale(locale)) notFound();
  return dictionaries[locale]();
};
