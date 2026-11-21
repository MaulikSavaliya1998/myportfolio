"use client";

import { useRef, type ComponentProps } from "react";
import { cn } from "@/lib/utils";

/**
 * Card with a mouse-following radial glow on both the surface and the border.
 * Pure CSS variables — no re-renders on mouse move.
 */
export function SpotlightCard({ className, children, ...props }: ComponentProps<"div">) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn(
        "group/spot relative overflow-hidden rounded-2xl border bg-card p-px backdrop-blur-sm transition-colors",
        className,
      )}
      {...props}
    >
      {/* border glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
        style={{
          background:
            "radial-gradient(380px circle at var(--mx, 50%) var(--my, 50%), color-mix(in oklch, var(--brand-1) 70%, transparent), transparent 45%)",
        }}
      />
      <div className="relative h-full rounded-[calc(1rem-1px)] bg-card">
        {/* surface glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
          style={{
            background:
              "radial-gradient(500px circle at var(--mx, 50%) var(--my, 50%), var(--glow), transparent 40%)",
          }}
        />
        <div className="relative h-full">{children}</div>
      </div>
    </div>
  );
}
