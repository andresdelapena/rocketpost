
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Rocket, Flame, Building } from "lucide-react";

export function PricingSection() {
  const plans = [
    {
      icon: Rocket,
      name: "Creator Plan",
      price: "$29",
      period: "/month",
      features: [
        "20 content pieces/month",
        "All formats",
        "Auto-formatting",
        "Basic analytics"
      ]
    },
    {
      icon: Flame,
      name: "Pro Plan",
      price: "$79",
      period: "/month",
      features: [
        "Unlimited content",
        "Custom templates",
        "Voice synthesis",
        "Advanced analytics",
        "Format testing"
      ]
    },
    {
      icon: Building,
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "API access",
        "Team accounts",
        "Custom branding",
        "Priority support",
        "Dedicated manager"
      ]
    }
  ];

  return (
    <section className="container max-w-6xl mx-auto px-4 py-24 space-y-8">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-[#1A1F71] via-[#3d4190] to-[#6064af] bg-clip-text text-transparent">
          Simple Pricing for Every Creator
        </h2>
        <p className="text-xl text-gray-600">
          💡 Try RocketPost risk-free with 50% off for early users!
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <Card key={index} className="border border-blue-200/60 hover:border-blue-300/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-md bg-white/50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-2 mb-4">
                <plan.icon className="h-6 w-6 text-[#A6A3F8]" />
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
              </div>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-600">{plan.period}</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-[#A6A3F8]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
