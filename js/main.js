// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    // Sample projects data - replace with your actual projects
    const projects = [
        {
            title: "Leaks in The Pipe : Black Women in STEM",
            description: "A interactive scrollytelling web app using svelte to showcase the decrease that occured in Black women in the STEM industry",
            //image: "assets/images/project-1.png",
            tags: ["HTML", "CSS", "Svelte", "Javascript", "Intersection Observer API"]
        },
        {
            title: "To-Do List",
            description: "A simple to-do list using python and tkinter",
            image: "assets/images/project-2.png",
            tags: ["Python", "Tkinter"]
        },
        {
            title: "Timeline Creator",
            description: "A simple timeline creator built using HTML, CSS, and JavaScript",
            image: "assets/images/project-3.png",
            tags: ["HTML", "CSS", "Javascript"]
        }
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