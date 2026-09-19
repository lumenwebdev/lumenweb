"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

export function Counter({
  to,
  prefix = "",
  suffix = "",
  duration = 1.8,
  locale = "pt-BR",
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  locale?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return (
    <motion.span ref={ref}>
      {prefix}
      {value.toLocaleString(locale)}
      {suffix}
    </motion.span>
  );
}
