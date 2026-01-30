import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="grid min-h-[80vh] grid-cols-1 items-center gap-12 py-16 md:grid-cols-2 md:py-24">
      {/* LEFT: Text */}
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          Visual Stories.
          <br />
          <span className="text-muted-foreground">
            Digital Experiences.
          </span>
        </h1>

        <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
          I’m a creative professional blending videography, photography, design,
          and web development to build powerful brands.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <Button size="lg">View Work</Button>
          <Button size="lg" variant="outline">
            Hire Me
          </Button>
        </div>
      </div>

      {/* RIGHT: Image (hidden on mobile) */}
      <div className="relative mx-auto hidden w-full max-w-sm items-center justify-center md:flex">
        {/* Circular background */}
        <div className="absolute -z-10 h-90 w-90 rounded-full bg-muted" />

        {/* Photo */}
        <Image
          src="/images/myphoto.png"
          alt="JD portrait"
          width={320}
          height={320}
          className="rounded-full object-cover"
          priority
        />
      </div>
    </section>
  )
}
