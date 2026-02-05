import "@/app/globals.css";
import { ReactNode } from "react";
import { Space_Grotesk } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollToTop from "@/components/scroll-to-top";

const logoFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-logo",
});

export default function RootLayout({ children }: { children: ReactNode }) {
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
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/3 top-0 h-105 w-105 -translate-x-1/2 rounded-full bg-purple-600/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-20 w-20 rounded-full bg-purple-500/10 blur-3xl" />
          </div>

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
          <ScrollToTop />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
