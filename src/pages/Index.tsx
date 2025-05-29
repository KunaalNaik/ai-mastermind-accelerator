
import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { RebrandNotice } from '@/components/RebrandNotice';
import { WhoIsThisFor } from '@/components/WhoIsThisFor';
import { EngagementLevels } from '@/components/EngagementLevels';
import { CodeOfHonorPreview } from '@/components/CodeOfHonorPreview';
import { SuccessStories } from '@/components/SuccessStories';
import { MeetKunaal } from '@/components/MeetKunaal';
import { FinalCTA } from '@/components/FinalCTA';
import { Navigation } from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white font-montserrat">
      <Navigation />
      <HeroSection />
      <RebrandNotice />
      <WhoIsThisFor />
      <EngagementLevels />
      <CodeOfHonorPreview />
      <SuccessStories />
      <MeetKunaal />
      <FinalCTA />
    </div>
  );
};

export default Index;
