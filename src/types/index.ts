/** Shared content types. All site content lives in `src/data` and follows these shapes. */

/** The role "lenses" a visitor (recruiter) can view the portfolio through. */
export type RoleKey = "fullstack" | "frontend" | "backend" | "mern";

export interface RoleProfile {
  key: RoleKey;
  label: string;
  /** Headline shown when this lens is active */
  title: string;
  summary: string;
  /** Path to the PDF inside /public */
  resume: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "phone" | "whatsapp";
}

export interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  /** Which role lenses this skill is most relevant to */
  roles: RoleKey[];
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  company: string;
  role: string;
  period: string;
  url?: string;
  domain: string;
  /** Used by the project filter */
  categories: ("Frontend" | "Backend" | "Full Stack" | "AI")[];
  featured?: boolean;
  metrics: ProjectMetric[];
  stack: string[];
  highlights: string[];
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
  detail?: string;
}

export interface Achievement {
  title: string;
  description: string;
}
