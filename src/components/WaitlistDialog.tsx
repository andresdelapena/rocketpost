
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

export function WaitlistDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Submitting email:", email);

    try {
      const response = await fetch("https://hook.eu2.make.com/9usncqxw93i58oglf3l5p8r4b7vusblj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-[#F1F1F1]/90 backdrop-blur-sm">
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-2xl font-bold tracking-tighter text-[#1F1F1F]">
            Join the Waitlist
          </DialogTitle>
          <p className="text-gray-600">
            Enter your email to claim 20% off at launch 🚀
          </p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white/70 border-blue-200/60 focus:border-[#8B5CF6] focus:ring-[#8B5CF6]"
          />
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
