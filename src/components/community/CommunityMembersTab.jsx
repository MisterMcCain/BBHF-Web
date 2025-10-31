import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Users, Calendar } from 'lucide-react';

const roleStyles = {
  'Inhaber & Development': 'bg-amber-400/10 text-amber-300 border-amber-400/30', // 🟡 Gelb für Inhaber
  'Stellvertretung': 'bg-yellow-400/10 text-yellow-300 border-yellow-400/30',
  'Stellvertretung & Development': 'bg-yellow-400/10 text-yellow-300 border-yellow-400/30',
  'Management & Development': 'bg-purple-400/10 text-purple-300 border-purple-400/30',
  'Management & Eventleitung': 'bg-purple-400/10 text-purple-300 border-purple-400/30',
  'Development': 'bg-blue-400/10 text-blue-300 border-blue-400/30',
  'Teamleitung': 'bg-fuchsia-600/30 text-fuchsia-400 border-fuchsia-500',
  'Admin': 'bg-red-400/10 text-red-300 border-red-400/30',
  'Mod-Leitung': 'bg-teal-400/10 text-teal-300 border-teal-400/30',
  'Moderator': 'bg-sky-400/10 text-sky-300 border-sky-400/30',
  'Eventleitung': 'bg-green-400/10 text-green-300 border-green-400/30',
  'Supporter': 'bg-green-400/10 text-green-300 border-green-400/30',
};


const MemberCard = ({ member, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.05,
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 flex flex-col items-center text-center transition-all duration-300 card-hover-glow"
    >
      <Avatar className="w-24 h-24 mb-4 border-4 border-slate-600 shadow-lg">
        <AvatarImage src={member.avatarUrl} alt={member.name} />
        <AvatarFallback className="text-3xl font-bold bg-slate-700 text-slate-300">{member.avatar}</AvatarFallback>
      </Avatar>
      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
      <div className={`px-3 py-1 text-sm font-semibold rounded-full mb-4 inline-block border ${roleStyles[member.role] || 'bg-slate-700 text-slate-300'}`}>
        {member.role}
      </div>
      <div className="flex items-center text-sm text-slate-400 mt-auto pt-4 border-t border-slate-700 w-full justify-center">
        <Calendar size={16} className="mr-2" />
        <span>Seit: {member.joinDate}</span>
      </div>
    </motion.div>
  );
};

const CommunityMembersTab = ({ teamMembers = [] }) => {
  if (!teamMembers || teamMembers.length === 0) {
    return (
      <div className="text-center py-16">
        <Users className="mx-auto h-12 w-12 text-slate-500" />
        <h3 className="mt-4 text-xl font-medium text-white">Keine Teammitglieder gefunden</h3>
        <p className="mt-1 text-slate-400">Das Team wird gerade zusammengestellt. Schau bald wieder vorbei!</p>
      </div>
    );
  }
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300 pb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Unser engagiertes Team
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <MemberCard key={member.id} member={member} index={index} />
        ))}
      </div>

      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: (teamMembers.length * 0.05) + 0.2 }}
      >
        <p className="text-slate-400 mb-6 text-lg">
          Du willst auch ein Teil davon werden? Tritt unserer Community bei und gestalte mit!
        </p>
        <a href="https://discord.gg/busbahnhof" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="font-bold py-3 px-8 text-lg rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-opacity-50 bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-600 hover:to-cyan-500 text-white focus:ring-sky-300 button-shine">
            <Users className="mr-3 h-6 w-6" />
            Community beitreten
          </Button>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default CommunityMembersTab;