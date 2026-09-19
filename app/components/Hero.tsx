import Image from "next/image";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/Eyebrow";
import { Reveal } from "./ui/Reveal";
import { MetricsMarquee } from "./MetricsMarquee";
import { HelixLoop } from "./HelixLoop";
import type { Dictionary } from "../[lang]/dictionaries";

export function Hero({ dict }: { dict: Dictionary }) {
  const t = dict.hero;

  const marqueeItems = [
    `R$10M+ ${t.statGeneratedLabel}`,
    `250+ ${t.statCompaniesLabel}`,
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="grid-noise pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div
        className="pointer-events-none absolute left-1/2 top-[-260px] h-[640px] w-[640px] -translate-x-1/2 rounded-full opacity-15 blur-[120px]"
        style={{ background: "radial-gradient(circle, #00d1f7 0%, transparent 70%)" }}
      />

      <Container className="relative flex min-h-[82dvh] flex-col items-center justify-center pt-32 pb-16 text-center lg:min-h-[80vh] lg:pt-40">
        <Reveal>
          <Eyebrow>{t.eyebrow}</Eyebrow>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-8 max-w-5xl font-display text-display-1 font-medium text-balance">
            {t.titlePre}
            <span className="text-gradient">{t.titleHighlight}</span>
            {t.titlePost}
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-muted">
            {t.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button href="#cta">{t.ctaPrimary}</Button>
            <Button href="#como-trabalhamos" variant="secondary">
              {t.ctaSecondary}
            </Button>
          </div>
        </Reveal>
      </Container>

      <MetricsMarquee items={marqueeItems} />

      <Container className="py-16 lg:py-24">
        <Reveal>
          <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-[2rem] border border-border bg-background-elevated sm:aspect-[21/9]">
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{ background: "radial-gradient(circle at 50% 50%, #00d1f7 0%, transparent 60%)" }}
            />
            <HelixLoop className="relative h-40 w-40 sm:h-56 sm:w-56" />
            <Image
              src="/brand/logo-icon.png"
              alt=""
              width={520}
              height={575}
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 hidden w-64 opacity-[0.06] lg:block"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
