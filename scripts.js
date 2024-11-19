document.addEventListener('DOMContentLoaded', function () {
  // Get all navbar links
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  // Add click handler to each link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Check if navbar is expanded (visible on mobile)
      if (navbarCollapse.classList.contains('show')) {
        // Collapse the navbar
        navbarCollapse.classList.remove('show');
      }
    });
  });
});
