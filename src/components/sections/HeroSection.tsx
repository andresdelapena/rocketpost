
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Heart, MessageCircle, Twitter, Video, Flame } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

interface HeroSectionProps {
  onWaitlistClick: () => void;
}

export function HeroSection({ onWaitlistClick }: HeroSectionProps) {
  const socialPlatforms = [
    { name: 'TikTok', icon: <Video className="h-4 w-4" /> },
    { name: 'Instagram', icon: <Flame className="h-4 w-4" /> },
    { name: 'LinkedIn', icon: <Video className="h-4 w-4" /> }
  ];

  return (
    <section className="container px-4 md:px-6 pt-32 pb-20">
      <div className="flex flex-col items-center justify-center space-y-10 text-center">
        <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl xl:text-8xl/[1.2] leading-[1.4] animate-fade-in">
          From Tweets to <span className="text-[#8B5CF6]">All Social Media</span><br />
          In One Click
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 text-xl md:text-2xl dark:text-gray-400 py-4 animate-fade-in-delay">
          Turn your Tweets into engaging content for every platform
          <br /><br />
          Save hours of work and reach more people.
        </p>
        <div className="space-x-4 pt-4 animate-fade-in-delay-2">
          <Button onClick={onWaitlistClick} size="lg" className="bg-[#FF6978] hover:bg-[#ff8591] text-white">
            Join the Waitlist Now - Get 50% Off <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="mx-auto max-w-5xl py-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#1F1F1F] animate-fade-in">
          1. Pick a Post
        </h2>
        
        <div className="grid gap-12">
          <div className="flex justify-center">
            <Card className="p-6 max-w-md w-full transition-all duration-300 hover:shadow-lg animate-fade-in">
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
          </div>

          <h2 className="text-3xl font-bold text-center mb-12 text-[#1F1F1F] animate-fade-in">
            2. Get Ready-To-Post Content for <span className="text-[#8B5CF6]">All Social Media</span>
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {socialPlatforms.map((platform) => (
              <Card 
                key={platform.name} 
                className="p-6 transition-all duration-300 hover:shadow-lg animate-fade-in"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    {platform.icon}
                    <div className="font-semibold">{platform.name}</div>
                  </div>
                  {platform.name === 'Instagram' ? (
                    <img 
                      src="/lovable-uploads/fc4808ca-b710-4d2f-b0ba-f971c1b59559.png"
                      alt="Instagram post preview"
                      className="aspect-square w-full object-cover rounded-lg border border-gray-200"
                      loading="lazy"
                    />
                  ) : (
                    <div className="aspect-video bg-gray-100 rounded-lg" />
                  )}
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
