/**
 * Polaris School of Technology × Vultr Strategic Cloud Partnership
 * Interactive logic for credit allocation, curriculum tabs, FAQ accordion, modals & counters
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initCounters();
  initCurriculumTabs();
  initCalculator();
  initFaqAccordion();
  initModals();
});

/* --------------------------------------------------------------------------
   1. Navigation & Mobile Menu
   -------------------------------------------------------------------------- */
function initNavbar() {
  const header = document.getElementById('navbar');
  const toggle = document.getElementById('mobile-toggle');
  const navLinks = document.querySelectorAll('.nav-item');

  // Sticky navbar shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.style.borderBottomColor = 'rgba(255, 204, 63, 0.2)';
      header.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
      header.style.borderBottomColor = 'var(--border-slate)';
      header.style.background = 'rgba(0, 0, 0, 0.85)';
    }
  });

  // Mobile menu toggle
  if (toggle) {
    toggle.addEventListener('click', () => {
      header.classList.toggle('mobile-open');
    });
  }

  // Close mobile nav on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      header.classList.remove('mobile-open');
    });
  });
}

/* --------------------------------------------------------------------------
   2. Number Counters with Intersection Observer
   -------------------------------------------------------------------------- */
function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  let hasRun = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasRun) {
        hasRun = true;
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-counter'), 10);
          const prefix = counter.getAttribute('data-prefix') || '';
          const suffix = counter.getAttribute('data-suffix') || '';
          animateValue(counter, 0, target, 1600, prefix, suffix);
        });
      }
    });
  }, { threshold: 0.2 });

  const ribbon = document.querySelector('.stats-ribbon');
  if (ribbon) {
    observer.observe(ribbon);
  }
}

function animateValue(obj, start, end, duration, prefix, suffix) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    // Ease-out expo
    const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    const currentVal = Math.floor(easeProgress * (end - start) + start);
    
    if (end >= 1000000) {
      const millions = (currentVal / 1000000).toFixed(1);
      obj.innerHTML = `${prefix}${millions}M+${suffix}`;
    } else {
      obj.innerHTML = `${prefix}${currentVal.toLocaleString()}${suffix}`;
    }

    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      if (end >= 1000000) {
        obj.innerHTML = `${prefix}${(end / 1000000).toFixed(1)}M+${suffix}`;
      } else {
        obj.innerHTML = `${prefix}${end.toLocaleString()}${suffix}`;
      }
    }
  };
  window.requestAnimationFrame(step);
}

/* --------------------------------------------------------------------------
   3. 4-Year Compounding Curriculum Roadmap Tabs
   -------------------------------------------------------------------------- */
