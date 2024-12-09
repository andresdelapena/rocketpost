import { useState } from "react";
import { WaitlistDialog } from "@/components/WaitlistDialog";
import { Mail, Clock, UserCheck, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-50 to-slate-100 text-slate-900">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Mail className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Regardss</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("home")} className="text-sm font-medium hover:text-primary">
              Home
            </button>
            <button onClick={() => scrollToSection("benefits")} className="text-sm font-medium hover:text-primary">
              Benefits
            </button>
            <button onClick={() => scrollToSection("how-it-works")} className="text-sm font-medium hover:text-primary">
              How It Works
            </button>
          </nav>
          <Button onClick={handleWaitlistClick} className="hidden md:inline-flex">
            Join Waitlist
          </Button>
          <Button variant="outline" className="md:hidden">
            Menu
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="container py-24 space-y-8 md:py-32">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Finally, Emails That Sound Like You—
              </span>
              <br />
              Without the Extra Work.
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Regardss helps you write professional, polished client emails in seconds—saving you time and letting you focus on what really matters: building better client relationships.
            </p>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                If you're always emailing clients and need something that saves you time and makes you look good, this is for you.
              </p>
              <Button size="lg" onClick={handleWaitlistClick} className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white hover:from-blue-700 hover:to-cyan-500">
                Join the Waitlist <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="container py-24 space-y-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Professional Emails Take Too Much Time.
            </h2>
            <div className="mx-auto max-w-[800px] grid gap-4 md:grid-cols-2">
              <Card className="bg-transparent">
                <CardContent className="p-6 space-y-2 bg-transparent">
                  <h3 className="font-bold">Generic AI Tools</h3>
                  <p className="text-sm text-muted-foreground">
                    Don't understand your tone or context, leaving you to spend time fixing drafts.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-primary bg-transparent">
                <CardContent className="p-6 space-y-2 bg-transparent">
                  <h3 className="font-bold">Regardss</h3>
                  <p className="text-sm text-muted-foreground">
                    Makes writing professional, personal emails simple and effortless.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="container py-24 space-y-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Why Choose Regardss?
            </h2>
            <div className="mx-auto grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:max-w-3xl">
              <Card className="bg-transparent">
                <CardContent className="p-6 space-y-2 bg-transparent">
                  <Clock className="h-12 w-12 text-primary" />
                  <h3 className="font-bold">Save Time</h3>
                  <p className="text-sm text-muted-foreground">
                    No more back-and-forth—finish emails faster.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-transparent">
                <CardContent className="p-6 space-y-2 bg-transparent">
                  <UserCheck className="h-12 w-12 text-primary" />
                  <h3 className="font-bold">Sound Like You</h3>
                  <p className="text-sm text-muted-foreground">
                    Every email feels natural and personal.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-transparent">
                <CardContent className="p-6 space-y-2 bg-transparent">
                  <CheckCircle className="h-12 w-12 text-primary" />
                  <h3 className="font-bold">Be Professional</h3>
                  <p className="text-sm text-muted-foreground">
                    Send clear, polished emails that leave a lasting impression.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="container py-24 space-y-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Send Better Emails in Three Simple Steps
            </h2>
            <div className="mx-auto grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:max-w-3xl">
              {[
                {
                  step: "1",
                  title: "Set Up Your Profile",
                  description: "Add your role, tone, and tasks.",
                },
                {
                  step: "2",
                  title: "Draft or Reply",
                  description: "Provide a few bullet points or paste your email.",
                },
                {
                  step: "3",
                  title: "Get Your Email",
                  description: "Receive a ready-to-send email in seconds.",
                },
              ].map((item) => (
                <Card key={item.step} className="bg-transparent">
                  <CardContent className="p-6 space-y-2 bg-transparent">
                    <div className="text-4xl font-bold text-primary">{item.step}</div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

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
              <Button size="lg" onClick={handleWaitlistClick} className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white hover:from-blue-700 hover:to-cyan-500">
                Join the Waitlist Now
              </Button>
              <p className="text-sm text-muted-foreground">
                Limited spots available—sign up today!
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Regardss. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link href="#" className="text-xs hover:underline underline-offset-4">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>
      <WaitlistDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  )
}
