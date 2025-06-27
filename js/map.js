document.addEventListener('DOMContentLoaded', function() {
    const locations = [
        {
            name: "Paris, France",
            top: "30%",
            left: "48%",
            image: "assets/paris.jpg",
            description: "Studied art history here for 3 months in 2022..."
        },
        {
            name: "Tokyo, Japan",
            top: "35%",
            left: "78%",
            image: "assets/tokyo.jpg",
            description: "Lived here while working on a tech project in 2020..."
        }
        // Add more locations as needed
    ];

    const mapContainer = document.getElementById('worldMap');

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
            <img src="${location.image}" alt="${location.name}">
            <h3>${location.name}</h3>
            <p>${location.description}</p>
        `;
        
        // Add event listeners
        marker.addEventListener('mouseenter', () => {
            bubble.style.display = 'block';
        });
        
        marker.addEventListener('mouseleave', () => {
            bubble.style.display = 'none';
        });
        
        // Append elements
        marker.appendChild(bubble);
        mapContainer.appendChild(marker);
    });
});