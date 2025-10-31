import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Users, Calendar, MessageSquare, Award, Heart, Star } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const CommunityOverviewTab = () => {
  const discordLink = 'https://discord.gg/busbahnhof';
  const newImageUrl =
    'https://storage.googleapis.com/hostinger-horizons-assets-prod/071dade1-1e9e-4e60-9a92-463dc65e7bd5/a48fc07ae47bc9a519e99df02dd3e51d.png';

  return (
    <>
      {/* Abschnitt: Wer wir sind */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-slate-800/50 border border-slate-700/50 rounded-3xl p-10 shadow-2xl relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Glow Hintergrund */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-sky-500/10 to-transparent rounded-3xl pointer-events-none" />

        {/* Text */}
        <div className="space-y-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Wer wir sind
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Die Busbahnhof Discord Community ist der Ort, wo Gamer, Technikfans
            und andere Nachtschwärmer aufeinandertreffen – quasi die
            Endhaltestelle für gute Laune, Pixel und Kabelsalat. Hier gibt’s
            keinen Fahrplan, aber dafür eine Menge Spaß, Gespräche und Chaos (auf
            die beste Art). Willkommen an Bord!
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center">
                <Users className="text-sky-400 w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Wachsende Gemeinschaft</h3>
                <p className="text-sm text-slate-400">
                  Wir gehen auf die 370 Fahrgäste zu und unsere Community
                  wächst immer weiter.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                <Calendar className="text-purple-400 w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Regelmäßige Events</h3>
                <p className="text-sm text-slate-400">
                  Gaming-Turniere, Events und Community-Quatsch.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-fuchsia-500/10 flex items-center justify-center">
                <MessageSquare className="text-fuchsia-400 w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Aktive Diskussionen</h3>
                <p className="text-sm text-slate-400">
                  Lebhafte Gespräche über Gaming, Technologie oder die
                  "Demenz" von McOpi.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <a
              href={discordLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 text-base font-semibold rounded-xl shadow-lg transition-all hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]"
              >
                Community beitreten
              </Button>
            </a>
          </div>
        </div>

        {/* Bild */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-lg z-10">
          <img
            src={newImageUrl}
            alt="Community Illustration"
            className="w-full h-[320px] object-cover"
          />
        </div>
      </motion.div>

      <Separator className="my-12 bg-slate-700/50" />

      {/* Abschnitt: Community-Vorteile */}
      <motion.div
        className="py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
          Community-Vorteile
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 hover:border-sky-500/50 transition-all shadow-lg">
            <Award className="h-10 w-10 text-sky-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              Exklusive Events
            </h3>
            <p className="text-slate-400">
              Nimm an exklusiven Community-Events teil, darunter Gaming-Turniere,
              Giveaways und mehr.
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all shadow-lg">
            <Heart className="h-10 w-10 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              Lockere Atmosphäre
            </h3>
            <p className="text-slate-400">
              Genieße eine lustige und chillige Atmosphäre, in der du dich mit
              Gleichgesinnten austauschen kannst.
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 hover:border-fuchsia-500/50 transition-all shadow-lg">
            <Star className="h-10 w-10 text-fuchsia-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              Exklusive Inhalte
            </h3>
            <p className="text-slate-400">
              Erhalte Zugang zu exklusiven Inhalten, Rabatten für Cloudium-Hosting
              und mehr.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CommunityOverviewTab;
