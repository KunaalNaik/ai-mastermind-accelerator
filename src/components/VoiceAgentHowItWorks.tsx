
import React from 'react';
import { Card } from '@/components/ui/card';
import { FileText, Link, Zap } from 'lucide-react';

export const VoiceAgentHowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: FileText,
      title: "Upload Your Script",
      description: "Upload your script or use our AI prompt builder to create conversations"
    },
    {
      number: "02",
      icon: Link,
      title: "Connect Your CRM",
      description: "Integrate with your existing CRM or lead source for seamless workflow"
    },
    {
      number: "03",
      icon: Zap,
      title: "Go Live in 10 Minutes",
      description: "Deploy your AI voice agent and start handling calls immediately"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in px-4">
            How It Works
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in px-4" style={{ animationDelay: '0.2s' }}>
            Get your AI voice agent running in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card 
                key={index} 
                className="bg-gray-900 border-gray-800 p-6 sm:p-8 text-center relative overflow-hidden hover:scale-105 transition-all duration-500 group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Number */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 text-4xl sm:text-6xl font-bold text-gray-700 transition-all duration-300 group-hover:text-yellow-400/20">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="inline-flex p-3 sm:p-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 mb-4 sm:mb-6 transition-all duration-300 group-hover:scale-110">
                  <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 transition-all duration-300 group-hover:text-yellow-400">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-base sm:text-lg leading-relaxed transition-all duration-300 group-hover:text-gray-300">
                  {step.description}
                </p>
                
                {/* Connecting Line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent"></div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
