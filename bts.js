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



