"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Sparkles, ArrowRight } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

/* ---------------- LINKS ---------------- */
const links = [
  { label: "About", href: "/#about", id: "about" },
  { label: "Expertise", href: "/#WhatIDo", id: "WhatIDo" },
  { label: "Projects", href: "/#FeaturedWork", id: "FeaturedWork" },
  { label: "Workflow", href: "/#ProcessSection", id: "ProcessSection" },
  { label: "Stack", href: "/#ToolsSection", id: "ToolsSection" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  /* ---------- SCROLL SHADOW ---------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------- ACTIVE SECTION SPY (HOME ONLY) ---------- */
  useEffect(() => {
    if (!isHome) return;

    const sections = links.map((l) => document.getElementById(l.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    sections.forEach((sec) => sec && observer.observe(sec));
    return () => observer.disconnect();
  }, [isHome]);

  return (
    <header
  className={`
    sticky md:static top-0 z-50
    backdrop-blur-xl
    transition-all duration-500
    ${
      scrolled
        ? "bg-background/90 shadow-lg shadow-purple-500/5 border-b border-purple-600/10"
        : "bg-background/60 border-b border-border/40"
    }
  `}
>

      {/* Top accent line */}
      <div
        className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-purple-600/50 to-transparent transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"}`}
      />

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
          className="group flex items-center font-logo text-2xl font-extrabold tracking-tight transition-all duration-300 hover:scale-105"
        >
          <span className="text-muted-foreground transition-colors group-hover:text-purple-600">
            &lt;
          </span>
          <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
            JD
          </span>
          <span className="text-muted-foreground transition-colors group-hover:text-purple-600">
            /&gt;
          </span>

          {/* Subtle glow on hover */}
          <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 bg-purple-600/5 blur-xl rounded-full" />
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l, index) => (
            <NavLink
              key={l.id}
              href={l.href}
              active={isHome && active === l.id}
              delay={index * 0.05}
            >
              {l.label}
            </NavLink>
          ))}

          <Link href="/#CTASection">
            <Button
              size="sm"
              className="ml-3 bg-purple-600 hover:bg-purple-700"
            >
              Hire Me
            </Button>
          </Link>

          <div className="ml-2">
            <ThemeToggle />
          </div>
        </nav>

        {/* MOBILE NAV */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-purple-600/10 transition-colors"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-72 border-l border-purple-600/10 bg-background/95 backdrop-blur-xl"
            >
              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
              </VisuallyHidden>

              {/* Mobile menu header */}
              <div className="border-b border-purple-600/10 pb-4">
                <div className="flex items-center gap-2">
                  <Sparkles
                    size={16}
                    className="text-purple-600 animate-pulse"
                  />
                  <span className="font-semibold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                    Menu
                  </span>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-2">
                {links.map((l) => (
                  <MobileLink
                    key={l.id}
                    href={l.href}
                    active={isHome && active === l.id}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </MobileLink>
                ))}

                <Link
                  href="/#CTASection"
                  onClick={() => setOpen(false)}
                  className="mt-6"
                >
                  <Button className="group w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 shadow-lg shadow-purple-600/30">
                    <span>Hire Me</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </Link>
              </div>

              {/* Decorative element */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="h-px bg-gradient-to-r from-transparent via-purple-600/30 to-transparent" />
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
  delay = 0,
}: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <Link
      href={href}
      className={`
        group
        relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300
        animate-fade-up
        ${
          active
            ? "bg-purple-600/15 text-purple-600"
            : "text-muted-foreground hover:text-foreground hover:bg-purple-600/5"
        }
      `}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}

      {/* Active indicator dot */}
      {active && (
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-600 rounded-full animate-pulse" />
      )}

      {/* Hover underline */}
      {!active && (
        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full transition-all duration-300 group-hover:w-3/4" />
      )}
    </Link>
  );
}

/* ---------- Mobile Link (Simplified) ---------- */
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
        group
        relative rounded-xl px-4 py-3 text-base font-medium transition-all duration-200
        ${
          active
            ? "bg-gradient-to-r from-purple-600/20 to-violet-600/10 text-purple-600 border border-purple-600/30"
            : "text-muted-foreground hover:text-foreground hover:bg-purple-600/5 border border-transparent hover:border-purple-600/20"
        }
      `}
    >
      <div className="flex items-center justify-between">
        <span>{children}</span>

        {active ? (
          <Sparkles size={14} className="text-purple-600 animate-pulse" />
        ) : (
          <ArrowRight
            size={14}
            className="opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1"
          />
        )}
      </div>

      {/* Left accent bar for active */}
      {active && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-gradient-to-b from-purple-600 to-violet-600 rounded-r-full" />
      )}
    </Link>
  );
}
