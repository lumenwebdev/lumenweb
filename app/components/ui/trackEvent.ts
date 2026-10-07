declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Pushes a conversion event to GTM's dataLayer (if present) and, since every
 * current call site on /oferta represents a WhatsApp contact, also reports
 * a Meta Pixel "Lead" event (if the pixel is loaded). No-op where neither
 * is present, so this is safe to call unconditionally.
 */
export function trackEvent(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...params });
  } catch {
    // analytics must never break navigation
  }
  try {
    window.fbq?.("track", "Lead", {
      value: 249,
      currency: "EUR",
      content_name: event,
      ...params,
    });
  } catch {
    // analytics must never break navigation
  }
}

/** Reads utm_* params from the current URL, if any. */
export function getUtmParams(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  for (const [key, value] of params.entries()) {
    if (key.startsWith("utm_")) utm[key] = value;
  }
  return utm;
}

/** Appends UTM context to a WhatsApp message so the team sees the traffic source. */
export function withUtmContext(message: string): string {
  const utm = getUtmParams();
  const keys = Object.keys(utm);
  if (keys.length === 0) return message;
  const ref = keys.map((k) => `${k}=${utm[k]}`).join("&");
  return `${message}\n\n(ref: ${ref})`;
}
