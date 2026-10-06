import { Container } from "../../components/ui/Container";
import { Eyebrow } from "../../components/ui/Eyebrow";
import { Reveal } from "../../components/ui/Reveal";

const STEPS = [
  {
    title: "Conversa de 15 minutos",
    description:
      "Por videochamada ou WhatsApp. Percebemos o seu negócio e o seu cliente.",
  },
  {
    title: "Nós escrevemos tudo",
    description:
      "Textos, estrutura e design. Só precisa de enviar o logótipo e fotografias.",
  },
  {
    title: "Revê e aprova",
    description:
      "Recebe o site para ver antes de ir para o ar, com ajustes incluídos.",
  },
  {
    title: "Site no ar",
    description:
      "Publicamos no seu domínio e deixamos tudo pronto para receber contactos.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="scroll-mt-24 border-t border-border py-20 lg:py-28"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>Como funciona</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-6 font-display text-display-2 font-medium text-balance">
              Do primeiro contacto ao site no ar, em 4 passos.
            </h2>
          </Reveal>
        </div>

        <div className="relative mx-auto mt-16 grid max-w-5xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <div className="flex flex-col gap-3">
                <span className="font-display text-2xl font-medium text-accent-text">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-medium">{step.title}</h3>
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
