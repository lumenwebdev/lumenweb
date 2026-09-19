import { Headset, Megaphone, Sparkles, Target } from "lucide-react";
import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/Eyebrow";
import { Reveal } from "./ui/Reveal";
import type { Dictionary } from "../[lang]/dictionaries";

const ICONS = [Sparkles, Headset, Target, Megaphone];

export function Services({ dict }: { dict: Dictionary }) {
  const t = dict.services;

  return (
    <section id="servicos" className="scroll-mt-24 border-t border-border py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>{t.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              {t.title}
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {t.items.map((service, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={service.title} delay={i * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-background-elevated/50 p-8 transition-colors duration-300 hover:border-accent/40">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border-strong bg-background text-accent-text transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <span className="font-display text-sm font-semibold text-muted-2">
                      {String(i + 1).padStart(2, "0")}
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
            );
          })}
        </div>
      </Container>
    </section>
  );
}
