import React, { useState } from 'react';
import { Calculator, Sparkles, CheckCircle2, Server, Cpu, HardDrive, Shield, Layers } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CreditCalculator({ onOpenGrantModal }) {
  const [track, setTrack] = useState('student');
  const [cohortSize, setCohortSize] = useState(1);
  const [academicYear, setAcademicYear] = useState(1);
  const [infraType, setInfraType] = useState('vps');
  const [isSimulated, setIsSimulated] = useState(false);

  // Calculation Logic
  let totalAllocation = 0;
  let periodText = '/ yr';
  let policyTag = '';
  let poolSource = '';
  let computeSpecs = '';
  let containerNodes = '';
  let bandwidthSpecs = '';

  if (track === 'student') {
    // Individual cap USD 300 per student per contract year, max pool $150k/yr
    const maxPool = 150000;
    totalAllocation = Math.min(cohortSize * 300, maxPool);
    periodText = cohortSize === 1 ? '/ year (per student)' : '/ year (cohort total)';
    policyTag = `Capped at USD $300 per student/contract year under Section 1(a). Max pool: $150,000/yr.`;
    poolSource = 'Base Student Cloud Credits Pool ($150k/yr)';

    if (cohortSize === 1) {
      computeSpecs = '12 Months Dedicated High-Freq VM (1vCPU, 2GB RAM, 64GB NVMe)';
      containerNodes = '1x Isolated Development Node with Docker Engine';
      bandwidthSpecs = '2 TB Global High-Speed Egress Transfer';
    } else {
      computeSpecs = `${cohortSize}x Independent High-Freq Linux VMs for coursework`;
      containerNodes = `${cohortSize * 2}x Docker Environments with IAM sandboxing`;
      bandwidthSpecs = `${(cohortSize * 1.5).toFixed(0)} TB Collective Datacenter Egress`;
    }
  } else if (track === 'ojt') {
    // OJT team: 4-8 students working on live commercial projects, capped at $150k annual pool
    const effectiveTeam = Math.max(cohortSize, 4);
    totalAllocation = Math.min(effectiveTeam * 300, 150000);
    periodText = '/ OJT project term';
    policyTag = `Disbursed directly by Polaris for live commercial OJT deployments. Capped at $150k annual pool.`;
    poolSource = 'Base Student Cloud Credits Pool ($150k/yr)';
    computeSpecs = 'High-Frequency 4-Node Multi-Tier Cluster (Frontend + API + Worker)';
    containerNodes = 'Vultr Kubernetes Engine (VKE) with zero control-plane fees';
    bandwidthSpecs = '10 TB Production Egress & DDoS Scrubbing included';
  } else if (track === 'startup') {
    // Startup Grant: USD 800k over 4 years ($200k/yr)
    if (academicYear === 4) {
      totalAllocation = 25000;
    } else if (academicYear === 3) {
      totalAllocation = 15000;
    } else {
      totalAllocation = 8000;
    }
    periodText = 'Venture Grant Runway';
    policyTag = `Funded via the $800,000 Student Startup Credit Grant ($200k/yr pool). Section 1(b).`;
    poolSource = 'Student Startup Credit Grant Pool ($800k / 4 Years)';
    computeSpecs = infraType === 'gpu' 
      ? 'NVIDIA A100-SXM4 / L40S Fractional GPU Pods + PyTorch Cluster'
      : 'High-Concurrency Dedicated AMD EPYC CPU Bare Metal Nodes';
    containerNodes = '8-Node Production VKE Cluster + Managed PostgreSQL HA';
    bandwidthSpecs = '25 TB Enterprise Global CDN & Edge Transfer';
  } else if (track === 'hackathon') {
    totalAllocation = 10000;
    periodText = 'Championship Purse';
    policyTag = `Awarded from the Vultr-sponsored Hackathon & Competition Credit Grant.`;
    poolSource = 'Vultr Hackathon & Competition Reserve';
    computeSpecs = 'Instant GPU Acceleration & High-Freq Compute Pods';
    containerNodes = '4x Multi-Zone Production Instances';
    bandwidthSpecs = '15 TB High-Velocity Pipeline Transfer';
  }

  const handleSimulate = () => {
    setIsSimulated(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#ffcc3f', '#ffffff', '#007BFC']
    });
    setTimeout(() => setIsSimulated(false), 3000);
  };

  return (
    <section className="py-24 bg-zinc-950/70 border-y border-zinc-900 relative z-10" id="calculator">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-[#ffcc3f] uppercase mb-3 inline-block">
            INTERACTIVE QUOTA ENGINE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Simulate Your Vultr Allocation
          </h2>
          <p className="text-zinc-400 text-base md:text-lg font-normal">
            Calculate exact credit quotas for your student cohort, live OJT deployment, or startup venture 
            under the Polaris x Vultr agreement terms.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Column: Form Controls */}
            <div className="lg:col-span-7 p-8 sm:p-10 space-y-8 border-b lg:border-b-0 lg:border-r border-zinc-800">
              {/* Control 1: Track Selection */}
              <div>
                <label className="block text-xs font-mono font-semibold tracking-wider text-zinc-400 uppercase mb-3">
                  1. SELECT PROGRAMME TRACK
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { id: 'student', title: 'Enrolled Student', sub: 'Base OJT Coursework' },
                    { id: 'ojt', title: 'OJT Team Staging', sub: 'Client Deployments' },
                    { id: 'startup', title: 'Student Startup', sub: 'Venture Grant Pool' },
                    { id: 'hackathon', title: 'Hackathon Winner', sub: 'Championship Award' }
                  ].map(t => (
                    <button
                      key={t.id}
                      onClick={() => setTrack(t.id)}
                      className={`p-3.5 rounded-xl text-left border transition-all ${
                        track === t.id
                          ? 'bg-zinc-800 border-[#ffcc3f] text-white shadow-md'
                          : 'bg-zinc-950 border-zinc-800/80 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                      }`}
                    >
                      <div className="text-xs font-semibold text-white mb-0.5">{t.title}</div>
                      <div className="text-[11px] text-zinc-500 font-mono">{t.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Control 2: Cohort Size Slider (for student/ojt) */}
              {(track === 'student' || track === 'ojt') && (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-xs font-mono font-semibold tracking-wider text-zinc-400 uppercase">
                      2. NUMBER OF STUDENTS IN COHORT
                    </label>
                    <span className="text-sm font-mono font-semibold text-[#ffcc3f] bg-black/60 px-3 py-1 rounded-md border border-zinc-800">
                      {cohortSize} {cohortSize === 1 ? 'Student' : 'Students'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="500"
                    value={cohortSize}
                    onChange={(e) => setCohortSize(parseInt(e.target.value, 10))}
                    className="w-full accent-[#ffcc3f] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-zinc-500 mt-2">
                    <span>1 (Solo)</span>
                    <span>100</span>
                    <span>250</span>
                    <span>500 (Max Annual Cohort)</span>
                  </div>
                </div>
              )}

              {/* Control 3: Academic Stage (Year 1 to 4) */}
              <div>
                <label className="block text-xs font-mono font-semibold tracking-wider text-zinc-400 uppercase mb-3">
                  3. ACADEMIC CURRICULUM STAGE
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4].map(y => (
                    <button
                      key={y}
                      onClick={() => setAcademicYear(y)}
                      className={`py-2.5 rounded-lg text-xs font-mono font-semibold border transition-all ${
                        academicYear === y
                          ? 'bg-[#ffcc3f] text-black border-[#ffcc3f]'
                          : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700'
                      }`}
                    >
                      YEAR 0{y}
                    </button>
                  ))}
                </div>
              </div>

              {/* Control 4: Resource Target */}
              <div>
                <label className="block text-xs font-mono font-semibold tracking-wider text-zinc-400 uppercase mb-3">
                  4. TARGET CLOUD INFRASTRUCTURE
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { id: 'vps', label: 'High-Freq Compute', icon: Server },
                    { id: 'k8s', label: 'Kubernetes (VKE)', icon: Layers },
                    { id: 'gpu', label: 'NVIDIA GPU Clusters', icon: Cpu },
                    { id: 'db', label: 'Managed DB & Storage', icon: HardDrive }
                  ].map(item => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setInfraType(item.id)}
                        className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs font-medium transition-all ${
                          infraType === item.id
                            ? 'bg-zinc-800 border-[#ffcc3f] text-white'
                            : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${infraType === item.id ? 'text-[#ffcc3f]' : 'text-zinc-500'}`} />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Results Display */}
            <div className="lg:col-span-5 p-8 sm:p-10 bg-black/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[11px] font-mono font-semibold tracking-widest text-[#ffcc3f] uppercase bg-[#ffcc3f]/10 border border-[#ffcc3f]/30 px-3 py-1 rounded-full">
                    ALLIANCE FORMULA
                  </span>
                  <span className="text-xs font-mono text-zinc-500">PST-VULTR-REV26</span>
                </div>

                <div className="mb-6">
                  <span className="block text-xs font-mono text-zinc-400 uppercase mb-2">
                    CALCULATED CLOUD CREDIT ALLOCATION:
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-[#ffcc3f] font-mono">$</span>
                    <span className="text-5xl sm:text-6xl font-bold text-white font-mono tracking-tight">
                      {totalAllocation.toLocaleString()}
                    </span>
                    <span className="text-zinc-400 font-mono text-sm ml-2 font-normal">
                      {periodText}
                    </span>
                  </div>
                </div>

                {/* Policy Notice Box */}
                <div className="p-3.5 rounded-xl bg-zinc-900 border-l-4 border-[#ffcc3f] text-xs text-zinc-300 font-mono leading-relaxed mb-8">
                  {policyTag}
                </div>

                {/* Resource Breakdown */}
                <div className="space-y-3 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs font-mono mb-8">
                  <div className="text-[11px] font-semibold text-zinc-400 uppercase border-b border-zinc-800 pb-2">
                    ESTIMATED HARDWARE CAPACITY:
                  </div>
                  <div className="flex justify-between items-start pt-1">
                    <span className="text-zinc-500">Compute:</span>
                    <span className="text-white text-right max-w-[200px] font-normal">{computeSpecs}</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-zinc-500">Nodes:</span>
                    <span className="text-white text-right max-w-[200px] font-normal">{containerNodes}</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-zinc-500">Transfer:</span>
                    <span className="text-white text-right font-normal">{bandwidthSpecs}</span>
                  </div>
                  <div className="flex justify-between items-start border-t border-zinc-800/80 pt-2">
                    <span className="text-zinc-500">Funding Source:</span>
                    <span className="text-[#ffcc3f] text-right font-semibold">{poolSource}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleSimulate}
                  className="btn btn-primary w-full text-center flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-black" />
                  <span>{isSimulated ? 'Quota Verified! 🎉' : 'Simulate Allocation Approval'}</span>
                </button>
                <button
                  onClick={onOpenGrantModal}
                  className="btn btn-secondary-outline w-full text-center text-xs"
                >
                  Apply for Startup Grant Track
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
