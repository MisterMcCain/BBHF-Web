import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const COOKIE_CONSENT_KEY = 'cookie_consent_status';
const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const consentStatus = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consentStatus) {
      setIsVisible(true);
    }
  }, []);
  const handleConsent = consent => {
    localStorage.setItem(COOKIE_CONSENT_KEY, consent);
    setIsVisible(false);
  };
  return <AnimatePresence>
      {isVisible && <motion.div initial={{
      y: '100%',
      opacity: 0
    }} animate={{
      y: '0%',
      opacity: 1
    }} exit={{
      y: '100%',
      opacity: 0
    }} transition={{
      type: 'spring',
      stiffness: 300,
      damping: 30
    }} className="fixed bottom-0 left-0 right-0 z-50 p-4">
          <div className="glassmorphism max-w-4xl mx-auto p-4 md:p-6 rounded-2xl shadow-2xl shadow-primary/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <Cookie className="h-8 w-8 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Wir verwenden krass Cookies diese, weißt Du?</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Wir nutzen Cookies, um deine Erfahrung auf unserer Seite zu verbessern. Durch die weitere Nutzung stimmst du dem zu. Mehr Infos findest du in unserer{' '}
                    <Link to="/datenschutz" className="underline text-primary/80 hover:text-primary transition-colors">
                      Datenschutzerklärung
                    </Link>.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0 w-full md:w-auto">
                <Button variant="outline" size="sm" onClick={() => handleConsent('rejected')} className="w-full md:w-auto border-destructive/50 text-destructive/80 hover:bg-destructive/10 hover:text-destructive">
                  <X className="h-4 w-4 mr-2" />
                  Ablehnen
                </Button>
                <Button size="sm" onClick={() => handleConsent('accepted')} className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white button-shine">
                  <Check className="h-4 w-4 mr-2" />
                  Akzeptieren
                </Button>
              </div>
            </div>
          </div>
        </motion.div>}
    </AnimatePresence>;
};
export default CookieConsentBanner;