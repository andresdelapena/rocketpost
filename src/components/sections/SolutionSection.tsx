
import { Card, CardContent } from "@/components/ui/card";
import { Wand2, Layout, Target, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SolutionSectionProps {
  onWaitlistClick?: () => void;
}

export function SolutionSection({ onWaitlistClick }: SolutionSectionProps) {
  const solutions = [
    {
      icon: Wand2,
      title: "AI-powered content repurposing",
      description: "Select a tweet, and our AI suggests the best formats."
    },
    {
      icon: Layout,
      title: "Multi-format automation",
      description: "Convert tweets into images, carousels, and videos."
    },
    {
      icon: Target,
      title: "Platform-specific optimization",
      description: "Get content tailored for Instagram, TikTok, LinkedIn & more."
    },
    {
      icon: Palette,
      title: "Brand consistency",
      description: "Ensure your visuals match your style across all formats."
    }
  ];

  return (
    <section className="container max-w-5xl mx-auto px-4 py-24 space-y-12">
      <div className="flex flex-col items-center text-center space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1F1F1F]">
          One Tweet → Multiple <span className="text-[#8B5CF6]">Formats</span> in Seconds
        </h2>
        <div className="grid gap-6 md:grid-cols-2 w-full max-w-4xl">
          {solutions.map((solution, index) => (
            <Card key={index} className="border border-blue-200/60 hover:border-blue-300/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-md bg-white/50 backdrop-blur-sm">
              <CardContent className="p-6 flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <solution.icon className="h-6 w-6 text-[#A6A3F8] flex-shrink-0" />
                  <div className="text-left">
                    <h3 className="font-semibold mb-2">{solution.title}</h3>
                    <p className="text-gray-600">{solution.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {onWaitlistClick && (
          <div className="mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Join the waitlist and be among the first to revolutionize your content strategy.
            </p>
            <Button 
              onClick={onWaitlistClick}
              size="lg"
              className="bg-[#FF6978] hover:bg-[#ff8591] text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
            >
              🔥 Join Waitlist - Get 50% Off
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
