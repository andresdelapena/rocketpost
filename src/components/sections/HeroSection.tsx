
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Dot, Flame, Video, Twitter } from "lucide-react";
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
    <section className="container px-4 md:px-6 pt-32 pb-20">
      <div className="flex flex-col items-center justify-center space-y-8 text-center">
        <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl xl:text-8xl/[1.2] leading-[1.4]">
          From Tweets to <span className="text-[#8B5CF6]">All Social Media</span><br />
          In One Click
        </h1>
        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
          Turn your tweets into engaging content for every platform. Save hours of work and reach more people.
        </p>
        <div className="space-x-4 pt-4">
          <Button onClick={onWaitlistClick} size="lg" className="bg-[#FF6978] hover:bg-[#ff8591] text-white">
            Join the Waitlist Now - Get 50% Off <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="mx-auto max-w-5xl py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-12"
        >
          <div className="flex justify-center">
            <Card className="p-6 max-w-md w-full">
              <div className="flex items-start space-x-4">
                <Avatar className="h-10 w-10 border">
                  <AvatarImage alt="Profile picture" src="/lovable-uploads/9ccd389b-f7a9-4ed4-b5b6-0d17585b99a5.png" />
                </Avatar>
                <div className="flex-1 space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="font-semibold">Andy de la Pena</div>
                    <Twitter className="h-5 w-5 text-[#1DA1F2]" />
                  </div>
                  <p className="text-sm text-gray-500 space-y-2">
                    Here are my top 5 productivity tips that helped me grow my startup from 0 to 100k MRR! 🚀
                    <br /><br />
                    1. Wake up at 5am<br />
                    2. Cold showers<br />
                    3. Meditate for 1hr<br />
                    4. Read 2 books/day<br />
                    5. Network 24/7
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="text-sm font-medium">Converting to all platforms</div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Video className="h-4 w-4" />
                    <div className="font-semibold">TikTok</div>
                  </div>
                  <div className="aspect-video bg-gray-100 rounded-lg" />
                  <div className="flex space-x-2">
                    <Dot />
                    <Dot className="text-gray-300" />
                    <Dot className="text-gray-300" />
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Flame className="h-4 w-4" />
                    <div className="font-semibold">Instagram</div>
                  </div>
                  <div className="aspect-square bg-gray-100 rounded-lg" />
                  <div className="flex space-x-2">
                    <Dot />
                    <Dot className="text-gray-300" />
                    <Dot className="text-gray-300" />
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Video className="h-4 w-4" />
                    <div className="font-semibold">LinkedIn</div>
                  </div>
                  <div className="aspect-video bg-gray-100 rounded-lg" />
                  <div className="flex space-x-2">
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
