import { Award, GraduationCap, Trophy } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/effects/reveal";
import { CountUp } from "@/components/effects/count-up";
import { SpotlightCard } from "@/components/effects/spotlight-card";
import { achievements, education, profile, stats } from "@/data";

const achievementIcons = [Trophy, Award, Award];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="About me"
          title="Engineering products people"
          highlight="love to use"
          description="A builder who cares as much about the millisecond as the pixel."
        />

        <div className="grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <SpotlightCard className="h-full">
              <div className="space-y-4 p-6 text-pretty text-muted-foreground md:p-8 md:text-lg">
                {profile.about.map((p, i) => (
                  <p key={i} className={i === 0 ? "text-foreground" : undefined}>
                    {p}
                  </p>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>

          <RevealGroup className="grid grid-cols-2 gap-4 lg:col-span-2">
            {stats.map((s) => (
              <RevealItem key={s.label}>
                <SpotlightCard className="h-full">
                  <div className="flex h-full flex-col justify-center p-5 md:p-6">
                    <span className="font-heading text-3xl font-extrabold text-gradient md:text-4xl">
                      <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
                    </span>
                    <span className="mt-1 text-sm text-muted-foreground">{s.label}</span>
                  </div>
                </SpotlightCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <RevealGroup className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {education.map((e) => (
            <RevealItem key={e.institution}>
              <SpotlightCard className="h-full">
                <div className="flex h-full gap-4 p-5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-gradient text-white">
                    <GraduationCap className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold">{e.degree}</h3>
                    <p className="text-sm text-muted-foreground">{e.institution}</p>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">
                      {e.period} {e.detail && `· ${e.detail}`}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </RevealItem>
          ))}
          {achievements.map((a, i) => {
            const Icon = achievementIcons[i] ?? Award;
            return (
              <RevealItem key={a.title}>
                <SpotlightCard className="h-full">
                  <div className="flex h-full gap-4 p-5">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl border bg-accent text-primary">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-semibold">{a.title}</h3>
                      <p className="text-sm text-muted-foreground">{a.description}</p>
                    </div>
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
