import "@/app/globals.css"
import { ReactNode } from "react"
import { Space_Grotesk } from "next/font/google"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const logoFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-logo",
})

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${logoFont.variable}
          min-h-screen
          bg-background
          text-foreground
          font-sans
          antialiased
        `}
      >
        <ThemeProvider>
          <Navbar />

          <main
            className="
              mx-auto
              w-full
              max-w-7xl
              px-4
              py-8
              sm:px-6
              sm:py-12
              lg:px-8
              lg:py-16
            "
          >
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
