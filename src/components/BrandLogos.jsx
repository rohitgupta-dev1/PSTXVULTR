import React from 'react';

export function PolarisLogo({ className = "h-8", showSubtext = true }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Official Polaris Shooting Star Shield Mark */}
      <svg viewBox="0 0 100 100" className="h-full w-auto shrink-0" fill="none">
        <defs>
          <linearGradient id="polaris-orange-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffb703" />
            <stop offset="60%" stopColor="#f77f00" />
            <stop offset="100%" stopColor="#d62828" />
          </linearGradient>
        </defs>
        {/* Main Angled Rounded Badge */}
        <path
          d="M 22 26 C 22 14, 34 8, 48 14 L 78 30 C 88 36, 92 50, 86 64 L 74 82 C 66 94, 48 94, 34 86 L 18 72 C 10 64, 10 50, 16 38 Z"
          fill="url(#polaris-orange-grad)"
        />
        {/* Shooting Star Curved Arc */}
        <path
          d="M 32 78 Q 44 58 64 36"
          stroke="#1e3a8a"
          strokeWidth="7"
          strokeLinecap="round"
        />
        {/* Star icon at top right end of arc */}
        <polygon
          points="66,24 68.5,30 75,30.5 70,35.2 71.5,42 66,38.5 60.5,42 62,35.2 57,30.5 63.5,30"
          fill="#1e3a8a"
        />
      </svg>
      {/* Brand Typography */}
      <div className="flex flex-col text-left leading-none justify-center">
        <span className="font-extrabold tracking-widest text-white text-base sm:text-lg">POLARIS</span>
        {showSubtext && (
          <span className="text-[8.5px] font-semibold tracking-[0.18em] text-zinc-300 uppercase mt-0.5">
            SCHOOL OF TECHNOLOGY
          </span>
        )}
      </div>
    </div>
  );
}

export function VultrLogo({ className = "h-8" }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Official Vultr Layered 'V' Mark */}
      <svg viewBox="0 0 100 90" className="h-full w-auto shrink-0" fill="none">
        {/* Top Cyan Accent */}
        <path d="M 6 12 L 28 12 L 18 30 L 2 30 Z" fill="#38bdf8" />
        {/* Middle Light Blue Layer */}
        <path d="M 16 27 L 36 27 L 24 50 L 8 50 Z" fill="#007bfc" />
        {/* Main Left White Stem */}
        <path d="M 23 47 L 46 88 C 47 90, 49 90, 50 88 L 68 55 L 44 55 Z" fill="#ffffff" />
        {/* Right White Wing */}
        <path d="M 64 12 L 96 12 L 56 60 L 38 60 Z" fill="#ffffff" />
      </svg>
      <span className="font-extrabold tracking-widest text-white text-base sm:text-lg">VULTR</span>
    </div>
  );
}

export function DualBrandLockup({ className = "h-7" }) {
  return (
    <div className="flex items-center gap-3">
      <PolarisLogo className={className} showSubtext={false} />
      <span className="text-zinc-600 text-xs font-mono select-none">✕</span>
      <VultrLogo className={className} />
    </div>
  );
}
