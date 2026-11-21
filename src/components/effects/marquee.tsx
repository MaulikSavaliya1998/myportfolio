import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Infinite horizontal marquee (CSS only). Pauses on hover. */
export function Marquee({
  children,
  duration = 40,
  reverse = false,
  className,
}: {
  children: ReactNode;
  duration?: number;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn("group/marquee flex overflow-hidden mask-fade-x", className)}
      style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
    >
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          className={cn(
            "flex shrink-0 animate-marquee items-center gap-3 pr-3 group-hover/marquee:[animation-play-state:paused]",
            reverse && "[animation-direction:reverse]",
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
