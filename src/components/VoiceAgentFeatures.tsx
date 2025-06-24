
import React from 'react';
import { Card } from '@/components/ui/card';
import { PhoneCall, Phone, Calendar } from 'lucide-react';

export const VoiceAgentFeatures = () => {
  const features = [
    {
      icon: PhoneCall,
      title: "Outbound Calls",
      description: "Follow-up with leads, send reminders, re-engage prospects automatically",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: Phone,
      title: "Inbound Call Handling",
      description: "Answer questions, qualify leads, route to humans when needed",
      gradient: "from-green-400 to-blue-500"
    },
    {
      icon: Calendar,
      title: "Appointment Booking",
      description: "Integrates with your calendar to lock in meetings seamlessly",
      gradient: "from-blue-400 to-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
            Automate Every Conversation
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            From first contact to closing deals, our AI handles it all
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="bg-gray-800 border-gray-700 p-8 hover:scale-105 hover:-translate-y-2 transition-all duration-500 hover:border-yellow-500 hover:shadow-2xl hover:shadow-yellow-500/10 cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${feature.gradient} mb-6 transition-all duration-300 group-hover:scale-110`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 transition-all duration-300 group-hover:text-yellow-400">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed transition-all duration-300 group-hover:text-white">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
