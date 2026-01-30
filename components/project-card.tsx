import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function ProjectCard({ project }: any) {
  return (
    <Link href={`/work/${project.slug}`}>
      <Card className="hover:shadow-lg transition">
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg">{project.title}</h3>
          <p className="text-sm text-muted-foreground">
            {project.category}
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}
