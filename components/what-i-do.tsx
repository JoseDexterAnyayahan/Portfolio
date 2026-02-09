"use client";

import { Video, Camera, Palette, Code, Wand2, Megaphone, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const services = [
  {
    title: "Web Development",
    description:
      "Fast, responsive websites built with modern frameworks and clean UI systems.",
    icon: Code,
    color: "from-purple-600 to-violet-600",
    gradient: "group-hover:bg-gradient-to-br group-hover:from-purple-600/20 group-hover:to-violet-600/5",
  },
  {
    title: "Videography",
    description:
      "Cinematic video production for brands, events, promos, and storytelling content.",
    icon: Video,
    color: "from-violet-600 to-purple-600",
    gradient: "group-hover:bg-gradient-to-br group-hover:from-violet-600/20 group-hover:to-purple-600/5",
  },
  {
    title: "Photography",
    description:
      "Professional photography for products, portraits, lifestyle, and brand visuals.",
    icon: Camera,
    color: "from-purple-600 to-fuchsia-600",
    gradient: "group-hover:bg-gradient-to-br group-hover:from-purple-600/20 group-hover:to-fuchsia-600/5",
  },
  {
    title: "Video & Photo Editing",
    description:
      "Color grading, retouching, and post-production that enhances mood and clarity.",
    icon: Wand2,
    color: "from-fuchsia-600 to-purple-600",
    gradient: "group-hover:bg-gradient-to-br group-hover:from-fuchsia-600/20 group-hover:to-purple-600/5",
  },
  {
    title: "Graphic Design",
    description:
      "Modern layouts, brand assets, and marketing creatives with strong visual impact.",
    icon: Palette,
    color: "from-violet-600 to-purple-600",
    gradient: "group-hover:bg-gradient-to-br group-hover:from-violet-600/20 group-hover:to-purple-600/5",
  },
  {
    title: "Social Media Management",
    description:
      "Content planning, visual consistency, posting strategy, and engagement optimization.",
    icon: Megaphone,
    color: "from-purple-600 to-violet-600",
    gradient: "group-hover:bg-gradient-to-br group-hover:from-purple-600/20 group-hover:to-violet-600/5",
  },
];

export default function WhatIDo() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="WhatIDo" className="relative py-20 md:py-28 overflow-hidden">

      {/* HEADER */}
      <div className="mb-16 max-w-2xl relative">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/10 border border-purple-600/20 mb-6 animate-fade-up backdrop-blur-sm">
          <Sparkles size={16} className="text-purple-600 animate-pulse" />
          <span className="text-sm font-medium text-purple-600">Expertise</span>
        </div>

        <h2 className="mb-4 text-3xl font-bold md:text-4xl animate-fade-up animate-delay-1">
          <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
            What I Do
          </span>
        </h2>

        <p className="leading-relaxed text-muted-foreground animate-fade-up animate-delay-2">
          I combine visual storytelling, creative production, and modern web
          technology to build compelling digital experiences and strong brand
          presence.
        </p>

        {/* Decorative line */}
        <div className="mt-6 h-1 w-20 bg-gradient-to-r from-purple-600 to-transparent rounded-full animate-fade-up animate-delay-3" />
      </div>

      {/* GRID */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 relative">
        {services.map((service, i) => {
          const Icon = service.icon;
          const isHovered = hoveredIndex === i;

          return (
            <Card
              key={service.title}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`
                group
                relative
                overflow-hidden
                border
                border-purple-600/10
                bg-background/50
                backdrop-blur-sm
                transition-all
                duration-500
                hover:-translate-y-3
                hover:shadow-2xl
                hover:shadow-purple-500/20
                hover:border-purple-600/30
                cursor-pointer
                animate-fade-up
                ${service.gradient}
              `}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Animated gradient border on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${service.color}`} />
                <div className={`absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b ${service.color} opacity-50`} />
              </div>

              {/* Subtle glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              {/* Floating particles effect on hover */}
              {isHovered && (
                <>
                  <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-purple-600/30 rounded-full animate-float-soft" />
                  <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-violet-600/30 rounded-full animate-float-soft" style={{ animationDelay: '0.2s' }} />
                  <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-purple-600/30 rounded-full animate-float-soft" style={{ animationDelay: '0.4s' }} />
                </>
              )}

              <CardContent className="p-7 relative z-10">
                {/* ICON BADGE */}
                <div className="relative mb-5 inline-block">
                  {/* Glow ring */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500 scale-150`} />
                  
                  {/* Icon container */}
                  <div
                    className={`
                      relative
                      inline-flex h-14 w-14 items-center justify-center
                      rounded-2xl
                      bg-purple-600/10
                      text-purple-600
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:rotate-6
                      group-hover:bg-gradient-to-br
                      group-hover:${service.color}
                      group-hover:text-white
                      shadow-lg
                      shadow-purple-600/10
                      group-hover:shadow-xl
                      group-hover:shadow-purple-600/30
                      border
                      border-purple-600/20
                      group-hover:border-transparent
                    `}
                  >
                    <Icon className="h-6 w-6 transition-transform duration-500 group-hover:scale-110" />
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="mb-3 text-lg font-semibold tracking-tight transition-colors group-hover:text-purple-600">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground/80">
                  {service.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span>Learn more</span>
                  <svg 
                    className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </CardContent>

              {/* Bottom shine effect */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          );
        })}
      </div>

      {/* Background grid pattern */}
      <div 
        className="absolute inset-0 -z-10 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
    </section>
  );
}