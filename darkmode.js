// Get the dark mode icon
const darkModeIcon = document.getElementById('darkMode-icon');

// Get the body element
const body = document.body;

// Define a function to toggle the dark mode
function toggleDarkMode() {
  // Check if the body has the dark-mode class
  if (body.classList.contains('dark-mode')) {
    // Remove the dark-mode class and add the light-mode class
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    // Update the dark mode icon
    darkModeIcon.innerHTML = '<i class="fa-solid fa-moon"></i>';
  } else {
    // Remove the light-mode class and add the dark-mode class
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    // Update the dark mode icon
    darkModeIcon.innerHTML = '<i class="fa-regular fa-moon"></i>';
  }
}

// Add an event listener to the dark mode icon
darkModeIcon.addEventListener('click', toggleDarkMode);