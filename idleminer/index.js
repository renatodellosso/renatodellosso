let manualClick = document.getElementById('manual click');
let money = 0;
let moneyDisplay = document.getElementById('money');
let incomeDisplay = document.getElementById('income');

let onClick = () => {
  money++;
  moneyDisplay.innerHTML = '$' + money;
}

let quarry = {
  name: "Quarries",
  cost: 20,
  count: 0,
  production: 1,
  upgradeCost: 10000,

  buy: () => {
    if (money >= quarry.cost) {
      money -= quarry.cost;

      quarry.count++;
      quarry.cost = Math.round(quarry.cost * 1.1);

      quarry.updateButton();
    }
  },

  upgrade: () => {
    if (money >= quarry.upgradeCost) {
      money -= quarry.upgradeCost;

      quarry.production *= 2;

      quarry.upgradeCost = Math.round(quarry.upgradeCost * 50);
      quarry.updateButton();
    }
  },

  updateButton: () => {
    let btn = document.getElementById('quarry');
    btn.innerHTML = quarry.count + " " + quarry.name + " - costs $" + quarry.cost + ", produces $" + quarry.production + "/s";
    let uBtn = document.getElementById('quarryUpgrade');
    uBtn.innerHTML = "Upgrade (doubles production): $" + quarry.upgradeCost;
  }
}

let copperMine = {
  name: "Copper Mines",
  cost: 300,
  count: 0,
  production: 6,
  upgradeCost: 50000,

  buy: () => {
    if (money >= copperMine.cost) {
      money -= copperMine.cost;

      copperMine.count++;
      copperMine.cost = Math.round(copperMine.cost * 1.1);

      copperMine.updateButton();
    }
  },

  upgrade: () => {
    if (money >= copperMine.upgradeCost) {
      money -= copperMine.upgradeCost;

      copperMine.production *= 2;

      copperMine.upgradeCost = Math.round(copperMine.upgradeCost * 50);
      copperMine.updateButton();
    }
  },

  updateButton: () => {
    let btn = document.getElementById('copperMine');
    btn.innerHTML = copperMine.count + " " + copperMine.name + " - costs $" + copperMine.cost + ", produces $" + copperMine.production + "/s";
    let uBtn = document.getElementById('copperUpgrade');
    uBtn.innerHTML = "Upgrade (doubles production): $" + copperMine.upgradeCost;
  }
}

let ironMine = {
  name: "Iron Mines",
  cost: 1000,
  count: 0,
  production: 17,
  upgradeCost: 350000,

  buy: () => {
    if (money >= ironMine.cost) {
      money -= ironMine.cost;

      ironMine.count++;
      ironMine.cost = Math.round(ironMine.cost * 1.1);

      ironMine.updateButton();
    }
  },

  upgrade: () => {
    if (money >= ironMine.upgradeCost) {
      money -= ironMine.upgradeCost;

      ironMine.production *= 2;

      ironMine.upgradeCost = Math.round(ironMine.upgradeCost * 50);
      ironMine.updateButton();
    }
  },

  updateButton: () => {
    let btn = document.getElementById('ironMine');
    btn.innerHTML = ironMine.count + " " + ironMine.name + " - costs $" + ironMine.cost + ", produces $" + ironMine.production + "/s";
    let uBtn = document.getElementById('ironUpgrade');
    uBtn.innerHTML = "Upgrade (doubles production): $" + ironMine.upgradeCost;
  }
}

let silverMine = {
  name: "Silver Mines",
  cost: 10000,
  count: 0,
  production: 50,
  upgradeCost: 350000,

  buy: () => {
    if (money >= silverMine.cost) {
      money -= silverMine.cost;

      silverMine.count++;
      silverMine.cost = Math.round(silverMine.cost * 1.1);

      silverMine.updateButton();
    }
  },

  upgrade: () => {
    if (money >= silverMine.upgradeCost) {
      money -= silverMine.upgradeCost;

      silverMine.production *= 2;

      silverMine.upgradeCost = Math.round(silverMine.upgradeCost * 50);
      silverMine.updateButton();
    }
  },

  updateButton: () => {
    let btn = document.getElementById('silverMine');
    btn.innerHTML = silverMine.count + " " + silverMine.name + " - costs $" + silverMine.cost + ", produces $" + silverMine.production + "/s";
    let uBtn = document.getElementById('silverUpgrade');
    uBtn.innerHTML = "Upgrade (doubles production): $" + silverMine.upgradeCost;
  }
}

let tungstenMine = {
  name: "Tungsten Mines",
  cost: 45000,
  count: 0,
  production: 120,

  buy: () => {
    if (money >= tungstenMine.cost) {
      money -= tungstenMine.cost;

      tungstenMine.count++;
      tungstenMine.cost = Math.round(tungstenMine.cost * 1.1);

      tungstenMine.updateButton();
    }
  },

  updateButton: () => {
    let btn = document.getElementById('tungstenMine');
    btn.innerHTML = tungstenMine.count + " " + tungstenMine.name + " - costs $" + tungstenMine.cost + ", produces $" + tungstenMine.production + "/s";
  }
}

