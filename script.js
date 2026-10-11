// Minimal Vanilla JavaScript for Navigation & Smooth Interaction

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Toggle mobile menu
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('is-active');
    });

    // Close menu on navigation click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('is-active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      const isClickInside = navMenu.contains(event.target) || navToggle.contains(event.target);
      if (!isClickInside && navMenu.classList.contains('is-active')) {
        navMenu.classList.remove('is-active');
      }
    });
  }
});