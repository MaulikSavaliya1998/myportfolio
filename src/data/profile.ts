import type { Achievement, Education, RoleKey, RoleProfile, SocialLink, Stat } from "@/types";

export const profile = {
  name: "Maulik Savaliya",
  firstName: "Maulik",
  headline: "Senior Full Stack Developer",
  yearsOfExperience: "6+",
  location: "Ahmedabad, India",
  email: "savaliyamaulik98@gmail.com",
  phone: "+91 6355105023",
  availability: "Open to new opportunities",
  avatar: "/images/maulik.webp",
  /** Words cycled in the hero headline */
  rotatingRoles: ["Full Stack Developer", "Frontend Engineer", "Backend Engineer", "MERN Developer"],
  intro:
    "I build fast, scalable and genuinely pleasant web products — from pixel-perfect React interfaces to event-driven Node.js backends on AWS.",
  about: [
    "I'm a Senior Full Stack Developer with 6+ years of experience shipping production software across automotive, real estate, SaaS, research and social media products.",
    "On the frontend I live in React.js, Next.js, TypeScript, Tailwind CSS and Shadcn UI — obsessed with reusable components, Core Web Vitals and SEO. On the backend I design REST and GraphQL APIs with Node.js, Express and Nest.js, backed by PostgreSQL, MongoDB, Redis, Kafka and AWS.",
    "Lately I've been building AI-powered features with the OpenAI API and shipping faster with AI-assisted workflows like Claude Code — while mentoring developers and leading code reviews.",
  ],
} as const;

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/MaulikSavaliya1998", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/maulik-savaliya", icon: "linkedin" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
  { label: "WhatsApp", href: "https://wa.me/916355105023", icon: "whatsapp" },
];

export const stats: Stat[] = [
  { value: 6, suffix: "+", label: "Years experience" },
  { value: 10, suffix: "+", label: "Products shipped" },
  { value: 3.3, suffix: "M+", label: "Records made searchable" },
  { value: 650, prefix: "$", suffix: "M", label: "Funding milestone supported" },
];

/**
 * Role lenses — each maps to a tailored resume in /public/resume.
 * Visitors pick a lens in the Skills section; it highlights matching skills and swaps the resume link.
 */
export const roleProfiles: Record<RoleKey, RoleProfile> = {
  fullstack: {
    key: "fullstack",
    label: "Full Stack",
    title: "Senior Full Stack Developer",
    summary:
      "End-to-end ownership: system design, REST/GraphQL APIs, event-driven backends with Kafka & Redis, and polished React/Next.js frontends deployed on AWS.",
    resume: "/resume/Maulik-Savaliya-Full-Stack.pdf",
  },
  frontend: {
    key: "frontend",
    label: "Frontend",
    title: "Senior Frontend Developer",
    summary:
      "Fast, accessible, SEO-friendly interfaces with React.js, Next.js (SSR/SSG), TypeScript, Tailwind CSS and Shadcn UI — built from reusable, well-tested components.",
    resume: "/resume/Maulik-Savaliya-Frontend.pdf",
  },
  backend: {
    key: "backend",
    label: "Backend",
    title: "Senior Backend Developer",
    summary:
      "Reliable APIs and microservices with Node.js, Express, Nest.js and TypeScript — PostgreSQL, MongoDB, Redis, Kafka, RBAC/JWT and serverless AWS.",
    resume: "/resume/Maulik-Savaliya-Backend.pdf",
  },
  mern: {
    key: "mern",
    label: "MERN",
    title: "Senior MERN Stack Developer",
    summary:
      "MongoDB, Express, React and Node.js at production scale — real-time features with WebSocket, Redis caching and CI/CD with GitHub Actions.",
    resume: "/resume/Maulik-Savaliya-MERN.pdf",
  },
};

export const roleOrder: RoleKey[] = ["fullstack", "frontend", "backend", "mern"];

export const education: Education[] = [
  {
    institution: "Gujarat Technological University (GTU)",
    degree: "Bachelor of Engineering, Computer Science",
    location: "Patan, India",
    period: "2016 — 2020",
    detail: "CGPA 7.29",
  },
];

export const achievements: Achievement[] = [
  {
    title: "GATE 2021 Qualified",
    description:
      "Graduate Aptitude Test in Engineering (Computer Science) — strong foundation in data structures, algorithms and DBMS.",
  },
  {
    title: "$650M funding milestone",
    description: "Engineered core flows of Splitero, the home-equity platform that supported the company's $650M funding.",
  },
  {
    title: "Princeton University platform",
    description: "Built the PEMM digital humanities research platform serving 3.3M+ searchable data points.",
  },
];
