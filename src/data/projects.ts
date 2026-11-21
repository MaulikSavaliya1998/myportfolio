import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "autoswitch",
    name: "AutoSwitch",
    tagline: "AI-powered automotive job portal",
    description:
      "An automotive-only recruitment platform connecting job seekers with car dealerships, service centres and OEMs — with candidate, recruiter and super-admin portals and AI woven through the hiring flow.",
    company: "Autoverse AI",
    role: "Full Stack Engineer",
    period: "Aug 2025 — Oct 2026",
    url: "https://autoswitch.in",
    domain: "Automotive · HR Tech",
    categories: ["Full Stack", "Frontend", "AI"],
    featured: true,
    metrics: [
      { value: "3", label: "Portals (candidate, recruiter, admin)" },
      { value: "AI", label: "Resume parsing & job writing" },
      { value: "Kafka", label: "Event-driven microservices" },
    ],
    stack: ["Next.js", "React.js", "Redux Toolkit", "Shadcn UI", "Tailwind CSS", "Express.js", "PostgreSQL", "Redis", "Kafka", "Typesense", "OpenAI API", "AWS (S3, EC2, Lambda, SQS, SNS)"],
    highlights: [
      "AI resume parsing with OpenAI that extracts candidate details and auto-fills profiles.",
      "AI-assisted job posting that generates job descriptions, screening and interview questions.",
      "Job search, filters, applications, candidate profiles and job-alert flows for candidates.",
      "Dealership admin for HR and interviewer users across brands, branches and role-based permissions.",
      "Typesense-powered candidate pool with advanced filters, sorting and pagination for HR teams.",
      "Make.com automation that publishes approved jobs to AutoSwitch social media channels.",
    ],
  },
  {
    slug: "startstak",
    name: "StartStak",
    tagline: "AI-native product-market-fit platform",
    description:
      "A responsive, SEO-friendly marketing frontend for an AI-native product-market fit and go-to-market platform serving startups and enterprises.",
    company: "7Span Internet",
    role: "Senior Software Engineer",
    period: "Mar 2025 — Jul 2025",
    url: "https://startstak.ai",
    domain: "SaaS · Marketing",
    categories: ["Frontend"],
    featured: true,
    metrics: [
      { value: "SEO", label: "First-class search visibility" },
      { value: "100%", label: "Responsive, reusable sections" },
      { value: "Leads", label: "Conversion-focused flows" },
    ],
    stack: ["Next.js", "React.js", "Tailwind CSS", "Shadcn UI", "JavaScript", "HTML5", "CSS3"],
    highlights: [
      "Reusable components for services, audience segments, testimonials, workshops and early-access sign-up.",
      "Interactive landing sections highlighting measurable marketing, product and growth outcomes.",
      "Responsive navigation and lead-generation flows to lift engagement and conversion.",
      "Clean, scalable frontend code delivered in close collaboration with design and product.",
    ],
  },
  {
    slug: "nammabda",
    name: "nammaBDA",
    tagline: "Real estate buying, selling & agent platform",
    description:
      "A property marketplace for buyers, sellers and agents with personalised recommendations, agent assignment and a rule-driven offer/counter-offer negotiation flow.",
    company: "7Span Internet",
    role: "Senior Software Engineer",
    period: "Jul 2024 — Mar 2025",
    url: "https://nammabda.com",
    domain: "Real Estate",
    categories: ["Full Stack", "Frontend"],
    featured: true,
    metrics: [
      { value: "3", label: "User types: buyer, seller, agent" },
      { value: "Offers", label: "Rule-driven negotiation engine" },
      { value: "S3", label: "Scalable media storage" },
    ],
    stack: ["Next.js", "React.js", "Redux Toolkit", "RTK Query", "Material UI", "TanStack Table", "Express.js", "PostgreSQL", "GraphQL", "Redis", "AWS S3"],
    highlights: [
      "Main marketplace in Next.js and admin panel in React.js with Tailwind CSS & Material UI.",
      "Buyer and seller onboarding questionnaires (preferences, budget, criteria, documents) powering recommendations.",
      "Most-viewed, most-liked and most-bookmarked tracking to surface high-interest listings.",
      "Admin listing management with TanStack Table — search, filters, sorting and pagination.",
      "Agent assignment workflows with role-based access and admin oversight.",
      "Offer / counter-offer flow with notifications and full offer history.",
    ],
  },
  {
    slug: "fotofizz",
    name: "FotoFizz",
    tagline: "Social network for professional photographers",
    description:
      "A community platform made exclusively for professional photographers to share images, videos, documents and portfolios — with real-time feeds, forums and networking.",
    company: "7Span Internet",
    role: "Software Engineer",
    period: "Jan 2024 — Jul 2024",
    domain: "Social Media",
    categories: ["Full Stack", "Frontend"],
    metrics: [
      { value: "Real-time", label: "Kafka + WebSocket feeds" },
      { value: "Auto", label: "Thumbnail generation" },
      { value: "CDN", label: "Media served via S3 + CDN" },
    ],
    stack: ["Next.js", "React.js", "Redux Toolkit", "Shadcn UI", "Tailwind CSS", "Express.js", "MongoDB", "Redis", "Kafka", "WebSocket", "AWS (S3, CDN)"],
    highlights: [
      "Photographer profiles, portfolio management, media feeds, likes, comments and bookmarks.",
      "Community forums on photography, equipment, editing and business growth.",
      "Networking features for photographer discovery, profile viewing and connections.",
      "Real-time feeds over Kafka and WebSocket with automatic thumbnail creation for uploads.",
      "Responsive, performance-optimised UI with Next.js and Tailwind CSS.",
    ],
  },
  {
    slug: "pemm-princeton",
    name: "PEMM — Princeton",
    tagline: "Digital humanities research platform",
    description:
      "A research platform for Princeton University to explore Ethiopian manuscripts and stories — fast SSR pages, deep search across millions of data points and researcher-first tools.",
    company: "7Span Internet",
    role: "Software Engineer",
    period: "Jul 2023 — Jan 2024",
    url: "https://pemm.princeton.edu/en-us",
    domain: "Research · Education",
    categories: ["Full Stack", "Frontend"],
    featured: true,
    metrics: [
      { value: "3.3M+", label: "Searchable data points" },
      { value: "1,000+", label: "Stories & manuscripts" },
      { value: "2,500+", label: "Images" },
    ],
    stack: ["Next.js", "Nest.js", "TypeScript", "Tailwind CSS", "Context API", "MySQL", "Redis", "Typesense", "OpenSearch", "Directus CMS", "Mapbox", "AWS S3"],
    highlights: [
      "SSR pages for exploring 1,000+ stories, manuscripts and 2,500+ images.",
      "Advanced search, filters, sorting, table view and pagination across 3.3M+ data points.",
      "Mapbox geographical visualisation for research exploration.",
      "Researcher tools: CSV export, manuscript views and an Incipit search tool.",
      "English–Amharic localisation with SEO-friendly, accessible UI components.",
      "Directus headless CMS for structured management of large-scale historical content.",
    ],
  },
  {
    slug: "splitero",
    name: "Splitero",
    tagline: "Home equity investment platform",
    description:
      "A platform that lets homeowners receive cash in exchange for a share of their property's future value — secure, high-performing, and a key part of the company's $650M funding milestone.",
    company: "GTCSYS Services",
    role: "Full Stack Developer",
    period: "May 2021 — Jul 2023",
    url: "https://splitero.com",
    domain: "FinTech · Real Estate",
    categories: ["Full Stack", "Frontend", "Backend"],
    featured: true,
    metrics: [
      { value: "$650M", label: "Funding milestone supported" },
      { value: "3", label: "Property data APIs integrated" },
      { value: "Serverless", label: "AWS Lambda, S3, Cognito" },
    ],
    stack: ["React.js", "TypeScript", "Redux", "Tailwind CSS", "PrimeReact", "Express.js", "PostgreSQL", "MongoDB", "Microservices", "AWS (S3, Amplify, Cognito, Lambda)", "Mixpanel"],
    highlights: [
      "Integrated Smarty Address, First American valuation and Google Maps for property identification and visualisation.",
      "Streamlined pre-qualification questionnaire and secure document submission to lift conversion.",
      "Secure auth and document upload with AWS Cognito and S3; frontend deployed via AWS Amplify.",
      "Mixpanel behaviour tracking with actionable analytics reports for product decisions.",
      "LogTable-based API failure tracking for faster debugging and higher reliability.",
      "Reusable, responsive UI components with React, Tailwind CSS and PrimeReact.",
    ],
  },
];

export const projectCategories = ["All", "Full Stack", "Frontend", "Backend", "AI"] as const;

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
