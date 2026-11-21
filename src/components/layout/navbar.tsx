"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { Menu, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/config/site";
import { profile, roleProfiles } from "@/data";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { CommandMenu } from "./command-menu";

const sectionIds = navLinks.map((l) => l.id);

export function Navbar() {
  const pathname = usePathname();
  const active = useActiveSection(sectionIds);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 20);
    setHidden(y > prev && y > 400 && !open);
  });

  const href = (id: string) => (pathname === "/" ? `#${id}` : `/#${id}`);

  return (
    <motion.header
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        aria-label="Main"
        className={cn(
          "flex w-full max-w-5xl items-center justify-between gap-2 rounded-full border px-3 py-2 transition-all duration-300",
          scrolled ? "glass border-border shadow-lg shadow-primary/5" : "border-transparent",
        )}
      >
        <Link href="/" className="group flex items-center gap-2 rounded-full pr-2" aria-label={`${profile.name} — home`}>
          <span className="grid size-9 place-items-center rounded-full bg-brand-gradient font-heading text-sm font-bold text-white shadow-md shadow-primary/30 transition-transform group-hover:rotate-12">
            MS
          </span>
          <span className="hidden font-heading font-semibold sm:inline">{profile.firstName}</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.id} className="relative">
              <Link
                href={href(l.id)}
                className={cn(
                  "relative z-10 block rounded-full px-3.5 py-1.5 text-sm transition-colors",
                  active === l.id && pathname === "/" ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {l.label}
              </Link>
              {active === l.id && pathname === "/" && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <CommandMenu />
          <ThemeToggle />
          <Button asChild size="sm" className="ml-1 hidden h-9 rounded-full bg-brand-gradient px-4 text-white shadow-md shadow-primary/25 hover:opacity-90 sm:inline-flex">
            <a href={roleProfiles.fullstack.resume} target="_blank" rel="noopener">
              <FileDown /> Resume
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="size-9 rounded-full md:hidden" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 glass">
              <SheetHeader>
                <SheetTitle className="text-left font-heading">Menu</SheetTitle>
              </SheetHeader>
              <ul className="flex flex-col gap-1 px-4">
                {navLinks.map((l, i) => (
                  <motion.li
                    key={l.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link
                      href={href(l.id)}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-3 text-lg font-medium hover:bg-accent"
                    >
                      {l.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto p-4">
                <Button asChild className="w-full rounded-full bg-brand-gradient text-white">
                  <a href={roleProfiles.fullstack.resume} target="_blank" rel="noopener">
                    <FileDown /> Download resume
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
