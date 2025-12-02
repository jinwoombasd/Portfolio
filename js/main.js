// Mobile nav toggle
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.style.display = expanded ? 'none' : 'flex';
  });

  // Collapse nav after clicking a link (mobile)
  nav.addEventListener('click', (e) => {
    const t = e.target;
    if (t && t.matches('a')) {
      // Only collapse for internal anchor links on mobile
      if (t.getAttribute('href')?.startsWith('#')) {
        toggle.setAttribute('aria-expanded', 'false');
        if (window.matchMedia('(max-width: 767px)').matches) {
          nav.style.display = 'none';
        }
      }
      // External page links (blog, artistic-statement) keep current behavior
    }
  });
})();

// Update year
(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear().toString();
})();

// Prevent autoplay and ensure only one audio plays at once
(function () {
  const audios = Array.from(document.querySelectorAll('audio'));
  audios.forEach((a) => a.addEventListener('play', () => {
    audios.forEach((b) => { if (b !== a) b.pause(); });
  }));
})();

