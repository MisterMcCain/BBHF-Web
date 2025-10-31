import React from 'react';
import { motion } from 'framer-motion';
import {
  Megaphone,
  Brain,
  Gamepad2,
  Cloud,
  Mic,
  Lock,
  Send,
  Hammer,
  Code,
  TestTube,
  Lightbulb,
  Star,
  Gift,
  Users,
  HeartHandshake as Handshake,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import MinecraftProgressBox from '@/components/community/MinecraftProgressBox';
import WorryBox from '@/components/community/WorryBox';

// (StylizedBox removed — placeholder and debug UI cleaned up per request)


/* === PARTNERSHIP BOX === */
const PartnershipAnnouncementBox = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    className="text-slate-300 space-y-8 mb-16"
  >
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gradient-animated mb-4">
        🎉 GROSSE NEWS: WIR HABEN EINEN NEUEN PARTNER! 🎉
      </h2>
      <p className="text-lg text-slate-400 max-w-3xl mx-auto">
        Der Busbahnhof ist jetzt noch größer und stärker! 🤝
      </p>
    </div>

  <div className="three-d-box p-6 space-y-6 rounded-2xl bg-slate-800/60 ring-1 ring-sky-500/20 transition-shadow duration-200 hover:shadow-[0_20px_40px_rgba(14,165,233,0.12)]">
      <div className="flex justify-center mb-6">
        <img
          src="https://horizons-cdn.hostinger.com/071dade1-1e9e-4e60-9a92-463dc65e7bd5/dd08952983ff7cee23b95b034cb74a43.png"
          alt="Trophy’s Paradise Logo"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg border-2 border-sky-500"
          onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://via.placeholder.com/160?text=Trophy'; }}
        />
      </div>
      <p className="text-base">
        Wir freuen uns riesig, euch eine bahnbrechende Nachricht zu überbringen:
        Der Busbahnhof ist nun stolzer Teil des Streamernetzwerks von{' '}
        <a
          href="https://www.trophysparadise.de"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-sky-400 hover:underline transition-colors"
        >
          Trophy’s Paradise
        </a>
        ! 🥳 Das ist ein riesiger Schritt für unsere gesamte Community!
      </p>

      <div>
        <h3 className="flex items-center text-xl font-semibold text-amber-400 mb-4">
          <Handshake className="h-6 w-6 mr-3" />
          Warum diese Partnerschaft rockt:
        </h3>
        <ul className="space-y-3 pl-5 text-slate-400">
          <li className="flex items-start">
            <Users className="h-5 w-5 mr-3 text-green-400 flex-shrink-0 mt-1" />
            <span>
              Im Streamernetzwerk zählt das WIR-Gefühl! Es geht ums gemeinsames
              Wachsen. 🌱
            </span>
          </li>
          <li className="flex items-start">
            <Gamepad2 className="h-5 w-5 mr-3 text-sky-400 flex-shrink-0 mt-1" />
            <span>
              Gemeinsame Streams versprechen mehr Spaß für alle und natürlich
              auch viel mehr Zuschauer! Eine Win-Win-Situation! 🤩
            </span>
          </li>
          <li className="flex items-start">
            <Star className="h-5 w-5 mr-3 text-yellow-400 flex-shrink-0 mt-1" />
            <span>
              Wir profitieren nun von einem Netzwerk, das sich gegenseitig mit
              vollem Einsatz unterstützt. Das ist der Spirit, den wir lieben!
              ❤️‍🔥
            </span>
          </li>
          <li className="flex items-start">
            <Gift className="h-5 w-5 mr-3 text-red-400 flex-shrink-0 mt-1" />
            <span>
              Ihr erhaltet Zugang zu einem großen Netzwerk an Spielern und
              spannenden Game-Servern. Mehr Möglichkeiten für euch alle! 🎮
            </span>
          </li>
        </ul>
        <p className="mt-4 pl-5 font-medium">
          Freut euch auf viele Vorteile für künftige gemeinsame Streams, mega
          Events und unzählige weitere Projekte! Die Zukunft ist hell! ✨
        </p>
      </div>

      <div className="flex justify-center pt-4">
        <Button
          onClick={() => window.open('https://www.trophysparadise.de', '_blank')}
          className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-200 ease-in-out hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2 mx-auto"
          size="lg"
        >
          Besuche Trophy’s Paradise
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="text-center text-slate-500 text-sm font-mono tracking-wider pt-4">
        #BusbahnhofXTP #GemeinsamStärker #NewEra
      </div>
    </div>
  </motion.div>
);

