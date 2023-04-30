let score = 0;
let clickMultiplier = 1;
let upgrades = [
  { name: "Double Clicks", baseCost: 10, multiplier: 2, quantity: 0 },
  { name: "Triple Clicks", baseCost: 50, multiplier: 3, quantity: 0 },
  { name: "Quad Clicks", baseCost: 100, multiplier: 4, quantity: 0 }
];

let autoclickerInterval;

function increaseScore() {
  score += clickMultiplier;
  document.getElementById("score").innerText = score;
  saveData();
}

function startAutoclicker() {
  autoclickerInterval = setInterval(() => {
    document.getElementById("click-button").click();
  }, 1000); // Autoclick once per second
}

function stopAutoclicker() {
  clearInterval(autoclickerInterval);
}

function buyUpgrade(index) {
  const upgrade = upgrades[index];
  const totalCost = getUpgradeCost(upgrade);

  if (score >= totalCost) {
    score -= totalCost;
    clickMultiplier *= upgrade.multiplier;
    upgrade.quantity++;

    saveData();

    const upgradeElement = document.getElementById(`upgrade-${index}`);
    const upgradeButton = upgradeElement.querySelector("button");
    const upgradeQuantity = upgradeElement.querySelector(".quantity");
    const upgradeCost = upgradeElement.querySelector(".cost");

    upgradeQuantity.textContent = `Quantity: ${upgrade.quantity}`;
    upgradeCost.textContent = `Cost: ${getUpgradeCost(upgrade)}`;

    document.getElementById("score").innerText = score;
    upgradeButton.disabled = score < getUpgradeCost(upgrade);
  }
}

function getUpgradeCost(upgrade) {
  return upgrade.baseCost * Math.pow(upgrade.multiplier, upgrade.quantity);
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

    const upgradeQuantity = document.createElement("span");
    upgradeQuantity.classList.add("quantity");
    upgradeQuantity.textContent = `Quantity: ${upgrade.quantity}`;

    const upgradeCost = document.createElement("span");
    upgradeCost.classList.add("cost");
    upgradeCost.textContent = `Cost: ${getUpgradeCost(upgrade)} clicks`;

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

function saveData() {
  const data = {
    score: score,
    upgrades: upgrades
  };

  localStorage.setItem("clickerGameData", JSON.stringify(data));
}

function loadData() {
  const data = localStorage.getItem("clickerGameData");
  if (data) {
    const parsedData = JSON.parse(data);
    score = parsedData.score;
    upgrades = parsedData.upgrades;
  }
}

window.onload = function() {
  loadData(); // Load saved data
  initializeUpgrades(); // Initialize upgrades UI

  // Update the score display
  document.getElementById("score").innerText = score;

  // Check if the purchased upgrade is the autoclicker
  const autoclickerUpgrade = upgrades.find(upgrade => upgrade.autoclick && upgrade.quantity > 0);
  if (autoclickerUpgrade) {
    startAutoclicker();
  }
};
