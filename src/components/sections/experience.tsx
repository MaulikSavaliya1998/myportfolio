"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { Briefcase, CheckCircle2, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/section-heading";
import { SpotlightCard } from "@/components/effects/spotlight-card";
import { experiences } from "@/data";
import { cn } from "@/lib/utils";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've"
          highlight="made an impact"
          description="From trainee to senior engineer — leading products end to end across four companies."
        />

        <div ref={ref} className="relative">
          {/* track + scroll-driven progress line */}
          <div className="absolute top-0 bottom-0 left-4 w-px bg-border md:left-1/2" aria-hidden />
          <motion.div
            aria-hidden
            style={{ scaleY }}
            className="absolute top-0 bottom-0 left-4 w-px origin-top bg-gradient-to-b from-brand-1 via-brand-2 to-brand-3 md:left-1/2"
          />

          <ol className="space-y-12">
            {experiences.map((exp, i) => {
              const left = i % 2 === 0;
              return (
                <li key={exp.company} className="relative grid md:grid-cols-2 md:gap-12">
                  {/* node */}
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute top-6 left-4 z-10 grid size-9 -translate-x-1/2 place-items-center rounded-full border-4 border-background bg-brand-gradient text-white shadow-lg shadow-primary/30 md:left-1/2"
                  >
                    <Briefcase className="size-3.5" />
                  </motion.span>

                  <motion.div
                    initial={{ opacity: 0, x: left ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className={cn("pl-12 md:pl-0", left ? "md:col-start-1" : "md:col-start-2")}
                  >
                    <SpotlightCard>
                      <div className="p-5 md:p-6">
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-mono text-xs text-primary">
                            {exp.start} — {exp.end}
                          </span>
                          {exp.current && <Badge className="bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">Current</Badge>}
                        </div>
                        <h3 className="font-heading text-xl font-bold">{exp.role}</h3>
                        <p className="flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">{exp.company}</span>
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="size-3" /> {exp.location}
                          </span>
                        </p>
                        <p className="mt-3 text-sm text-pretty">{exp.summary}</p>
                        <ul className="mt-4 space-y-2">
                          {exp.highlights.map((h) => (
                            <li key={h} className="flex gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {exp.stack.map((t) => (
                            <Badge key={t} variant="secondary" className="font-normal">
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </SpotlightCard>
                  </motion.div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
