
import React from "react";
import { motion } from "framer-motion";
import { HeroTitle } from "./hero/HeroTitle";
import { TweetCard } from "./hero/TweetCard";
import { SocialMediaCards } from "./hero/SocialMediaCards";

interface HeroSectionProps {
  onWaitlistClick: () => void;
}

export function HeroSection({ onWaitlistClick }: HeroSectionProps) {
  return (
    <section className="container px-4 md:px-6 pt-32 pb-20">
      <HeroTitle onWaitlistClick={onWaitlistClick} />
      
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
            <TweetCard />
          </div>

          <motion.h2 
            className="text-3xl font-bold text-center mb-12 transition-transform duration-300 hover:scale-105 cursor-default text-[#1F1F1F]"
          >
            2. Get Ready-To-Post Content for <span className="text-[#8B5CF6]">All Social Media</span>
          </motion.h2>
          <p className="text-gray-500 text-lg text-center -mt-8 mb-4">
            Generate images, videos, and carousels from a single tweet
          </p>

          <SocialMediaCards />
        </motion.div>
      </div>
    </section>
  );
}
