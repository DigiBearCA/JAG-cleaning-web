"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  type ReactNode,
} from "react";
import {
  m,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { cx } from "@/lib/cx";

interface AudienceCardTiltContextValue {
  readonly iconX: MotionValue<number>;
  readonly iconY: MotionValue<number>;
  readonly iconZ: MotionValue<number>;
  readonly titleX: MotionValue<number>;
  readonly titleY: MotionValue<number>;
  readonly titleZ: MotionValue<number>;
}

const AudienceCardTiltContext =
  createContext<AudienceCardTiltContextValue | null>(null);

export function useAudienceCardTilt() {
  return useContext(AudienceCardTiltContext);
}

export interface AudienceCardTiltProps {
  readonly children: ReactNode;
  readonly className?: string;
}

/**
 * Interactive 3D pointer-tracking tilt wrapper for "Who we work with" cards.
 *
 * Rules:
 * - Mouse only (pointerType === "mouse"): tracking tilt across x (-1 to 1) and y (-1 to 1)
 * - rotateX = -y * 7deg, rotateY = x * 8deg, y = -6 while hovered
 * - transformPerspective: 700, transformStyle: "preserve-3d", border turns primary
 * - Icon translated by up to 8px on x/y and translateZ 34px
 * - Title translated by up to 3px on x/y and translateZ 16px
 * - On pointer leave, springs everything back to 0 with { stiffness: 200, damping: 20 }
 * - On touch, keyboard focus, and reduced motion: plain 2px lift (-2px y), no tilt
 * - Animate only transform; no event listeners left behind on unmount
 */
export function AudienceCardTilt({
  children,
  className,
}: AudienceCardTiltProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Normalized pointer coordinates (-1 to 1)
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rawCardY = useMotionValue(0);
  const rawZ = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 20 };
  const smoothX = useSpring(rawX, springConfig);
  const smoothY = useSpring(rawY, springConfig);
  const smoothCardY = useSpring(rawCardY, springConfig);
  const smoothZ = useSpring(rawZ, springConfig);

  // Card rotations: rotateX = -y * 7deg, rotateY = x * 8deg
  const rotateX = useTransform(smoothY, (y) => -y * 7);
  const rotateY = useTransform(smoothX, (x) => x * 8);

  // Icon: translate x and y by up to 8px, translateZ 34px
  const iconX = useTransform(smoothX, (x) => x * 8);
  const iconY = useTransform(smoothY, (y) => y * 8);
  const iconZ = useTransform(smoothZ, (z) => z * 34);

  // Title: translate up to 3px, translateZ 16px
  const titleX = useTransform(smoothX, (x) => x * 3);
  const titleY = useTransform(smoothY, (y) => y * 3);
  const titleZ = useTransform(smoothZ, (z) => z * 16);

  const resetSprings = () => {
    rawX.set(0);
    rawY.set(0);
    rawCardY.set(0);
    rawZ.set(0);
  };

  const updatePointer = (e: React.PointerEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    const px = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const py = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    rawX.set(Math.max(-1, Math.min(1, px)));
    rawY.set(Math.max(-1, Math.min(1, py)));
  };

  const handlePointerEnter = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    if (shouldReduceMotion) {
      rawCardY.set(-2);
      return;
    }
    rawCardY.set(-6);
    rawZ.set(1);
    updatePointer(e);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    if (shouldReduceMotion) return;
    updatePointer(e);
  };

  const handlePointerLeave = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    resetSprings();
  };

  // Keyboard focus: plain 2px lift, 0 tilt
  const handleFocus = () => {
    rawCardY.set(-2);
    rawX.set(0);
    rawY.set(0);
    rawZ.set(0);
  };

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    const nextTarget = e.relatedTarget;
    if (nextTarget instanceof Node && cardRef.current?.contains(nextTarget)) {
      return;
    }
    resetSprings();
  };

  // Touch support: plain 2px lift, 0 tilt
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") {
      rawCardY.set(-2);
      rawX.set(0);
      rawY.set(0);
      rawZ.set(0);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") {
      resetSprings();
    }
  };

  const handlePointerCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") {
      resetSprings();
    }
  };

  // Fallback: If children have data-tilt-icon or data-tilt-title without using AudienceCardIcon/AudienceCardTitle
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const iconEl = card.querySelector<HTMLElement>(
      "[data-tilt-icon]:not([data-motion-tilt])",
    );
    const titleEl = card.querySelector<HTMLElement>(
      "[data-tilt-title]:not([data-motion-tilt])",
    );

    if (!iconEl && !titleEl) return;

    const updateTransforms = () => {
      if (iconEl) {
        iconEl.style.transform = `translate3d(${iconX.get()}px, ${iconY.get()}px, ${iconZ.get()}px)`;
      }
      if (titleEl) {
        titleEl.style.transform = `translate3d(${titleX.get()}px, ${titleY.get()}px, ${titleZ.get()}px)`;
      }
    };

    const unsubX = smoothX.on("change", updateTransforms);
    const unsubY = smoothY.on("change", updateTransforms);
    const unsubZ = smoothZ.on("change", updateTransforms);

    return () => {
      unsubX();
      unsubY();
      unsubZ();
      if (iconEl) iconEl.style.transform = "";
      if (titleEl) titleEl.style.transform = "";
    };
  }, [smoothX, smoothY, smoothZ, iconX, iconY, iconZ, titleX, titleY, titleZ]);

  const contextValue: AudienceCardTiltContextValue = {
    iconX,
    iconY,
    iconZ,
    titleX,
    titleY,
    titleZ,
  };

  return (
    <AudienceCardTiltContext.Provider value={contextValue}>
      <m.div
        ref={cardRef}
        onPointerEnter={handlePointerEnter}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={cx(
          "group relative flex flex-col gap-0 rounded-card border border-line bg-white p-4 transition-colors duration-150 ease-brand hover:border-primary focus-within:border-primary active:border-primary",
          className,
        )}
        style={{
          rotateX: shouldReduceMotion ? 0 : rotateX,
          rotateY: shouldReduceMotion ? 0 : rotateY,
          y: smoothCardY,
          transformPerspective: 700,
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </m.div>
    </AudienceCardTiltContext.Provider>
  );
}

export function AudienceCardIcon({
  className,
  children,
}: {
  readonly className?: string;
  readonly children: ReactNode;
}) {
  const ctx = useAudienceCardTilt();
  return (
    <m.div
      data-tilt-icon=""
      data-motion-tilt=""
      className={className}
      style={
        ctx
          ? {
              x: ctx.iconX,
              y: ctx.iconY,
              z: ctx.iconZ,
              transformStyle: "preserve-3d",
            }
          : undefined
      }
    >
      {children}
    </m.div>
  );
}

export function AudienceCardTitle({
  className,
  children,
}: {
  readonly className?: string;
  readonly children: ReactNode;
}) {
  const ctx = useAudienceCardTilt();
  return (
    <m.h3
      data-tilt-title=""
      data-motion-tilt=""
      className={className}
      style={
        ctx
          ? {
              x: ctx.titleX,
              y: ctx.titleY,
              z: ctx.titleZ,
              transformStyle: "preserve-3d",
            }
          : undefined
      }
    >
      {children}
    </m.h3>
  );
}

