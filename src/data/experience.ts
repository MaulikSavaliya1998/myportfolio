import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "Autoverse AI Pvt. Ltd.",
    role: "Full Stack Engineer",
    location: "Ahmedabad, India",
    start: "Jul 2025",
    end: "Oct 2026",
    summary: "Led delivery of AI-powered automotive SaaS products, from architecture to deployment.",
    highlights: [
      "Built AutoSwitch, a dual-sided automotive job portal for candidates and dealerships — defined system architecture, REST API contracts, database schemas and RBAC.",
      "Shipped OpenAI features (resume parsing, AI job descriptions, interview questions) and used Claude Code & AI-driven workflows to accelerate delivery.",
      "Configured AWS EC2 and Lambda for high-concurrency workloads with elastic scaling during peak traffic.",
      "Streamlined CI/CD with GitHub Actions, ESLint and Jest checks on every PR, and Sentry for error monitoring.",
      "Partnered with product, design and leadership to gather requirements and communicate delivery progress.",
    ],
    stack: ["Next.js", "React.js", "Node.js", "TypeScript", "PostgreSQL", "Kafka", "Typesense", "OpenAI", "AWS"],
  },
  {
    company: "7Span Internet Pvt. Ltd.",
    role: "Senior Software Engineer",
    location: "Ahmedabad, India",
    start: "Jul 2023",
    end: "Jul 2025",
    summary: "Built and led 4+ client products across real estate, social media, research and SaaS.",
    highlights: [
      "Led frontend for a large-scale real estate platform — dynamic video thumbnails, OneSignal push notifications and search & recommendation algorithms.",
      "Launched a social platform on an event-driven architecture with Apache Kafka and WebSocket for real-time feeds and auto-generated thumbnails.",
      "Added a Redis caching layer that cut API response times and database load across high-traffic modules.",
      "Built a multilingual SSR content platform with strong SEO, plus a SaaS workforce tool with timesheets, milestones and role-based dashboards.",
      "Integrated Mapbox with custom clustering, standardised UI on Shadcn UI + Tailwind CSS, mentored juniors and led code reviews.",
    ],
    stack: ["Next.js", "React.js", "Nest.js", "TypeScript", "Redux Toolkit", "Kafka", "Redis", "WebSocket", "Mapbox"],
  },
  {
    company: "GTCSYS Services Pvt. Ltd.",
    role: "Full Stack Developer",
    location: "Ahmedabad, India",
    start: "May 2021",
    end: "Jul 2023",
    summary: "Engineered a real estate investment platform that supported a $650M funding milestone.",
    highlights: [
      "Built Splitero with React.js, Node.js and Express.js, integrating Smarty Address, First American and Google Maps APIs.",
      "Deployed AWS Lambda, S3, Cognito and Amplify — moving core services to serverless to reduce server cost.",
      "Designed Elasticsearch-powered search with custom clustering over large property datasets.",
      "Added Mixpanel analytics and LogTable API-failure tracking; delivered a Chrome extension for secure credential sharing.",
    ],
    stack: ["React.js", "Node.js", "Express.js", "TypeScript", "PostgreSQL", "Elasticsearch", "AWS"],
  },
  {
    company: "Sarjen Systems Pvt. Ltd.",
    role: "Software Trainee",
    location: "Ahmedabad, India",
    start: "Jan 2020",
    end: "Oct 2020",
    summary: "Where it all started — learning production engineering from senior developers.",
    highlights: [
      "Trained hands-on in JavaScript, React.js, Node.js, SQL/MySQL, HTML, CSS and Bootstrap.",
      "Contributed to production code by resolving bugs and shipping minor fixes under senior guidance.",
    ],
    stack: ["JavaScript", "React.js", "Node.js", "MySQL"],
  },
];
