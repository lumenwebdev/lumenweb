import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { Counter } from "./ui/Counter";
import { numberLocale } from "./ui/numberLocale";
import type { Dictionary } from "../[lang]/dictionaries";
import type { Locale } from "../[lang]/locales";

export function Proof({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const t = dict.proof;
  const locale = numberLocale[lang];

  return (
    <section
      id="prova"
      className="section-dark scroll-mt-24 border-t border-border bg-background py-24 text-foreground lg:py-40"
    >
      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[130px]"
          style={{ background: "radial-gradient(circle, #00d1f7 0%, transparent 70%)" }}
        />

        <Container className="relative text-center">
          <div className="grid gap-12 sm:grid-cols-2 sm:divide-x sm:divide-border">
            <Reveal className="min-w-0">
              <div className="flex min-w-0 flex-col items-center gap-3">
                <span className="font-display text-display-2 font-medium tabular-nums text-gradient">
                  <Counter to={10000000} prefix="R$" locale={locale} />+
                </span>
                <span className="text-sm text-muted sm:text-base">{t.statGeneratedLabel}</span>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="min-w-0">
              <div className="flex min-w-0 flex-col items-center gap-3">
                <span className="font-display text-display-2 font-medium tabular-nums text-gradient">
                  <Counter to={250} suffix="+" locale={locale} />
                </span>
                <span className="text-sm text-muted sm:text-base">{t.statCompaniesLabel}</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <p className="relative mx-auto mt-16 max-w-xl text-balance text-lg leading-relaxed text-muted">
              {t.description}
            </p>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
