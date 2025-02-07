
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Dot, Flame, Video } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onWaitlistClick: () => void;
}

export function HeroSection({ onWaitlistClick }: HeroSectionProps) {
  const [progress, setProgress] = React.useState(33);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="container px-4 md:px-6 py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          From Tweets to All Social Media - In One Click
        </h1>
        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
          Turn your tweets into engaging content for every platform. Save hours of work and reach more people.
        </p>
        <div className="space-x-4">
          <Button onClick={onWaitlistClick} size="lg" className="bg-[#FF6978] hover:bg-[#ff8591] text-white">
            Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="mx-auto max-w-5xl py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8"
        >
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <Avatar className="h-12 w-12 border">
                <AvatarImage alt="Avatar" src="/placeholder.svg" />
              </Avatar>
              <div className="space-y-2">
                <div className="font-semibold">Original Tweet</div>
                <p className="text-sm text-gray-500">
                  Here are my top 5 productivity tips that helped me grow my startup from 0 to 100k MRR! 🚀
                  <br />
                  1. Wake up at 5am
                  <br />
                  2. Cold showers
                  <br />
                  3. Meditate for 1hr
                  <br />
                  4. Read 2 books/day
                  <br />
                  5. Network 24/7
                </p>
              </div>
            </div>
          </Card>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="text-sm font-medium">Converting to all platforms</div>
                <div className="text-sm text-gray-500">Step {progress === 33 ? "1" : "2"} of 3</div>
              </div>
              <Progress value={progress} className="w-[60%]" />
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="p-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Video className="h-4 w-4" />
                    <div className="font-semibold">TikTok</div>
                  </div>
                  <div className="aspect-video bg-gray-100 rounded-lg" />
                  <div className="flex space-x-1">
                    <Dot />
                    <Dot className="text-gray-300" />
                    <Dot className="text-gray-300" />
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Flame className="h-4 w-4" />
                    <div className="font-semibold">Instagram</div>
                  </div>
                  <div className="aspect-square bg-gray-100 rounded-lg" />
                  <div className="flex space-x-1">
                    <Dot />
                    <Dot className="text-gray-300" />
                    <Dot className="text-gray-300" />
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Video className="h-4 w-4" />
                    <div className="font-semibold">LinkedIn</div>
                  </div>
                  <div className="aspect-video bg-gray-100 rounded-lg" />
                  <div className="flex space-x-1">
                    <Dot />
                    <Dot className="text-gray-300" />
                    <Dot className="text-gray-300" />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
