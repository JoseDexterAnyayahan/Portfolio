"use client";

import { useState } from "react";
import WorkCard from "@/components/work-card";
import { featuredProjects } from "@/lib/projects";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sparkles, ArrowRight, Briefcase } from "lucide-react";

const categories = [
  "All",
  "Web Development",
  "Videography",
  "Photography",
  "Graphics",
];

export default function FeaturedWork() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? featuredProjects
      : featuredProjects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="FeaturedWork"
      className="relative pt-8 pb-20 md:py-28 overflow-hidden"
    >
      {/* HEADER */}
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:justify-between md:items-end">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/10 border border-purple-600/20 backdrop-blur-sm animate-fade-up">
            <Briefcase size={16} className="text-purple-600" />
            <span className="text-sm text-purple-600 font-medium">
              Portfolio
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold animate-fade-up animate-delay-1">
            <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              Featured Work
            </span>
          </h2>

          {/* Decorative line */}
          <div className="h-1 w-16 bg-gradient-to-r from-purple-600 to-transparent rounded-full animate-fade-up animate-delay-2" />
        </div>

        <Button
          asChild
          variant="outline"
          className="group relative overflow-hidden border-purple-600/20 hover:border-purple-600/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 animate-fade-up animate-delay-2"
        >
          <Link href="/works" className="flex items-center gap-2">
            {/* Gradient background on hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <span className="relative z-10 group-hover:text-purple-600 transition-colors">
              View All
            </span>
            <ArrowRight
              size={16}
              className="relative z-10 transition-transform group-hover:translate-x-1 group-hover:text-purple-600"
            />
          </Link>
        </Button>
      </div>

      {/* CATEGORY BUTTONS */}
      <div className="mb-10 flex flex-wrap gap-3 animate-fade-up animate-delay-3">
        {categories.map((cat, index) => {
          const isActive = activeCategory === cat;

          return (
            <Button
              key={cat}
              variant={isActive ? "default" : "outline"}
              onClick={() => setActiveCategory(cat)}
              className={`
                group
                relative
                rounded-full
                overflow-hidden
                transition-all
                duration-300
                ${
                  isActive
                    ? "bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg shadow-purple-500/30 scale-105"
                    : "border-purple-600/20 hover:border-purple-600/40 hover:bg-purple-600/5"
                }
              `}
              style={{
                animationDelay: `${0.1 * index}s`,
              }}
            >
              {/* Shine effect on hover */}
              {!isActive && (
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-600/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              )}

              {/* Active indicator sparkle */}
              {isActive && (
                <Sparkles size={14} className="mr-1.5 animate-pulse" />
              )}

              <span className="relative z-10">{cat}</span>

              {/* Active bottom accent */}
              {isActive && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-white/50 rounded-full" />
              )}
            </Button>
          );
        })}
      </div>

      {/* Project count indicator */}
      <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground animate-fade-up animate-delay-4">
        <div className="h-px w-8 bg-purple-600/30" />
        <span>
          Showing{" "}
          <span className="font-semibold text-purple-600">
            {filtered.length}
          </span>{" "}
          {filtered.length === 1 ? "project" : "projects"}
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-purple-600/30 to-transparent" />
      </div>

      {/* GRID */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, index) => (
          <div
            key={project.title}
            className="animate-fade-up"
            style={{ animationDelay: `${0.1 * index}s` }}
          >
            <WorkCard project={project} />
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="py-20 text-center animate-fade-up">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-600/10 mb-4">
            <Briefcase className="text-purple-600" size={24} />
          </div>
          <h3 className="text-lg font-semibold mb-2">No projects found</h3>
          <p className="text-muted-foreground mb-6">
            Try selecting a different category
          </p>
          <Button
            variant="outline"
            onClick={() => setActiveCategory("All")}
            className="border-purple-600/20 hover:border-purple-600/40 bg-purple-600/10 hover:bg-purple-600/20 text-purple-600 font-semibold shadow-lg shadow-purple-500/20"
          >
            View All Projects
          </Button>
        </div>
      )}

      {/* Background grid pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </section>
  );
}
