import { Card, CardContent } from "@/components/ui/card"
import {
  SiPhp,
  SiJavascript,
  SiSharp,
  SiCplusplus,
  SiPython,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiVuedotjs,
  SiNextdotjs,
  SiLaravel,
  SiMysql,
  SiAdobepremierepro,
  SiAdobelightroom,
  SiCanva,
  SiFigma,
  SiOpenai,
} from "react-icons/si"
import { FaDatabase, FaTools, FaCamera, FaLemon } from "react-icons/fa"
import { MdDesignServices, MdWeb } from "react-icons/md"

const stacks = [
  {
    title: "Programming Languages",
    subtitle: "Core development foundations",
    items: [
      { name: "PHP", icon: SiPhp },
      { name: "JavaScript", icon: SiJavascript },
      { name: "C#", icon: SiSharp },
      { name: "C++", icon: SiCplusplus },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    title: "Frontend Development",
    subtitle: "Modern UI frameworks & styling systems",
    items: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Vue.js", icon: SiVuedotjs },
      { name: "Next.js", icon: SiNextdotjs },
    ],
  },
  {
    title: "Backend & APIs",
    subtitle: "Server logic & application architecture",
    items: [
      { name: "Laravel", icon: SiLaravel },
      { name: "PHP REST APIs", icon: SiPhp },
      { name: "CRUD Systems", icon: MdWeb },
    ],
  },
  {
    title: "Database Systems",
    subtitle: "Data modeling & management",
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "phpMyAdmin", icon: FaDatabase },
    ],
  },
  {
    title: "Creative & AI Tools",
    subtitle: "Content, editing, and visual production workflow",
    items: [
      { name: "Canva", icon: SiCanva },
      { name: "Figma (Basic)", icon: SiFigma },
      { name: "Adobe Premiere Pro", icon: SiAdobepremierepro },
      { name: "Adobe Lightroom CC", icon: SiAdobelightroom },
      { name: "CapCut", icon: MdDesignServices },
      { name: "ChatGPT", icon: SiOpenai },
      { name: "Nano Banana", icon: FaLemon },
    ],
  },
  {
    title: "Technical & Field Skills",
    subtitle: "Production + technical operations",
    items: [
      { name: "Responsive Web Design", icon: MdWeb },
      { name: "Frontend & Backend Integration", icon: FaTools },
      { name: "Dynamic Web Components", icon: MdWeb },
      { name: "SEO Implementation", icon: MdWeb },
      { name: "Troubleshooting", icon: FaTools },
      { name: "Technical Documentation", icon: FaTools },
      { name: "Camera Operation", icon: FaCamera },
    ],
  },
]

export default function ToolsSection() {
  return (
    <section
  id="ToolsSection"
  className="relative py-24 md:py-28 overflow-hidden"
>

  {/* HEADER */}
  <div className="mb-20 max-w-3xl space-y-4">
    <span className="text-sm font-medium text-purple-600">
      Toolkit
    </span>

    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
      Skills, Tools & Production Stack
    </h2>

    <p className="text-lg leading-relaxed text-muted-foreground">
      A cross-disciplinary toolkit combining creative production,
      full-stack development, and modern digital workflows enabling
      complete end-to-end solutions from concept to deployment.
    </p>
  </div>

  {/* GRID */}
  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {stacks.map((group, i) => (
      <Card
        key={group.title}
        className="
          relative
          group
          overflow-hidden
          border-border/50
          bg-background/70
          backdrop-blur
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-2
          hover:shadow-2xl
          animate-fade-up
        "
        style={{ animationDelay: `${i * 0.06}s` }}
      >
        {/* TOP ACCENT */}
        <div className="absolute inset-x-0 top-0 h-1 bg-purple-600/70 opacity-0 transition group-hover:opacity-100" />

        <CardContent className="p-7">
          {/* TITLE */}
          <div className="mb-6 space-y-1">
            <h3 className="text-lg font-semibold">
              {group.title}
            </h3>

            <p className="text-xs text-muted-foreground">
              {group.subtitle}
            </p>
          </div>

          {/* ITEMS */}
          <ul className="grid grid-cols-2 gap-3">
            {group.items.map((item) => {
              const Icon = item.icon

              return (
                <li
                  key={item.name}
                  className="
                    flex items-center gap-3 rounded-lg
                    border border-border/50
                    bg-muted/30
                    px-3 py-2 text-sm
                    transition-all
                    duration-200
                    hover:bg-purple-600/10
                    hover:border-purple-600/40
                  "
                >
                  {/* ICON BOX */}
                  <div
                    className="
                      flex h-8 w-8 items-center justify-center
                      rounded-md bg-background shadow-sm
                      transition group-hover:shadow-md
                    "
                  >
                    <Icon className="h-4 w-4 text-foreground/80" />
                  </div>

                  <span className="leading-none">
                    {item.name}
                  </span>
                </li>
              )
            })}
          </ul>
        </CardContent>
      </Card>
    ))}
  </div>
</section>

  )
}
