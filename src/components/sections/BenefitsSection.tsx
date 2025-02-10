
import { Clock, UserCheck, CheckCircle } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

export function BenefitsSection() {
  return (
    <section id="benefits" className="container max-w-5xl mx-auto px-4 py-24 space-y-8 animate-fade-in">
      <div className="flex flex-col items-center text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1F1F1F]">
          Why Choose <span className="text-[#8B5CF6]">Regardss</span>?
        </h2>
        <p className="text-lg text-muted-foreground max-w-[42rem] mx-auto">
          Regardss helps <strong>client-facing</strong> professionals <strong>save time</strong> writing and replying to emails with an AI assistant <strong>trained on your</strong> company, role, and tone
        </p>
        <div className="mx-auto grid gap-4 sm:grid-cols-2 md:grid-cols-3 w-full place-items-center">
          {[
            {
              icon: UserCheck,
              title: "Customizable",
              description: "Trained on your company's voice and role for on-brand emails."
            },
            {
              icon: Clock,
              title: "Time-Saving",
              description: "Write and reply in seconds—no edits needed."
            },
            {
              icon: CheckCircle,
              title: "Authentic Tone",
              description: "Emails match your style and feel personal every time."
            }
          ].map((benefit, index) => (
            <Card 
              key={index} 
              className="border border-blue-200/60 hover:border-blue-300/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-md bg-white/50 backdrop-blur-sm max-w-[18rem] w-full animate-fade-in-delay group"
            >
              <CardContent className="p-6 flex flex-col items-center space-y-2">
                <benefit.icon className="h-12 w-12 text-[#A6A3F8] transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-bold">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
