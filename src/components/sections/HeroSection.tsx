import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
  onWaitlistClick: () => void;
}

export function HeroSection({ scrollToSection, onWaitlistClick }: HeroSectionProps) {
  return (
    <section id="home" className="container py-24 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col text-left space-y-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            <span className="bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Finally, Emails That Sound Like You
            </span>
            <span className="block mt-2">Without the Extra Work.</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-[500px]">
            Regardss helps you write professional, polished client emails in seconds—saving you time and letting you focus on what really matters.
          </p>
          <div className="space-y-4">
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
        <div className="hidden md:block relative">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            alt="Person writing an email"
            className="rounded-lg shadow-2xl"
            style={{
              maxWidth: "100%",
              height: "auto",
              objectFit: "cover",
              aspectRatio: "4/3"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-cyan-400/10 rounded-lg" />
        </div>
      </div>
    </section>
  );
}