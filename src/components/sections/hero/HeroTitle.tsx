
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
      <h1 className="text-4xl font-bold tracking-tighter xl:text-7xl/[1.1] leading-tight px-0 sm:text-6xl">
        Instantly Repurpose Tweets into<br />
        Videos, Images & Posts—<br />
        <span className="text-[#8B5CF6]">In One Click!</span>
      </h1>
      <p className="mx-auto max-w-[700px] text-gray-500 text-xl md:text-2xl leading-relaxed dark:text-gray-400 py-4">
        You don't have time to post everywhere. RocketPost converts your <strong>tweets</strong> into videos, images & posts for all platforms—<strong>automatically</strong>.
      </p>
      <div className="flex flex-col items-center gap-4">
        <Button onClick={onWaitlistClick} size="lg" className="bg-[#FF6978] hover:bg-[#ff8591] text-white" aria-label="Join waitlist for 50% discount">
          Join the Waitlist Now - Get 50% Off <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        
        <div className="flex items-center gap-2 bg-[#8B5CF6]/10 backdrop-blur-sm px-4 py-2 rounded-full">
          <div className="flex -space-x-2">
            <Avatar className="border-2 border-white w-6 h-6">
              <AvatarImage src="/lovable-uploads/0c4964c1-3224-4d35-b51c-5502a76947cf.png" alt="User avatar" />
              <AvatarFallback>U1</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-white w-6 h-6">
              <AvatarImage src="/lovable-uploads/47356b8d-fb7b-4a49-ae24-1e5f096c43fb.png" alt="User avatar" />
              <AvatarFallback>U2</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-white w-6 h-6">
              <AvatarImage src="/lovable-uploads/d43ced98-41c8-45ba-a8e5-9e709a440aa9.png" alt="User avatar" />
              <AvatarFallback>U3</AvatarFallback>
            </Avatar>
          </div>
          <p className="text-sm text-gray-700 font-medium">
            Join <span className="font-bold">34</span> others waiting to 5x their reach
          </p>
        </div>
      </div>
    </div>;
}
