document.addEventListener('DOMContentLoaded', () => {
  const topBtn = document.querySelector('.top-btn');
  const progressBar = document.querySelector('.reading-progress');

  // 1. 스크롤 위치에 따라 탑버튼 보이기/숨기기 + 리딩 프로그레스 바 갱신
  window.addEventListener('scroll', () => {
    // 현재 스크롤 위치가 300px을 넘으면 'is-visible' 클래스 추가, 아니면 제거
    if (topBtn) {
      if (window.scrollY > 300) {
        topBtn.classList.add('is-visible');
      } else {
        topBtn.classList.remove('is-visible');
      }
    }

    if (progressBar) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? window.scrollY / docHeight : 0;
      progressBar.style.transform = `scaleX(${progress})`;
    }
  });

  // 2. 버튼 클릭 시 최상단으로 이동
  //    이동 직후 버튼은 visibility: hidden이 되므로, 포커스를 본문 시작점으로 넘긴다
  if (topBtn) {
    topBtn.addEventListener('click', () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });

      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        mainContent.focus();
      }
    });
  }

  // 3. 코드블록: 가로 스크롤이 생기는 영역이므로 키보드로도 스크롤할 수 있어야 한다
  document.querySelectorAll('.code-block').forEach((block) => {
    block.setAttribute('tabindex', '0');
  });
});