"use client";

import Link from "next/link";
import { buildObrigadoUrl } from "./trackEvent";
import { OFERTA_WHATSAPP_URL } from "../../site-config";

/**
 * Inline WhatsApp text-link (icon + text styling varies per call site,
 * unlike the pill-shaped Button). Same /oferta/obrigado redirect as
 * Button's WhatsApp branch, so every WhatsApp entry point on the page
 * reports its Lead event the same, reliable way.
 */
export function WhatsAppLink({
  message,
  trackingEvent,
  className,
  children,
}: {
  message: string;
  trackingEvent?: string;
  className?: string;
  children: React.ReactNode;
}) {
  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    window.open(buildObrigadoUrl(message, trackingEvent), "_blank", "noopener,noreferrer");
  }

  return (
    <Link
      href={OFERTA_WHATSAPP_URL(message)}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </Link>
  );
}
