import { Check } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Container } from "../../components/ui/Container";
import { Eyebrow } from "../../components/ui/Eyebrow";
import { Reveal } from "../../components/ui/Reveal";
import { OFERTA_PRICE_EUR, OFERTA_WHATSAPP_URL } from "../../site-config";

const ITEMS = [
  "Design profissional e personalizado",
  "Site responsivo para telemóvel, tablet e computador",
  "Textos profissionais incluídos",
  "Botão de WhatsApp",
  "Formulário de contacto",
  "Google Maps",
  "SEO inicial",
  "Integração com redes sociais",
  "Publicação do site",
  "Suporte após a entrega",
];

export function Includes() {
  return (
    <section id="servicos" className="scroll-mt-24 border-t border-border bg-background-elevated/40 py-20 lg:py-[120px]">
      <Container maxW="max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>O que está incluído</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-6 font-display text-display-2 font-medium text-balance">
              Tudo o que precisa para começar a vender online.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Não precisa de contratar vários profissionais. Tratamos de
              tudo para colocar a sua empresa online.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-2">
          {ITEMS.map((item, i) => (
            <Reveal key={item} delay={(i % 2) * 0.06}>
              <div className="flex items-center gap-3 rounded-[20px] border border-border bg-background-elevated/60 px-5 py-4">
                <Check className="h-5 w-5 shrink-0 text-accent-text" strokeWidth={2} />
                <span className="text-base text-foreground">{item}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex justify-center">
            <Button
              href={OFERTA_WHATSAPP_URL(
                `Olá! Quero criar o meu site por ${OFERTA_PRICE_EUR}.`,
              )}
              trackingEvent="cta_click_includes"
            >
              Quero criar o meu site
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
