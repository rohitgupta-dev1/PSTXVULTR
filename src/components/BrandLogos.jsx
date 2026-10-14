import React from 'react';

export function PolarisLogo({ className = "h-8" }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img
        src="/images/polaris_logo.png"
        alt="Polaris School of Technology"
        className="h-full w-auto object-contain shrink-0"
      />
    </div>
  );
}

export function VultrLogo({ className = "h-8" }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img
        src="/images/vultr_logo.svg"
        alt="Vultr"
        className="h-full w-auto object-contain shrink-0"
      />
    </div>
  );
}

export function DualBrandLockup({ className = "h-7" }) {
  return (
    <div className="flex items-center gap-2.5 sm:gap-3">
      <PolarisLogo className={className} />
      <span className="text-zinc-600 text-xs font-mono select-none">✕</span>
      <VultrLogo className={className} />
    </div>
  );
}
