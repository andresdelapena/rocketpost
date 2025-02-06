import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingSectionProps {
  onWaitlistClick: () => void;
}

export function PricingSection({ onWaitlistClick }: PricingSectionProps) {
  return (
    <section className="container max-w-7xl mx-auto px-4 py-16 relative">
      <div className="absolute inset-0 bg-[#FEFEFF] bg-opacity-50"></div>
      <div className="relative z-10 space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-[#1A1F71] via-[#3d4190] to-[#6064af] bg-clip-text text-transparent">
          Early Bird Pricing
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Creator Plan */}
          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold">Creator Plan</h3>
            <p className="mt-4 text-3xl font-bold">$29<span className="text-base font-normal text-gray-600">/month</span></p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-[#A6A3F8]" />
                <span>20 videos per month</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-[#A6A3F8]" />
                <span>Basic templates</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-[#A6A3F8]" />
                <span>Auto-captions</span>
              </li>
            </ul>
            <Button onClick={onWaitlistClick} className="mt-8 w-full bg-[#FF6978] hover:bg-[#ff8591]">
              Get Early Access
            </Button>
          </div>

          {/* Pro Plan */}
          <div className="rounded-xl border-2 border-[#FF6978] bg-white p-8 shadow-lg">
            <h3 className="text-xl font-semibold">Pro Plan</h3>
            <p className="mt-4 text-3xl font-bold">$79<span className="text-base font-normal text-gray-600">/month</span></p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-[#A6A3F8]" />
                <span>Unlimited videos</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-[#A6A3F8]" />
                <span>Custom templates</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-[#A6A3F8]" />
                <span>Voice synthesis</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-[#A6A3F8]" />
                <span>Priority support</span>
              </li>
            </ul>
            <Button onClick={onWaitlistClick} className="mt-8 w-full bg-[#FF6978] hover:bg-[#ff8591]">
              Get Early Access
            </Button>
          </div>

          {/* Enterprise Plan */}
          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold">Enterprise</h3>
            <p className="mt-4 text-3xl font-bold">Custom</p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-[#A6A3F8]" />
                <span>Team accounts</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-[#A6A3F8]" />
                <span>API access</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-[#A6A3F8]" />
                <span>Custom branding</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-[#A6A3F8]" />
                <span>Dedicated support</span>
              </li>
            </ul>
            <Button onClick={onWaitlistClick} className="mt-8 w-full bg-[#FF6978] hover:bg-[#ff8591]">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}