
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
import { ErrorBoundary } from "@/components/ErrorBoundary";

export default function Index() {
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    try {
      // Track page view on component mount
      trackPageView('Home Page', '/');

      // Set up scroll tracking with debounce
      let scrollTimeout: NodeJS.Timeout;
      const handleScroll = () => {
        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }
        
        scrollTimeout = setTimeout(() => {
          const scrollPercent = Math.round(
            (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
          );
          
          if (scrollPercent >= 25 && scrollPercent < 50) {
            trackScroll(25);
          } else if (scrollPercent >= 50 && scrollPercent < 75) {
            trackScroll(50);
          } else if (scrollPercent >= 75 && scrollPercent < 100) {
            trackScroll(75);
          } else if (scrollPercent === 100) {
            trackScroll(100);
          }
        }, 100);
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }
      };
    } catch (error) {
      console.error('Error in scroll tracking:', error);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    try {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.error('Error scrolling to section:', error);
    }
  };

  const handleWaitlistClick = () => {
    setDialogOpen(true);
  };

  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
}
