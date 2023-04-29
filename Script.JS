let score = 0;
let clickMultiplier = 1;
let upgrades = [
  { name: "Double Clicks", baseCost: 10, multiplier: 2, quantity: 0 },
  { name: "Triple Clicks", baseCost: 50, multiplier: 3, quantity: 0 },
  { name: "Quad Clicks", baseCost: 100, multiplier: 4, quantity: 0 }
];

function increaseScore() {
  score += clickMultiplier;
  document.getElementById("score").innerText = score;
}

function buyUpgrade(index) {
  const upgrade = upgrades[index];
  const totalCost = upgrade.baseCost * Math.pow(upgrade.multiplier, upgrade.quantity);

  if (score >= totalCost) {
    score -= totalCost;
    clickMultiplier *= upgrade.multiplier;
    upgrade.quantity++;

    // Update the upgrade element with new values
    const upgradeElement = document.getElementById(`upgrade-${index}`);
    const upgradeButton = upgradeElement.querySelector("button");
    const upgradeQuantity = upgradeElement.querySelector(".quantity");
    const upgradeCost = upgradeElement.querySelector(".cost");

    upgradeQuantity.textContent = `Quantity: ${upgrade.quantity}`;
    upgradeCost.textContent = `Cost: ${totalCost} clicks`;

    document.getElementById("score").innerText = score;
    upgradeButton.disabled = score < totalCost;
  }
}

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
}

function initializeUpgrades() {
  const upgradesContainer = document.getElementById("upgrades");
  upgrades.forEach((upgrade, index) => {
    const upgradeElement = document.createElement("li");
    upgradeElement.classList.add("upgrade");
    upgradeElement.id = `upgrade-${index}`;

    const totalCost = upgrade.baseCost * Math.pow(upgrade.multiplier, upgrade.quantity);
    const upgradeQuantity = document.createElement("span");
    upgradeQuantity.classList.add("quantity");
    upgradeQuantity.textContent = `Quantity: ${upgrade.quantity}`;

    const upgradeCost = document.createElement("span");
    upgradeCost.classList.add("cost");
    upgradeCost.textContent = `Cost: ${totalCost} clicks`;

    const upgradeButton = document.createElement("button");
    upgradeButton.innerText = "Buy";
    upgradeButton.addEventListener("click", () => {
      buyUpgrade(index);
    });

    upgradeElement.innerText = `${upgrade.name} `;
    upgradeElement.appendChild(upgradeQuantity);
    upgradeElement.appendChild(document.createElement("br"));
    upgradeElement.appendChild(upgradeCost);
    upgradeElement.appendChild(document.createElement("br"));
    upgradeElement.appendChild(upgradeButton);
    upgradesContainer.appendChild(upgradeElement);
  });
}

window.onload = function() {
  initializeUpgrades();
};
