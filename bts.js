// Animate puzzle pieces on load
window.addEventListener("load", () => {
  const pieces = document.querySelectorAll(".puzzle-piece");
  pieces.forEach((piece, index) => {
    setTimeout(() => {
      piece.classList.add("animate-in");
    }, index * 300); // delay each piece slightly
  });
});

// Stop animation on scroll
let animationStopped = false;

window.addEventListener("scroll", () => {
  if (!animationStopped) {
    const pieces = document.querySelectorAll(".puzzle-piece");
    pieces.forEach(piece => {
      piece.style.transition = "none";
    });
    animationStopped = true;
  }
});



