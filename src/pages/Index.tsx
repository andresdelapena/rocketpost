
import { useState } from "react";
import { WaitlistDialog } from "@/components/WaitlistDialog";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { PainPointsSection } from "@/components/sections/PainPointsSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { AnimatedBackground } from "@/components/background/AnimatedBackground";

export default function Index() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleWaitlistClick = () => {
    setDialogOpen(true);
  };

  return (
    <div className="relative flex min-h-screen flex-col text-slate-900">
      <AnimatedBackground />

      <Header scrollToSection={scrollToSection} onWaitlistClick={handleWaitlistClick} />
      
      <main className="flex-1">
        <HeroSection onWaitlistClick={handleWaitlistClick} />
        <PainPointsSection />
        <SolutionSection onWaitlistClick={handleWaitlistClick} />
        <FinalCTASection onWaitlistClick={handleWaitlistClick} />
      </main>

      <Footer />
      <WaitlistDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
}
