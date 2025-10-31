import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Gavel, ShieldAlert } from 'lucide-react';

const CommunityRulesTab = ({ communityRules }) => {
  return (
    <>
      <motion.div 
        className="text-center max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky-500/10 mb-6 border border-sky-500/30">
          <Gavel className="h-8 w-8 text-sky-400" />
        </div>
        <h2 className="text-4xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">Community-Regeln</h2>
        <p className="text-lg text-slate-300">
          Um eine freundliche, respektvolle und einladende Atmosphäre für alle zu gewährleisten, bitten wir jedes Mitglied, diese Regeln zu befolgen.
        </p>
      </motion.div>
      
      <motion.div 
        className="max-w-3xl mx-auto bg-slate-800/60 p-6 sm:p-8 rounded-xl shadow-2xl border border-slate-700"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ScrollArea className="pr-3">
          <div className="space-y-8">
            {communityRules.map((rule, index) => (
              <motion.div 
                key={rule.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-sky-300 flex items-center">
                   {rule.title.startsWith('§') ? <ShieldAlert className="w-5 h-5 mr-2 text-sky-400 flex-shrink-0" /> : null}
                  {rule.title.replace(/–/g, '-')}
                </h3>
                {rule.description && <p className="text-slate-400 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: rule.description }}></p>}
                {index < communityRules.length - 1 && rule.description && <Separator className="mt-8 border-slate-700" />}
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </motion.div>
      
      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <a href="https://discord.gg/busbahnhof" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white font-semibold py-3 px-8 text-base rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Community beitreten
          </Button>
        </a>
      </motion.div>
    </>
  );
};

export default CommunityRulesTab;