import WorkCard from "@/components/work-card"
import { featuredProjects } from "@/lib/projects"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FeaturedWork() {
  return (
    <section className="py-24">
      <div className="mb-12 flex items-end justify-between">
        <div className="max-w-2xl">
          <h2 className="mb-4 text-3xl font-bold">
            Featured Work
          </h2>
          <p className="text-muted-foreground">
            A curated selection of projects showcasing my
            approach to visual storytelling and digital design.
          </p>
        </div>

        <Button variant="outline" asChild>
          <Link href="/work">View All</Link>
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <WorkCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
