"use client"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useState } from "react"
import type { Project } from "@/lib/projects"

export default function WorkCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Card */}
      <Card
        onClick={() => setOpen(true)}
        className="group cursor-pointer overflow-hidden transition hover:border-foreground"
      >
        <CardContent className="p-0">
          <div className="relative aspect-4/3">
            <Image
              src={project.cover}
              alt={project.title}
              fill
              className="object-cover grayscale transition group-hover:grayscale-0"
            />
          </div>

          <div className="p-4">
            <p className="text-sm text-muted-foreground">
              {project.category}
            </p>
            <h3 className="font-semibold">{project.title}</h3>
          </div>
        </CardContent>
      </Card>

      {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
  <DialogContent
    className="
      max-w-[90vw]
      max-h-[90vh]
      overflow-hidden
      p-6
    "
  >
    <DialogHeader>
      <DialogTitle>{project.title}</DialogTitle>
      <p className="text-sm text-muted-foreground">
        {project.category}
      </p>
    </DialogHeader>

    <div className="relative mt-4 flex max-h-[70vh] items-center justify-center">
      {project.type === "image" ? (
        <Image
          src={project.src}
          alt={project.title}
          width={1200}
          height={800}
          className="max-h-[70vh] w-auto rounded-lg object-contain"
        />
      ) : (
        <video
          src={project.src}
          controls
          autoPlay
          className="max-h-[70vh] w-auto rounded-lg object-contain"
        />
      )}
    </div>
  </DialogContent>
</Dialog>

    </>
  )
}
