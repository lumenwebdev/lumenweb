export const SITE_URL = "https://lumenweb.site";
export const SITE_EMAIL = "contato@lumenweb.site";
export const SITE_INSTAGRAM_HANDLE = "@lumenwebco";
export const SITE_INSTAGRAM_URL = "https://instagram.com/lumenwebco";
export const SITE_FOUNDING_YEAR = 2024;

/** Feature flag: only turn on once real, authorized client logos exist. */
export const SHOW_CLIENT_LOGOS = false;

// --- Oferta PT (landing page de vendas para Portugal) ---
// TODO: confirmar número real de WhatsApp em formato internacional (ex: 351912345678).
export const OFERTA_WHATSAPP_NUMBER = "351900000000";
export const OFERTA_WHATSAPP_URL = (text: string) =>
  `https://wa.me/${OFERTA_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
export const OFERTA_EMAIL = "contato@lumenweb.site";
export const OFERTA_PRICE_EUR = "249 €";
