
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface HeroTitleProps {
  onWaitlistClick: () => void;
}

export function HeroTitle({
  onWaitlistClick
}: HeroTitleProps) {
  return <div className="flex flex-col items-center justify-center space-y-10 text-center">
      <h1 className="text-5xl font-bold tracking-tighter xl:text-8xl/[1.1] leading-tight px-0 sm:text-7xl">
        Instantly Repurpose Tweets into<br />
        Videos, Images & Posts—<br />
        <span className="text-[#8B5CF6]">In One Click!</span>
      </h1>
      <p className="mx-auto max-w-[700px] text-gray-500 text-xl md:text-2xl leading-relaxed dark:text-gray-400 py-4">
        You don't have time to post everywhere. RocketPost converts your <strong>tweets</strong> into videos, images & posts for all platforms—<strong>automatically</strong>.
      </p>
      <div className="flex flex-col items-center gap-6">
        <Button onClick={onWaitlistClick} size="lg" className="bg-[#FF6978] hover:bg-[#ff8591] text-white" aria-label="Join waitlist for 50% discount">
          Join the Waitlist Now - Get 50% Off <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        
        <div className="flex items-center gap-2 bg-black/10 backdrop-blur-sm px-6 py-3 rounded-full">
          <div className="flex -space-x-3">
            <Avatar className="border-2 border-white w-8 h-8">
              <AvatarImage src="/lovable-uploads/637cfdf8-c997-4273-91cc-efa77a9949f6.png" alt="User avatar" />
              <AvatarFallback>U1</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-white w-8 h-8">
              <AvatarImage src="/lovable-uploads/637cfdf8-c997-4273-91cc-efa77a9949f6.png" alt="User avatar" />
              <AvatarFallback>U2</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-white w-8 h-8">
              <AvatarImage src="/lovable-uploads/637cfdf8-c997-4273-91cc-efa77a9949f6.png" alt="User avatar" />
              <AvatarFallback>U3</AvatarFallback>
            </Avatar>
          </div>
          <p className="text-base text-gray-700 font-medium">
            Join <span className="font-bold">42</span> others waiting for the best app ever!
          </p>
        </div>
      </div>
    </div>;
}
