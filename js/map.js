document.addEventListener('DOMContentLoaded', function() {
    const locations = [
        {
            name: "Paris, France",
            top: "38%",  // Adjust these percentages to position correctly on your map
            left: "48%",
            //image: "assets/paris.jpg",
            description: "Studied art history here for 3 months in 2022..."
        },
        {
            name: "Singapore",
            top: "60%",
            left: "74%",
            //image: "assets/tokyo.jpg",
            description: "Spent a week here for a literature competition got immersed in the culture and history"
        },
        {
            name: "Nigeria",
            top: "58%",
            left: "50%",
            //image: "assets/images/nigeria.jpg",
            description: "Born and raised Here"
        },
        {
            name: "Georgia, USA",
            top: "45%",
            left: "26%",
            //image: "assets/images/georgia.jpg",
            description: "Graduated high school at Rabun Gap Nacoochee School"
        },
        {
            name: "Worcester, USA",
            top: "42%",
            left: "29%",
            //image: "assets/images/worcester.jpg",
            description: "WPI Class of 2028"
        }
        
    ];

    const mapContainer = document.getElementById('worldMap');
    const mapOverlay = document.querySelector('.map-overlay');

    locations.forEach(location => {
        // Create marker
        const marker = document.createElement('div');
        marker.className = 'location-marker';
        marker.style.top = location.top;
        marker.style.left = location.left;
        
        // Create bubble
        const bubble = document.createElement('div');
        bubble.className = 'location-bubble';
        bubble.innerHTML = `
            <img src="${location.image}" alt="${location.name}" loading="lazy">
            <h3>${location.name}</h3>
            <p>${location.description}</p>
        `;
        
        // Add event listeners
        marker.addEventListener('mouseenter', () => {
            bubble.style.display = 'block';
            mapOverlay.style.backgroundColor = 'rgba(35, 37, 40, 0.2)'; // Lighten overlay when marker is hovered
        });
        
        marker.addEventListener('mouseleave', () => {
            bubble.style.display = 'none';
            mapOverlay.style.backgroundColor = 'rgba(35, 37, 40, 0.7)';
        });
        
        // Append elements
        marker.appendChild(bubble);
        mapContainer.appendChild(marker);
    });

    // Add overlay hover effect
    mapOverlay.addEventListener('mouseenter', () => {
        mapOverlay.style.backgroundColor = 'rgba(35, 37, 40, 0.4)';
    });
    
    mapOverlay.addEventListener('mouseleave', () => {
        mapOverlay.style.backgroundColor = 'rgba(35, 37, 40, 0.7)';
    });
});
