
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
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
            Seamless Integrations
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Connect with the tools you already use
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 max-w-4xl mx-auto">
          {integrations.map((integration, index) => (
            <div 
              key={index}
              className={`text-2xl md:text-3xl font-bold ${integration.color} hover:scale-110 transition-all duration-300 cursor-pointer animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {integration.name}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg animate-fade-in" style={{ animationDelay: '0.8s' }}>
            + 50+ more integrations available
          </p>
        </div>
      </div>
    </section>
  );
};
