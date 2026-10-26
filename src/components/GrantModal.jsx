import React, { useState, useEffect } from 'react';
import { X, Sparkles, Rocket, CheckCircle2, Download, Trash2, Inbox, ArrowLeft } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function GrantModal({ theme = 'light', isOpen, onClose }) {
  const isLight = theme === 'light';
  const [submitted, setSubmitted] = useState(false);
  const [viewResponses, setViewResponses] = useState(false);
  const [submissions, setSubmissions] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    email: '',
    cohort: 'Year 4 (Venture Incubator)',
    tier: '$25,000 Venture Grant (Bare Metal & High Frequency Compute Clusters)',
    tech: ''
  });

  // Load existing submissions from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('polaris_grant_submissions');
      if (saved) {
        setSubmissions(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Error loading submissions:', e);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newEntry = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      title: formData.title,
      email: formData.email,
      cohort: formData.cohort,
      tier: formData.tier,
      tech: formData.tech
    };

    const updated = [newEntry, ...submissions];
    setSubmissions(updated);
    try {
      localStorage.setItem('polaris_grant_submissions', JSON.stringify(updated));
    } catch (e) {
      console.error('Error saving submission:', e);
    }

    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#ffcc3f', '#007BFC', '#38bdf8']
    });
  };

  const handleClearSubmissions = () => {
    setSubmissions([]);
    localStorage.removeItem('polaris_grant_submissions');
  };

  const handleExportCSV = () => {
    if (submissions.length === 0) return;
    const headers = ['ID', 'Date', 'Startup Title', 'Founder Email', 'Academic Stage', 'Grant Tier', 'Vultr Tech Stack'];
    const rows = submissions.map(s => [
      s.id,
      `"${s.date}"`,
      `"${s.title.replace(/"/g, '""')}"`,
      `"${s.email.replace(/"/g, '""')}"`,
      `"${s.cohort.replace(/"/g, '""')}"`,
      `"${s.tier.replace(/"/g, '""')}"`,
      `"${(s.tech || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `polaris_grant_applications_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setViewResponses(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2.5 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className={`relative w-full max-w-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 shadow-2xl max-h-[92vh] overflow-y-auto border transition-all ${
          isLight 
            ? 'bg-white border-slate-200 shadow-slate-900/20 text-slate-800' 
            : 'bg-zinc-950 border-zinc-800 shadow-black text-zinc-100'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Controls */}
        <div className={`flex items-center justify-between gap-2 mb-5 sm:mb-6 pb-3 sm:pb-4 border-b ${
          isLight ? 'border-slate-200' : 'border-zinc-900'
        }`}>
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => { setViewResponses(false); setSubmitted(false); }}
              className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-mono font-semibold transition-all ${
                !viewResponses 
                  ? 'bg-[#ffcc3f] text-black shadow-sm' 
                  : isLight 
                    ? 'bg-slate-100 text-slate-600 hover:text-slate-900' 
                    : 'bg-zinc-900 text-zinc-400 hover:text-white'
              }`}
            >
              Application Form
            </button>
            <button
              onClick={() => setViewResponses(true)}
              className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-mono font-semibold flex items-center gap-1.5 transition-all ${
                viewResponses 
                  ? 'bg-[#ffcc3f] text-black shadow-sm' 
                  : isLight 
                    ? 'bg-slate-100 text-slate-600 hover:text-slate-900' 
                    : 'bg-zinc-900 text-zinc-400 hover:text-white'
              }`}
            >
              <Inbox className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
              <span>Responses ({submissions.length})</span>
            </button>
          </div>

          <button 
            onClick={handleResetAndClose}
            className={`p-1.5 sm:p-2 rounded-full transition-colors shrink-0 ${
              isLight ? 'text-slate-400 hover:text-slate-700 hover:bg-slate-100' : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* View Mode 1: Admin Responses Table */}
        {viewResponses ? (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className={`text-xl font-bold mb-1 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  Submitted Grant Applications
                </h3>
                <p className={`text-xs ${isLight ? 'text-slate-500' : 'text-zinc-400'}`}>
                  Stored in local browser registry ({submissions.length} total entries)
                </p>
              </div>

              <div className="flex items-center gap-2">
                {submissions.length > 0 && (
                  <>
                    <button
                      onClick={handleExportCSV}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-mono flex items-center gap-1.5 transition-all ${
                        isLight 
                          ? 'bg-white border-slate-200 text-[#007BFC] hover:border-[#007BFC] hover:bg-[#007BFC]/5' 
                          : 'bg-zinc-900 border-zinc-800 text-[#ffcc3f] hover:border-[#ffcc3f]'
                      }`}
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Export CSV</span>
                    </button>
                    <button
                      onClick={handleClearSubmissions}
                      className={`p-1.5 rounded-lg border transition-colors ${
                        isLight 
                          ? 'bg-white border-slate-200 text-slate-400 hover:text-red-600' 
                          : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-red-400'
                      }`}
                      title="Clear All"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>
            </div>

            {submissions.length === 0 ? (
              <div className={`text-center py-12 rounded-2xl border p-6 ${
                isLight ? 'bg-slate-50 border-slate-200' : 'bg-zinc-900/40 border-zinc-800/60'
              }`}>
                <Inbox className={`w-10 h-10 mx-auto mb-3 ${isLight ? 'text-slate-400' : 'text-zinc-600'}`} />
                <p className={`text-sm font-medium ${isLight ? 'text-slate-700' : 'text-zinc-400'}`}>No form submissions received yet.</p>
                <p className={`text-xs mt-1 ${isLight ? 'text-slate-500' : 'text-zinc-500'}`}>Submit the application form to test dynamic response recording.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {submissions.map((sub) => (
                  <div 
                    key={sub.id} 
                    className={`p-4 rounded-xl border space-y-2 text-xs font-mono ${
                      isLight 
                        ? 'bg-slate-50 border-slate-200 text-slate-800' 
                        : 'bg-zinc-900/70 border-zinc-800 text-zinc-200'
                    }`}
                  >
                    <div className={`flex items-center justify-between pb-2 border-b ${
                      isLight ? 'border-slate-200 text-slate-500' : 'border-zinc-800/80 text-zinc-400'
                    }`}>
                      <span className={`font-bold text-sm ${isLight ? 'text-slate-900' : 'text-white'}`}>{sub.title}</span>
                      <span className="text-[11px]">{sub.date}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div><strong className={isLight ? 'text-slate-500' : 'text-zinc-500'}>Email:</strong> {sub.email}</div>
                      <div><strong className={isLight ? 'text-slate-500' : 'text-zinc-500'}>Cohort:</strong> {sub.cohort}</div>
                      <div><strong className={isLight ? 'text-slate-500' : 'text-zinc-500'}>Tier:</strong> {sub.tier}</div>
                      <div><strong className={isLight ? 'text-slate-500' : 'text-zinc-500'}>Services:</strong> {sub.tech || 'N/A'}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : !submitted ? (
          /* View Mode 2: Submission Form */
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono font-semibold tracking-widest text-[#007BFC] bg-[#007BFC]/10 border border-[#007BFC]/30 uppercase px-3 py-1 rounded-full">
                VENTURE GRANT APPLICATION
              </span>
            </div>

            <h3 className={`text-2xl font-bold mb-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>
              Apply for Vultr Startup Grant
            </h3>
            <p className={`text-sm mb-6 leading-relaxed font-normal ${isLight ? 'text-slate-600' : 'text-zinc-400'}`}>
              Drawn from the dedicated <strong className={`font-medium ${isLight ? 'text-slate-900' : 'text-white'}`}>$800,000 four-year credit grant</strong> committed 
              by Vultr ($200,000/year) for Polaris student startups and hackathon winners.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className={`block text-xs font-mono font-semibold uppercase mb-1.5 ${
                  isLight ? 'text-slate-600' : 'text-zinc-400'
                }`}>
                  STARTUP / VENTURE TITLE
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Distributed Vector Store / HyperScale Search"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-colors border ${
                    isLight 
                      ? 'bg-slate-50 border-slate-200 text-slate-900 focus:border-[#007BFC] focus:bg-white' 
                      : 'bg-zinc-900 border-zinc-800 text-white focus:border-[#ffcc3f]'
                  }`}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs font-mono font-semibold uppercase mb-1.5 ${
                    isLight ? 'text-slate-600' : 'text-zinc-400'
                  }`}>
                    FOUNDER ACADEMIC EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="founder@student.polaris.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-colors border ${
                      isLight 
                        ? 'bg-slate-50 border-slate-200 text-slate-900 focus:border-[#007BFC] focus:bg-white' 
                        : 'bg-zinc-900 border-zinc-800 text-white focus:border-[#ffcc3f]'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-mono font-semibold uppercase mb-1.5 ${
                    isLight ? 'text-slate-600' : 'text-zinc-400'
                  }`}>
                    ACADEMIC STAGE
                  </label>
                  <select
                    value={formData.cohort}
                    onChange={(e) => setFormData({ ...formData, cohort: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-colors border ${
                      isLight 
                        ? 'bg-slate-50 border-slate-200 text-slate-900 focus:border-[#007BFC] focus:bg-white' 
                        : 'bg-zinc-900 border-zinc-800 text-white focus:border-[#ffcc3f]'
                    }`}
                  >
                    <option>Year 3 (OJT / Pre-Incubator)</option>
                    <option>Year 4 (Venture Incubator)</option>
                    <option>Polaris Hackathon Championship Winner</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={`block text-xs font-mono font-semibold uppercase mb-1.5 ${
                  isLight ? 'text-slate-600' : 'text-zinc-400'
                }`}>
                  REQUESTED GRANT TIER
                </label>
                <select
                  value={formData.tier}
                  onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-colors border ${
                    isLight 
                      ? 'bg-slate-50 border-slate-200 text-slate-900 focus:border-[#007BFC] focus:bg-white' 
                      : 'bg-zinc-900 border-zinc-800 text-white focus:border-[#ffcc3f]'
                  }`}
                >
                  <option>$25,000 Venture Grant (Bare Metal & High Frequency Compute Clusters)</option>
                  <option>$15,000 Scale Tier (High-Concurrency Kubernetes / DBs)</option>
                  <option>$8,000 Seed MVP Tier (Microservices & Edge)</option>
                  <option>$5,000 Hackathon Innovation Prize</option>
                </select>
              </div>

              <div>
                <label className={`block text-xs font-mono font-semibold uppercase mb-1.5 ${
                  isLight ? 'text-slate-600' : 'text-zinc-400'
                }`}>
                  PRIMARY VULTR SERVICES INTENDED
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. Vultr Kubernetes Engine, Bare Metal Compute, Managed PostgreSQL, Global Object Storage..."
                  value={formData.tech}
                  onChange={(e) => setFormData({ ...formData, tech: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-colors border ${
                    isLight 
                      ? 'bg-slate-50 border-slate-200 text-slate-900 focus:border-[#007BFC] focus:bg-white' 
                      : 'bg-zinc-900 border-zinc-800 text-white focus:border-[#ffcc3f]'
                  }`}
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="btn btn-primary w-full text-center flex items-center justify-center gap-2"
                >
                  <Rocket className="w-4 h-4 text-black" />
                  <span>Submit Grant Proposal</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* View Mode 3: Submission Confirmation */
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-500 mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className={`text-2xl font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>Application Received & Recorded!</h3>
            <p className={`text-sm max-w-md mx-auto leading-relaxed font-normal ${isLight ? 'text-slate-600' : 'text-zinc-300'}`}>
              Your startup grant request for <strong className="text-[#007BFC]">{formData.title}</strong> has been logged 
              into the Polaris Incubator & Vultr partnership evaluation pipeline.
            </p>

            <div className={`p-4 rounded-xl border text-xs font-mono max-w-sm mx-auto ${
              isLight ? 'bg-slate-50 border-slate-200 text-slate-600' : 'bg-zinc-900 border-zinc-800 text-zinc-400'
            }`}>
              <div>Review Cadence: 3-5 Business Days</div>
              <div className="text-[#007BFC] font-semibold mt-1">Status: SAVED IN RESPONSES INBOX</div>
            </div>

            <div className="flex justify-center gap-3">
              <button
                onClick={() => setViewResponses(true)}
                className="btn btn-secondary flex items-center gap-2 !py-2.5 !px-5 text-xs"
              >
                <Inbox className="w-4 h-4 text-[#007BFC]" />
                <span>View All Received Responses</span>
              </button>
              <button
                onClick={handleResetAndClose}
                className="btn btn-secondary-outline !py-2.5 !px-5 text-xs"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
