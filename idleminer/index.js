//Ideas:
//Upgrades that slowly produce buildings
//Buff clicker upgrade (make it multiply by something like 1.5)

let manualClick = document.getElementById('manual click');
let money = 0;
let moneyDisplay = document.getElementById('money');
let incomeDisplay = document.getElementById('income');

let million = 1000000;
let billion = million * 1000;

let prettifyInt = (i) => {
    return i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

let clicker = {
  mpc: 1,
  cost: 1000,

  upgrade: () => {
    if (money >= clicker.cost) {
      money -= clicker.cost;
      clicker.mpc = Math.round(clicker.mpc * 15)/10;
      clicker.cost = Math.round(clicker.cost * 1.5);
      clicker.updateButton();
    }
  },

  updateButton: () => {
    let btn = document.getElementById('upgradeClicker');
    btn.innerHTML = "$" + prettifyInt(clicker.mpc) + "/click. Upgrade (x1.5/click): $" +  prettifyInt(clicker.cost);
  }
}

let onClick = () => {
  money += clicker.mpc;
  money = Math.round(money * 10)/10;
  moneyDisplay.innerHTML = '$' + prettifyInt(money);
}

let quarry = {
  name: "Quarries",
  cost: 20,
  count: 0,
  production: 1,
  upgradeCost: 10000,
  percentage: 0,

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

      quarry.upgradeCost = Math.round(quarry.upgradeCost * 10);
      quarry.updateButton();
    }
  },

  updateButton: () => {
    let btn = document.getElementById('quarry');
    btn.innerHTML = quarry.count + " " + quarry.name + " - costs $" + prettifyInt(quarry.cost) + ", produces $" + prettifyInt(quarry.production) + "/s ($" + quarry.production * quarry.count + "/s total, " + quarry.percentage + "%)";;
    let uBtn = document.getElementById('quarryUpgrade');
    uBtn.innerHTML = "Upgrade (doubles production): $" + prettifyInt(quarry.upgradeCost);
  }
}

let copperMine = {
  name: "Copper Mines",
  cost: 300,
  count: 0,
  production: 6,
  upgradeCost: 50000,
  percentage: 0,

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

      copperMine.upgradeCost = Math.round(copperMine.upgradeCost * 10);
      copperMine.updateButton();
    }
  },

  updateButton: () => {
    let btn = document.getElementById('copperMine');
    btn.innerHTML = copperMine.count + " " + copperMine.name + " - costs $" + prettifyInt(copperMine.cost) + ", produces $" + prettifyInt(copperMine.production) + "/s ($" + copperMine.production * copperMine.count + "/s total, " + copperMine.percentage + "%)";;
    let uBtn = document.getElementById('copperMineUpgrade');
    uBtn.innerHTML = "Upgrade (doubles production): $" + prettifyInt(copperMine.upgradeCost);
  }
}

let ironMine = {
  name: "Iron Mines",
  cost: 1000,
  count: 0,
  production: 17,
  upgradeCost: 350000,
  percentage: 0,

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

      ironMine.upgradeCost = Math.round(ironMine.upgradeCost * 10);
      ironMine.updateButton();
    }
  },

  updateButton: () => {
    let btn = document.getElementById('ironMine');
    btn.innerHTML = ironMine.count + " " + ironMine.name + " - costs $" + prettifyInt(ironMine.cost) + ", produces $" + prettifyInt(ironMine.production) + "/s ($" + ironMine.production * ironMine.count + "/s total, " + ironMine.percentage + "%)";;
    let uBtn = document.getElementById('ironMineUpgrade');
    uBtn.innerHTML = "Upgrade (doubles production): $" + prettifyInt(ironMine.upgradeCost);
  }
}

