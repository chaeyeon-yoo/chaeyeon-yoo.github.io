import { useReveal } from '../hooks/useReveal';

export function Hero() {
  const title = useReveal<HTMLHeadingElement>();
  const meta = useReveal<HTMLDListElement>();

  return (
    <>
      <section className="grid-cell case-hero-area">
        <h1
          ref={title.ref}
          data-reveal
          className={title.isVisible ? 'case-title is-visible' : 'case-title'}
          aria-label="운영 프로젝트 작업 사례"
        >
          <span aria-hidden="true">
            운영 프로젝트
            <br />
            작업 사례
          </span>
        </h1>
      </section>
      <div className="grid-cell case-hero-meta">
        <dl
          ref={meta.ref}
          data-reveal
          className={meta.isVisible ? 'meta-list is-visible' : 'meta-list'}
        >
          <div className="meta-item">
            <dt>CLIENT</dt>
            <dd>SK텔레콤 T world</dd>
          </div>
          <div className="meta-item">
            <dt>PERIOD</dt>
            <dd>2년 10개월</dd>
          </div>
          <div className="meta-item">
            <dt>ROLE</dt>
            <dd>Web Publisher</dd>
          </div>
          <div className="meta-item">
            <dt>SKILL</dt>
            <dd>HTML / CSS / JS / TSX</dd>
          </div>
        </dl>
      </div>
    </>
  );
}
