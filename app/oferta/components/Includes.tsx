import { Check } from "lucide-react";
import { Container } from "../../components/ui/Container";
import { Eyebrow } from "../../components/ui/Eyebrow";
import { Reveal } from "../../components/ui/Reveal";

const ITEMS = [
  "Site completo",
  "Design premium",
  "Textos escritos por nós",
  "WhatsApp integrado",
  "Formulário de contacto",
  "Google Maps",
  "SEO inicial",
  "Responsivo",
  "Suporte pós-entrega",
];

export function Includes() {
  return (
    <section id="servicos" className="scroll-mt-24 border-t border-border bg-background-elevated/40 py-20 lg:py-[120px]">
      <Container maxW="max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>O que recebe</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-6 font-display text-display-2 font-medium text-balance">
              Tudo o que precisa para começar a receber mais contactos.
            </h2>
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
      </Container>
    </section>
  );
}
