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

      // Active section detection
      const sections = ['hero', 'overview', 'funding', 'curriculum', 'faq'];
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
    { href: '#funding', label: '$1.5M Grants', id: 'funding' },
    { href: '#curriculum', label: '4-Year Module', id: 'curriculum' },
    { href: '#faq', label: 'FAQ', id: 'faq' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-3 sm:px-6 pt-2.5 sm:pt-4 transition-all duration-300">
      <div 
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 px-3.5 sm:px-6 py-2 sm:py-3 flex items-center justify-between ${
          scrolled 
            ? 'bg-zinc-950/90 backdrop-blur-xl border border-zinc-800/80 shadow-2xl shadow-black/80' 
            : 'bg-zinc-950/80 backdrop-blur-md border border-zinc-900/80 shadow-lg'
        }`}
      >
        {/* Brand Group */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a href="#hero" className="flex items-center gap-2 group">
            <DualBrandLockup className="h-5 sm:h-6 md:h-7" />
          </a>
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
        <div className="flex items-center gap-2 shrink-0">
          <button 
            onClick={onOpenGrantModal}
            className="hidden sm:inline-flex px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-black bg-[#ffcc3f] hover:bg-[#f5bd23] shadow-[0_0_20px_rgba(255,204,63,0.3)] hover:shadow-[0_0_25px_rgba(255,204,63,0.45)] transition-all transform hover:scale-105 items-center gap-1 sm:gap-1.5 whitespace-nowrap"
          >
            <span>Apply Grants</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-zinc-300 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-7xl mx-auto mt-2 bg-zinc-950/98 backdrop-blur-2xl border border-zinc-800 rounded-2xl p-4 sm:p-5 flex flex-col gap-3 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium tracking-wider text-zinc-300 hover:text-[#ffcc3f] py-2 px-3 rounded-lg hover:bg-zinc-900/80 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
              </a>
            ))}
          </nav>

          <div className="pt-2 border-t border-zinc-800/80">
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenGrantModal(); }}
              className="w-full py-2.5 rounded-xl text-center text-xs font-semibold tracking-wider text-black bg-[#ffcc3f] hover:bg-[#f5bd23] shadow-lg flex items-center justify-center gap-1.5 transition-all"
            >
              <span>Apply for Grants</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
