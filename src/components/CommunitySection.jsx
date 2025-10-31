import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Users, Zap, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const InfoCard = ({ icon, title, description, delay, borderColor }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const currentCardRef = cardRef.current;
    if (!currentCardRef) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY, currentTarget } = e;
      const { left, top, width, height } = currentTarget.getBoundingClientRect();
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      currentCardRef.style.setProperty('--mouse-x', `${x * 100}%`);
      currentCardRef.style.setProperty('--mouse-y', `${y * 100}%`);
    };

    currentCardRef.addEventListener('mousemove', handleMouseMove);
    return () => currentCardRef.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className={`bg-slate-800/60 p-8 rounded-xl shadow-2xl border ${borderColor} hover:border-opacity-100 transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center card-hover-glow glassmorphism`}
    >
      <div className={`p-4 bg-gradient-to-br ${borderColor === 'border-vibrantTeal-DEFAULT/50' ? 'from-vibrantTeal-DEFAULT/20 to-vibrantTeal-DEFAULT/5' : borderColor === 'border-vibrantBlue-DEFAULT/50' ? 'from-vibrantBlue-DEFAULT/20 to-vibrantBlue-DEFAULT/5' : 'from-vibrantPurple-DEFAULT/20 to-vibrantPurple-DEFAULT/5'} rounded-full mb-6 shadow-md`}>
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-3.5 text-white">{title}</h3>
      <p className="text-slate-300/90 mb-4 leading-relaxed text-sm">
        {description}
      </p>
    </motion.div>
  );
};


const CommunitySection = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 150, damping: 15, delay: 0.5 } }
  };

  const communityFeatures = [
    {
      icon: <Users className="w-10 h-10 text-vibrantTeal-light" />,
      title: "Aktive Mitglieder",
      description: "Finde Gleichgesinnte und knüpfe neue Freundschaften in einer lebendigen und einladenden Umgebung.",
      borderColor: "border-vibrantTeal-DEFAULT/50"
    },
    {
      icon: <Zap className="w-10 h-10 text-vibrantBlue-light" />,
      title: "Regelmäßige Events",
      description: "Nimm an Game-Nights, Wettbewerben und anderen spannenden Community-Events teil und gewinne tolle Preise.",
      borderColor: "border-vibrantBlue-DEFAULT/50"
    },
    {
      icon: <MessageCircle className="w-10 h-10 text-vibrantPurple-light" />,
      title: "Offener Austausch",
      description: "Diskutiere über deine Lieblingsthemen, teile deine kreativen Projekte und erhalte wertvolles Feedback.",
      borderColor: "border-vibrantPurple-DEFAULT/50"
    }
  ];

  return (
    <motion.section 
      className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 relative overflow-hidden aurora-background"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="absolute inset-0 hero-gradient opacity-10 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={headerVariants}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-vibrantBlue-light via-vibrantTeal-light to-vibrantPurple-light">
            Tritt unserer Community bei
          </h2>
          <p className="text-lg md:text-xl text-slate-300/90 max-w-3xl mx-auto leading-relaxed">
            Werde Teil einer wachsenden Gemeinschaft von Gaming-Enthusiasten, Kreativen und Freunden.
            Tausche dich aus, nimm an Events teil und gestalte die Community aktiv mit!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 md:mb-20">
          {communityFeatures.map((feature, index) => (
            <InfoCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.15}
              borderColor={feature.borderColor}
            />
          ))}
        </div>
        
        <motion.div 
          className="text-center"
          variants={buttonVariants}
        >
          <Link to="/join">
            <Button size="lg" className="button-shine bg-gradient-to-r from-vibrantTeal-DEFAULT to-vibrantBlue-DEFAULT hover:from-vibrantTeal-dark hover:to-vibrantBlue-dark text-white font-bold py-4 px-10 text-lg md:text-xl rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-vibrantTeal-light/50">
              Jetzt beitreten und loslegen!
              <ArrowRight size={20} className="ml-2.5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CommunitySection;