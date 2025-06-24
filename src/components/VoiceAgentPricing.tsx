
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Phone } from 'lucide-react';

export const VoiceAgentPricing = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Pay only for what you use. No setup fees, no monthly minimums.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 p-8 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="bg-black/10 rounded-lg p-8">
              <div className="text-6xl font-bold text-black mb-4">₹2</div>
              <div className="text-2xl text-gray-900 font-semibold mb-6">per call</div>
              
              <div className="space-y-4 mb-8">
                {[
                  "Unlimited call duration",
                  "Human-like voice quality",
                  "CRM integrations included",
                  "Real-time analytics",
                  "24/7 support"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center justify-center text-black">
                    <Check className="w-5 h-5 mr-3" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <a href="tel:+918035738778">
                  <Button 
                    size="lg" 
                    className="w-full bg-black hover:bg-gray-900 text-white px-8 py-4 text-xl font-bold transition-all duration-300 transform hover:scale-105 group"
                  >
                    <Phone className="mr-3 w-6 h-6" />
                    Get Started Today
                  </Button>
                </a>
                <p className="text-gray-900 text-sm">No setup fees • Cancel anytime</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
