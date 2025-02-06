import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
  onWaitlistClick: () => void;
}

export function Header({ scrollToSection, onWaitlistClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-[linear-gradient(109.6deg,rgba(245,247,250,0.8)_11.2%,rgba(245,247,250,0.8)_91.1%)] backdrop-blur-md shadow-sm">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/bf1c518b-8bc6-4249-b45a-526d0c4deb32.png" 
            alt="RocketPost Logo" 
            className="h-8"
          />
        </Link>
        <div className="flex-1 flex justify-end items-center gap-6">
          <nav className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-16 left-0 md:top-0 w-full md:w-auto flex-col md:flex-row items-center md:items-center gap-4 md:gap-6 bg-white md:bg-transparent p-4 md:p-0 border-b md:border-0`}>
            <button onClick={() => scrollToSection("benefits")} className="text-sm font-medium text-gray-600 hover:text-gray-900 text-center w-full md:w-auto max-w-[15.625rem]">
              Benefits
            </button>
            <button onClick={() => scrollToSection("how-it-works")} className="text-sm font-medium text-gray-600 hover:text-gray-900 text-center w-full md:w-auto max-w-[15.625rem]">
              How It Works
            </button>
            <Button onClick={onWaitlistClick} className="md:hidden w-full max-w-[15.625rem] bg-[#FF6978] hover:bg-[#ff8591] text-white">
              Join Waitlist
            </Button>
          </nav>
          <Button 
            onClick={onWaitlistClick} 
            className="hidden md:inline-flex bg-[#FF6978] hover:bg-[#ff8591] text-white rounded-full px-6"
          >
            Join Waitlist
          </Button>
          <Button 
            variant="outline" 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            Menu
          </Button>
        </div>
      </div>
    </header>
  );
}