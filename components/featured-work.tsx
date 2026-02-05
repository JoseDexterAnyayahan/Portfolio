import WorkCard from "@/components/work-card";
import { featuredProjects } from "@/lib/projects";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FeaturedWork() {
  return (
    <section
  id="FeaturedWork"
  className="relative py-20 md:py-28 overflow-hidden"
>

  {/* HEADER */}
  <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
    <div className="max-w-2xl">
      <span className="text-sm font-medium text-purple-600">
        Portfolio
      </span>

      <h2 className="mb-4 text-3xl font-bold md:text-4xl">
        Featured Work
      </h2>

      <p className="leading-relaxed text-muted-foreground">
        Selected projects across video, photography, design, social media,
        and web crafted to deliver clarity, performance, and visual impact.
      </p>
    </div>

    <Button
      variant="outline"
      asChild
      className="
        border-purple-600/40
        hover:bg-purple-600
        hover:text-white
        transition
      "
    >
      <Link href="/work">View All Projects</Link>
    </Button>
  </div>

  {/* GRID */}
  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {featuredProjects.map((project, i) => (
      <div
        key={project.title}
        className="
          group
          animate-fade-up
          transition-all
          duration-300
        "
        style={{ animationDelay: `${i * 0.08}s` }}
      >
        <div
          className="
            relative
            overflow-hidden
            rounded-2xl
            border
            bg-background/70
            backdrop-blur
            shadow-sm
            transition-all
            duration-300
            group-hover:-translate-y-2
            group-hover:shadow-2xl
          "
        >
          {/* TOP ACCENT BAR */}
          <div className="absolute inset-x-0 top-0 h-1 bg-purple-600/70 opacity-0 transition group-hover:opacity-100" />

          {/* IMAGE EFFECT WRAPPER */}
          <div className="transition duration-500 group-hover:scale-[1.03]">
            <WorkCard project={project} />
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

  );
}
