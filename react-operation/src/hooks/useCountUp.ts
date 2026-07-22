import { useEffect, useRef, useState } from 'react';

// reveal.js의 stat-value 카운트업 로직을 그대로 가져온 훅.
// "2Y 10M"처럼 숫자로 딱 떨어지지 않는 값은 정규식이 매치되지 않아 애니메이션 없이 그대로 표시된다.
export function useCountUp(rawValue: string, duration = 900) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(rawValue);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = rawValue.trim().match(/^(\d+)(\D*)$/);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!match || prefersReducedMotion) {
      setDisplay(rawValue);
      return;
    }

    const target = parseInt(match[1], 10);
    const suffix = match[2];
    setDisplay(`0${suffix}`);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(el);

        const start = performance.now();
        const step = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          setDisplay(`${Math.floor(progress * target)}${suffix}`);

          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            setDisplay(`${target}${suffix}`);
          }
        };

        requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rawValue, duration]);

  return { ref, display };
}
