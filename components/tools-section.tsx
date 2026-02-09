"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  SiPhp,
  SiJavascript,
  SiSharp,
  SiCplusplus,
  SiPython,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiVuedotjs,
  SiNextdotjs,
  SiLaravel,
  SiMysql,
  SiAdobepremierepro,
  SiAdobelightroom,
  SiCanva,
  SiFigma,
  SiOpenai,
} from "react-icons/si";
import { FaDatabase, FaTools, FaCamera, FaLemon } from "react-icons/fa";
import { MdDesignServices, MdWeb } from "react-icons/md";
import { Wrench, Sparkles } from "lucide-react";
import { useState } from "react";

const stacks = [
  {
    title: "Programming Languages",
    subtitle: "Core development foundations",
    color: "from-purple-600 to-violet-600",
    items: [
      { name: "PHP", icon: SiPhp },
      { name: "JavaScript", icon: SiJavascript },
      { name: "C#", icon: SiSharp },
      { name: "C++", icon: SiCplusplus },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    title: "Frontend Development",
    subtitle: "Modern UI frameworks & styling systems",
    color: "from-violet-600 to-purple-600",
    items: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Vue.js", icon: SiVuedotjs },
      { name: "Next.js", icon: SiNextdotjs },
    ],
  },
  {
    title: "Backend & APIs",
    subtitle: "Server logic & application architecture",
    color: "from-purple-600 to-fuchsia-600",
    items: [
      { name: "Laravel", icon: SiLaravel },
      { name: "PHP REST APIs", icon: SiPhp },
      { name: "CRUD Systems", icon: MdWeb },
    ],
  },
  {
    title: "Database Systems",
    subtitle: "Data modeling & management",
    color: "from-fuchsia-600 to-purple-600",
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "phpMyAdmin", icon: FaDatabase },
    ],
  },
  {
    title: "Creative & AI Tools",
    subtitle: "Content, editing, and visual production workflow",
    color: "from-violet-600 to-purple-600",
    items: [
      { name: "Canva", icon: SiCanva },
      { name: "Figma (Basic)", icon: SiFigma },
      { name: "Adobe Premiere Pro", icon: SiAdobepremierepro },
      { name: "Adobe Lightroom CC", icon: SiAdobelightroom },
      { name: "CapCut", icon: MdDesignServices },
      { name: "ChatGPT", icon: SiOpenai },
      { name: "Nano Banana", icon: FaLemon },
    ],
  },
  {
    title: "Technical & Field Skills",
    subtitle: "Production + technical operations",
    color: "from-purple-600 to-violet-600",
    items: [
      { name: "Responsive Web Design", icon: MdWeb },
      { name: "Frontend & Backend Integration", icon: FaTools },
      { name: "Dynamic Web Components", icon: MdWeb },
      { name: "SEO Implementation", icon: MdWeb },
      { name: "Troubleshooting", icon: FaTools },
      { name: "Technical Documentation", icon: FaTools },
      { name: "Camera Operation", icon: FaCamera },
    ],
  },
];

export default function ToolsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section
      id="ToolsSection"
      className="relative py-24 md:py-28 overflow-hidden"
    >
      {/* HEADER */}
      <div className="mb-20 max-w-3xl space-y-4 relative">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/10 border border-purple-600/20 backdrop-blur-sm animate-fade-up">
          <Wrench size={16} className="text-purple-600" />
          <span className="text-sm font-medium text-purple-600">
            Toolkit
          </span>
        </div>

        <h2 className="text-3xl font-bold tracking-tight md:text-4xl animate-fade-up animate-delay-1">
          <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
            Skills, Tools & Production Stack
          </span>
        </h2>

        <p className="text-lg leading-relaxed text-muted-foreground animate-fade-up animate-delay-2">
          A cross-disciplinary toolkit combining creative production,
          full-stack development, and modern digital workflows enabling
          complete end-to-end solutions from concept to deployment.
        </p>

        {/* Decorative line */}
        <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-transparent rounded-full animate-fade-up animate-delay-3" />
      </div>

      {/* GRID */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {stacks.map((group, i) => {
          const isHovered = hoveredCard === i;

          return (
            <Card
              key={group.title}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`
                relative
                group
                overflow-hidden
                border
                border-purple-600/10
                bg-background/50
                backdrop-blur-sm
                shadow-sm
                transition-all
                duration-500
                hover:-translate-y-3
                hover:shadow-2xl
                hover:shadow-purple-500/20
                hover:border-purple-600/30
                animate-fade-up
              `}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* Animated gradient border on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${group.color}`} />
              </div>

              {/* Background gradient glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              {/* Floating particles on hover */}
              {isHovered && (
                <>
                  <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-purple-600/30 rounded-full animate-float-soft" />
                  <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-violet-600/30 rounded-full animate-float-soft" style={{ animationDelay: '0.2s' }} />
                  <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-purple-600/30 rounded-full animate-float-soft" style={{ animationDelay: '0.4s' }} />
                </>
              )}

              <CardContent className="p-7 relative z-10">
                {/* TITLE */}
                <div className="mb-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold transition-colors group-hover:text-purple-600">
                      {group.title}
                    </h3>
                    <Sparkles size={14} className="text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                  </div>

                  <p className="text-xs text-muted-foreground">
                    {group.subtitle}
                  </p>

                  {/* Count badge */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-600/10 border border-purple-600/20 text-xs font-medium text-purple-600">
                    <span>{group.items.length}</span>
                    <span className="text-purple-600/60">tools</span>
                  </div>
                </div>

                {/* ITEMS */}
                <ul className="grid grid-cols-2 gap-3">
                  {group.items.map((item, idx) => {
                    const Icon = item.icon;

                    return (
                      <li
                        key={item.name}
                        className="
                          flex items-center gap-2.5 rounded-lg
                          border border-purple-600/10
                          bg-background/50
                          px-3 py-2.5 text-sm
                          transition-all
                          duration-300
                          hover:bg-purple-600/10
                          hover:border-purple-600/40
                          hover:-translate-y-1
                          hover:shadow-lg
                          hover:shadow-purple-500/10
                          cursor-pointer
                          group/item
                          animate-fade-up
                        "
                        style={{ animationDelay: `${(i * 0.08) + (idx * 0.03)}s` }}
                      >
                        {/* ICON BOX */}
                        <div
                          className="
                            flex h-8 w-8 items-center justify-center
                            rounded-md 
                            bg-purple-600/10
                            shadow-sm
                            transition-all
                            duration-300
                            group-hover/item:scale-110
                            group-hover/item:rotate-6
                            group-hover/item:shadow-md
                            group-hover/item:shadow-purple-500/20
                            group-hover/item:bg-purple-600/20
                          "
                        >
                          <Icon className="h-4 w-4 text-purple-600 transition-transform group-hover/item:scale-110" />
                        </div>

                        <span className="leading-none text-xs font-medium transition-colors group-hover/item:text-purple-600">
                          {item.name}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                {/* Bottom accent line */}
                <div className={`mt-6 h-1 w-0 bg-gradient-to-r ${group.color} rounded-full transition-all duration-500 group-hover:w-full`} />
              </CardContent>

              {/* Bottom shine effect */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
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