
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Heart, MessageCircle, Twitter, Video, Flame, Dot } from "lucide-react";
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
      <div className="flex flex-col items-center justify-center space-y-10 text-center">
        <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl xl:text-8xl/[1.1] leading-tight">
          From Tweets to <span className="text-[#8B5CF6]">All Social Media</span><br />
          In One Click
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 text-xl md:text-2xl leading-relaxed dark:text-gray-400 py-4">
          Turn your <strong>Tweets</strong> into engaging content for <strong>every platform</strong>
          <br /><br />
          Save hours of work and reach more people.
        </p>
        <div className="space-x-4 pt-4">
          <Button 
            onClick={onWaitlistClick} 
            size="lg" 
            className="bg-[#FF6978] hover:bg-[#ff8591] text-white"
            aria-label="Join waitlist for 50% discount"
          >
            Join the Waitlist Now - Get 50% Off <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <div id="how-it-works" className="mx-auto max-w-5xl py-24">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 transition-transform duration-300 hover:scale-105 cursor-default text-[#1F1F1F] leading-relaxed"
        >
          1. Pick a Post
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-12"
        >
          <div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
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
                      I took my top tweets and posted them on Instagram, TikTok, and LinkedIn.
                      <br /><br />
                      The results?<br />
                      🔥 3x more engagement<br />
                      🔥 5x more reach<br />
                      🔥 More brand awareness<br />
                      <br />
                      Your audience is not just on X
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          <motion.h2 
            className="text-3xl font-bold text-center mb-12 transition-transform duration-300 hover:scale-105 cursor-default text-[#1F1F1F]"
          >
            2. Get Ready-To-Post Content for <span className="text-[#8B5CF6]">All Social Media</span>
          </motion.h2>
          <p className="text-gray-500 text-lg text-center -mt-8 mb-4">
            Generate images, videos, and carousels from a single tweet
          </p>

          <div className="space-y-6">
            <div className="grid gap-8 md:grid-cols-3">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Video className="h-4 w-4" />
                      <div className="font-semibold">TikTok</div>
                    </div>
                    <div className="aspect-video bg-gray-100 rounded-lg" />
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Heart className="h-5 w-5 text-gray-400" />
                          <MessageCircle className="h-5 w-5 text-gray-400" />
                        </div>
                        <span className="text-sm text-gray-500">1,337 likes</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold">janedoe</span>{" "}
                        This looks awesome! Can't wait to try it out.
                      </div>
                      <span className="text-sm text-gray-500">View all 42 comments</span>
                      <div className="flex items-center border-t pt-3 mt-2">
                        <input 
                          type="text" 
                          placeholder="Add a comment..." 
                          className="w-full bg-transparent text-sm outline-none"
                        />
                        <button className="text-sm font-semibold text-gray-400 hover:text-gray-600">
                          Post
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Flame className="h-4 w-4" />
                      <div className="font-semibold">Instagram</div>
                    </div>
                    <img 
                      src="/lovable-uploads/1418662c-02bf-419a-bdcb-9df0833c7429.png"
                      alt="Instagram post preview"
                      className="aspect-square w-full object-cover rounded-lg border border-gray-200"
                    />
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Heart className="h-5 w-5 text-red-500 fill-red-500" />
                          <MessageCircle className="h-5 w-5 text-gray-400" />
                        </div>
                        <span className="text-sm text-gray-500">1,337 likes</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold">andydelapena</span>{" "}
                        This tool has saved me 5+ hours every week
                      </div>
                      <span className="text-sm text-gray-500">View all 42 comments</span>
                      <div className="flex items-center border-t pt-3 mt-2">
                        <input 
                          type="text" 
                          placeholder="Add a comment..." 
                          className="w-full bg-transparent text-sm outline-none"
                        />
                        <button className="text-sm font-semibold text-gray-400 hover:text-gray-600">
                          Post
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Video className="h-4 w-4" />
                      <div className="font-semibold">LinkedIn</div>
                    </div>
                    <img 
                      src="/lovable-uploads/c9c93363-b40f-4b61-8801-607e02adcf10.png"
                      alt="LinkedIn post preview"
                      className="w-full rounded-lg border border-gray-200"
                    />
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
