import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onWaitlistClick: () => void;
}

export function HeroSection({ onWaitlistClick }: HeroSectionProps) {
  return (
    <section className="container max-w-[1536px] mx-auto px-4 py-24 md:py-32 animate-fade-in">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="flex flex-col text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl text-typography">
            Turn Tweets into Videos in 3 Clicks
          </h1>
          <p className="text-xl text-gray-600 mx-auto max-w-[700px]">
            Stop spending hours editing. Our AI converts your best tweets into platform-ready videos for Instagram, TikTok, and YouTube Shorts.
          </p>
        </div>
        
        <div className="flex flex-col items-center space-y-8">
          <Button 
            size="lg" 
            onClick={onWaitlistClick}
            className="bg-[#FF6978] hover:bg-[#ff8591] text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
          >
            Join Waitlist - Get 50% Off Launch Price <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}