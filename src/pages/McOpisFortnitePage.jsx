import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Heart, Construction, AlertTriangle, Film, Image as ImageIcon, Sparkles } from 'lucide-react';

const Section = ({ children, className = '' }) => (
  <motion.section 
    className={`py-12 md:py-16 ${className}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
  >
    <div className="container mx-auto px-4">{children}</div>
  </motion.section>
);

const PlaceholderCard = ({ title, Icon, description }) => (
  <motion.div 
    className="bg-slate-800/70 p-6 rounded-xl shadow-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 card-hover-glow"
    whileHover={{ y: -5 }}
  >
    <div className="flex flex-col items-center text-center">
      <Icon className="w-16 h-16 text-purple-400 mb-4" />
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm">{description}</p>
    </div>
  </motion.div>
);

const McOpisFortnitePage = () => {
  const userProvidedImageUrl = "https://github.com/MisterMcCain/BBHF-Web/blob/main/McOpi%20Halloween.png?raw=true";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/30 to-blue-900/40 text-slate-200 pt-28 pb-16 overflow-hidden">
      <Section className="text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 120, duration: 0.8 }}
        >
          <Gamepad2 className="w-24 h-24 text-purple-400 mx-auto mb-6 animate-bounce" />
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
            McOpi's Fortnite
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto">
            Willkommen bei McOpi's Fortnite - wo schlechte Entscheidungen auf epische Glitches treffen. 🛠️
          </p>
        </motion.div>
      </Section>

      <Section>
        <motion.div 
          className="max-w-3xl mx-auto bg-slate-800/50 p-8 md:p-10 rounded-2xl shadow-2xl border border-slate-700 card-hover-glow"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          <motion.p 
            className="text-lg mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Ich bin McOpi - stolzer Noob, halbwegs überfordert, ganz viel Liebe fürs Spiel. Ich baue wie ein Rentner mit Arthritis, ziele wie ein Maulwurf auf Koffein und lande konsequent NICHT in der Top 10 außer mit der Holo.
          </motion.p>
          <motion.p 
            className="text-lg mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Und trotzdem: Es gibt diesen einen Grund, warum ich weitermache.
          </motion.p>
          <motion.p 
            className="text-2xl font-semibold text-pink-400 my-8 text-center italic"
            initial={{ opacity: 0, y:10 }}
            animate={{ opacity: 1, y:0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Holo, Du bist zurück. Ohne dich war der Battle Bus leer, die Lobbys farblos und selbst die Victory Royale fühlte sich hohl an. <Heart className="inline-block text-pink-500 animate-pulse" />
          </motion.p>
          <motion.p 
            className="text-lg mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            Und als wäre das nicht genug, ist die aktuelle Season... sagen wir: meh. Loot ist da, Skill-Based Matchmaking auch - aber wo ist der Soul? Wo ist der Quatsch? Wo ist der Spaß?
          </motion.p>
        </motion.div>
      </Section>

      <Section>
        <div className="flex items-center justify-center mb-12">
           <Sparkles className="w-8 h-8 text-yellow-400 mr-3" />
           <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
            Hier gibts bald meine Highlights
           </h2>
           <Sparkles className="w-8 h-8 text-yellow-400 ml-3" />
        </div>
        
        <div className="flex justify-center">
          <motion.div
            className="p-1 rounded-xl shadow-2xl max-w-2xl w-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
            style={{ backgroundSize: '300% 300%' }}
            animate={{ backgroundPosition: ['0% center', '100% center', '0% center'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          >
            <div className="bg-slate-800/95 p-0.5 rounded-lg">
              <img
                src={userProvidedImageUrl}
                alt="McOpi's Fortnite Highlight - Ein epischer Moment"
                className="w-full h-auto object-contain rounded-md block image-fade-edges"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
          Hier findest du bald auch noch...
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PlaceholderCard Icon={AlertTriangle} title="Fail-Highlights 🥲" description="Meine besten (oder schlechtesten) Momente des Scheiterns." />
          <PlaceholderCard Icon={Construction} title="Bau-Unfälle 🛠️" description="Wenn die Festung eher einem Kartenhaus gleicht." />
          <PlaceholderCard Icon={Gamepad2} title="Emote-Duelle 🕺" description="Epische Tänze mit ahnungslosen NPCs." />
          <PlaceholderCard Icon={Film} title="Clip-Sammlung" description="Bald hier: Bewegtbild-Chaos der Extraklasse." />
          <PlaceholderCard Icon={ImageIcon} title="Screenshot-Galerie (Noch mehr!)" description="Die (un)schönsten Momente in Bildern festgehalten." />
          <PlaceholderCard Icon={Heart} title="Comeback mit Holo? 💖" description="Die Hoffnung stirbt zuletzt... Vielleicht." />
        </div>
      </Section>

      <Section className="text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }} 
        >
          <p className="text-xl md:text-2xl font-semibold text-purple-300 mb-2">
            Dies ist kein Guide. Keine Meta. Keine Tipps.
          </p>
          <p className="text-3xl md:text-4xl font-bold text-white">
            Dies ist McOpi's Fortnite. Ungefiltert. Unperfekt. Und sowas von echt.
          </p>
        </motion.div>
      </Section>
    </div>
  );
};

export default McOpisFortnitePage;