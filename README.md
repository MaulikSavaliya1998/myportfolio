# Maulik Savaliya — Portfolio

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · shadcn/ui · Motion · next-themes

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Editing content — one place for everything

| What                                     | File                    |
| ---------------------------------------- | ----------------------- |
| Name, contact, bio, stats, education     | `src/data/profile.ts`   |
| Role lenses (Full Stack / Frontend / Backend / MERN) + resume PDFs | `src/data/profile.ts` → `roleProfiles` |
| Skills (each tagged with the roles it matters for) | `src/data/skills.ts` |
| Work history                             | `src/data/experience.ts` |
| Projects (each gets `/projects/[slug]`)  | `src/data/projects.ts`  |
| Site URL, SEO title/description, keywords, nav, **brand colour** | `src/config/site.ts` |

All sections, project pages, sitemap, JSON-LD and OG images read from these files.

### Brand colour
Change `brandColor` in `src/config/site.ts`. Every gradient, glow and highlight is derived
from that single value (CSS `color-mix`), in both light and dark themes, and the OG images use it too.

### Resumes
PDFs live in `public/resume/`. Replace a file with the same name to update it.

### Photo
`public/images/maulik.webp` (transparent cut-out) and `public/images/maulik-og.png` (used in social previews).

## SEO
- Metadata + canonical URLs + Open Graph / Twitter cards (`src/app/layout.tsx`, per-project `generateMetadata`)
- Generated OG images: `src/app/opengraph-image.tsx`, `src/app/projects/[slug]/opengraph-image.tsx`
- `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, generated favicon/apple icon
- JSON-LD: Person, WebSite, CreativeWork, BreadcrumbList (`src/lib/seo.ts`)

**Before deploying**, set `NEXT_PUBLIC_SITE_URL` (e.g. `https://your-domain.com`) in your host's environment.

## Structure
```
src/
  app/            routes, metadata files (sitemap, robots, OG, icons)
  components/
    sections/     hero, about, skills, experience, projects, contact
    layout/       navbar, footer, theme toggle, ⌘K command menu
    effects/      reveal, text rotator, count-up, spotlight card, marquee, magnetic…
    projects/     project card
    shared/       icons, section heading, JSON-LD
    ui/           shadcn/ui primitives
  config/site.ts  site + SEO + brand config
  data/           ALL content (see table above)
  hooks/          active section, theme transition
  lib/            seo helpers, og helpers, utils
  types/          content types
```
