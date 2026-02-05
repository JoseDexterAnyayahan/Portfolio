"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import Image from "next/image";

/* ---------- HELPERS ---------- */

function ExperienceBadge({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-full bg-purple-600/10 px-3 py-1 text-xs font-medium text-purple-600">
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
}: {
  date: string;
  title: string;
  company?: string;
  badge: string;
  bullets: string[];
}) {
  return (
    <Card className="h-full animate-fade-up transition hover:-translate-y-1 hover:shadow-xl">
      <CardContent className="p-6 space-y-3">
        <ExperienceBadge label={badge} />

        <p className="text-sm text-muted-foreground">{date}</p>

        <h4 className="font-semibold text-lg text-purple-600">{title}</h4>

        {company && <p className="text-sm text-muted-foreground">{company}</p>}

        <ul className="ml-5 list-disc space-y-2 text-sm text-muted-foreground">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

/* ---------- MAIN ---------- */

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28">
      {/* HERO */}
      <div className="mb-28 grid items-center gap-12 md:grid-cols-2">
        {/* IMAGE */}
        <div className="relative mx-auto h-64 w-64 sm:h-80 sm:w-80 animate-fade-in">
          <Image
            src="/images/gradpic.png"
            alt="Jose Dexter Anyayahan"
            fill
            priority
            className="rounded-full object-cover object-[50%_18%] shadow-2xl"
          />
        </div>

        {/* TEXT */}
        <div className="space-y-6 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-purple-600 md:text-4xl">
            Jose Dexter B. Anyayahan
          </h2>

          <p className="leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">
              Information Technology
            </span>{" "}
            graduate with professional experience in{" "}
            <span className="font-semibold text-foreground">
              web development
            </span>
            ,{" "}
            <span className="font-semibold text-foreground">
              multimedia production
            </span>
            , and{" "}
            <span className="font-semibold text-foreground">
              digital marketing
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

      {/* EXPERIENCE */}
      <div className="space-y-12">
        <h3 className="flex items-center gap-2 text-2xl font-semibold">
          <Briefcase size={20} /> Experience
        </h3>

        <div className="relative">
          {/* HORIZONTAL LINE DESKTOP */}
          <div className="absolute left-0 top-46 hidden h-px w-full bg-border md:block" />

          {/* GRID */}
          <div className="grid gap-12 md:grid-cols-3">
            {/* ITEM 1 */}
            <div className="relative space-y-6">
              {/* DOT */}
              <div className="absolute -top-6 left-1/2 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-purple-600 shadow-md md:block" />

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
              />
            </div>

            {/* ITEM 2 */}
            <div className="relative space-y-6">
              <div className="absolute -top-6 left-1/2 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-purple-600 shadow-md md:block" />

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
              />
            </div>

            {/* ITEM 3 */}
            <div className="relative space-y-6">
              <div className="absolute -top-6 left-1/2 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-purple-600 shadow-md md:block" />

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
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
