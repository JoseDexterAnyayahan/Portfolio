"use client"

import Image from "next/image"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Card } from "@/components/ui/card"
import { Project } from "@/lib/projects"

export default function WorkCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* CARD */}
      <Card
        onClick={() => setOpen(true)}
        className="group cursor-pointer overflow-hidden border-border/60 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
          />

          {/* cinematic gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80 transition group-hover:opacity-100" />

          {/* content */}
          <div className="absolute bottom-4 left-4 right-4 z-10">
            <p className="mb-1 text-[11px] uppercase tracking-widest text-white/70">
              Featured • {project.category}
            </p>

            <h3 className="text-lg font-semibold leading-snug text-white">
              {project.title}
            </h3>

            <p className="mt-1 text-xs text-white/70 opacity-0 transition group-hover:opacity-100">
              Click to view full project
            </p>
          </div>
        </div>
      </Card>

      {/* MODAL */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[92vh] w-[95vw] max-w-6xl overflow-auto">
          <DialogHeader className="space-y-3">
            {/* category badge */}
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              {project.category} Project
            </div>

            <DialogTitle className="text-2xl font-bold leading-tight">
              {project.title}
            </DialogTitle>

            {project.description && (
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            )}
          </DialogHeader>

          {/* MEDIA */}
          <div className="mt-6 flex items-center justify-center">
            {project.type === "image" && (
              <Image
                src={project.src}
                alt={project.title}
                width={1600}
                height={1000}
                className="h-auto max-h-[75vh] w-auto rounded-xl object-contain"
              />
            )}

            {project.type === "video" && (
              <video
                src={project.src}
                controls
                autoPlay
                className="max-h-[75vh] w-full rounded-xl object-contain shadow-lg"
              />
            )}

            {project.type === "website" && (
              <iframe
                src={project.src}
                className="h-[75vh] w-full rounded-xl border shadow-sm"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
