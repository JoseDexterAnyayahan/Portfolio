import { Card, CardContent } from "@/components/ui/card";
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
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiCanva,
  SiFigma,
  SiOpenai,
} from "react-icons/si";
import { FaDatabase, FaTools, FaCamera, FaLemon } from "react-icons/fa";
import { MdDesignServices, MdWeb } from "react-icons/md";

const stacks = [
  {
    title: "UI / UX & Creative Tools",
    items: [
      { name: "Canva", icon: SiCanva },
      { name: "Figma (Basic)", icon: SiFigma },
      { name: "Adobe Premiere Pro", icon: SiAdobepremierepro },
      { name: "CapCut", icon: MdDesignServices },
      { name: "ChatGPT", icon: SiOpenai },
      { name: "Nano Banana", icon: FaLemon },
    ],
  },
  {
    title: "Programming Languages",
    items: [
      { name: "PHP", icon: SiPhp },
      { name: "JavaScript", icon: SiJavascript },
      { name: "C#", icon: SiSharp },
      { name: "C++", icon: SiCplusplus },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Vue.js", icon: SiVuedotjs },
      { name: "Next.js", icon: SiNextdotjs },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Laravel", icon: SiLaravel },
      { name: "PHP REST APIs", icon: SiPhp },
      { name: "CRUD Operations", icon: MdWeb },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "phpMyAdmin", icon: FaDatabase },
    ],
  },
  {
    title: "Other Technical Skills",
    items: [
      { name: "Responsive Web Design", icon: MdWeb },
      { name: "Frontend & Backend Integration", icon: FaTools },
      { name: "Dynamic Web Components", icon: MdWeb },
      { name: "SEO Implementation", icon: MdWeb },
      { name: "Software & Hardware Troubleshooting", icon: FaTools },
      { name: "Technical Documentation", icon: FaTools },
      { name: "Camera Operation", icon: FaCamera },
    ],
  },
];

export default function ToolsSection() {
  return (
    <section className="py-24">
      <div className="mb-12 max-w-2xl">
        <h2 className="mb-4 text-3xl font-bold">Tools & Stack</h2>
        <p className="text-muted-foreground">
          Technologies and creative tools I use to build, design, and deliver
          complete digital experiences.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stacks.map((group) => (
          <Card key={group.title}>
            <CardContent className="p-6">
              <h3 className="mb-4 font-semibold">{group.title}</h3>

              <ul className="grid grid-cols-2 gap-3">
                {group.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <li
                      key={item.name}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <Icon className="h-4 w-4" />
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
