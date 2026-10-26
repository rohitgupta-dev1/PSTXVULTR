import React from 'react';
import { ExternalLink } from 'lucide-react';
import { DualBrandLockup } from './BrandLogos';

export default function Footer({ theme = 'light', onOpenGrantModal }) {
  const isLight = theme === 'light';

  return (
    <footer className={`border-t pt-12 pb-10 sm:pt-16 sm:pb-12 relative z-10 transition-colors duration-300 ${
      isLight ? 'bg-white border-slate-200 text-slate-600' : 'bg-black border-zinc-900 text-zinc-400'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 mb-10 sm:mb-12">
          {/* Brand Col */}
          <div className="space-y-3.5 sm:space-y-4 max-w-xl">
            {isLight ? (
              <div className="inline-flex items-center bg-slate-950 border border-slate-800 px-3.5 py-1.5 rounded-full shadow-sm">
                <DualBrandLockup className="h-6 sm:h-7" />
              </div>
            ) : (
              <DualBrandLockup className="h-6 sm:h-7" />
            )}

            <p className={`text-xs sm:text-sm leading-relaxed font-normal ${
              isLight ? 'text-slate-600' : 'text-zinc-400'
            }`}>
              Official institutional cloud computing alliance between Polaris School of Technology 
              and{' '}
              <a 
                href="https://vultr.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#007BFC] hover:underline font-semibold"
              >
                Vultr
              </a>
              , providing $1.5M in infrastructure, student cloud credits, and progressive curriculum.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
            <button 
              onClick={onOpenGrantModal}
              className="px-4 py-2.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider text-black bg-[#ffcc3f] hover:bg-[#f5bd23] shadow-md hover:shadow-lg transition-all flex-1 sm:flex-initial text-center"
            >
              Apply for Grants
            </button>
            <a 
              href="https://vultr.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`px-4 py-2.5 rounded-full text-[11px] sm:text-xs font-medium tracking-wider border transition-all inline-flex items-center justify-center gap-1.5 flex-1 sm:flex-initial text-center ${
                isLight
                  ? 'bg-white border-[#007BFC]/40 text-[#007BFC] hover:bg-[#007BFC]/5 hover:border-[#007BFC]'
                  : 'bg-zinc-900 border-[#007BFC]/50 text-white hover:border-[#007BFC] hover:bg-[#007BFC]/10 hover:shadow-[0_0_15px_rgba(0,123,252,0.35)]'
              }`}
            >
              <span>Vultr Official</span>
              <ExternalLink className="w-3 h-3 text-[#007BFC]" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`pt-6 sm:pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] sm:text-xs font-mono text-center sm:text-left ${
          isLight ? 'border-slate-200 text-slate-500' : 'border-zinc-900 text-zinc-500'
        }`}>
          <div>
            © 2026 Polaris School of Technology & Vultr. All Rights Reserved.
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <span>Confidential Institutional Agreement</span>
            <span>•</span>
            <span className={isLight ? 'text-amber-600 font-semibold' : 'text-[#ffcc3f]'}>
              Academic Charter
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
