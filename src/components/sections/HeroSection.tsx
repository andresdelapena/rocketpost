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
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl text-gray-900">
            How Much Time Are You Wasting Writing Emails?
          </h1>
          <p className="text-xl text-gray-600 mx-auto max-w-[700px]">
            Stop spending hours drafting and editing. Regardss writes emails in your voice—faster, smarter, and 100% authentic
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
              <img
                src="/lovable-uploads/55849edb-5ca5-4fdd-8d8b-a017b1ee15e7.png"
                alt="Profile"
                className="w-12 h-12 rounded-full border-2 border-white object-cover"
              />
              <img
                src="/lovable-uploads/0c4964c1-3224-4d35-b51c-5502a76947cf.png"
                alt="Profile"
                className="w-12 h-12 rounded-full border-2 border-white object-cover"
              />
              <img
                src="/lovable-uploads/47356b8d-fb7b-4a49-ae24-1e5f096c43fb.png"
                alt="Profile"
                className="w-12 h-12 rounded-full border-2 border-white object-cover"
              />
              <img
                src="/lovable-uploads/02685f35-3d68-4873-8e32-1a61bcdab4a7.png"
                alt="Profile"
                className="w-12 h-12 rounded-full border-2 border-white object-cover"
              />
            </div>
            <p className="text-sm text-blue-600 font-medium">
              Join 25+ founders waiting for the best AI email assistant!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}