import Image from "next/image";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/Eyebrow";
import { Reveal } from "./ui/Reveal";
import { Counter } from "./ui/Counter";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32">
      <div className="grid-noise pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div
        className="pointer-events-none absolute left-1/2 top-[-260px] h-[640px] w-[640px] -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
        style={{ background: "radial-gradient(circle, #00d1f7 0%, transparent 70%)" }}
      />
      <Image
        src="/brand/logo-icon.png"
        alt=""
        width={520}
        height={575}
        aria-hidden
        className="pointer-events-none absolute -right-24 top-24 hidden w-[420px] opacity-[0.06] lg:block"
      />

      <Container className="relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <Reveal>
            <Eyebrow>Sistemas · Automações · Sites de Alta Conversão · Criativos</Eyebrow>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-8 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Já geramos mais de{" "}
              <span className="text-gradient">R$10 milhões</span> em resultado
              para nossos clientes.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted">
              A Lumen Web transforma processos manuais em um ecossistema de
              crescimento, com sistemas de atendimento, automação comercial e
              estratégia digital que trabalham por você, todos os dias.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <Button href="#cta">Quero meu diagnóstico gratuito</Button>
              <Button href="#como-trabalhamos" variant="secondary">
                Ver como funciona
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-16 flex flex-col items-center gap-4 border-t border-border pt-8 sm:flex-row sm:gap-10">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl font-semibold text-foreground">
                  <Counter to={10} prefix="R$" suffix="M+" />
                </span>
                <span className="text-sm text-muted">
                  gerados em resultado para clientes
                </span>
              </div>
              <div className="hidden h-8 w-px bg-border sm:block" />
              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl font-semibold text-foreground">
                  <Counter to={250} suffix="+" />
                </span>
                <span className="text-sm text-muted">
                  empresas atendidas ao redor do mundo
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
