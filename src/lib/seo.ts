import { siteConfig } from "@/config/site";
import { experiences, profile, skillCategories, socials, education } from "@/data";
import type { Project } from "@/types";

export const absoluteUrl = (path = "/") => `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;

/** schema.org Person — helps Google build a knowledge panel for your name. */
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absoluteUrl("/#person"),
    name: profile.name,
    url: siteConfig.url,
    image: absoluteUrl(profile.avatar),
    jobTitle: profile.headline,
    description: siteConfig.description,
    email: `mailto:${profile.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Ahmedabad", addressCountry: "IN" },
    sameAs: socials.filter((s) => s.href.startsWith("http")).map((s) => s.href),
    knowsAbout: skillCategories.flatMap((c) => c.skills.map((s) => s.name)),
    worksFor: { "@type": "Organization", name: experiences[0]?.company },
    alumniOf: education.map((e) => ({ "@type": "CollegeOrUniversity", name: e.institution })),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    url: siteConfig.url,
    name: `${profile.name} — Portfolio`,
    author: { "@id": absoluteUrl("/#person") },
    inLanguage: "en",
  };
}

export function projectJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    headline: `${project.name} — ${project.tagline}`,
    description: project.description,
    url: absoluteUrl(`/projects/${project.slug}`),
    ...(project.url ? { sameAs: project.url } : {}),
    author: { "@id": absoluteUrl("/#person") },
    keywords: project.stack.join(", "),
    about: project.domain,
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
