import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

const MerchInfoBox = () => {
  const shopUrl = "https://busbahnhof.myspreadshop.de/";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 p-8 md:p-10 rounded-2xl shadow-2xl border border-border/50 overflow-hidden card-hover-glow"
    >
      <ShoppingCart 
        className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 text-primary/10 opacity-50" 
        size={180} 
        strokeWidth={1.5}
      />
      <div className="relative z-10 flex flex-col flex-grow">
        <div className="flex-grow">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-primary/10 rounded-lg mr-4 border border-primary/20">
              <ShoppingCart className="w-8 h-8 text-primary" />
            </div>
<h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-400">
              Unser Shop
            </h2>
          </div>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            Tritt ein in die chaotisch-geniale Welt von McOpi und seinem Busbahnhof, wo der Kaffee stark, die Sprüche stärker und die Hoodies einfach legendär sind. Unser offizieller Busbahnhof-Merch-Shop hat geöffnet: Ticket brauchst du nicht, nur Stil!
          </p>
        </div>
        <div className="mt-auto">
          <a href={shopUrl} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="w-full font-semibold py-3 px-8 text-lg rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-primary/50 focus:ring-opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 button-shine"
            >
              <span className="mr-2">🚀</span> Zum Shop
            </Button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default MerchInfoBox;