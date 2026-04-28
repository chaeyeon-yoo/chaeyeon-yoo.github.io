/* nav-list 햄버거 추가 (모바일) */
const hamburger = document.querySelector('.nav-hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
  const isOpen = navList.classList.toggle('open');
  hamburger.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
  hamburger.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
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