import React from 'react';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import { DualBrandLockup } from './BrandLogos';

export default function Footer({ onOpenGrantModal }) {
  return (
    <footer className="bg-black border-t border-zinc-900 pt-20 pb-12 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <DualBrandLockup className="h-7" />

            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              Official institutional cloud computing alliance between Polaris School of Technology 
              and Vultr US, providing $1.4M+ in infrastructure, student cloud credits, and progressive curriculum.
            </p>

            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-zinc-900 border border-[#ffcc3f]/40 text-[#ffcc3f]">
                AUGUST 2026 LAUNCH
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800">
                VULTR CLOUD PLATFORM
              </span>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h5 className="text-xs font-mono font-bold tracking-widest text-white uppercase mb-4">
              PARTNERSHIP TERMS
            </h5>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><a href="#overview" className="hover:text-[#ffcc3f] transition-colors">Vultr Contribution Overview</a></li>
              <li><a href="#funding" className="hover:text-[#ffcc3f] transition-colors">Base Student Credits ($150k/yr)</a></li>
              <li><a href="#funding" className="hover:text-[#ffcc3f] transition-colors">Startup Credit Grant ($800k)</a></li>
              <li><a href="#governance" className="hover:text-[#ffcc3f] transition-colors">Student Progress Reporting</a></li>
              <li><a href="#governance" className="hover:text-[#ffcc3f] transition-colors">Marketing Campaign Integration</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h5 className="text-xs font-mono font-bold tracking-widest text-white uppercase mb-4">
              CURRICULUM (4Y)
            </h5>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><a href="#curriculum" className="hover:text-[#ffcc3f] transition-colors">Year 1: Linux & Docker</a></li>
              <li><a href="#curriculum" className="hover:text-[#ffcc3f] transition-colors">Year 2: Kubernetes (VKE) & DBs</a></li>
              <li><a href="#curriculum" className="hover:text-[#ffcc3f] transition-colors">Year 3: Global Edge & OJT</a></li>
              <li><a href="#curriculum" className="hover:text-[#ffcc3f] transition-colors">Year 4: Cloud GPUs & Incubation</a></li>
              <li><a href="#curriculum" className="hover:text-[#ffcc3f] transition-colors">August 2026 Syllabus Rollout</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h5 className="text-xs font-mono font-bold tracking-widest text-white uppercase mb-4">
              TOOLS & PORTALS
            </h5>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><a href="#calculator" className="hover:text-[#ffcc3f] transition-colors">Credit Allocation Engine</a></li>
              <li><button onClick={onOpenGrantModal} className="hover:text-[#ffcc3f] transition-colors text-left">Apply for Startup Grants</button></li>
              <li><a href="#infrastructure" className="hover:text-[#ffcc3f] transition-colors">32+ Vultr Global Datacenters</a></li>
              <li><a href="#faq" className="hover:text-[#ffcc3f] transition-colors">Partnership Policies & Caps</a></li>
              <li>
                <a href="https://vultr.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-[#ffcc3f] transition-colors">
                  <span>Vultr US Official</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © 2026 Polaris School of Technology & Vultr US. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Confidential Institutional Agreement</span>
            <span>•</span>
            <span className="text-[#ffcc3f]">August 2026 Academic Charter</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
