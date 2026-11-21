/**
 * Single entry point for ALL portfolio content.
 *
 *   profile.ts     → name, contact, bio, stats, role lenses + resumes, education, achievements
 *   skills.ts      → skill categories (tagged by role lens) and the hero marquee
 *   experience.ts  → work history timeline
 *   projects.ts    → case studies (each gets its own SEO page at /projects/[slug])
 *
 * Update content there — every section, page, sitemap and OG image reads from here.
 */
export * from "./profile";
export * from "./skills";
export * from "./experience";
export * from "./projects";