let silverMine = {
  name: "Silver Mines",
  cost: 10000,
  count: 0,
  production: 50,
  upgradeCost: 500000,
  percentage: 0,

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

      silverMine.upgradeCost = Math.round(silverMine.upgradeCost * 10);
      silverMine.updateButton();
    }
  },

  updateButton: () => {
    let btn = document.getElementById('silverMine');
    btn.innerHTML = silverMine.count + " " + silverMine.name + " - costs $" + prettifyInt(silverMine.cost) + ", produces $" + prettifyInt(silverMine.production) + "/s ($" + silverMine.production * silverMine.count + "/s total, " + silverMine.percentage + "%)";;
    let uBtn = document.getElementById('silverMineUpgrade');
    uBtn.innerHTML = "Upgrade (doubles production): $" + prettifyInt(silverMine.upgradeCost);
  }
}

let tungstenMine = {
  name: "Tungsten Mines",
  cost: 45000,
  count: 0,
  production: 120,
  upgradeCost: 750000,
  percentage: 0,

  buy: () => {
    if (money >= tungstenMine.cost) {
      money -= tungstenMine.cost;

      tungstenMine.count++;
      tungstenMine.cost = Math.round(tungstenMine.cost * 1.1);

      tungstenMine.updateButton();
    }
  },

  upgrade: () => {
    if (money >= tungstenMine.upgradeCost) {
      money -= tungstenMine.upgradeCost;

      tungstenMine.production *= 2;

      tungstenMine.upgradeCost = Math.round(tungstenMine.upgradeCost * 10);
      tungstenMine.updateButton();
    }
  },

  updateButton: () => {
    let btn = document.getElementById('tungstenMine');
    btn.innerHTML = tungstenMine.count + " " + tungstenMine.name + " - costs $" + prettifyInt(tungstenMine.cost) + ", produces $" + prettifyInt(tungstenMine.production) + "/s ($" + tungstenMine.production * tungstenMine.count + "/s total, " + tungstenMine.percentage + "%)";;
    let uBtn = document.getElementById('tungstenMineUpgrade');
    uBtn.innerHTML = "Upgrade (doubles production): $" + prettifyInt(tungstenMine.upgradeCost);
  }
}

let leadMine = {
  name: "Lead Mines",
  cost: 120000,
  count: 0,
  production: 300,
  upgradeCost: 1250000,
  percentage: 0,

  buy: () => {
    if (money >= leadMine.cost) {
      money -= leadMine.cost;

      leadMine.count++;
      leadMine.cost = Math.round(leadMine.cost * 1.1);

      leadMine.updateButton();
    }
  },

  upgrade: () => {
    if (money >= leadMine.upgradeCost) {
      money -= leadMine.upgradeCost;

      leadMine.production *= 2;

      leadMine.upgradeCost = Math.round(leadMine.upgradeCost * 10);
      leadMine.updateButton();
    }
  },

  updateButton: () => {
    let btn = document.getElementById('leadMine');
    btn.innerHTML = leadMine.count + " " + leadMine.name + " - costs $" + prettifyInt(leadMine.cost) + ", produces $" + prettifyInt(leadMine.production) + "/s ($" + leadMine.production * leadMine.count + "/s total, " + leadMine.percentage + "%)";;
    let uBtn = document.getElementById('leadMineUpgrade');
    uBtn.innerHTML = "Upgrade (doubles production): $" + prettifyInt(leadMine.upgradeCost);
  }
}

let quartzMine = {
  name: "Quartz Mines",
  cost: 500000,
  count: 0,
  production: 600,
  upgradeCost: 3500000,
  percentage: 0,

  buy: () => {
    if (money >= quartzMine.cost) {
      money -= quartzMine.cost;

      quartzMine.count++;
      quartzMine.cost = Math.round(quartzMine.cost * 1.1);

      quartzMine.updateButton();
    }
  },

  upgrade: () => {
    if (money >= quartzMine.upgradeCost) {
      money -= quartzMine.upgradeCost;

      quartzMine.production *= 2;

      quartzMine.upgradeCost = Math.round(quartzMine.upgradeCost * 10);
      quartzMine.updateButton();
    }
  },

  updateButton: () => {
    let btn = document.getElementById('quartzMine');
    btn.innerHTML = quartzMine.count + " " + quartzMine.name + " - costs $" + prettifyInt(quartzMine.cost) + ", produces $" + prettifyInt(quartzMine.production) + "/s ($" + quartzMine.production * quartzMine.count + "/s total, " + quartzMine.percentage + "%)";;
    let uBtn = document.getElementById('quartzMineUpgrade');
    uBtn.innerHTML = "Upgrade (doubles production): $" + prettifyInt(quartzMine.upgradeCost);
  }
}

