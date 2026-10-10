import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AllianceBlueprint from './components/AllianceBlueprint';
import FundingPillars from './components/FundingPillars';
import CurriculumRoadmap from './components/CurriculumRoadmap';
import CreditCalculator from './components/CreditCalculator';
import Governance from './components/Governance';
import VultrSpecs from './components/VultrSpecs';
import FaqSection from './components/FaqSection';
import GrantModal from './components/GrantModal';
import Footer from './components/Footer';

export default function App() {
  const [isGrantModalOpen, setIsGrantModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-zinc-100 relative selection:bg-[#ffcc3f] selection:text-black">
      {/* Ambient background glows */}
      <div className="ambient-glow glow-top-left" aria-hidden="true"></div>
      <div className="ambient-glow glow-top-right" aria-hidden="true"></div>
      <div className="grid-overlay" aria-hidden="true"></div>

      {/* Main Page Navigation */}
      <Navbar onOpenGrantModal={() => setIsGrantModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenGrantModal={() => setIsGrantModalOpen(true)} />
        <AllianceBlueprint />
        <FundingPillars onOpenGrantModal={() => setIsGrantModalOpen(true)} />
        <CurriculumRoadmap />
        <CreditCalculator onOpenGrantModal={() => setIsGrantModalOpen(true)} />
        <Governance />
        <VultrSpecs />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenGrantModal={() => setIsGrantModalOpen(true)} />

      {/* Startup Grant Application Modal */}
      <GrantModal 
        isOpen={isGrantModalOpen} 
        onClose={() => setIsGrantModalOpen(false)} 
      />
    </div>
  );
}
