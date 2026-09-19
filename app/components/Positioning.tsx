"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import type { Dictionary } from "../[lang]/dictionaries";

export function Positioning({ dict }: { dict: Dictionary }) {
  const t = dict.positioning;
  const reduceMotion = useReducedMotion();
  const rotateTransition = { duration: 42, repeat: Infinity, ease: "linear" as const };

  return (
    <section className="border-t border-border py-24 lg:py-32">
      <Container className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <Reveal>
          <div>
            <h2 className="font-display text-display-2 font-medium text-balance">
              {t.titlePre}
              <span className="text-accent-text">{t.titleHighlight}</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {t.description}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center overflow-hidden">
            <div className="absolute inset-0 rounded-full border border-border" />
            <div className="absolute inset-10 rounded-full border border-border" />
            <div
              className="absolute inset-0 rounded-full opacity-25 blur-3xl"
              style={{ background: "radial-gradient(circle, #00d1f7 0%, transparent 65%)" }}
            />

            <motion.div
              className="absolute inset-0"
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={reduceMotion ? undefined : rotateTransition}
            >
              <svg className="absolute inset-0 h-full w-full" aria-hidden>
                {t.nodes.map((_, i) => {
                  const angle = (i * 360) / t.nodes.length - 45;
                  const rad = (angle * Math.PI) / 180;
                  const radius = 44;
                  const x = 50 + radius * Math.cos(rad);
                  const y = 50 + radius * Math.sin(rad);
                  return (
                    <line
                      key={i}
                      x1="50%"
                      y1="50%"
                      x2={`${x}%`}
                      y2={`${y}%`}
                      stroke="var(--border-strong)"
                      strokeWidth={1}
                    />
                  );
                })}
              </svg>

              {t.nodes.map((node, i) => {
                const angle = (i * 360) / t.nodes.length - 45;
                const rad = (angle * Math.PI) / 180;
                const radius = 44;
                const x = 50 + radius * Math.cos(rad);
                const y = 50 + radius * Math.sin(rad);
                return (
                  <motion.div
                    key={node}
                    className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-border-strong bg-background px-4 py-2 text-xs font-medium text-foreground shadow-lg"
                    style={{ left: `${x}%`, top: `${y}%` }}
                    animate={reduceMotion ? undefined : { rotate: -360 }}
                    transition={reduceMotion ? undefined : rotateTransition}
                  >
                    {node}
                  </motion.div>
                );
              })}
            </motion.div>

            <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-2xl border border-accent/40 bg-background-elevated glow-ring">
              <Image
                src="/brand/logo-icon.png"
                alt="Lumen Web"
                width={40}
                height={44}
                className="h-10 w-auto"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
