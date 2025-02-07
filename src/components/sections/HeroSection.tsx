
import { ArrowRight, Flame } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface HeroSectionProps {
  onWaitlistClick: () => void;
}

export function HeroSection({ onWaitlistClick }: HeroSectionProps) {
  return (
    <section className="container max-w-[1536px] mx-auto px-4 py-24 md:py-32 animate-fade-in">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="flex flex-col text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl text-typography">
            Turn Tweets Into Stunning Content in 3 Clicks
          </h1>
          <p className="text-xl text-gray-600 mx-auto max-w-[700px]">
            Stop spending hours editing. Our AI converts your best tweets into platform-ready images, carousels, and videos for Instagram, LinkedIn, TikTok, and more.
          </p>
        </div>
        
        <div className="flex flex-col items-center space-y-8">
          <Button 
            size="lg" 
            onClick={onWaitlistClick}
            className="bg-[#FF6978] hover:bg-[#ff8591] text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <Flame className="w-5 h-5" /> Join Waitlist - Get 50% Off Launch Price <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="mt-16 space-y-8 animate-fade-in-delay">
          {/* Progress Steps */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-full max-w-md">
              <Progress value={33} className="h-2" />
            </div>
            <div className="flex justify-between w-full max-w-md text-sm font-medium text-gray-600">
              <span>Select Tweet</span>
              <span>Choose Format</span>
              <span>Generate Content</span>
            </div>
          </div>

          {/* Platform Previews */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Instagram Preview */}
            <div className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] p-1 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
              <div className="bg-white p-4 rounded-lg space-y-3">
                <div className="h-32 bg-gray-100 rounded-lg animate-pulse"></div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#833AB4] to-[#FD1D1D]"></div>
                  <span className="font-semibold">Instagram Carousel</span>
                </div>
              </div>
            </div>

            {/* TikTok Preview */}
            <div className="bg-gradient-to-br from-[#00f2ea] to-[#ff0050] p-1 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
              <div className="bg-white p-4 rounded-lg space-y-3">
                <div className="h-32 bg-gray-100 rounded-lg animate-pulse"></div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#00f2ea] to-[#ff0050]"></div>
                  <span className="font-semibold">TikTok Video</span>
                </div>
              </div>
            </div>

            {/* LinkedIn Preview */}
            <div className="bg-gradient-to-br from-[#0077B5] to-[#00a0dc] p-1 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
              <div className="bg-white p-4 rounded-lg space-y-3">
                <div className="h-32 bg-gray-100 rounded-lg animate-pulse"></div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#0077B5] to-[#00a0dc]"></div>
                  <span className="font-semibold">LinkedIn Post</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
