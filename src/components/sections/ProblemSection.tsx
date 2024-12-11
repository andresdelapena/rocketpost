import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";

export function ProblemSection() {
  return (
    <section className="container max-w-5xl mx-auto px-4 py-24 space-y-8 animate-fade-in">
      <div className="flex flex-col items-center text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-slide-up">
          Professional Emails Take Too Much Time.
        </h2>
        <div className="mx-auto grid gap-8 md:grid-cols-2 w-full place-items-center">
          <Card className="border border-blue-200/60 hover:border-blue-300/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-md bg-white/50 backdrop-blur-sm max-w-[20rem] w-full animate-fade-in-delay group">
            <CardContent className="p-6 space-y-4">
              <h3 className="font-bold text-xl">Regardss</h3>
              <ul className="space-y-3 text-left">
                {[
                  { label: "Sounds Like You:", text: "Emails match your tone perfectly." },
                  { label: "Saves Time:", text: "No long prompts or edits needed." },
                  { label: "Understands Your Role:", text: "Knows your tasks and relationships." },
                  { label: "Easy to Use:", text: "Turn bullet points into polished emails." },
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 transition-all duration-300 hover:translate-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-sm text-muted-foreground">
                      <span className="font-bold">{feature.label}</span> {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="border border-blue-200/60 hover:border-blue-300/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-md bg-white/50 backdrop-blur-sm max-w-[20rem] w-full animate-fade-in-delay-2 group">
            <CardContent className="p-6 space-y-4">
              <h3 className="font-bold text-xl">Other AI Tools</h3>
              <ul className="space-y-3 text-left">
                {[
                  { label: "Robotic Tone:", text: "Emails feel generic and fake." },
                  { label: "Time Wasted:", text: "You tell it what to do each time." },
                  { label: "No Context:", text: "Doesn't adapt to your role." },
                  { label: "Complicated:", text: "Requires detailed, time-consuming prompts." },
                ].map((limitation, index) => (
                  <li key={index} className="flex items-start gap-2 transition-all duration-300 hover:translate-x-2">
                    <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-sm text-muted-foreground">
                      <span className="font-bold">{limitation.label}</span> {limitation.text}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}