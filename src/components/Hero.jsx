import React, { useState } from 'react';
import { DualBrandLockup } from './BrandLogos';

export default function Hero({ onOpenGrantModal }) {
  const [activeMetric, setActiveMetric] = useState(0);

  // 1st and 2nd cards removed as requested, leaving Student Startup Grant & Curriculum Integration
  const stats = [
    {
      label: 'STUDENT STARTUP CREDIT GRANT',
      value: '$800,000',
      detail: '$200,000/year over 4 years for ventures',
      highlight: true
    },
    {
      label: 'CURRICULUM INTEGRATION',
      value: 'AUG 2026',
      detail: '4-Year compounding cloud modules',
      highlight: false
    }
  ];

  return (
    <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 overflow-hidden" id="hero">
      {/* Dynamic ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#ffcc3f]/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[500px] h-[400px] bg-[#007BFC]/10 rounded-full blur-[160px] pointer-events-none -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center flex flex-col items-center">
        {/* Brand Showcase Banner */}
        <div className="mb-6 px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl bg-zinc-950/80 border border-zinc-800 shadow-xl inline-flex items-center gap-2.5 sm:gap-3 backdrop-blur-md max-w-full">
          <DualBrandLockup className="h-5 sm:h-7" />
        </div>

        {/* Main Headline */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold tracking-tight text-white max-w-4xl leading-snug sm:leading-tight mb-4 sm:mb-5">
          Arming Tomorrow's Builders With{' '}
          <span className="text-[#ffcc3f] relative inline-block drop-shadow-[0_0_35px_rgba(255,204,63,0.35)] font-bold">
            $1.5M Grant
          </span>{' '}
          in Vultr Cloud Infrastructure
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl mb-8 sm:mb-12 leading-relaxed font-normal px-2">
          Polaris School of Technology joins forces with <strong className="text-white font-medium">Vultr US</strong> to 
          fund undergraduate engineers with direct cloud credits, venture acceleration grants, and a groundbreaking 
          4-year compounding cloud deployment curriculum.
        </p>

        {/* Stats Ribbon - 2 Cards Balanced */}
        <div className="w-full max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mb-10 sm:mb-12">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className={`p-5 sm:p-6 rounded-2xl bg-zinc-900/80 border text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#ffcc3f] cursor-pointer ${
                stat.highlight 
                  ? 'border-zinc-800 shadow-[0_0_25px_rgba(255,204,63,0.06)]' 
                  : 'border-zinc-800/80'
              }`}
              onMouseEnter={() => setActiveMetric(idx)}
            >
              <div className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-widest text-zinc-500 mb-2 uppercase">
                {stat.label}
              </div>
              <div className={`text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-1.5 sm:mb-2 font-mono ${
                stat.highlight ? 'text-[#ffcc3f]' : 'text-white'
              }`}>
                {stat.value}
              </div>
              <div className="text-xs text-zinc-400 font-normal">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Real Polaris Campus Visual Image Showcase */}
        <div className="w-full rounded-2xl sm:rounded-3xl bg-zinc-950 border border-zinc-800 p-1.5 sm:p-3 overflow-hidden shadow-2xl relative group">
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden">
            <img 
              src="/images/polaris_hero_real.webp" 
              alt="Polaris School of Technology Official Campus & Engineering Lab" 
              className="w-full h-auto object-cover max-h-[260px] sm:max-h-[440px] md:max-h-[480px] rounded-xl sm:rounded-2xl transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-4 sm:p-8">
              <div className="text-left space-y-1 sm:space-y-1.5">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#ffcc3f]/10 border border-[#ffcc3f]/30 text-[#ffcc3f] text-[10px] sm:text-xs font-mono font-semibold uppercase">
                  <span>● Official Polaris Campus Showcase</span>
                </div>
                <h3 className="text-base sm:text-xl md:text-2xl font-bold text-white tracking-tight">
                  Polaris School of Technology × Vultr US Infrastructure Hub
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
