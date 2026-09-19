import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/Eyebrow";
import { Reveal } from "./ui/Reveal";
import type { Dictionary } from "../[lang]/dictionaries";

export function HowWeWork({ dict }: { dict: Dictionary }) {
  const t = dict.howWeWork;

  return (
    <section
      id="como-trabalhamos"
      className="scroll-mt-24 border-t border-border py-24 lg:py-32"
    >
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

        <div className="relative mx-auto mt-16 grid max-w-5xl gap-10 sm:grid-cols-3">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-border sm:block" />
          {t.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <div className="relative flex flex-col gap-4">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-accent/50 bg-background font-display text-sm font-semibold text-accent-text">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-xl font-semibold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
