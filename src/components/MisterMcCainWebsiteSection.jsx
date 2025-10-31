
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, User } from 'lucide-react';

const MisterMcCainWebsiteSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 p-8 md:p-10 rounded-2xl overflow-hidden mccain-3d"
    >
      <User 
        className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 text-sky-500/10 opacity-50" 
        size={180} 
        strokeWidth={1.5}
      />
      <div className="relative z-10 flex flex-col flex-grow">
        <div className="flex-grow">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-sky-500/10 rounded-lg mr-4 border border-sky-500/20">
              <User className="w-8 h-8 text-sky-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">
              MisterMcCain's Welt
            </h2>
          </div>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            Tauche ein in die verrückte Welt von MisterMcCain! Erfahre mehr über seine Projekte, Streams und alles, was ihn bewegt. Direkt auf seiner persönlichen Webseite.
          </p>
        </div>
        <div className="mt-auto">
          <a href="https://mistermccain.com/" target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              className="w-full font-semibold py-3 px-8 text-lg rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-sky-500/50 focus:ring-opacity-50 bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white button-shine"
            >
              <ExternalLink size={20} className="mr-2" />
              Zur Webseite
            </Button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default MisterMcCainWebsiteSection;
