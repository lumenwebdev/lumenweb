export const locales = ["pt-BR", "en", "es", "pt-PT"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt-BR";

export const localeLabels: Record<Locale, string> = {
  "pt-BR": "Português (BR)",
  en: "English",
  es: "Español",
  "pt-PT": "Português (PT)",
};

export const hasLocale = (locale: string): locale is Locale =>
  (locales as readonly string[]).includes(locale);
