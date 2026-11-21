import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] flex-col items-center justify-center px-4 text-center">
      <p className="font-heading text-[8rem] leading-none font-extrabold text-gradient md:text-[12rem]">404</p>
      <h1 className="mt-4 text-2xl font-bold md:text-3xl">This page wandered off.</h1>
      <p className="mt-2 text-muted-foreground">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <Button asChild className="mt-8 rounded-full bg-brand-gradient text-white">
        <Link href="/">
          <ArrowLeft /> Back home
        </Link>
      </Button>
    </section>
  );
}
