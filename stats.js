let totalLines = 0;

document.addEventListener("DOMContentLoaded", initStats);

async function initStats() {
  const files = [
    "index.html",
    "what-it-took.html",
    "css/styles.css",
    "js/main.js",
    "js/stats.js"
  ];

  for (const file of files) {
    try {
      const response = await fetch(file);
      if (!response.ok) continue;

      const text = await response.text();
      totalLines += text.split("\n").length;
    } catch (error) {
      console.warn("Error loading:", file);
    }
  }
}

function revealLines() {
  animateCount(document.getElementById("lineCount"), totalLines, 2000);
}

function revealLanguages() {
  const el = document.getElementById("languages");
  el.textContent = "HTML";

  setTimeout(() => el.textContent += ", CSS", 600);
  setTimeout(() => el.textContent += ", JS", 1200);
}

function revealChatGPT() {
  document.getElementById("chatgpt").textContent =
    'ChatGPT ("Vibe Coding" is a skill!)';
}

function animateCount(element, target, duration) {
  const startTime = performance.now();

  function update(time) {
    const progress = Math.min((time - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = Math.floor(eased * target);

    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}
