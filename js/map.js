// map.js
document.addEventListener('DOMContentLoaded', function() {
  const locations = [
    {
      name: "Paris, France",
      top: "38%",
      left: "48%",
      //image: "assets/images/paris.jpg",
      description: "Studied art history here for 3 months in 2022."
    },
    {
      name: "Singapore",
      top: "60%",
      left: "74%",
      description: "Spent a week for a literature competition; immersed in culture."
    },
    {
      name: "Nigeria",
      top: "58%",
      left: "50%",
      description: "Born and raised."
    },
    {
      name: "Georgia, USA",
      top: "45%",
      left: "26%",
      description: "Graduated high school at Rabun Gap–Nacoochee School."
    },
    {
      name: "Worcester, USA",
      top: "42%",
      left: "29%",
      description: "WPI Class of 2028."
    }
  ];

  const mapContainer = document.getElementById('worldMap');
  const mapOverlay = document.querySelector('.map-overlay');

  locations.forEach(loc => {
    const marker = document.createElement('div');
    marker.className = 'location-marker';
    marker.style.top = loc.top;
    marker.style.left = loc.left;

    const bubble = document.createElement('div');
    bubble.className = 'location-bubble';

    // Only add an <img> if loc.image exists
    if (loc.image) {
      const img = document.createElement('img');
      img.src = loc.image;
      img.alt = loc.name;
      img.loading = 'lazy';
      bubble.appendChild(img);
    }

    const h3 = document.createElement('h3');
    h3.textContent = loc.name;
    bubble.appendChild(h3);

    const p = document.createElement('p');
    p.textContent = loc.description;
    bubble.appendChild(p);

    marker.appendChild(bubble);
    mapContainer.appendChild(marker);

    marker.addEventListener('mouseenter', () => {
      bubble.style.display = 'block';
      mapOverlay.style.backgroundColor = 'rgba(35, 37, 40, 0.2)';
    });
    marker.addEventListener('mouseleave', () => {
      bubble.style.display = 'none';
      mapOverlay.style.backgroundColor = 'rgba(35, 37, 40, 0.7)';
    });
  });

  mapOverlay.addEventListener('mouseenter', () => {
    mapOverlay.style.backgroundColor = 'rgba(35, 37, 40, 0.4)';
  });
  mapOverlay.addEventListener('mouseleave', () => {
    mapOverlay.style.backgroundColor = 'rgba(35, 37, 40, 0.7)';
  });
});