let rubyMine = {
  name: "Ruby Mines",
  cost: 1200000,
  count: 0,
  production: 750,
  upgradeCost: 25000000,
  percentage: 0,

  buy: () => {
    if (money >= rubyMine.cost) {
      money -= rubyMine.cost;

      rubyMine.count++;
      rubyMine.cost = Math.round(rubyMine.cost * 1.1);

      rubyMine.updateButton();
    }
  },

  upgrade: () => {
    if (money >= rubyMine.upgradeCost) {
      money -= rubyMine.upgradeCost;

      rubyMine.production *= 2;

      rubyMine.upgradeCost = Math.round(rubyMine.upgradeCost * 10);
      rubyMine.updateButton();
    }
  },

  updateButton: () => {
    let btn = document.getElementById('rubyMine');
    btn.innerHTML = rubyMine.count + " " + rubyMine.name + " - costs $" + prettifyInt(rubyMine.cost) + ", produces $" + prettifyInt(rubyMine.production) + "/s ($" + rubyMine.production * rubyMine.count + "/s total, " + rubyMine.percentage + "%)";;
    let uBtn = document.getElementById('rubyMineUpgrade');
    uBtn.innerHTML = "Upgrade (doubles production): $" + prettifyInt(rubyMine.upgradeCost);
  }
}

let sapphireMine = {
  name: "Sapphire Mines",
  cost: 2000000,
  count: 0,
  production: 1000,
  upgradeCost: 45000000,
  percentage: 0,

  buy: () => {
    if (money >= sapphireMine.cost) {
      money -= sapphireMine.cost;

      sapphireMine.count++;
      sapphireMine.cost = Math.round(sapphireMine.cost * 1.1);

      sapphireMine.updateButton();
    }
  },

  upgrade: () => {
    if (money >= sapphireMine.upgradeCost) {
      money -= sapphireMine.upgradeCost;

      sapphireMine.production *= 2;

      sapphireMine.upgradeCost = Math.round(sapphireMine.upgradeCost * 10);
      sapphireMine.updateButton();
    }
  },

  updateButton: () => {
    let btn = document.getElementById('sapphireMine');
    btn.innerHTML = sapphireMine.count + " " + sapphireMine.name + " - costs $" + prettifyInt(sapphireMine.cost) + ", produces $" + prettifyInt(sapphireMine.production) + "/s ($" + sapphireMine.production * sapphireMine.count + "/s total, " + sapphireMine.percentage + "%)";;
    let uBtn = document.getElementById('sapphireMineUpgrade');
    uBtn.innerHTML = "Upgrade (doubles production): $" + prettifyInt(sapphireMine.upgradeCost);
  }
}

let goldMine = {
  name: "Gold Mines",
  cost: 25000000,
  count: 0,
  production: 5000,
  upgradeCost: 150000000,
  percentage: 0,

  buy: () => {
    if (money >= goldMine.cost) {
      money -= goldMine.cost;

      goldMine.count++;
      goldMine.cost = Math.round(goldMine.cost * 1.1);

      goldMine.updateButton();
    }
  },

  upgrade: () => {
    if (money >= goldMine.upgradeCost) {
      money -= goldMine.upgradeCost;

      goldMine.production *= 2;

      goldMine.upgradeCost = Math.round(goldMine.upgradeCost * 10);
      goldMine.updateButton();
    }
  },

  updateButton: () => {
    let btn = document.getElementById('goldMine');
    btn.innerHTML = goldMine.count + " " + goldMine.name + " - costs $" + prettifyInt(goldMine.cost) + ", produces $" + prettifyInt(goldMine.production) + "/s ($" + goldMine.production * goldMine.count + "/s total, " + goldMine.percentage + "%)";;
    let uBtn = document.getElementById('goldMineUpgrade');
    uBtn.innerHTML = "Upgrade (doubles production): $" + prettifyInt(goldMine.upgradeCost);
  }
}

