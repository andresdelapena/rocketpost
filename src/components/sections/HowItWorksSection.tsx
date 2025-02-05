import { Card, CardContent } from "@/components/ui/card";

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="container max-w-5xl mx-auto px-4 py-24 space-y-8">
      <div className="flex flex-col items-center text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-[#1A1F71] via-[#3d4190] to-[#6064af] bg-clip-text text-transparent">
          Send Better Emails in Three Simple Steps
        </h2>
        <p className="text-lg text-muted-foreground max-w-[42rem] mx-auto">
          Finally, a <strong>Solution</strong> for the Most Annoying Part of Your Work
        </p>
        <div className="mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 w-full place-items-center">
          <Card className="border border-blue-200/60 hover:border-blue-300/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-md bg-white/50 backdrop-blur-sm max-w-[20rem] w-full">
            <CardContent className="p-6 space-y-2">
              <div className="text-4xl font-bold text-[#A6A3F8]">1</div>
              <h3 className="font-bold">Set Up Your Profile</h3>
              <p className="text-sm text-muted-foreground">
                Tell us about <strong>you</strong>. Regardss customizes its responses to fit your <strong>unique style</strong> and professional needs.
              </p>
            </CardContent>
          </Card>
          <Card className="border border-blue-200/60 hover:border-blue-300/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-md bg-white/50 backdrop-blur-sm max-w-[20rem] w-full">
            <CardContent className="p-6 space-y-2">
              <div className="text-4xl font-bold text-[#A6A3F8]">2</div>
              <h3 className="font-bold">Draft or Reply</h3>
              <p className="text-sm text-muted-foreground">
                Write a few <strong>bullet points</strong> or paste an email you want to reply to. Keep it <strong>simple</strong>—just the key ideas.
              </p>
            </CardContent>
          </Card>
          <Card className="border border-blue-200/60 hover:border-blue-300/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-md bg-white/50 backdrop-blur-sm max-w-[20rem] w-full">
            <CardContent className="p-6 space-y-2">
              <div className="text-4xl font-bold text-[#A6A3F8]">3</div>
              <h3 className="font-bold">Get Your Email</h3>
              <p className="text-sm text-muted-foreground">
                Click '<strong>Generate</strong>' and let Regardss transform your input into a clear, professional email that's <strong>ready to send</strong>.
              </p>
            </CardContent>
          </Card>
        </div>
        <p className="text-lg text-muted-foreground mt-8 italic">
          No one will ever know it was AI-Generated. <strong>Guaranteed</strong>
        </p>
      </div>
    </section>
  );
}