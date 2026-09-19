"use client";

import { ReactLenis } from "lenis/react";
import { useMediaQuery } from "./ui/useMediaQuery";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)", false);

  if (prefersReducedMotion) return <>{children}</>;

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.1, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