let platinumMine = {
  name: "Platinum Mines",
  cost: 150000000,
  count: 0,
  production: 12000,
  upgradeCost: 500000000,
  percentage: 0,

  buy: () => {
    if (money >= platinumMine.cost) {
      money -= platinumMine.cost;

      platinumMine.count++;
      platinumMine.cost = Math.round(platinumMine.cost * 1.1);

      platinumMine.updateButton();
    }
  },

  upgrade: () => {
    if (money >= platinumMine.upgradeCost) {
      money -= platinumMine.upgradeCost;

      platinumMine.production *= 2;

      platinumMine.upgradeCost = Math.round(platinumMine.upgradeCost * 10);
      platinumMine.updateButton();
    }
  },

  updateButton: () => {
    let btn = document.getElementById('platinumMine');
    btn.innerHTML = platinumMine.count + " " + platinumMine.name + " - costs $" + prettifyInt(platinumMine.cost) + ", produces $" + prettifyInt(platinumMine.production) + "/s ($" + platinumMine.production * platinumMine.count + "/s total, " + platinumMine.percentage + "%)";;
    let uBtn = document.getElementById('platinumMineUpgrade');
    uBtn.innerHTML = "Upgrade (doubles production): $" + prettifyInt(platinumMine.upgradeCost);
  }
}

let titaniumMine = {
  name: "Titanium Mines",
  cost: 500000000,
  count: 0,
  production: 25000,
  upgradeCost: 1500000000,
  percentage: 0,

  buy: () => {
    if (money >= titaniumMine.cost) {
      money -= titaniumMine.cost;

      titaniumMine.count++;
      titaniumMine.cost = Math.round(titaniumMine.cost * 1.1);

      titaniumMine.updateButton();
    }
  },

  upgrade: () => {
    if (money >= titaniumMine.upgradeCost) {
      money -= titaniumMine.upgradeCost;

      titaniumMine.production *= 2;

      titaniumMine.upgradeCost = Math.round(titaniumMine.upgradeCost * 10);
      titaniumMine.updateButton();
    }
  },

  updateButton: () => {
    let btn = document.getElementById('titaniumMine');
    btn.innerHTML = titaniumMine.count + " " + titaniumMine.name + " - costs $" + prettifyInt(titaniumMine.cost) + ", produces $" + prettifyInt(titaniumMine.production) + "/s ($" + titaniumMine.production * titaniumMine.count + "/s total, " + titaniumMine.percentage + "%)";;
    let uBtn = document.getElementById('titaniumMineUpgrade');
    uBtn.innerHTML = "Upgrade (doubles production): $" + prettifyInt(titaniumMine.upgradeCost);
  }
}

let uraniumMine = {
  name: "Uranium Mines",
  cost: 2500000000,
  count: 0,
  production: 100000,
  upgradeCost: 10000000000,
  percentage: 0,

  buy: () => {
    if (money >= uraniumMine.cost) {
      money -= uraniumMine.cost;

      uraniumMine.count++;
      uraniumMine.cost = Math.round(uraniumMine.cost * 1.1);

      uraniumMine.updateButton();
    }
  },

  upgrade: () => {
    if (money >= uraniumMine.upgradeCost) {
      money -= uraniumMine.upgradeCost;

      uraniumMine.production *= 2;

      uraniumMine.upgradeCost = Math.round(uraniumMine.upgradeCost * 10);
      uraniumMine.updateButton();
    }
  },

  updateButton: () => {
    let btn = document.getElementById('uraniumMine');
    btn.innerHTML = uraniumMine.count + " " + uraniumMine.name + " - costs $" + prettifyInt(uraniumMine.cost) + ", produces $" + prettifyInt(uraniumMine.production) + "/s ($" + uraniumMine.production * uraniumMine.count + "/s total, " + uraniumMine.percentage + "%)";;
    let uBtn = document.getElementById('uraniumMineUpgrade');
    uBtn.innerHTML = "Upgrade (doubles production): $" + prettifyInt(uraniumMine.upgradeCost);
  }
}

