
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroTitleProps {
  onWaitlistClick: () => void;
}

export function HeroTitle({ onWaitlistClick }: HeroTitleProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-10 text-center">
      <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl xl:text-8xl/[1.1] leading-tight">
        Transform Your Tweets into<br />
        <span className="text-[#8B5CF6]">Engaging Videos, Images, and Social Media Posts</span>—<br />
        In One Click!
      </h1>
      <p className="mx-auto max-w-[700px] text-gray-500 text-xl md:text-2xl leading-relaxed dark:text-gray-400 py-4">
        Turn your <strong>Tweets</strong> into engaging content for <strong>every platform</strong>
        <br /><br />
        Save hours of work and reach more people.
      </p>
      <div className="space-x-4 pt-4">
        <Button 
          onClick={onWaitlistClick} 
          size="lg" 
          className="bg-[#FF6978] hover:bg-[#ff8591] text-white"
          aria-label="Join waitlist for 50% discount"
        >
          Join the Waitlist Now - Get 50% Off <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
