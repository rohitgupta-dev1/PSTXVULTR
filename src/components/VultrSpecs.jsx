import React from 'react';
import { Zap, Layers, Cpu, Globe, Shield, Database } from 'lucide-react';

export default function VultrSpecs() {
  const specs = [
    {
      icon: Zap,
      title: 'High-Frequency Compute',
      desc: '3GHz+ Intel Xeon & AMD EPYC processors with 100% NVMe SSD storage for lightning fast build times and testing cycles.'
    },
    {
      icon: Layers,
      title: 'Vultr Kubernetes Engine (VKE)',
      desc: 'Certified managed Kubernetes with zero control-plane fee, empowering students to orchestrate real production pods.'
    },
    {
      icon: Cpu,
      title: 'Fractional & HGX Cloud GPUs',
      desc: 'From NVIDIA A16 and L40S to dedicated HGX H100 pods for advanced Year 4 deep learning and student AI startups.'
    },
    {
      icon: Globe,
      title: '32+ Global Datacenter Regions',
      desc: 'Deploy low-latency services in North America, Europe, Asia-Pacific, Latin America, and Africa with sub-15ms edge routing.'
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
    <section className="py-24 bg-zinc-950/90 border-y border-zinc-900 relative z-10" id="infrastructure">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-[#ffcc3f] uppercase mb-3 inline-block">
            ENTERPRISE FOUNDATION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            The Vultr Global Advantage
          </h2>
          <p className="text-zinc-400 text-base md:text-lg font-normal">
            Polaris students build on the same robust, battle-tested cloud trusted by millions of developers worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-7 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-[#ffcc3f] transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-[#ffcc3f] mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-zinc-400 leading-relaxed font-normal">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
