
import React from 'react';

export const VoiceAgentIntegrations = () => {
  const integrations = [
    { name: "Salesforce", color: "text-blue-400" },
    { name: "HubSpot", color: "text-orange-400" },
    { name: "Google Calendar", color: "text-green-400" },
    { name: "WhatsApp", color: "text-green-500" },
    { name: "Zapier", color: "text-yellow-400" }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in px-4">
            Seamless Integrations
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in px-4" style={{ animationDelay: '0.2s' }}>
            Connect with the tools you already use
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12 max-w-4xl mx-auto px-4">
          {integrations.map((integration, index) => (
            <div 
              key={index}
              className={`text-xl sm:text-2xl md:text-3xl font-bold ${integration.color} hover:scale-110 transition-all duration-300 cursor-pointer animate-fade-in text-center`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {integration.name}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-gray-400 text-base sm:text-lg animate-fade-in px-4" style={{ animationDelay: '0.8s' }}>
            + 50+ more integrations available
          </p>
        </div>
      </div>
    </section>
  );
};
