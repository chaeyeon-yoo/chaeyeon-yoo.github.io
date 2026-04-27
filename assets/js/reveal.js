const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting)
        setTimeout(() => e.target.classList.add("visible"), i * 80);
    });
  },
  { threshold: 0.08 },
);
reveals.forEach((el) => observer.observe(el));

/* TOP BUTTON */
const topBtn = document.getElementById("topBtn");
const aboutSection = document.getElementById("about");

if (topBtn) {
  // 👉 1. 메인페이지 (about 섹션 존재할 때)
  if (aboutSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            topBtn.classList.add("visible");
          } else {
            const rect = aboutSection.getBoundingClientRect();
            if (rect.top > 0) {
              topBtn.classList.remove("visible");
            }
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(aboutSection);
  }
  // 👉 2. 상세페이지 (about 없을 때)
  else {
    const trigger = parseInt(topBtn.dataset.scrollTrigger) || 500;

    window.addEventListener("scroll", () => {
      if (window.scrollY > trigger) {
        topBtn.classList.add("visible");
      } else {
        topBtn.classList.remove("visible");
      }
    });
  }

  // 👉 클릭 이벤트는 공통 (한 번만)
  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
