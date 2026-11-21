/**
 * Site-wide configuration: URL, SEO and navigation.
 * Set NEXT_PUBLIC_SITE_URL in your hosting environment (e.g. https://mauliksavaliya.dev).
 */
export const siteConfig = {
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  name: "Maulik Savaliya",
  shortName: "Maulik",
  title: "Maulik Savaliya — Senior Full Stack Developer (React, Next.js, Node.js)",
  description:
    "Senior Full Stack Developer with 6+ years building fast, scalable web apps with React.js, Next.js, Node.js, TypeScript and AWS. Based in Ahmedabad, India — open to Frontend, Backend, Full Stack and MERN roles.",
  locale: "en_US",
  keywords: [
    "Maulik Savaliya",
    "Senior Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack Developer",
    "React.js Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript",
    "AWS",
    "Ahmedabad",
    "India",
    "Portfolio",
  ],
  /**
   * THE brand colour. Change this one value to re-colour the entire site —
   * UI gradients, glows, highlights and social (OG) images are all derived from it.
   */
  brandColor: "#7c3aed",
  themeColor: { light: "#fbfbfd", dark: "#09080d" },
} as const;

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof navLinks)[number]["id"];
