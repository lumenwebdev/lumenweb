import { Quote } from "lucide-react";
import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/Eyebrow";
import { Reveal } from "./ui/Reveal";
import type { Dictionary } from "../[lang]/dictionaries";

// TODO: substituir os 3 placeholders por depoimentos reais (citação, nome e empresa) antes de publicar.
const PLACEHOLDERS = [1, 2, 3];

export function Testimonials({ dict }: { dict: Dictionary }) {
  const t = dict.testimonials;

  return (
    <section
      id="depoimentos"
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

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {PLACEHOLDERS.map((n, i) => (
            <Reveal key={n} delay={i * 0.08}>
              <div className="flex h-full flex-col gap-6 rounded-2xl border border-dashed border-border-strong bg-background-elevated/30 p-7">
                <Quote className="h-6 w-6 text-muted-2" strokeWidth={1.5} />
                <p className="flex-1 text-sm italic leading-relaxed text-muted-2">
                  {t.placeholderQuote}
                </p>
                <div className="border-t border-border pt-4 text-xs font-medium uppercase tracking-wide text-muted-2">
                  {t.placeholderName}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
