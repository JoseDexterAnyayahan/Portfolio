import { Video, Camera, Palette, Code, Wand2, Megaphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Web Development",
    description:
      "Fast, responsive websites built with modern frameworks and clean UI systems.",
    icon: Code,
  },
  {
    title: "Videography",
    description:
      "Cinematic video production for brands, events, promos, and storytelling content.",
    icon: Video,
  },
  {
    title: "Photography",
    description:
      "Professional photography for products, portraits, lifestyle, and brand visuals.",
    icon: Camera,
  },
  {
    title: "Video & Photo Editing",
    description:
      "Color grading, retouching, and post-production that enhances mood and clarity.",
    icon: Wand2,
  },
  {
    title: "Graphic Design",
    description:
      "Modern layouts, brand assets, and marketing creatives with strong visual impact.",
    icon: Palette,
  },
  {
    title: "Social Media Management",
    description:
      "Content planning, visual consistency, posting strategy, and engagement optimization.",
    icon: Megaphone,
  },
];

export default function WhatIDo() {
  return (
    <section id="WhatIDo" className="relative py-20 md:py-28">

      {/* HEADER */}
      <div className="mb-16 max-w-2xl">
        <span className="text-sm font-medium text-purple-600">Expertise</span>

        <h2 className="mb-4 text-3xl font-bold md:text-4xl">What I Do</h2>

        <p className="leading-relaxed text-muted-foreground">
          I combine visual storytelling, creative production, and modern web
          technology to build compelling digital experiences and strong brand
          presence.
        </p>
      </div>

      {/* GRID */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = service.icon;

          return (
            <Card
              key={service.title}
              className="
            group
            relative
            overflow-hidden
            border
            bg-background/70
            backdrop-blur
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-2xl
            cursor-pointer
            animate-fade-up
          "
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* PURPLE TOP ACCENT */}
              <div className="absolute inset-x-0 top-0 h-1 bg-purple-600/70 opacity-0 transition group-hover:opacity-100" />

              <CardContent className="p-7">
                {/* ICON BADGE */}
                <div
                  className="
                mb-5 inline-flex h-12 w-12 items-center justify-center
                rounded-2xl
                bg-purple-600/10
                text-purple-600
                transition
                group-hover:bg-purple-600
                group-hover:text-white
                shadow-sm
              "
                >
                  <Icon className="h-5 w-5" />
                </div>

                {/* TITLE */}
                <h3 className="mb-2 text-lg font-semibold tracking-tight">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
