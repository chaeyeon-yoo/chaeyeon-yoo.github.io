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