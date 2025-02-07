
import { ArrowRight, Flame, Heart, MessageCircle, Share2, Dot, Twitter, Instagram, Linkedin, Video, Image, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onWaitlistClick: () => void;
}

const PlatformCard = ({ platform }: { 
  platform: {
    name: string;
    icon: React.ReactNode;
    color: string;
    mediaType: string;
    mediaIcon: React.ReactNode;
  }
}) => {
  return (
    <div className={`bg-gradient-to-br ${platform.color} p-1 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105`}>
      <div className="bg-white p-4 rounded-lg space-y-3">
        <div className="h-40 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center relative">
          <p className="text-lg font-semibold text-center px-4">5 Tips for Building Your Startup</p>
          <div className="absolute bottom-4 flex space-x-1">
            <Dot className="w-2 h-2 text-gray-800 fill-current" />
            <Dot className="w-2 h-2 text-gray-400" />
            <Dot className="w-2 h-2 text-gray-400" />
            <Dot className="w-2 h-2 text-gray-400" />
            <Dot className="w-2 h-2 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-full bg-gradient-to-tr ${platform.color}`}></div>
          <span className="font-semibold">{platform.name}</span>
        </div>
      </div>
    </div>
  );
};

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

        <div className="mt-16 space-y-12 animate-fade-in-delay">
          {/* Original Tweet */}
          <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md p-4 border border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-200"></div>
              <div>
                <div className="font-semibold">Startup Founder</div>
                <div className="text-sm text-gray-500">@startupfounder</div>
              </div>
            </div>
            <p className="text-lg mb-4">
              Excited to share 5 tips for building your startup! 🚀
              <br/>
              1. Start with a clear vision
              <br/>
              2. Build an amazing team
              <br/>
              3. Listen to customers
              <br/>
              4. Stay agile
              <br/>
              5. Never stop learning
              <br/>
              Like and RT if this helped! 👇
            </p>
            <div className="flex items-center justify-start space-x-8 text-gray-500">
              <button className="flex items-center space-x-2 hover:text-pink-500">
                <Heart size={18} />
                <span>2.5K</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-blue-500">
                <MessageCircle size={18} />
                <span>234</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-green-500">
                <Share2 size={18} />
                <span>1.2K</span>
              </button>
            </div>
          </div>

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

          {/* Platform Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <PlatformCard 
              platform={{
                name: "Instagram Carousel",
                icon: <Instagram />,
                color: "from-[#833AB4] via-[#FD1D1D] to-[#F77737]",
                mediaType: "Carousel",
                mediaIcon: <Image className="w-4 h-4" />
              }}
            />
            <PlatformCard 
              platform={{
                name: "TikTok Video",
                icon: <Video />,
                color: "from-[#00f2ea] to-[#ff0050]",
                mediaType: "Video",
                mediaIcon: <Video className="w-4 h-4" />
              }}
            />
            <PlatformCard 
              platform={{
                name: "LinkedIn Post",
                icon: <Linkedin />,
                color: "from-[#0077B5] to-[#00a0dc]",
                mediaType: "Article",
                mediaIcon: <FileText className="w-4 h-4" />
              }}
            />
          </div>

          <div className="text-center text-lg text-gray-600 font-medium">
            From tweets to stunning content—Repurpose smarter, not harder.
          </div>
        </div>
      </div>
    </section>
  );
}
