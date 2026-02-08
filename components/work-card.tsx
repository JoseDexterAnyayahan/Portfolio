"use client";

import Image from "next/image";
import { Project } from "@/lib/projects";
import {
  ArrowUpRight,
  Globe,
  Play,
  Maximize2,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

export default function WorkCard({ project }: { project: Project }) {
  const isExternal = project.type === "video" || project.type === "website";
  const href = isExternal ? project.url : undefined;

  /* ---------- ICON LOGIC ---------- */
  const HoverIcon =
    project.type === "website"
      ? Globe
      : project.type === "video"
      ? Play
      : Maximize2; // image / graphic

  const CardContent = (
    <div className="relative h-full overflow-hidden rounded-2xl border border-border/60 bg-background/70 p-3 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">
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

        {/* DARK HOVER OVERLAY */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition duration-300 group-hover:bg-black/40 group-hover:opacity-100">
          <HoverIcon className="h-10 w-10 text-white drop-shadow-lg" />
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
          <span className="opacity-80">View Project</span>
          <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </div>
  );

  /* ---------- EXTERNAL ---------- */
  if (isExternal && href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block h-full"
      >
        {CardContent}
      </a>
    );
  }

  /* ---------- IMAGE / GRAPHIC MODAL ---------- */
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group block h-full cursor-pointer">{CardContent}</div>
      </DialogTrigger>

      <DialogContent className="max-w-4xl border-border/60 bg-background/95 backdrop-blur">
        <DialogTitle className="text-xl font-semibold">
          {project.title}
        </DialogTitle>

        {project.description && (
          <p className="text-sm text-muted-foreground">
            {project.description}
          </p>
        )}

        <div className="relative w-full overflow-hidden rounded-xl">
          <Image
            src={project.thumbnail}
            alt={project.title}
            width={1200}
            height={800}
            className="h-auto w-full object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
