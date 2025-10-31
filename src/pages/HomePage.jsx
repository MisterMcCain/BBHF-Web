import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import SupportSection from '@/components/SupportSection';
import CommunitySection from '@/components/CommunitySection'; // Added this import



const HomePage = () => {
  const donationLink = "https://de.tipeee.com/busbahnhof/";

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white">
      <HeroSection />
      <FeaturesSection />
      <SupportSection 
        title="Unterstütze den Busbahnhof!"
        description="🥳 Magst du, was wir hier verzapfen? Dann spendier uns doch einen imaginären Kaffee (oder zwei). Mit deiner Unterstützung können wir wach bleiben und die Community noch bunter machen! ☕"
        buttonText="Jetzt freiwillig spenden"
        link={donationLink}
        className="bg-slate-800/50"
      />
      <CommunitySection />
    </div>
  );
};

export default HomePage;