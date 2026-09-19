import Image from "next/image";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";

const NODES = ["Presença", "Atendimento", "Processo comercial", "Aquisição"];

export function Positioning() {
  return (
    <section className="border-t border-border py-24 lg:py-32">
      <Container className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <Reveal>
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Por isso não vendemos serviços soltos.{" "}
              <span className="text-accent">Construímos um ecossistema.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Cada entrega existe para resolver um problema específico do seu
              crescimento: presença, atendimento, processo comercial e
              aquisição, funcionando juntos, não em silos separados.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-border" />
            <div className="absolute inset-10 rounded-full border border-border" />
            <div
              className="absolute inset-0 rounded-full opacity-50 blur-3xl"
              style={{ background: "radial-gradient(circle, #00d1f7 0%, transparent 65%)" }}
            />

            <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-2xl border border-accent/40 bg-background-elevated glow-ring">
              <Image
                src="/brand/logo-icon.png"
                alt="Lumen Web"
                width={40}
                height={44}
                className="h-10 w-auto"
              />
            </div>

            {NODES.map((node, i) => {
              const angle = (i * 360) / NODES.length - 45;
              const rad = (angle * Math.PI) / 180;
              const radius = 44;
              const x = 50 + radius * Math.cos(rad);
              const y = 50 + radius * Math.sin(rad);
              return (
                <div
                  key={node}
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border-strong bg-background-elevated px-4 py-2 text-xs font-medium text-foreground shadow-lg"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  {node}
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
