import { Clock, UserCheck, CheckCircle } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

export function BenefitsSection() {
  return (
    <section id="benefits" className="container py-24 space-y-8">
      <div className="flex flex-col items-center text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Why Choose Regardss?
        </h2>
        <div className="mx-auto grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:max-w-3xl">
          <Card className="bg-transparent">
            <CardContent className="p-6 flex flex-col items-center space-y-2 bg-transparent">
              <Clock className="h-12 w-12 text-primary" />
              <h3 className="font-bold">Save Time</h3>
              <p className="text-sm text-muted-foreground">
                No more back-and-forth—finish emails faster.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-transparent">
            <CardContent className="p-6 flex flex-col items-center space-y-2 bg-transparent">
              <UserCheck className="h-12 w-12 text-primary" />
              <h3 className="font-bold">Sound Like You</h3>
              <p className="text-sm text-muted-foreground">
                Every email feels natural and personal.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-transparent">
            <CardContent className="p-6 flex flex-col items-center space-y-2 bg-transparent">
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
  );
}