// smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const markers = document.querySelectorAll('.map-marker');
  markers.forEach((marker, index) => {
    setTimeout(() => {
      marker.style.opacity = 1;
    }, index * 200);
  });
});

const trail = document.createElement("div");
  trail.style.position = "fixed";
  trail.style.width = "40px";
  trail.style.height = "40px";
  trail.style.borderRadius = "50%";
  trail.style.background = "rgba(133, 10, 255, 0.2)";
  trail.style.pointerEvents = "none";
  trail.style.zIndex = "99";
  trail.style.transition = "transform 0.1s ease-out";
  document.body.appendChild(trail);

  document.addEventListener("mousemove", e => {
    trail.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
  });

