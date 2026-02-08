"use client";

import Image from "next/image";
import { Project } from "@/lib/projects";

export default function WorkCard({ project }: { project: Project }) {
  const isExternal =
    project.type === "video" || project.type === "website";

  const href = isExternal ? project.url : undefined;

  const CardContent = (
    <div className="space-y-3">
      {/* IMAGE */}
      <div className="relative overflow-hidden rounded-xl">
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={600}
          height={400}
          className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {project.type === "video" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition group-hover:opacity-100">
            <div className="rounded-full bg-white p-4 shadow-lg text-xl">
              ▶
            </div>
          </div>
        )}
      </div>

      {/* TEXT */}
      <div>
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm text-muted-foreground">
          {project.category}
        </p>
      </div>
    </div>
  );

  if (isExternal && href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        {CardContent}
      </a>
    );
  }

  return <div className="group block">{CardContent}</div>;
}
