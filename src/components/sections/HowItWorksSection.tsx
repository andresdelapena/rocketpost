import { Card, CardContent } from "@/components/ui/card";

export const HowItWorksSection = () => {
  return (
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
        </div>
      </div>
    </section>
  );
};