import { Button } from "@/components/ui/button";

interface FinalCTASectionProps {
  onWaitlistClick: () => void;
}

export const FinalCTASection = ({ onWaitlistClick }: FinalCTASectionProps) => {
  return (
    <section id="waitlist" className="container max-w-5xl mx-auto px-4 py-24 space-y-8">
      <div className="flex flex-col items-center text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-[#1A1F71] via-[#3d4190] to-[#6064af] bg-clip-text text-transparent">
          Stop Losing Views - Turn Your Tweets Into Money-Making Videos
        </h2>
        <div className="space-y-4">
          <Button 
            size="lg" 
            onClick={onWaitlistClick}
            className="bg-[#FF6978] hover:bg-[#ff8591] text-white"
          >
            Get Early Access
          </Button>
          <p className="text-sm text-muted-foreground">
            Limited spots available for beta launch
          </p>
        </div>
      </div>
    </section>
  );
}