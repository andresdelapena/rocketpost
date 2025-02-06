import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const data = [
  { value: 10 },
  { value: 15 },
  { value: 25 },
  { value: 20 },
  { value: 30 },
  { value: 25 },
  { value: 35 },
];

export function PainPointsSection() {
  const features = [
    {
      title: "Templates",
      subtitle: "High quality, expert-made templates",
      description: "Get started with popular startup metrics in minutes.",
      chart: true
    },
    {
      title: "Connectors",
      subtitle: "We connect to over 150+ apps",
      description: "If it has an API, we'll build you a customer connector in 48 hours for free or your money back.",
      logos: true
    },
    {
      title: "Beautiful dashboards",
      subtitle: "Design stunning dashboards.",
      description: "Filters for your team to explore easily. Tons of visualization options. Color themes that make your charts pop.",
      chart: true
    },
    {
      title: "Spreadsheets on steroids",
      subtitle: "No SQL? No problem.",
      description: "Familiar Excel shortcuts. Slice and dice with powerful pivot tables. Formulas that translate to SQL. Reusable models.",
      table: true
    }
  ];

  return (
    <section className="container max-w-7xl mx-auto px-4 py-16">
      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature, index) => (
          <Card key={index} className="overflow-hidden border border-gray-100 hover:border-gray-200 transition-all duration-300 bg-white">
            <CardContent className="p-6 space-y-4">
              <div className="h-48 w-full bg-gray-50 rounded-lg mb-6">
                {feature.chart && (
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#4F46E5" 
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                )}
                {feature.logos && (
                  <div className="grid grid-cols-4 gap-4 p-4">
                    {Array(8).fill(0).map((_, i) => (
                      <div key={i} className="aspect-square rounded-full bg-gray-100" />
                    ))}
                  </div>
                )}
                {feature.table && (
                  <div className="p-4 space-y-2">
                    {Array(4).fill(0).map((_, i) => (
                      <div key={i} className="h-6 bg-gray-100 rounded" />
                    ))}
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-blue-600">{feature.title}</h3>
                <h4 className="text-xl font-semibold text-gray-900">{feature.subtitle}</h4>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}