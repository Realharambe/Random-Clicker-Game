// Get the elements from the DOM
const clickButton = document.getElementById("click-button");
const scoreElement = document.getElementById("score");
const upgrade1 = document.getElementById("upgrade-1");
const upgrade2 = document.getElementById("upgrade-2");
const upgrade3 = document.getElementById("upgrade-3");
const purchasedUpgrades = document.getElementById("purchased-upgrades");

// Initialize the score and upgrades
let score = 0;
let clickMultiplier = 1;
let upgrade1Cost = 10;
let upgrade2Cost = 25;
let upgrade3Cost = 50;
let purchasedUpgradesList = [];

// Function to handle button clicks
function handleClick() {
  // Increase the score by the click multiplier
  score += clickMultiplier;

  // Update the score display
  scoreElement.textContent = score.toString();
}

// Function to handle upgrade purchases
function handleUpgradePurchase(event) {
  const clickedUpgrade = event.target;

  if (clickedUpgrade.id === "upgrade-1") {
    if (score >= upgrade1Cost) {
      // Subtract the upgrade cost from the score
      score -= upgrade1Cost;

      // Increase the click multiplier for each click
      clickMultiplier += 1;

      // Increase the upgrade cost for the next purchase
      upgrade1Cost *= 2;

      // Update the score display, click multiplier, and upgrade cost
      scoreElement.textContent = score.toString();
      clickedUpgrade.textContent = `Upgrade 1 (Cost: ${upgrade1Cost} clicks)`;

      // Add the purchased upgrade to the list
      purchasedUpgradesList.push("Upgrade 1 (x2 multiplier)");
      purchasedUpgrades.innerHTML = purchasedUpgradesList.map(upgrade => `<li>${upgrade}</li>`).join("");
    }
  } else if (clickedUpgrade.id === "upgrade-2") {
    if (score >= upgrade2Cost) {
      // Subtract the upgrade cost from the score
      score -= upgrade2Cost;

      // Increase the click multiplier for each click
      clickMultiplier += 1;

      // Increase the upgrade cost for the next purchase
      upgrade2Cost *= 2;

      // Update the score display, click multiplier, and upgrade cost
      scoreElement.textContent = score.toString();
      clickedUpgrade.textContent = `Upgrade 2 (Cost: ${upgrade2Cost} clicks)`;

      // Add the purchased upgrade to the list
      purchasedUpgradesList.push("Upgrade 2 (x2 multiplier)");
      purchasedUpgrades.innerHTML = purchasedUpgradesList.map(upgrade => `<li>${upgrade}</li>`).join("");
    }
  } else if (clickedUpgrade.id === "upgrade-3") {
    if (score >= upgrade3Cost) {
      // Subtract the upgrade cost from the score
      score -= upgrade3Cost;

      // Increase the click multiplier for each click
      clickMultiplier += 1;

      // Increase the upgrade cost for the next purchase
      upgrade3Cost *= 2;

      // Update the score display, click multiplier, and upgrade cost
      scoreElement.textContent = score.toString();
      clickedUpgrade.textContent = `Upgrade 3 (Cost: ${upgrade3Cost} clicks)`;

      // Add the purchased upgrade to the list
      purchasedUpgradesList.push("Upgrade 3 (x2 multiplier)");
      purchasedUpgrades.innerHTML = purchasedUpgradesList.map(upgrade => `<li>${upgrade}</li>`).join("");
    }
  }
}

// Attach the event listeners to the upgrades
upgrade1.addEventListener("click", handleUpgradePurchase);
upgrade2.addEventListener("click", handleUpgradePurchase);
upgrade3.addEventListener("click", handleUpgradePurchase);

// Attach the
