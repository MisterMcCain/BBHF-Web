import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import WebsiteUpdatesPage from '@/pages/WebsiteUpdatesPage';
import CloudiumPage from '@/pages/CloudiumPage';
import CommunityPage from '@/pages/CommunityPage';
import JoinPage from '@/pages/JoinPage';
import ApplicationPage from '@/pages/ApplicationPage';
import McOpisFortnitePage from '@/pages/McOpisFortnitePage'; 
import AboutMcOpiPage from '@/pages/AboutMcOpiPage';
import PartnershipPage from '@/pages/PartnershipPage';
import StatusPage from '@/pages/StatusPage';
import NotFoundPage from '@/pages/NotFoundPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import ImprintPage from '@/pages/ImprintPage';
import TermsAndConditionsPage from '@/pages/TermsAndConditionsPage';
import ScrollToTop from '@/components/ScrollToTop';
import GalleryPage from '@/pages/GalleryPage';


function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="mistermccain" element={<WebsiteUpdatesPage />} />
          <Route path="cloudium" element={<CloudiumPage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="join" element={<JoinPage />} />
          <Route path="bewerbung" element={<ApplicationPage />} />
          <Route path="mcopis-fortnite" element={<McOpisFortnitePage />} />
          <Route path="ueber-mich" element={<AboutMcOpiPage />} />
          <Route path="partnerschaft" element={<PartnershipPage />} />
          <Route path="status" element={<StatusPage />} />
          <Route path="datenschutz" element={<PrivacyPolicyPage />} />
          <Route path="impressum" element={<ImprintPage />} />
          <Route path="agb" element={<TermsAndConditionsPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="galerie" element={<GalleryPage />} />

        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;