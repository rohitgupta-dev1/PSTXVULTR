import React from 'react';
import { Zap, Layers, Globe, Shield, Database } from 'lucide-react';

export default function VultrSpecs() {
  const specs = [
    {
      icon: Zap,
      title: 'High Frequency Compute',
      desc: '3GHz+ Intel Xeon & AMD EPYC processors with 100% NVMe SSD storage for lightning fast build times and testing cycles.'
    },
    {
      icon: Layers,
      title: 'Vultr Kubernetes Engine (VKE)',
      desc: 'Certified managed Kubernetes with zero control-plane fee, empowering students to orchestrate real production pods.'
    },
    {
      icon: Globe,
      title: '33 Global Datacenter Regions',
      desc: 'Deploy low-latency services across 33 global datacenter regions with sub-15ms edge routing in North America, Europe, Asia-Pacific, Latin America, and Africa.'
    },
    {
      icon: Shield,
      title: 'Isolated Private VPC Networks',
      desc: 'Enterprise security with isolated private virtual private clouds, automated DDoS scrubbing, and free inter-rack transfer.'
    },
    {
      icon: Database,
      title: 'Managed DBs & S3 Object Storage',
      desc: 'One-click high-availability clusters for PostgreSQL, MySQL, Redis, and S3-compatible persistent object stores.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-zinc-950/90 border-y border-zinc-900 relative z-10" id="infrastructure">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-[#007BFC] bg-[#007BFC]/10 border border-[#007BFC]/30 px-3 py-1 rounded-full uppercase mb-3 inline-block">
            ENTERPRISE FOUNDATION • VULTR CLOUD
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            The Vultr Global Advantage
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg font-normal">
            Polaris students build on the same robust, battle-tested cloud trusted by millions of developers worldwide.
          </p>
        </div>

        {/* 5-Card Rebalanced Grid: 3 cards top row, 2 cards bottom row on lg; 2+2+1 centered on md */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6">
          {specs.map((item, idx) => {
            const Icon = item.icon;
            // First 3 cards take 2 cols each on lg (3x2=6). Last 2 cards take 3 cols each on lg (2x3=6).
            const lgColSpan = idx < 3 ? 'lg:col-span-2' : 'lg:col-span-3';
            // 5th card centers nicely across 2 columns on tablet
            const mdColSpan = idx === 4 ? 'md:col-span-2 md:max-w-xl md:mx-auto w-full' : 'md:col-span-1';

            return (
              <div 
                key={idx}
                className={`p-5 sm:p-7 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-[#007BFC] hover:shadow-[0_0_30px_rgba(0,123,252,0.15)] transition-all duration-300 hover:-translate-y-1 group ${lgColSpan} ${mdColSpan}`}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-zinc-800/80 border border-zinc-700/60 group-hover:border-[#007BFC]/40 group-hover:bg-[#007BFC]/10 group-hover:text-[#007BFC] flex items-center justify-center text-[#ffcc3f] mb-4 sm:mb-5 group-hover:scale-110 transition-all">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
