
import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  Brush,
  Layout,
  Eye,
} from "lucide-react";

export function PainPointsSection() {
  const painPoints = [
    {
      icon: Clock,
      text: "Manual content creation takes hours"
    },
    {
      icon: Brush,
      text: "Your brand looks inconsistent across formats"
    },
    {
      icon: Layout,
      text: "Every platform needs different content types"
    },
    {
      icon: Eye,
      text: "Your tweets deserve more visibility"
    }
  ];

  return (
    <section className="container max-w-5xl mx-auto px-4 py-24 space-y-8">
      <div className="flex flex-col items-center text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1F1F1F]">
          Struggling to <span className="text-[#8B5CF6]">Repurpose</span> Your Tweets?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          X is great, but you're <span className="font-bold">missing out</span> on views, Likes and growth by not posting on <span className="font-bold">other platforms</span>.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 w-full max-w-4xl">
          {painPoints.map((point, index) => (
            <Card key={index} className="border border-blue-200/60 hover:border-blue-300/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-md bg-white/50 backdrop-blur-sm">
              <CardContent className="p-6 flex items-start gap-4">
                <point.icon className="h-6 w-6 text-[#A6A3F8] flex-shrink-0" />
                <p className="text-lg text-gray-700">{point.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
