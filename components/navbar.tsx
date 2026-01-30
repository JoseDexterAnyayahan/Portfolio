import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  return (
    <header className="border-b bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center font-logo text-2xl font-extrabold tracking-tight transition hover:opacity-90"
        >
          <span className="text-muted-foreground">&lt;</span>
          <span className="text-primary">JD</span>
          <span className="text-muted-foreground">/&gt;</span>
        </Link>

        {/* NAV */}
        <nav className="flex items-center gap-4 sm:gap-6">
          <Link
            href="/about"
            className="hidden text-sm text-muted-foreground hover:text-foreground sm:block"
          >
            About
          </Link>

          <Link
            href="/work"
            className="hidden text-sm text-muted-foreground hover:text-foreground sm:block"
          >
            Work
          </Link>

          <Link
            href="/services"
            className="hidden text-sm text-muted-foreground hover:text-foreground sm:block"
          >
            Services
          </Link>

          <Link href="/contact">
            <Button size="sm">Contact</Button>
          </Link>

          {/* THEME TOGGLE */}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
