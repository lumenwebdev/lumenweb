import { AlarmClockOff, Image as ImageIcon, UsersRound } from "lucide-react";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import type { Dictionary } from "../[lang]/dictionaries";

const ICONS = [AlarmClockOff, ImageIcon, UsersRound];

export function Problem({ dict }: { dict: Dictionary }) {
  const t = dict.problem;

  return (
    <section className="border-t border-border py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              {t.title}
            </h2>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-3">
          {t.items.map((text, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={text} delay={i * 0.08}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-background-elevated/50 p-6">
                  <Icon className="h-6 w-6 text-accent-text" strokeWidth={1.75} />
                  <p className="text-sm leading-relaxed text-muted">{text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.28}>
          <p className="mx-auto mt-14 max-w-xl text-center font-display text-2xl font-semibold text-balance">
            {t.closingPre}
            <span className="text-accent-text">{t.closingHighlight}</span>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
