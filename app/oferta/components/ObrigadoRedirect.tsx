"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Loader2, MessageCircle } from "lucide-react";
import { useHasMounted } from "../../components/ui/useHasMounted";
import { trackEvent, withUtmContext } from "../../components/ui/trackEvent";
import { OFERTA_WHATSAPP_NUMBER } from "../../site-config";

const DEFAULT_MESSAGE = "Olá, vim do anúncio e quero mais informações!";
const REDIRECT_DELAY_MS = 1200;

function buildWaUrl(message: string) {
  return `https://wa.me/${OFERTA_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function ObrigadoRedirect({ message, src }: { message?: string; src?: string }) {
  const baseMessage = message || DEFAULT_MESSAGE;
  // withUtmContext reads window.location, unavailable during SSR, so the
  // fallback link starts plain and picks up UTM context once mounted
  // (useHasMounted flips after hydration, same pattern as useMediaQuery).
  const hasMounted = useHasMounted();
  const waUrl = buildWaUrl(hasMounted ? withUtmContext(baseMessage) : baseMessage);

  useEffect(() => {
    trackEvent(src || "whatsapp_lead");
    const url = buildWaUrl(withUtmContext(baseMessage));
    const timer = setTimeout(() => {
      window.location.replace(url);
    }, REDIRECT_DELAY_MS);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          Vamos redirecionar para o WhatsApp num instante.
        </p>

        <Loader2 className="h-5 w-5 animate-spin text-accent-text" aria-hidden />

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-sm font-medium text-accent-text underline underline-offset-4 transition-colors hover:text-foreground"
        >
          Clique aqui se não for redirecionado automaticamente
        </a>
      </div>
    </main>
  );
}
