import React from 'react';
import { BarChart3, Megaphone, Calendar, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Governance() {
  const commitments = [
    {
      icon: BarChart3,
      tag: 'QUARTERLY AUDIT CADENCE',
      title: 'Fair & Accurate Adoption Telemetry',
      desc: 'Polaris delivers structured, transparent reporting to Vultr tracking student credit burn velocity, active VM deployments, Kubernetes node hours, and academic milestone progression to ensure optimal resource utilization.'
    },
    {
      icon: Megaphone,
      tag: 'TIER 1 BRAND PROMINENCE',
      title: 'Global Co-Marketing & PR Campaigns',
      desc: 'Vultr is featured as the Official Cloud Infrastructure Partner across all Polaris admissions brochures, technical whitepapers, engineering podcasts, hackathon keynotes, and founder showcase events.'
    },
    {
      icon: Calendar,
      tag: 'AUGUST 2026 MILESTONE',
      title: 'Compounding Cloud Curriculum Readiness',
      desc: 'Curriculum development and faculty training will be fully finalized ahead of the August 2026 programme launch, ensuring every enrolled engineering student starts building on Vultr from Day 1.'
    }
  ];

  return (
    <section className="py-24 relative z-10" id="governance">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-[#ffcc3f] uppercase mb-3 inline-block">
            ACADEMIC GOVERNANCE & REPORTING
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Polaris Institutional Commitments
          </h2>
          <p className="text-zinc-400 text-base md:text-lg font-normal">
            A partnership founded on transparency, accountable credit governance, and deep pedagogical alignment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {commitments.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div 
                key={idx}
                className="rounded-3xl bg-zinc-950 border border-zinc-800 p-8 flex flex-col justify-between hover:border-[#ffcc3f] transition-all duration-300 hover:-translate-y-1 shadow-xl"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#ffcc3f]/10 border border-[#ffcc3f]/30 flex items-center justify-center text-[#ffcc3f] mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-mono font-semibold tracking-widest text-zinc-500 uppercase block mb-2">
                    {c.tag}
                  </span>

                  <h3 className="text-xl font-semibold text-white mb-3">
                    {c.title}
                  </h3>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {c.desc}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-[#ffcc3f] pt-4 border-t border-zinc-900">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Verified Institutional Term</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
