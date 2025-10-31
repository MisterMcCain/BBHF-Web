import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsentBanner from "@/components/CookieConsentBanner";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
      <CookieConsentBanner />
      {/* Optional: <HalloweenGhost /> einbauen, falls du das willst */}
    </div>
  );
};

export default Layout;