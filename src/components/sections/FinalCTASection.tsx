
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

interface FinalCTASectionProps {
  onWaitlistClick: () => void;
}

export const FinalCTASection = ({ onWaitlistClick }: FinalCTASectionProps) => {
  return (
    <section id="waitlist" className="container max-w-5xl mx-auto px-4 py-24 space-y-8">
      <div className="flex flex-col items-center text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1F1F1F]">
          Turn Tweets into High-Impact Content
          <br />
          In <span className="text-[#8B5CF6]">ONE</span> Click
        </h2>
        <div className="space-y-6">
          <Button 
            size="lg" 
            onClick={onWaitlistClick}
            className="bg-[#FF6978] hover:bg-[#ff8591] text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <Rocket className="w-5 h-5" /> Join the Waitlist Now - Get 50% Off
          </Button>
          <p className="text-sm text-muted-foreground">
            Limited spots available for beta launch
          </p>
        </div>
      </div>
    </section>
  );
}
