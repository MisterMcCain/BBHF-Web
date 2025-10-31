import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap, Users, Gamepad2 } from "lucide-react";

import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const backgroundImageUrl =
    "https://images.unsplash.com/photo-1608875475017-1d5ae837e298?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const logoImageUrl =
    "https://github.com/MisterMcCain/BBHF-Web/blob/main/OIG2.jpg?raw=true";

  return (
    <section className="relative text-white min-h-screen flex items-center py-20 md:py-32 overflow-hidden">
      {/* Hintergrund */}
      <div className="absolute inset-0 -z-10">
        <img
          src={backgroundImageUrl}
          alt="Futuristische Bushaltestelle bei Nacht mit Neonlichtern"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50" />
      </div>

      {/* Inhalt */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Linke Seite: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left md:flex-1"
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              Willkommen im <br className="hidden md:block" />
              <span className="text-gradient-animated">Busbahnhof</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            >
              😎 Willkommen im leicht verfluchten Chaos-Kontrollzentrum von
              MisterMcCain! Hier brodeln nicht nur die heißesten Insider-Gerüchte, sondern es warten auch Community-Events, bei denen selbst ein Creeper lieber tanzt, als zu explodieren.
              <br /><br />
              Und falls du dachtest, das war’s schon: Mit <b>Cloudium</b>, unserem magisch beschleunigten Gameserver-Hosting, katapultierst du dein Minecraft-Erlebnis in andere Dimensionen.
              <br /><br />
              Überraschungen? Davon haben wir genug – manche tauchen so plötzlich auf, dass selbst Enderman kurz zusammenzuckt. 👀
              <br />
              Willkommen im Busbahnhof des Wahnsinns – <b>Halloween Edition</b> 🕷️🎃
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            >
              <Link to="/join">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-semibold text-lg py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 button-glow"
                >
                  Community beitreten
                  <Users className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <Link to="/cloudium">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-sky-400 text-sky-400 hover:bg-sky-400/10 hover:text-sky-300 font-semibold text-lg py-3 px-8 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 button-subtle-shine"
                >
                  Cloudium entdecken
                  <Gamepad2 className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Rechte Seite: Logo */}
          <motion.div
            className="md:flex-1 flex justify-center md:justify-end mt-10 md:mt-0"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              type: "spring",
              stiffness: 100,
            }}
          >
            <div className="relative aspect-square max-w-md">
              <img
                src={logoImageUrl}
                alt="Busbahnhof Community Logo mit stilisiertem Bus und Neon-Effekten"
                className="rounded-3xl shadow-2xl object-cover w-full h-full transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-out"
                style={{
                  boxShadow:
                    "0 0 20px rgba(56, 189, 248, 0.3), 0 0 40px rgba(168, 85, 247, 0.2), 0 0 60px rgba(236, 72, 153, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              />

              {/* Blauer Blitz oben links */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center text-white shadow-xl animate-pulse">
                <Zap size={32} />
              </div>

              {/* Lila Tag unten rechts */}
              <div className="absolute -bottom-4 -right-4 p-3 bg-purple-600/80 backdrop-blur-sm rounded-xl text-white text-xs shadow-xl border border-purple-500/50">
                <p className="font-semibold">#Busbahnhof</p>
                <p>Deine Community!</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Unten weicher Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  );
};

export default HeroSection;
