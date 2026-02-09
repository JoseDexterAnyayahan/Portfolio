"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Award, Sparkles, Download, ExternalLink } from "lucide-react";

type Certification = {
  title: string;
  issuer: string;
  year: string;
  thumbnail: string;
  file: string;
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
    <section id="certifications" className="relative py-24 md:py-28 overflow-hidden">

      {/* Header */}
      <div className="mb-16 max-w-2xl space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/10 border border-purple-600/20 backdrop-blur-sm animate-fade-up">
          <Award size={16} className="text-purple-600" />
          <span className="text-sm font-medium text-purple-600">Credentials</span>
        </div>

        <h2 className="text-3xl font-bold md:text-4xl animate-fade-up animate-delay-1">
          <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>

        <p className="leading-relaxed text-muted-foreground animate-fade-up animate-delay-2">
          Verified credentials and continuous learning milestones that reflect technical growth and professional commitment.
        </p>

        <div className="flex items-center gap-3 animate-fade-up animate-delay-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-600/10 border border-purple-600/20 text-sm font-medium text-purple-600">
            <Sparkles size={14} className="animate-pulse" />
            <span>{certifications.length} Certifications</span>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-purple-600/30 to-transparent" />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-5 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8">
        {certifications.map((cert, i) => (
          <button
            key={cert.title}
            onClick={() => setSelected(cert)}
            className="group relative aspect-square overflow-hidden rounded-xl border border-purple-600/10 bg-background/50 backdrop-blur-sm shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-600/30 animate-fade-up"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-purple-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative h-full w-full p-3">
              <Image src={cert.thumbnail} alt={cert.title} fill className="object-contain transition duration-500 group-hover:scale-110" />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-3">
              <p className="text-white text-xs font-semibold text-center line-clamp-2">{cert.title}</p>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all scale-50 group-hover:scale-100">
              <div className="bg-white/90 rounded-full p-2 shadow-lg">
                <ExternalLink size={16} className="text-purple-600" />
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Dialog */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        {selected && (
          <DialogContent className="h-[95vh] w-[98vw] max-w-7xl border-purple-600/20 bg-background/95 backdrop-blur-xl">
            <DialogHeader className="border-b border-purple-600/10 pb-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <DialogTitle className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                    {selected.title}
                  </DialogTitle>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Award size={14} className="text-purple-600" />
                    <span>{selected.issuer} • {selected.year}</span>
                  </div>
                </div>
                <a href={selected.file} download className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-purple-600/20 hover:bg-purple-600/10 text-sm transition-colors">
                  <Download size={14} />
                  Download
                </a>
              </div>
            </DialogHeader>
            <div className="mt-4 h-[82vh] w-full rounded-lg border border-purple-600/20 overflow-hidden">
              <iframe src={selected.file} title={selected.title} className="h-full w-full" />
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}