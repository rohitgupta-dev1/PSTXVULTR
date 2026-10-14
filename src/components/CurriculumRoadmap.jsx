import React, { useState } from 'react';
import { Terminal, Layers, Network, Cpu, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function CurriculumRoadmap() {
  const [activeYear, setActiveYear] = useState(1);

  const curriculumYears = [
    {
      year: 1,
      badge: 'YEAR 01 • FOUNDATIONS',
      title: 'Linux Systems, Containerization & Bare Compute',
      desc: 'Students abandon "localhost" within their first 30 days. Every freshman provisions Linux high-frequency compute instances on Vultr, binds DNS records, issues TLS certificates, and deploys containerized web services.',
      stack: ['Vultr Compute', 'Ubuntu 24.04', 'Docker Engine', 'Nginx Proxy', 'TLS/Let\'s Encrypt', 'GitOps & CI'],
      highlight: 'Every student deploys public production endpoints with real DNS by Month 2.',
      terminalCode: [
        { type: 'command', text: 'vultr-cli instance create --region ewr --plan vc2-1c-1gb --os 1743' },
        { type: 'response', text: '⚡ Provisioning Vultr Compute Instance [Node-01]... Success!' },
        { type: 'gold', text: 'Public IP: 149.28.214.88 | Datacenter: New Jersey | Latency: 12ms' },
        { type: 'command', text: 'docker run -d -p 80:80 --name polaris-app registry.pst/app:v1.0' },
        { type: 'response', text: 'Container started: e41b7b4d48a0 [Status: Healthy]' },
        { type: 'command', text: 'curl -I https://student.polaris.edu/healthz' },
        { type: 'green', text: 'HTTP/2 200 OK — Ready for Production Traffic' }
      ],
      metrics: [
        { val: '$350', lbl: 'Year 1 Credit Cap' },
        { val: '100%', lbl: 'Freshmen Deployed' },
        { val: '4+', lbl: 'Shipped Micro-apps' }
      ]
    },
    {
      year: 2,
      badge: 'YEAR 02 • ORCHESTRATION',
      title: 'Vultr Kubernetes Engine (VKE), DBs & Private VPCs',
      desc: 'Advancing from single virtual machines into declarative container orchestration. Students configure Vultr Kubernetes Engine (VKE), wire managed PostgreSQL clusters over isolated private VPC networks, and build health-check autoscalers.',
      stack: ['VKE Kubernetes', 'Managed PostgreSQL', 'NVMe Block Storage', 'Private VPC Peering', 'Helm Charts', 'Prometheus & Grafana'],
      highlight: 'Designing resilient multi-tier web architectures with persistent state and automatic pod self-healing.',
      terminalCode: [
        { type: 'command', text: 'kubectl get nodes -o wide' },
        { type: 'response', text: 'NAME            STATUS   ROLES    AGE   VERSION   INTERNAL-IP' },
        { type: 'gold', text: 'vke-pool-01-a   Ready    <none>   3d    v1.30.2   10.244.0.12' },
        { type: 'gold', text: 'vke-pool-01-b   Ready    <none>   3d    v1.30.2   10.244.0.13' },
        { type: 'command', text: 'kubectl apply -f ./vultr-managed-db-connector.yaml' },
        { type: 'green', text: 'PersistentVolumeClaim bound: 100Gi NVMe Block Storage' },
        { type: 'green', text: 'VPC Peering 10.99.0.0/16 established with Managed DB' }
      ],
      metrics: [
        { val: 'VKE', lbl: 'Zero Control Fee' },
        { val: '99.9%', lbl: 'SLA Target' },
        { val: '3-Tier', lbl: 'Production Stacks' }
      ]
    },
    {
      year: 3,
      badge: 'YEAR 03 • DISTRIBUTED SYSTEMS & OJT',
      title: 'Global Edge Routing, Chaos Engineering & Live OJT',
      desc: 'During their industry On-the-Job Training (OJT), students work on live commercial software systems. They orchestrate multi-region load balancers, benchmark network egress economics, and run chaos engineering experiments against network outages.',
      stack: ['Global Load Balancers', 'Multi-Region Replicas', 'OpenTofu / Terraform', 'OJT Production Systems', 'Chaos Engineering', 'Distributed Tracing'],
      highlight: 'Students handle live commercial traffic, backed by Polaris reporting audits and Vultr SLA guarantees.',
      terminalCode: [
        { type: 'command', text: 'terraform apply -auto-approve' },
        { type: 'response', text: 'Terraform will perform the following actions:' },
        { type: 'gold', text: '+ vultr_load_balancer.global_edge [Tokyo, Frankfurt, NY]' },
        { type: 'gold', text: '+ vultr_object_storage.cdn_assets [S3-compatible 500GB]' },
        { type: 'green', text: 'Apply complete! Resources: 14 added, 0 changed, 0 destroyed.' },
        { type: 'command', text: 'ojt-telemetry-agent --report-to-vultr-us' },
        { type: 'response', text: '✓ Credit burn audit synchronized with Polaris Academic Registry' }
      ],
      metrics: [
        { val: '32+', lbl: 'Global Edge Regions' },
        { val: '<15ms', lbl: 'Edge Latency' },
        { val: 'Live OJT', lbl: 'Client Projects' }
      ]
    },
    {
      year: 4,
      badge: 'YEAR 04 • VENTURE & AI SCALE',
      title: 'Cloud GPUs, LLM Fine-Tuning & Startup Incubation',
      desc: 'Senior students entering the Polaris Venture Track tap into the $800,000 Student Startup Credit Grant. They provision dedicated NVIDIA A100/H100 GPU clusters on Vultr for AI model training, autonomous agents, and SaaS market scale.',
      stack: ['NVIDIA HGX / A100 / H100', 'vLLM & Ray Serve', 'PyTorch Distributed', 'Venture Incubation', 'SOC2 Compliance', 'VC Demo Days'],
      highlight: 'Transforming college capstones into venture-backed tech startups with up to $25k in dedicated Vultr credits.',
      terminalCode: [
        { type: 'command', text: 'nvidia-smi --query-gpu=name,memory.total,utilization.gpu' },
        { type: 'response', text: 'GPU 0: NVIDIA A100-SXM4-80GB | Memory: 81920 MiB | Util: 98%' },
        { type: 'response', text: 'GPU 1: NVIDIA A100-SXM4-80GB | Memory: 81920 MiB | Util: 97%' },
        { type: 'command', text: 'startup-grant-status --org polaris-vcs' },
        { type: 'gold', text: 'Grant Status: ACTIVE (Funded via Vultr $800k Startup Pool)' },
        { type: 'green', text: 'Available Venture Credits: $24,850 USD | Tier: Seed Accelerator' }
      ],
      metrics: [
        { val: '$800K', lbl: 'Startup Grant Pool' },
        { val: 'HGX/A100', lbl: 'Dedicated GPU Pods' },
        { val: '100%', lbl: 'Founder Equity' }
      ]
    }
  ];

  const current = curriculumYears.find(c => c.year === activeYear);

  return (
    <section className="py-24 relative z-10" id="curriculum">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-[#ffcc3f] uppercase mb-3 inline-block">
            PEDAGOGICAL EXCELLENCE • AUGUST 2026 LAUNCH
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            4-Year Compounding Cloud Deployment Module
          </h2>
          <p className="text-zinc-400 text-base md:text-lg font-normal">
            Integrated natively into the Polaris undergraduate curriculum before the August 2026 launch. 
            Complexity builds progressively across all four years, taking students from single VMs to high-scale GPU clusters.
          </p>
        </div>

        {/* Year Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {curriculumYears.map(item => (
            <button
              key={item.year}
              onClick={() => setActiveYear(item.year)}
              className={`p-4 rounded-xl text-left border transition-all duration-200 ${
                activeYear === item.year
                  ? 'bg-zinc-900 border-[#ffcc3f] shadow-[0_0_20px_rgba(255,204,63,0.15)] translate-y-[-2px]'
                  : 'bg-zinc-950/80 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/40'
              }`}
            >
              <div className={`text-xs font-mono font-semibold tracking-wider mb-1 ${
                activeYear === item.year ? 'text-[#ffcc3f]' : 'text-zinc-500'
              }`}>
                YEAR 0{item.year}
              </div>
              <div className="text-sm font-semibold text-white truncate">
                {item.year === 1 && 'Linux & Containers'}
                {item.year === 2 && 'Kubernetes (VKE)'}
                {item.year === 3 && 'Edge Systems & OJT'}
                {item.year === 4 && 'Cloud GPUs & Startups'}
              </div>
            </button>
          ))}
        </div>

        {/* Active Year Detail Panel */}
        <div className="rounded-3xl bg-zinc-950 border border-zinc-800 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Theory & Stack */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-semibold tracking-widest text-[#ffcc3f] uppercase px-3 py-1 rounded-full bg-[#ffcc3f]/10 border border-[#ffcc3f]/30">
                {current.badge}
              </span>

              <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                {current.title}
              </h3>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-normal">
                {current.desc}
              </p>

              {/* Stack Tags */}
              <div>
                <span className="block text-xs font-mono font-semibold tracking-wider text-zinc-500 mb-3 uppercase">
                  INTEGRATED VULTR TECH STACK:
                </span>
                <div className="flex flex-wrap gap-2">
                  {current.stack.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 hover:border-[#ffcc3f] hover:text-[#ffcc3f] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlight Quote */}
              <div className="p-4 rounded-xl bg-zinc-900/60 border-l-4 border-[#ffcc3f] text-sm text-zinc-300 italic font-normal">
                “{current.highlight}”
              </div>
            </div>

            {/* Right Column: Simulated Terminal & KPIs */}
            <div className="lg:col-span-6 space-y-4">
              {/* Terminal Window */}
              <div className="rounded-2xl bg-[#09090b] border border-zinc-800 overflow-hidden shadow-2xl">
                {/* Title Bar */}
                <div className="bg-zinc-900 px-4 py-2.5 flex items-center justify-between border-b border-zinc-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                    <span className="text-xs font-mono text-zinc-500 ml-2">
                      polaris-cloud@vultr-node-y{current.year}:~
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#ffcc3f] tracking-wider uppercase font-semibold">
                    VULTR CLI V3.4
                  </span>
                </div>

                {/* Body */}
                <div className="p-5 font-mono text-xs space-y-2 leading-relaxed overflow-x-auto min-h-[220px]">
                  {current.terminalCode.map((line, i) => (
                    <div key={i} className="flex items-start gap-2">
                      {line.type === 'command' && (
                        <>
                          <span className="text-[#ffcc3f] font-semibold select-none">$</span>
                          <span className="text-white font-normal">{line.text}</span>
                        </>
                      )}
                      {line.type === 'response' && (
                        <span className="text-zinc-400 pl-4 font-normal">{line.text}</span>
                      )}
                      {line.type === 'gold' && (
                        <span className="text-[#ffcc3f] pl-4 font-medium">{line.text}</span>
                      )}
                      {line.type === 'green' && (
                        <span className="text-emerald-400 pl-4 font-medium">{line.text}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Year Metrics */}
              <div className="grid grid-cols-3 gap-3">
                {current.metrics.map((m, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-center">
                    <div className="text-lg sm:text-xl font-semibold font-mono text-white mb-0.5">
                      {m.val}
                    </div>
                    <div className="text-[11px] text-zinc-400 font-normal">
                      {m.lbl}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
