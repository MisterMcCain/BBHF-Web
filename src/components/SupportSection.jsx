import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Gift, Heart } from 'lucide-react';

const SupportSection = ({ title, description, buttonText, link, className }) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 150, damping: 15, delay: 0.2 } }
  };

  return (
    <motion.section 
      className={`py-20 md:py-28 bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 relative overflow-hidden aurora-background ${className}`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="absolute inset-0 hero-gradient opacity-10 z-0"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          variants={itemVariants}
          className="inline-block p-5 bg-gradient-to-br from-primary/20 to-vibrantPurple-DEFAULT/15 rounded-full mb-8 shadow-lg"
        >
          <Gift size={44} className="text-primary animate-subtle-bob" />
        </motion.div>

        <motion.h2 
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-vibrantPurple-light to-vibrantTeal-light mb-8"
        >
          {title}
        </motion.h2>
        
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-300/90 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {description}
        </motion.p>
        
        <motion.div variants={buttonVariants}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              className="button-shine bg-gradient-to-r from-primary via-vibrantPurple-DEFAULT to-vibrantTeal-DEFAULT hover:from-primary/90 hover:via-vibrantPurple-DEFAULT/90 hover:to-vibrantTeal-DEFAULT/90 text-white font-semibold py-4 px-12 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-primary/50"
            >
              <Heart size={22} className="mr-2.5 animate-pulse-glow" />
              {buttonText}
            </Button>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SupportSection;