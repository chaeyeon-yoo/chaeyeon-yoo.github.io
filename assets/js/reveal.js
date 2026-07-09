// ============================================
// REVEAL ON SCROLL
// [data-reveal] 요소가 스크롤 진입 시 등장 (prefers-reduced-motion 시 즉시 노출)
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const revealTargets = document.querySelectorAll('[data-reveal]');

  if (!revealTargets.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    revealTargets.forEach((el) => {
      el.style.transition = 'none';
      el.classList.add('is-visible');
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${i * 80}ms`;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  revealTargets.forEach((el) => observer.observe(el));
});

// ============================================
// COUNT UP STATS
// .stat-value가 숫자로 시작하면(10+, 5회, 100% 등) 스크롤 진입 시 0부터 카운트업
// WCAG, 2Y 10M 처럼 숫자로 딱 떨어지지 않는 값은 그대로 둠
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const statValues = document.querySelectorAll('.stat-value');

  if (!statValues.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const animateCount = (el, target, suffix, duration = 900) => {
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = `${Math.floor(progress * target)}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = `${target}${suffix}`;
      }
    };

    requestAnimationFrame(step);
  };

  const targets = [];

  statValues.forEach((el) => {
    const match = el.textContent.trim().match(/^(\d+)(\D*)$/);
    if (!match || prefersReducedMotion) return;

    const target = parseInt(match[1], 10);
    const suffix = match[2];

    el.textContent = `0${suffix}`;
    targets.push({ el, target, suffix });
  });

  if (!targets.length) return;

  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const matched = targets.find((t) => t.el === entry.target);
      if (matched) {
        animateCount(matched.el, matched.target, matched.suffix);
      }
      statObserver.unobserve(entry.target);
    });
  }, { threshold: 0.4 });

  targets.forEach(({ el }) => statObserver.observe(el));
});