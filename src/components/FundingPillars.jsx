import React, { useState } from 'react';
import { DollarSign, Rocket, Check, ArrowRight, Layers, Users, Award, ShieldAlert } from 'lucide-react';

export default function FundingPillars({ onOpenGrantModal }) {
  const [selectedPillar, setSelectedPillar] = useState('both');

  return (
    <section className="py-24 bg-zinc-950/80 border-y border-zinc-900 relative z-10" id="funding">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-[#ffcc3f] uppercase mb-3 inline-block">
            INFRASTRUCTURE CAPITAL DISBURSEMENT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Two High-Impact Credit Pipelines
          </h2>
          <p className="text-zinc-400 text-base md:text-lg font-normal">
            Engineered so zero Polaris students ever pay out-of-pocket for server infrastructure, while 
            high-velocity student founders gain enterprise GPU and Kubernetes runway.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Pillar 1: Base Student Cloud Credits */}
          <div className="rounded-3xl bg-zinc-900/90 border border-zinc-800 p-8 sm:p-12 flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 relative group shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-semibold tracking-widest text-zinc-400 uppercase bg-zinc-800/80 px-3 py-1 rounded-full">
                  PILLAR A: ACADEMIC & OJT
                </span>
                <span className="text-xs font-mono text-[#ffcc3f] font-semibold">
                  SECTION 1(A)
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
                Base Student Cloud Credits
              </h3>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-3xl font-bold text-[#ffcc3f] font-mono">$</span>
                <span className="text-5xl sm:text-6xl font-bold text-white font-mono tracking-tight">150,000</span>
                <span className="text-zinc-400 font-mono text-sm ml-1">/ contract year</span>
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed mb-8 font-normal">
                Disbursed directly by Polaris to enrolled students to power coursework, capstone engineering projects, 
                and real-world <strong className="text-white font-medium">On-the-Job Training (OJT)</strong> environments.
              </p>

              {/* Policy Specifications */}
              <div className="space-y-3.5 mb-8 bg-black/60 p-5 rounded-2xl border border-zinc-800/80">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-400">STUDENT CAP:</span>
                  <span className="text-[#ffcc3f] font-semibold">USD $350 / student / year</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-400">DISBURSED BY:</span>
                  <span className="text-zinc-200">Polaris Academic Registrar</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-400">4-YEAR COMMITMENT:</span>
                  <span className="text-white font-semibold">$600,000 USD Aggregate</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-400">GOVERNANCE AUDIT:</span>
                  <span className="text-zinc-300">Subject to Vultr US periodic review</span>
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3 mb-10">
                {[
                  '100% subsidized Linux VMs, Docker containers, and database nodes',
                  'Zero credit card required for enrolled Polaris students',
                  'Dedicated student team IAM boundaries with production security',
                  'Annual credit replenishment upon academic progression'
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-zinc-300 font-normal">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={onOpenGrantModal}
              className="btn btn-secondary w-full text-center flex items-center justify-center gap-2"
            >
              <span>Apply for Student Credits</span>
              <ArrowRight className="w-4 h-4 text-[#ffcc3f]" />
            </button>
          </div>

          {/* Pillar 2: Student Startup Credit Grant */}
          <div className="rounded-3xl bg-gradient-to-b from-zinc-900 via-zinc-900 to-black border-2 border-[#ffcc3f] p-8 sm:p-12 flex flex-col justify-between transition-all duration-300 relative group shadow-[0_0_50px_rgba(255,204,63,0.12)]">
            <div className="absolute -top-3.5 right-8 bg-[#ffcc3f] text-black text-[11px] font-mono font-bold tracking-widest px-4 py-1 rounded-full uppercase shadow-lg shadow-[#ffcc3f]/30">
              VENTURE ACCELERATOR POOL
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-semibold tracking-widest text-[#ffcc3f] uppercase bg-[#ffcc3f]/10 border border-[#ffcc3f]/20 px-3 py-1 rounded-full">
                  PILLAR B: FOUNDERS & HACKATHONS
                </span>
                <span className="text-xs font-mono text-[#ffcc3f] font-semibold">
                  SECTION 1(B)
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
                Student Startup Credit Grant
              </h3>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-3xl font-bold text-[#ffcc3f] font-mono">$</span>
                <span className="text-5xl sm:text-6xl font-bold text-[#ffcc3f] font-mono tracking-tight">800,000</span>
                <span className="text-zinc-400 font-mono text-sm ml-1">over 4 years</span>
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed mb-8 font-normal">
                An institutional venture pipeline committing <strong className="text-white font-medium">$200,000 every year</strong> over 
                four years for high-traction student startups, deep-tech research, and Polaris flagship hackathon awards.
              </p>

              {/* Policy Specifications */}
              <div className="space-y-3.5 mb-8 bg-black/60 p-5 rounded-2xl border border-zinc-800/80">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-400">ANNUAL DISBURSEMENT:</span>
                  <span className="text-[#ffcc3f] font-semibold">USD $200,000 / year</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-400">CONTRACT PERIOD:</span>
                  <span className="text-white font-semibold">Four (4) Consecutive Years</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-400">ELIGIBILITY POOL:</span>
                  <span className="text-zinc-200">Student Startups & Hackathon Winners</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-400">GRANT SIZES:</span>
                  <span className="text-[#ffcc3f] font-semibold">$5,000 — $25,000+ per company</span>
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3 mb-10">
                {[
                  'NVIDIA A100 & H100 Cloud GPU clusters for training & inference',
                  '100% founder equity retained (zero dilution from cloud grant)',
                  'Direct architectural advisement from Vultr Solutions Architects',
                  'Priority presentation at Polaris Demo Days to angel & VC funds'
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-zinc-300 font-normal">
                    <div className="w-5 h-5 rounded-full bg-[#ffcc3f]/20 border border-[#ffcc3f]/40 flex items-center justify-center text-[#ffcc3f] shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={onOpenGrantModal}
              className="btn btn-primary w-full text-center flex items-center justify-center gap-2"
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
