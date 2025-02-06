import { useState } from "react";
import { WaitlistDialog } from "@/components/WaitlistDialog";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { PainPointsSection } from "@/components/sections/PainPointsSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export default function Index() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWaitlistClick = () => {
    setDialogOpen(true);
  };

  return (
    <div className="relative flex min-h-screen flex-col text-slate-900">
      <div className="fixed inset-0 -z-10 bg-[#F5F7FA]" />

      <Header scrollToSection={scrollToSection} onWaitlistClick={handleWaitlistClick} />
      
      <main className="flex-1">
        <HeroSection onWaitlistClick={handleWaitlistClick} />
        <PainPointsSection />
        <SolutionSection />
        <PricingSection />
        <FinalCTASection onWaitlistClick={handleWaitlistClick} />
      </main>

      <Footer />
      <WaitlistDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
}