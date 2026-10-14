import React from 'react';
import { ExternalLink } from 'lucide-react';
import { DualBrandLockup } from './BrandLogos';

export default function Footer({ onOpenGrantModal }) {
  return (
    <footer className="bg-black border-t border-zinc-900 pt-16 pb-12 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          {/* Brand Col */}
          <div className="space-y-4 max-w-xl">
            <DualBrandLockup className="h-7" />

            <p className="text-sm text-zinc-400 leading-relaxed font-normal">
              Official institutional cloud computing alliance between Polaris School of Technology 
              and Vultr US, providing $1.5M in infrastructure, student cloud credits, and progressive curriculum.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button 
              onClick={onOpenGrantModal}
              className="px-4 py-2 rounded-full text-xs font-semibold tracking-wider text-black bg-[#ffcc3f] hover:bg-[#f5bd23] shadow-md transition-all"
            >
              Apply for Grants
            </button>
            <a 
              href="https://vultr.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 rounded-full text-xs font-medium tracking-wider text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all inline-flex items-center gap-1.5"
            >
              <span>Vultr US Official</span>
              <ExternalLink className="w-3 h-3 text-zinc-400" />
            </a>
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
            <span className="text-[#ffcc3f]">Academic Charter</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
