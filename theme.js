// Function to toggle between light and dark mode
function toggleTheme() {
    const themeLink = document.getElementById("theme");
    const themeToggle = document.getElementById("theme-toggle");
  
    if (themeLink.getAttribute("href") === "light-theme.css") {
      themeLink.setAttribute("href", "dark-theme.css");
      themeToggle.textContent = "Light Mode";
    } else {
      themeLink.setAttribute("href", "light-theme.css");
      themeToggle.textContent = "Dark Mode";
    }
  }
  
  // Attach event listener to the theme toggle button
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", toggleTheme);
  