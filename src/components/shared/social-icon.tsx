import { SiGithub, SiWhatsapp } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";
import type { SocialLink } from "@/types";
import { cn } from "@/lib/utils";

const MAP = { github: SiGithub, linkedin: FaLinkedinIn, mail: Mail, phone: Phone, whatsapp: SiWhatsapp };

export function SocialIcon({ icon, className }: { icon: SocialLink["icon"]; className?: string }) {
  const Icon = MAP[icon];
  return <Icon aria-hidden className={cn("size-4", className)} />;
}
