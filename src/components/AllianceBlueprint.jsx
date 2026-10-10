import React from 'react';
import { Cloud, BookOpen, CheckCircle2, ShieldCheck, Zap, Globe, Sparkles } from 'lucide-react';

export default function AllianceBlueprint() {
  return (
    <section className="py-24 relative z-10" id="overview">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-[#ffcc3f] uppercase mb-3 inline-block">
            THE BILATERAL CHARTER
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            A Dual-Engine Engineering Alliance
          </h2>
          <p className="text-zinc-400 text-base md:text-lg font-normal">
            A mutual commitment between global cloud infrastructure powerhouse Vultr US and 
            Polaris School of Technology, fusing enterprise cloud computing with four years of hands-on software mastery.
          </p>
        </div>

        {/* Blueprint Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Vultr Contribution */}
          <div className="rounded-3xl bg-zinc-950 border border-zinc-800 p-8 sm:p-10 flex flex-col justify-between hover:border-[#007BFC]/60 transition-all duration-300 relative group shadow-2xl">
            <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-[#007BFC]/10 border border-[#007BFC]/30 text-[#38bdf8] text-[11px] font-mono font-semibold tracking-wider uppercase">
              VULTR US CONTRIBUTION
            </div>

            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#007BFC]/10 border border-[#007BFC]/20 flex items-center justify-center text-[#38bdf8] group-hover:scale-110 transition-transform">
                  <Cloud className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white tracking-tight">Cloud Platform Infrastructure</h3>
                  <p className="text-xs text-zinc-400 font-mono">DIRECT CLOUD CAPACITY & VENTURE CAPITAL</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Item 1 */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  <span className="font-mono text-sm font-semibold text-[#ffcc3f] mt-0.5">01</span>
                  <div>
                    <h4 className="text-white font-semibold text-base mb-1">
                      Base Student Cloud Credits — Up to $150,000 / Year
                    </h4>
                    <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                      Disbursed directly by Polaris to enrolled students for <strong className="text-zinc-200 font-medium">On-the-Job Training (OJT)</strong>, lab workloads, and real client deployments. Capped at <strong className="text-[#ffcc3f] font-mono font-medium">USD $300 per student per contract year</strong>, subject to Vultr US periodic review.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  <span className="font-mono text-sm font-semibold text-[#ffcc3f] mt-0.5">02</span>
                  <div>
                    <h4 className="text-white font-semibold text-base mb-1">
                      Student Startup Credit Grant — Up to $800,000 Over 4 Years
                    </h4>
                    <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                      A multi-year institutional grant pool committing <strong className="text-[#ffcc3f] font-mono font-medium">USD $200,000 per year</strong> for four (4) years, providing high-compute infrastructure for eligible student-founded tech startups and hackathon championship awards.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  <span className="font-mono text-sm font-semibold text-[#ffcc3f] mt-0.5">03</span>
                  <div>
                    <h4 className="text-white font-semibold text-base mb-1">
                      Global Edge Network & GPU Cloud Access
                    </h4>
                    <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                      Instant student provisioning across 32+ worldwide data centers, Vultr Kubernetes Engine (VKE), bare-metal instances, and NVIDIA GPU clusters.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400 font-mono">
              <span>Combined Annual Resource Pool:</span>
              <span className="text-[#ffcc3f] font-semibold text-sm">$350,000 USD / Year</span>
            </div>
          </div>

          {/* Card 2: Polaris Contribution */}
          <div className="rounded-3xl bg-zinc-950 border border-zinc-800 p-8 sm:p-10 flex flex-col justify-between hover:border-[#ffcc3f]/60 transition-all duration-300 relative group shadow-2xl">
            <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-[#ffcc3f]/10 border border-[#ffcc3f]/30 text-[#ffcc3f] text-[11px] font-mono font-semibold tracking-wider uppercase">
              POLARIS RESPONSIBILITY
            </div>

            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#ffcc3f]/10 border border-[#ffcc3f]/20 flex items-center justify-center text-[#ffcc3f] group-hover:scale-110 transition-transform">
                  <BookOpen className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white tracking-tight">Curriculum, Telemetry & Co-Marketing</h3>
                  <p className="text-xs text-zinc-400 font-mono">ACADEMIC SYNERGY & RIGOROUS GOVERNANCE</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Item 1 */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  <span className="font-mono text-sm font-semibold text-[#ffcc3f] mt-0.5">01</span>
                  <div>
                    <h4 className="text-white font-semibold text-base mb-1">
                      Native Vultr Curriculum Integration (August 2026)
                    </h4>
                    <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                      Polaris will integrate Vultr as the native cloud deployment environment within its core curriculum ahead of the <strong className="text-[#ffcc3f]">August 2026 programme launch</strong>, with complexity compounding progressively across all four years.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  <span className="font-mono text-sm font-semibold text-[#ffcc3f] mt-0.5">02</span>
                  <div>
                    <h4 className="text-white font-semibold text-base mb-1">
                      Fair & Accurate Adoption Reporting
                    </h4>
                    <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                      Transparent usage reporting and telemetry delivered to Vultr US, auditing credit utilization efficiency, OJT project completions, and student competency milestones.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  <span className="font-mono text-sm font-semibold text-[#ffcc3f] mt-0.5">03</span>
                  <div>
                    <h4 className="text-white font-semibold text-base mb-1">
                      Marketing & Global Tech Brand Integration
                    </h4>
                    <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                      Including Vultr US as the premier Infrastructure Partner across all Polaris admissions campaigns, national hackathons, developer conferences, and public showcases.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400 font-mono">
              <span>Programme Delivery Target:</span>
              <span className="text-[#ffcc3f] font-semibold text-sm">August 2026 Batch Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
