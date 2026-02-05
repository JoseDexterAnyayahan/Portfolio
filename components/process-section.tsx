import { Card, CardContent } from "@/components/ui/card"

const processSteps = [
  {
    step: "01",
    title: "Discovery & Direction",
    description:
      "We begin with deep understanding of goals, audience, and brand voice to align every creative decision with clear purpose.",
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description:
      "Concepts, layouts, shot lists, and technical structures are mapped to ensure clarity, efficiency, and strong execution.",
  },
  {
    step: "03",
    title: "Production & Creation",
    description:
      "Filming, designing, editing, and development transform ideas into high-impact visual and digital assets.",
  },
  {
    step: "04",
    title: "Refinement & Delivery",
    description:
      "Every detail is polished, optimized, and finalized before launch, publishing, or deployment.",
  },
]

export default function ProcessSection() {
  return (
    <section
      id="ProcessSection"
      className="relative py-24 md:py-28 overflow-hidden"
    >
    
      {/* HEADER */}
      <div className="mb-20 max-w-2xl space-y-4">
        <span className="text-sm font-medium text-purple-600">
          Workflow
        </span>

        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Creative Process
        </h2>

        <p className="text-lg leading-relaxed text-muted-foreground">
          A structured, client-focused workflow that turns ideas into
          cinematic visuals and high-performing digital experiences.
        </p>
      </div>

      {/* GRID */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((item, i) => (
          <Card
            key={item.step}
            className="
              group
              relative
              overflow-hidden
              border-border/60
              bg-background/70
              backdrop-blur
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-2xl
              animate-fade-up
            "
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            {/* TOP ACCENT BAR */}
            <div className="absolute inset-x-0 top-0 h-1 bg-purple-600/70 opacity-0 transition group-hover:opacity-100" />

            <CardContent className="flex h-full flex-col gap-6 p-7">
              {/* STEP HEADER */}
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  Step
                </span>

                <div
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-full border border-purple-600/40
                    text-sm font-bold text-purple-600
                    transition
                    group-hover:bg-purple-600
                    group-hover:text-white
                  "
                >
                  {item.step}
                </div>
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold leading-snug">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>

              {/* BOTTOM ACCENT */}
              <div className="mt-auto h-0.5 w-0 bg-purple-600 transition-all duration-300 group-hover:w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
