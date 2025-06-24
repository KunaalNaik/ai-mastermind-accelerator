
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { VoiceAgentHero } from '@/components/VoiceAgentHero';
import { VoiceAgentFeatures } from '@/components/VoiceAgentFeatures';
import { VoiceAgentDemo } from '@/components/VoiceAgentDemo';
import { VoiceAgentHowItWorks } from '@/components/VoiceAgentHowItWorks';
import { VoiceAgentIntegrations } from '@/components/VoiceAgentIntegrations';
import { VoiceAgentTestimonials } from '@/components/VoiceAgentTestimonials';
import { VoiceAgentPricing } from '@/components/VoiceAgentPricing';
import { VoiceAgentFAQ } from '@/components/VoiceAgentFAQ';

const VoiceAgent = () => {
  return (
    <div className="min-h-screen bg-black text-white font-montserrat">
      <Navigation />
      <VoiceAgentHero />
      <VoiceAgentFeatures />
      <VoiceAgentDemo />
      <VoiceAgentHowItWorks />
      <VoiceAgentIntegrations />
      <VoiceAgentTestimonials />
      <VoiceAgentPricing />
      <VoiceAgentFAQ />
    </div>
  );
};

export default VoiceAgent;
