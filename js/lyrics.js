const lyricSpan = document.querySelector("#lyric");

const lyrics = [
  "A champagne supernova in the sky",
  "You're my wonderwall",
  "Stop crying your heart out",
  "So, Sally can wait",
  "Nobody knows the way it's gonna be",
];

let currentIndex = Math.floor(Math.random() * lyrics.length);
lyricSpan.innerText = lyrics[currentIndex % lyrics.length];

setInterval(() => {
  // 1. fade-out
  lyricSpan.classList.add("fade-out");

  // 2. 글자 바꾸기 (fade-out이 끝난 뒤에 실행)
  setTimeout(() => {
    currentIndex++;
    lyricSpan.innerText = lyrics[currentIndex % lyrics.length];

    // 3. fade-in
    lyricSpan.classList.remove("fade-out");
  }, 500); // fade-out 지속시간과 맞춰줌
}, 5000);
