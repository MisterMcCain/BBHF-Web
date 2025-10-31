import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Twitter, Youtube, Zap, Home, User, Cloud, Users, 
  FileText, Music2, ArrowUpCircle, Instagram, Send, 
  HeartHandshake as Handshake, Link as LinkIcon, Image as ImageIcon 
} from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const lastUpdated = new Date(document.lastModified).toLocaleString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const halloweenGreeting = "Happy Halloween! Gruselige Grüße aus dem Busbahnhof 🎃";

  const mainSiteLinks = [
    { name: 'Startseite', path: '/', icon: Home },
    { name: 'MisterMcCain', path: '/mistermccain', icon: User },
    { name: 'Cloudium', path: '/cloudium', icon: Cloud },
    { name: 'Community', path: '/community', icon: Users },
    { name: 'Galerie', path: '/galerie', icon: ImageIcon },
    { name: 'Partnerschaft', path: '/partnerschaft', icon: Handshake },
    { name: 'Bewerbung', path: '/bewerbung', icon: FileText },
  ];

  const legalLinks = [
    { name: 'Datenschutz', path: '/datenschutz' },
    { name: 'AGB', path: '/agb' },
    { name: 'Impressum', path: '/impressum' },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, url: 'https://x.com/_MisterMcCain_' },
    { name: 'YouTube', icon: Youtube, url: 'https://www.youtube.com/@mister_mccain' },
    { name: 'TikTok', icon: Music2, url: 'https://www.tiktok.com/@mister_mccain?lang=de-DE' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/mister.mccain/' },
    { name: 'Telegram', icon: Send, url: 'https://t.me/busbahnhof_fun' },
    { name: 'haunt.gg', icon: LinkIcon, url: 'https://haunt.gg/busbahnhof' },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.footer 
      className="relative text-orange-300 overflow-hidden halloween-footer"
      style={{ backgroundColor: '#1e293b' }}
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* 🦇 Fledermaus oben rechts */}
      <div className="absolute top-2 right-4 z-20 animate-bounce">
        <span role="img" aria-label="Fledermaus" style={{ fontSize: '2.2rem' }}>🦇</span>
      </div>

      {/* 🧡 Halloween-Gruß */}
      <div className="container mx-auto px-4 py-10 relative z-10">
        <div className="mb-8 text-center text-lg font-bold text-orange-400 animate-pulse-glow">
          {halloweenGreeting}
        </div>

        {/* 🧱 Inhalt */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start">
          {/* Logo + Beschreibung */}
          <motion.div 
            className="flex flex-col items-center md:items-start lg:col-span-1"
            variants={itemVariants}
          >
            <Link to="/" className="flex items-center space-x-2.5 mb-5 group">
              <motion.div whileHover={{ scale: 1.15, rotate: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Zap className="h-8 w-8 text-primary group-hover:text-vibrantBlue-light transition-colors duration-300" />
              </motion.div>
              <span className="text-xl font-bold text-slate-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-vibrantPurple-DEFAULT transition-all duration-300">
                Busbahnhof
              </span>
            </Link>
            <p className="text-sm text-center md:text-left text-slate-100 leading-relaxed">
              Deine zentrale Anlaufstelle für Updates von MisterMcCain & Cloudium. 
              Immer aktuell, immer verbunden und vor allem: immer bekloppter! 
              <span role="img" aria-label="Geist" className="ml-1 animate-bounce">👻</span>
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div 
            className="flex flex-col items-center md:items-start"
            variants={itemVariants}
          >
            <span className="font-semibold text-slate-100 mb-4 text-lg">Navigation</span>
            <nav className="flex flex-col space-y-3">
              {mainSiteLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm flex items-center group footer-link-hover"
                >
                  <link.icon className="h-4.5 w-4.5 mr-2.5 text-slate-200 group-hover:text-primary" />
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Rechtliches */}
          <motion.div 
            className="flex flex-col items-center md:items-start"
            variants={itemVariants}
          >
            <span className="font-semibold text-slate-100 mb-4 text-lg">Rechtliches</span>
            <nav className="flex flex-col space-y-3 mb-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm text-slate-300 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Social Media */}
          <motion.div 
            className="flex flex-col items-center md:items-start"
            variants={itemVariants}
          >
            <span className="font-semibold text-slate-100 mb-4 text-lg">Folge uns</span>
            <div className="flex space-x-5 justify-center md:justify-start">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-slate-200 hover:text-primary transition-colors duration-200"
                  whileHover={{ y: -3, scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ⚡ Unterer Bereich (ohne rote Linie!) */}
        <motion.div 
          className="mt-10 pt-8 text-center text-sm border-t border-slate-700/40"
          variants={itemVariants}
        >
          <p>&copy; {currentYear} busbahnhof.fun. Alle Rechte vorbehalten.</p>
          <p className="mt-1.5">
<p className="mt-1.5">Entwickelt mit <span role="img" aria-label="heart" className="text-red-500 animate-pulse-glow inline-block">❤️</span> von MisterMcCain & der Community.</p>

          </p>

          <div className="mt-6 text-orange-400 text-sm opacity-80">
            Letzte Aktualisierung: {lastUpdated} Uhr
          </div>

          <button 
            onClick={scrollToTop} 
            className="mt-6 mx-auto flex items-center text-orange-300 hover:text-orange-500 transition-colors duration-300 group"
            aria-label="Nach oben scrollen"
          >
            <ArrowUpCircle className="h-5 w-5 mr-2 group-hover:animate-subtle-bob" />
            Nach oben
          </button>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
