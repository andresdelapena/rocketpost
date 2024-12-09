import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
  onWaitlistClick: () => void;
}

export function HeroSection({ scrollToSection, onWaitlistClick }: HeroSectionProps) {
  return (
    <section id="home" className="container py-24 md:py-32">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex flex-col text-center space-y-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            <span className="bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Finally, Emails That Sound Like You
            </span>
            <span className="block mt-2">Without the Extra Work.</span>
          </h1>
          <p className="text-muted-foreground text-lg mx-auto max-w-[600px]">
            Regardss helps you write professional, polished client emails in seconds—saving you time and letting you focus on what really matters.
          </p>
        </div>
        
        <div className="flex flex-col items-center space-y-4">
          <Button 
            size="lg" 
            onClick={onWaitlistClick}
            className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white hover:from-blue-700 hover:to-cyan-500"
          >
            Join the Waitlist <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <p className="text-sm text-muted-foreground">
            Limited spots available for early access
          </p>
        </div>
      </div>
    </section>
  );
}