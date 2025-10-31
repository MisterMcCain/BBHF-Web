// components/HalloweenWeb.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HalloweenWeb() {
  const [clicked, setClicked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (clicked) {
      setShowPopup(true);
      const timer = setTimeout(() => {
        setShowPopup(false);
        setClicked(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [clicked]);

  return (
    <div className="fixed top-6 right-6 z-50">
      {/* Spinnennetz */}
      <motion.div
        onClick={() => setClicked(true)}
        className="relative cursor-pointer"
        whileHover={{ scale: 1.1 }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_8px_rgba(180,100,255,0.8)]"
        >
          <circle cx="60" cy="60" r="55" stroke="#B980FF" strokeWidth="1.5" />
          <path
            d="M60 5V115M5 60H115M20 20L100 100M20 100L100 20"
            stroke="#B980FF"
            strokeWidth="0.8"
          />
        </svg>
      </motion.div>

      {/* Spinne */}
      <AnimatePresence>
        {clicked && (
          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 100, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            🕷️
          </motion.div>
        )}
      </AnimatePresence>

      {/* Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="absolute top-28 right-0 bg-black/80 text-purple-300 text-sm px-3 py-2 rounded-lg border border-purple-500 shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            👴 Boo! Opi hat dich gesehen!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
