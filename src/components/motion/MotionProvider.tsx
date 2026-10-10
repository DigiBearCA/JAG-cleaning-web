"use client";

import { LazyMotion, MotionConfig, domAnimation } from "motion/react";
import type { ReactNode } from "react";

/**
 * Wraps the app with LazyMotion (tree-shakeable feature bundle) and MotionConfig.
 * - `strict` ensures only `m` components (not `motion`) are used inside.
 * - `reducedMotion="user"` respects prefers-reduced-motion automatically.
 * Mounted once in layout.tsx.
 */
export function MotionProvider({
  children,
}: {
  readonly children: ReactNode;
}) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
