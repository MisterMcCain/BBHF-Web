
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Satellite, Twitch } from 'lucide-react';

const StreamAlertBox = () => {
  const twitchUrl = "https://twitch.tv/mister_mccain";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 p-8 md:p-10 rounded-2xl shadow-2xl border border-border/50 overflow-hidden card-hover-glow"
    >
       <Satellite 
        className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 text-purple-500/10 opacity-50" 
        size={180} 
        strokeWidth={1.5}
      />
      <div className="relative z-10 flex flex-col flex-grow">
        <div className="flex-grow">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-purple-500/10 rounded-lg mr-4 border border-purple-500/20">
              <Twitch className="w-8 h-8 text-purple-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Nächster Stream
            </h2>
          </div>
          <p className="text-slate-300 text-lg leading-relaxed mb-3">
            Wann der nächste Livestream kommt, ist noch nicht bekannt! Haltet die Augen offen für Updates auf Twitch und Discord.
          </p>
          <p className="text-slate-400 text-sm mb-8">
            Es erwarten euch in Zukunft wieder unterhaltsame Gaming-Sessions, neue Spiele und Interaktion mit der Community!
          </p>
        </div>
        <div className="mt-auto">
          <Button
            asChild
            size="lg"
            className="w-full font-semibold py-3 px-8 text-lg rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-purple-500/50 focus:ring-opacity-50 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white button-shine"
          >
            <a href={twitchUrl} target="_blank" rel="noopener noreferrer">
              <Twitch className="mr-2 h-6 w-6" />
              Twitch Kanal
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default StreamAlertBox;
