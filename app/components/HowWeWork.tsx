import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/Eyebrow";
import { Reveal } from "./ui/Reveal";

const STEPS = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Mapeamos onde sua empresa está deixando dinheiro na mesa, antes de propor qualquer solução.",
  },
  {
    number: "02",
    title: "Implementação",
    description:
      "Colocamos presença, automação, comercial e aquisição para rodar como um sistema único.",
  },
  {
    number: "03",
    title: "Otimização contínua",
    description:
      "Acompanhamos o resultado semana a semana e ajustamos o que não está performando.",
  },
];

export function HowWeWork() {
  return (
    <section
      id="como-trabalhamos"
      className="scroll-mt-24 border-t border-border py-24 lg:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>Como trabalhamos</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Três etapas. Nenhum achismo.
            </h2>
          </Reveal>
        </div>

        <div className="relative mx-auto mt-16 grid max-w-5xl gap-10 sm:grid-cols-3">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-border sm:block" />
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.1}>
              <div className="relative flex flex-col gap-4">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-accent/50 bg-background font-display text-sm font-semibold text-accent">
                  {step.number}
                </div>
                <h3 className="font-display text-xl font-semibold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
