import { useReveal } from '../hooks/useReveal';
import { Stats } from './Stats';

export function Overview() {
  const label = useReveal<HTMLDivElement>();
  const subTitle = useReveal<HTMLHeadingElement>();
  const bio = useReveal<HTMLDivElement>();
  const summary = useReveal<HTMLDivElement>();

  return (
    <>
      <section className="grid-cell section-label">
        <div
          ref={label.ref}
          data-reveal
          className={label.isVisible ? 'label-content is-visible' : 'label-content'}
        >
          <h2>OVERVIEW</h2>
        </div>
      </section>
      <div className="grid-cell section-content">
        <h3
          ref={subTitle.ref}
          data-reveal
          className={subTitle.isVisible ? 'sub-title is-visible' : 'sub-title'}
          aria-label="대형 통신사 단일 서비스를 2년 10개월간 장기 운영하며 쌓은 퍼블리싱 사례입니다."
        >
          <span aria-hidden="true">
            대형 통신사 단일 서비스를 2년 10개월간
            <br />
            장기 운영하며 쌓은 퍼블리싱 사례입니다.
          </span>
        </h3>
        <div
          ref={bio.ref}
          data-reveal
          className={bio.isVisible ? 'bio-columns is-visible' : 'bio-columns'}
        >
          <p>
            SK텔레콤 T world 서비스 운영에서 실제 담당했던 퍼블리싱 작업 사례를 정리했습니다. 기획서
            기반 마크업·CSS·JS 구현부터 긴급 이슈 대응까지, 실무 환경에서의 협업 프로세스와 함께
            기록합니다.
          </p>
          <p>
            아래 3건은 운영 기간 중 규모와 성격이 각기 다른 작업을 선별했습니다. 마스킹 정책 변경처럼
            로직이 복잡한 케이스, 전면 개편처럼 물량이 많은 케이스, 긴급 이슈처럼 속도가 중요한
            케이스를 포함했습니다.
          </p>
        </div>

        <div
          ref={summary.ref}
          data-reveal
          className={summary.isVisible ? 'op-summary is-visible' : 'op-summary'}
        >
          <div className="op-summary-item">
            <span className="op-summary-label">담당 업무</span>
            <p>마크업·CSS·JS 구현, 접근성 처리, 긴급 이슈 대응까지 퍼블리싱 전반을 담당했습니다.</p>
          </div>
          <div className="op-summary-item">
            <span className="op-summary-label">협업 방식</span>
            <p>
              기획자 검수 후 개발팀 전달, 또는 배포 직전 단계까지 직접 진행하며 운영 프로세스 전반에
              참여했습니다.
            </p>
          </div>
        </div>
      </div>
      <div className="grid-cell section-side">
        <Stats />
      </div>
    </>
  );
}
