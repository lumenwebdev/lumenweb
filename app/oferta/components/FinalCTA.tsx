import { MessageCircle } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Container } from "../../components/ui/Container";
import { Reveal } from "../../components/ui/Reveal";
import { WhatsAppLink } from "../../components/ui/WhatsAppLink";
import {
  OFERTA_PRICE_EUR,
  OFERTA_PRICE_EUR_ANCHOR,
  OFERTA_WHATSAPP_URL,
} from "../../site-config";

export function FinalCTA() {
  return (
    <section className="border-t border-border bg-background-elevated/60 py-20 lg:py-[120px]">
      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[140px]"
          style={{ background: "radial-gradient(circle, #00d1f7 0%, transparent 70%)" }}
        />

        <Container maxW="max-w-7xl" className="relative text-center">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-display text-display-1 font-medium text-balance">
              Pronto para ter um site profissional para a sua empresa?
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mx-auto mt-6 max-w-lg text-balance text-lg leading-relaxed text-muted">
              Comece hoje e tenha o seu site pronto em até 7 dias.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-8 flex flex-wrap items-end justify-center gap-x-4 gap-y-1">
              <span className="text-base text-muted line-through decoration-muted-2">
                De {OFERTA_PRICE_EUR_ANCHOR}
              </span>
              <span className="font-display text-5xl font-bold leading-none text-foreground sm:text-6xl">
                Por {OFERTA_PRICE_EUR}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted">
              Pagamento único <span aria-hidden>•</span> Sem mensalidade
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-col items-center gap-4">
              <Button
                href={OFERTA_WHATSAPP_URL(
                  `Olá! Quero reservar o meu site por ${OFERTA_PRICE_EUR}.`,
                )}
                trackingEvent="cta_click_final"
                className="!px-8 !py-4 text-base"
              >
                Quero o meu site por {OFERTA_PRICE_EUR}
              </Button>
              <WhatsAppLink
                message="Olá! Vi a oferta de criação de sites por 249 € e gostaria de saber mais."
                trackingEvent="whatsapp_click_final_micro"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-text transition-colors hover:text-foreground"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={2} aria-hidden />
                Fale connosco pelo WhatsApp
              </WhatsAppLink>
            </div>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
