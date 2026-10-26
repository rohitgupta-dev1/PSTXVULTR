import React, { useState } from 'react';
import { DollarSign, Rocket, Check, ArrowRight, Layers, Users, Award, ShieldAlert } from 'lucide-react';

export default function FundingPillars({ onOpenGrantModal, theme = 'light' }) {
  const [selectedPillar, setSelectedPillar] = useState('both');
  const isLight = theme === 'light';

  return (
    <section className={`py-16 sm:py-24 border-y relative z-10 transition-colors ${
      isLight ? 'bg-slate-50/70 border-slate-200/80' : 'bg-zinc-950/80 border-zinc-900'
    }`} id="funding">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className={`text-xs font-mono font-semibold tracking-widest uppercase mb-3 inline-block ${
            isLight ? 'text-[#007BFC]' : 'text-[#ffcc3f]'
          }`}>
            INFRASTRUCTURE CAPITAL DISBURSEMENT
          </span>
          <h2 className={`text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            Two High-Impact Credit Pipelines
          </h2>
          <p className={`text-sm sm:text-base md:text-lg font-normal ${
            isLight ? 'text-slate-600' : 'text-zinc-400'
          }`}>
            Engineered so zero Polaris students ever pay out-of-pocket for server infrastructure, while 
            high-velocity student founders gain enterprise Bare Metal Compute and Kubernetes runway.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* Pillar 1: Base Student Cloud Credits */}
          <div className={`rounded-2xl sm:rounded-3xl border p-5 sm:p-8 md:p-12 flex flex-col justify-between transition-all duration-300 relative group ${
            isLight
              ? 'bg-white border-slate-200 shadow-md hover:border-[#007BFC]/50 hover:shadow-xl'
              : 'bg-zinc-900/90 border-zinc-800 hover:border-zinc-700 shadow-2xl'
          }`}>
            <div>
              <div className="flex items-center justify-between mb-5 sm:mb-6">
                <span className={`text-[10px] sm:text-xs font-mono font-semibold tracking-widest uppercase px-2.5 sm:px-3 py-1 rounded-full ${
                  isLight
                    ? 'text-[#007BFC] bg-blue-50 border border-blue-200/80'
                    : 'text-zinc-400 bg-zinc-800/80'
                }`}>
                  PILLAR A: ACADEMIC & OJT
                </span>
              </div>

              <h3 className={`text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}>
                Base Student Cloud Credits
              </h3>

              <div className="flex items-baseline gap-1.5 sm:gap-2 mb-5 sm:mb-6">
                <span className={`text-2xl sm:text-3xl font-bold font-mono ${
                  isLight ? 'text-[#007BFC]' : 'text-[#ffcc3f]'
                }`}>$</span>
                <span className={`text-4xl sm:text-5xl md:text-6xl font-bold font-mono tracking-tight ${
                  isLight ? 'text-slate-900' : 'text-white'
                }`}>150,000</span>
                <span className={`font-mono text-xs sm:text-sm ml-1 ${
                  isLight ? 'text-slate-500' : 'text-zinc-400'
                }`}>/ contract year</span>
              </div>

              <p className={`text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 font-normal ${
                isLight ? 'text-slate-600' : 'text-zinc-300'
              }`}>
                Disbursed directly by Polaris to enrolled students to power coursework, capstone engineering projects, 
                and real-world <strong className={isLight ? 'text-slate-900 font-semibold' : 'text-white font-medium'}>On-the-Job Training (OJT)</strong> environments.
              </p>

              {/* Policy Specifications */}
              <div className={`space-y-3 mb-6 sm:mb-8 p-4 sm:p-5 rounded-2xl border ${
                isLight ? 'bg-slate-50 border-slate-200/80' : 'bg-black/60 border-zinc-800/80'
              }`}>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className={isLight ? 'text-slate-500' : 'text-zinc-400'}>STUDENT CAP:</span>
                  <span className={isLight ? 'text-[#007BFC] font-semibold' : 'text-[#ffcc3f] font-semibold'}>USD $350 / student / year</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className={isLight ? 'text-slate-500' : 'text-zinc-400'}>DISBURSED BY:</span>
                  <span className={isLight ? 'text-slate-700 font-medium' : 'text-zinc-200'}>Polaris Academic Registrar</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className={isLight ? 'text-slate-500' : 'text-zinc-400'}>4-YEAR COMMITMENT:</span>
                  <span className={isLight ? 'text-slate-900 font-semibold' : 'text-white font-semibold'}>$600,000 USD Aggregate</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className={isLight ? 'text-slate-500' : 'text-zinc-400'}>GOVERNANCE AUDIT:</span>
                  <span className={isLight ? 'text-slate-600' : 'text-zinc-300'}>Subject to Vultr periodic review</span>
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-2.5 sm:space-y-3 mb-8 sm:mb-10">
                {[
                  '100% subsidized Linux VMs, Docker containers, and database nodes',
                  'Zero credit card required for enrolled Polaris students',
                  'Dedicated student team IAM boundaries with production security',
                  'Annual credit replenishment upon academic progression'
                ].map((feat, i) => (
                  <div key={i} className={`flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-normal ${
                    isLight ? 'text-slate-700' : 'text-zinc-300'
                  }`}>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 shrink-0">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={onOpenGrantModal}
              className={`w-full py-3 px-5 rounded-xl text-center text-xs font-semibold tracking-wider transition-all flex items-center justify-center gap-2 border ${
                isLight 
                  ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300 hover:border-slate-400 shadow-sm' 
                  : 'btn btn-secondary'
              }`}
            >
              <span>Apply for Student Credits</span>
              <ArrowRight className={`w-4 h-4 ${isLight ? 'text-[#007BFC]' : 'text-[#ffcc3f]'}`} />
            </button>
          </div>

          {/* Pillar 2: Student Startup Credit Grant */}
          <div className={`rounded-2xl sm:rounded-3xl border-2 p-5 sm:p-8 md:p-12 flex flex-col justify-between transition-all duration-300 relative group ${
            isLight
              ? 'bg-gradient-to-b from-blue-50/70 via-white to-white border-[#007BFC] shadow-xl shadow-blue-500/10'
              : 'bg-gradient-to-b from-zinc-900 via-zinc-900 to-black border-[#ffcc3f] shadow-[0_0_50px_rgba(255,204,63,0.12)]'
          }`}>
            <div className={`absolute -top-3.5 right-6 sm:right-8 text-[10px] sm:text-[11px] font-mono font-bold tracking-widest px-3 sm:px-4 py-1 rounded-full uppercase shadow-lg ${
              isLight ? 'bg-[#007BFC] text-white shadow-blue-500/30' : 'bg-[#ffcc3f] text-black shadow-[#ffcc3f]/30'
            }`}>
              VENTURE ACCELERATOR POOL
            </div>

            <div>
              <div className="flex items-center justify-between mb-5 sm:mb-6">
                <span className={`text-[10px] sm:text-xs font-mono font-semibold tracking-widest uppercase px-2.5 sm:px-3 py-1 rounded-full ${
                  isLight 
                    ? 'text-[#b45309] bg-amber-50 border border-amber-200/80' 
                    : 'text-[#ffcc3f] bg-[#ffcc3f]/10 border border-[#ffcc3f]/20'
                }`}>
                  PILLAR B: FOUNDERS & HACKATHONS
                </span>
              </div>

              <h3 className={`text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}>
                Student Startup Credit Grant
              </h3>

              <div className="flex items-baseline gap-1.5 sm:gap-2 mb-5 sm:mb-6">
                <span className={`text-2xl sm:text-3xl font-bold font-mono ${
                  isLight ? 'text-[#007BFC]' : 'text-[#ffcc3f]'
                }`}>$</span>
                <span className={`text-4xl sm:text-5xl md:text-6xl font-bold font-mono tracking-tight ${
                  isLight ? 'text-[#007BFC]' : 'text-[#ffcc3f]'
                }`}>800,000</span>
                <span className={`font-mono text-xs sm:text-sm ml-1 ${
                  isLight ? 'text-slate-500' : 'text-zinc-400'
                }`}>over 4 years</span>
              </div>

              <p className={`text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 font-normal ${
                isLight ? 'text-slate-600' : 'text-zinc-300'
              }`}>
                An institutional venture pipeline committing <strong className={isLight ? 'text-slate-900 font-semibold' : 'text-white font-medium'}>$200,000 every year</strong> over 
                four years for high-traction student startups, deep-tech research, and Polaris flagship hackathon awards.
              </p>

              {/* Policy Specifications */}
              <div className={`space-y-3 mb-6 sm:mb-8 p-4 sm:p-5 rounded-2xl border ${
                isLight ? 'bg-blue-50/50 border-blue-100' : 'bg-black/60 border-zinc-800/80'
              }`}>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className={isLight ? 'text-slate-500' : 'text-zinc-400'}>ANNUAL DISBURSEMENT:</span>
                  <span className={isLight ? 'text-[#007BFC] font-semibold' : 'text-[#ffcc3f] font-semibold'}>USD $200,000 / year</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className={isLight ? 'text-slate-500' : 'text-zinc-400'}>CONTRACT PERIOD:</span>
                  <span className={isLight ? 'text-slate-900 font-semibold' : 'text-white font-semibold'}>Four (4) Consecutive Years</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className={isLight ? 'text-slate-500' : 'text-zinc-400'}>ELIGIBILITY POOL:</span>
                  <span className={isLight ? 'text-slate-700 font-medium' : 'text-zinc-200'}>Student Startups & Hackathons</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className={isLight ? 'text-slate-500' : 'text-zinc-400'}>GRANT SIZES:</span>
                  <span className={isLight ? 'text-[#007BFC] font-semibold' : 'text-[#ffcc3f] font-semibold'}>$5,000 — $25,000+ per company</span>
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-2.5 sm:space-y-3 mb-8 sm:mb-10">
                {[
                  'Bare Metal Compute & High Frequency Compute clusters for scale',
                  '100% founder equity retained (zero dilution from cloud grant)',
                  'Direct architectural advisement from Vultr Solutions Architects',
                  'Priority presentation at Polaris Demo Days to angel & VC funds'
                ].map((feat, i) => (
                  <div key={i} className={`flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-normal ${
                    isLight ? 'text-slate-700' : 'text-zinc-300'
                  }`}>
                    <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shrink-0 ${
                      isLight 
                        ? 'bg-[#007BFC]/15 border border-[#007BFC]/30 text-[#007BFC]' 
                        : 'bg-[#ffcc3f]/20 border border-[#ffcc3f]/40 text-[#ffcc3f]'
                    }`}>
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={onOpenGrantModal}
              className="btn btn-primary w-full text-center flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Apply for Startup Grant Pool</span>
              <Rocket className="w-4 h-4 text-black" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
