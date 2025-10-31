import React from "react";
import { motion } from "framer-motion";

const NewsCardTemplate = ({ 
  icon: Icon, 
  title, 
  subtitle, 
  children, 
  buttonText, 
  buttonLink 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative bg-slate-800/60 border border-sky-400/30 rounded-3xl p-8 mb-10 shadow-xl overflow-hidden"
      style={{
        boxShadow:
          "0 0 30px rgba(56,189,248,0.25), 0 0 60px rgba(168,85,247,0.25)",
      }}
    >
      {/* Hintergrund-Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-sky-500/10 to-transparent rounded-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 mb-6 text-center">
        {Icon && <Icon className="w-10 h-10 mx-auto mb-3 text-sky-400" />}
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-400 tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-slate-300 mt-2 text-lg font-medium">{subtitle}</p>
        )}
      </div>

      {/* Inhalt */}
      <div className="relative z-10 text-slate-200 space-y-4 text-center">
        {children}
      </div>

      {/* Optionaler Button */}
      {buttonText && buttonLink && (
        <div className="relative z-10 mt-8 flex justify-center">
          <a
            href={buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-sky-500 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          >
            {buttonText}
          </a>
        </div>
      )}
    </motion.div>
  );
};

export default NewsCardTemplate;
