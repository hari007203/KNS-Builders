import React, { useState, useEffect } from 'react';
import { CinematicIntro } from './components/CinematicIntro';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ConstructionProcess } from './components/ConstructionProcess';
import { CostCalculator } from './components/CostCalculator';
import { MasterPlanSection } from './components/MasterPlanSection';
import { ApartmentSection } from './components/ApartmentSection';
import { ProjectGallery } from './components/ProjectGallery';
import { InteriorShowcase } from './components/InteriorShowcase';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AdminModal } from './components/AdminModal';

import { INITIAL_PLOTS, CONSTRUCTION_PACKAGES, INITIAL_ENQUIRIES, APARTMENT_PROJECT, BRAND_INFO } from './data/mockData';
import { ProjectPlot, ConstructionPackage, ClientEnquiry } from './types';
import { Phone, MessageSquare, Calculator, Sparkles } from 'lucide-react';

export function App() {
  // Play cinematic intro every time the website is opened
  const [showIntro, setShowIntro] = useState(true);

  // State management for Plots, Packages, Enquiries, Apartment
  const [plots, setPlots] = useState<ProjectPlot[]>(() => {
    const stored = localStorage.getItem('kns_plots');
    return stored ? JSON.parse(stored) : INITIAL_PLOTS;
  });

  const [packages, setPackages] = useState<ConstructionPackage[]>(() => {
    const stored = localStorage.getItem('kns_packages');
    return stored ? JSON.parse(stored) : CONSTRUCTION_PACKAGES;
  });

  const [enquiries, setEnquiries] = useState<ClientEnquiry[]>(() => {
    const stored = localStorage.getItem('kns_enquiries');
    return stored ? JSON.parse(stored) : INITIAL_ENQUIRIES;
  });

  const [apartmentStatus, setApartmentStatus] = useState<string>(() => {
    return localStorage.getItem('kns_apartment_status') || APARTMENT_PROJECT.status;
  });

  const [adminModalOpen, setAdminModalOpen] = useState(false);

  // Sync state changes to localStorage
  const handleUpdatePlot = (updatedPlot: ProjectPlot) => {
    const nextPlots = plots.map((p) => (p.id === updatedPlot.id ? updatedPlot : p));
    setPlots(nextPlots);
    localStorage.setItem('kns_plots', JSON.stringify(nextPlots));
  };

  const handleUpdatePackageRate = (id: string, minRate: number, maxRate: number) => {
    const nextPackages = packages.map((pkg) => (pkg.id === id ? { ...pkg, minRate, maxRate } : pkg));
    setPackages(nextPackages);
    localStorage.setItem('kns_packages', JSON.stringify(nextPackages));
  };

  const handleUpdateEnquiryStatus = (id: string, status: ClientEnquiry['status']) => {
    const nextEnquiries = enquiries.map((enq) => (enq.id === id ? { ...enq, status } : enq));
    setEnquiries(nextEnquiries);
    localStorage.setItem('kns_enquiries', JSON.stringify(nextEnquiries));
  };

  const handleNewEnquirySubmitted = (newEnquiry: ClientEnquiry) => {
    setEnquiries((prev) => [newEnquiry, ...prev]);
  };

  const handleUpdateApartmentStatus = (newStatus: string) => {
    setApartmentStatus(newStatus);
    localStorage.setItem('kns_apartment_status', newStatus);
  };

  const handleReplayIntro = () => {
    setShowIntro(true);
  };

  return (
    <div className="min-h-screen bg-navy text-ivory flex flex-col font-sans selection:bg-gold selection:text-navy">
      {/* Cinematic 3D Introduction Overlay (Plays every time site is opened) */}
      {showIntro && (
        <CinematicIntro
          onComplete={() => {
            setShowIntro(false);
          }}
        />
      )}

      {/* Luxury Navigation Header */}
      <Navbar />

      {/* Main Website Sections */}
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <ConstructionProcess />
        <CostCalculator />
        <MasterPlanSection plots={plots} />
        <ApartmentSection />
        <ProjectGallery />
        <InteriorShowcase />
        <WhyChooseUs />
        <ContactSection onNewEnquirySubmitted={handleNewEnquirySubmitted} />
      </main>

      {/* Architectural Dark Footer */}
      <Footer
        onOpenAdmin={() => setAdminModalOpen(true)}
        onReplayIntro={handleReplayIntro}
      />

      {/* Admin Management Dashboard Modal */}
      <AdminModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
        plots={plots}
        onUpdatePlot={handleUpdatePlot}
        enquiries={enquiries}
        onUpdateEnquiryStatus={handleUpdateEnquiryStatus}
        packages={packages}
        onUpdatePackageRate={handleUpdatePackageRate}
        apartmentStatus={apartmentStatus}
        onUpdateApartmentStatus={handleUpdateApartmentStatus}
      />

      {/* Floating Quick Action Widget (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-2.5">
        {/* WhatsApp Quick Chat */}
        <a
          href={`https://wa.me/${BRAND_INFO.whatsapp}?text=${encodeURIComponent('Hello Kiran Sir, I am contacting you from the KNS website regarding project consultation.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer border-2 border-white/30"
          title="Direct WhatsApp with Kiran Gajbhare"
        >
          <MessageSquare className="w-6 h-6" />
        </a>

        {/* Direct Call Button */}
        <a
          href={`tel:${BRAND_INFO.primaryPhone.replace(/\s+/g, '')}`}
          className="w-12 h-12 rounded-full bg-gold text-navy flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer border-2 border-white/30"
          title="Call +91 9100425645"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}

export default App;
