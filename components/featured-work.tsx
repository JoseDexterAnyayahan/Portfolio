"use client";

import { useState } from "react";
import WorkCard from "@/components/work-card";
import { featuredProjects } from "@/lib/projects";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
      : featuredProjects.filter(
          (p) => p.category === activeCategory
        );

  return (
    <section id="FeaturedWork" className="py-20 md:py-28">
      {/* HEADER */}
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:justify-between md:items-end">
        <div>
          <span className="text-sm text-purple-600 font-medium">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured Work
          </h2>
        </div>

        <Button asChild variant="outline">
          <Link href="/work">View All</Link>
        </Button>
      </div>

      {/* CATEGORY BUTTONS */}
      <div className="mb-10 flex flex-wrap gap-3">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={activeCategory === cat ? "default" : "outline"}
            onClick={() => setActiveCategory(cat)}
            className="rounded-full"
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <WorkCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
