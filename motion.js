// motion.js
// Simple scroll-triggered animations inspired by Kanazawa gold-leaf craft.
// Elements with the class `.animate` will fade and slide in when they enter the viewport.

(function () {
  const revealClass = 'show';
  const targets = document.querySelectorAll('.animate');

  if (!('IntersectionObserver' in window) || targets.length === 0) {
    // Fallback – just show all
    targets.forEach(el => el.classList.add(revealClass));
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(revealClass);
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  targets.forEach(el => observer.observe(el));
})();
