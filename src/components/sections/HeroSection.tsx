import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
  onWaitlistClick: () => void;
}

export function HeroSection({ scrollToSection, onWaitlistClick }: HeroSectionProps) {
  return (
    <section id="home" className="container max-w-[1536px] mx-auto px-4 py-24 md:py-32 animate-fade-in">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="flex flex-col text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl text-gray-900 flex flex-col items-center gap-4">
            <span>Stop Sending</span>
            <span className="flex items-center gap-4">
              <span>Emails</span>
              <img src="/lovable-uploads/5f7e5d34-185f-4f53-bcf9-52cff0bca374.png" alt="Email icon" className="w-12 h-12 inline-block" />
            </span>
            <span className="flex items-center gap-4">
              That Sound Like a
              <span className="relative">
                Bot
                <img src="/lovable-uploads/5f7e5d34-185f-4f53-bcf9-52cff0bca374.png" alt="Bot icon" className="w-12 h-12 inline-block" />
              </span>
            </span>
          </h1>
          <p className="text-xl text-gray-600 mx-auto max-w-[700px]">
            AI assistant that learns your style and role, every email feels 100% YOU!!
          </p>
        </div>
        
        <div className="flex flex-col items-center space-y-8">
          <Button 
            size="lg" 
            onClick={onWaitlistClick}
            className="bg-[#2563EB] hover:bg-blue-700 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
          >
            Join the Waitlist <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <div className="space-y-4">
            <div className="flex justify-center -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border-2 border-white bg-gray-200"
                  style={{
                    backgroundImage: `url(https://source.unsplash.com/random/150x150?face&${i})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
              ))}
            </div>
            <p className="text-sm text-blue-600 font-medium">
              Join 25+ founders waiting for the best app ever!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}