import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What are the Base Student Cloud Credits and who is eligible?',
      a: 'Under Section 1(a), Vultr US will provide up to USD 150,000 per year in Base Student Cloud Credits. These credits are disbursed directly by Polaris to enrolled students for On-the-Job Training (OJT) and related academic/project work. Each student is capped at USD 300 per contract year, subject to Vultr US periodic review.'
    },
    {
      q: 'How does the $800,000 Student Startup Credit Grant work?',
      a: 'Under Section 1(b), Vultr US has committed a Student Startup Credit Grant pool of up to USD 800,000 over four (4) years (USD 200,000 per year). Eligible student-led startups, research spin-outs, and Polaris hackathon championship teams can apply for venture infrastructure grants ranging from $5,000 to $25,000+.'
    },
    {
      q: 'What specific contributions will Polaris provide to Vultr US?',
      a: 'Polaris will provide Vultr US with fair and accurate reporting on credit adoption and student progress, include Vultr US in Polaris marketing campaigns, and integrate Vultr as the native cloud deployment environment within its curriculum before the August 2026 programme launch, developing a foundational cloud deployment module that compounds in complexity across all four years.'
    },
    {
      q: 'When does the curriculum integration go live?',
      a: 'The foundational cloud deployment modules will be finalized and deployed into the official curriculum prior to the official August 2026 programme launch, ensuring the incoming 2026 freshman cohort starts deploying on Vultr immediately.'
    },
    {
      q: 'Can students access GPUs for machine learning and AI?',
      a: 'Yes. While Year 1 and 2 focus on Linux compute and Kubernetes, students in Year 3 (OJT) and Year 4 (Venture & AI Track) have direct access to NVIDIA Cloud GPU clusters on Vultr, funded through their base allowances or the $800,000 startup grant pool.'
    }
  ];

  return (
    <section className="py-24 relative z-10" id="faq">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-[#ffcc3f] uppercase mb-3 inline-block">
            PARTNERSHIP CHARTER FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-400 text-base md:text-lg font-normal">
            Key policies and procedural guidelines for students, faculty, and student founders.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-zinc-900 border-[#ffcc3f]' 
                    : 'bg-zinc-950 border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-semibold text-base sm:text-lg text-white">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-zinc-800/80 flex items-center justify-center text-[#ffcc3f] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#ffcc3f]/20' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/60 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
