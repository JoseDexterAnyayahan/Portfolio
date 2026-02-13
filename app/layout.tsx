import "@/app/globals.css";
import { ReactNode } from "react";
import { Space_Grotesk } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollToTop from "@/components/scroll-to-top";
import FloatingSocials from "@/components/floating-socials";

const logoFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-logo",
});
export const metadata = {
  title: "JD Portfolio",
  description: "Developer Portfolio",
};

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
          overflow-x-hidden
        `}
      >
        <ThemeProvider>
          <FloatingSocials />
          <Navbar />
          <div className="relative w-full overflow-x-hidden">
            
            {/* Enhanced Animated Background */}
            <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
              {/* Main purple gradient blob - animated */}
              <div className="absolute left-[20%] md:left-1/3 top-0 h-[300px] w-[300px] md:h-[500px] md:w-[500px] -translate-x-1/2 rounded-full bg-purple-600/10 dark:bg-purple-600/20 blur-3xl animate-pulse-slow will-change-transform" />
              
              {/* Secondary blob - animated float */}
              <div className="absolute bottom-0 right-0 h-[250px] w-[250px] md:h-[400px] md:w-[400px] rounded-full bg-purple-500/8 dark:bg-purple-500/15 blur-3xl animate-float will-change-transform" />
              
              {/* Additional accent blob */}
              <div className="absolute top-1/2 right-[10%] md:right-1/4 h-[200px] w-[200px] md:h-[300px] md:w-[300px] rounded-full bg-violet-600/5 dark:bg-violet-600/10 blur-3xl animate-float-delayed will-change-transform" />
              
              {/* Subtle grid pattern overlay */}
              <div 
                className="absolute inset-0 opacity-[0.01] dark:opacity-[0.02]"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '50px 50px'
                }}
              />
              
              {/* Gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/20 to-background/80 dark:from-background/50 dark:via-transparent dark:to-background/50" />
            </div>

            {/* Animated grain texture overlay */}
            <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.008] dark:opacity-[0.015] mix-blend-overlay">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] animate-grain" />
            </div>

            <main
              className="
                relative
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
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}