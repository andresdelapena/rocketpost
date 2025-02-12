
import React from "react";
import { Card } from "@/components/ui/card";
import { Heart, MessageCircle, Video, Flame } from "lucide-react";
import { motion } from "framer-motion";

export function SocialMediaCards() {
  return (
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
  );
}
