import React from 'react';
import { motion } from 'framer-motion';
import { Server } from 'lucide-react';

const CloudiumHeader = () => {
  return (
    <motion.div 
      className="mb-12 text-center max-w-4xl mx-auto"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/10 mb-4">
        <Server className="h-8 w-8 text-purple-500" />
      </div>
      <h1 className="text-4xl font-bold mb-4">Cloudium</h1>
      <p className="text-lg text-muted-foreground">
        Premium Game-Server-Hosting für dich und deine Freunde. Hoste deine Lieblingsspiele mit bester Performance und Zuverlässigkeit.
      </p>
      <p className="text-sm text-muted-foreground mt-2">
        Powered by <a href="https://vultris.org" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Vultris.org</a>
      </p>
    </motion.div>
  );
};

export default CloudiumHeader;