
import { useState, useEffect } from "react";
import { WaitlistDialog } from "@/components/WaitlistDialog";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { PainPointsSection } from "@/components/sections/PainPointsSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { AnimatedBackground } from "@/components/background/AnimatedBackground";
import { trackPageView, trackScroll } from "@/utils/analytics";

export default function Index() {
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    // Track page view on component mount
    trackPageView('Home Page', '/');

    // Set up scroll tracking
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      // Track at 25%, 50%, 75%, and 100% scroll depths
      if (scrollPercent >= 25 && scrollPercent < 50) {
        trackScroll(25);
      } else if (scrollPercent >= 50 && scrollPercent < 75) {
        trackScroll(50);
      } else if (scrollPercent >= 75 && scrollPercent < 100) {
        trackScroll(75);
      } else if (scrollPercent === 100) {
        trackScroll(100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
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
