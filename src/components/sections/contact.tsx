"use client";

import { useState } from "react";
import { Check, Copy, Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/effects/reveal";
import { SpotlightCard } from "@/components/effects/spotlight-card";
import { SocialIcon } from "@/components/shared/social-icon";
import { profile, socials } from "@/data";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    toast.success("Email copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  // No backend needed: composes an email in the visitor's mail client.
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${data.get("message")}\n\n— ${name} (${data.get("email")})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email app…");
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          highlight="great together"
          description="Have a role, a product or an idea? My inbox is always open — I usually reply within a day."
        />

        <div className="grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <SpotlightCard className="h-full">
              <div className="flex h-full flex-col gap-6 p-6 md:p-8">
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <div className="mt-1 flex items-center gap-2">
                    <a href={`mailto:${profile.email}`} className="font-heading text-lg font-semibold break-all hover:text-primary">
                      {profile.email}
                    </a>
                    <Button size="icon" variant="ghost" onClick={copyEmail} aria-label="Copy email" className="shrink-0">
                      {copied ? <Check className="text-emerald-500" /> : <Copy />}
                    </Button>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="mt-1 inline-flex items-center gap-2 font-heading text-lg font-semibold hover:text-primary">
                    <Phone className="size-4" /> {profile.phone}
                  </a>
                </div>
                <div>
                  <p className="mb-3 text-sm text-muted-foreground">Find me on</p>
                  <div className="flex flex-wrap gap-2">
                    {socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border bg-background/50 px-3 py-1.5 text-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                      >
                        <SocialIcon icon={s.icon} /> {s.label}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="mt-auto rounded-xl bg-brand-gradient p-5 text-white">
                  <p className="font-heading text-lg font-bold">{profile.availability}</p>
                  <p className="text-sm text-white/85">Full-time roles · Remote or Ahmedabad · Freelance projects</p>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <SpotlightCard className="h-full">
              <form onSubmit={onSubmit} className="grid gap-5 p-6 md:p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" required placeholder="Jane Recruiter" className="h-11" autoComplete="name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required placeholder="jane@company.com" className="h-11" autoComplete="email" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={7}
                    placeholder="Tell me about the role or project…"
                    className="resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="group h-12 rounded-full bg-brand-gradient text-base text-white shadow-lg shadow-primary/25 hover:opacity-95">
                  <Send className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /> Send message
                </Button>
                <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                  <Mail className="size-3.5" /> Opens your email app with the message pre-filled.
                </p>
              </form>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
