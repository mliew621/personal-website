document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll('.tab');
  const projectSections = document.querySelectorAll('.projects');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active state from all
      tabs.forEach(t => t.classList.remove('active'));
      projectSections.forEach(section => section.classList.remove('active'));

      // Activate the clicked one
      tab.classList.add('active');
      const target = tab.getAttribute('data-target');
      document.getElementById(target).classList.add('active');
    });
  });
});

document.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const introHeight = document.getElementById("intro").offsetHeight;

  if (window.scrollY > introHeight - 80) {
    header.classList.add("visible");
  } else {
    header.classList.remove("visible");
  }
});