"use client";

import Link from "next/link";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Heart,
} from "lucide-react";
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-purple-600/10 mt-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/5 to-transparent pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative">
        <div className="grid gap-12 md:grid-cols-3 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-2">
            <Link
              href="/"
              className="group inline-flex items-center font-logo text-2xl font-extrabold tracking-tight transition-all duration-300"
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
            </Link>

            <p className="text-muted-foreground max-w-md leading-relaxed">
              Specialized in{" "}
              <span className="text-purple-600 font-medium">
                web development
              </span>{" "}
              and creating engaging digital content through{" "}
              <span className="text-purple-600 font-medium">design</span>,{" "}
              <span className="text-purple-600 font-medium">videography</span>,
              and{" "}
              <span className="text-purple-600 font-medium">photography</span>.
            </p>

            {/* Social links - Mobile */}
            <div className="flex gap-3 md:hidden">
              <SocialLink
                href="https://www.facebook.com/jd.anyayahan"
                icon={Facebook}
                label="Facebook"
              />
              <SocialLink
                href="https://www.instagram.com/jyd.wrld/"
                icon={Instagram}
                label="Instagram"
              />
              <SocialLink
                href="https://www.linkedin.com/in/jose-dexter-anyayahan-3b6a00367/"
                icon={Linkedin}
                label="LinkedIn"
              />
              <SocialLink
                href="https://github.com/JoseDexterAnyayahan"
                icon={Github}
                label="GitHub"
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground flex items-center gap-2">
              <div className="h-px w-4 bg-purple-600/50" />
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm">
              <FooterLink href="/#about">About</FooterLink>
              <FooterLink href="/#WhatIDo">Expertise</FooterLink>
              <FooterLink href="/#FeaturedWork">Projects</FooterLink>
              <FooterLink href="/#ProcessSection">Workflow</FooterLink>
              <FooterLink href="/#ToolsSection">Stack</FooterLink>
            </ul>
          </div>

          {/* Social - Desktop */}
          <div className="space-y-4 hidden md:block">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground flex items-center gap-2">
              <div className="h-px w-4 bg-purple-600/50" />
              Connect
            </h4>

            <div className="flex flex-col gap-3">
              <SocialLink
                href="https://www.facebook.com/jd.anyayahan"
                icon={Facebook}
                label="Facebook"
              />
              <SocialLink
                href="https://www.instagram.com/jyd.wrld/"
                icon={Instagram}
                label="Instagram"
              />
              <SocialLink
                href="https://www.linkedin.com/in/jose-dexter-anyayahan-3b6a00367/"
                icon={Linkedin}
                label="LinkedIn"
              />
              <SocialLink
                href="https://github.com/JoseDexterAnyayahan"
                icon={Github}
                label="GitHub"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-purple-600/30 to-transparent" />

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Jose Dexter Anyayahan. Made with{" "}
            <Heart className="inline h-3.5 w-3.5 text-purple-600 fill-purple-600 animate-pulse" />{" "}
            in the Philippines
          </p>
        </div>
      </div>
    </footer>
  );
}

/* Social Link Component */
function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 text-muted-foreground hover:text-purple-600 transition-all duration-300"
    >
      <div className="relative flex items-center justify-center h-9 w-9 rounded-lg border border-purple-600/20 bg-purple-600/5 group-hover:border-purple-600/40 group-hover:bg-purple-600/10 transition-all duration-300">
        <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-lg bg-purple-600/20 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
      </div>

      <span className="text-sm font-medium hidden md:inline">{label}</span>
    </Link>
  );
}

/* Footer Link Component */
function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="group inline-flex items-center gap-2 text-muted-foreground hover:text-purple-600 transition-colors duration-300"
      >
        <div className="h-px w-0 bg-purple-600 group-hover:w-3 transition-all duration-300" />
        {children}
      </Link>
    </li>
  );
}
