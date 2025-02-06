import { Button } from "@/components/ui/button";

interface FinalCTASectionProps {
  onWaitlistClick: () => void;
}

export const FinalCTASection = ({ onWaitlistClick }: FinalCTASectionProps) => {
  return (
    <section id="waitlist" className="container max-w-5xl mx-auto px-4 py-24 space-y-8">
      <div className="flex flex-col items-center text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-[#1A1F71] via-[#3d4190] to-[#6064af] bg-clip-text text-transparent">
          Tired of Wasting Time on Emails?
        </h2>
        <p className="text-muted-foreground md:text-xl">
          Save time, stay professional, and send emails that feel personal—without the extra work.
        </p>
        <div className="space-y-4">
          <Button 
            size="lg" 
            onClick={onWaitlistClick}
            className="bg-[#FF6978] hover:bg-[#ff8591] text-white"
          >
            Join the Waitlist Now
          </Button>
          <p className="text-sm text-muted-foreground">
            Limited spots available—sign up today!
          </p>
        </div>
      </div>
    </section>
  );
}