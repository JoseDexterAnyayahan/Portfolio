"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Github,
  LucideIcon,
  Share2,
  X,
  MessageCircle,
} from "lucide-react";

interface SocialLink {
  href: string;
  icon: LucideIcon;
  label: string;
  color: string;
  glowColor: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://www.facebook.com/jd.anyayahan",
    icon: Facebook,
    label: "Facebook",
    color:
      "hover:bg-[#1877F2]/10 hover:text-[#1877F2] hover:border-[#1877F2]/30",
    glowColor: "shadow-[0_0_10px_rgba(24,119,242,0.3)]",
  },
  {
    href: "https://www.instagram.com/jyd.wrld/",
    icon: Instagram,
    label: "Instagram",
    color:
      "hover:bg-gradient-to-br hover:from-[#833AB4]/10 hover:via-[#E1306C]/10 hover:to-[#F77737]/10 hover:text-[#E1306C] hover:border-[#E1306C]/30",
    glowColor: "shadow-[0_0_10px_rgba(225,48,108,0.3)]",
  },
  {
    href: "https://www.linkedin.com/in/jose-dexter-anyayahan-4647923a6/",
    icon: Linkedin,
    label: "LinkedIn",
    color:
      "hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] hover:border-[#0A66C2]/30",
    glowColor: "shadow-[0_0_10px_rgba(10,102,194,0.3)]",
  },
  {
    href: "https://github.com/JoseDexterAnyayahan",
    icon: Github,
    label: "GitHub",
    color:
      "hover:bg-foreground/10 hover:text-foreground hover:border-foreground/30",
    glowColor: "shadow-[0_0_10px_rgba(128,128,128,0.3)]",
  },
];

export default function FloatingSocials() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Version */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={social.label}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  relative flex items-center justify-center w-12 h-12
                  bg-background/80 backdrop-blur-md
                  border border-border/50
                  rounded-xl
                  transition-all duration-500 ease-out
                  ${social.color}
                  ${social.glowColor}
                  hover:scale-110 hover:-translate-x-1 hover:shadow-lg
                  active:scale-95
                  group-hover:border-opacity-100
                `}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <Icon className="w-5 h-5 transition-transform duration-500 group-hover:rotate-[360deg]" />

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10 bg-current/20" />
              </Link>

              {/* Tooltip */}
              <div
                className={`
                  absolute right-16 top-1/2 -translate-y-1/2
                  px-3 py-1.5 rounded-lg
                  bg-popover text-popover-foreground
                  text-sm font-medium whitespace-nowrap
                  border border-border shadow-lg
                  pointer-events-none
                  transition-all duration-300 ease-out
                  ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"}
                `}
              >
                {social.label}
                {/* Arrow */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-8 border-transparent border-l-border" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-[7px] border-transparent border-l-popover ml-[-1px]" />
              </div>
            </div>
          );
        })}

        {/* Animated line connector */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -z-10 -translate-x-1/2">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-border to-transparent opacity-30" />
        </div>
      </div>

      {/* Mobile Version */}
      <div className="fixed bottom-6 right-6 z-50 lg:hidden">
        {/* Social Links - Spread vertically when open */}
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          const offsetY = -(index + 1) * 60; // Vertical spacing

          return (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                absolute flex items-center justify-center w-12 h-12
                bg-background/90 backdrop-blur-md
                border border-border/50
                rounded-full
                transition-all duration-500 ease-out
                ${social.color}
                ${social.glowColor}
                active:scale-95
                ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"}
              `}
              style={{
                transform: isOpen
                  ? `translateY(${offsetY}px)`
                  : "translateY(0)",
                transitionDelay: isOpen
                  ? `${index * 50}ms`
                  : `${(socialLinks.length - index) * 50}ms`,
              }}
            >
              <Icon className="w-5 h-5" />
            </Link>
          );
        })}

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            relative flex items-center justify-center w-14 h-14
            bg-primary text-primary-foreground
            rounded-full shadow-[0_0_15px_rgba(var(--primary),0.4)]
            transition-all duration-500 ease-out
            hover:scale-110 active:scale-95
            ${isOpen ? "rotate-180" : "rotate-0"}
          `}
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </button>
      </div>
    </>
  );
}
