import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Rss } from 'lucide-react';
import LatestUpdates from '@/components/LatestUpdates';
import MerchInfoBox from '@/components/MerchInfoBox';
import StreamAlertBox from '@/components/StreamAlertBox';
import MisterMcCainWebsiteSection from '@/components/MisterMcCainWebsiteSection';
import TeamSearchInfoBox from '@/components/TeamSearchInfoBox';

const WebsiteUpdatesPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <>
      <Helmet>
        <title>MisterMcCain | Busbahnhof Community</title>
        <meta name="description" content="Alle Neuigkeiten rund um MisterMcCain, seine Projekte, Streams und den offiziellen Community-Merch. Bleib immer auf dem Laufenden!" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-background to-slate-900 text-foreground pt-28 pb-20">
        <motion.div
          className="container mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.header variants={itemVariants} className="text-center mb-16">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
              <Rss className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-500 mb-4">
              MisterMcCain's Welt
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Alle Neuigkeiten, Ankündigungen und Updates rund um MisterMcCain, seine Projekte und die Community an einem Ort.
            </p>
          </motion.header>

          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            <StreamAlertBox />
            <MisterMcCainWebsiteSection />
            <MerchInfoBox />
            <TeamSearchInfoBox />
          </motion.div>

          <motion.div variants={itemVariants}>
            <LatestUpdates />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default WebsiteUpdatesPage;