let plutoniumMine = {
  name: "Plutonium Mines",
  cost: 12 * billion,
  count: 0,
  production: 250000,
  upgradeCost: 400 * billion,
  percentage: 0,

  buy: () => {
    if (money >= plutoniumMine.cost) {
      money -= plutoniumMine.cost;

      plutoniumMine.count++;
      plutoniumMine.cost = Math.round(plutoniumMine.cost * 1.1);

      plutoniumMine.updateButton();
    }
  },

  upgrade: () => {
    if (money >= plutoniumMine.upgradeCost) {
      money -= plutoniumMine.upgradeCost;

      plutoniumMine.production *= 2;

      plutoniumMine.upgradeCost = Math.round(plutoniumMine.upgradeCost * 10);
      plutoniumMine.updateButton();
    }
  },

  updateButton: () => {
    let btn = document.getElementById('plutoniumMine');
    btn.innerHTML = plutoniumMine.count + " " + plutoniumMine.name + " - costs $" + prettifyInt(plutoniumMine.cost) + ", produces $" + prettifyInt(plutoniumMine.production) + "/s ($" + plutoniumMine.production * plutoniumMine.count + "/s total, " + plutoniumMine.percentage + "%)";;
    let uBtn = document.getElementById('plutoniumMineUpgrade');
    uBtn.innerHTML = "Upgrade (doubles production): $" + prettifyInt(plutoniumMine.upgradeCost);
  }
}

let diamondMine = {
  name: "Diamond Mines",
  cost: 50 * billion,
  count: 0,
  production: 800000,
  upgradeCost: 500 * billion,
  percentage: 0,

  buy: () => {
    if (money >= diamondMine.cost) {
      money -= diamondMine.cost;

      diamondMine.count++;
      diamondMine.cost = Math.round(diamondMine.cost * 1.1);

      diamondMine.updateButton();
    }
  },

  upgrade: () => {
    if (money >= diamondMine.upgradeCost) {
      money -= diamondMine.upgradeCost;

      diamondMine.production *= 2;

      diamondMine.upgradeCost = Math.round(diamondMine.upgradeCost * 10);
      diamondMine.updateButton();
    }
  },

  updateButton: () => {
    let btn = document.getElementById('diamondMine');
    btn.innerHTML = diamondMine.count + " " + diamondMine.name + " - costs $" + prettifyInt(diamondMine.cost) + ", produces $" + prettifyInt(diamondMine.production) + "/s ($" + diamondMine.production * diamondMine.count + "/s total, " + diamondMine.percentage + "%)";;
    let uBtn = document.getElementById('diamondMineUpgrade');
    uBtn.innerHTML = "Upgrade (doubles production): $" + prettifyInt(diamondMine.upgradeCost);
  }
}

