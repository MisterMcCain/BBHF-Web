import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, Server, Wrench } from 'lucide-react';

const CloudiumPlansTab = ({
  hostingPlans,
  onPlanSelect,
  onManagedGameHostingSelect,
  onCustomServerSelect,
  setActiveTab
}) => {
  if (!hostingPlans || hostingPlans.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-muted-foreground">Keine Hosting-Pakete verfügbar.</p>
      </div>
    );
  }

  const standardPlans = hostingPlans.filter(plan => plan.type === 'standard' || !plan.type);

  const specialPlans = [
    {
      name: 'Managed Game Hosting',
      price: 'Individuell',
      features: [
        'Stressfreie Einrichtung',
        'Voller Panel-Zugriff',
        'Performance-Optimierung',
        'Regelmäßige Updates',
        'Persönlicher Support',
        'Servicegebühr: 3,50 € / Monat (zzgl. Serverkosten)',
      ],
      action: onManagedGameHostingSelect,
      icon: <Wrench size={20} className="mr-2" />,
      description:
        'Wir kümmern uns um die Technik, du konzentrierst dich aufs Spielen. Hierfür fällt eine Servicegebühr von 3,50 €/Monat zusätzlich zu den Serverkosten an.',
      buttonText: 'Details anfragen',
      gradient: 'from-teal-500 to-cyan-500',
    },
    {
      name: 'Custom Server',
      price: 'Maßgeschneidert',
      features: [
        'Freie Wahl der Ressourcen',
        'vCores nach Bedarf',
        'RAM nach Wunsch',
        'SSD-Speicher flexibel',
        'Individuelle Konfiguration',
        'Einmalige Einrichtungsgebühr: 5,00 €',
      ],
      action: onCustomServerSelect,
      icon: <Server size={20} className="mr-2" />,
      description:
        'Stell dir deinen Server genau nach deinen Bedürfnissen zusammen. Für die Einrichtung fällt eine einmalige Gebühr von 5,00 € an.',
      buttonText: 'Konfigurieren',
      gradient: 'from-sky-500 to-blue-500',
    },
  ];

  return (
    <>
      <motion.div
        className="text-center max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400">
          Unsere Game-Server Pakete
        </h2>
        <p className="text-lg text-slate-300">
          Wähle das perfekte Paket für dein ultimatives Gaming-Erlebnis. Alle Server haben ihren Standort in Deutschland und bieten Top-Performance.
        </p>
      </motion.div>

      <motion.div
        className="text-center max-w-2xl mx-auto p-4 mb-8 bg-gradient-to-r from-sky-500/10 to-blue-500/10 rounded-lg border border-sky-600/30 shadow-md"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <p className="text-sm sm:text-base text-slate-200 font-medium">
          Für die Abwicklung deiner Bestellung und den Support ist es{' '}
          <span className="text-sky-300 font-semibold">erforderlich, Member unseres Discord-Servers</span> zu sein.
          Trete jetzt bei und profitiere von schnellem Service!
        </p>
        <a
          href="https://discord.gg/busbahnhof"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-sky-400 hover:text-sky-300 transition-colors duration-200 text-sm font-semibold"
        >
          Discord-Server beitreten
        </a>
      </motion.div>

      {/* Standard Pakete */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
          hidden: { opacity: 0 },
        }}
      >
        {standardPlans.map(plan => (
          <motion.div
            key={plan.name}
            className={`rounded-xl overflow-hidden border flex flex-col bg-slate-800/60 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 ${
              plan.name === 'ES6'
                ? 'border-purple-500 ring-2 ring-purple-500/80'
                : 'border-slate-700 hover:border-sky-500'
            }`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {plan.name === 'ES6' && (
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 text-xs font-semibold tracking-wider">
                BESTSELLER
              </div>
            )}
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold mb-2 text-white">{plan.name}</h3>

              <div className="my-3">
                <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400">
                  {plan.price}
                </span>
                <span className="text-slate-400 text-sm"> / Monat</span>
              </div>

              <ul className="space-y-2 mb-6 flex-grow text-xs">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check size={14} className="text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-400">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => onPlanSelect(plan)}
                size="sm"
                className={`w-full mt-auto font-semibold py-2.5 text-sm ${
                  plan.name === 'ES6'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-lg hover:shadow-xl'
                    : 'bg-sky-600 hover:bg-sky-500 text-white'
                }`}
              >
                Paket wählen
              </Button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Spezielle Pakete */}
      <motion.div
        className="text-center max-w-3xl mx-auto my-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-3xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
          Spezielle Anforderungen?
        </h3>
        <p className="text-lg text-slate-300 mb-8">
          Wir bieten auch maßgeschneiderte Lösungen für deine individuellen Bedürfnisse.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          hidden: { opacity: 0 },
        }}
      >
        {specialPlans.map(plan => (
          <motion.div
            key={plan.name}
            className="rounded-xl overflow-hidden border flex flex-col bg-slate-800/60 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 border-slate-700 hover:border-teal-500"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="p-6 flex-grow flex flex-col">
              <div className="p-3 bg-slate-700 rounded-full self-start mb-4 border border-slate-600 shadow-md">
                {plan.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
              <p className="text-sm text-slate-400 mb-3">{plan.description}</p>

              <div className="my-3">
                <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-300">
                  {plan.price}
                </span>
              </div>

              <ul className="space-y-2 mb-6 flex-grow text-xs">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check size={14} className="text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-400">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={plan.action}
                size="sm"
                className={`w-full mt-auto font-semibold py-2.5 text-sm bg-gradient-to-r ${plan.gradient} hover:opacity-90 text-white shadow-lg hover:shadow-xl`}
              >
                {plan.buttonText}
              </Button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default CloudiumPlansTab;
