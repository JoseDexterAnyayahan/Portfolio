"use client";

import { useState } from "react";
import WorksGrid from "@/components/works/WorksGrid";
import { Project } from "@/lib/projects";

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
    <main className="relative min-h-screen overflow-hidden py-6 md:py-10">

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= HERO ================= */}
        <section className="mb-16 space-y-8 text-center md:mb-20">
          <div className="space-y-4">
            <span className="text-sm font-semibold tracking-[0.3em] text-purple-600">
              PORTFOLIO
            </span>

            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
              All Works
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              A curated collection of web development, multimedia, and
              creative projects that highlight both technical expertise and
              visual storytelling.
            </p>
          </div>

          {/* ================= CATEGORY FILTER ================= */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => {
              const active = activeCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`
                    rounded-full border px-5 py-2 text-sm font-medium
                    transition-all duration-200
                    ${
                      active
                        ? "border-purple-600 bg-purple-600 text-white shadow-md shadow-purple-600/30"
                        : "border-border bg-background/60 text-muted-foreground hover:border-purple-600/40 hover:text-foreground"
                    }
                  `}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </section>

        {/* ================= WORKS GRID ================= */}
        <section className="space-y-10">
          <h2 className="text-center text-xl font-semibold tracking-tight md:text-2xl">
            Selected Projects
          </h2>

          <WorksGrid projects={filteredProjects} />
        </section>

        {/* ================= FOOT NOTE ================= */}
        <section className="mt-24 text-center">
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground">
            Open for freelance, full-time roles, and creative collaborations.
            Let’s build something meaningful together.
          </p>
        </section>
      </div>
    </main>
  );
}
