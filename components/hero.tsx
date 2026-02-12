"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative grid min-h-[85vh] grid-cols-1 items-center gap-10 overflow-hidden px-4 py-14 sm:px-6 md:grid-cols-2 md:gap-12 md:px-0 md:py-24">
      {/* LEFT: TEXT */}
      <div className="flex flex-col gap-8 animate-fade-up">
        <div className="space-y-4">
          <p className="text-sm font-medium tracking-[0.25em] text-purple-600">
            HELLO, I AM
          </p>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            JOSE DEXTER ANYAYAHAN
          </h1>

          <h2 className="relative inline-block text-sm font-semibold tracking-wide text-muted-foreground sm:text-base md:text-lg lg:text-xl">
            A WEB DEVELOPER AND MULTIMEDIA ARTIST
            <span className="absolute -bottom-1 left-0 h-0.75 w-full rounded-full bg-purple-600/80" />
          </h2>
        </div>

        <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          IT graduate blending web development and multimedia to create clean
          visuals and reliable digital experiences.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <Button size="lg" asChild>
            <Link href="#FeaturedWork">View Work</Link>
          </Button>

          <Button size="lg" variant="outline" asChild>
            <a
              href="/Jose Dexter B. Anyayahan.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>
        </div>
      </div>

      {/* RIGHT: IMAGE */}
      <div className="relative mx-auto hidden w-full max-w-sm items-center justify-center md:flex animate-fade-in">
        <div className="absolute -z-10 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl" />

        <Image
          src="/images/myphoto.png"
          alt="Jose Dexter Anyayahan portrait"
          width={340}
          height={340}
          className="rounded-full object-cover"
          priority
        />
      </div>
    </section>
  );
}
