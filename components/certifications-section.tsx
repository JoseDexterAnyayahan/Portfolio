"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Certification = {
  title: string;
  issuer: string;
  year: string;
  thumbnail: string; // image preview
  file: string; // pdf
};

const certifications: Certification[] = [
  {
    title: "Digital Careers Expo",
    issuer: "DICT",
    year: "2024",
    thumbnail: "/certifications/thumbs/DICT-Logo.png",
    file: "/certifications/DIGITAL CAREERS EXPO.pdf",
  },
  {
    title: "Programming (Java) NC III",
    issuer: "TESDA",
    year: "2024",
    thumbnail: "/certifications/TESDA-Logo.png",
    file: "/certifications/javaNC3.pdf",
  },
  {
    title: "5G Mobile Network",
    issuer: "USAID",
    year: "2024",
    thumbnail: "/certifications/thumbs/usaid-logo-png.png",
    file: "/certifications/5G Mobile Network.pdf",
  },
  {
    title: "Radio Access Network",
    issuer: "USAID",
    year: "2024",
    thumbnail: "/certifications/thumbs/usaid-logo-png.png",
    file: "/certifications/Radio Access Network.pdf",
  },
  {
    title: "AI Machine Learning",
    issuer: "USAID",
    year: "2024",
    thumbnail: "/certifications/thumbs/usaid-logo-png.png",
    file: "/certifications/AI MACHINE LEARNING.pdf",
  },
  {
    title: "Networking",
    issuer: "USAID",
    year: "2024",
    thumbnail: "/certifications/thumbs/usaid-logo-png.png",
    file: "/certifications/NETWORKING.pdf",
  },
];

export default function CertificationsSection() {
  const [selected, setSelected] = useState<Certification | null>(null);

  return (
    <section
      id="certifications"
      className="relative py-24 md:py-28 overflow-hidden"
    >

      {/* HEADER */}
      <div className="mb-16 max-w-2xl space-y-3">
        <span className="text-sm font-medium text-purple-600">Credentials</span>

        <h2 className="text-3xl font-bold md:text-4xl">Certifications</h2>

        <p className="leading-relaxed text-muted-foreground">
          Verified credentials and continuous learning milestones that reflect
          technical growth and professional commitment.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-3 gap-5 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8">
        {certifications.map((cert, i) => (
          <button
            key={cert.title}
            onClick={() => setSelected(cert)}
            className="
          group relative aspect-square overflow-hidden rounded-xl
          border border-border/50
          bg-background/70 backdrop-blur
          shadow-sm
          transition-all duration-300
          hover:-translate-y-1 hover:shadow-xl
          animate-fade-up
        "
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            {/* HOVER RING */}
            <div className="absolute inset-0 rounded-xl border border-purple-600/0 transition group-hover:border-purple-600/50" />

            {/* IMAGE */}
            <Image
              src={cert.thumbnail}
              alt={cert.title}
              fill
              className="object-cover p-3 transition duration-300 group-hover:scale-110"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/15" />
          </button>
        ))}
      </div>

      {/* DIALOG */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        {selected && (
          <DialogContent
            className="
          h-[95vh] w-[98vw] max-w-7xl overflow-hidden
          border-border/60 bg-background/95 backdrop-blur
          shadow-2xl
        "
          >
            <DialogHeader className="space-y-1">
              <DialogTitle className="text-xl font-semibold">
                {selected.title}
              </DialogTitle>

              <p className="text-sm text-muted-foreground">
                {selected.issuer} • {selected.year}
              </p>
            </DialogHeader>

            {/* PDF VIEWER */}
            <div className="mt-4 h-[82vh] w-full overflow-hidden rounded-lg border border-border/60 shadow-inner">
              <iframe
                src={selected.file}
                title={selected.title}
                className="h-full w-full"
              />
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
