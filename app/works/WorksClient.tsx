"use client";

import { useState } from "react";
import WorksGrid from "@/components/works/WorksGrid";
import { Project } from "@/lib/projects";
import { Briefcase, Sparkles } from "lucide-react";

export default function WorksClient({
  projects,
}: {
  projects: Project[];
}) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="relative min-h-screen overflow-hidden py-2 md:py-6">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl animate-float-delayed pointer-events-none" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HERO */}
        <section className="mb-16 space-y-8 text-center md:mb-20">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/10 border border-purple-600/20 backdrop-blur-sm animate-fade-up">
              <Briefcase size={16} className="text-purple-600" />
              <span className="text-sm font-semibold tracking-wider text-purple-600">
                PORTFOLIO
              </span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl animate-fade-up animate-delay-1">
              <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                All Works
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg animate-fade-up animate-delay-2">
              A curated collection of web development, multimedia, and creative projects that highlight both technical expertise and visual storytelling.
            </p>

            {/* Decorative line */}
            <div className="flex items-center justify-center gap-3 animate-fade-up animate-delay-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-600/30" />
              <Sparkles size={16} className="text-purple-600 animate-pulse" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-600/30" />
            </div>
          </div>

          {/* CATEGORY FILTER */}
          <div className="flex flex-wrap justify-center gap-3 animate-fade-up animate-delay-3">
            {categories.map((cat, index) => {
              const active = activeCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`
                    group relative rounded-full border px-5 py-2 text-sm font-medium
                    transition-all duration-300
                    animate-fade-up
                    ${
                      active
                        ? "border-purple-600 bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg shadow-purple-600/30 scale-105"
                        : "border-purple-600/20 bg-background/60 backdrop-blur-sm text-muted-foreground hover:border-purple-600/40 hover:text-foreground hover:bg-purple-600/5"
                    }
                  `}
                  style={{ animationDelay: `${0.4 + index * 0.05}s` }}
                >
                  {/* Shine effect on hover (non-active) */}
                  {!active && (
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-600/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 rounded-full" />
                  )}

                  {/* Active sparkle */}
                  {active && (
                    <Sparkles size={12} className="inline-block mr-1.5 animate-pulse" />
                  )}
                  
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Project count */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground animate-fade-up animate-delay-4">
            <div className="h-px w-8 bg-purple-600/30" />
            <span>
              Showing <span className="font-semibold text-purple-600">{filteredProjects.length}</span> {filteredProjects.length === 1 ? 'project' : 'projects'}
            </span>
            <div className="h-px w-8 bg-purple-600/30" />
          </div>
        </section>

        {/* WORKS GRID */}
        <section className="space-y-10">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-purple-600/20" />
            <h2 className="text-center text-xl font-semibold tracking-tight md:text-2xl bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              Selected Projects
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-purple-600/20" />
          </div>

          <WorksGrid projects={filteredProjects} />
        </section>

        {/* FOOT NOTE */}
        <section className="mt-24 text-center animate-fade-up">
          <div className="mx-auto max-w-xl space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/10 border border-purple-600/20 backdrop-blur-sm">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-purple-600">Available for Work</span>
            </div>
            
            <p className="text-sm leading-relaxed text-muted-foreground">
              Open for freelance, full-time roles, and creative collaborations. Let's build something meaningful together.
            </p>
          </div>
        </section>
      </div>

      {/* Background grid */}
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
    </main>
  );
}