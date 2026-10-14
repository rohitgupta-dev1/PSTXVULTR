import React from 'react';
import { Cloud, BookOpen, CheckCircle2, ShieldCheck, Zap, Globe, Sparkles } from 'lucide-react';

export default function AllianceBlueprint() {
  return (
    <section className="py-16 sm:py-24 relative z-10" id="overview">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-[#ffcc3f] uppercase mb-3 inline-block">
            THE BILATERAL CHARTER
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            A Dual-Engine Engineering Alliance
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg font-normal">
            A mutual commitment between global cloud infrastructure powerhouse Vultr and
            Polaris School of Technology, fusing enterprise cloud computing with four years of hands-on software mastery.
          </p>
        </div>

        {/* Blueprint Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12 items-stretch">
          {/* Card 1: Vultr Contribution */}
          <div className="rounded-2xl sm:rounded-3xl bg-zinc-950 border border-zinc-800 p-5 sm:p-7 md:p-9 flex flex-col justify-between hover:border-[#007BFC]/60 transition-all duration-300 relative group shadow-2xl h-full">
            <div>
              {/* Header Top Bar */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#007BFC]/10 border border-[#007BFC]/20 flex items-center justify-center text-[#38bdf8] group-hover:scale-110 transition-transform shrink-0">
                  <Cloud className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="px-2.5 py-1 sm:px-3 rounded-full bg-[#007BFC]/10 border border-[#007BFC]/30 text-[#38bdf8] text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider uppercase shrink-0">
                  VULTR CONTRIBUTION
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-1">
                  Cloud Infrastructure & Grants
                </h3>
                <p className="text-xs text-zinc-400 font-mono">DIRECT CLOUD CAPACITY & VENTURE CAPITAL</p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {/* Item 1 */}
                <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  <span className="font-mono text-sm font-semibold text-[#ffcc3f] mt-0.5 shrink-0">01</span>
                  <div>
                    <h4 className="text-white font-semibold text-sm sm:text-base mb-1">
                      Base Student Cloud Credits — Up to $150,000 / Year
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                      Disbursed directly by Polaris to enrolled students for <strong className="text-zinc-200 font-medium">On-the-Job Training (OJT)</strong> and lab workloads. Capped at <strong className="text-[#ffcc3f] font-mono font-medium">$350/student/year</strong>.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  <span className="font-mono text-sm font-semibold text-[#ffcc3f] mt-0.5 shrink-0">02</span>
                  <div>
                    <h4 className="text-white font-semibold text-sm sm:text-base mb-1">
                      Student Startup Credit Grant — Up to $800,000 Over 4 Years
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                      Multi-year institutional grant committing <strong className="text-[#ffcc3f] font-mono font-medium">$200,000/year</strong> for four years, powering high-compute student tech startups.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  <span className="font-mono text-sm font-semibold text-[#ffcc3f] mt-0.5 shrink-0">03</span>
                  <div>
                    <h4 className="text-white font-semibold text-sm sm:text-base mb-1">
                      Global Edge Network & GPU Cloud Access
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                      Instant student provisioning across 32+ worldwide data centers, Vultr Kubernetes Engine (VKE), bare-metal instances, and NVIDIA GPU clusters.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-xs text-zinc-400 font-mono">
              <span>Combined Annual Resource Pool:</span>
              <span className="text-[#ffcc3f] font-semibold text-sm">$350,000 USD / Year</span>
            </div>
          </div>

          {/* Card 2: Polaris Contribution */}
          <div className="rounded-2xl sm:rounded-3xl bg-zinc-950 border border-zinc-800 p-5 sm:p-7 md:p-9 flex flex-col justify-between hover:border-[#ffcc3f]/60 transition-all duration-300 relative group shadow-2xl h-full">
            <div>
              {/* Header Top Bar */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#ffcc3f]/10 border border-[#ffcc3f]/20 flex items-center justify-center text-[#ffcc3f] group-hover:scale-110 transition-transform shrink-0">
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="px-2.5 py-1 sm:px-3 rounded-full bg-[#ffcc3f]/10 border border-[#ffcc3f]/30 text-[#ffcc3f] text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider uppercase shrink-0">
                  POLARIS RESPONSIBILITY
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-1">
                  Curriculum & Governance
                </h3>
                <p className="text-xs text-zinc-400 font-mono">ACADEMIC SYNERGY & RIGOROUS GOVERNANCE</p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {/* Item 1 */}
                <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  <span className="font-mono text-sm font-semibold text-[#ffcc3f] mt-0.5 shrink-0">01</span>
                  <div>
                    <h4 className="text-white font-semibold text-sm sm:text-base mb-1">
                      Native Vultr Curriculum Integration (August 2026)
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                      Integrating Vultr as the native cloud deployment environment within its core curriculum ahead of the <strong className="text-[#ffcc3f]">August 2026 launch</strong>.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  <span className="font-mono text-sm font-semibold text-[#ffcc3f] mt-0.5 shrink-0">02</span>
                  <div>
                    <h4 className="text-white font-semibold text-sm sm:text-base mb-1">
                      Fair & Accurate Adoption Reporting
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                      Transparent usage reporting and telemetry delivered to Vultr, auditing credit utilization efficiency and student competency milestones.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  <span className="font-mono text-sm font-semibold text-[#ffcc3f] mt-0.5 shrink-0">03</span>
                  <div>
                    <h4 className="text-white font-semibold text-sm sm:text-base mb-1">
                      Marketing & Global Tech Brand Integration
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                      Including Vultr as premier Infrastructure Partner across all admissions campaigns, hackathons, and public showcases.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-xs text-zinc-400 font-mono">
              <span>Programme Delivery Target:</span>
              <span className="text-[#ffcc3f] font-semibold text-sm">August 2026 Batch Ready</span>
            </div>
          </div>
        </div>

        {/* Polaris Engineering Lab Real Image Showcase Banner */}
        <div className="w-full rounded-2xl sm:rounded-3xl bg-zinc-950 border border-zinc-800 p-1.5 sm:p-3 overflow-hidden shadow-2xl relative group">
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden">
            <img 
              src="/images/polaris_lab_real.webp" 
              alt="Polaris School of Technology Real Campus Engineering Lab" 
              className="w-full h-auto object-cover max-h-[260px] sm:max-h-[440px] rounded-xl sm:rounded-2xl transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-4 sm:p-8">
              <div className="text-left space-y-1 sm:space-y-1.5">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#ffcc3f]/10 border border-[#ffcc3f]/30 text-[#ffcc3f] text-[10px] sm:text-xs font-mono font-semibold uppercase">
                  <span>● Official Polaris Campus Engineering Lab</span>
                </div>
                <h3 className="text-base sm:text-xl md:text-2xl font-bold text-white tracking-tight">
                  State-of-the-Art Software & Cloud Systems Innovation Center
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
