
import React from 'react';
import { Card } from '@/components/ui/card';
import { Users, Briefcase, TrendingUp, Wrench } from 'lucide-react';

export const WhoIsThisFor = () => {
  const targetAudience = [
    {
      icon: Users,
      title: "Professionals",
      description: "Looking to enhance productivity with AI automation and stay ahead in their careers",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Briefcase,
      title: "Founders",
      description: "Wanting to scale operations, reduce costs, and create competitive advantages",
      color: "from-green-500 to-blue-500"
    },
    {
      icon: TrendingUp,
      title: "Team Leaders",
      description: "In Marketing, Sales, HR seeking to optimize workflows and drive results",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Wrench,
      title: "Builders & Solopreneurs",
      description: "Ready to create AI-powered products and generate new revenue streams",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Who Is This For?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Perfect for anyone ready to harness AI to transform their work and income
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {targetAudience.map((audience, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 p-6 text-center hover:scale-105 transition-all duration-300 hover:border-yellow-500">
              <div className="flex justify-center mb-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${audience.color} rounded-full flex items-center justify-center`}>
                  <audience.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {audience.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {audience.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
