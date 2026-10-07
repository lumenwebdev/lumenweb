export const SITE_URL = "https://lumenweb.site";
export const SITE_EMAIL = "contato@lumenweb.site";
export const SITE_INSTAGRAM_HANDLE = "@lumenwebco";
export const SITE_INSTAGRAM_URL = "https://instagram.com/lumenwebco";
export const SITE_FOUNDING_YEAR = 2024;

/** Feature flag: only turn on once real, authorized client logos exist. */
export const SHOW_CLIENT_LOGOS = false;

// --- Oferta PT (landing page de vendas para Portugal) ---
export const OFERTA_WHATSAPP_NUMBER = "351926485485";
export const OFERTA_WHATSAPP_URL = (text: string) =>
  `https://wa.me/${OFERTA_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
export const OFERTA_EMAIL = "contato@lumenweb.site";
export const OFERTA_PRICE_EUR = "249 €";
export const OFERTA_PRICE_EUR_ANCHOR = "499 €";

/** Meta Pixel ID for /oferta (public identifier, safe to ship client-side). */
export const OFERTA_META_PIXEL_ID = "1417378629892645";
