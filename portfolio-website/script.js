// Reveal sections on scroll
const revealEls = document.querySelectorAll('.reveal');

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach((el) => io.observe(el));

// If reduced motion is preferred, show everything immediately
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}
