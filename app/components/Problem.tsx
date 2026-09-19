import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import type { Dictionary } from "../[lang]/dictionaries";

export function Problem({ dict }: { dict: Dictionary }) {
  const t = dict.problem;

  return (
    <section className="border-t border-border py-24 lg:py-40">
      <Container>
        <Reveal>
          <h2 className="max-w-4xl font-display text-display-2 font-medium text-balance">
            {t.title}
          </h2>
        </Reveal>

        <div className="mt-16 border-t border-border lg:mt-24">
          {t.items.map((text, i) => (
            <Reveal key={text}>
              <div className="flex gap-6 border-b border-border py-8 sm:gap-10 sm:py-10">
                <span className="font-display text-2xl font-medium text-muted-2 sm:text-3xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="max-w-3xl text-xl leading-snug text-balance text-foreground sm:text-2xl lg:text-3xl">
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-16 max-w-3xl font-display text-display-3 font-medium text-balance lg:mt-24">
            {t.closingPre}
            <span className="text-accent-text">{t.closingHighlight}</span>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
