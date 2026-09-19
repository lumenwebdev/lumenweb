import type { Locale } from "./locales";

export type Testimonial = {
  quote: string;
  name: string;
  company: string;
  /** Scaffolding entry only, never shown in production. */
  placeholder?: boolean;
};

/**
 * Real, authorized client testimonials go here, per locale.
 * An empty array (or an array where every entry has `placeholder: true`)
 * means the Testimonials section renders nothing in production, so we
 * never ship invented quotes.
 */
export const testimonials: Record<Locale, Testimonial[]> = {
  "pt-BR": [],
  en: [],
  es: [],
  "pt-PT": [],
};

export function getRealTestimonials(locale: Locale): Testimonial[] {
  return testimonials[locale].filter((item) => !item.placeholder);
}
