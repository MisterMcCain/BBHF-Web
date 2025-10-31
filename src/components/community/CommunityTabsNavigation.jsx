import React from "react";
import { motion } from "framer-motion";

const CommunityTabsNavigation = ({ tabsConfig, activeTab, onTabChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 bg-slate-800/60 border border-slate-700/60 rounded-2xl p-3 shadow-xl">
      {tabsConfig.map(({ value, label, Icon }) => {
        const isActive = activeTab === value;

        return (
          <motion.button
            key={value}
            onClick={() => onTabChange(value)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className={`flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 
              ${
                isActive
                  ? "bg-gradient-to-r from-sky-500 to-purple-500 text-white shadow-[0_0_20px_rgba(56,189,248,0.4)]"
                  : "bg-slate-900/60 text-slate-300 hover:text-sky-300 hover:bg-slate-700/60"
              }`}
          >
            <Icon className="w-4 h-4" />
            {label}
          </motion.button>
        );
      })}
    </div>
  );
};

export default CommunityTabsNavigation;
