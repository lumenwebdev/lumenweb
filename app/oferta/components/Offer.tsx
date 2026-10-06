import { Check } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Container } from "../../components/ui/Container";
import { Eyebrow } from "../../components/ui/Eyebrow";
import { Reveal } from "../../components/ui/Reveal";
import { OFERTA_PRICE_EUR, OFERTA_WHATSAPP_URL } from "../../site-config";

const INCLUDES = [
  "Site de uma página, completo, com até 6 secções",
  "Textos persuasivos escritos por nós, em português de Portugal",
  "Design adaptado a telemóvel, tablet e computador",
  "Botão de WhatsApp, formulário e mapa",
  "Configuração básica para o Google (SEO inicial)",
  "2 rondas de ajustes incluídas",
];

export function Offer() {
  return (
    <section id="oferta" className="scroll-mt-24 border-t border-border py-20 lg:py-28">
      <Container>
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
              contactado, num único pacote, sem mensalidades escondidas.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <div className="mx-auto mt-14 max-w-2xl overflow-hidden rounded-[2rem] border border-accent/30 bg-background-elevated glow-ring">
            <div className="p-8 sm:p-10">
              <ul className="flex flex-col gap-4">
                {INCLUDES.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent-text" strokeWidth={2} />
                    <span className="text-base text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-border pt-8 text-center">
                <p className="font-display text-5xl font-medium text-foreground sm:text-6xl">
                  {OFERTA_PRICE_EUR}
                </p>
                <p className="mt-2 text-sm text-muted">
                  Investimento único. Pagamento único, sem mensalidades.
                </p>
              </div>

              <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl bg-background-elevated-2 p-5 text-center text-sm text-muted">
                <p>
                  <span className="font-semibold text-foreground">Garantia de prazo:</span>{" "}
                  entrega em 7 dias úteis após recebermos os seus materiais
                  (logótipo, fotografias e respostas ao questionário).
                </p>
                <p>
                  <span className="font-semibold text-foreground">Domínio e alojamento:</span>{" "}
                  incluídos no primeiro ano.
                </p>
              </div>

              <div className="mt-8 flex justify-center">
                <Button
                  href={OFERTA_WHATSAPP_URL(
                    `Olá! Quero reservar o meu site por ${OFERTA_PRICE_EUR}.`,
                  )}
                  className="w-full sm:w-auto"
                >
                  Falar no WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
