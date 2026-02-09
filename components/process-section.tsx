"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Workflow, ArrowRight } from "lucide-react";
import { useState } from "react";

const processSteps = [
  {
    step: "01",
    title: "Discovery & Direction",
    description:
      "We begin with deep understanding of goals, audience, and brand voice to align every creative decision with clear purpose.",
    icon: "🎯",
    color: "from-purple-600 to-violet-600",
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description:
      "Concepts, layouts, shot lists, and technical structures are mapped to ensure clarity, efficiency, and strong execution.",
    icon: "📋",
    color: "from-violet-600 to-purple-600",
  },
  {
    step: "03",
    title: "Production & Creation",
    description:
      "Filming, designing, editing, and development transform ideas into high-impact visual and digital assets.",
    icon: "⚡",
    color: "from-purple-600 to-fuchsia-600",
  },
  {
    step: "04",
    title: "Refinement & Delivery",
    description:
      "Every detail is polished, optimized, and finalized before launch, publishing, or deployment.",
    icon: "✨",
    color: "from-fuchsia-600 to-purple-600",
  },
];

export default function ProcessSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="ProcessSection"
      className="relative py-24 md:py-28 overflow-hidden"
    >

      {/* HEADER */}
      <div className="mb-20 max-w-2xl space-y-4 relative">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/10 border border-purple-600/20 backdrop-blur-sm animate-fade-up">
          <Workflow size={16} className="text-purple-600" />
          <span className="text-sm font-medium text-purple-600">
            Workflow
          </span>
        </div>

        <h2 className="text-3xl font-bold tracking-tight md:text-4xl animate-fade-up animate-delay-1">
          <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
            Creative Process
          </span>
        </h2>

        <p className="text-lg leading-relaxed text-muted-foreground animate-fade-up animate-delay-2">
          A structured, client-focused workflow that turns ideas into
          cinematic visuals and high-performing digital experiences.
        </p>

        {/* Decorative line */}
        <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-transparent rounded-full animate-fade-up animate-delay-3" />
      </div>

      {/* Connection Lines (Desktop) */}
      <div className="hidden lg:block absolute top-[340px] left-0 right-0 pointer-events-none">
        <div className="max-w-7xl mx-auto px-8">
          <svg className="w-full h-2" viewBox="0 0 100 2" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(147, 51, 234)" stopOpacity="0.2" />
                <stop offset="50%" stopColor="rgb(147, 51, 234)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="rgb(147, 51, 234)" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <line x1="12.5" y1="1" x2="87.5" y2="1" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="4 4">
              <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1s" repeatCount="indefinite" />
            </line>
          </svg>
        </div>
      </div>

      {/* GRID */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative">
        {processSteps.map((item, i) => {
          const isHovered = hoveredIndex === i;
          const isPrevHovered = hoveredIndex === i - 1;
          
          return (
            <div key={item.step} className="relative">
              {/* Arrow connector (Desktop only, not on last item) */}
              {i < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 z-20 -translate-y-1/2">
                  <ArrowRight 
                    size={20} 
                    className={`text-purple-600/30 transition-all duration-300 ${
                      isHovered || isPrevHovered ? 'text-purple-600 scale-125' : ''
                    }`}
                  />
                </div>
              )}

              <Card
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
                  animate-fade-up
                  h-full
                `}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Animated gradient border on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${item.color}`} />
                </div>

                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                {/* Floating particles on hover */}
                {isHovered && (
                  <>
                    <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-purple-600/30 rounded-full animate-float-soft" />
                    <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-violet-600/30 rounded-full animate-float-soft" style={{ animationDelay: '0.2s' }} />
                  </>
                )}

                <CardContent className="flex h-full flex-col gap-6 p-7 relative z-10">
                  {/* STEP HEADER */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                      Step
                    </span>

                    <div className="relative">
                      {/* Glow ring on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-full blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500 scale-150`} />
                      
                      <div
                        className={`
                          relative
                          flex h-12 w-12 items-center justify-center
                          rounded-full border-2 border-purple-600/40
                          text-sm font-bold text-purple-600
                          transition-all
                          duration-500
                          group-hover:scale-110
                          group-hover:rotate-12
                          group-hover:border-transparent
                          group-hover:bg-gradient-to-br
                          group-hover:${item.color}
                          group-hover:text-white
                          shadow-lg
                          shadow-purple-600/10
                          group-hover:shadow-xl
                          group-hover:shadow-purple-600/30
                        `}
                      >
                        {item.step}
                      </div>
                    </div>
                  </div>

                  {/* Icon emoji */}
                  <div className="text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    {item.icon}
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-semibold leading-snug transition-colors group-hover:text-purple-600">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground/80 flex-1">
                    {item.description}
                  </p>

                  {/* BOTTOM ACCENT */}
                  <div className="mt-auto space-y-3">
                    <div className={`h-1 w-0 bg-gradient-to-r ${item.color} rounded-full transition-all duration-500 group-hover:w-full`} />
                    
                    {/* Progress indicator */}
                    <div className="flex items-center gap-1">
                      {processSteps.map((_, idx) => (
                        <div
                          key={idx}
                          className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                            idx <= i 
                              ? 'bg-purple-600/50 group-hover:bg-purple-600' 
                              : 'bg-purple-600/10'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>

                {/* Bottom shine effect */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            </div>
          );
        })}
      </div>

      {/* Background grid pattern */}
      <div 
        className="absolute inset-0 -z-10 opacity-[0.015] pointer-events-none"
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