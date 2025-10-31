import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { UserPlus, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const TeamSearchInfoBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 p-8 md:p-10 rounded-2xl shadow-2xl border border-border/50 overflow-hidden card-hover-glow"
    >
      <Users 
        className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 text-emerald-500/10 opacity-50" 
        size={180} 
        strokeWidth={1.5}
      />
      <div className="relative z-10 flex flex-col flex-grow">
        <div className="flex-grow">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-emerald-500/10 rounded-lg mr-4 border border-emerald-500/20">
              <UserPlus className="w-8 h-8 text-emerald-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
              Werde Teil des Teams
            </h2>
          </div>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            Gesucht: Rollatorschieber für unsere legendäre "Busbahnhof"-Crew!
Du hast keine Angst vor Wahnsinn, Chaos und Kaffee ohne Filter? Dann hilf uns, unsere kleine Irrenanstalt am Laufen zu halten – inklusive Pflege des berüchtigten McOpi, der glaubt, er sei 25 und Rockstar! Jetzt bewerben, bevor McOpi wieder abhaut!
          </p>
        </div>
        <div className="mt-auto">
          <Button
            asChild
            size="lg" 
            className="w-full font-semibold py-3 px-8 text-lg rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-emerald-500/50 focus:ring-opacity-50 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white button-shine"
          >
            <Link to="/bewerbung">
              <UserPlus size={20} className="mr-2" />
              Jetzt bewerben
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamSearchInfoBox;