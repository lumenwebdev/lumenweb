"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { useHasMounted } from "../../components/ui/useHasMounted";
import { trackEvent, withUtmContext } from "../../components/ui/trackEvent";
import { OFERTA_WHATSAPP_NUMBER } from "../../site-config";

const DEFAULT_MESSAGE = "Olá, vim do anúncio e quero mais informações!";

function buildWaUrl(message: string) {
  return `https://wa.me/${OFERTA_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function ObrigadoRedirect({ message, src }: { message?: string; src?: string }) {
  const baseMessage = message || DEFAULT_MESSAGE;
  // withUtmContext reads window.location, unavailable during SSR, so the
  // link starts plain and picks up UTM context once mounted (useHasMounted
  // flips after hydration, same pattern as useMediaQuery).
  const hasMounted = useHasMounted();
  const waUrl = buildWaUrl(hasMounted ? withUtmContext(baseMessage) : baseMessage);

  function handleOpenWhatsApp() {
    // Fires only on a real tap, not on page load: an automatic redirect
    // counted every visit (including ad-network prefetches and bounces) as
    // a Lead, and in-app browsers (Instagram/Facebook) often block a
    // programmatic redirect to an external app, so the handoff could
    // silently fail. A direct click fixes both.
    trackEvent(src || "whatsapp_lead");
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="grid-noise pointer-events-none fixed inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black,transparent)]" />

      <div className="relative flex flex-col items-center gap-6">
        <Image
          src="/brand/logo-icon.png"
          alt="Lumen Web"
          width={36}
          height={40}
          className="h-9 w-auto"
        />

        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
          <MessageCircle className="h-8 w-8 text-accent-text" strokeWidth={2} aria-hidden />
        </div>

        <h1 className="font-display text-display-3 font-medium text-balance">
          Obrigado!
        </h1>
        <p className="max-w-sm text-base leading-relaxed text-muted">
          Falta só um passo: toque no botão abaixo para continuar no WhatsApp.
        </p>

        <a
          href={waUrl}
          onClick={handleOpenWhatsApp}
          className="group relative mt-2 inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-accent px-8 py-4 text-base font-semibold text-on-accent shadow-[0_0_0_1px_rgba(0,194,236,0.35),0_20px_40px_-15px_rgba(0,194,236,0.45)] transition-all duration-200 hover:bg-accent-soft hover:-translate-y-0.5"
        >
          <MessageCircle className="h-5 w-5" strokeWidth={2.25} aria-hidden />
          Abrir WhatsApp
        </a>
      </div>
    </main>
  );
}
