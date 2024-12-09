import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section id="home" className="container py-24 space-y-8 md:py-32">
      <div className="flex flex-col items-center text-center space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Finally, Emails That Sound Like You—
          </span>
          <br />
          Without the Extra Work.
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Regardss helps you write professional, polished client emails in seconds—saving you time and letting you focus on what really matters: building better client relationships.
        </p>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            If you're always emailing clients and need something that saves you time and makes you look good, this is for you.
          </p>
          <Button size="lg" onClick={() => scrollToSection("waitlist")} className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white hover:from-blue-700 hover:to-cyan-500">
            Join the Waitlist <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}