
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { trackWaitlistForm } from "@/lib/analytics";

export function WaitlistDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with email:", email); // Debug log
    
    if (!validateEmail(email)) {
      console.log("Email validation failed"); // Debug log
      setEmailError("Please enter a valid email address");
      return;
    }

    console.log("Email validation passed, proceeding with submission"); // Debug log
    setEmailError("");
    setIsLoading(true);
    trackWaitlistForm('complete', email);

    try {
      const payload = { 
        email: email.trim(),
        source: "waitlist_dialog",
        timestamp: new Date().toISOString(),
        url: window.location.href
      };
      
      // Log the exact payload being sent
      console.log("Sending webhook payload:", payload);
      
      const response = await fetch("https://hook.eu2.make.com/9usncqxw93i58oglf3l5p8r4b7vusblj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log("Webhook response status:", response.status); // Debug log
      
      if (!response.ok) {
        throw new Error(`Failed to submit: ${response.status}`);
      }

      console.log("Submission successful");
      onOpenChange(false);
      navigate("/thank-you");
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to join waitlist. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDialogOpen = (open: boolean) => {
    if (open) {
      console.log("Dialog opened"); // Debug log
      trackWaitlistForm('start');
    }
    onOpenChange(open);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) {
      setEmailError("");
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleDialogOpen}>
      <DialogContent className="sm:max-w-[425px] bg-[#F1F1F1]">
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-2xl font-bold tracking-tighter text-[#1F1F1F]">
            Join the Waitlist
          </DialogTitle>
          <p className="text-gray-600">
            Enter your Email to Claim 50% Off at Launch 🚀
          </p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
              className={`bg-white/70 border-blue-200/60 focus:border-[#8B5CF6] focus:ring-[#8B5CF6] ${
                emailError ? "border-red-500" : ""
              }`}
            />
            {emailError && (
              <p className="text-sm text-red-500">{emailError}</p>
            )}
          </div>
          <div className="space-y-4">
            <Button 
              type="submit" 
              className="w-full bg-[#FF6978] hover:bg-[#ff8591] text-white text-lg px-6 py-4 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
              disabled={isLoading}
            >
              {isLoading ? "Joining..." : "Join Waitlist"}
            </Button>
            <p className="text-sm text-gray-500 text-center">
              Limited Spots Available for Beta Launch
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
