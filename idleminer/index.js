let manualClick = document.getElementById('manual click');
let money = 0;
let moneyDisplay = document.getElementById('money');
let incomeDisplay = document.getElementById('income');

let prettifyInt = (i) => {
    return i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

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

      quarry.upgradeCost = Math.round(quarry.upgradeCost * 10);
      quarry.updateButton();
    }
  },

  updateButton: () => {
    let btn = document.getElementById('quarry');
    btn.innerHTML = quarry.count + " " + quarry.name + " - costs $" + prettifyInt(quarry.cost) + ", produces $" + prettifyInt(quarry.production) + "/s";
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
    btn.innerHTML = copperMine.count + " " + copperMine.name + " - costs $" + prettifyInt(copperMine.cost) + ", produces $" + prettifyInt(copperMine.production) + "/s";
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
    btn.innerHTML = ironMine.count + " " + ironMine.name + " - costs $" + prettifyInt(ironMine.cost) + ", produces $" + prettifyInt(ironMine.production) + "/s";
    let uBtn = document.getElementById('ironMineUpgrade');
    uBtn.innerHTML = "Upgrade (doubles production): $" + prettifyInt(ironMine.upgradeCost);
  }
}

let silverMine = {
  name: "Silver Mines",
  cost: 10000,
  count: 0,
  production: 10,
  upgradeCost: 500000,

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
    btn.innerHTML = silverMine.count + " " + silverMine.name + " - costs $" + prettifyInt(silverMine.cost) + ", produces $" + prettifyInt(silverMine.production) + "/s";
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
    btn.innerHTML = tungstenMine.count + " " + tungstenMine.name + " - costs $" + prettifyInt(tungstenMine.cost) + ", produces $" + prettifyInt(tungstenMine.production) + "/s";
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
    btn.innerHTML = leadMine.count + " " + leadMine.name + " - costs $" + prettifyInt(leadMine.cost) + ", produces $" + prettifyInt(leadMine.production) + "/s";
    let uBtn = document.getElementById('leadMineUpgrade');
    uBtn.innerHTML = "Upgrade (doubles production): $" + prettifyInt(leadMine.upgradeCost);
  }
}

let quartzMine = {
  name: "Quartz Mines",
  cost: 500000,
  count: 0,
  production: 750,
  upgradeCost: 3500000,

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
    btn.innerHTML = quartzMine.count + " " + quartzMine.name + " - costs $" + prettifyInt(quartzMine.cost) + ", produces $" + prettifyInt(quartzMine.production) + "/s";
    let uBtn = document.getElementById('quartzMineUpgrade');
    uBtn.innerHTML = "Upgrade (doubles production): $" + prettifyInt(quartzMine.upgradeCost);
  }
}

let rubyMine = {
  name: "Ruby Mines",
  cost: 1200000,
  count: 0,
  production: 750,
  upgradeCost: 5000000,

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
    btn.innerHTML = rubyMine.count + " " + rubyMine.name + " - costs $" + prettifyInt(rubyMine.cost) + ", produces $" + prettifyInt(rubyMine.production) + "/s";
    let uBtn = document.getElementById('rubyMineUpgrade');
    uBtn.innerHTML = "Upgrade (doubles production): $" + prettifyInt(rubyMine.upgradeCost);
  }
}

let sapphireMine = {
  name: "Sapphire Mines",
  cost: 2000000,
  count: 0,
  production: 1000,
  upgradeCost: 1250000,

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
    btn.innerHTML = sapphireMine.count + " " + sapphireMine.name + " - costs $" + prettifyInt(sapphireMine.cost) + ", produces $" + prettifyInt(sapphireMine.production) + "/s";
    let uBtn = document.getElementById('sapphireMineUpgrade');
    uBtn.innerHTML = "Upgrade (doubles production): $" + prettifyInt(sapphireMine.upgradeCost);
  }
}

let loadGame = () => {
  let save = JSON.parse(localStorage.getItem("save"));

  if (save !== null) {

  if (typeof save.money !== "undefined") {
     money = save.money;
     moneyDisplay.innerHTML = money;
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


  console.log("Loaded game");
  }

  quarry.updateButton();
  copperMine.updateButton();
  ironMine.updateButton();
  silverMine.updateButton();
  tungstenMine.updateButton();
  leadMine.updateButton();
  quartzMine.updateButton();
  rubyMine.updateButton();
  sapphireMine.updateButton();
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

  money += income;

  moneyDisplay.innerHTML = '$' + prettifyInt(money);
  incomeDisplay.innerHTML = "$" + prettifyInt(income) + "/s";
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
    quartzMine: quartzMine,
    rubyMine: rubyMine,
    sapphireMine: sapphireMine,
  }

  localStorage.setItem("save", JSON.stringify(save));

  console.log("Saved game")
}

setInterval(() => {
  money = Math.round(money);
  moneyDisplay.innerHTML = '$' + prettifyInt(money);
}, 10)

setInterval(saveGame, 10000);

let wipeSave = () => {
  localStorage.removeItem("save");
  location.reload();
}
