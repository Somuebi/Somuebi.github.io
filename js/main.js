// main.js
document.addEventListener('DOMContentLoaded', function() {
  const projects = [
    {
      title: "Leaks in The Pipe : Black Women in STEM",
      description: "An interactive scrollytelling web app using Svelte to showcase the decline of Black women in STEM.",
      image: "assets/images/project-1.png",
      tags: ["HTML", "CSS", "Svelte", "JavaScript", "Intersection Observer API"]
    }
    /*{
      title: "To-Do List",
      description: "A simple to-do list using Python and Tkinter.",
      image: "assets/images/project-2.png",
      tags: ["Python", "Tkinter"]
    },-->
    {
      title: "Timeline Creator",
      description: "A timeline creator built with HTML, CSS, and JavaScript.",
      image: "assets/images/project-3.png",
      tags: ["HTML", "CSS", "JavaScript"]
    }*/
  ];

  const carousel = document.querySelector('.carousel');

  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'carousel-item';

    // Image slot
    if (project.image) {
        const img = document.createElement('img');
        img.src = project.image;
        img.alt = project.title;
        img.loading = 'lazy';
        card.appendChild(img);
    } else {
      // Optional: placeholder or empty div
        const placeholder = document.createElement('div');
        placeholder.className = 'no-image';
        placeholder.textContent = 'No preview available';
        card.appendChild(placeholder);
    }

    // Info block
    const info = document.createElement('div');
    info.className = 'project-info';

    const h3 = document.createElement('h3');
    h3.textContent = project.title;
    info.appendChild(h3);

    const p = document.createElement('p');
    p.textContent = project.description;
    info.appendChild(p);

    const tagContainer = document.createElement('div');
    tagContainer.className = 'tech-tags';
    project.tags.forEach(t => {
        const span = document.createElement('span');
        span.className = 'tech-tag';
        span.textContent = t;
        tagContainer.appendChild(span);
    });
    info.appendChild(tagContainer);

    card.appendChild(info);
    carousel.appendChild(card);
  });

  // Smooth scrolling for on-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute('href'))
              .scrollIntoView({ behavior: 'smooth' });
    });
  });
});
