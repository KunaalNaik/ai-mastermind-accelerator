
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
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in px-4">
            Automate Every Conversation
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in px-4" style={{ animationDelay: '0.2s' }}>
            From first contact to closing deals, our AI handles it all
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="bg-gray-800 border-gray-700 p-6 sm:p-8 hover:scale-105 hover:-translate-y-2 transition-all duration-500 hover:border-yellow-500 hover:shadow-2xl hover:shadow-yellow-500/10 cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center">
                  <div className={`inline-flex p-3 sm:p-4 rounded-full bg-gradient-to-r ${feature.gradient} mb-4 sm:mb-6 transition-all duration-300 group-hover:scale-110`}>
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 transition-all duration-300 group-hover:text-yellow-400">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed transition-all duration-300 group-hover:text-white">
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
