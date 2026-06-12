const hamburger = document.querySelector('.nav-hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
  const isOpen = navList.classList.toggle('open');
  hamburger.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
  hamburger.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');

  if (isOpen) {
    // 메뉴 열리면 첫 번째 링크로 포커스 이동
    const firstLink = navList.querySelector('a');
    if (firstLink) firstLink.focus();
  } else {
    // 메뉴 닫히면 햄버거 버튼으로 포커스 복귀
    hamburger.focus();
  }
});

// 포커스 트랩
navList.addEventListener('keydown', (e) => {
  if (!navList.classList.contains('open')) return;

  const focusable = navList.querySelectorAll('a');
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (e.key === 'Tab') {
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  // ESC 키로 메뉴 닫기
  if (e.key === 'Escape') {
    navList.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
    hamburger.setAttribute('aria-label', '메뉴 열기');
    hamburger.focus();
  }
});

// 메뉴 항목 클릭 시 닫기
navList.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
    hamburger.setAttribute('aria-label', '메뉴 열기');
  });
});