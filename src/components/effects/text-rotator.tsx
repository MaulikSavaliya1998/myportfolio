"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/** Cycles through words with a letter-by-letter blur/slide animation. */
export function TextRotator({
  words,
  interval = 2800,
  className,
}: {
  words: readonly string[];
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  const word = words[index];

  return (
    <span className={cn("relative inline-flex", className)} aria-live="polite">
      <span className="sr-only">{word}</span>
      <AnimatePresence mode="wait">
        <motion.span key={word} className="inline-flex" aria-hidden>
          {word.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -18, filter: "blur(8px)" }}
              transition={{ duration: 0.35, delay: i * 0.025, ease: "easeOut" }}
              className="inline-block whitespace-pre"
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
