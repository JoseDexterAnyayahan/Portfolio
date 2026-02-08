"use client";

import { Project } from "@/lib/projects";
import WorkCard from "@/components/works/WorkCard";

type Props = {
  projects: Project[];
};

export default function WorkGrid({ projects }: Props) {
  if (!projects?.length) {
    return (
      <div className="flex min-h-[200px] items-center justify-center rounded-xl border border-dashed border-border/60 text-sm text-muted-foreground">
        No projects to display.
      </div>
    );
  }

  return (
    <div
      className="
        grid w-full
        grid-cols-1
        gap-6
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        2xl:gap-8
      "
    >
      {projects.map((project) => (
        <WorkCard
          key={`${project.title}-${project.category}`}
          project={project}
        />
      ))}
    </div>
  );
}
