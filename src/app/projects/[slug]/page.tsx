import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Building2, Calendar, CheckCircle2, ExternalLink, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal, RevealGroup, RevealItem } from "@/components/effects/reveal";
import { SpotlightCard } from "@/components/effects/spotlight-card";
import { TechIcon } from "@/components/shared/tech-icon";
import { JsonLd } from "@/components/shared/json-ld";
import { ProjectCard } from "@/components/projects/project-card";
import { getProject, projects } from "@/data";
import { breadcrumbJsonLd, projectJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const title = `${project.name} — ${project.tagline}`;
  return {
    title,
    description: project.description,
    keywords: [project.name, project.domain, ...project.stack],
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title, description: project.description, url: `/projects/${project.slug}`, type: "article" },
    twitter: { card: "summary_large_image", title, description: project.description },
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const others = projects
    .map((p, index) => ({ p, index }))
    .filter(({ p }) => p.slug !== project.slug)
    .slice(0, 3);
  const facts = [
    { icon: Building2, label: "Company", value: project.company },
    { icon: UserRound, label: "Role", value: project.role },
    { icon: Calendar, label: "Timeline", value: project.period },
  ];

  return (
    <article className="pt-28 pb-24">
      <JsonLd data={projectJsonLd(project)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/#projects" },
          { name: project.name, path: `/projects/${project.slug}` },
        ])}
      />

      <div className="mx-auto max-w-5xl px-4">
        <Reveal>
          <Button asChild variant="ghost" size="sm" className="mb-6 rounded-full">
            <Link href="/#projects">
              <ArrowLeft /> All projects
            </Link>
          </Button>
        </Reveal>

        {/* Hero banner */}
        <Reveal>
          <header className="relative overflow-hidden rounded-3xl bg-brand-gradient p-8 text-white shadow-2xl shadow-primary/20 md:p-12">
            <div className="absolute inset-0 bg-grid opacity-40 [--grid-line:rgb(255_255_255/0.15)]" />
            <div className="absolute -right-20 -bottom-20 size-80 animate-float rounded-full bg-white/20 blur-3xl" />
            <div className="relative">
              <p className="mb-3 inline-block rounded-full bg-black/20 px-3 py-1 font-mono text-xs tracking-wider uppercase backdrop-blur">
                {project.domain}
              </p>
              <h1 className="text-4xl font-extrabold md:text-6xl">{project.name}</h1>
              <p className="mt-2 text-lg text-white/90 md:text-2xl">{project.tagline}</p>
              {project.url && (
                <Button asChild className="mt-6 rounded-full bg-white text-black hover:bg-white/90">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    Visit live site <ExternalLink />
                  </a>
                </Button>
              )}
            </div>
          </header>
        </Reveal>

        {/* Facts + metrics */}
        <RevealGroup className="mt-6 grid gap-4 sm:grid-cols-3">
          {facts.map((f) => (
            <RevealItem key={f.label}>
              <SpotlightCard>
                <div className="flex items-center gap-3 p-4">
                  <f.icon className="size-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">{f.label}</p>
                    <p className="font-medium">{f.value}</p>
                  </div>
                </div>
              </SpotlightCard>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="mb-3 text-2xl font-bold">Overview</h2>
              <p className="text-lg text-pretty text-muted-foreground">{project.description}</p>
            </Reveal>

            <Reveal className="mt-10">
              <h2 className="mb-4 text-2xl font-bold">What I built</h2>
            </Reveal>
            <RevealGroup className="space-y-3">
              {project.highlights.map((h) => (
                <RevealItem key={h}>
                  <div className="flex gap-3 rounded-xl border bg-card p-4">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                    <p>{h}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <aside className="space-y-6">
            <Reveal>
              <h2 className="mb-4 text-lg font-bold">Impact</h2>
              <div className="grid gap-3">
                {project.metrics.map((m) => (
                  <SpotlightCard key={m.label}>
                    <div className="p-4">
                      <p className="font-heading text-2xl font-extrabold text-gradient">{m.value}</p>
                      <p className="text-sm text-muted-foreground">{m.label}</p>
                    </div>
                  </SpotlightCard>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mb-4 text-lg font-bold">Tech stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <Badge key={t} variant="outline" className="gap-1.5 py-1 font-normal">
                    <TechIcon name={t} className="size-3.5 text-primary" />
                    {t}
                  </Badge>
                ))}
              </div>
            </Reveal>
          </aside>
        </div>

        <section className="mt-24" aria-labelledby="more-projects">
          <Reveal>
            <h2 id="more-projects" className="mb-8 text-center text-3xl font-bold">
              More <span className="text-gradient">projects</span>
            </h2>
          </Reveal>
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map(({ p, index }) => (
              <RevealItem key={p.slug}>
                <ProjectCard project={p} index={index} />
              </RevealItem>
            ))}
          </RevealGroup>
        </section>
      </div>
    </article>
  );
}
