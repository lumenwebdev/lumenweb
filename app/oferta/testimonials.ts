export type OfertaTestimonial = {
  /** Real quote or Google review text. Omit when using `image` instead. */
  quote?: string;
  /** Screenshot of a real WhatsApp conversation or Google review, as an alternative to `quote`. */
  image?: string;
  name: string;
  company: string;
  /** Scaffolding entry only, never shown in production. */
  placeholder?: boolean;
};

/**
 * Real, authorized testimonials for the Portugal offer page.
 * Empty (or every entry `placeholder: true`) means the social proof
 * section renders nothing in production: no invented quotes ship.
 */
export const ofertaTestimonials: OfertaTestimonial[] = [];

export function getRealOfertaTestimonials(): OfertaTestimonial[] {
  return ofertaTestimonials.filter((item) => !item.placeholder);
}
