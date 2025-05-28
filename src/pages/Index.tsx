
import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { WhoIsThisFor } from '@/components/WhoIsThisFor';
import { EngagementLevels } from '@/components/EngagementLevels';
import { SuccessStories } from '@/components/SuccessStories';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { FinalCTA } from '@/components/FinalCTA';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <HeroSection />
      <WhoIsThisFor />
      <EngagementLevels />
      <SuccessStories />
      <WhyChooseUs />
      <FinalCTA />
    </div>
  );
};

export default Index;
