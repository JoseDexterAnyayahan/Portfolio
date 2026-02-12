"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Award, Sparkles, Download, ExternalLink, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

type Certification = {
  title: string;
  issuer: string;
  year: string;
  thumbnail: string;
  file: string;
  type: "pdf" | "image";
  description?: string;
};

const certifications: Certification[] = [
  {
    title: "Digital Careers Expo",
    issuer: "DICT",
    year: "2024",
    thumbnail: "/certifications/thumbs/DIGITAL CAREERS EXPO1.jpg",
    file: "/certifications/DIGITAL CAREERS EXPO.pdf",
    type: "pdf",
  },
  {
    title: "Programming (Java) NC III",
    issuer: "TESDA",
    year: "2024",
    thumbnail: "/certifications/thumbs/javaNC3cert.jpg",
    file: "/certifications/javaNC3.pdf",
    type: "pdf",
  },
  {
    title: "5G Mobile Network",
    issuer: "USAID",
    year: "2024",
    thumbnail: "/certifications/thumbs/5G Mobile Network.jpg",
    file: "/certifications/5G Mobile Network.pdf",
    type: "pdf",
  },
  {
    title: "Radio Access Network",
    issuer: "USAID",
    year: "2024",
    thumbnail:"/certifications/thumbs/Radio Access Network.jpg",
    file: "/certifications/Radio Access Network.pdf",
    type: "pdf",
  },
  {
    title: "AI Machine Learning",
    issuer: "USAID",
    year: "2024",
    thumbnail: "/certifications/thumbs/AI MACHINE LEARNING.jpg",
    file: "/certifications/AI MACHINE LEARNING.pdf",
    type: "pdf",
  },
  {
    title: "Networking",
    issuer: "USAID",
    year: "2024",
    thumbnail: "/certifications/thumbs/NETWORKING.jpg",
    file: "/certifications/NETWORKING.pdf",
    type: "pdf",
  },
  {
    title: "Creative Innovation Award",
    issuer: "Infinitech",
    year: "2025",
    thumbnail: "/certifications/cert 1.jpg",
    file: "/certifications/cert 1.jpg",
    type: "image",
  },
  {
    title: "Outstanding Technical Support Award",
    issuer: "Infinitech",
    year: "2025",
    thumbnail: "/certifications/cert 2.jpg",
    file: "/certifications/cert 2.jpg",
    type: "image",
  },
  {
    title: "Certificate of Project Completion",
    issuer: "Infinitech",
    year: "2025",
    thumbnail: "/certifications/cert 3.jpg",
    file: "/certifications/cert 3.jpg",
    type: "image",
  },
    {
    title: "Adaptability Award",
    issuer: "Infinitech",
    year: "2025",
    thumbnail: "/certifications/cert 5.jpg",
    file: "/certifications/cert 5.jpg",
    type: "image",
  },
    {
    title: "Versatility and Creative Contribution",
    issuer: "Infinitech",
    year: "2025",
    thumbnail: "/certifications/cert 6.jpg",
    file: "/certifications/cert 6.jpg",
    type: "image",
  },
    {
    title: "Exceptional Contribution Award",
    issuer: "Infinitech",
    year: "2025",
    thumbnail: "/certifications/cert 7.jpg",
    file: "/certifications/cert 7.jpg",
    type: "image",
  },
];

