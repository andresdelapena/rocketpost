
import React from "react";
import { Card } from "@/components/ui/card";
import { Twitter } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { motion } from "framer-motion";

export function TweetCard() {
  return (
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
  );
}
