import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/Eyebrow";
import { Reveal } from "./ui/Reveal";
import type { Dictionary } from "../[lang]/dictionaries";

export function About({ dict }: { dict: Dictionary }) {
  const t = dict.about;

  return (
    <section id="sobre" className="scroll-mt-24 border-t border-border py-24 lg:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <Eyebrow>{t.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-6 font-display text-display-2 font-medium text-balance">
              {t.titlePre}
              <span className="text-accent-text">{t.titleHighlight}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              {t.description}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {t.pillars.map((pillar, i) => (
            <Reveal key={pillar} delay={0.1 + i * 0.08}>
              <div className="flex aspect-square flex-col justify-between rounded-2xl border border-border-strong bg-background-elevated/60 p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-accent/50">
                <span className="font-display text-2xl font-medium text-muted-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-lg font-medium text-foreground sm:text-xl">
                  {pillar}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