function initCurriculumTabs() {
  const tabs = document.querySelectorAll('.curr-tab');
  const panels = document.querySelectorAll('.curr-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetYear = tab.getAttribute('data-year');

      // Update tabs state
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      // Update panels with slide-fade
      panels.forEach(p => {
        p.classList.remove('active');
      });

      const activePanel = document.getElementById(`curr-year-${targetYear}`);
      if (activePanel) {
        activePanel.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   4. Interactive Cloud Credit Estimator & Allocator
   -------------------------------------------------------------------------- */
function initCalculator() {
  const trackSelect = document.getElementById('track-select');
  const cohortSlider = document.getElementById('cohort-slider');
  const cohortDisplay = document.getElementById('cohort-display');
  const cohortSizeGroup = document.getElementById('cohort-size-group');
  const yearButtons = document.querySelectorAll('#year-toggle .pill-btn');
  const infraRadios = document.querySelectorAll('input[name="infra"]');

  const allocatedSum = document.getElementById('allocated-sum');
  const periodTag = document.getElementById('period-tag');
  const allocationRule = document.getElementById('allocation-rule');
  const specCompute = document.getElementById('spec-compute');
  const specNodes = document.getElementById('spec-nodes');
  const specBandwidth = document.getElementById('spec-bandwidth');
  const specPool = document.getElementById('spec-pool');

  let currentYear = 1;

  // Year toggle pills
  yearButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      yearButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentYear = parseInt(btn.getAttribute('data-y'), 10);
      recalculate();
    });
  });

  // Track select listener
  trackSelect.addEventListener('change', () => {
    const track = trackSelect.value;
    if (track === 'startup' || track === 'hackathon') {
      cohortSizeGroup.style.opacity = '0.4';
      cohortSlider.disabled = true;
    } else {
      cohortSizeGroup.style.opacity = '1';
      cohortSlider.disabled = false;
    }
    recalculate();
  });

  // Cohort slider
  cohortSlider.addEventListener('input', () => {
    const count = parseInt(cohortSlider.value, 10);
    cohortDisplay.textContent = count === 1 ? '1 Student' : `${count} Students`;
    recalculate();
  });

  // Radio chips
  infraRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      document.querySelectorAll('.radio-chip').forEach(c => c.classList.remove('active'));
      radio.closest('.radio-chip').classList.add('active');
      recalculate();
    });
  });

  function recalculate() {
    const track = trackSelect.value;
    const count = parseInt(cohortSlider.value, 10);
    const selectedInfra = document.querySelector('input[name="infra"]:checked')?.value || 'vps';

    let totalAllocation = 0;
    let periodText = '/ yr';
    let ruleText = '';
    let poolSource = '';
    let computeText = '';
    let nodesText = '';
    let bandwidthText = '';

    if (track === 'student') {
      // Individual student cap USD 300 per year, max pool $150,000/yr
      const maxPossible = 150000;
      totalAllocation = Math.min(count * 300, maxPossible);
      periodText = count === 1 ? '/ yr (student)' : '/ yr (cohort pool)';
      ruleText = `Capped at USD $300 per student/contract year under Section 1(a). Max pool: $150k/yr.`;
      poolSource = '$150,000 Base Student Credit Pool';

      if (count === 1) {
        computeText = '12 Months Dedicated High-Freq VM (1vCPU, 2GB NVMe)';
        nodesText = '1x Isolated Development Node';
        bandwidthText = '2 TB Global High-Speed Egress';
      } else {
        computeText = `${count}x Full-Year Independent High-Freq VMs`;
        nodesText = `${count * 2}x Multi-Environment Docker Containers`;
        bandwidthText = `${(count * 1.5).toFixed(0)} TB Collective Data Transfer`;
      }
    } else if (track === 'ojt_team') {
      // OJT team cap: 4 students * $300 = $1,200/team + project staging
      const teamStudents = Math.max(count, 4);
      totalAllocation = teamStudents * 300;
      periodText = '/ academic year';
      ruleText = `Disbursed by Polaris for Live OJT client projects & capstones. Subject to Vultr periodic review.`;
      poolSource = '$150,000 Base OJT Academic Pool';
      computeText = 'High-Frequency Multi-Tier Node Cluster (Web + API + Worker)';
      nodesText = '3-Node Vultr Kubernetes (VKE) Cluster';
      bandwidthText = '10 TB Production Egress & DDoS Scrubbing';
    } else if (track === 'startup') {
      // Startup Grant Pool: Up to $800k over 4 years ($200k/yr)
      // Ranges from $5,000 to $25,000
      if (currentYear === 4) {
        totalAllocation = 25000;
      } else if (currentYear === 3) {
        totalAllocation = 15000;
      } else {
        totalAllocation = 8000;
      }
      periodText = 'Venture Grant';
      ruleText = `Funded via $800,000 Student Startup Credit Grant ($200k/yr pool). Section 1(b).`;
      poolSource = '$800,000 Student Startup Grant Pool';
      computeText = selectedInfra === 'gpu' 
        ? 'NVIDIA A100 / L40S Fractional GPU Pods + PyTorch Cluster'
        : 'Enterprise High-Concurrency VKE Cluster';
      nodesText = '8x High-Memory Compute Nodes + Managed HA DB';
      bandwidthText = '25 TB Global Edge CDN Transfer';
    } else if (track === 'hackathon') {
      // Hackathon awards
      totalAllocation = 10000;
      periodText = 'Championship Purse';
      ruleText = `Awarded from the Vultr-sponsored Hackathon & Competition Credit Grant.`;
      poolSource = '$800,000 Startup & Hackathon Reserve';
      computeText = 'Instant Cloud Compute & GPU Acceleration Pods';
      nodesText = '4x Multi-Zone Production Instances';
      bandwidthText = '15 TB High-Velocity Pipeline Transfer';
    }

    // Dynamic adjustment if GPU is picked
    if (selectedInfra === 'gpu' && track !== 'startup') {
      computeText = 'High-Speed CUDA Compute with fractional GPU burst capability';
    }

    // Update UI
    allocatedSum.textContent = totalAllocation.toLocaleString();
    periodTag.textContent = periodText;
    allocationRule.textContent = ruleText;
    specCompute.textContent = computeText;
    specNodes.textContent = nodesText;
    specBandwidth.textContent = bandwidthText;
    specPool.textContent = poolSource;
  }

  // Initial calculation
  recalculate();

  // CTA within calculator
  const btnClaim = document.getElementById('btn-claim-estimate');
  if (btnClaim) {
    btnClaim.addEventListener('click', () => {
      openModal();
    });
  }
}

/* --------------------------------------------------------------------------
   5. FAQ Accordion
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all other items
      faqItems.forEach(other => other.classList.remove('open'));

      // Toggle current item
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   6. Modal Dialogs (Grant & Partner Inquiries)
   -------------------------------------------------------------------------- */
function initModals() {
  const modal = document.getElementById('grant-modal');
  const openBtn = document.getElementById('open-grant-modal');
  const partnerBtn = document.getElementById('btn-open-partner-inquiry');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modal) return;

  function showModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function hideModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (openBtn) openBtn.addEventListener('click', showModal);
  if (partnerBtn) partnerBtn.addEventListener('click', showModal);
  if (closeBtn) closeBtn.addEventListener('click', hideModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      hideModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      hideModal();
    }
  });

  // Make globally available for button calls
  window.openModal = showModal;
}
