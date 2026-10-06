import { Clock, Image as ImageIcon, ReceiptText } from "lucide-react";
import { Container } from "../../components/ui/Container";
import { Eyebrow } from "../../components/ui/Eyebrow";
import { Reveal } from "../../components/ui/Reveal";

const ITEMS = [
  {
    icon: ImageIcon,
    title: "Só tem Instagram",
    description:
      "As redes sociais não aparecem bem no Google e não passam a confiança de um site próprio.",
  },
  {
    icon: Clock,
    title: "Tem um site antigo",
    description:
      "É lento, difícil de ler no telemóvel e não tem um caminho claro para o cliente pedir orçamento.",
  },
  {
    icon: ReceiptText,
    title: "Orçamentos caros",
    description:
      "Já pediu preços e recebeu valores altos, prazos longos e muita conversa técnica.",
  },
];

export function Problem() {
  return (
    <section className="border-t border-border py-20 lg:py-[120px]">
      <Container maxW="max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>O Problema</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-6 font-display text-display-2 font-medium text-balance">
              Se o cliente não o encontra online, encontra o concorrente.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Hoje, antes de ligar ou visitar, quase toda a gente pesquisa
              primeiro. Um negócio sem site, ou com um site fraco, perde
              clientes sem sequer saber.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-3">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="flex h-full flex-col gap-4 rounded-[20px] border border-border bg-background-elevated/50 p-6 transition-colors hover:border-border-strong">
                <item.icon className="h-6 w-6 text-accent-text" strokeWidth={1.75} />
                <h3 className="font-display text-lg font-medium">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
