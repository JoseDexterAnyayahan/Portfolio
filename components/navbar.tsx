"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        sticky top-0 z-50 border-b
        backdrop-blur supports-backdrop-filter:bg-background/60
        transition-all duration-300
        ${scrolled ? "bg-background/80 shadow-md" : "bg-background/70"}
      `}
    >
      <div
        className={`
          mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8
          transition-all duration-300
          ${scrolled ? "h-14" : "h-16"}
        `}
      >
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center font-logo text-2xl font-extrabold tracking-tight transition hover:opacity-90"
        >
          <span className="text-muted-foreground">&lt;</span>
          <span className="text-primary">JD</span>
          <span className="text-muted-foreground">/&gt;</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-6 md:flex">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#WhatIDo">Expertise</NavLink>
          <NavLink href="#FeaturedWork">Projects</NavLink>
          <NavLink href="#ProcessSection">Workflow</NavLink>
          <NavLink href="#ToolsSection">Stack</NavLink>

          <Link href="#CTASection">
            <Button size="sm">Hire Me</Button>
          </Link>

          <ThemeToggle />
        </nav>

        {/* MOBILE NAV */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-64">
              <div className="mt-8 flex flex-col gap-6">
                <MobileLink href="/about">About</MobileLink>
                <MobileLink href="/work">Work</MobileLink>
                <MobileLink href="/services">Services</MobileLink>

                <Link href="/contact">
                  <Button className="w-full">Contact</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

/* ---------- helpers ---------- */

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-muted-foreground transition hover:text-foreground"
    >
      {children}
    </Link>
  );
}

function MobileLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-base font-medium text-muted-foreground hover:text-foreground"
    >
      {children}
    </Link>
  );
}