/* === MINECRAFT RECRUITING BOX === */
const MinecraftRecruitmentBox = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="text-slate-300 space-y-8 mb-16"
  >
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gradient-animated mb-4">
        🛠️ NÄCHSTER HALT: MITBAUEN! 🛠️
      </h2>
      <p className="text-lg text-slate-400 max-w-3xl mx-auto">
        Unser Minecraft-Netzwerk braucht kreative Köpfe und fleißige Hände! 🚀
      </p>
    </div>

  <div className="three-d-box p-6 space-y-6 rounded-2xl bg-slate-800/60 ring-1 ring-sky-500/20 transition-shadow duration-200 hover:shadow-[0_20px_40px_rgba(14,165,233,0.12)]">
      <p className="text-base">
        Der Bahnhof braucht ein Dach – und du hast die Steine! Wir suchen
        Verstärkung, um unser Minecraft-Netzwerk busbahnhof.fun auf das nächste
        Level zu heben.
      </p>

      <div>
        <h3 className="flex items-center text-xl font-semibold text-amber-400 mb-4">
          <Hammer className="h-6 w-6 mr-3" />
          Wo kannst du einsteigen?
        </h3>
        <ul className="space-y-3 pl-5 text-slate-400">
          <li className="flex items-start">
            <Gamepad2 className="h-5 w-5 mr-3 text-green-400 flex-shrink-0 mt-1" />
            <span>
              <strong>Bauen:</strong> Du hast ein Auge für Ästhetik? Perfekt!
            </span>
          </li>
          <li className="flex items-start">
            <Code className="h-5 w-5 mr-3 text-sky-400 flex-shrink-0 mt-1" />
            <span>
              <strong>Programmieren:</strong> Plugins und Features sind dein
              Ding? Du bringst den Plan, wir die Schienen!
            </span>
          </li>
          <li className="flex items-start">
            <TestTube className="h-5 w-5 mr-3 text-red-400 flex-shrink-0 mt-1" />
            <span>
              <strong>Testen:</strong> Du findest jeden Bug? Werde unser
              Qualitäts-Kontrolleur!
            </span>
          </li>
          <li className="flex items-start">
            <Lightbulb className="h-5 w-5 mr-3 text-yellow-400 flex-shrink-0 mt-1" />
            <span>
              <strong>Ideen einbringen:</strong> Du hast kreative Einfälle? Lass
              sie raus!
            </span>
          </li>
        </ul>
      </div>


        <div className="pt-4">
          <div className="flex justify-center">
            <Button
              onClick={() => window.open('https://discord.gg/busbahnhof', '_blank')}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-200 ease-in-out hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2"
              size="lg"
            >
              <Send className="h-5 w-5" />
              Jetzt auf Discord melden
            </Button>
          </div>
        </div>
      </div>
  </motion.div>
);

/* === TELEGRAM BOX === */
const TelegramGroupBox = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-slate-300 space-y-8"
  >
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gradient-animated mb-4">
        🚨 NEUE HALTESTELLE: TELEGRAM-GRUPPE! 🚨
      </h2>
      <p className="text-lg text-slate-400 max-w-3xl mx-auto">
        Der Busbahnhof expandiert – und zwar direkt auf dein Handy! 📱🚌
      </p>
    </div>

  <div className="three-d-box p-6 space-y-6 rounded-2xl bg-slate-800/60 ring-1 ring-sky-500/20 transition-shadow duration-200 hover:shadow-[0_20px_40px_rgba(14,165,233,0.12)]">
      <p className="text-base">
        Wir haben eine Telegram-Gruppe für unsere Community eingerichtet – für
        alle, die bei Mister McCain aka McOpi immer auf dem Laufenden bleiben
        wollen!
      </p>

      <div>
        <h3 className="flex items-center text-xl font-semibold text-amber-400 mb-4">
          <Megaphone className="h-6 w-6 mr-3" />
          Was erwartet euch dort?
        </h3>
        <ul className="space-y-3 pl-5 text-slate-400">
          <li className="flex items-start">
            <Brain className="h-5 w-5 mr-3 text-sky-400 flex-shrink-0 mt-1" />
            <span>Aktuelle Infos rund um die Community</span>
          </li>
          <li className="flex items-start">
            <Gamepad2 className="h-5 w-5 mr-3 text-green-400 flex-shrink-0 mt-1" />
            <span>News zu Projekten wie unserem Minecraft-Netzwerk</span>
          </li>
          <li className="flex items-start">
            <Cloud className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0 mt-1" />
            <span>Updates zu Cloudium Hosting</span>
          </li>
          <li className="flex items-start">
            <Mic className="h-5 w-5 mr-3 text-red-400 flex-shrink-0 mt-1" />
            <span>
              Wichtige Ankündigungen vom Chef persönlich (Opi-Approved™)
            </span>
          </li>
        </ul>
      </div>

      <div>
        <p className="flex items-center text-lg font-semibold text-slate-100">
          <Lock className="h-5 w-5 mr-3 text-green-500" />
          Und keine Panik – eure Telefonnummer bleibt geheim!
        </p>
        <p className="mt-2 text-slate-400">
          Niemand kann eure Nummer sehen – Datenschutz läuft bei uns. 🔒
        </p>
      </div>
      {/* Action buttons: Telegram join on the right (re-added as requested) */}
      <div className="pt-4">
  <div className="flex justify-center">
          <Button
            onClick={() => window.open('https://t.me/busbahnhof_fun', '_blank')}
            className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-200 ease-in-out hover:scale-105 inline-flex items-center justify-center gap-2"
            size="lg"
          >
            <Send className="h-5 w-5" />
            Jetzt in Telegram beitreten
          </Button>
        </div>
      </div>
    </div>

    <div className="text-center text-slate-500 text-sm font-mono tracking-wider">
      #BusbahnhofOnTour #McOpiBroadcast #TelegramHaltestelle
    </div>
  </motion.div>
);

/* === EXPORT === */
const CommunityNewsTab = () => {
  return (
    <div
      className="text-slate-200 py-12 px-6"
      style={{ background: 'linear-gradient(180deg, #0b1220 0%, #071022 100%)' }}
    >
      <WorryBox />
      <MinecraftProgressBox />

      <PartnershipAnnouncementBox />
      <MinecraftRecruitmentBox />
      <TelegramGroupBox />
    </div>
  );
};

export default CommunityNewsTab;
