"use client";

import { motion } from "framer-motion";
import { Container } from "../../components/ui/Container";
import { Eyebrow } from "../../components/ui/Eyebrow";
import { Reveal } from "../../components/ui/Reveal";

const STEPS = [
  {
    title: "Conversa de 15 minutos",
    description:
      "Por videochamada ou WhatsApp. Percebemos o seu negócio e o seu cliente.",
  },
  {
    title: "Nós escrevemos tudo",
    description:
      "Textos, estrutura e design. Só precisa de enviar o logótipo e fotografias.",
  },
  {
    title: "Revê e aprova",
    description:
      "Recebe o site para ver antes de ir para o ar, com ajustes incluídos.",
  },
  {
    title: "Site no ar",
    description:
      "Publicamos no seu domínio e deixamos tudo pronto para receber contactos.",
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
              Do primeiro contacto ao site no ar, em 4 passos.
            </h2>
          </Reveal>
        </div>

        <div className="relative mx-auto mt-20 flex max-w-5xl flex-col gap-10 lg:flex-row lg:gap-0">
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
                  {String(i + 1).padStart(2, "0")}
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
      </Container>
    </section>
  );
}
