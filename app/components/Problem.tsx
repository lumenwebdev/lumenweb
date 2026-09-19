import { AlarmClockOff, Image as ImageIcon, UsersRound } from "lucide-react";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";

const ITEMS = [
  {
    icon: AlarmClockOff,
    text: "Lead que chega de madrugada e só recebe resposta dois dias depois, quando já fechou com o concorrente.",
  },
  {
    icon: ImageIcon,
    text: "Perfil bonito no Instagram, agenda vazia na prática.",
  },
  {
    icon: UsersRound,
    text: "Time comercial se virando sem script e sem processo, perdendo venda por insegurança, não por falta de interesse do cliente.",
  },
];

export function Problem() {
  return (
    <section className="border-t border-border py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Sua empresa trabalha duro. Seu marketing devia trabalhar mais
              duro ainda.
            </h2>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-3">
          {ITEMS.map((item, i) => (
            <Reveal key={item.text} delay={i * 0.08}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-background-elevated/50 p-6">
                <item.icon className="h-6 w-6 text-accent" strokeWidth={1.75} />
                <p className="text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.28}>
          <p className="mx-auto mt-14 max-w-xl text-center font-display text-2xl font-semibold text-balance">
            Isso não é falta de esforço.{" "}
            <span className="text-accent">É falta de sistema.</span>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
