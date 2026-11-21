"use client";

import { animate, useInView, useMotionValue, useTransform, motion } from "motion/react";
import { useEffect, useRef } from "react";

/** Animates a number from 0 to `value` when scrolled into view. */
export function CountUp({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const decimals = Number.isInteger(value) ? 0 : 1;
  const text = useTransform(mv, (v) => `${prefix}${v.toFixed(decimals)}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, { duration: 1.8, ease: [0.22, 1, 0.36, 1] });
    return () => controls.stop();
  }, [inView, mv, value]);

  return (
    <span ref={ref} aria-label={`${prefix}${value}${suffix}`}>
      <motion.span aria-hidden>{text}</motion.span>
    </span>
  );
}
