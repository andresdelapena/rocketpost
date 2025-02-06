import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export function SolutionSection() {
  const solutions = [
    {
      title: "RocketPost handles it all:",
      points: [
        "Select tweet → Choose style → Post",
        "AI matches your brand voice",
        "Auto-formats for each platform",
        "Includes captions and music"
      ]
    },
    {
      title: "3X Your Audience and Revenue",
      points: [
        "Expand beyond Twitter automatically",
        "Reach new audiences who prefer video",
        "More visibility = More business opportunities"
      ]
    }
  ];

  return (
    <section className="container max-w-5xl mx-auto px-4 py-24 space-y-12">
      {solutions.map((solution, index) => (
        <div key={index} className="flex flex-col items-center text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-[#1A1F71] via-[#3d4190] to-[#6064af] bg-clip-text text-transparent">
            {solution.title}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 w-full max-w-4xl">
            {solution.points.map((point, pointIndex) => (
              <Card key={pointIndex} className="border border-blue-200/60 hover:border-blue-300/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-md bg-white/50 backdrop-blur-sm">
                <CardContent className="p-6 flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-[#A6A3F8] flex-shrink-0" />
                  <p className="text-lg text-gray-700 text-left">{point}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}