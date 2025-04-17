const toggleInput = document.getElementById("mode-toggle");
const slider = document.querySelector(".theme-toggle__slider");

// 스위치를 눌러도 토글되도록
slider.addEventListener("click", () => {
  toggleInput.checked = !toggleInput.checked;
  toggleInput.dispatchEvent(new Event("change")); // 변경 감지 이벤트 발생 (옵션)
});

// 선택적으로: 테마 전환 연동 예시
toggleInput.addEventListener("change", () => {
  const root = document.documentElement;

  if (toggleInput.checked) {
    root.style.setProperty("--main-font-color", "#f1f1f1");
    root.style.setProperty("--main-bg-color", "#111");
  } else {
    root.style.setProperty("--main-font-color", "#111");
    root.style.setProperty("--main-bg-color", "whitesmoke");
  }
});
