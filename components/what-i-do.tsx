import {
  Video,
  Camera,
  Palette,
  Code,
  Wand2,
} from "lucide-react"

const services = [
  {
    title: "Videography",
    description:
      "Cinematic video production for brands, events, and storytellers.",
    icon: Video,
  },
  {
    title: "Photography",
    description:
      "High-quality photography for products, portraits, and lifestyle.",
    icon: Camera,
  },
  {
    title: "Video & Photo Editing",
    description:
      "Professional post-production with attention to detail and mood.",
    icon: Wand2,
  },
  {
    title: "Graphic Design",
    description:
      "Clean, modern visual identities and marketing creatives.",
    icon: Palette,
  },
  {
    title: "Web Development",
    description:
      "Responsive, fast, and aesthetic websites built with modern tech.",
    icon: Code,
  },
]

export default function WhatIDo() {
  return (
    <section className="py-24">
      <div className="mb-12 max-w-2xl">
        <h2 className="text-3xl font-bold mb-4">What I Do</h2>
        <p className="text-muted-foreground">
          I combine visual storytelling and modern web technology
          to help brands stand out with clarity and impact.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
        {services.map((service) => (
          <div
            key={service.title}
            className="group rounded-2xl border border-border p-6 transition hover:bg-muted cursor-pointer"
          >
            <service.icon className="mb-4 h-6 w-6 text-muted-foreground group-hover:text-foreground transition" />

            <h3 className="mb-2 text-lg font-semibold">
              {service.title}
            </h3>

            <p className="text-sm text-muted-foreground">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
