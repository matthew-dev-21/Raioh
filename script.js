// Select the toggle menu button and the navigation menu
const toggleMenu = document.querySelector(".toggle_menu");
const headerNav = document.querySelector(".header_nav");

// Add a click event listener to the toggle menu button
toggleMenu.addEventListener("click", () => {
  // Toggle the 'open' class on the toggle menu button
  toggleMenu.classList.toggle("open");

  // Check if the menu is open and adjust the navigation menu position
  if (toggleMenu.classList.contains("open")) {
    headerNav.style.right = "0"; // Slide the menu into view
  } else {
    headerNav.style.right = "-100%"; // Slide the menu out of view
  }
});
