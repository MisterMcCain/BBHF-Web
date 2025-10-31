import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Server } from 'lucide-react';

const StatusPage = () => {
  const statusUrl = 'https://status.cloudium.host/';

  const handleRedirect = () => {
    window.open(statusUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative min-h-[calc(100vh-5rem)] w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white p-4 pt-20 aurora-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-2xl text-center glassmorphism rounded-2xl p-8 md:p-12 shadow-2xl border border-slate-700/50"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
          className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-vibrantPurple-dark shadow-lg"
        >
          <Server className="h-10 w-10 text-white" />
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-bold text-gradient-animated mb-4">
          Systemstatus
        </h1>
        <p className="text-lg text-slate-300 max-w-md mx-auto mb-8">
          Hier findest du den aktuellen Betriebsstatus all unserer Systeme und Dienste, wie z.B. unser Minecraft-Netzwerk, unsere Discord-Bots und mehr.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={handleRedirect}
            className="button-shine group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-primary to-vibrantPurple-dark px-8 py-3 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:shadow-primary/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Live-Status prüfen
            <ExternalLink className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </motion.div>

        <p className="mt-8 text-sm text-muted-foreground">
          Statusdaten werden extern bereitgestellt.
        </p>
      </motion.div>
    </div>
  );
};

export default StatusPage;