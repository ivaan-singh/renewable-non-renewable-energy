document.addEventListener("DOMContentLoaded", () => {
  createFloatingBubbles();
});

function createFloatingBubbles() {
  const colors = ["#FFD54F","#81C784","#64B5F6","#BA68C8"];

  for (let i = 0; i < 12; i++) {
    const bubble = document.createElement("div");
    bubble.classList.add("floating-bubble");

    const size = Math.random() * 80 + 40;
    bubble.style.width = size + "px";
    bubble.style.height = size + "px";
    bubble.style.left = Math.random() * 100 + "vw";
    bubble.style.background = colors[Math.floor(Math.random() * colors.length)];
    bubble.style.animationDuration = (Math.random() * 10 + 10) + "s";

    document.body.appendChild(bubble);
  }
}
