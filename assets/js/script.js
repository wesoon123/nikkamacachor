const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Toggle menu visibility and hamburger transformation
hamburger.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent click from propagating to the document
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close the menu when clicking anywhere outside the navbar
document.addEventListener('click', (event) => {
  if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  }
});

// Close the menu if a link inside the navbar is clicked
navLinks.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navLinks.classList.remove('active');
});