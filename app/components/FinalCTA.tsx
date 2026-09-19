import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";

export function FinalCTA() {
  return (
    <section id="cta" className="scroll-mt-24 border-t border-border py-24 lg:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-background-elevated/60 px-8 py-16 text-center sm:px-16 sm:py-20">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[130px]"
            style={{ background: "radial-gradient(circle, #00d1f7 0%, transparent 70%)" }}
          />

          <Reveal>
            <h2 className="relative font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              Sua empresa já podia estar gerando mais.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="relative mx-auto mt-5 max-w-xl text-balance text-lg leading-relaxed text-muted">
              Vamos conversar sobre o que está travando seu crescimento
              agora?
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="relative mt-10">
              <Button href="mailto:contato@lumenweb.site">
                Quero meu diagnóstico gratuito
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
