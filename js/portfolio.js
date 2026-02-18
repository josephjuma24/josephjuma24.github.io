/**
 * portfolio.js — Shared JS for all pages
 * Handles: navbar scroll, mobile menu, IntersectionObserver fade-ins,
 * skill bar animations, accordion expand/collapse, modals, filter buttons,
 * GitHub widget, contact form, contribution graph, typewriter effect.
 */

/* ── Utility ────────────────────────────────────────────────── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ── Navbar: scroll shadow + active link ────────────────────── */
function initNavbar() {
  const navbar = $('.navbar');
  if (!navbar) return;

  // Shadow on scroll
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 12);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mark active link based on current page filename
  const page = location.pathname.split('/').pop() || 'index.html';
  $$('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

/* ── Mobile menu toggle ─────────────────────────────────────── */
function initMobileMenu() {
  const toggle = $('.nav-toggle');
  const menu   = $('.mobile-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    // Animate hamburger → X
    const bars = $$('span', toggle);
    if (open) {
      bars[0].style.cssText = 'transform: rotate(45deg) translate(5px, 5px)';
      bars[1].style.cssText = 'opacity: 0';
      bars[2].style.cssText = 'transform: rotate(-45deg) translate(5px, -5px)';
    } else {
      bars.forEach(b => b.style.cssText = '');
    }
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('open');
      $$('span', toggle).forEach(b => b.style.cssText = '');
    }
  });
}

/* ── Intersection Observer: fade-up reveals ─────────────────── */
function initFadeUps() {
  const items = $$('.fade-up');
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // fire once
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  items.forEach(el => observer.observe(el));
}

/* ── Hero card: skill bars animate when card enters view ─────── */
function initSkillBars() {
  const card = $('.hero-card');
  if (!card) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) card.classList.add('in-view');
    },
    { threshold: 0.4 }
  );
  observer.observe(card);
}

/* ── Typewriter effect for hero role line ──────────────────── */
function initTypewriter() {
  const el = $('#typewriter');
  if (!el) return;

  const roles = [
    'AI Researcher & Engineer',
    'MLOps Architect',
    'Cloud Infrastructure Lead',
    'DevOps Innovator',
    'Research Pipeline Builder',
  ];
  let ri = 0, ci = 0, deleting = false;

  function tick() {
    const current = roles[ri];
    if (!deleting) {
      el.textContent = current.slice(0, ci + 1);
      ci++;
      if (ci === current.length) {
        deleting = true;
        setTimeout(tick, 1800); // pause before deleting
        return;
      }
    } else {
      el.textContent = current.slice(0, ci - 1);
      ci--;
      if (ci === 0) {
        deleting = false;
        ri = (ri + 1) % roles.length;
      }
    }
    setTimeout(tick, deleting ? 45 : 80);
  }
  tick();
}

/* ── Experience accordion (expand/collapse) ─────────────────── */
function initAccordions() {
  $$('.exp-toggle').forEach(btn => {
    const card = btn.closest('.exp-card');
    const body = $('.exp-body', card);
    if (!body) return;

    // Set initial collapsed height
    body.style.maxHeight = '0px';
    body.style.overflow  = 'hidden';
    btn.textContent = 'View details ↓';

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const expanded = body.style.maxHeight !== '0px';
      if (expanded) {
        body.style.maxHeight = '0px';
        btn.textContent = 'View details ↓';
      } else {
        body.style.maxHeight = body.scrollHeight + 'px';
        btn.textContent = 'Collapse ↑';
      }
    });
  });
}

/* ── Project modals ─────────────────────────────────────────── */
function initModals() {
  const overlay = $('#modal-overlay');
  if (!overlay) return;

  // Open modal
  $$('[data-modal]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const id  = trigger.getAttribute('data-modal');
      const tpl = $(`#modal-${id}`);
      if (!tpl) return;

      const content = tpl.content.cloneNode(true);
      const body    = $('.modal-body', overlay);
      const header  = $('.modal-header', overlay);

      // Replace content (keep close btn)
      while (body.firstChild) body.removeChild(body.firstChild);
      body.appendChild(content);

      // Set modal title
      const titleEl = $('.modal-title', header);
      if (titleEl) titleEl.textContent = trigger.getAttribute('data-title') || '';

      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close
  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  $$('.modal-close, #modal-overlay').forEach(el => {
    el.addEventListener('click', e => {
      if (e.target === el) closeModal();
    });
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

/* ── Project filter ─────────────────────────────────────────── */
function initProjectFilter() {
  const btns  = $$('.filter-btn');
  const cards = $$('.project-card');
  if (!btns.length) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      cards.forEach(card => {
        const tags = card.getAttribute('data-tags') || '';
        const show = filter === 'all' || tags.includes(filter);
        // Smooth show/hide via opacity + height
        card.style.transition = 'opacity 0.3s, transform 0.3s';
        card.style.opacity = show ? '1' : '0.25';
        card.style.pointerEvents = show ? '' : 'none';
        card.style.transform = show ? '' : 'scale(0.97)';
      });
    });
  });
}

/* ── GitHub contribution graph generator ────────────────────── */
function generateContribGraph() {
  const container = $('.contrib-weeks');
  if (!container) return;

  // Generate 53 weeks × 7 days = 371 fake cells
  const levels = [0, 0, 0, 0, 1, 1, 2, 2, 3, 4]; // weighted distribution
  for (let w = 0; w < 53; w++) {
    for (let d = 0; d < 7; d++) {
      const cell = document.createElement('div');
      cell.className = 'contrib-day';
      // Sparse for first few weeks, denser mid-year
      const activity = (w > 4 && w < 50) ? levels[Math.floor(Math.random() * levels.length)] : 0;
      cell.setAttribute('data-level', activity);
      cell.title = `${activity * 3} contributions`;
      container.appendChild(cell);
    }
  }
}

/* ── Contact form (Formspree-compatible) ─────────────────────── */
function initContactForm() {
  const form    = $('#contact-form');
  const success = $('#form-success');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = $('button[type="submit"]', form);
    btn.textContent = 'Sending…';
    btn.disabled = true;

    // Simulate async submit (replace with real Formspree endpoint)
    await new Promise(r => setTimeout(r, 1200));

    if (success) {
      success.style.display = 'block';
    }
    form.reset();
    btn.textContent = 'Message Sent ✓';
    btn.style.background = 'var(--clr-accent-3)';

    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.disabled = false;
      btn.style.background = '';
    }, 4000);
  });
}

/* ── Smooth counter animation for stats ─────────────────────── */
function initCounters() {
  $$('.stat-number[data-count]').forEach(el => {
    const target  = parseInt(el.getAttribute('data-count'), 10);
    const suffix  = el.getAttribute('data-suffix') || '';
    const duration = 1400;
    let start     = null;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.unobserve(el);

      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        // Ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.5 });

    observer.observe(el);
  });
}

/* ── Init all modules ───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initFadeUps();
  initSkillBars();
  initTypewriter();
  initAccordions();
  initModals();
  initProjectFilter();
  generateContribGraph();
  initContactForm();
  initCounters();
});