let loadGame = () => {
  let save = JSON.parse(localStorage.getItem("save"));

  if (save !== null) {

  if (typeof save.money !== "undefined") {
     money = save.money;
     moneyDisplay.innerHTML = money;
   }

   if (typeof save.clicker !== "undefined") {
     if(save.clicker.mpc !== "undefined") clicker.mpc = save.clicker.mpc;
     if(save.clicker.cost !== "undefined") clicker.cost = save.clicker.cost;
   }

  if (typeof save.leadMine !== "undefined") {
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

  if (typeof save.quartzMine !== "undefined") {
    if (typeof save.quartzMine.cost !== "undefined") quartzMine.cost = save.quartzMine.cost;
    if (typeof save.quartzMine.count !== "undefined") quartzMine.count = save.quartzMine.count;
    if (typeof save.quartzMine.production !== "undefined") quartzMine.production = save.quartzMine.production;
    if (typeof save.quartzMine.upgradeCost !== "undefined") quartzMine.upgradeCost = save.quartzMine.upgradeCost;
  }

  if (typeof save.rubyMine !== "undefined") {
    if (typeof save.rubyMine.cost !== "undefined") rubyMine.cost = save.rubyMine.cost;
    if (typeof save.rubyMine.count !== "undefined") rubyMine.count = save.rubyMine.count;
    if (typeof save.rubyMine.production !== "undefined") rubyMine.production = save.rubyMine.production;
    if (typeof save.rubyMine.upgradeCost !== "undefined") rubyMine.upgradeCost = save.rubyMine.upgradeCost;
  }

  if (typeof save.sapphireMine !== "undefined") {
    if (typeof save.sapphireMine.cost !== "undefined") sapphireMine.cost = save.sapphireMine.cost;
    if (typeof save.sapphireMine.count !== "undefined") sapphireMine.count = save.sapphireMine.count;
    if (typeof save.sapphireMine.production !== "undefined") sapphireMine.production = save.sapphireMine.production;
    if (typeof save.sapphireMine.upgradeCost !== "undefined") sapphireMine.upgradeCost = save.sapphireMine.upgradeCost;
  }

  if (typeof save.goldMine !== "undefined") {
    if (typeof save.goldMine.cost !== "undefined") goldMine.cost = save.goldMine.cost;
    if (typeof save.goldMine.count !== "undefined") goldMine.count = save.goldMine.count;
    if (typeof save.goldMine.production !== "undefined") goldMine.production = save.goldMine.production;
    if (typeof save.goldMine.upgradeCost !== "undefined") goldMine.upgradeCost = save.goldMine.upgradeCost;
  }

  if (typeof save.platinumMine !== "undefined") {
    if (typeof save.platinumMine.cost !== "undefined") platinumMine.cost = save.platinumMine.cost;
    if (typeof save.platinumMine.count !== "undefined") platinumMine.count = save.platinumMine.count;
    if (typeof save.platinumMine.production !== "undefined") platinumMine.production = save.platinumMine.production;
    if (typeof save.platinumMine.upgradeCost !== "undefined") platinumMine.upgradeCost = save.platinumMine.upgradeCost;
  }

  if (typeof save.titaniumMine !== "undefined") {
    if (typeof save.titaniumMine.cost !== "undefined") titaniumMine.cost = save.titaniumMine.cost;
    if (typeof save.titaniumMine.count !== "undefined") titaniumMine.count = save.titaniumMine.count;
    if (typeof save.titaniumMine.production !== "undefined") titaniumMine.production = save.titaniumMine.production;
    if (typeof save.titaniumMine.upgradeCost !== "undefined") titaniumMine.upgradeCost = save.titaniumMine.upgradeCost;
  }

  if (typeof save.uraniumMine !== "undefined") {
    if (typeof save.uraniumMine.cost !== "undefined") uraniumMine.cost = save.uraniumMine.cost;
    if (typeof save.uraniumMine.count !== "undefined") uraniumMine.count = save.uraniumMine.count;
    if (typeof save.uraniumMine.production !== "undefined") uraniumMine.production = save.uraniumMine.production;
    if (typeof save.uraniumMine.upgradeCost !== "undefined") uraniumMine.upgradeCost = save.uraniumMine.upgradeCost;
  }

  if (typeof save.plutoniumMine !== "undefined") {
    if (typeof save.plutoniumMine.cost !== "undefined") plutoniumMine.cost = save.plutoniumMine.cost;
    if (typeof save.plutoniumMine.count !== "undefined") plutoniumMine.count = save.plutoniumMine.count;
    if (typeof save.plutoniumMine.production !== "undefined") plutoniumMine.production = save.plutoniumMine.production;
    if (typeof save.plutoniumMine.upgradeCost !== "undefined") plutoniumMine.upgradeCost = save.plutoniumMine.upgradeCost;
  }

  if (typeof save.diamondMine !== "undefined") {
    if (typeof save.diamondMine.cost !== "undefined") diamondMine.cost = save.diamondMine.cost;
    if (typeof save.diamondMine.count !== "undefined") diamondMine.count = save.diamondMine.count;
    if (typeof save.diamondMine.production !== "undefined") diamondMine.production = save.diamondMine.production;
    if (typeof save.diamondMine.upgradeCost !== "undefined") diamondMine.upgradeCost = save.diamondMine.upgradeCost;
  }

  console.log("Loaded game");
  }

  clicker.updateButton();

  quarry.updateButton();
  copperMine.updateButton();
  ironMine.updateButton();
  silverMine.updateButton();
  tungstenMine.updateButton();
  leadMine.updateButton();
  quartzMine.updateButton();
  rubyMine.updateButton();
  sapphireMine.updateButton();
  goldMine.updateButton();
  platinumMine.updateButton();
  titaniumMine.updateButton();
  uraniumMine.updateButton();
  plutoniumMine.updateButton();
  diamondMine.updateButton();
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
  income += quartzMine.count * quartzMine.production;
  income += rubyMine.count * quartzMine.production;
  income += sapphireMine.count * sapphireMine.production;
  income += goldMine.count * goldMine.production;
  income += platinumMine.count * platinumMine.production;
  income += titaniumMine.count * titaniumMine.production;
  income += uraniumMine.count * uraniumMine.production;
  income += plutoniumMine.count * plutoniumMine.production;
  income += diamondMine.count * diamondMine.production;

  quarry.percentage = Math.round(((quarry.production * quarry.count) / income) * 100)
  quarry.updateButton();

  copperMine.percentage = Math.round(((copperMine.production * copperMine.count) / income) * 100)
  copperMine.updateButton();

  ironMine.percentage = Math.round(((ironMine.production * ironMine.count) / income) * 100)
  ironMine.updateButton();

  silverMine.percentage = Math.round(((silverMine.production * silverMine.count) / income) * 100)
  silverMine.updateButton();

  tungstenMine.percentage = Math.round(((tungstenMine.production * tungstenMine.count) / income) * 100)
  tungstenMine.updateButton();

  leadMine.percentage = Math.round(((leadMine.production * leadMine.count) / income) * 100)
  leadMine.updateButton();

  quartzMine.percentage = Math.round(((quartzMine.production * quartzMine.count) / income) * 100)
  quartzMine.updateButton();

  rubyMine.percentage = Math.round(((rubyMine.production * rubyMine.count) / income) * 100)
  rubyMine.updateButton();

  sapphireMine.percentage = Math.round(((sapphireMine.production * sapphireMine.count) / income) * 100)
  sapphireMine.updateButton();

  goldMine.percentage = Math.round(((goldMine.production * goldMine.count) / income) * 100)
  goldMine.updateButton();

  platinumMine.percentage = Math.round(((platinumMine.production * platinumMine.count) / income) * 100)
  platinumMine.updateButton();

  titaniumMine.percentage = Math.round(((titaniumMine.production * titaniumMine.count) / income) * 100)
  titaniumMine.updateButton();

  uraniumMine.percentage = Math.round(((uraniumMine.production * uraniumMine.count) / income) * 100)
  uraniumMine.updateButton();

  plutoniumMine.percentage = Math.round(((plutoniumMine.production * plutoniumMine.count) / income) * 100)
  plutoniumMine.updateButton();

  diamondMine.percentage = Math.round(((diamondMine.production * diamondMine.count) / income) * 100)
  diamondMine.updateButton();

  income /= 10;

  money += income;

  moneyDisplay.innerHTML = '$' + prettifyInt(Math.round(money*10)/10);
  incomeDisplay.innerHTML = "$" + prettifyInt(income*10) + "/s";
}, 100)

let saveGame = () => {
  let save = {
    money: money,
    clicker: clicker,
    quarry: quarry,
    copperMine: copperMine,
    ironMine: ironMine,
    silverMine: silverMine,
    tungstenMine: tungstenMine,
    leadMine: leadMine,
    quartzMine: quartzMine,
    rubyMine: rubyMine,
    sapphireMine: sapphireMine,
    goldMine: goldMine,
    platinumMine: platinumMine,
    titaniumMine: titaniumMine,
    uraniumMine: uraniumMine,
    plutoniumMine: plutoniumMine,
    diamondMine: diamondMine,
  }

  localStorage.setItem("save", JSON.stringify(save));

  console.log("Saved game")
}

setInterval(() => {
  money = Math.round(money * 10)/10;
  moneyDisplay.innerHTML = '$' + prettifyInt(money);
}, 5)

setInterval(saveGame, 10000);

let wipeSave = () => {
  localStorage.removeItem("save");
  location.reload();
}
