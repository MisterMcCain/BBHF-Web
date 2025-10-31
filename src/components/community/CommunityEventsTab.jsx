import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  Users,
  Server,
  Globe,
  TreePine,
  Bed,
  Gamepad2,
  Hammer,
  Mic,
  Copy,
  Check,
  Hand,
  Trophy,
  Medal,
  PartyPopper,
} from "lucide-react";

// =========================
// 🏆 Coin Event Gewinner
// =========================
const CoinEventWinnersCard = () => {
  return (
    <motion.div
      className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 md:p-8 shadow-xl glassmorphism card-hover-glow mb-12 md:mb-16"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
    >
      <h3 className="text-2xl md:text-3xl font-bold text-gradient-animated mb-6 text-center">
        🎉 COIN EVENT BEENDET – DIE GEWINNER STEHEN FEST! 🎉
      </h3>

      <div className="text-left text-slate-300 space-y-6 text-base max-w-3xl mx-auto">
        <p className="text-center text-slate-400 italic">
          💥 Das Coin Event ist offiziell beendet! Ihr habt gesammelt, gechattet
          und alles gegeben – jetzt ist es Zeit, die Champions zu krönen! 🏆
        </p>

        <div>
          <h4 className="flex items-center text-lg sm:text-xl font-bold text-amber-400 mb-3">
            <Trophy className="h-6 w-6 mr-3 text-amber-400" />
            🏁 Unsere glorreichen Gewinner:
          </h4>

          <ul className="space-y-3 pl-4 sm:pl-9">
            <li className="flex items-start sm:items-center">
              <Medal className="h-5 w-5 mr-3 text-yellow-400 flex-shrink-0" />
              <div>
                <strong>Platz 1:</strong>{" "}
                <span className="ml-2 font-mono text-slate-200">Gabriel</span>{" "}
                <span className="text-sky-400 font-semibold">(244 Münzen)</span>
              </div>
            </li>

            <li className="flex items-start sm:items-center">
              <Medal className="h-5 w-5 mr-3 text-gray-300 flex-shrink-0" />
              <div>
                <strong>Platz 2:</strong>{" "}
                <span className="ml-2 font-mono text-slate-200">Nachtmahr</span>{" "}
                <span className="text-sky-400 font-semibold">(35 Münzen)</span>
              </div>
            </li>

            <li className="flex items-start sm:items-center">
              <Medal className="h-5 w-5 mr-3 text-orange-400 flex-shrink-0" />
              <div>
                <strong>Platz 3:</strong>{" "}
                <span className="ml-2 font-mono text-slate-200">Zero MØtion</span>{" "}
                <span className="text-sky-400 font-semibold">(25 Münzen)</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="text-center pt-5 border-t border-slate-700/50">
          <PartyPopper className="h-8 w-8 mx-auto mb-3 text-sky-400 animate-pulse" />
          <p className="font-semibold text-lg md:text-xl text-gradient-animated">
            🫶 Herzlichen Glückwunsch an die Gewinner und vielen Dank an alle
            Teilnehmer – ihr habt den Busbahnhof zum Leben erweckt!
          </p>
          <p className="text-slate-400 mt-2">
            Das nächste Event steht schon in den Startlöchern... 🚀
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// =========================
// 🎮 Minecraft Promo Text
// =========================
const MinecraftPromoText = () => (
  <div className="text-left text-slate-300 space-y-6 text-base md:text-lg max-w-3xl mx-auto">
    <p className="text-center text-lg md:text-xl font-semibold">
      Wir arbeiten mit Hochdruck an einem einzigartigen Spielerlebnis! Schon
      bald könnt ihr euch auf folgende Spielmodi freuen:
    </p>

    <div className="space-y-4">
      <div className="flex items-start">
        <Globe className="h-6 w-6 mr-3 text-sky-400 flex-shrink-0 mt-1" />
        <div>
          <h4 className="font-bold text-slate-100">
            Creative{" "}
            <span className="text-green-400 text-sm font-normal ml-2">
              (online)
            </span>
          </h4>
          <p className="text-slate-400">
            Baue ohne Grenzen in deinem eigenen Plot und zeige deine
            Kreativität!
          </p>
        </div>
      </div>

      <div className="flex items-start">
        <TreePine className="h-6 w-6 mr-3 text-green-400 flex-shrink-0 mt-1" />
        <div>
          <h4 className="font-bold text-slate-100">
            Survival{" "}
            <span className="text-green-400 text-sm font-normal ml-2">
              (online)
            </span>
          </h4>
          <p className="text-slate-400">
            Erlebe klassisches Minecraft mit Freunden – farmen, kämpfen,
            überleben!
          </p>
        </div>
      </div>

      <div className="flex items-start">
        <Bed className="h-6 w-6 mr-3 text-red-400 flex-shrink-0 mt-1" />
        <div>
          <h4 className="font-bold text-slate-100">
            Bedwars{" "}
            <span className="text-blue-400 text-sm font-normal ml-2">
              (vor Veröffentlichung)
            </span>
          </h4>
          <p className="text-slate-400">
            Zerstöre gegnerische Betten, sichere dein Team und dominiere die
            Arena!
          </p>
        </div>
      </div>

      <div className="flex items-start">
        <Gamepad2 className="h-6 w-6 mr-3 text-yellow-400 flex-shrink-0 mt-1" />
        <div>
          <h4 className="font-bold text-slate-100">
            Mini Games{" "}
            <span className="text-blue-400 text-sm font-normal ml-2">
              (vor Veröffentlichung)
            </span>
          </h4>
          <p className="text-slate-400">
            Abwechslungsreiche Spiele für zwischendurch – Spaß garantiert!
          </p>
        </div>
      </div>

      <div className="flex items-start">
        <Hand className="h-6 w-6 mr-3 text-orange-400 flex-shrink-0 mt-1" />
        <div>
          <h4 className="font-bold text-slate-100">
            Hau den Opi{" "}
            <span className="text-red-600 text-sm font-normal ml-2">
              (in Entwicklung)
            </span>
          </h4>
          <p className="text-slate-400">
            Ein exklusiver Modus mit Überraschungen – nur bei uns!
          </p>
        </div>
      </div>
    </div>

    <div className="text-center font-medium text-slate-300">
      <p>📢 Mehr Infos: 👉 Auf unserem Discord</p>
    </div>

    <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700 space-y-3">
      <h4 className="flex items-center text-base sm:text-lg font-bold text-amber-400">
        <Hammer className="h-5 w-5 mr-3" />
        Entwicklungs-Status
      </h4>
      <p className="text-slate-400 pl-8 text-sm">
        Unser Netzwerk befindet sich kurz vor der Veröffentlichung – es wird
        großartig! Wir entwickeln z.B. ein eigenes Berechtigungs- und
        Rechtesystem, sowie unsere eigenen Spielmodi und unsere selbstgebaute
        Lobby!
      </p>
    </div>

    <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700 space-y-3">
      <h4 className="flex items-center text-base sm:text-lg font-bold text-purple-400">
        <Mic className="h-5 w-5 mr-3" />
        Zukünftige Events
      </h4>
      <p className="text-slate-400 pl-8 text-sm">
        In Zukunft erwarten euch auch regelmäßige Minecraft-Events, die von
        McOpi live auf Twitch gestreamt werden!
      </p>
    </div>

    <p className="text-center text-xl font-bold tracking-wider text-gradient-animated pt-4">
      Bleibt dran – es wird episch! 🚀
    </p>
  </div>
);

// =========================
// 🧱 Minecraft Event Card
// =========================
const MinecraftEventCard = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const serverIp = "play.busbahnhof.fun";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(serverIp).then(() => {
      setCopied(true);
      toast({
        title: "✅ IP-Adresse kopiert!",
        description: `${serverIp} ist jetzt in deiner Zwischenablage.`,
        className: "bg-green-600/90 border-green-500 text-white",
      });
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <motion.div
      className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 md:p-8 shadow-xl glassmorphism card-hover-glow"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h3 className="text-2xl md:text-3xl font-bold text-gradient-animated mb-6 text-center">
        🎮 Unser Minecraft Netzwerk – Bald verfügbar! 🛠️
      </h3>
      <MinecraftPromoText />

      <div className="my-6 md:my-8 rounded-lg overflow-hidden border border-slate-700 shadow-lg">
        <img
          alt="Minecraft Projekt Welten Collage"
          className="w-full h-auto object-cover"
          src="https://horizons-cdn.hostinger.com/071dade1-1e9e-4e60-9a92-463dc65e7bd5/488d0379195a17c34825b4b5a23036a8.png"
        />
      </div>

      <div className="mt-6 md:mt-8 text-center">
        <p className="text-slate-400 mb-3">Server IP-Adresse:</p>
        <div className="flex items-center gap-2 sm:gap-3 bg-slate-900/70 border border-slate-700 rounded-lg p-2 sm:p-3 max-w-sm mx-auto">
          <Server className="h-5 w-5 text-slate-400 flex-shrink-0" />
          <span className="flex-grow font-mono text-sm sm:text-base text-slate-200 text-center overflow-hidden text-ellipsis whitespace-nowrap">
            {serverIp}
          </span>
          <Button
            size="sm"
            variant="ghost"
            onClick={copyToClipboard}
            className="shrink-0"
          >
            {copied ? (
              <Check className="h-5 w-5 text-green-400" />
            ) : (
              <Copy className="h-5 w-5 text-slate-400" />
            )}
          </Button>
        </div>
        <p className="text-slate-500 text-sm mt-4 max-w-md mx-auto">
          Für eine Freischaltung (Creative) wendet euch gerne an unser Team oder
          öffnet ein Ticket auf unserem Discord.
        </p>
      </div>
    </motion.div>
  );
};

// =========================
// 🚏 Hauptseite
// =========================
const CommunityEventsTab = () => {
  return (
    <motion.div
      className="max-w-5xl mx-auto my-8 md:my-12 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Coin Event Gewinner */}
      <CoinEventWinnersCard />

      {/* Minecraft Event Info */}
      <MinecraftEventCard />

      {/* Discord CTA */}
      <motion.div
        className="mt-12 md:mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-slate-400 mb-6 text-base md:text-lg">
          Bleibt gespannt für mehr Neuigkeiten oder joint direkt unserer
          Irrenanstalt 👽!
        </p>
        <a
          href="https://discord.gg/busbahnhof"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-sky-600 hover:bg-sky-500 text-white px-8 md:px-10 py-3 md:py-4 text-base md:text-lg rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 button-shine">
            <Users className="mr-2 h-5 w-5" />
            Community beitreten
          </Button>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default CommunityEventsTab;
