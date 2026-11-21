import Link from "next/link";
import { navLinks } from "@/config/site";
import { profile, socials } from "@/data";
import { SocialIcon } from "@/components/shared/social-icon";

export function Footer() {
  return (
    <footer className="relative border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-heading text-lg font-semibold">{profile.name}</p>
          <p className="text-sm text-muted-foreground">
            {profile.headline} · {profile.location}
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          {navLinks.map((l) => (
            <Link key={l.id} href={`/#${l.id}`} className="transition-colors hover:text-foreground">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="grid size-9 place-items-center rounded-full border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              <SocialIcon icon={s.icon} />
            </a>
          ))}
        </div>
      </div>
      <p className="pb-8 text-center text-xs text-muted-foreground">
        Designed & built by {profile.name} with Next.js, Tailwind CSS, shadcn/ui & Motion.
      </p>
    </footer>
  );
}
