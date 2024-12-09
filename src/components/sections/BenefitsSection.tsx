import { Clock, UserCheck, CheckCircle } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

export function BenefitsSection() {
  return (
    <section id="benefits" className="container py-24 space-y-8 animate-fade-in">
      <div className="flex flex-col items-center text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-slide-up">
          Why Choose Regardss?
        </h2>
        <div className="mx-auto grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:max-w-3xl">
          {[
            {
              icon: Clock,
              title: "Save Time",
              description: "No more back-and-forth—finish emails faster."
            },
            {
              icon: UserCheck,
              title: "Sound Like You",
              description: "Every email feels natural and personal."
            },
            {
              icon: CheckCircle,
              title: "Be Professional",
              description: "Send clear, polished emails that leave a lasting impression."
            }
          ].map((benefit, index) => (
            <Card key={index} className="bg-transparent transform transition-all duration-300 hover:scale-105 animate-fade-in-delay">
              <CardContent className="p-6 flex flex-col items-center space-y-2 bg-transparent">
                <benefit.icon className="h-12 w-12 text-primary" />
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