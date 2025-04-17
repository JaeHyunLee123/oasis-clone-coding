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
  currentIndex++;

  lyricSpan.innerText = lyrics[currentIndex % lyrics.length];
}, 10000);
