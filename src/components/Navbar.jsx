import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Menu, X, Home, Cloud, Users, Newspaper, FileText, 
  Star, UserCircle2, HeartHandshake as Handshake, 
  Server, Image as ImageIcon, Zap 
} from 'lucide-react';

const NavItem = ({ to, children, Icon, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out group relative overflow-hidden whitespace-nowrap ${
        isActive 
          ? 'bg-gradient-to-r from-primary to-vibrantPurple-dark text-white shadow-lg transform scale-105' 
          : 'text-slate-300 hover:bg-slate-700/60 hover:text-white'
      }`
    }
  >
    <Icon className="w-4.5 h-4.5 mr-2 transition-transform duration-200 group-hover:scale-110 flex-shrink-0" />
    {children}
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-vibrantTeal-DEFAULT transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
  </NavLink>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { to: '/', text: 'Startseite', Icon: Home },
    { to: '/mistermccain', text: 'McCain', Icon: Newspaper },
    { to: '/cloudium', text: 'Cloudium', Icon: Cloud },
    { to: '/community', text: 'Community', Icon: Users },
    { to: '/galerie', text: 'Galerie', Icon: ImageIcon },
    { to: '/status', text: 'Systemstatus', Icon: Server },
    { to: '/mcopis-fortnite', text: "McOpi's Fortnite", Icon: Star },
    { to: '/ueber-mich', text: 'Über Mich', Icon: UserCircle2 },
    { to: '/partnerschaft', text: 'Partnerschaft', Icon: Handshake },
    { to: '/bewerbung', text: 'Bewerbung', Icon: FileText },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl shadow-2xl border-b border-slate-700/60"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-2">
          
          {/* 🔹 Logo über der Navigation – kompakt */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 mb-2 text-white group"
          >
            <motion.div 
              whileHover={{ rotate: [0, 8, -8, 8, 0], scale: 1.15 }} 
              transition={{ duration: 0.5 }}
            >
              <Zap className="h-6 w-6 text-primary group-hover:text-vibrantBlue-light transition-colors duration-300" />
            </motion.div>
            <span className="text-xl font-bold tracking-tight text-gradient-animated group-hover:opacity-90 transition-opacity">
              Busbahnhof
            </span>
          </Link>

          {/* 🔸 Zentrierte Navigation */}
          <div className="hidden xl:flex items-center justify-center flex-wrap gap-1">
            {navLinks.map(link => (
              <NavItem key={link.to} to={link.to} Icon={link.Icon}>
                {link.text}
              </NavItem>
            ))}
          </div>

          {/* ☰ Mobile Menü */}
          <div className="absolute top-3 right-4 xl:hidden">
            <Button 
              onClick={toggleMenu} 
              variant="ghost" 
              size="icon" 
              className="text-slate-300 hover:text-white focus:ring-2 focus:ring-primary"
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={isOpen ? "x" : "menu"}
                  initial={{ rotate: isOpen ? -90 : 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: isOpen ? 90 : -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X size={28} /> : <Menu size={28} />}
                </motion.div>
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </div>

      {/* 📱 Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="xl:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50"
          >
            <div className="px-3 pt-3 pb-5 space-y-1.5 sm:px-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavItem to={link.to} Icon={link.Icon} onClick={closeMenu}>
                    {link.text}
                  </NavItem>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
