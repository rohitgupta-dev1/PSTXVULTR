import React, { useState, useEffect } from 'react';
import { ChevronRight, Menu, X, Sun, Moon } from 'lucide-react';
import { DualBrandLockup } from './BrandLogos';

export default function Navbar({ onOpenGrantModal, theme = 'light', onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const isLight = theme === 'light';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = ['hero', 'funding', 'curriculum', 'faq'];
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
    { href: '#funding', label: '$1.5M Grants', id: 'funding' },
    { href: '#curriculum', label: '4-Year Module', id: 'curriculum' },
    { href: '#faq', label: 'FAQ', id: 'faq' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-3 sm:px-6 pt-2.5 sm:pt-4 transition-all duration-300">
      <div 
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 px-3.5 sm:px-6 py-2 sm:py-3 flex items-center justify-between ${
          isLight
            ? scrolled
              ? 'bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-xl shadow-slate-300/40'
              : 'bg-white/80 backdrop-blur-md border border-slate-200/70 shadow-md'
            : scrolled 
              ? 'bg-zinc-950/90 backdrop-blur-xl border border-zinc-800/80 shadow-2xl shadow-black/80' 
              : 'bg-zinc-950/80 backdrop-blur-md border border-zinc-900/80 shadow-lg'
        }`}
      >
        {/* Brand Group */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a href="#hero" className="flex items-center gap-2 group">
            <DualBrandLockup theme={theme} className="h-5 sm:h-6 md:h-7" />
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
                  isLight
                    ? isActive 
                      ? 'bg-blue-50 text-[#007BFC] border border-blue-200/80 shadow-sm font-semibold' 
                      : 'text-slate-600 hover:text-[#007BFC] hover:bg-slate-100/70'
                    : isActive 
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
          {/* Theme Toggle Button */}
          {onToggleTheme && (
            <button
              onClick={onToggleTheme}
              aria-label={isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              title={isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border transition-all ${
                isLight 
                  ? 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-700 hover:text-[#007BFC]' 
                  : 'bg-zinc-900 hover:bg-zinc-800 border-zinc-800 text-zinc-300 hover:text-[#ffcc3f]'
              }`}
            >
              {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
          )}

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
            className={`lg:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border transition-colors ${
              isLight
                ? 'text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border-slate-200'
                : 'text-zinc-300 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800'
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className={`lg:hidden max-w-7xl mx-auto mt-2 rounded-2xl p-4 sm:p-5 flex flex-col gap-3 shadow-2xl animate-in slide-in-from-top-2 duration-200 border ${
          isLight
            ? 'bg-white/98 backdrop-blur-2xl border-slate-200 text-slate-800'
            : 'bg-zinc-950/98 backdrop-blur-2xl border-zinc-800 text-zinc-100'
        }`}>
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-medium tracking-wider py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${
                  isLight 
                    ? 'text-slate-700 hover:text-[#007BFC] hover:bg-slate-100'
                    : 'text-zinc-300 hover:text-[#ffcc3f] hover:bg-zinc-900/80'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-40" />
              </a>
            ))}
          </nav>

          <div className={`pt-2 border-t ${isLight ? 'border-slate-200' : 'border-zinc-800/80'}`}>
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
