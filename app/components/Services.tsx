import { Headset, Megaphone, Sparkles, Target } from "lucide-react";
import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/Eyebrow";
import { Reveal } from "./ui/Reveal";

const SERVICES = [
  {
    number: "01",
    icon: Sparkles,
    title: "Presença que vende antes da primeira conversa",
    description:
      "Google Meu Negócio, site e identidade visual construídos para gerar confiança no primeiro segundo, e um Instagram que mantém sua marca na cabeça de quem já te conhece.",
  },
  {
    number: "02",
    icon: Headset,
    title: "Um atendimento que nunca dorme",
    description:
      "Um sistema de atendimento que responde, qualifica e agenda por você, de madrugada, fim de semana ou horário de almoço. Todo lead com resposta imediata, todo agendamento sem esforço manual.",
  },
  {
    number: "03",
    icon: Target,
    title: "Um processo comercial que fecha, não que espera",
    description:
      "Scripts, tratamento de objeção e um CRM que organiza cada oportunidade, para sua equipe vender com método, não na base da sorte.",
  },
  {
    number: "04",
    icon: Megaphone,
    title: "Um sistema de aquisição que nunca para",
    description:
      "Tráfego pago em Meta e Google guiado por diagnóstico real do seu negócio, com relatório semanal mostrando exatamente quanto voltou de cada real investido.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="scroll-mt-24 border-t border-border py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>Serviços</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Quatro frentes de resultado
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-background-elevated/50 p-8 transition-colors duration-300 hover:border-accent/40">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border-strong bg-background text-accent transition-transform duration-300 group-hover:scale-105">
                    <service.icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <span className="font-display text-sm font-semibold text-muted-2">
                    {service.number}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-balance">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
