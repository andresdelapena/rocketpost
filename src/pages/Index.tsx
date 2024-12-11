import { useState } from "react";
import { WaitlistDialog } from "@/components/WaitlistDialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";

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
    <div className="relative flex min-h-screen flex-col text-slate-900">
      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(109.6deg,rgba(223,234,247,0.9)_11.2%,rgba(244,248,252,0.9)_91.1%)]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtMy4zMTUgMC02IDIuNjg1LTYgNnMyLjY4NSA2IDYgNiA2LTIuNjg1IDYtNi0yLjY4NS02LTYtNnptMCAyYTQgNCAwIDExMCA4IDQgNCAwIDAxMC04eiIgZmlsbD0icmdiYSgxNDcsIDE5NywgMjUzLCAwLjIpIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      </div>

      <Header scrollToSection={scrollToSection} onWaitlistClick={handleWaitlistClick} />
      
      <main className="flex-1">
        <HeroSection scrollToSection={scrollToSection} onWaitlistClick={handleWaitlistClick} />
        
        {/* How It Works Section */}
        <section id="how-it-works" className="container max-w-5xl mx-auto px-4 py-24 space-y-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Send Better Emails in Three Simple Steps
            </h2>
            <div className="mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 w-full place-items-center">
              <Card className="border border-blue-200/60 hover:border-blue-300/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-md bg-white/50 backdrop-blur-sm max-w-[20rem] w-full">
                <CardContent className="p-6 space-y-2">
                  <div className="text-4xl font-bold text-primary">1</div>
                  <h3 className="font-bold">Set Up Your Profile</h3>
                  <p className="text-sm text-muted-foreground">
                    Add your role, tone, and key details. Regards adapts to your unique writing style!
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-blue-200/60 hover:border-blue-300/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-md bg-white/50 backdrop-blur-sm max-w-[20rem] w-full">
                <CardContent className="p-6 space-y-2">
                  <div className="text-4xl font-bold text-primary">2</div>
                  <h3 className="font-bold">Draft or Reply</h3>
                  <p className="text-sm text-muted-foreground">
                    Share a few bullet points or paste a rough draft. Keep it simple—just your ideas.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-blue-200/60 hover:border-blue-300/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-md bg-white/50 backdrop-blur-sm max-w-[20rem] w-full">
                <CardContent className="p-6 space-y-2">
                  <div className="text-4xl font-bold text-primary">3</div>
                  <h3 className="font-bold">Get Your Email</h3>
                  <p className="text-sm text-muted-foreground">
                    Click "Generate" and see Regards turn your input into a clear, professional email—ready to send!
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-blue-200/60 hover:border-blue-300/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-md bg-white/50 backdrop-blur-sm max-w-[20rem] w-full">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-bold text-xl">Michael's Experience</h3>
                  <p className="text-sm text-muted-foreground italic">
                    "Regardss cut my email writing time in half while keeping my professional tone. Perfect for busy product managers."
                  </p>
                  <div className="text-left">
                    <p className="font-bold">Michael Chen</p>
                    <p className="text-sm text-muted-foreground">Senior Product Manager</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border border-blue-200/60 hover:border-blue-300/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-md bg-white/50 backdrop-blur-sm max-w-[20rem] w-full">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-bold text-xl">Rachel's Feedback</h3>
                  <p className="text-sm text-muted-foreground italic">
                    "As a non-native speaker, Regardss helps me write with confidence. My emails are now clear and professional."
                  </p>
                  <div className="text-left">
                    <p className="font-bold">Rachel Martinez</p>
                    <p className="text-sm text-muted-foreground">Client Success Manager</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <ProblemSection />
        <BenefitsSection />

        {/* Trust Section */}
        <section className="container max-w-5xl mx-auto px-4 py-24 space-y-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Emails You Can Trust
            </h2>
            <div className="mx-auto grid gap-8 md:grid-cols-2 w-full place-items-center">
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
                <Card key={i} className="border border-blue-200/60 hover:border-blue-300/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-md bg-white/50 backdrop-blur-sm max-w-[18rem] w-full">
                  <CardContent className="p-6 space-y-4">
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
        <section id="waitlist" className="container max-w-5xl mx-auto px-4 py-24 space-y-8">
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
