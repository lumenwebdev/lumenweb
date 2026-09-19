"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/Eyebrow";
import { Reveal } from "./ui/Reveal";
import { cn } from "./ui/cn";
import { getRealTestimonials } from "../[lang]/testimonials";
import type { Dictionary } from "../[lang]/dictionaries";
import type { Locale } from "../[lang]/locales";

export function Testimonials({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const t = dict.testimonials;
  const items = getRealTestimonials(lang);
  const [active, setActive] = useState(0);

  if (items.length === 0) {
    if (process.env.NODE_ENV === "production") return null;

    return (
      <section
        id="depoimentos"
        className="scroll-mt-24 border-t border-dashed border-border-strong py-16"
      >
        <Container>
          <p className="rounded-2xl border border-dashed border-border-strong bg-background-elevated/40 p-6 text-sm text-muted-2">
            [dev only] Seção de depoimentos oculta em produção: adicione itens reais
            em <code>app/[lang]/testimonials.ts</code> para exibi-la.
          </p>
        </Container>
      </section>
    );
  }

  const current = items[active];

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
            <h2 className="mt-6 font-display text-display-2 font-medium text-balance">
              {t.title}
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="mx-auto mt-16 max-w-3xl text-center">
            <Quote className="mx-auto h-8 w-8 text-accent-text" strokeWidth={1.5} />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
              >
                <p className="mt-6 text-balance font-display text-2xl font-medium leading-snug sm:text-3xl">
                  {current.quote}
                </p>
                <p className="mt-6 text-sm font-medium uppercase tracking-wide text-muted">
                  {current.name} · {current.company}
                </p>
              </motion.div>
            </AnimatePresence>

            {items.length > 1 && (
              <div className="mt-10 flex items-center justify-center gap-3">
                {items.map((item, i) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setActive(i)}
                    className={cn(
                      "rounded-sm font-display text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                      i === active ? "text-accent-text" : "text-muted-2 hover:text-muted",
                    )}
                    aria-label={`${item.name} · ${item.company}`}
                    aria-current={i === active}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </button>
                ))}
              </div>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
