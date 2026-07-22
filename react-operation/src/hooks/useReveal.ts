import { useEffect, useRef, useState } from 'react';

// reveal.js의 querySelectorAll + IntersectionObserver를 요소 단위 훅으로 재구성한 버전.
// 페이지 전체를 한 번에 관찰하던 원본과 달리 컴포넌트마다 각자 관찰하므로,
// entries 순서 기반 스태거 딜레이(i * 80ms)는 재현하지 않음 (의도적 단순화).
export function useReveal<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
