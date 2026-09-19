import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/Eyebrow";
import { Reveal } from "./ui/Reveal";
import type { Dictionary } from "../[lang]/dictionaries";

export function About({ dict }: { dict: Dictionary }) {
  const t = dict.about;

  return (
    <section id="sobre" className="scroll-mt-24 border-t border-border py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>{t.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              {t.titlePre}
              <span className="text-accent-text">{t.titleHighlight}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 text-lg leading-relaxed text-muted text-balance">
              {t.description}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {t.pillars.map((pillar) => (
                <span
                  key={pillar}
                  className="rounded-full border border-border-strong bg-background-elevated/60 px-5 py-2 text-sm font-medium text-foreground"
                >
                  {pillar}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
