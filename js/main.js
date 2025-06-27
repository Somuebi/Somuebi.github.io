// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    // Sample projects data - replace with your actual projects
    const projects = [
        {
            title: "E-Commerce Website",
            description: "A full-stack e-commerce platform with React and Node.js",
            image: "assets/project1.jpg",
            tags: ["React", "Node.js", "MongoDB"]
        },
        {
            title: "Portfolio Design",
            description: "Minimalist portfolio design for a photographer",
            image: "assets/project2.jpg",
            tags: ["HTML/CSS", "JavaScript", "GSAP"]
        }
        // Add more projects as needed
    ];

    const carousel = document.querySelector('.carousel');

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'carousel-item';
        projectElement.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tech-tags">
                    ${project.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        carousel.appendChild(projectElement);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});