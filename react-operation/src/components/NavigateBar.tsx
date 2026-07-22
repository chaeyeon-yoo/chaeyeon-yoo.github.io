import { useReveal } from '../hooks/useReveal';

export function NavigateBar() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <nav className="grid-cell navigate-bar" aria-label="페이지 이동">
      <div
        ref={ref}
        data-reveal
        className={isVisible ? 'contact-links is-visible' : 'contact-links'}
      >
        <a href="/index.html" className="menu-item" aria-label="인덱스로 돌아가기">
          <span aria-hidden="true">← INDEX</span>
        </a>
        <a href="/a11y.html" className="menu-item" aria-label="이전 케이스로 이동">
          <span aria-hidden="true">PREV CASE →</span>
        </a>
      </div>
    </nav>
  );
}
