import {
  Card,
  CardContent,
} from "@/components/ui/card"

const processSteps = [
  {
    step: "01",
    title: "Discover",
    description:
      "Understanding your vision, goals, and audience to define a strong creative direction.",
  },
  {
    step: "02",
    title: "Plan",
    description:
      "Structuring the concept, visuals, and technical approach for clarity and impact.",
  },
  {
    step: "03",
    title: "Create",
    description:
      "Bringing ideas to life through filming, designing, editing, and development.",
  },
  {
    step: "04",
    title: "Deliver",
    description:
      "Refining every detail and delivering polished visuals ready to launch.",
  },
]

export default function ProcessSection() {
  return (
    <section className="py-24">
      <div className="mb-12 max-w-2xl">
        <h2 className="mb-4 text-3xl font-bold">
          My Process
        </h2>
        <p className="text-muted-foreground">
          A simple and structured approach to transform ideas
          into compelling visual and digital experiences.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((item) => (
          <Card
            key={item.step}
            className="group relative overflow-hidden"
          >
            <CardContent className="flex h-full flex-col gap-4 p-6">
              <span className="text-sm font-medium text-muted-foreground">
                {item.step}
              </span>

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>

              {/* Hover accent */}
              <div className="absolute inset-x-0 bottom-0 h-1 scale-x-0 bg-foreground transition-transform group-hover:scale-x-100" />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
