"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowDownRight, ArrowRight, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextRotator } from "@/components/effects/text-rotator";
import { Magnetic } from "@/components/effects/magnetic";
import { Marquee } from "@/components/effects/marquee";
import { TechIcon } from "@/components/shared/tech-icon";
import { SocialIcon } from "@/components/shared/social-icon";
import { marqueeSkills, profile, roleProfiles, socials, stats } from "@/data";

const ease = [0.22, 1, 0.36, 1] as const;

/** A word that slides up from behind a mask. */
function MaskWord({ children, delay, className }: { children: React.ReactNode; delay: number; className?: string }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className={`block ${className ?? ""}`}
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const [first, ...rest] = profile.name.split(" ");

  return (
    <section ref={ref} id="home" className="relative flex min-h-svh flex-col justify-center pt-28 pb-12">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-4 lg:grid-cols-[1.2fr_0.8fr]">
        {/* ── Copy ── */}
        <motion.div style={{ opacity: fade }} className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border bg-card px-3.5 py-1.5 text-xs font-medium shadow-sm"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {profile.availability}
            <span className="h-3 w-px bg-border" />
            <span className="text-muted-foreground">{profile.location}</span>
          </motion.div>

          <h1 className="font-heading text-[clamp(3.25rem,9vw,7rem)] leading-[0.92] font-extrabold tracking-[-0.045em]">
            <MaskWord delay={0.1}>{first}</MaskWord>
            <MaskWord delay={0.22} className="text-gradient animate-shine">
              {rest.join(" ")}
              <span className="text-primary">.</span>
            </MaskWord>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease }}
            className="mt-6 flex flex-wrap items-baseline gap-x-2 font-heading text-xl font-semibold sm:text-2xl md:text-3xl"
          >
            <span className="text-muted-foreground">Senior</span>
            <TextRotator words={profile.rotatingRoles} className="text-primary" />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease }}
            className="mt-5 max-w-lg text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <Button asChild size="lg" className="group h-12 rounded-full px-6 text-[15px] shadow-lg shadow-primary/25">
                <Link href="#projects">
                  View my work <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button asChild size="lg" variant="outline" className="h-12 rounded-full px-6 text-[15px]">
                <a href={roleProfiles.fullstack.resume} target="_blank" rel="noopener">
                  <FileDown /> Download CV
                </a>
              </Button>
            </Magnetic>
            <div className="ml-1 flex items-center gap-1">
              {socials.slice(0, 3).map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid size-11 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
                >
                  <SocialIcon icon={s.icon} className="size-[18px]" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Credibility row */}
          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-12 flex max-w-lg divide-x border-t pt-6"
          >
            {stats.slice(0, 3).map((s) => (
              <div key={s.label} className="flex-1 px-4 first:pl-0">
                <dd className="font-heading text-2xl font-bold sm:text-3xl">
                  {s.prefix}
                  {s.value}
                  <span className="text-primary">{s.suffix}</span>
                </dd>
                <dt className="mt-0.5 text-xs text-muted-foreground">{s.label}</dt>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* ── Portrait ── */}
        <motion.div
          style={{ y: imgY }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease }}
          className="relative order-1 mx-auto w-full max-w-[17rem] sm:max-w-sm lg:order-2"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-brand-gradient shadow-2xl shadow-primary/30">
            <div className="absolute inset-0 bg-grid opacity-60 [--grid-line:rgb(255_255_255/0.08)]" />
            <div className="absolute -top-24 left-1/2 size-80 -translate-x-1/2 rounded-full bg-white/25 blur-3xl" />
            <span className="absolute top-5 left-6 font-mono text-[11px] tracking-widest text-white/70 uppercase">
              {profile.headline}
            </span>
            <Image
              src={profile.avatar}
              alt={`Portrait of ${profile.name}`}
              fill
              preload
              sizes="(min-width: 1024px) 384px, 304px"
              className="object-cover object-[50%_20%] pt-10"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* floating chips */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6, ease }}
            className="absolute -left-3 bottom-12 sm:-left-12"
          >
            <div className="animate-float rounded-2xl border bg-card/95 px-4 py-3 shadow-xl backdrop-blur">
              <p className="font-heading text-2xl leading-none font-bold">
                {profile.yearsOfExperience}
                <span className="text-primary"> yrs</span>
              </p>
              <p className="mt-1 text-[11px] text-muted-foreground">shipping production code</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.15, duration: 0.6, ease }}
            className="absolute -right-3 top-16 sm:-right-10"
          >
            <div className="flex animate-float items-center gap-2.5 rounded-2xl border bg-card/95 px-3.5 py-2.5 shadow-xl backdrop-blur [animation-delay:-3s]">
              {["React.js", "Node.js", "AWS", "TypeScript"].map((t) => (
                <TechIcon key={t} name={t} className="size-5 text-foreground/80" />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Tech marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="mx-auto mt-20 w-full max-w-6xl px-4"
      >
        <Marquee duration={50}>
          {marqueeSkills.map((s) => (
            <span key={s} className="flex items-center gap-2 px-4 text-sm font-medium whitespace-nowrap text-muted-foreground">
              <TechIcon name={s} className="size-[18px]" />
              {s}
            </span>
          ))}
        </Marquee>
      </motion.div>

      <Link
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-1.5 font-mono text-xs tracking-widest text-muted-foreground uppercase transition-colors hover:text-primary lg:flex"
      >
        Scroll <ArrowDownRight className="size-3.5 animate-bounce" />
      </Link>
    </section>
  );
}