export default function CertificationsSection() {
  const [selected, setSelected] = useState<Certification | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Reset zoom when changing certificates
  useEffect(() => {
    setZoomLevel(1);
  }, [selected]);

  // Keyboard navigation
  useEffect(() => {
    if (!selected) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selected, currentIndex]);

  const handleCertClick = (cert: Certification, index: number) => {
    setIsLoading(true);
    setSelected(cert);
    setCurrentIndex(index);
  };

  const handleClose = () => {
    setSelected(null);
    setIsLoading(false);
    setZoomLevel(1);
  };

  const handlePrevious = () => {
    setIsLoading(true);
    const newIndex = currentIndex === 0 ? certifications.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelected(certifications[newIndex]);
  };

  const handleNext = () => {
    setIsLoading(true);
    const newIndex = currentIndex === certifications.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelected(certifications[newIndex]);
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.5));
  };

  return (
    <section id="certifications" className="relative pt-8 pb-8 md:py-28 overflow-hidden">
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
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {certifications.map((cert, i) => (
          <button
            key={cert.title}
            onClick={() => handleCertClick(cert, i)}
            className="group relative aspect-square overflow-hidden rounded-xl border border-purple-600/10 bg-background/50 backdrop-blur-sm shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-600/30 animate-fade-up"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-purple-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative h-full w-full p-4">
              <Image src={cert.thumbnail} alt={cert.title} fill className="object-contain transition duration-500 group-hover:scale-110" />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
              <div className="text-center space-y-1">
                <p className="text-white text-xs font-semibold line-clamp-2">{cert.title}</p>
                <p className="text-white/70 text-[10px]">{cert.issuer}</p>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all scale-50 group-hover:scale-100">
              <div className="bg-white/90 rounded-full p-2.5 shadow-lg">
                <ExternalLink size={18} className="text-purple-600" />
              </div>
            </div>

            <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-purple-600/90 text-white text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              {cert.year}
            </div>
          </button>
        ))}
      </div>

      {/* Dialog */}
      <Dialog open={!!selected} onOpenChange={handleClose}>
        {selected && (
          <DialogContent className="max-h-[90vh] w-[95vw] max-w-6xl border-purple-600/20 bg-background/95 backdrop-blur-xl p-0 gap-0">
            <DialogHeader className="border-b border-purple-600/10 p-6 pb-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <DialogTitle className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                    {selected.title}
                  </DialogTitle>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Award size={14} className="text-purple-600" />
                    <span>{selected.issuer} • {selected.year}</span>
                  </div>
                </div>

               <div className="flex flex-col items-end gap-2">
  <a href={selected.file} download className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-purple-600/20 hover:bg-purple-600/10 text-sm transition-colors">
    <Download size={14} />
    <span className="hidden sm:inline">Download</span>
  </a>

  {selected.type === "image" && (
    <div className="flex items-center gap-1 px-2 py-1 rounded-md border border-purple-600/20 bg-background/50">
      <button onClick={handleZoomOut} className="p-1.5 hover:bg-purple-600/10 rounded transition-colors">
        <ZoomOut size={14} />
      </button>
      <span className="text-xs font-medium min-w-[3ch] text-center">{Math.round(zoomLevel * 100)}%</span>
      <button onClick={handleZoomIn} className="p-1.5 hover:bg-purple-600/10 rounded transition-colors">
        <ZoomIn size={14} />
      </button>
    </div>
  )}
</div>
              </div>

              {certifications.length > 1 && (
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-purple-600/10">
                  <button onClick={handlePrevious} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-purple-600/10 text-sm transition-colors">
                    <ChevronLeft size={16} />
                    <span className="hidden sm:inline">Previous</span>
                  </button>

                  <div className="text-sm text-muted-foreground">{currentIndex + 1} / {certifications.length}</div>

                  <button onClick={handleNext} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-purple-600/10 text-sm transition-colors">
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              )}
            </DialogHeader>

            <div className="relative p-6 max-h-[calc(90vh-200px)] overflow-auto">
              <div className="w-full rounded-lg border border-purple-600/20 overflow-hidden relative bg-muted/30">
                {isLoading && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/80 backdrop-blur-sm">
                    <div className="flex flex-col items-center gap-3">
                      <div className="h-10 w-10 animate-spin rounded-full border-4 border-purple-600 border-t-transparent" />
                      <p className="text-sm text-muted-foreground">Loading certificate...</p>
                    </div>
                  </div>
                )}

                {selected.type === "image" ? (
                  <div className="relative w-full flex items-center justify-center p-4 min-h-[60vh]" style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center', transition: 'transform 0.2s ease-out' }}>
                    <Image src={selected.file} alt={selected.title} width={1400} height={1000} className="h-auto w-full max-h-[65vh] object-contain" onLoad={() => setIsLoading(false)} priority />
                  </div>
                ) : (
                  <iframe src={selected.file} title={selected.title} className="w-full h-[65vh]" onLoad={() => setIsLoading(false)} />
                )}
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}