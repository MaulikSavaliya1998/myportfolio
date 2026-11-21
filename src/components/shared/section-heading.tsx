import { Reveal } from "@/components/effects/reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("mx-auto mb-12 max-w-2xl text-center md:mb-16", className)}>
      <p className="mb-3 inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 font-mono text-xs tracking-widest text-primary uppercase">
        <span className="size-1.5 rounded-full bg-primary" />
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold text-balance sm:text-4xl md:text-5xl">
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {description && <p className="mt-4 text-pretty text-muted-foreground md:text-lg">{description}</p>}
    </Reveal>
  );
}
