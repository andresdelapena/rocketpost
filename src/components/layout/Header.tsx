import { Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
  onWaitlistClick: () => void;
}

export function Header({ scrollToSection, onWaitlistClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Mail className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Regardss</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollToSection("home")} className="text-sm font-medium hover:text-primary">
            Home
          </button>
          <button onClick={() => scrollToSection("benefits")} className="text-sm font-medium hover:text-primary">
            Benefits
          </button>
          <button onClick={() => scrollToSection("how-it-works")} className="text-sm font-medium hover:text-primary">
            How It Works
          </button>
        </nav>
        <Button onClick={onWaitlistClick} className="hidden md:inline-flex">
          Join Waitlist
        </Button>
        <Button variant="outline" className="md:hidden">
          Menu
        </Button>
      </div>
    </header>
  );
}