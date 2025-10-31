import React from "react";
import { HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

const WorryBox = () => (
  <div className="mb-16 text-slate-300">
{/* Überschrift über der Box */}
    <div className="text-center mb-6">
      <h2 className="text-3xl md:text-4xl font-bold text-gradient-animated">
        💬 NEU: Anonymer Kummerkasten auf unserem Discord
      </h2>
      <p className="text-lg text-slate-400">
        Unsere Klötzchenwelt steht kurz vor dem Release 🚀
      </p>
    </div>

    {/* Inhaltliche Box */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="news-3d-box p-6 md:p-8 space-y-5 border border-slate-700/60 rounded-2xl shadow-lg
                 bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-xl
                 hover:shadow-red-500/25 hover:border-sky-500/40 transition-all duration-300
                 text-slate-300"
    >
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <HeartHandshake className="h-10 w-10 text-pink-400" />
      </div>

      {/* Inhalt */}
      <div className="space-y-4 text-base leading-relaxed">
        <p>
          Wir bieten einen sicheren Ort für alle Sorgen, Gedanken und Gefühle.
        </p>
        <p>
          Jeder kann hier frei schreiben, was ihn oder sie belastet, absolut anonym
          und 100&nbsp;% vertraulich. Niemand wird je sehen, wer die Nachricht
          geschrieben hat – nicht einmal der Owner.
        </p>
        <p>
          Es geht darum, Gedanken loszulassen und sich zu entlasten, besonders dann,
          wenn man niemanden hat, dem man sich anvertrauen kann.
        </p>
      </div>

      {/* Discord-Link */}
      <div className="text-center pt-4">
        <a
          href="https://discord.gg/busbahnhof"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500
                     text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition
                     shadow-lg button-shine"
        >
          Zum Discord-Server 💖
        </a>
      </div>
    </motion.div>
  </div>
);

export default WorryBox;
