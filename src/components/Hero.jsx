import React, { useState } from 'react';
import { DualBrandLockup } from './BrandLogos';

export default function Hero({ onOpenGrantModal, theme = 'light' }) {
  const [activeMetric, setActiveMetric] = useState(0);
  const isLight = theme === 'light';

  const stats = [
    {
      label: 'TOTAL PARTNERSHIP COMMITMENT',
      value: '$1.5M',
      detail: 'Committed Vultr Cloud compute runway',
      highlight: true
    },
    {
      label: 'BASE STUDENT CLOUD CREDITS',
      value: '$150,000/yr',
      detail: 'Capped at $350/student/contract year for OJT',
      highlight: false
    },
    {
      label: 'STUDENT STARTUP CREDIT GRANT',
      value: '$800,000',
      detail: '$200,000/year over 4 years for ventures',
      highlight: false
    }
  ];

  return (
    <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 overflow-hidden" id="hero">
      {/* Dynamic ambient background glow */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] ${
        isLight ? 'bg-[#ffcc3f]/15' : 'bg-[#ffcc3f]/10'
      } rounded-full blur-[140px] pointer-events-none -z-10`}></div>
      <div className={`absolute top-1/3 right-10 w-[550px] h-[450px] ${
        isLight ? 'bg-[#007BFC]/20' : 'bg-[#007BFC]/15'
      } rounded-full blur-[160px] pointer-events-none -z-10`}></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center flex flex-col items-center">
        {/* Brand Showcase Banner */}
        <div className={`mb-6 px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl shadow-xl inline-flex items-center gap-2.5 sm:gap-3 backdrop-blur-md max-w-full transition-all border ${
          isLight 
            ? 'bg-slate-950/95 border-slate-800 shadow-slate-200/50 hover:border-[#007BFC]/50' 
            : 'bg-zinc-950/80 border-zinc-800 hover:border-[#007BFC]/40'
        }`}>
          <DualBrandLockup theme={theme} className="h-5 sm:h-7" />
        </div>

        {/* Main Headline */}
        <h1 className={`text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold tracking-tight max-w-4xl leading-snug sm:leading-tight mb-4 sm:mb-5 ${
          isLight ? 'text-slate-900' : 'text-white'
        }`}>
          Arming Tomorrow's Builders With{' '}
          <span className={`relative inline-block font-bold ${
            isLight ? 'text-[#007BFC]' : 'text-[#ffcc3f] drop-shadow-[0_0_35px_rgba(255,204,63,0.35)]'
          }`}>
            $1.5M Grant
          </span>{' '}
          in <span className="text-[#007BFC] font-semibold">Vultr</span> Cloud Infrastructure
        </h1>

        {/* Subtitle */}
        <p className={`text-sm sm:text-base md:text-lg max-w-2xl mb-8 sm:mb-12 leading-relaxed font-normal px-2 ${
          isLight ? 'text-slate-600' : 'text-zinc-400'
        }`}>
          Polaris School of Technology joins forces with{' '}
          <a 
            href="https://vultr.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#007BFC] hover:text-[#0056b3] font-semibold transition-colors hover:underline"
          >
            Vultr
          </a>{' '}
          to fund undergraduate engineers with direct cloud credits, venture acceleration grants, and a groundbreaking 
          4-year compounding cloud deployment curriculum.
        </p>

        {/* Stats Ribbon - 3 Cards Balanced */}
        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 mb-10 sm:mb-12">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className={`p-5 sm:p-6 rounded-2xl border text-left transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
                isLight
                  ? stat.highlight
                    ? 'bg-white border-[#007BFC]/50 shadow-[0_4px_25px_rgba(0,123,252,0.12)]'
                    : 'bg-white border-slate-200/80 shadow-sm hover:border-[#007BFC]/50 hover:shadow-md'
                  : stat.highlight 
                    ? 'bg-zinc-900/80 border-zinc-800 shadow-[0_0_25px_rgba(255,204,63,0.06)] hover:border-[#ffcc3f]' 
                    : 'bg-zinc-900/80 border-zinc-800/80 hover:border-[#ffcc3f]'
              }`}
              onMouseEnter={() => setActiveMetric(idx)}
            >
              <div className={`text-[10px] sm:text-[11px] font-mono font-semibold tracking-widest mb-2 uppercase ${
                isLight ? 'text-slate-400' : 'text-zinc-500'
              }`}>
                {stat.label}
              </div>
              <div className={`text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-1.5 sm:mb-2 font-mono ${
                isLight 
                  ? stat.highlight ? 'text-[#007BFC]' : 'text-slate-900'
                  : stat.highlight ? 'text-[#ffcc3f]' : 'text-white'
              }`}>
                {stat.value}
              </div>
              <div className={`text-xs font-normal ${isLight ? 'text-slate-500' : 'text-zinc-400'}`}>
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Real Polaris Campus Visual Image Showcase */}
        <div className={`w-full rounded-2xl sm:rounded-3xl p-1.5 sm:p-3 overflow-hidden relative group transition-all border ${
          isLight ? 'bg-white border-slate-200/90 shadow-xl' : 'bg-zinc-950 border-zinc-800 shadow-2xl hover:border-zinc-700'
        }`}>
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden">
            <img 
              src="/images/polaris_hero_real.webp" 
              alt="Polaris School of Technology Official Campus & Engineering Lab" 
              className="w-full h-auto object-cover max-h-[260px] sm:max-h-[440px] md:max-h-[480px] rounded-xl sm:rounded-2xl transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-4 sm:p-8">
              <div className="text-left space-y-1 sm:space-y-1.5">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-zinc-950/90 border border-zinc-700/80 text-[10px] sm:text-xs font-mono font-semibold uppercase backdrop-blur-md">
                  <span className="text-[#ffcc3f]">● Official Polaris Campus Showcase</span>
                  <span className="text-zinc-500">|</span>
                  <span className="text-[#007BFC]">Powered by Vultr</span>
                </div>
                <h3 className="text-base sm:text-xl md:text-2xl font-bold text-white tracking-tight">
                  Polaris School of Technology <span className="text-zinc-500">×</span> <span className="text-[#007BFC]">Vultr</span> Infrastructure Hub
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
