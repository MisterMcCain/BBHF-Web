import React from "react";
import { motion } from "framer-motion";
import { Tv2, Zap, Hammer, BusFront, Calendar, Sparkles } from "lucide-react";

const StreamAnnouncementBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative bg-slate-800/60 border border-sky-400/40 rounded-3xl p-8 shadow-2xl overflow-hidden mb-12"
      style={{
        boxShadow:
          "0 0 30px rgba(56,189,248,0.25), 0 0 60px rgba(168,85,247,0.25)",
      }}
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-sky-500/10 to-transparent rounded-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center mb-6 space-x-4 relative z-10">
        <Tv2 className="w-8 h-8 text-sky-400" />
        <h2 className="text-3xl md:text-4xl font-extrabold text-sky-400 tracking-tight">
          🎬 Endlich:{' '}
          <span className="text-purple-400">McOpi</span> geht bald wieder live!
        </h2>
      </div>

      {/* Content */}
      <div className="space-y-5 text-slate-200 relative z-10">
        <p className="flex items-start">
          <BusFront className="w-5 h-5 text-purple-400 mr-3 mt-1" />
          <span>
            <strong>RV There Yet?</strong> steht auf dem Fahrplan – das wohl
            chaotischste Camping-Abenteuer seit es Navi-Geräte gibt. Spoiler:
            Der Beifahrer überlebt nicht ohne Trauma. 😂
          </span>
        </p>

        <p className="flex items-start">
          <Hammer className="w-5 h-5 text-sky-400 mr-3 mt-1" />
          <span>
            Und weil’s noch nicht genug Drama gibt: In{" "}
            <strong>Keep Digging</strong> beweist McOpi, dass man sich auch
            digital komplett vergraben kann. 🪓
          </span>
        </p>

        <p className="flex items-start">
          <Sparkles className="w-5 h-5 text-purple-300 mr-3 mt-1" />
          <span>
            Freut euch auf <em>Action, Lachanfälle und den üblichen
            Busbahnhof-Wahnsinn</em>, wenn McOpi wieder live durchstartet –
            unvorbereitet, überdreht und garantiert nicht pünktlich!
          </span>
        </p>
      </div>

      {/* Footer */}
      <div className="mt-8 pt-4 border-t border-slate-700/60 flex items-center text-sky-300 font-semibold text-lg relative z-10">
        <Calendar className="w-5 h-5 mr-2" />
        📅 Termin: Wird bald bekanntgegeben!
      </div>

      {/* Floating Icon Animation */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute top-6 right-6 text-sky-400/70"
      >
        <Zap className="w-6 h-6" />
      </motion.div>
    </motion.div>
  );
};

export default StreamAnnouncementBox;
