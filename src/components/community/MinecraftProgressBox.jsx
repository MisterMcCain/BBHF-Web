import React from "react";
import { Hammer } from "lucide-react";
import { motion } from "framer-motion";

const MinecraftProgressBox = () => (
  <div className="mb-16 text-slate-300">
    {/* Überschrift über der Box */}
    <div className="text-center mb-6">
      <h2 className="text-3xl md:text-4xl font-bold text-gradient-animated">
        🧱 Große Fortschritte in unserem Minecraft-Netzwerk!
      </h2>
      <p className="text-lg text-slate-400">
        Unsere Klötzchenwelt steht kurz vor dem Release 🚀
      </p>
    </div>

    {/* Box-Inhalt */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="news-d-box p-6 md:p-8 space-y-5 border border-slate-700/60 rounded-2xl shadow-lg
                 bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-xl
                 hover:shadow-sky-500/25 hover:border-sky-500/40 transition-all duration-300
                 text-slate-300"
    >
      <div className="flex items-center gap-3 mb-2">
        <Hammer className="text-amber-400 w-6 h-6" />
        <h3 className="text-xl font-semibold text-amber-400">
          Fortschrittsupdate 🛠️
        </h3>
      </div>

      <div className="space-y-3 text-slate-300 leading-relaxed">
        <p>
          Dank unserem Super-Builder <strong>Flixses</strong> aka Lukas haben wir nun unsere eigene,
          in wochenlanger Arbeit erstellte Lobby – sowie eigene Spielmodi!
        </p>

        <p>
          ⚒️ Das ist aber nur der Anfang: Flixses hat unsere Highlights fertiggestellt – die Spielmodi{" "}
          <strong>Bedwars & Mini Games</strong>!
        </p>

        <p>✨ Bleibt gespannt – schon bald folgen weitere Infos auf unserem Discord. Versprochen!</p>
      </div>
    </motion.div>
  </div>
);

export default MinecraftProgressBox;
