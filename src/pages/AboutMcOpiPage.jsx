import React from 'react';
import { motion } from 'framer-motion';
import { User, Crosshair, Heart, Award, MessageSquare, Code, Blocks } from 'lucide-react';

const Section = ({ children, className = '' }) => (
  <motion.section
    className={`py-10 md:py-12 ${className}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
  >
    <div className="container mx-auto px-4">{children}</div>
  </motion.section>
);

const TextBlock = ({ title, Icon, children }) => (
  <motion.div
    className="mb-10 md:mb-12 bg-slate-800/60 p-6 md:p-8 rounded-xl shadow-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 card-hover-glow"
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
  >
    <div className="flex items-center mb-4">
      <Icon className="w-10 h-10 md:w-12 md:h-12 text-purple-400 mr-4" />
      <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
    </div>
    <div className="text-slate-300 space-y-4 text-lg leading-relaxed">{children}</div>
  </motion.div>
);

const AboutMcOpiPage = () => {
  // 🔹 Dein neues Logo
  const logoUrl = "https://github.com/MisterMcCain/BBHF-Web/blob/main/McOpi%20New%201.png?raw=true";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/40 to-blue-900/50 text-slate-200 pt-28 pb-16 overflow-x-hidden">
      
      {/* HEADER */}
      <Section className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, duration: 0.8 }}
        >
          {/* 🔹 Dein hüpfendes Logo */}
          <motion.img
            src={logoUrl}
            alt="McOpi Logo"
            className="w-28 h-28 md:w-36 md:h-36 mx-auto mb-6 rounded-2xl shadow-lg border border-purple-500/50 object-contain bg-slate-900/40 p-2"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
            Über Mich: Mister McCain aka McOpi
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Der einzige Rentner, der zwischen Fortnite, Minecraft, Star Citizen und GTA Online pendelt –
            mit mehr Leidenschaft als Reaktionszeit.
          </p>
        </motion.div>
      </Section>

      {/* ABSCHNITTE */}
      <Section>
        <TextBlock title="Wer ist Mister McCain aka McOpi?" Icon={User}>
          <p>
            Ein Opi mit Controller, der lieber programmiert als puzzelt und lieber in GTA crasht, als Kreuzworträtsel zu lösen.
          </p>
          <p>
            Mister McCain – oder kurz <strong>McOpi</strong> – ist der Typ, der zwischen{' '}
            <strong>Fortnite</strong>, <strong>Minecraft</strong>, <strong>Star Citizen</strong> und <strong>GTA V Online</strong> hin- und herwechselt,
            als wären das seine Rentnertagesausflüge.
          </p>
          <p>
            Wenn er nicht zockt, designt oder Websites baut, bastelt er an neuen Projekten für seine Community – seine zweite Familie ❤️
          </p>
        </TextBlock>

        <TextBlock title="Zockender Entwickler mit Herz" Icon={Code}>
          <p>
            Während andere Sudoku spielen, programmiert McOpi mit Leidenschaft Webseiten, Tools und kleine Gimmicks für die Busbahnhof-Community.
          </p>
          <p>
            Er liebt es, Dinge zu erschaffen, zu gestalten und sie mit dem typischen <strong>McOpi-Flair</strong> zum Leben zu erwecken.
          </p>
          <p className="italic text-purple-300">„Wenn’s blinkt, funktioniert’s. Wenn’s bunt ist, ist’s meins.“</p>
        </TextBlock>

        <TextBlock title="Minecraft Creative & Chaos" Icon={Blocks}>
          <p>
            Mit bescheidenen, aber stolzen Bauskills verbringt McOpi Zeit im{' '}
            <strong>Minecraft Creative</strong> – manchmal entstehen dort Meisterwerke,
            manchmal… Baustellen mit Seele. Aber immer mit Herz ❤️
          </p>
          <p>
            „Wenn die Treppe nach oben führt, ist’s Absicht. Wenn sie im Boden endet, Kunst.“ – McOpi, 2025
          </p>
        </TextBlock>

        <TextBlock title="Fortnite, GTA & Star Citizen" Icon={Crosshair}>
          <p>
            Ob Battle Bus, Los Santos oder die Tiefen des Weltraums – McOpi ist überall zu Hause. Manchmal im Feuergefecht,
            manchmal in einem selbstgebauten Raumschiff… oder kopfüber in der Pillendose.
          </p>
          <p>
            Zielen? Nur, wenn der Gegner stehenbleibt. Autofahren? Nur, wenn’s laut ist. Fliegen? Nur, wenn’s glitzert.
          </p>
        </TextBlock>

        <TextBlock title="Der Community-Opi" Icon={Heart}>
          <p>
            McOpi ist mehr als ein Gamer – er ist ein Herzstück seiner Community. Immer da, wenn jemand Hilfe braucht, motiviert,
            zuhört oder einfach ein bisschen Blödsinn macht.
          </p>
          <p>
            Die Busbahnhof-Community ist für ihn keine Gruppe – sie ist seine Familie. ❤️
          </p>
        </TextBlock>

        <TextBlock title="Fazit:" Icon={Award}>
          <p>
            Er ist der Beweis, dass Leidenschaft keine Altersgrenze kennt – und dass man selbst mit einem Rollator im Weltraum noch Spaß haben kann.
          </p>
          <p>
            Egal ob mit Code, Controller oder Kreativität – McOpi macht das, was er liebt: erschaffen, inspirieren, lachen.
          </p>
          <p className="font-semibold text-xl text-purple-300 mt-6">
            Er ist Mister McCain. Er ist McOpi. Er ist Chaos mit Konzept – und das Herz des Busbahnhofs. 💜
          </p>
        </TextBlock>
      </Section>

      {/* DISCORD CALL TO ACTION */}
      <Section className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <MessageSquare className="w-16 h-16 text-purple-400 mx-auto mb-4" />
          <p className="text-2xl md:text-3xl font-bold text-white mb-3">
            Noch Fragen? Oder einfach nur lachen?
          </p>
          <p className="text-lg text-slate-400">
            Triff McOpi und seine Community auf Discord – deine zweite Familie wartet schon. 💬
          </p>
        </motion.div>
      </Section>
    </div>
  );
};

export default AboutMcOpiPage;
