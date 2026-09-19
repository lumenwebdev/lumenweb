import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/Eyebrow";
import { Reveal } from "./ui/Reveal";

const PILLARS = ["Estratégia", "Tecnologia", "Automação", "Criação"];

export function About() {
  return (
    <section id="sobre" className="scroll-mt-24 border-t border-border py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>Por que a Lumen</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Não vendemos entrega.{" "}
              <span className="text-accent">Vendemos resultado.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 text-lg leading-relaxed text-muted text-balance">
              Somos uma agência full-stack: estratégia, tecnologia, automação
              e criação sob o mesmo teto, organizadas como um único
              ecossistema. Isso significa que cada sistema que construímos
              para você já nasce conectado aos outros, e o resultado é
              mensurado, não prometido.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {PILLARS.map((pillar) => (
                <span
                  key={pillar}
                  className="rounded-full border border-border-strong bg-background-elevated/60 px-5 py-2 text-sm font-medium text-foreground"
                >
                  {pillar}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
