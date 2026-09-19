import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { Counter } from "./ui/Counter";

export function Proof() {
  return (
    <section id="prova" className="scroll-mt-24 border-t border-border py-24 lg:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-background-elevated/50 px-6 py-16 text-center sm:px-16">
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[110px]"
            style={{ background: "radial-gradient(circle, #00d1f7 0%, transparent 70%)" }}
          />

          <div className="relative grid gap-10 sm:grid-cols-2 sm:divide-x sm:divide-border">
            <Reveal className="min-w-0">
              <div className="flex min-w-0 flex-col items-center gap-2">
                <span className="font-display text-3xl font-semibold text-gradient sm:text-5xl lg:text-6xl">
                  <Counter to={10000000} prefix="R$" />+
                </span>
                <span className="text-sm text-muted">gerados para clientes</span>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="min-w-0">
              <div className="flex min-w-0 flex-col items-center gap-2">
                <span className="font-display text-3xl font-semibold text-gradient sm:text-5xl lg:text-6xl">
                  <Counter to={250} suffix="+" />
                </span>
                <span className="text-sm text-muted">
                  empresas atendidas ao redor do mundo
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <p className="relative mx-auto mt-12 max-w-xl text-balance text-lg leading-relaxed text-muted">
              De clínicas a e-commerces, ajudamos negócios de portes
              diferentes a parar de perder venda por falta de processo.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
