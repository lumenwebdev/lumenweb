import { Gauge, MessageCircle, MousePointerClick, Workflow } from "lucide-react";
import { Container } from "../../components/ui/Container";
import { Eyebrow } from "../../components/ui/Eyebrow";
import { Reveal } from "../../components/ui/Reveal";

const POINTS = [
  {
    icon: MousePointerClick,
    title: "Design pensado para gerar contactos",
  },
  {
    icon: Gauge,
    title: "Sites rápidos e preparados para telemóvel",
  },
  {
    icon: Workflow,
    title: "Processo simples, sem complicações",
  },
  {
    icon: MessageCircle,
    title: "Atendimento direto pelo WhatsApp",
  },
];

export function WhyChooseUs() {
  return (
    <section className="border-t border-border py-20 lg:py-[120px]">
      <Container maxW="max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>Porque escolher</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-6 font-display text-display-2 font-medium text-balance">
              Porque escolher a LumenWeb?
            </h2>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-2">
          {POINTS.map((point, i) => (
            <Reveal key={point.title} delay={(i % 2) * 0.08}>
              <div className="flex h-full items-start gap-4 rounded-[20px] border border-border bg-background-elevated/50 p-6">
                <point.icon className="h-6 w-6 shrink-0 text-accent-text" strokeWidth={1.75} />
                <h3 className="font-display text-base font-medium text-balance sm:text-lg">
                  {point.title}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
