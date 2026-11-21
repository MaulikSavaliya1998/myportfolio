import type { IconType } from "react-icons";
import {
  SiApachekafka, SiClaude, SiCss, SiDirectus, SiDocker, SiElasticsearch, SiEslint, SiExpress, SiGit,
  SiGithubactions, SiGooglemaps, SiGraphql, SiHtml5, SiJavascript, SiJest, SiJsonwebtokens, SiMapbox,
  SiMixpanel, SiMongodb, SiMui, SiMysql, SiNestjs, SiNextdotjs, SiNodedotjs, SiOpensearch, SiPostgresql,
  SiPostman, SiPrimereact, SiReact, SiReactquery, SiReacthookform, SiReacttable, SiRedis, SiRedux,
  SiSentry, SiShadcnui, SiSocketdotio, SiSupabase, SiTailwindcss, SiTestinglibrary, SiTypescript,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { RiOpenaiFill } from "react-icons/ri";
import {
  Accessibility, Boxes, Cable, Gauge, Globe, Layers, LayoutGrid, Network, Rocket, Search, ShieldCheck,
  Smartphone, Sparkles, SplitSquareHorizontal, Timer, Workflow, Zap, type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Maps a skill/tech name (as written in src/data) to an icon.
 * Unknown names fall back to a generic icon, so adding a new skill never breaks the UI.
 */
const ICONS: Record<string, IconType | LucideIcon> = {
  "react.js": SiReact, react: SiReact, "next.js": SiNextdotjs, next: SiNextdotjs,
  typescript: SiTypescript, "javascript (es6+)": SiJavascript, javascript: SiJavascript,
  html5: SiHtml5, css3: SiCss, "tailwind css": SiTailwindcss, "shadcn ui": SiShadcnui,
  "material ui": SiMui, primereact: SiPrimereact, "redux toolkit": SiRedux, redux: SiRedux,
  "rtk query": SiRedux, "react query": SiReactquery, "context api": SiReact,
  "react hook form": SiReacthookform, "tanstack table": SiReacttable,
  "node.js": SiNodedotjs, "express.js": SiExpress, "nest.js": SiNestjs, graphql: SiGraphql,
  websocket: SiSocketdotio, postgresql: SiPostgresql, mongodb: SiMongodb, mysql: SiMysql,
  redis: SiRedis, "apache kafka": SiApachekafka, kafka: SiApachekafka, elasticsearch: SiElasticsearch,
  opensearch: SiOpensearch, supabase: SiSupabase, typesense: Search, "directus cms": SiDirectus,
  aws: FaAws, "aws lambda": FaAws, "aws s3": FaAws, "aws cognito": FaAws,
  docker: SiDocker, "github actions": SiGithubactions, "ci/cd": Workflow, sentry: SiSentry,
  jest: SiJest, "react testing library": SiTestinglibrary, postman: SiPostman, eslint: SiEslint,
  jwt: SiJsonwebtokens, rbac: ShieldCheck, "openai api": RiOpenaiFill, openai: RiOpenaiFill,
  "claude code": SiClaude, "llm integration": Sparkles, "prompt engineering": Sparkles,
  mapbox: SiMapbox, "google maps": SiGooglemaps, mixpanel: SiMixpanel, git: SiGit,
  "rest apis": Cable, microservices: Boxes, "event-driven architecture": Network, serverless: Zap,
  "system design": Layers, "responsive design": Smartphone, accessibility: Accessibility,
  "ssr / ssg / isr": Rocket, "code splitting": SplitSquareHorizontal, "lazy loading": Timer,
  "core web vitals": Gauge, seo: Search, i18n: Globe,
};

export function TechIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name.toLowerCase()] ?? LayoutGrid;
  return <Icon aria-hidden className={cn("size-4 shrink-0", className)} />;
}
