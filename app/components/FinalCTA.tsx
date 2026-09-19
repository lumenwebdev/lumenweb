import { Mail, AtSign } from "lucide-react";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { SITE_EMAIL, SITE_INSTAGRAM_HANDLE, SITE_INSTAGRAM_URL } from "../site-config";
import type { Dictionary } from "../[lang]/dictionaries";

export function FinalCTA({ dict }: { dict: Dictionary }) {
  const t = dict.finalCta;

  return (
    <section
      id="cta"
      className="section-dark scroll-mt-24 border-t border-border bg-background py-24 text-foreground lg:py-40"
    >
      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[140px]"
          style={{ background: "radial-gradient(circle, #00d1f7 0%, transparent 70%)" }}
        />

        <Container className="relative text-center">
          <Reveal>
            <h2 className="mx-auto max-w-4xl font-display text-display-1 font-medium text-balance">
              {t.title}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted">
              {t.subtitle}
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-10">
              <Button href={`mailto:${SITE_EMAIL}`}>{t.button}</Button>
            </div>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 border-t border-border pt-8 text-sm text-muted sm:flex-row sm:gap-8">
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-accent-text"
              >
                <Mail className="h-4 w-4" strokeWidth={1.75} />
                {SITE_EMAIL}
              </a>
              <a
                href={SITE_INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-accent-text"
              >
                <AtSign className="h-4 w-4" strokeWidth={1.75} />
                {SITE_INSTAGRAM_HANDLE}
              </a>
            </div>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
