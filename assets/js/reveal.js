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
const workSection = document.getElementById("work");

if (topBtn) {
  // 1. 메인 페이지 (section 으로 구분)
  if (workSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            topBtn.classList.add("visible");
          } else {
            const rect = workSection.getBoundingClientRect();
            if (rect.top > 0) {
              topBtn.classList.remove("visible");
            }
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(workSection);
  }
  // 2. 프로젝트 페이지 (section id 없음)
  else {
    const trigger = parseInt(topBtn.dataset.scrollTrigger) || 600; // 값이 없을 시 600

    window.addEventListener("scroll", () => {
      if (window.scrollY > trigger) {
        topBtn.classList.add("visible");
      } else {
        topBtn.classList.remove("visible");
      }
    });
  }

  // 클릭 이벤트 (공통)
  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
