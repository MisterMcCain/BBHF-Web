import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const LatestUpdates = () => {
  return (
    <motion.section
      className="max-w-5xl mx-auto py-16 px-4 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Überschrift */}
      <h2 className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">
        Neueste Updates
      </h2>
      <p className="text-slate-300 mb-10">
        Bleibe auf dem Laufenden mit den neuesten Updates von MisterMcCain, dem Busbahnhof und Cloudium
      </p>

      {/* 📰 Community News Box */}
      <motion.div
        className="mt-12 bg-slate-800/70 border border-slate-700 rounded-2xl p-8 text-center shadow-xl hover:shadow-violet-500/30 transition-all"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-semibold mb-4 text-violet-400">
          Immer up to date bleiben
        </h3>
        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
          Erfahre alle Neuigkeiten, Events und Änderungen zuerst in unserer Community.
          Besuche den Bereich <span className="text-violet-400 font-semibold">News</span> und bleib informiert!
        </p>

        <Button
          onClick={() => {
            window.location.href = "/community?tab=news"; // 🔗 Direkt zur Community-Seite mit News-Tab
          }}
          className="bg-gradient-to-r from-violet-500 to-purple-500 hover:opacity-90 text-white font-semibold px-6 py-3 rounded-lg"
        >
          Zu den Community-News
        </Button>
      </motion.div>
    </motion.section>
  );
};

export default LatestUpdates;
