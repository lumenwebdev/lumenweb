"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Headset, Megaphone, Sparkles, Target } from "lucide-react";
import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/Eyebrow";
import { Reveal } from "./ui/Reveal";
import { cn } from "./ui/cn";
import { useMediaQuery } from "./ui/useMediaQuery";
import type { Dictionary } from "../[lang]/dictionaries";

const ICONS = [Sparkles, Headset, Target, Megaphone];

export function Services({ dict }: { dict: Dictionary }) {
  const t = dict.services;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const hasHover = useMediaQuery("(hover: hover)", true);
  const listRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 250, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 250, damping: 28 });

  function onMouseMove(e: React.MouseEvent) {
    if (!listRef.current) return;
    const rect = listRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  const ActiveIcon = openIndex !== null ? ICONS[openIndex] : null;

  return (
    <section id="servicos" className="scroll-mt-24 border-t border-border py-24 lg:py-32">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>{t.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-6 font-display text-display-2 font-medium text-balance">
              {t.title}
            </h2>
          </Reveal>
        </div>

        <div
          ref={listRef}
          onMouseMove={onMouseMove}
          className="relative mt-14 overflow-hidden border-t border-border lg:mt-20"
        >
          {hasHover && (
            <motion.div
              aria-hidden
              className="pointer-events-none absolute z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-accent text-on-accent shadow-xl"
              style={{ left: springX, top: springY }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{
                opacity: openIndex !== null ? 1 : 0,
                scale: openIndex !== null ? 1 : 0.6,
              }}
              transition={{ duration: 0.2 }}
            >
              {ActiveIcon && <ActiveIcon className="h-10 w-10" strokeWidth={1.5} />}
            </motion.div>
          )}

          {t.items.map((service, i) => {
            const Icon = ICONS[i];
            const isOpen = openIndex === i;
            return (
              <Reveal key={service.title} delay={i * 0.05}>
                <div
                  className="border-b border-border"
                  onMouseEnter={() => hasHover && setOpenIndex(i)}
                  onMouseLeave={() => hasHover && setOpenIndex(null)}
                >
                  <button
                    type="button"
                    onClick={() => !hasHover && setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 rounded-sm py-7 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:gap-8 sm:py-9"
                  >
                    <span className="font-display text-lg font-medium text-muted-2 sm:text-xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Icon
                      className="h-5 w-5 shrink-0 text-accent-text lg:hidden"
                      strokeWidth={1.75}
                    />
                    <span className="flex-1 font-display text-xl font-medium text-balance text-foreground sm:text-2xl lg:text-3xl">
                      {service.title}
                    </span>
                    <ArrowUpRight
                      className={cn(
                        "h-6 w-6 shrink-0 text-foreground transition-transform duration-300",
                        isOpen ? "rotate-45" : "rotate-0",
                      )}
                      strokeWidth={1.75}
                    />
                  </button>

                  <div
                    className={cn(
                      "grid transition-[grid-template-rows] duration-500 ease-out",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-8 pl-0 text-base leading-relaxed text-muted sm:pl-16 sm:pb-10">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
