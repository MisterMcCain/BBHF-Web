import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import {
  Check,
  Copy,
  MessageSquare as DiscordIcon,
  Server
} from 'lucide-react';

const JoinPage = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const discordInviteLink = 'https://discord.gg/busbahnhof';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(discordInviteLink).then(() => {
      setCopied(true);
      toast({
        title: '✅ Link kopiert!',
        description: 'Der Discord-Einladungslink wurde in die Zwischenablage kopiert.',
        duration: 3000,
      });
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="pt-24 pb-16 min-h-screen flex items-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-sky-500/10 mb-6 border border-sky-400/30 shadow-sky-500/20 shadow-lg">
              <DiscordIcon className="h-10 w-10 text-sky-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-500 animate-gradient-x">
              Tritt der Busbahnhof Community bei
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Werde Teil unserer aktiven Discord-Community und bleibe auf dem Laufenden
              mit allen Updates von MisterMcCain, Cloudium und unserem Minecraft Netzwerk.
            </p>
          </motion.div>

          {/* Join Steps */}
          <motion.div
            className="bg-slate-900/70 rounded-2xl border border-sky-800 p-8 mb-12 shadow-lg shadow-sky-500/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              
              {/* Anleitung */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-sky-400">So trittst du bei:</h2>
                <ol className="space-y-4 pl-6 list-decimal">
                  <li className="text-slate-300">
                    <span className="text-white font-medium">Klicke auf den Button</span>
                    <p>Klicke auf „Discord beitreten“ oder kopiere den Link manuell.</p>
                  </li>
                  <li className="text-slate-300">
                    <span className="text-white font-medium">Öffne Discord</span>
                    <p>Öffne die Discord-App oder besuche discord.com.</p>
                  </li>
                  <li className="text-slate-300">
                    <span className="text-white font-medium">Tritt dem Server bei</span>
                    <p>Nutze das Plus-Symbol → „Einem Server beitreten“ → Link einfügen.</p>
                  </li>
                  <li className="text-slate-300">
                    <span className="text-white font-medium">Stelle dich vor</span>
                    <p>Sag kurz Hallo im #vorstellungs-Kanal und lern uns kennen!</p>
                  </li>
                </ol>

                {/* Linkbox + Button */}
                <div className="pt-4 space-y-4">
                  <div className="flex items-center justify-between gap-3 bg-slate-800/80 border border-sky-700 rounded-lg p-4 sm:p-5 max-w-lg w-full mx-auto shadow-md hover:border-sky-500/70 transition-all">
                    <Server className="h-6 w-6 text-sky-400 flex-shrink-0" />
                    <span className="flex-grow font-mono text-base text-slate-100 text-left break-all select-all">
                      {discordInviteLink}
                    </span>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={copyToClipboard}
                      className="rounded-full hover:bg-sky-900/40 transition-all shrink-0"
                    >
                      {copied ? (
                        <Check className="h-6 w-6 text-green-400" />
                      ) : (
                        <Copy className="h-6 w-6 text-sky-400" />
                      )}
                    </Button>
                  </div>

                  <p className="text-slate-400 text-sm text-center">
                    📋 Klicke auf das Symbol, um den Einladungslink zu kopieren.
                  </p>

                  <a
                    href={discordInviteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white w-full mt-2 shadow-md shadow-sky-500/30">
                      <DiscordIcon className="mr-2 h-5 w-5" />
                      Discord beitreten
                    </Button>
                  </a>
                </div>
              </div>

              {/* Illustration */}
              <div className="relative">
                <div className="w-full h-[300px] rounded-xl overflow-hidden border border-sky-800 shadow-md shadow-sky-500/20">
                  <img
                    alt="Discord Join Illustration"
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1696041760716-7d153e907b26"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-sky-500/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </motion.div>

          {/* Vorteilskarten */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Community-Vorteile */}
            <div className="bg-slate-900/70 rounded-lg p-6 border border-sky-700 shadow-sky-500/10 shadow-md hover:border-sky-400/50 transition-all">
              <h3 className="text-xl font-bold mb-2 text-sky-400">Community-Vorteile</h3>
              <ul className="space-y-2 text-slate-300">
                <li>✅ Zugang zu exklusiven Events und Wettbewerben</li>
                <li>✅ Diskussionen mit Gleichgesinnten</li>
                <li>✅ Hilfe & Support von erfahrenen Mitgliedern</li>
              </ul>
            </div>

            {/* MisterMcCain Updates */}
            <div className="bg-slate-900/70 rounded-lg p-6 border border-sky-700 shadow-sky-500/10 shadow-md hover:border-sky-400/50 transition-all">
              <h3 className="text-xl font-bold mb-2 text-sky-400">MisterMcCain Updates</h3>
              <ul className="space-y-2 text-slate-300">
                <li>✅ Sofortige Benachrichtigungen über neue Inhalte</li>
                <li>✅ Exklusive Vorabzugriffe auf neue Artikel</li>
                <li>✅ Feedback-Möglichkeiten für zukünftige Projekte</li>
              </ul>
            </div>

            {/* Cloudium-Vorteile */}
            <div className="bg-slate-900/70 rounded-lg p-6 border border-sky-700 shadow-sky-500/10 shadow-md hover:border-sky-400/50 transition-all">
              <h3 className="text-xl font-bold mb-2 text-sky-400">Cloudium-Vorteile</h3>
              <ul className="space-y-2 text-slate-300">
                <li>✅ Community-Rabatte für Hosting-Pakete</li>
                <li>✅ Technischer Support von erfahrenen Nutzern</li>
                <li>✅ Früher Zugang zu neuen Features</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;
