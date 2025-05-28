
import React from 'react';
import { CheckCircle, Users, Award, Heart, Zap, Shield } from 'lucide-react';

export const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Users,
      title: "5000+ Professionals Trained",
      description: "Join a thriving community of AI practitioners"
    },
    {
      icon: Zap,
      title: "100+ Agents Deployed",
      description: "Proven track record of successful implementations"
    },
    {
      icon: Heart,
      title: "Expert Mentorship",
      description: "Learn from industry veterans and successful founders"
    },
    {
      icon: Award,
      title: "Founder-Led Program",
      description: "Direct access to experienced entrepreneurs"
    },
    {
      icon: Shield,
      title: "100% Satisfaction Guarantee",
      description: "We stand behind the quality of our training"
    },
    {
      icon: CheckCircle,
      title: "Practical, Not Theoretical",
      description: "Build real tools that generate actual value"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🧭 Why Data Science Masterminds?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We're not just another course. We're your partners in building a profitable AI-powered future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-blue-100">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
