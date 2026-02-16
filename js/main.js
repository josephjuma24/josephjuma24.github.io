  // ============================================
  // CONFIGURATION — Update these values
  // ============================================
  const GITHUB_USERNAME = 'josephjuma24'; // ← REPLACE with actual username

  // ============================================
  // MOBILE NAV TOGGLE
  // ============================================
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close mobile nav on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  // ============================================
  // ACTIVE NAV HIGHLIGHTING
  // ============================================
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a[href^="#"]');

  function updateActiveNav() {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navItems.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) link.classList.add('active');
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });

  // ============================================
  // SCROLL REVEAL
  // ============================================
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));

  // ============================================
  // EXPERIENCE TOGGLE
  // ============================================
  function toggleExp(bodyId, btn) {
    const body = document.getElementById(bodyId);
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      body.classList.remove('expanded');
      body.classList.add('collapsed');
      btn.innerHTML = '<i class="fas fa-chevron-down"></i> Expand';
      btn.setAttribute('aria-expanded', 'false');
    } else {
      body.classList.remove('collapsed');
      body.classList.add('expanded');
      btn.innerHTML = '<i class="fas fa-chevron-up"></i> Collapse';
      btn.setAttribute('aria-expanded', 'true');
    }
  }

  // ============================================
  // PROJECT MODALS
  // ============================================
  function openModal(id) {
    const overlay = document.getElementById(id);
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(id) {
    document.getElementById(id).classList.remove('active');
    document.body.style.overflow = '';
  }

  // Close modal on overlay click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(m => {
        m.classList.remove('active');
        document.body.style.overflow = '';
      });
    }
  });

  // ============================================
  // GITHUB CALENDAR
  // ============================================
  function initGitHubCalendar() {
    const username = josephjuma24;
    const fallback = document.getElementById('calendar-fallback');

    if (username === 'josephjuma24') {
      if (fallback) fallback.innerHTML = `
        <i class="fab fa-github"></i>
        <span style="color: var(--amber)">📌 Setup Required</span>
        <span>Replace <code style="color:var(--teal)">josephjuma24</code> in the script config with your actual GitHub username to display your contribution graph.</span>
      `;
      return;
    }

    if (fallback) fallback.style.display = 'none';

    try {
      GitHubCalendar('#github-calendar-container', username, {
        responsive: true,
        tooltips: true,
      });
      document.getElementById('gh-username-badge').textContent = '@' + username;
    } catch (err) {
      // Fallback to SVG image service
      const container = document.getElementById('github-calendar-container');
      container.innerHTML = `
        <img
          src="https://ghchart.rshah.org/${username}"
          alt="GitHub Contribution Graph for ${username}"
          style="max-width: 100%; border-radius: 4px; filter: invert(1) hue-rotate(135deg) saturate(0.7);"
          onerror="this.parentElement.innerHTML='<div class=calendar-placeholder><i class=\\'fab fa-github\\'></i><span>Could not load contribution graph</span></div>'"
        />
      `;
    }
  }

  // ============================================
  // GITHUB REPOS
  // ============================================
  async function fetchRepos() {
    const grid = document.getElementById('repos-grid');
    const username = josephjuma24;

    if (username === 'josephjuma24') {
      grid.innerHTML = `
        <div class="repo-loading">
          <i class="fas fa-info-circle" style="color: var(--amber); margin-right: 0.5rem;"></i>
          Update <code style="color: var(--teal)">josephjuma24</code> in the script to load real repositories.
        </div>
      `;
      return;
    }

    try {
      const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6&type=owner`);
      if (!res.ok) throw new Error('API error');
      const repos = await res.json();

      const langColors = {
        'Python': '#3776AB', 'JavaScript': '#F7DF1E', 'TypeScript': '#3178C6',
        'Shell': '#89E051', 'HTML': '#E34C26', 'CSS': '#563D7C',
        'Jupyter Notebook': '#DA5B0B', 'R': '#276DC3', 'Go': '#00ADD8',
      };

      if (!repos.length) {
        grid.innerHTML = '<div class="repo-loading">No public repositories found.</div>';
        return;
      }

      grid.innerHTML = repos.map(repo => `
        <a href="${repo.html_url}" target="_blank" rel="noopener" class="repo-card" style="text-decoration:none">
          <div class="repo-name"><i class="fas fa-code-branch" style="opacity:0.6"></i> ${repo.name}</div>
          <div class="repo-desc">${repo.description || 'No description provided.'}</div>
          <div class="repo-meta">
            ${repo.language ? `
              <div class="repo-lang">
                <span class="repo-lang-dot" style="background: ${langColors[repo.language] || '#8B949E'}"></span>
                ${repo.language}
              </div>
            ` : ''}
            <div class="repo-stat"><i class="fas fa-star" style="color: var(--amber); font-size: 0.7rem;"></i> ${repo.stargazers_count}</div>

          </div>
        </a>
      `).join('');

    } catch (err) {
      grid.innerHTML = `
        <div class="repo-loading">
          <i class="fas fa-exclamation-triangle" style="color: var(--amber); margin-right: 0.5rem;"></i>
          Could not load repositories. <a href="https://github.com/${username}" target="_blank" style="color: var(--teal);">View on GitHub →</a>
        </div>
      `;
    }
  }

  // ============================================
  // CONTACT FORM
  // ============================================
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
      btn.style.background = 'var(--teal)';
      btn.disabled = true;
      setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        btn.style.background = '';
        btn.disabled = false;
        contactForm.reset();
      }, 3000);
    });
  }

  // ============================================
  // INIT
  // ============================================
  document.addEventListener('DOMContentLoaded', () => {
    initGitHubCalendar();
    fetchRepos();
    updateActiveNav();
  });
