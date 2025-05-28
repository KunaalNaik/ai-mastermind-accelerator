
import React from 'react';
import { Card } from '@/components/ui/card';
import { Users, Briefcase, TrendingUp, Wrench } from 'lucide-react';

export const WhoIsThisFor = () => {
  const targetAudience = [
    {
      icon: Users,
      title: "Professionals",
      description: "Looking to enhance productivity with AI automation and stay ahead in their careers"
    },
    {
      icon: Briefcase,
      title: "Founders",
      description: "Wanting to scale operations, reduce costs, and create competitive advantages"
    },
    {
      icon: TrendingUp,
      title: "Team Leaders",
      description: "In Marketing, Sales, HR seeking to optimize workflows and drive results"
    },
    {
      icon: Wrench,
      title: "Builders & Solopreneurs",
      description: "Ready to create AI-powered products and generate new revenue streams"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who Is This For?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Perfect for anyone ready to harness AI to transform their work and income
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {targetAudience.map((audience, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-2 hover:border-blue-200">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <audience.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {audience.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {audience.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
