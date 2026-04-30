/* 탭 UI — 카테고리 탭 인터랙션 */
const tabs = document.querySelectorAll('[role="tab"]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // 모든 탭 비활성화
    tabs.forEach(t => {
      t.setAttribute('aria-selected', 'false');
      t.classList.remove('active');
    });

    // 클릭한 탭 활성화
    tab.setAttribute('aria-selected', 'true');
    tab.classList.add('active');
  });

  // 키보드 좌우 화살표 탐색
  tab.addEventListener('keydown', (e) => {
    const tabList = [...tabs];
    const currentIndex = tabList.indexOf(tab);

    if (e.key === 'ArrowRight') {
      const next = tabList[currentIndex + 1] || tabList[0];
      next.focus();
      next.click();
    }
    if (e.key === 'ArrowLeft') {
      const prev = tabList[currentIndex - 1] || tabList[tabList.length - 1];
      prev.focus();
      prev.click();
    }
  });
});

/* 찜하기 버튼 — aria-pressed 토글 */
const wishBtns = document.querySelectorAll('.wish-btn');

wishBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const isPressed = btn.getAttribute('aria-pressed') === 'true';
    btn.setAttribute('aria-pressed', String(!isPressed));

    // 상품명 추출해서 상태 안내
    const productName = btn.closest('.product-card')
      ?.querySelector('.product-name')?.textContent?.trim();

    if (productName) {
      const msg = !isPressed
        ? `${productName}을(를) 찜 목록에 추가했습니다.`
        : `${productName}을(를) 찜 목록에서 제거했습니다.`;

      // 스크린 리더 안내용 live region
      announceToScreenReader(msg);
    }
  });
});

/* 햄버거 메뉴 */
(function () {
  const btn     = document.querySelector('.hamburger-btn');
  const nav     = document.getElementById('mobile-nav');
  const overlay = document.querySelector('.mobile-nav-overlay');

  if (!btn || !nav || !overlay) return;

  function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth; /* 스크롤바 너비를 CSS 변수로 저장 — body 고정 시 레이아웃 밀림 방지 */
  }

  function open() {
    const sbw = getScrollbarWidth();
    document.body.style.overflow     = 'hidden';
    document.body.style.paddingRight = sbw + 'px';

    const fixedEls = document.querySelectorAll('.home-btn, .top-btn');
    fixedEls.forEach(el => {
      const baseRight = parseInt(getComputedStyle(el).right) || 32;
      el.style.right = (baseRight + sbw) + 'px';
    });

    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-label',    '메뉴 닫기');
    nav.setAttribute('aria-hidden',   'false');
    overlay.classList.add('active');
  }

  function close() {
    document.body.style.overflow     = '';
    document.body.style.paddingRight = '';

    const fixedEls = document.querySelectorAll('.home-btn, .top-btn');
    fixedEls.forEach(el => { el.style.right = ''; });

    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label',    '메뉴 열기');
    nav.setAttribute('aria-hidden',   'true');
    overlay.classList.remove('active');
  }

  btn.addEventListener('click', () => {
    btn.getAttribute('aria-expanded') === 'true' ? close() : open();
  });

  overlay.addEventListener('click', close);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') close();
  });

  /* 메뉴 링크 클릭 시 자동 닫기 */
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
})();
