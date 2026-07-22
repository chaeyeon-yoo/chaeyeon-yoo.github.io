import { useTopButton } from '../hooks/useTopButton';

export function TopButton() {
  const { isVisible, scrollToTop } = useTopButton();

  return (
    <button
      type="button"
      className={isVisible ? 'top-btn is-visible' : 'top-btn'}
      aria-label="맨 위로 이동"
      onClick={scrollToTop}
    >
      ↑
    </button>
  );
}
