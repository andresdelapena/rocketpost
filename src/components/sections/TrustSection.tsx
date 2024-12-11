import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const TrustSection = () => {
  return (
    <section className="container max-w-5xl mx-auto px-4 py-24 space-y-8">
      <div className="flex flex-col items-center text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Emails You Can Trust
        </h2>
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem className="basis-auto">
              <Card className="border border-blue-200/60 hover:border-blue-300/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-md bg-white/50 backdrop-blur-sm w-[20rem]">
                <CardContent className="p-6 space-y-4">
                  <p className="text-sm text-muted-foreground italic">
                    "Regardss cut my email writing time in half while keeping my professional tone."
                  </p>
                  <div className="text-left">
                    <p className="font-bold">Michael Chen</p>
                    <p className="text-sm text-muted-foreground">Senior Product Manager</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Card className="border border-blue-200/60 hover:border-blue-300/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-md bg-white/50 backdrop-blur-sm w-[20rem]">
                <CardContent className="p-6 space-y-4">
                  <p className="text-sm text-muted-foreground italic">
                    "As a non-native speaker, Regardss helps me write with confidence. My emails sound natural."
                  </p>
                  <div className="text-left">
                    <p className="font-bold">Rachel Martinez</p>
                    <p className="text-sm text-muted-foreground">Client Success Manager</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Card className="border border-blue-200/60 hover:border-blue-300/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-md bg-white/50 backdrop-blur-sm w-[20rem]">
                <CardContent className="p-6 space-y-4">
                  <p className="text-sm text-muted-foreground italic">
                    "Perfect for quick responses that still maintain professionalism. A game-changer for busy days."
                  </p>
                  <div className="text-left">
                    <p className="font-bold">Sarah Thompson</p>
                    <p className="text-sm text-muted-foreground">Marketing Director</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-auto">
              <Card className="border border-blue-200/60 hover:border-blue-300/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-md bg-white/50 backdrop-blur-sm w-[20rem]">
                <CardContent className="p-6 space-y-4">
                  <p className="text-sm text-muted-foreground italic">
                    "Finally, an AI tool that understands context and tone. It's like having a professional editor on standby."
                  </p>
                  <div className="text-left">
                    <p className="font-bold">David Park</p>
                    <p className="text-sm text-muted-foreground">Sales Team Lead</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};