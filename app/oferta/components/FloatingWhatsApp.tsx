"use client";

import { MessageCircle } from "lucide-react";
import { trackEvent, withUtmContext } from "../../components/ui/trackEvent";
import { OFERTA_WHATSAPP_NUMBER } from "../../site-config";

const MESSAGE = "Olá, vim do anúncio e quero mais informações!";

export function FloatingWhatsApp() {
  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    trackEvent("whatsapp_float_click");
    const url = `https://wa.me/${OFERTA_WHATSAPP_NUMBER}?text=${encodeURIComponent(withUtmContext(MESSAGE))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <a
      href={`https://wa.me/${OFERTA_WHATSAPP_NUMBER}`}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar connosco pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded-full bg-accent py-3.5 pl-3.5 pr-3.5 text-on-accent shadow-[0_10px_40px_-10px_rgba(0,209,247,0.6)] transition-transform duration-200 hover:-translate-y-0.5 sm:bottom-6 sm:right-6 sm:pr-5"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-accent opacity-40" aria-hidden />
      <MessageCircle className="h-6 w-6 shrink-0" strokeWidth={2} aria-hidden />
      <span className="hidden text-sm font-semibold sm:inline-block">
        Falar connosco
      </span>
    </a>
  );
}
