"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
const links = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#WhatIDo" },
  { label: "Projects", href: "#FeaturedWork" },
  { label: "Workflow", href: "#ProcessSection" },
  { label: "Stack", href: "#ToolsSection" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  /* ---------- scroll shadow ---------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------- active section spy ---------- */
  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.4 },
    );

    sections.forEach((sec) => sec && observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`
        sticky top-0 z-50 border-b
        backdrop-blur-xl supports-backdrop-filter:bg-background/60
        transition-all duration-300
        ${scrolled ? "bg-background/80 shadow-md" : "bg-background/60"}
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
          className="flex items-center font-logo text-2xl font-extrabold tracking-tight transition hover:scale-105"
        >
          <span className="text-muted-foreground">&lt;</span>
          <span className="text-primary">JD</span>
          <span className="text-muted-foreground">/&gt;</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-2 md:flex">
          {links.map((l) => (
            <NavLink key={l.href} href={l.href} active={active === l.href}>
              {l.label}
            </NavLink>
          ))}

          <Link href="#CTASection">
            <Button size="sm" className="ml-2">
              Hire Me
            </Button>
          </Link>

          <ThemeToggle />
        </nav>

        {/* MOBILE NAV */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-72">
              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
              </VisuallyHidden>

              <div className="mt-10 flex flex-col gap-4">
                {links.map((l) => (
                  <MobileLink
                    key={l.href}
                    href={l.href}
                    active={active === l.href}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </MobileLink>
                ))}

                <Link href="#CTASection" className="flex justify-center">
                  <Button className="mt-4 w-full max-w-xs">Hire Me</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

/* ---------- Desktop Link ---------- */

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`
        relative rounded-full px-3 py-1.5 text-sm font-medium transition
        ${
          active
            ? "bg-purple-600/15 text-purple-600"
            : "text-muted-foreground hover:text-foreground"
        }
      `}
    >
      {children}
    </Link>
  );
}

/* ---------- Mobile Link ---------- */

function MobileLink({
  href,
  active,
  children,
  onClick,
}: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        rounded-lg px-4 py-2 text-base font-medium transition
        ${
          active
            ? "bg-purple-600/15 text-purple-600"
            : "text-muted-foreground hover:text-foreground"
        }
      `}
    >
      {children}
    </Link>
  );
}
