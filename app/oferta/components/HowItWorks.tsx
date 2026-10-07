"use client";

import { motion } from "framer-motion";
import { Button } from "../../components/ui/Button";
import { Container } from "../../components/ui/Container";
import { Eyebrow } from "../../components/ui/Eyebrow";
import { Reveal } from "../../components/ui/Reveal";
import { OFERTA_WHATSAPP_URL } from "../../site-config";

const STEPS = [
  {
    title: "Fale connosco",
    description: "Conte-nos sobre a sua empresa e o que precisa.",
  },
  {
    title: "Criamos o seu site",
    description: "Tratamos do design, textos e estrutura.",
  },
  {
    title: "Publicamos",
    description: "Depois da sua aprovação, colocamos o site online.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="scroll-mt-24 border-t border-border py-20 lg:py-[120px]"
    >
      <Container maxW="max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>Como funciona</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-6 font-display text-display-2 font-medium text-balance">
              Do primeiro contacto ao seu site no ar.
            </h2>
          </Reveal>
        </div>

        <div className="relative mx-auto mt-20 flex max-w-3xl flex-col gap-10 lg:flex-row lg:gap-0">
          <div className="pointer-events-none absolute top-5 left-0 right-0 hidden h-px bg-border lg:block" aria-hidden />
          <motion.div
            className="pointer-events-none absolute top-5 left-0 right-0 hidden h-px origin-left bg-accent lg:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden
          />

          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08} className="relative flex-1 lg:px-5">
              <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-0">
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-background font-display text-sm font-semibold text-accent-text">
                  {i + 1}
                </span>
                <div className="lg:mt-5">
                  <h3 className="font-display text-lg font-medium">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 flex justify-center">
            <Button
              href={OFERTA_WHATSAPP_URL("Olá! Quero começar o meu site agora.")}
              trackingEvent="cta_click_how_it_works"
            >
              Começar agora
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
