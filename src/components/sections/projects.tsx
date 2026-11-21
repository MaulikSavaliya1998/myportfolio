"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/effects/reveal";
import { ProjectCard } from "@/components/projects/project-card";
import { projectCategories, projects } from "@/data";
import { cn } from "@/lib/utils";

type Category = (typeof projectCategories)[number];

export function Projects() {
  const [filter, setFilter] = useState<Category>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter));

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Projects"
          title="Selected"
          highlight="work"
          description="Production products I've built — from Princeton University research tools to AI-powered SaaS."
        />

        <Reveal className="mb-10 flex justify-center">
          <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Filter projects">
            {projectCategories.map((c) => {
              const count = c === "All" ? projects.length : projects.filter((p) => p.categories.includes(c)).length;
              if (!count) return null;
              return (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  aria-pressed={filter === c}
                  className={cn(
                    "relative rounded-full border px-4 py-1.5 text-sm transition-colors",
                    filter === c ? "border-transparent text-white" : "bg-card text-muted-foreground hover:text-foreground",
                  )}
                >
                  {filter === c && (
                    <motion.span layoutId="project-filter" className="absolute inset-0 rounded-full bg-brand-gradient" />
                  )}
                  <span className="relative">
                    {c} <span className="opacity-70">({count})</span>
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.45, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={p} index={projects.indexOf(p)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
