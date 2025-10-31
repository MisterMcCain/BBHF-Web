import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const CommunityHeader = () => {
  return (
    <motion.div 
      className="mb-10 md:mb-12 text-center max-w-4xl mx-auto py-6 md:py-8"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div 
        className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky-500/10 mb-6 border border-sky-500/30"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 120 }}
      >
        <Users className="h-8 w-8 text-sky-400" />
      </motion.div>
      <motion.h1 
        className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
      >
        Busbahnhof Community
      </motion.h1>
      <motion.p 
        className="text-xl text-slate-300 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
      >
        Der zentrale Treffpunkt für alle Freunde, Gamer und Minecraft-Enthusiasten. Entdecke Events, lerne das Team kennen und sei dabei!
      </motion.p>
    </motion.div>
  );
};

export default CommunityHeader;