import { MessageCircle, Smartphone, Zap } from "lucide-react";
import { Container } from "../../components/ui/Container";
import { Reveal } from "../../components/ui/Reveal";

const BENEFITS = [
  { icon: Zap, label: "Entrega em até 7 dias" },
  { icon: Smartphone, label: "100% adaptado a telemóvel" },
  { icon: MessageCircle, label: "WhatsApp integrado" },
  { icon: null, label: "Feito para empresas em Portugal", flag: "🇵🇹" },
];

export function BenefitsBar() {
  return (
    <section className="border-t border-border py-8">
      <Container maxW="max-w-7xl">
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {BENEFITS.map((item) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-2 text-sm font-medium text-muted sm:text-base"
              >
                {item.icon ? (
                  <item.icon className="h-4 w-4 shrink-0 text-accent-text" strokeWidth={2} aria-hidden />
                ) : (
                  <span aria-hidden>{item.flag}</span>
                )}
                {item.label}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
