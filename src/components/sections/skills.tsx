"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { FileDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/effects/reveal";
import { SpotlightCard } from "@/components/effects/spotlight-card";
import { TechIcon } from "@/components/shared/tech-icon";
import { roleOrder, roleProfiles, skillCategories } from "@/data";
import type { RoleKey } from "@/types";
import { cn } from "@/lib/utils";

export function Skills() {
  const [role, setRole] = useState<RoleKey>("fullstack");
  const current = roleProfiles[role];
  const matched = skillCategories.flatMap((c) => c.skills).filter((s) => s.roles.includes(role)).length;

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Skills"
          title="Hiring for a specific role?"
          highlight="Pick a lens."
          description="Choose the role you're hiring for — I'll highlight the skills that matter and hand you the matching resume."
        />

        {/* Role lens switcher */}
        <Reveal className="mb-10 flex flex-col items-center gap-6">
          <div role="tablist" aria-label="Role lens" className="glass inline-flex flex-wrap justify-center gap-1 rounded-full border p-1.5 shadow-sm">
            {roleOrder.map((k) => (
              <button
                key={k}
                role="tab"
                aria-selected={role === k}
                onClick={() => setRole(k)}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors sm:px-5",
                  role === k ? "text-white" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {role === k && (
                  <motion.span
                    layoutId="role-pill"
                    className="absolute inset-0 rounded-full bg-brand-gradient shadow-lg shadow-primary/30"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{roleProfiles[k].label}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={role}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.3 }}
              className="flex max-w-3xl flex-col items-center gap-4 text-center"
            >
              <h3 className="font-heading text-xl font-bold sm:text-2xl">{current.title}</h3>
              <p className="text-pretty text-muted-foreground">{current.summary}</p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                  <Sparkles className="size-3.5 text-primary" /> {matched} matching skills highlighted
                </span>
                <Button asChild size="sm" variant="outline" className="rounded-full">
                  <a href={current.resume} target="_blank" rel="noopener">
                    <FileDown /> {current.label} resume (PDF)
                  </a>
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </Reveal>

        {/* Bento grid of categories */}
        <RevealGroup className="columns-1 gap-4 sm:columns-2 lg:columns-3" stagger={0.06}>
          {skillCategories.map((cat) => {
            const relevant = cat.skills.some((s) => s.roles.includes(role));
            return (
              <RevealItem key={cat.id} className="mb-4 break-inside-avoid">
                <SpotlightCard className={cn("transition-opacity duration-500", !relevant && "opacity-50")}>
                  <div className="flex h-full flex-col p-5">
                    <div className="mb-1 flex items-center justify-between">
                      <h3 className="font-heading text-lg font-semibold">{cat.title}</h3>
                      <span className="font-mono text-xs text-muted-foreground">
                        {String(cat.skills.length).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mb-4 text-sm text-muted-foreground">{cat.description}</p>
                    <ul className="flex flex-wrap gap-2">
                      {cat.skills.map((s) => {
                        const on = s.roles.includes(role);
                        return (
                          <motion.li
                            key={s.name}
                            animate={{ opacity: on ? 1 : 0.4, scale: on ? 1 : 0.96 }}
                            transition={{ duration: 0.3 }}
                            className={cn(
                              "flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-colors sm:text-sm",
                              on
                                ? "border-primary/30 bg-primary/10 text-foreground shadow-sm shadow-primary/10"
                                : "bg-muted/50 text-muted-foreground",
                            )}
                          >
                            <TechIcon name={s.name} className={cn("size-3.5", on && "text-primary")} />
                            {s.name}
                          </motion.li>
                        );
                      })}
                    </ul>
                  </div>
                </SpotlightCard>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
