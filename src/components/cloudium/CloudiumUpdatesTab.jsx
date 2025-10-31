import React from 'react';
import { motion } from 'framer-motion';

const CloudiumUpdatesTab = ({ cloudiumUpdates, UpdateCardComponent }) => {
  return (
    <>
      <motion.div 
        className="text-center max-w-3xl mx-auto mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4">Neueste Updates von Cloudium</h2>
        <p className="text-muted-foreground">
          Bleibe auf dem Laufenden mit den neuesten Entwicklungen, Features und Angeboten von cloudium.host
        </p>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {cloudiumUpdates.map((update) => (
          <UpdateCardComponent key={update.id} {...update} />
        ))}
      </motion.div>
    </>
  );
};

export default CloudiumUpdatesTab;