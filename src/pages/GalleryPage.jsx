// src/pages/GalleryPage.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import { Image, ShieldAlert } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Comments from "@/components/Comments";

const GalleryPage = () => {
  const images = [
    { name: "McOpi – Busbahnhof Edition", url: "https://github.com/MisterMcCain/BBHF-Web/blob/main/BBHF%20McOpi%202.jpg?raw=true" },
    { name: "McOpi Mad", url: "https://github.com/MisterMcCain/BBHF-Web/blob/main/Old%20McOpi%20Avatar%202.png?raw=true" },
    { name: "McOpi Halloween", url: "https://github.com/MisterMcCain/BBHF-Web/blob/main/McOpi%20Halloween.png?raw=true" },
    { name: "McOpi Halloween 5", url: "https://github.com/MisterMcCain/BBHF-Web/blob/main/McOpi%20Halloween%205.png?raw=true" },
    { name: "Minecraft Lobby", url: "https://github.com/MisterMcCain/BBHF-Web/blob/main/Minecraft%20Screenshot%202025.10.07%20-%2011.46.58.06.png?raw=true" },
    { name: "Villa Tom", url: "https://github.com/MisterMcCain/BBHF-Web/blob/main/Minecraft%20Screenshot%202025.10.09%20-%2019.58.29.29.png?raw=true" },
    { name: "Halloween Nico", url: "https://github.com/MisterMcCain/BBHF-Web/blob/main/Minecraft%20Screenshot%202025.10.25%20-%2012.34.40.24.png?raw=true" },
    { name: "Villa Gabi", url: "https://github.com/MisterMcCain/BBHF-Web/blob/main/Minecraft%20Screenshot%202025.10.26%20-%2022.16.51.76.png?raw=true" },
    { name: "Falten Opi", url: "https://github.com/MisterMcCain/BBHF-Web/blob/main/FaltenOpi%204.png?raw=true" },
    { name: "McOpi", url: "https://github.com/MisterMcCain/BBHF-Web/blob/main/FaltenOpi%206.png?raw=true" },
    { name: "Sleeping", url: "https://github.com/MisterMcCain/BBHF-Web/blob/main/FaltenOpi%207.png?raw=true" },
    { name: "Baby Opi", url: "https://github.com/MisterMcCain/BBHF-Web/blob/main/McOpi%20jung%20(1000%20x%201000%20px).png?raw=true" },
    { name: "McCain", url: "https://github.com/MisterMcCain/BBHF-Web/blob/main/gallery/Mister_McCain_3.png?raw=true" },
    { name: "Cloudium", url: "https://github.com/MisterMcCain/BBHF-Web/blob/main/gallery/Kein%20Titel%20(Deine%20Geschichte)%20(8).png?raw=true" }
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1.5 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white pt-28 pb-16 px-4 overflow-hidden">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
          <Image className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-5xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-amber-500 drop-shadow-[0_2px_8px_rgba(255,170,0,0.4)]">
          Galerie
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Eine Sammlung besonderer Momente aus der Busbahnhof-Community 🚏📸
        </p>
      </motion.div>

      {/* Slider */}
      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-3 sm:p-4"
            >
              <div
                onClick={() => setSelectedImage(img)}
                className="flex flex-col h-full rounded-2xl overflow-hidden shadow-2xl bg-slate-800 border border-slate-700 hover:shadow-amber-500/30 cursor-pointer transition-all duration-300"
              >
                <div className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[340px] bg-slate-900 flex-shrink-0">
                  <img src={img.url} alt={img.name} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="flex items-center justify-center h-16 p-3 sm:p-4 bg-slate-900/70 border-t border-slate-700 text-center">
                  <p className="text-slate-200 font-semibold text-sm sm:text-base leading-snug line-clamp-2">
                    {img.name}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>

      {/* Urheberrechtlicher Hinweis */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-16 border-t border-slate-700/60 pt-6 text-center text-slate-400 text-sm max-w-4xl mx-auto leading-relaxed px-4"
      >
        <div className="flex justify-center items-center gap-2 mb-2 text-amber-400">
          <ShieldAlert className="w-5 h-5" />
          <span className="font-semibold">Urheberrechtlicher Hinweis</span>
        </div>
        <p>
          Sämtliche auf dieser Website veröffentlichten Inhalte, insbesondere Grafiken, Illustrationen, Fotos, Videos, Texte, Designs und sonstige Medien,
          sind urheberrechtlich geschützt. Jede Form der Vervielfältigung, Bearbeitung, Verbreitung, öffentlichen Zugänglichmachung oder sonstigen Nutzung
          außerhalb der engen Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung des Rechteinhabers.
          Das Herunterladen, Kopieren oder anderweitige Verwenden von Bild-, Audio- oder Videodateien dieser Website ist ausdrücklich nicht gestattet.
        </p>
      </motion.div>

      {/* 💬 Kommentarbereich */}
      <Comments />
    </div>
  );
};

export default GalleryPage;
