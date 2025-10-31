import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white p-4 pt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        className="text-center p-8 md:p-12 bg-slate-800/60 rounded-xl shadow-2xl border border-slate-700 max-w-lg w-full"
      >
        <AlertTriangle className="mx-auto h-20 w-20 text-yellow-400 mb-8 animate-pulse" />
        <h1 className="text-6xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-200">
          Seite nicht gefunden
        </h2>
        <p className="text-slate-400 mb-10 text-lg leading-relaxed">
          Ups! Die Seite, die du suchst, existiert nicht oder wurde verschoben.
        </p>
        <Link to="/">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white font-semibold py-3 px-8 text-base rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Home className="mr-2 h-5 w-5" />
            Zurück zur Startseite
          </Button>
        </Link>
      </motion.div>
      <p className="mt-12 text-sm text-slate-500">
        Busbahnhof Community App &copy; {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default NotFoundPage;