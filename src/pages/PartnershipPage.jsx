import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake as Handshake, MessageSquare, Users, Sparkles, Zap } from 'lucide-react';
import PartnershipForm from '@/components/partnership/PartnershipForm';

const PartnershipPage = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeInOut" } }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };
  
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-28 pb-16 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white min-h-screen"
    >
      <div className="container mx-auto px-4">
        <motion.header 
          className="text-center mb-12 md:mb-16"
          variants={itemVariants}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <div className="inline-block p-4 bg-gradient-to-r from-primary to-vibrantPurple-DEFAULT rounded-full mb-6 shadow-lg">
            <Handshake className="h-12 w-12 md:h-16 md:h-16 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400">
            Werde Partner vom Busbahnhof!
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Gemeinsam mehr erreichen - lass uns die Weichen für eine coole Zusammenarbeit stellen!
          </p>
        </motion.header>

        <motion.section 
          className="mb-16 md:mb-20"
          variants={itemVariants}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <PartnershipForm />
        </motion.section>

        <motion.section 
          className="mt-16 md:mt-20"
          variants={itemVariants}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 md:mb-10 text-slate-100">
            Das erwartet dich als Partner:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: Users, title: "Starke Community-Vibes", description: "Tauch ein in eine aktive und hilfsbereite Gemeinschaft." },
              { icon: Sparkles, title: "Kreative Kooperationen", description: "Setze gemeinsame Projekte und verrückte Ideen um." },
              { icon: Zap, title: "Gemeinsame Aktionen", description: "Veranstalte Events, die im Gedächtnis bleiben." },
              { icon: Handshake, title: "Gegenseitiger Support", description: "Wir helfen uns, wachsen zusammen und feiern Erfolge." },
              { icon: MessageSquare, title: "Direkter Draht", description: "Einfache Kommunikation und schnelle Entscheidungen." },
              { icon: Users, title: "Mehr Reichweite", description: "Profitiere von unserer Plattform und unseren Mitgliedern." },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-6 rounded-lg shadow-lg border border-slate-700/60 flex flex-col items-center text-center hover:bg-slate-700/70 transition-all duration-300"
                variants={itemVariants}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              >
                <div className="p-3 bg-gradient-to-br from-sky-500 to-cyan-400 rounded-full mb-4 inline-block">
                  <benefit.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-100">{benefit.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default PartnershipPage;