"use client";

import { useTheme } from "next-themes";
import { useCallback } from "react";

/**
 * Switches theme with a circular "reveal" originating from the click point,
 * using the View Transitions API when available.
 */
export function useThemeTransition() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggle = useCallback(
    (origin?: { x: number; y: number }) => {
      const next = resolvedTheme === "dark" ? "light" : "dark";
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!document.startViewTransition || reduced) {
        setTheme(next);
        return;
      }
      const x = origin?.x ?? window.innerWidth / 2;
      const y = origin?.y ?? 0;
      const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
      const transition = document.startViewTransition(() => setTheme(next));
      transition.ready.then(() => {
        document.documentElement.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
          { duration: 650, easing: "cubic-bezier(0.22, 1, 0.36, 1)", pseudoElement: "::view-transition-new(root)" },
        );
      });
    },
    [resolvedTheme, setTheme],
  );

  return { theme: resolvedTheme, toggle };
}
