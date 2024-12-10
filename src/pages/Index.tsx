import { useState } from "react";
import { WaitlistDialog } from "@/components/WaitlistDialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { SplineBackground } from "@/components/SplineBackground";

export default function Index() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWaitlistClick = () => {
    setDialogOpen(true);
  };

  return (
    <div className="flex min-h-screen flex-col text-slate-900">
      <SplineBackground />
      <Header scrollToSection={scrollToSection} onWaitlistClick={handleWaitlistClick} />
      
      <main className="flex-1">
        <HeroSection scrollToSection={scrollToSection} onWaitlistClick={handleWaitlistClick} />
        
        {/* How It Works Section */}
        <section id="how-it-works" className="container py-24 space-y-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Send Better Emails in Three Simple Steps
            </h2>
            <div className="mx-auto grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:max-w-3xl">
              <Card className="bg-transparent">
                <CardContent className="p-6 space-y-2 bg-transparent">
                  <div className="text-4xl font-bold text-primary">1</div>
                  <h3 className="font-bold">Set Up Your Profile</h3>
                  <p className="text-sm text-muted-foreground">
                    Add your role, tone, and key details. Regards adapts to your unique writing style!
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-transparent">
                <CardContent className="p-6 space-y-2 bg-transparent">
                  <div className="text-4xl font-bold text-primary">2</div>
                  <h3 className="font-bold">Draft or Reply</h3>
                  <p className="text-sm text-muted-foreground">
                    Share a few bullet points or paste a rough draft. Keep it simple—just your ideas.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-transparent">
                <CardContent className="p-6 space-y-2 bg-transparent">
                  <div className="text-4xl font-bold text-primary">3</div>
                  <h3 className="font-bold">Get Your Email</h3>
                  <p className="text-sm text-muted-foreground">
                    Click "Generate" and see Regards turn your input into a clear, professional email—ready to send!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <ProblemSection />
        <BenefitsSection />

        {/* Trust Section */}
        <section className="container py-24 space-y-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Emails You Can Trust
            </h2>
            <div className="mx-auto grid gap-8 md:grid-cols-2 lg:max-w-3xl">
              {[
                {
                  quote: "Regardss saves me so much time—it's like having a professional writer on my team.",
                  author: "Alex",
                  role: "Customer Success Manager",
                },
                {
                  quote: "Every email feels personal. It's seamless, and my clients love it.",
                  author: "Sarah",
                  role: "Account Manager",
                },
              ].map((testimonial, i) => (
                <Card key={i} className="bg-transparent">
                  <CardContent className="p-6 space-y-4 bg-transparent">
                    <p className="italic">{testimonial.quote}</p>
                    <div>
                      <p className="font-bold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="waitlist" className="container py-24 space-y-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Tired of Wasting Time on Emails?
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Save time, stay professional, and send emails that feel personal—without the extra work.
            </p>
            <div className="space-y-4">
              <Button 
                size="lg" 
                onClick={handleWaitlistClick}
                className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white hover:from-blue-700 hover:to-cyan-500"
              >
                Join the Waitlist Now
              </Button>
              <p className="text-sm text-muted-foreground">
                Limited spots available—sign up today!
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WaitlistDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
}