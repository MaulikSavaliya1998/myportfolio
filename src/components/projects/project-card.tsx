import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { SpotlightCard } from "@/components/effects/spotlight-card";
import { TechIcon } from "@/components/shared/tech-icon";
import type { Project } from "@/types";

/** Clean, monochrome project card. Whole card links to the case study. */
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <SpotlightCard className="group h-full transition-transform duration-300 hover:-translate-y-1">
      <article className="relative flex h-full flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-xs text-muted-foreground">
            {String(index + 1).padStart(2, "0")} / {project.domain}
          </span>
          <span className="grid size-9 shrink-0 place-items-center rounded-full border text-muted-foreground transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
          </span>
        </div>

        <h3 className="mt-6 font-heading text-2xl font-bold tracking-tight">
          <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0 focus-visible:outline-none">
            {project.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm font-medium text-primary">{project.tagline}</p>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        <dl className="mt-6 grid grid-cols-3 divide-x border-y py-4">
          {project.metrics.map((m) => (
            <div key={m.label} className="min-w-0 px-3 first:pl-0">
              <dd className="truncate font-heading text-base font-bold">{m.value}</dd>
              <dt className="line-clamp-2 text-[11px] leading-tight text-muted-foreground">{m.label}</dt>
            </div>
          ))}
        </dl>

        <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
          {project.stack.slice(0, 5).map((t) => (
            <li key={t} className="inline-flex items-center gap-1.5">
              <TechIcon name={t} className="size-3.5" />
              {t}
            </li>
          ))}
          {project.stack.length > 5 && <li>+{project.stack.length - 5} more</li>}
        </ul>

        <div className="mt-auto flex items-center justify-between pt-6 text-xs text-muted-foreground">
          <span>
            {project.company} · {project.period}
          </span>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center gap-1 font-medium text-foreground hover:text-primary"
              aria-label={`Visit ${project.name} live site`}
            >
              Live <ExternalLink className="size-3" />
            </a>
          )}
        </div>
      </article>
    </SpotlightCard>
  );
}