let leadMine = {
  name: "Lead Mines",
  cost: 120000,
  count: 0,
  production: 300,

  buy: () => {
    if (money >= leadMine.cost) {
      money -= leadMine.cost;

      leadMine.count++;
      leadMine.cost = Math.round(leadMine.cost * 1.1);

      leadMine.updateButton();
    }
  },

  updateButton: () => {
    let btn = document.getElementById('leadMine');
    btn.innerHTML = leadMine.count + " " + leadMine.name + " - costs $" + leadMine.cost + ", produces $" + leadMine.production + "/s";
  }
}

let loadGame = () => {
  let save = JSON.parse(localStorage.getItem("save"));

  if (save !== null) {

  if (typeof save.money !== "undefined") {
     money = save.money;
     moneyDisplay.innerHTML = money;
   }

  if (typeof save.quarry !== "undefined") {
    if (typeof save.quarry.cost !== "undefined") quarry.cost = save.quarry.cost;
    if (typeof save.quarry.count !== "undefined") quarry.count = save.quarry.count;
    if (typeof save.quarry.production !== "undefined") quarry.production = save.quarry.production;
    if (typeof save.quarry.upgradeCost !== "undefined") quarry.upgradeCost = save.quarry.upgradeCost;
  }

  if (typeof save.copperMine !== "undefined") {
    if (typeof save.copperMine.cost !== "undefined") copperMine.cost = save.copperMine.cost;
    if (typeof save.copperMine.count !== "undefined") copperMine.count = save.copperMine.count;
    if (typeof save.copperMine.production !== "undefined") copperMine.production = save.copperMine.production;
    if (typeof save.copperMine.upgradeCost !== "undefined") copperMine.upgradeCost = save.copperMine.upgradeCost;
  }

  if (typeof save.ironMine !== "undefined") {
    if (typeof save.ironMine.cost !== "undefined") ironMine.cost = save.ironMine.cost;
    if (typeof save.ironMine.count !== "undefined") ironMine.count = save.ironMine.count;
    if (typeof save.ironMine.production !== "undefined") ironMine.production = save.ironMine.production
    if (typeof save.ironMine.upgradeCost !== "undefined") ironMine.upgradeCost = save.ironMine.upgradeCost;
  }

  if (typeof save.silverMine !== "undefined") {
    if (typeof save.silverMine.cost !== "undefined") silverMine.cost = save.silverMine.cost;
    if (typeof save.silverMine.count !== "undefined") silverMine.count = save.silverMine.count;
    if (typeof save.silverMine.production !== "undefined") silverMine.production = save.silverMine.production;
    if (typeof save.silverMine.upgradeCost !== "undefined") silverMine.upgradeCost = save.silverMine.upgradeCost;
  }

  if (typeof save.tungstenMine !== "undefined") {
    if (typeof save.tungstenMine.cost !== "undefined") tungstenMine.cost = save.tungstenMine.cost;
    if (typeof save.tungstenMine.count !== "undefined") tungstenMine.count = save.tungstenMine.count;
    if (typeof save.tungstenMine.production !== "undefined") tungstenMine.production = save.tungstenMine.production;
    if (typeof save.tungstenMine.upgradeCost !== "undefined") tungstenMine.upgradeCost = save.tungstenMine.upgradeCost;
  }

  if (typeof save.leadMine !== "undefined") {
    if (typeof save.leadMine.cost !== "undefined") leadMine.cost = save.leadMine.cost;
    if (typeof save.leadMine.count !== "undefined") leadMine.count = save.leadMine.count;
    if (typeof save.leadMine.production !== "undefined") leadMine.production = save.leadMine.production;
    if (typeof save.leadMine.upgradeCost !== "undefined") leadMine.upgradeCost = save.leadMine.upgradeCost;
  }

  console.log("Loaded game");
  }

  quarry.updateButton();
  copperMine.updateButton();
  ironMine.updateButton();
  silverMine.updateButton();
  tungstenMine.updateButton();
  leadMine.updateButton();
}

loadGame();

setInterval(() => {
  let income = 0;

  income += quarry.count * quarry.production;
  income += copperMine.count * copperMine.production;
  income += ironMine.count * ironMine.production;
  income += silverMine.count * silverMine.production;
  income += tungstenMine.count * tungstenMine.production;
  income += leadMine.count * leadMine.production;

  money += income;

  moneyDisplay.innerHTML = '$' + money;
  incomeDisplay.innerHTML = "$" + income + "/s";
}, 1000)

let saveGame = () => {
  let save = {
    money: money,
    quarry: quarry,
    copperMine: copperMine,
    ironMine: ironMine,
    silverMine: silverMine,
    tungstenMine: tungstenMine,
    leadMine: leadMine,
  }

  localStorage.setItem("save", JSON.stringify(save));

  console.log("Saved game")
}

setInterval(() => {
  money = Math.round(money);
  moneyDisplay.innerHTML = '$' + money;
}, 50)

setInterval(saveGame, 10000);

let wipeSave = () => {
  localStorage.removeItem("save");
  location.reload();
}
