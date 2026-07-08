document.addEventListener('DOMContentLoaded', () => {
  const topBtn = document.querySelector('.top-btn');
  const progressBar = document.querySelector('.reading-progress');

  // 1. 스크롤 위치에 따라 탑버튼 보이기/숨기기 + 리딩 프로그레스 바 갱신
  window.addEventListener('scroll', () => {
    // 현재 스크롤 위치가 300px을 넘으면 'is-visible' 클래스 추가, 아니면 제거
    if (window.scrollY > 300) {
      topBtn.classList.add('is-visible');
    } else {
      topBtn.classList.remove('is-visible');
    }

    if (progressBar) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? window.scrollY / docHeight : 0;
      progressBar.style.transform = `scaleX(${progress})`;
    }
  });

  // 2. 버튼 클릭 시 최상단으로 부드럽게 이동
  topBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // 3. 코드블록 복사 버튼
  document.querySelectorAll('.code-block').forEach((block) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'copy-btn';
    btn.textContent = 'Copy';
    btn.setAttribute('aria-label', '코드 복사');
    block.appendChild(btn);

    btn.addEventListener('click', () => {
      const code = block.querySelector('code');
      const text = (code || block).textContent;

      navigator.clipboard.writeText(text).then(() => {
        btn.textContent = 'Copied!';
        btn.classList.add('is-copied');

        setTimeout(() => {
          btn.textContent = 'Copy';
          btn.classList.remove('is-copied');
        }, 1500);
      });
    });
  });
});