"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Sparkles } from "lucide-react";
import Image from "next/image";

/* ---------- HELPERS ---------- */

function ExperienceBadge({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-full bg-purple-600/10 px-3 py-1 text-xs font-medium text-purple-600 border border-purple-600/20 backdrop-blur-sm transition-all hover:bg-purple-600/20 hover:scale-105">
      {label}
    </span>
  );
}

function TimelineCard({
  date,
  title,
  company,
  badge,
  bullets,
  index,
}: {
  date: string;
  title: string;
  company?: string;
  badge: string;
  bullets: string[];
  index: number;
}) {
  return (
    <Card className="group h-full animate-fade-up transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10 border-purple-600/10 bg-card/50 backdrop-blur-sm">
      <CardContent className="p-6 space-y-3 relative overflow-hidden">
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative z-10 space-y-3">
          <ExperienceBadge label={badge} />

          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <span className="inline-block h-1 w-1 rounded-full bg-purple-600 animate-pulse" />
            {date}
          </p>

          <h4 className="font-semibold text-lg text-purple-600 group-hover:text-purple-500 transition-colors">
            {title}
          </h4>

          {company && (
            <p className="text-sm text-muted-foreground font-medium">
              {company}
            </p>
          )}

          <ul className="ml-5 list-disc space-y-2 text-sm text-muted-foreground marker:text-purple-600/50">
            {bullets.map((b, i) => (
              <li 
                key={i} 
                className="transition-colors hover:text-foreground animate-fade-up"
                style={{ animationDelay: `${0.1 * (i + 1)}s` }}
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

/* ---------- MAIN ---------- */

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl animate-float pointer-events-none" />

      {/* HERO */}
      <div className="mb-28 grid items-center gap-12 md:grid-cols-2 relative">
        {/* IMAGE */}
        <div className="relative group">
          <div className="relative mx-auto h-64 w-64 sm:h-80 sm:w-80 animate-fade-up">
            {/* Animated ring around image */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 via-violet-600/20 to-purple-600/20 blur-xl animate-spin-slow" />
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-purple-600/10 blur-2xl group-hover:bg-purple-600/20 transition-all duration-500" />
            
            {/* Image container */}
            <div className="relative h-full w-full rounded-full overflow-hidden ring-4 ring-purple-600/20 group-hover:ring-purple-600/40 transition-all duration-300">
              <Image
                src="/images/gradpic.png"
                alt="Jose Dexter Anyayahan"
                fill
                priority
                className="object-cover object-[50%_18%] group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Decorative dots */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-600/20 rounded-full animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-violet-600/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>

        {/* TEXT */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/10 border border-purple-600/20 animate-fade-up">
            <Sparkles size={16} className="text-purple-600 animate-pulse" />
            <span className="text-sm font-medium text-purple-600">About Me</span>
          </div>

          <h2 className="text-3xl font-bold text-purple-600 md:text-4xl animate-fade-up animate-delay-1 hover:text-purple-500 transition-colors">
            Jose Dexter B. Anyayahan
          </h2>

          <div className="space-y-4 animate-fade-up animate-delay-2">
            <p className="leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                Information Technology
              </span>{" "}
              graduate with professional experience in{" "}
              <span className="font-semibold text-foreground relative inline-block group/text">
                web development
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600/50 group-hover/text:w-full transition-all duration-300" />
              </span>
              ,{" "}
              <span className="font-semibold text-foreground relative inline-block group/text">
                multimedia production
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600/50 group-hover/text:w-full transition-all duration-300" />
              </span>
              , and{" "}
              <span className="font-semibold text-foreground relative inline-block group/text">
                digital marketing
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600/50 group-hover/text:w-full transition-all duration-300" />
              </span>
              . Skilled in building responsive platforms and producing
              high-quality visual content.
            </p>

            <p className="leading-relaxed text-muted-foreground">
              Combines technical expertise with creative execution to design,
              develop, and support modern web systems and multimedia projects with
              strong attention to usability and presentation.
            </p>
          </div>
        </div>
      </div>

      {/* EXPERIENCE */}
      <div className="space-y-12">
        <div className="flex items-center gap-3 animate-fade-up">
          <div className="p-2 rounded-lg bg-purple-600/10 border border-purple-600/20">
            <Briefcase size={20} className="text-purple-600" />
          </div>
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
            Experience
          </h3>
          <div className="flex-1 h-px bg-gradient-to-r from-purple-600/20 to-transparent" />
        </div>

        <div className="relative">
          {/* HORIZONTAL LINE DESKTOP */}
          <div className="absolute left-0 top-46 hidden h-px w-full bg-gradient-to-r from-transparent via-purple-600/30 to-transparent md:block" />

          {/* Animated progress line */}
          <div className="absolute left-0 top-46 hidden h-px w-full md:block overflow-hidden">
            <div className="h-full w-1/3 bg-gradient-to-r from-purple-600/50 to-transparent animate-pulse-slow" />
          </div>

          {/* GRID */}
          <div className="grid gap-12 md:grid-cols-3">
            {/* ITEM 1 */}
            <div className="relative space-y-6 animate-fade-up animate-delay-1">
              {/* DOT with pulse animation */}
              <div className="absolute -top-6 left-1/2 hidden -translate-x-1/2 md:block">
                <div className="relative">
                  <div className="h-4 w-4 rounded-full bg-purple-600 shadow-lg shadow-purple-600/50 animate-pulse" />
                  <div className="absolute inset-0 rounded-full bg-purple-600 animate-ping opacity-75" />
                </div>
              </div>

              <TimelineCard
                badge="Capstone Project"
                date="October 2024 – May 2025"
                title="Frontend Web Developer"
                company="PDEA Region IV-B MIMAROPA"
                bullets={[
                  "Vue.js and Tailwind CSS",
                  "Designed full responsive UI across devices",
                  "Built dynamic reusable components",
                  "Delivered government aligned interface design",
                ]}
                index={0}
              />
            </div>

            {/* ITEM 2 */}
            <div className="relative space-y-6 animate-fade-up animate-delay-2">
              <div className="absolute -top-6 left-1/2 hidden -translate-x-1/2 md:block">
                <div className="relative">
                  <div className="h-4 w-4 rounded-full bg-purple-600 shadow-lg shadow-purple-600/50 animate-pulse" style={{ animationDelay: '0.3s' }} />
                  <div className="absolute inset-0 rounded-full bg-purple-600 animate-ping opacity-75" style={{ animationDelay: '0.3s' }} />
                </div>
              </div>

              <TimelineCard
                badge="Internship"
                date="February 2025 – May 2025"
                title="Junior Web Developer"
                company="Infinitech Advertising Corporation"
                bullets={[
                  "Developed Ayala Land web application",
                  "Laravel Next.js Tailwind MySQL",
                  "Property listings and job modules",
                  "Videography and media collaboration",
                ]}
                index={1}
              />
            </div>

            {/* ITEM 3 */}
            <div className="relative space-y-6 animate-fade-up animate-delay-3">
              <div className="absolute -top-6 left-1/2 hidden -translate-x-1/2 md:block">
                <div className="relative">
                  <div className="h-4 w-4 rounded-full bg-purple-600 shadow-lg shadow-purple-600/50 animate-pulse" style={{ animationDelay: '0.6s' }} />
                  <div className="absolute inset-0 rounded-full bg-purple-600 animate-ping opacity-75" style={{ animationDelay: '0.6s' }} />
                </div>
              </div>

              <TimelineCard
                badge="Employment"
                date="August 2025 – February 2026"
                title="Digital Marketing Staff"
                company="Infinitech Advertising Corporation"
                bullets={[
                  "Video editing and social media campaigns",
                  "Professional photography production",
                  "Infographics and brand visuals",
                  "Client communication and field shoots",
                  "Website quality assurance testing",
                ]}
                index={2}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}