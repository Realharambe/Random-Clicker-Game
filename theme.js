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
  
  // JavaScript code
  let score = 0;
  let clickMultiplier = 1;
  
  const clickButton = document.getElementById("click-button");
  const scoreDisplay = document.getElementById("score");
  const upgradeButtons = document.getElementsByClassName("upgrade");
  const purchasedUpgrades = document.getElementById("purchased-upgrades");
  
  function increaseScore() {
    score += clickMultiplier;
    scoreDisplay.textContent = score;
  }
  
  clickButton.addEventListener("click", increaseScore);
  
  function purchaseUpgrade(event) {
    const button = event.target;
    const upgradeCost = parseInt(button.getAttribute("data-cost"));
    const upgradeMultiplier = parseInt(button.getAttribute("data-multiplier"));
  
    if (score >= upgradeCost) {
      score -= upgradeCost;
      clickMultiplier *= upgradeMultiplier;
      scoreDisplay.textContent = score;
  
      const upgradeItem = document.createElement("li");
      upgradeItem.textContent = `Upgrade ${button.id.substr(-1)} (Multiplier: ${upgradeMultiplier}x)`;
      purchasedUpgrades.appendChild(upgradeItem);
  
      button.disabled = true;
    }
  }
  
  for (let i = 0; i < upgradeButtons.length; i++) {
    upgradeButtons[i].addEventListener("click", purchaseUpgrade);
  }
  