import { Check } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Container } from "../../components/ui/Container";
import { Eyebrow } from "../../components/ui/Eyebrow";
import { Reveal } from "../../components/ui/Reveal";
import { OFERTA_PRICE_EUR, OFERTA_PRICE_EUR_ANCHOR, OFERTA_WHATSAPP_URL } from "../../site-config";

const INCLUDES = [
  "Site completo até 6 secções",
  "Textos escritos em português de Portugal",
  "Design responsivo",
  "WhatsApp integrado",
  "Formulário",
  "Mapa",
  "SEO inicial",
  "2 rondas de ajustes",
];

export function Offer() {
  return (
    <section id="oferta" className="scroll-mt-24 border-t border-border py-20 lg:py-[120px]">
      <Container maxW="max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>Oferta</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-6 font-display text-display-2 font-medium text-balance">
              Site Pronto em 7 Dias
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Tudo o que um pequeno negócio precisa para ser encontrado e
              contactado.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <div className="mx-auto mt-14 max-w-2xl overflow-hidden rounded-[20px] border border-accent/30 bg-background-elevated glow-ring">
            <div className="p-8 sm:p-10">
              <ul className="grid gap-4 sm:grid-cols-2">
                {INCLUDES.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent-text" strokeWidth={2} />
                    <span className="text-base text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-border pt-8 text-center">
                <p className="text-sm text-muted line-through decoration-muted-2">
                  De {OFERTA_PRICE_EUR_ANCHOR}
                </p>
                <p className="mt-1 text-sm text-muted">Por apenas</p>
                <p className="mt-1 font-display text-5xl font-medium text-foreground sm:text-6xl">
                  {OFERTA_PRICE_EUR}
                </p>
                <p className="mt-2 text-sm text-muted">
                  Pagamento único, sem mensalidades.
                </p>
              </div>

              <p className="mt-8 rounded-2xl bg-background-elevated-2 p-5 text-center text-sm text-muted">
                <span className="font-semibold text-foreground">Garantia:</span>{" "}
                entrega em até 7 dias úteis após recebermos os seus materiais.
              </p>

              <div className="mt-8 flex justify-center">
                <Button
                  href={OFERTA_WHATSAPP_URL(
                    `Olá! Quero reservar o meu site por ${OFERTA_PRICE_EUR}.`,
                  )}
                  className="w-full sm:w-auto"
                >
                  Reservar o meu site
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
