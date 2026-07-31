import { useEffect, useState } from 'react';

export function useTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 이동 직후 버튼은 visibility: hidden이 되므로, 포커스를 본문 시작점으로 넘긴다
  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    document.getElementById('main-content')?.focus();
  };

  return { isVisible, scrollToTop };
}
