"use client";

import { AnimatePresence, motion } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useThemeTransition } from "@/hooks/use-theme-transition";

const subscribe = () => () => {};

export function ThemeToggle() {
  const { theme, toggle } = useThemeTransition();
  // true only after hydration — avoids an icon mismatch between server and client
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const isDark = mounted && theme === "dark";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative size-9 overflow-hidden rounded-full"
          aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
          onClick={(e) => toggle({ x: e.clientX, y: e.clientY })}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isDark ? "moon" : "sun"}
              initial={{ y: -20, opacity: 0, rotate: -90 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: 20, opacity: 0, rotate: 90 }}
              transition={{ duration: 0.25 }}
              className="flex"
            >
              {isDark ? <Moon className="size-4" /> : <Sun className="size-4" />}
            </motion.span>
          </AnimatePresence>
        </Button>
      </TooltipTrigger>
      <TooltipContent>Toggle theme</TooltipContent>
    </Tooltip>
  );
}
