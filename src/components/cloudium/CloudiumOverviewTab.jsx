import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Users, Server, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeatureCard = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-slate-800/70 p-6 rounded-lg shadow-xl border border-slate-700 hover:shadow-sky-500/30 transition-shadow"
  >
    <div className="flex items-center mb-4">
      {React.cloneElement(icon, { className: 'h-8 w-8 text-sky-400 mr-3' })}
      <h3 className="text-xl font-semibold text-sky-400">{title}</h3>
    </div>
    <p className="text-slate-300">{description}</p>
  </motion.div>
);

const CloudiumOverviewTab = ({ setActiveTab }) => {
  const features = [
    {
      icon: <Gamepad2 />,
      title: 'Leistungsstarkes Game Hosting',
      description:
        'Erlebe deine Lieblingsspiele auf Hochleistungsservern mit AMD EPYC™ Prozessoren und NVMe SSDs für minimale Latenz und maximale Performance.',
    },
    {
      icon: <Users />,
      title: 'Managed Service',
      description:
        'Konzentriere dich auf dein Spiel, wir kümmern uns um die Einrichtung, Wartung und Updates deines Servers. Du erhältst Panel-Zugriff zur einfachen Verwaltung.',
    },
    {
      icon: <Server />,
      title: 'Flexible Pakete & Individuelle Lösungen',
      description:
        'Wähle aus einer Vielzahl vorkonfigurierter Pakete oder stelle dir deinen eigenen Server zusammen. Wir finden die perfekte Lösung für deine Bedürfnisse.',
    },
    {
      icon: <ShieldCheck />,
      title: 'Zuverlässigkeit & Sicherheit',
      description:
        'Unsere Server stehen in Deutschland und bieten DDoS-Schutz, damit deine Spieldaten stets sicher sind.',
    },
  ];

  return (
    <div className="space-y-12 relative">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center p-8 bg-gradient-to-b from-sky-500/20 to-transparent rounded-xl relative overflow-hidden"
      >
        {/* ✨ Animierte Überschrift mit Glow */}
<motion.h2
  className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.6)] leading-[1.3] pb-1"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  style={{
    backgroundSize: '200% auto',
    animation: 'gradientMove 6s ease infinite',
    WebkitBackgroundClip: 'text',
    overflow: 'visible'
  }}
>
  Dein Spiel, unsere Power – Cloudium Hosting
</motion.h2>


        {/* 💫 Gradient Animation & Glow */}
        <style>{`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; text-shadow: 0 0 15px rgba(56,189,248,0.5); }
            50% { background-position: 100% 50%; text-shadow: 0 0 25px rgba(34,211,238,0.6); }
            100% { background-position: 0% 50%; text-shadow: 0 0 15px rgba(56,189,248,0.5); }
          }
        `}</style>

        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-6">
          Entdecke erstklassiges Game-Server Hosting, maßgeschneidert für deine Community.
          Von Minecraft bis ARK – wir bieten die Performance und den Service, den du brauchst.
        </p>

        <Button
          onClick={() => {
            setActiveTab('plans');
            setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 200);
          }}
          className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:opacity-90 text-white px-8 py-3 text-lg"
          size="lg"
        >
          Pakete ansehen
        </Button>

        {/* 💎 Sichtbarer "Powered by Vultris" Link */}
        <div className="mt-4">
          <a
            href="https://vultris.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 hover:text-cyan-300 text-sm font-medium tracking-wide transition-colors duration-300"
          >
            Powered by Vultris
          </a>
        </div>
      </motion.section>

      {/* Features */}
      <section>
        <h3 className="text-3xl font-semibold mb-8 text-center text-sky-400">
          Warum Cloudium?
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} delay={index * 0.1} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CloudiumOverviewTab;
