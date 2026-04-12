/* ============================================================
   main.js — Oliver Simmonds personal website
   ============================================================ */

// Apply saved/system theme before paint to avoid flash
(function () {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.setAttribute(
    'data-theme',
    saved || (prefersDark ? 'dark' : 'light')
  );
})();

document.addEventListener('DOMContentLoaded', function () {

  // ----------------------------------------------------------
  // Theme toggle
  // ----------------------------------------------------------
  const themeToggle = document.getElementById('theme-toggle');

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

  // ----------------------------------------------------------
  // Bio "More / Less" toggle (home page only)
  // ----------------------------------------------------------
  const moreBtn  = document.getElementById('more-toggle');
  const bioExtra = document.getElementById('bio-extra');

  if (moreBtn && bioExtra) {
    moreBtn.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      const next = !expanded;

      bioExtra.classList.toggle('visible', next);
      this.setAttribute('aria-expanded', String(next));
      this.querySelector('.more-label').textContent = next ? 'Less' : 'More';
    });
  }

  // ----------------------------------------------------------
  // Header auto-hide on scroll (shows again 2s after stop)
  // ----------------------------------------------------------
  const header = document.getElementById('site-header');

  if (header) {
    let lastScrollY = window.scrollY;
    let ticking    = false;
    let revealTimer = null;

    window.addEventListener('scroll', function () {
      if (ticking) return;

      window.requestAnimationFrame(function () {
        const currentY = window.scrollY;

        if (currentY > lastScrollY && currentY > 80) {
          header.classList.add('hidden');
        } else {
          header.classList.remove('hidden');
        }

        lastScrollY = currentY;
        ticking = false;

        clearTimeout(revealTimer);
        revealTimer = setTimeout(function () {
          header.classList.remove('hidden');
        }, 2000);
      });

      ticking = true;
    }, { passive: true });
  }

});
