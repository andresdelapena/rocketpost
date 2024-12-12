import { Helmet } from "react-helmet";
import { HeroSection } from "@/components/sections/HeroSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export default function Index() {
  return (
    <>
      <Helmet>
        <title>Regardss - AI-Powered Email Assistant for Professionals</title>
        <meta name="description" content="Save time writing professional emails with Regardss, an AI assistant that creates clear, personalized emails matching your voice and role." />
        <meta name="keywords" content="email assistant, AI email writer, professional emails, business communication" />
        <link rel="canonical" href="https://regardss.com" />
      </Helmet>
      <main>
        <HeroSection />
        <BenefitsSection />
        <HowItWorksSection />
        <TrustSection />
        <FinalCTASection />
      </main>
    </>
  );
}