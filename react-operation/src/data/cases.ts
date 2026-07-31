export interface CaseItem {
  tag: string;
  titleAriaLabel: string;
  titleLines: string[];
  techTags: string[];
  desc: string;
  code?: string;
  codeCaption?: string;
}

export const cases: CaseItem[] = [
  {
    tag: '마스킹 정책 변경 대응',
    titleAriaLabel:
      'GNB 버튼이 로그인 상태에 따라 조건부 노출되며, 최초 방문 시 Lottie 애니메이션을 1회 재생합니다.',
    titleLines: [
      'GNB 버튼이 로그인 상태에 따라 조건부 노출되며,',
      '최초 방문 시 Lottie 애니메이션을 1회 재생합니다.',
    ],
    techTags: ['HTML/CSS', 'JavaScript', 'Lottie'],
    desc: '마스킹 정책이 변경되면서 인증 UI 전반의 개선이 필요했고, 그 일환으로 로그인 상태에 따른 GNB 버튼 노출 조건을 재정의했습니다. localStorage로 재생 여부를 관리해 재방문 시 마지막 프레임을 바로 노출하도록 구현했으며, 로그인 상태 분기 처리와 애니메이션 타이밍 제어를 함께 다뤘습니다.',
    codeCaption: 'Lottie 애니메이션 1회 재생 제어 예시 코드',
    code: `// default : 애니메이션 자동 재생 X
const params = {
  container: document.getElementById("lottie_container"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "[CDN 경로]"
};

const anim = lottie.loadAnimation(params);

if (!localStorage.getItem("hasPlayedMotion")) {
  anim.play();
  localStorage.setItem("hasPlayedMotion", "true");
} else {
  anim.addEventListener("DOMLoaded", function() {
    anim.goToAndStop(anim.totalFrames, true);
  });
}`,
  },
  {
    tag: '선물하기 서비스 개편 (모바일)',
    titleAriaLabel:
      '서비스 전면 개편으로 마크업 구조를 새로 설계하고, 약 20개 페이지를 담당했습니다.',
    titleLines: [
      '서비스 전면 개편으로 마크업 구조를 새로 설계하고,',
      '약 20개 페이지를 담당했습니다.',
    ],
    techTags: ['HTML/CSS', 'JavaScript', '모바일'],
    desc: '기존 컴포넌트를 재활용하고 신규 컴포넌트를 추가하며 처음부터 접근성을 고려한 마크업 작업을 진행했습니다. 폼 에러 텍스트는 기존 코드베이스 전반이 aria-hidden 토글 방식으로 구현되어 있어, 일관성을 위해 동일한 패턴을 따랐습니다.',
    codeCaption: '탭 UI, 폼 에러 텍스트, 팝업 버튼 연결 예시 코드',
    code: `<!-- 1. 탭 UI -->
<ul role="tablist" class="tab-accessibility">
  <li role="presentation">
    <a role="tab" aria-selected="true"
       aria-controls="tab1-tab" id="tab1">바로선물</a>
  </li>
  <li role="presentation">
    <a role="tab" aria-selected="false"
       aria-controls="tab2-tab" id="tab2">가족끼리 자동선물</a>
  </li>
</ul>

<!-- 2. 폼 에러 텍스트 -->
<span class="error-txt"
      aria-hidden="true">
  휴대폰 번호 11자리를 입력해 주세요.
</span>
<!-- 초기값 true | 활성화 시 false -->

<!-- 3. 팝업 버튼 연결 -->
<button type="button"
        aria-haspopup="dialog"
        aria-controls="popup-id"
        aria-expanded="false">
  100MB
</button>`,
  },
  {
    tag: '긴급 이슈 대응',
    titleAriaLabel:
      '디자인 미확정 상태에서 퍼블리싱을 병행하며 실시간 수정 요청에 빠르게 대응했습니다.',
    titleLines: [
      '디자인 미확정 상태에서 퍼블리싱을 병행하며',
      '실시간 수정 요청에 빠르게 대응했습니다.',
    ],
    techTags: ['HTML/CSS', 'SCSS', 'TSX'],
    desc: '서비스 긴급 이슈 발생으로 메인 페이지 콘텐츠 추가 및 신규 안내 페이지를 긴급 퍼블리싱했습니다. 디자인과 퍼블리싱을 동시에 진행하며 실시간 수정 요청에 대응하는 방식으로 처리했습니다. 디자인 확정 전 페이지는 담당 개발자와 실시간으로 소통하며 수정했고, 전달 방식도 페이지별로 달라 파일로 직접 넘기거나 Git에 반영하는 등 상황에 맞춰 유연하게 대응했습니다.',
  },
];
