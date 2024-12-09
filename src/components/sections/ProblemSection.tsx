import { Card, CardContent } from "@/components/ui/card";

export function ProblemSection() {
  return (
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
  );
}