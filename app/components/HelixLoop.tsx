"use client";

import { motion, useReducedMotion } from "framer-motion";

const PETAL =
  "M0,0 C-24,-9 -25,-42 0,-52 C25,-42 24,-9 0,0 Z";

export function HelixLoop({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Animação da hélice do logo Lumen Web"
    >
      <defs>
        <linearGradient id="helix-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent-soft)" />
          <stop offset="100%" stopColor="var(--accent-text)" />
        </linearGradient>
      </defs>
      <motion.g
        transform="translate(100 100)"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={
          reduceMotion ? undefined : { duration: 16, repeat: Infinity, ease: "linear" }
        }
      >
        {[0, 90, 180, 270].map((angle) => (
          <path
            key={angle}
            d={PETAL}
            transform={`rotate(${angle})`}
            fill="url(#helix-gradient)"
          />
        ))}
        <circle r="10" fill="var(--background)" />
      </motion.g>
    </svg>
  );
}
