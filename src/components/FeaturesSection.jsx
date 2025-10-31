import React from 'react';
import { motion } from 'framer-motion';
import { User, Cloud, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: <User className="h-10 w-10 text-sky-400" />,
    title: 'MisterMcCain - Der "Kopf" hinter allem',
    description: 'Erfahrt alles über MisterMcCain aka McOpi, den bekloppten Gründer und kreativen Kopf hinter der Busbahnhof Community. Entdeckt seine Projekte, Streams, sein verrücktes Team und die neuesten Updates direkt hier.',
    linkText: 'Mehr über MisterMcCain',
    linkTo: '/mistermccain',
    bgColor: 'from-sky-500/10 to-sky-600/10',
    borderColor: 'border-sky-500/30',
    extraLinks: [] // Removed the external link here
  },
  {
    icon: <Cloud className="h-10 w-10 text-purple-400" />,
    title: 'Cloudium - Dein Gaming Hosting',
    description: 'Entdeckt Cloudium, den hauseigenen Gameserver-Hosting-Service. Perfekt für deine Gaming-Sessions mit Freunden, powered by Busbahnhof Community und dem Cloudium Dev-Team.',
    linkText: 'Zu Cloudium',
    linkTo: '/cloudium',
    bgColor: 'from-purple-500/10 to-purple-600/10',
    borderColor: 'border-purple-500/30',
    extraLinks: []
  },
];

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-800/40 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-slate-900/50 to-transparent opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/10 to-transparent opacity-30 blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12 md:mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Was dich <span className="text-gradient-animated">erwartet</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Die Busbahnhof App vereint das Beste aus zwei Welten: die neuesten Infos von MisterMcCain und die Power von Cloudium Gameserver Hosting.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`relative rounded-xl p-6 md:p-8 shadow-xl overflow-hidden bg-gradient-to-br ${feature.bgColor} border ${feature.borderColor} transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] feature-card-glow`}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 p-3 rounded-full bg-white/5 inline-block self-start border border-white/10 shadow-md">
                  {feature.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-base leading-relaxed flex-grow">
                  {feature.description}
                </p>
                <div className="mt-auto">
                  <Link to={feature.linkTo}>
                    <Button variant="outline" className="w-full sm:w-auto bg-transparent hover:bg-white/5 border-white/20 hover:border-white/40 text-white transition-all duration-300 button-subtle-shine">
                      {feature.linkText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  {feature.extraLinks && feature.extraLinks.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {feature.extraLinks.map((extraLink, idx) => (
                        <a
                          key={idx}
                          href={extraLink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-sm text-sky-300 hover:text-sky-200 transition-colors duration-300 group"
                        >
                          <ExternalLink className="mr-2 h-4 w-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                          <span>{extraLink.text}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;