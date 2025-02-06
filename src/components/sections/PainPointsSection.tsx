import { Card, CardContent } from "@/components/ui/card";
import { XCircle } from "lucide-react";

export function PainPointsSection() {
  const painPoints = [
    "Manual editing takes hours",
    "Your brand voice gets lost in translation",
    "Each platform needs different formats",
    "Your content stays trapped on Twitter"
  ];

  return (
    <section className="container max-w-5xl mx-auto px-4 py-24 space-y-8">
      <div className="flex flex-col items-center text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-[#1A1F71] via-[#3d4190] to-[#6064af] bg-clip-text text-transparent">
          You know your tweets should be videos, but:
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 w-full max-w-4xl">
          {painPoints.map((point, index) => (
            <Card key={index} className="border border-blue-200/60 hover:border-blue-300/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-md bg-white/50 backdrop-blur-sm">
              <CardContent className="p-6 flex items-start gap-4">
                <XCircle className="h-6 w-6 text-[#A6A3F8] flex-shrink-0" />
                <p className="text-lg text-gray-700">{point}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}