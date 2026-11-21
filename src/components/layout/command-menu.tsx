"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Copy, FileDown, FolderGit2, Hash, Moon, Search } from "lucide-react";
import { toast } from "sonner";
import {
  Command,
  CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";
import { navLinks } from "@/config/site";
import { profile, projects, roleOrder, roleProfiles, socials } from "@/data";
import { SocialIcon } from "@/components/shared/social-icon";
import { useThemeTransition } from "@/hooks/use-theme-transition";

/** ⌘K / Ctrl+K command palette: jump to sections, projects, resumes and links. */
export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { toggle } = useThemeTransition();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const run = (fn: () => void) => {
    setOpen(false);
    fn();
  };

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setOpen(true)}
        className="hidden h-9 gap-2 rounded-full pr-1.5 pl-3 text-muted-foreground lg:inline-flex"
        aria-label="Open command menu"
      >
        <Search className="size-3.5" />
        <span className="text-xs">Search</span>
        <Kbd>Ctrl K</Kbd>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(true)}
        className="size-9 rounded-full lg:hidden"
        aria-label="Open command menu"
      >
        <Search className="size-4" />
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen} title="Command menu" description="Navigate the portfolio" className="sm:max-w-xl">
        <Command>
        <CommandInput placeholder="Type a command or search…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigate">
            {navLinks.map((l) => (
              <CommandItem key={l.id} onSelect={() => run(() => router.push(`/#${l.id}`))}>
                <Hash /> {l.label}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Projects">
            {projects.map((p) => (
              <CommandItem key={p.slug} value={`${p.name} ${p.tagline}`} onSelect={() => run(() => router.push(`/projects/${p.slug}`))}>
                <FolderGit2 /> {p.name}
                <span className="ml-auto truncate text-xs text-muted-foreground">{p.tagline}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Resumes">
            {roleOrder.map((k) => (
              <CommandItem key={k} onSelect={() => run(() => window.open(roleProfiles[k].resume, "_blank"))}>
                <FileDown /> {roleProfiles[k].label} resume
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Actions">
            <CommandItem onSelect={() => run(() => toggle())}>
              <Moon /> Toggle theme
            </CommandItem>
            <CommandItem
              onSelect={() =>
                run(() => {
                  navigator.clipboard.writeText(profile.email);
                  toast.success("Email copied to clipboard");
                })
              }
            >
              <Copy /> Copy email
            </CommandItem>
            {socials.map((s) => (
              <CommandItem key={s.label} onSelect={() => run(() => window.open(s.href, "_blank"))}>
                <SocialIcon icon={s.icon} /> {s.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
