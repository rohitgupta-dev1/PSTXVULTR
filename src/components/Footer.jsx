import React from 'react';
import { ExternalLink } from 'lucide-react';
import { DualBrandLockup } from './BrandLogos';

export default function Footer({ onOpenGrantModal }) {
  return (
    <footer className="bg-black border-t border-zinc-900 pt-12 pb-10 sm:pt-16 sm:pb-12 relative z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 mb-10 sm:mb-12">
          {/* Brand Col */}
          <div className="space-y-3.5 sm:space-y-4 max-w-xl">
            <DualBrandLockup className="h-6 sm:h-7" />

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
              Official institutional cloud computing alliance between Polaris School of Technology 
              and Vultr, providing $1.5M in infrastructure, student cloud credits, and progressive curriculum.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
            <button 
              onClick={onOpenGrantModal}
              className="px-3.5 sm:px-4 py-2 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider text-black bg-[#ffcc3f] hover:bg-[#f5bd23] shadow-md transition-all flex-1 sm:flex-initial text-center"
            >
              Apply for Grants
            </button>
            <a 
              href="https://vultr.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3.5 sm:px-4 py-2 rounded-full text-[11px] sm:text-xs font-medium tracking-wider text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all inline-flex items-center justify-center gap-1.5 flex-1 sm:flex-initial text-center"
            >
              <span>Vultr Official</span>
              <ExternalLink className="w-3 h-3 text-zinc-400" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] sm:text-xs font-mono text-zinc-500 text-center sm:text-left">
          <div>
            © 2026 Polaris School of Technology & Vultr. All Rights Reserved.
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <span>Confidential Institutional Agreement</span>
            <span>•</span>
            <span className="text-[#ffcc3f]">Academic Charter</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
