import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Map, ExternalLink, Info } from 'lucide-react';

const CommunityMinecraftTab = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.01, -0.05, 0.95],
      },
    },
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto text-center"
      initial={false}
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {/* Header */}
      <motion.div
        className="mb-10 group transition-transform duration-300 hover:-translate-y-1 hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]"
        variants={cardVariants}
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/10 mb-6 border border-purple-500/30 transition-transform duration-300 group-hover:scale-110 group-hover:bg-purple-500/20 group-hover:border-purple-400/50">
          <Map className="h-8 w-8 text-purple-400 transition-transform duration-300 group-hover:scale-110 group-hover:text-fuchsia-400" />
        </div>
        <h2
          className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-400 to-violet-500 bg-[length:200%_200%] group-hover:animate-gradient-x"
        >
          Unsere Minecraft Live-Map
        </h2>
        <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto transition-colors duration-300 group-hover:text-slate-100">
          Entdecke unsere Minecraft-Welt in Echtzeit! Dank des Plugins{' '}
          <span className="font-semibold text-purple-300 group-hover:text-fuchsia-300">
            Bluemap & Tom
          </span>{' '}
          haben wir eine interaktive Karte eingerichtet, die du direkt im
          Browser erkunden kannst.
        </p>
      </motion.div>

      {/* Card */}
      <motion.div
        className="relative bg-slate-800/70 border border-slate-700 rounded-2xl p-8 md:p-12 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)] hover:border-fuchsia-500/40"
        variants={cardVariants}
      >
        <div className="absolute -top-8 -left-8 w-24 h-24 bg-purple-500/10 rounded-full filter blur-2xl -z-10 transition-opacity duration-500 group-hover:opacity-100"></div>
        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-fuchsia-500/10 rounded-full filter blur-2xl -z-10"></div>

        <motion.h3
          className="text-2xl font-bold text-slate-100 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Live-Karte erkunden
        </motion.h3>

        <motion.p
          className="text-slate-300 mb-8 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Klicke auf den Button, um die Live-Map zu öffnen. Zoome, schwenke und
          sieh dir die Bauwerke unserer Community aus der Vogelperspektive an!
        </motion.p>

        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 150 }}
        >
          <a
            href="https://livemap.busbahnhof.fun/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="font-bold py-4 px-10 text-lg rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(217,70,239,0.4)] focus:ring-4 focus:ring-opacity-50 bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:from-purple-600 hover:to-fuchsia-600 text-white focus:ring-purple-400"
            >
              <ExternalLink className="mr-3 h-6 w-6" />
              Karte öffnen
            </Button>
          </a>
        </motion.div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <p className="font-mono text-sm text-slate-400 tracking-widest bg-slate-900/70 inline-block px-4 py-2 rounded-md border border-slate-700">
            https://livemap.busbahnhof.fun/
          </p>
        </motion.div>
      </motion.div>

      {/* Footer Info */}
      <motion.div
        className="mt-12 flex items-center justify-center gap-3 bg-slate-800/60 p-4 rounded-lg border border-slate-700/60 max-w-2xl mx-auto transition-all duration-300 hover:border-fuchsia-500/30 hover:shadow-[0_0_15px_rgba(217,70,239,0.2)]"
        variants={cardVariants}
      >
        <Info className="h-5 w-5 text-fuchsia-400 flex-shrink-0 transition-transform duration-300 group-hover:rotate-12" />
        <p className="text-sm text-slate-300">
          Die Karte wird regelmäßig aktualisiert. Es kann zu kurzen Ladezeiten
          kommen, während neue Chunks generiert werden. (In Kürze kommen neue Features hinzu.)
        </p>
      </motion.div>

      {/* Minecraft Bild darunter */}
      <motion.div
        className="mt-10 max-w-5xl mx-auto rounded-2xl overflow-hidden border border-slate-700 shadow-2xl hover:shadow-fuchsia-500/30 transition-all duration-500"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <img
          src="https://github.com/MisterMcCain/BBHF-Web/blob/main/gallery/BBHF%20MC%20Netzwerk.png?raw=true"
          alt="Minecraft Busbahnhof Map"
          className="w-full h-auto object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

export default CommunityMinecraftTab;
