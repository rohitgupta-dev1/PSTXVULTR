import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FundingPillars from './components/FundingPillars';
import CurriculumRoadmap from './components/CurriculumRoadmap';
import VultrSpecs from './components/VultrSpecs';
import FaqSection from './components/FaqSection';
import GrantModal from './components/GrantModal';
import Footer from './components/Footer';

export default function App() {
  const [isGrantModalOpen, setIsGrantModalOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const isLight = theme === 'light';

  return (
    <div className={`min-h-screen relative transition-colors duration-300 selection:bg-[#ffcc3f] selection:text-black ${
      isLight ? 'bg-[#f8fafc] text-slate-800 light-theme' : 'bg-black text-zinc-100 dark-theme'
    }`}>
      {/* Ambient background glows */}
      <div className={`ambient-glow glow-top-left ${isLight ? 'opacity-20' : 'opacity-16'}`} aria-hidden="true"></div>
      <div className={`ambient-glow glow-top-right ${isLight ? 'opacity-25' : 'opacity-12'}`} aria-hidden="true"></div>
      <div className="grid-overlay" aria-hidden="true"></div>

      {/* Main Page Navigation */}
      <Navbar 
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenGrantModal={() => setIsGrantModalOpen(true)} 
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero 
          theme={theme}
          onOpenGrantModal={() => setIsGrantModalOpen(true)} 
        />
        <FundingPillars 
          theme={theme}
          onOpenGrantModal={() => setIsGrantModalOpen(true)} 
        />
        <CurriculumRoadmap theme={theme} />
        <VultrSpecs theme={theme} />
        <FaqSection theme={theme} />
      </main>

      {/* Footer */}
      <Footer 
        theme={theme}
        onOpenGrantModal={() => setIsGrantModalOpen(true)} 
      />

      {/* Startup Grant Application Modal */}
      <GrantModal 
        theme={theme}
        isOpen={isGrantModalOpen} 
        onClose={() => setIsGrantModalOpen(false)} 
      />
    </div>
  );
}
