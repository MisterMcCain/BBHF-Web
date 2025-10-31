import React from 'react';
import { motion } from 'framer-motion';
import ApplicationForm from '@/components/ApplicationForm';
import { FileText, Users, AlertTriangle } from 'lucide-react';

const ApplicationPage = () => {
  return (
    <div className="pt-28 pb-16 min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12" 
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6 border-2 border-primary/30 shadow-lg">
            <FileText className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Werde Teil des <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Busbahnhof</span> Teams!
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Du möchtest aktiv mitwirken und unsere Community mitgestalten? Dann bist du hier genau richtig! Fülle das untenstehende Formular aus und zeige uns, warum du eine Bereicherung für unser Team wärst.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mb-10 bg-yellow-500/10 border-l-4 border-yellow-500 text-yellow-300 p-4 rounded-md max-w-2xl mx-auto flex items-start"
        >
          <AlertTriangle className="h-6 w-6 mr-3 mt-1 text-yellow-400 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-yellow-200">Wichtiger Hinweis zum Mindestalter:</h3>
            <p className="text-sm">
              Bitte beachte, dass eine Aufnahme in unser Team erst ab einem 
              <strong> Mindestalter von 14 Jahren</strong> möglich ist. 
              Wir bitten um dein Verständnis.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="bg-slate-800/70 backdrop-blur-md p-8 md:p-12 rounded-xl shadow-2xl border border-slate-700/80"
        >
          <ApplicationForm />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/10 mb-4 border-2 border-purple-500/30">
            <Users className="h-8 w-8 text-purple-400" />
          </div>
          <h2 className="text-3xl font-semibold mb-3 text-slate-100">Was erwartet dich?</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Als Teammitglied hast du die Möglichkeit, Events zu planen, die Community zu moderieren, technischen Support zu leisten oder kreative Inhalte zu erstellen. Wir freuen uns auf deine Ideen und dein Engagement!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ApplicationPage;