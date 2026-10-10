import React, { useState, useEffect } from 'react';
import { ChevronRight, Menu, X, Sparkles } from 'lucide-react';
import { DualBrandLockup } from './BrandLogos';

export default function Navbar({ onOpenGrantModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['hero', 'overview', 'funding', 'curriculum', 'calculator', 'governance', 'faq'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#overview', label: 'Overview', id: 'overview' },
    { href: '#funding', label: '$1.4M Grants', id: 'funding' },
    { href: '#curriculum', label: '4-Year Module', id: 'curriculum' },
    { href: '#calculator', label: 'Quota Simulator', id: 'calculator' },
    { href: '#governance', label: 'Governance', id: 'governance' },
    { href: '#faq', label: 'FAQ', id: 'faq' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 pt-3 sm:pt-4 transition-all duration-300">
      <div 
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 px-5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between ${
          scrolled 
            ? 'bg-zinc-950/90 backdrop-blur-xl border border-zinc-800/80 shadow-2xl shadow-black/80' 
            : 'bg-zinc-950/75 backdrop-blur-md border border-zinc-900/80 shadow-lg'
        }`}
      >
        {/* Brand Group */}
        <div className="flex items-center gap-3 shrink-0">
          <a href="#hero" className="flex items-center gap-2.5 group">
            <DualBrandLockup className="h-6 sm:h-7" />
          </a>

          {/* August 2026 Status Tag */}
          <span className="hidden xl:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium tracking-wider bg-zinc-900/90 text-[#ffcc3f] border border-zinc-800 whitespace-nowrap ml-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ffcc3f] animate-pulse"></span>
            AUG 2026
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a 
                key={link.id}
                href={link.href}
                className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wider transition-all whitespace-nowrap ${
                  isActive 
                    ? 'bg-zinc-800/90 text-[#ffcc3f] border border-zinc-700/60 shadow-sm' 
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          <a 
            href="#calculator" 
            className="px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wider text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 transition-all whitespace-nowrap"
          >
            Quota Simulator
          </a>
          <button 
            onClick={onOpenGrantModal}
            className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-black bg-[#ffcc3f] hover:bg-[#f5bd23] shadow-[0_0_20px_rgba(255,204,63,0.3)] hover:shadow-[0_0_25px_rgba(255,204,63,0.45)] transition-all transform hover:scale-105 flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>Apply Grants</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-7xl mx-auto mt-2 bg-zinc-950/95 backdrop-blur-xl border border-zinc-800 rounded-2xl px-6 py-5 flex flex-col gap-3 shadow-2xl animate-in slide-in-from-top-3">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium tracking-wider text-zinc-300 hover:text-[#ffcc3f] py-1 transition-colors"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-3 border-t border-zinc-800/80 flex flex-col gap-2.5">
            <a 
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-center text-xs font-medium text-zinc-300 bg-zinc-900 border border-zinc-800"
            >
              Quota Simulator
            </a>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenGrantModal(); }}
              className="px-4 py-2.5 rounded-xl text-center text-xs font-semibold text-black bg-[#ffcc3f] hover:bg-[#f5bd23] shadow-lg"
            >
              Apply for Startup Grants
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
