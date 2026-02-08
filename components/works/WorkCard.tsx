"use client";

import Image from "next/image";
import { Project } from "@/lib/projects";
import { ArrowUpRight, Globe, Play, ZoomIn } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

export default function WorkCard({ project }: { project: Project }) {
  const isExternal = project.type === "video" || project.type === "website";

  /* ---------- CARD UI ---------- */

  const CardUI = (
    <div
      className="
        relative h-full overflow-hidden rounded-2xl
        border border-border/60 bg-background/70 p-3
        shadow-sm backdrop-blur
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl
        group
      "
    >
      {/* GRADIENT GLOW */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-purple-500/0 opacity-0 transition duration-500 group-hover:opacity-100 group-hover:from-purple-500/10" />

      {/* IMAGE */}
      <div className="relative overflow-hidden rounded-xl">
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={600}
          height={400}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* UNIFIED HOVER OVERLAY */}
        <div
          className="
            absolute inset-0
            flex items-center justify-center
            bg-black/40 backdrop-blur-[2px]
            opacity-0 transition-all duration-300
            group-hover:opacity-100
          "
        >
          <div
            className="
              rounded-full bg-white/95 p-3 shadow-xl
              transition-all duration-300
              scale-75 group-hover:scale-100
            "
          >
            {project.type === "video" && (
              <Play className="h-6 w-6 text-black" />
            )}

            {project.type === "image" && (
              <ZoomIn className="h-6 w-6 text-black" />
            )}

            {project.type === "website" && (
              <Globe className="h-6 w-6 text-black" />
            )}
          </div>
        </div>

        {/* CATEGORY BADGE */}
        <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {project.category}
        </span>
      </div>

      {/* TEXT */}
      <div className="space-y-2 px-1 pb-1 pt-4">
        <h3 className="text-lg font-semibold tracking-tight transition group-hover:text-purple-600">
          {project.title}
        </h3>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span className="opacity-80">
            {project.type === "image"
              ? "View Image"
              : project.type === "video"
                ? "Watch Video"
                : "Visit Website"}
          </span>

          <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </div>
  );

  /* ---------- EXTERNAL PROJECT ---------- */

  if (isExternal && "url" in project) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {CardUI}
      </a>
    );
  }

  /* ---------- IMAGE PROJECT MODAL ---------- */

  if (project.type === "image" && "src" in project) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <button className="block h-full w-full text-left">{CardUI}</button>
        </DialogTrigger>

        <DialogContent className="max-w-4xl border-border/60 bg-background/95 backdrop-blur">
          {/* ACCESSIBILITY TITLE */}
          <DialogTitle className="sr-only">{project.title}</DialogTitle>

          <div className="space-y-4">
            <div className="relative w-full overflow-hidden rounded-xl">
              <Image
                src={project.src}
                alt={project.title}
                width={1400}
                height={1000}
                className="h-auto w-full object-contain"
              />
            </div>

            <div className="px-2 pb-2">
              <h3 className="text-lg font-semibold">{project.title}</h3>

              {project.description && (
                <p className="mt-1 text-sm text-muted-foreground">
                  {project.description}
                </p>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return <div className="block h-full">{CardUI}</div>;
}
