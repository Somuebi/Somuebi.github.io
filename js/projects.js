const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    // Toggle active button style
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Filter projects
    projectCards.forEach((card) => {
      const tags = card.dataset.tags.split(" ");
      if (filter === "all" || tags.includes(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
