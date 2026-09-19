"use client";

import { useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/Eyebrow";
import { Reveal } from "./ui/Reveal";
import { cn } from "./ui/cn";
import type { Dictionary } from "../[lang]/dictionaries";

function Step({
  step,
  index,
}: {
  step: { title: string; description: string };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const active = useInView(ref, { margin: "-40% 0px -40% 0px" });

  return (
    <div
      ref={ref}
      className={cn(
        "flex min-h-[38vh] flex-col justify-center gap-4 border-b border-border py-10 transition-opacity duration-500 lg:min-h-[46vh]",
        active ? "opacity-100" : "opacity-40",
      )}
    >
      <span className="font-display text-3xl font-medium text-accent-text sm:text-4xl">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="font-display text-2xl font-medium sm:text-3xl">{step.title}</h3>
      <p className="max-w-md text-base leading-relaxed text-muted">
        {step.description}
      </p>
    </div>
  );
}

export function HowWeWork({ dict }: { dict: Dictionary }) {
  const t = dict.howWeWork;
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section
      id="como-trabalhamos"
      className="scroll-mt-24 border-t border-border py-24 lg:py-32"
    >
      <Container>
        <div ref={containerRef} className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <Eyebrow>{t.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-6 font-display text-display-2 font-medium text-balance">
                {t.title}
              </h2>
            </Reveal>
          </div>

          <div className="relative">
            <div className="absolute left-0 top-0 hidden h-full w-px bg-border lg:block" />
            <motion.div
              className="absolute left-0 top-0 hidden w-px origin-top bg-accent lg:block"
              style={{ scaleY: scrollYProgress, height: "100%" }}
            />
            <div className="lg:pl-8">
              {t.steps.map((step, i) => (
                <Step key={step.title} step={step} index={i} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
