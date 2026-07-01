// Reveal sections (and staggered children) on scroll
const revealEls = document.querySelectorAll('.reveal');

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      // Also trigger any staggered group nested inside this section
      entry.target.querySelectorAll('.stagger').forEach((el) => el.classList.add('is-visible'));
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach((el) => io.observe(el));

// Nav gets a subtle shadow once the page has scrolled
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 8);
  }, { passive: true });
}

// If reduced motion is preferred, show everything immediately
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.reveal, .stagger').forEach((el) => el.classList.add('is-visible'));
}
