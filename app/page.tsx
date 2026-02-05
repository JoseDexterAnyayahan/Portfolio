import AboutSection from "@/components/about-section";
import CertificationsSection from "@/components/certifications-section";
import CTASection from "@/components/cta-section";
import FeaturedWork from "@/components/featured-work";
import Hero from "@/components/hero";
import ProcessSection from "@/components/process-section";
import ToolsSection from "@/components/tools-section";
import WhatIDo from "@/components/what-i-do";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <Hero />
      <AboutSection />
      <WhatIDo />
      <FeaturedWork />
      <ProcessSection />
      <ToolsSection />
      <CertificationsSection />
      <CTASection />
    </div>
  );
}
