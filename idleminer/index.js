//Ideas:

let manualClick = document.getElementById('manualClick');
let money = 0;
let moneyDisplay = document.getElementById('money');
let incomeDisplay = document.getElementById('income');

let prestige = 0;

let loggingTicks = false;

let million = 1000000;
let billion = million * 1000;
let trillion = billion * 1000;
let quadrillion = trillion * 1000;
let quintillion = quadrillion * 1000;

let prettifyInt = (i) => {
    return i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

let building = {

    buy: (b) => {
      if (money >= Math.floor(b.cost)) {
        money -= Math.floor(b.cost);

        b.count++;
        b.cost = Math.round(b.cost * 1.1);

        building.updateButton(b);
      }
    },

    buyFactory: (b) => {
      if (money >= b.factoryCost) {
        money -= b.factoryCost;

        b.factories++;
        b.factoryCost = Math.round(b.factoryCost * 1.5);

        building.updateButton(b);
      }
    },

    upgrade: (b) => {
      if (money >= b.upgradeCost) {
        money -= b.upgradeCost;

        b.production *= 2;

        b.upgradeCost = Math.round(b.upgradeCost * 10);
        building.updateButton(b);
      }
    },

    updateButton: (b) => {
      let btn = document.getElementById(b.name);
      btn.innerHTML = Math.floor(b.count) + " " + b.name + " - costs $" + prettifyInt(Math.floor(b.cost)) + ", produces $" + prettifyInt(b.production) + "/s ($" + prettifyInt(Math.round(b.production * Math.floor(b.count) * globalUpgrade.mod * 100)/100) + "/s total, " + b.percentage + "%)";;
      let uBtn = document.getElementById(b.name + 'Upgrade');
      uBtn.innerHTML = "Upgrade (doubles production): $" + prettifyInt(b.upgradeCost);
      if (typeof b.factories !== "undefined") {
        document.getElementById(b.name + 'Factory').innerHTML = b.factories + " Factories - produces .1 " + b.name + "/s, costs $" + prettifyInt(b.factoryCost);
      }
    }
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
    btn.innerHTML = "$" + prettifyInt(clicker.mpc) + "/click, upgrade (x1.5/click): $" +  prettifyInt(clicker.cost);
  }
}

let globalUpgrade = {
  mod: 1,
  cost: 100000,

  upgrade: () => {
    if (money >= globalUpgrade.cost) {
      money -= globalUpgrade.cost;
      globalUpgrade.mod += 0.05;
      globalUpgrade.cost *= 5;
      globalUpgrade.updateButton();
    }
  },

  updateButton: () => {
    let btn = document.getElementById('globalUpgrade');
    btn.innerHTML = Math.round(globalUpgrade.mod*100) + "% income, upgrade (+5%): $" + prettifyInt(globalUpgrade.cost);
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
  factories: 0,
  factoryCost: 5 * million,
}

let copperMine = {
  name: "Copper Mines",
  cost: 300,
  count: 0,
  production: 6,
  upgradeCost: 50000,
  percentage: 0,
  factories: 0,
  factoryCost: 15 * million,
}

let ironMine = {
  name: "Iron Mines",
  cost: 1000,
  count: 0,
  production: 17,
  upgradeCost: 350000,
  percentage: 0,
  factories: 0,
  factoryCost: 40 * million,
}

let silverMine = {
  name: "Silver Mines",
  cost: 10000,
  count: 0,
  production: 50,
  upgradeCost: 500000,
  percentage: 0,
  factories: 0,
  factoryCost: 150 * million,
}

let tungstenMine = {
  name: "Tungsten Mines",
  cost: 45000,
  count: 0,
  production: 120,
  upgradeCost: 750000,
  percentage: 0,
  factories: 0,
  factoryCost: 700 * million,
}

let leadMine = {
  name: "Lead Mines",
  cost: 120000,
  count: 0,
  production: 300,
  upgradeCost: 1250000,
  percentage: 0,
  factories: 0,
  factoryCost: 2 * billion,
}

let quartzMine = {
  name: "Quartz Mines",
  cost: 500000,
  count: 0,
  production: 600,
  upgradeCost: 3500000,
  percentage: 0,
  factories: 0,
  factoryCost: 5 * billion,
}

let rubyMine = {
  name: "Ruby Mines",
  cost: 1.2 * million,
  count: 0,
  production: 1500,
  upgradeCost: 25 * million,
  percentage: 0,
  factories: 0,
  factoryCost: 12 * billion,
}

let sapphireMine = {
  name: "Sapphire Mines",
  cost: 8 * million,
  count: 0,
  production: 4000,
  upgradeCost: 45 * million,
  percentage: 0,
  factories: 0,
  factoryCost: 45 * billion,
}

let goldMine = {
  name: "Gold Mines",
  cost: 25 * million,
  count: 0,
  production: 10000,
  upgradeCost: 150 * million,
  percentage: 0,
  factories: 0,
  factoryCost: 115 * billion,
}

let platinumMine = {
  name: "Platinum Mines",
  cost: 150 * million,
  count: 0,
  production: 30000,
  upgradeCost: 650 * million,
  percentage: 0,
  factories: 0,
  factoryCost: 375 * billion,
}

let titaniumMine = {
  name: "Titanium Mines",
  cost: billion,
  count: 0,
  production: 100000,
  upgradeCost: 5 * billion,
  percentage: 0,
  factories: 0,
  factoryCost: 1 * trillion,
}

let uraniumMine = {
  name: "Uranium Mines",
  cost: 7.5 * billion,
  count: 0,
  production: 300000,
  upgradeCost: 10000000000,
  percentage: 0,
  factories: 0,
  factoryCost: 3.25 * trillion,
}

let plutoniumMine = {
  name: "Plutonium Mines",
  cost: 40 * billion,
  count: 0,
  production: 900000,
  upgradeCost: 250 * billion,
  percentage: 0,
  factories: 0,
  factoryCost: 10 * trillion,
}

let diamondMine = {
  name: "Diamond Mines",
  cost: 250 * billion,
  count: 0,
  production: 3.5 * million,
  upgradeCost: 2 * trillion,
  percentage: 0,
  factories: 0,
  factoryCost: 50 * trillion,
}

let emeraldMine = {
  name: "Emerald Mines",
  cost: 1 * trillion,
  count: 0,
  production: 15 * million,
  upgradeCost: 10 * trillion,
  percentage: 0,
  factories: 0,
  factoryCost: 250 * trillion,
}

let oganessonMine = {
  name: "Oganesson Mines",
  cost: 25 * trillion,
  count: 0,
  production: 400 * million,
  upgradeCost: 250 * trillion,
  percentage: 0,
  factories: 0,
  factoryCost: 1.25 * quadrillion,
}

let antimatterMine = {
  name: "Antimatter Mines",
  cost: 250 * trillion,
  count: 0,
  production: 5 * billion,
  upgradeCost: 2 * quadrillion,
  percentage: 0,
  factories: 0,
  factoryCost: 5 * quadrillion,
}

let updatePrestige = () => {
  document.getElementById('prestige').innerHTML = "Prestige, requires $1T, money will be converted to " + Math.round(money/trillion) + "% bonus production"
}

let attemptPrestige = () => {
  if (money >= trillion) {
    let bonus = Math.round(money/trillion);

    console.log(prestige);
    prestige += bonus;

    console.log(bonus);
    console.log(prestige);

    gtag('event', 'prestige', {
      'event_category': 'engagement',
      'event_label': 'prestige',
      'value': prestige
    })

    localStorage.setItem("prestige", prestige);
    localStorage.removeItem("save");
    location.reload();
  }
}


let saveGame = () => {
  let save = {
    money: money,
    clicker: clicker,
    globalUpgrade: globalUpgrade,
    prestige: prestige,
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
    emeraldMine: emeraldMine,
    oganessonMine: oganessonMine,
    antimatterMine: antimatterMine,
  }

  localStorage.setItem("save", JSON.stringify(save));

  gtag('event', 'save', {
    'event_category': 'engagement',
    'event_label': 'save',
    'value': money
  })

  console.log("Saved game")
}

let loadGame = (fromText) => {
  let save;

  if (!fromText) save = JSON.parse(localStorage.getItem("save"));
  else save = JSON.parse(prompt("Paste your save text here:"));

  if (save !== null) {

  if (typeof save.money !== "undefined") {
     money = save.money;
     moneyDisplay.innerHTML = money;
   }

   if (typeof save.clicker !== "undefined") {
     if(save.clicker.mpc !== "undefined") clicker.mpc = save.clicker.mpc;
     if(save.clicker.cost !== "undefined") clicker.cost = save.clicker.cost;
   }

   if (typeof save.globalUpgrade !== "undefined") {
     if (save.globalUpgrade.mod !== "undefined") globalUpgrade.mod = save.globalUpgrade.mod;
     if (save.globalUpgrade.cost !== "undefined") globalUpgrade.cost = save.globalUpgrade.cost;
   }

  if (typeof save.quarry !== "undefined") {
    if (typeof save.quarry.cost !== "undefined") quarry.cost = save.quarry.cost;
    if (typeof save.quarry.count !== "undefined") quarry.count = save.quarry.count;
    if (typeof save.quarry.production !== "undefined") quarry.production = save.quarry.production;
    if (typeof save.quarry.upgradeCost !== "undefined") quarry.upgradeCost = save.quarry.upgradeCost;
    if (typeof save.quarry.factories !== "undefined") quarry.factories = save.quarry.factories;
    if (typeof save.quarry.factoryCost !== "undefined") quarry.factoryCost = save.quarry.factoryCost;
  }

  if (typeof save.copperMine !== "undefined") {
    if (typeof save.copperMine.cost !== "undefined") copperMine.cost = save.copperMine.cost;
    if (typeof save.copperMine.count !== "undefined") copperMine.count = save.copperMine.count;
    if (typeof save.copperMine.production !== "undefined") copperMine.production = save.copperMine.production;
    if (typeof save.copperMine.upgradeCost !== "undefined") copperMine.upgradeCost = save.copperMine.upgradeCost;
    if (typeof save.copperMine.factories !== "undefined") copperMine.factories = save.copperMine.factories;
    if (typeof save.copperMine.factoryCost !== "undefined") copperMine.factoryCost = save.copperMine.factoryCost;
  }

  if (typeof save.ironMine !== "undefined") {
    if (typeof save.ironMine.cost !== "undefined") ironMine.cost = save.ironMine.cost;
    if (typeof save.ironMine.count !== "undefined") ironMine.count = save.ironMine.count;
    if (typeof save.ironMine.production !== "undefined") ironMine.production = save.ironMine.production
    if (typeof save.ironMine.upgradeCost !== "undefined") ironMine.upgradeCost = save.ironMine.upgradeCost;
    if (typeof save.ironMine.factories !== "undefined") ironMine.factories = save.ironMine.factories;
    if (typeof save.ironMine.factoryCost !== "undefined") ironMine.factoryCost = save.ironMine.factoryCost;
  }

  if (typeof save.silverMine !== "undefined") {
    if (typeof save.silverMine.cost !== "undefined") silverMine.cost = save.silverMine.cost;
    if (typeof save.silverMine.count !== "undefined") silverMine.count = save.silverMine.count;
    if (typeof save.silverMine.production !== "undefined") silverMine.production = save.silverMine.production;
    if (typeof save.silverMine.upgradeCost !== "undefined") silverMine.upgradeCost = save.silverMine.upgradeCost;
    if (typeof save.silverMine.factories !== "undefined") silverMine.factories = save.silverMine.factories;
    if (typeof save.silverMine.factoryCost !== "undefined") silverMine.factoryCost = save.silverMine.factoryCost;
  }

  if (typeof save.tungstenMine !== "undefined") {
    if (typeof save.tungstenMine.cost !== "undefined") tungstenMine.cost = save.tungstenMine.cost;
    if (typeof save.tungstenMine.count !== "undefined") tungstenMine.count = save.tungstenMine.count;
    if (typeof save.tungstenMine.production !== "undefined") tungstenMine.production = save.tungstenMine.production;
    if (typeof save.tungstenMine.upgradeCost !== "undefined") tungstenMine.upgradeCost = save.tungstenMine.upgradeCost;
    if (typeof save.tungstenMine.factories !== "undefined") tungstenMine.factories = save.tungstenMine.factories;
    if (typeof save.tungstenMine.factoryCost !== "undefined") tungstenMine.factoryCost = save.tungstenMine.factoryCost;
  }

  if (typeof save.leadMine !== "undefined") {
    if (typeof save.leadMine.cost !== "undefined") leadMine.cost = save.leadMine.cost;
    if (typeof save.leadMine.count !== "undefined") leadMine.count = save.leadMine.count;
    if (typeof save.leadMine.production !== "undefined") leadMine.production = save.leadMine.production;
    if (typeof save.leadMine.upgradeCost !== "undefined") leadMine.upgradeCost = save.leadMine.upgradeCost;
    if (typeof save.leadMine.factories !== "undefined") leadMine.factories = save.leadMine.factories;
    if (typeof save.leadMine.factoryCost !== "undefined") leadMine.factoryCost = save.leadMine.factoryCost;
  }

  if (typeof save.quartzMine !== "undefined") {
    if (typeof save.quartzMine.cost !== "undefined") quartzMine.cost = save.quartzMine.cost;
    if (typeof save.quartzMine.count !== "undefined") quartzMine.count = save.quartzMine.count;
    if (typeof save.quartzMine.production !== "undefined") quartzMine.production = save.quartzMine.production;
    if (typeof save.quartzMine.upgradeCost !== "undefined") quartzMine.upgradeCost = save.quartzMine.upgradeCost;
    if (typeof save.quartzMine.factories !== "undefined") quartzMine.factories = save.quartzMine.factories;
    if (typeof save.quartzMine.factoryCost !== "undefined") quartzMine.factoryCost = save.quartzMine.factoryCost;
  }

  if (typeof save.rubyMine !== "undefined") {
    if (typeof save.rubyMine.cost !== "undefined") rubyMine.cost = save.rubyMine.cost;
    if (typeof save.rubyMine.count !== "undefined") rubyMine.count = save.rubyMine.count;
    if (typeof save.rubyMine.production !== "undefined") rubyMine.production = save.rubyMine.production;
    if (typeof save.rubyMine.upgradeCost !== "undefined") rubyMine.upgradeCost = save.rubyMine.upgradeCost;
    if (typeof save.rubyMine.factories !== "undefined") rubyMine.factories = save.rubyMine.factories;
    if (typeof save.rubyMine.factoryCost !== "undefined") rubyMine.factoryCost = save.rubyMine.factoryCost;
  }

  if (typeof save.sapphireMine !== "undefined") {
    if (typeof save.sapphireMine.cost !== "undefined") sapphireMine.cost = save.sapphireMine.cost;
    if (typeof save.sapphireMine.count !== "undefined") sapphireMine.count = save.sapphireMine.count;
    if (typeof save.sapphireMine.production !== "undefined") sapphireMine.production = save.sapphireMine.production;
    if (typeof save.sapphireMine.upgradeCost !== "undefined") sapphireMine.upgradeCost = save.sapphireMine.upgradeCost;
    if (typeof save.sapphireMine.factories !== "undefined") sapphireMine.factories = save.sapphireMine.factories;
    if (typeof save.sapphireMine.factoryCost !== "undefined") sapphireMine.factoryCost = save.sapphireMine.factoryCost;
  }

  if (typeof save.goldMine !== "undefined") {
    if (typeof save.goldMine.cost !== "undefined") goldMine.cost = save.goldMine.cost;
    if (typeof save.goldMine.count !== "undefined") goldMine.count = save.goldMine.count;
    if (typeof save.goldMine.production !== "undefined") goldMine.production = save.goldMine.production;
    if (typeof save.goldMine.upgradeCost !== "undefined") goldMine.upgradeCost = save.goldMine.upgradeCost;
    if (typeof save.goldMine.factories !== "undefined") goldMine.factories = save.goldMine.factories;
    if (typeof save.goldMine.factoryCost !== "undefined") goldMine.factoryCost = save.goldMine.factoryCost;
  }

  if (typeof save.platinumMine !== "undefined") {
    if (typeof save.platinumMine.cost !== "undefined") platinumMine.cost = save.platinumMine.cost;
    if (typeof save.platinumMine.count !== "undefined") platinumMine.count = save.platinumMine.count;
    if (typeof save.platinumMine.production !== "undefined") platinumMine.production = save.platinumMine.production;
    if (typeof save.platinumMine.upgradeCost !== "undefined") platinumMine.upgradeCost = save.platinumMine.upgradeCost;
    if (typeof save.platinumMine.factories !== "undefined") platinumMine.factories = save.platinumMine.factories;
    if (typeof save.platinumMine.factoryCost !== "undefined") platinumMine.factoryCost = save.platinumMine.factoryCost;
  }

  if (typeof save.titaniumMine !== "undefined") {
    if (typeof save.titaniumMine.cost !== "undefined") titaniumMine.cost = save.titaniumMine.cost;
    if (typeof save.titaniumMine.count !== "undefined") titaniumMine.count = save.titaniumMine.count;
    if (typeof save.titaniumMine.production !== "undefined") titaniumMine.production = save.titaniumMine.production;
    if (typeof save.titaniumMine.upgradeCost !== "undefined") titaniumMine.upgradeCost = save.titaniumMine.upgradeCost;
    if (typeof save.titaniumMine.factories !== "undefined") titaniumMine.factories = save.titaniumMine.factories;
    if (typeof save.titaniumMine.factoryCost !== "undefined") titaniumMine.factoryCost = save.titaniumMine.factoryCost;
  }

  if (typeof save.uraniumMine !== "undefined") {
    if (typeof save.uraniumMine.cost !== "undefined") uraniumMine.cost = save.uraniumMine.cost;
    if (typeof save.uraniumMine.count !== "undefined") uraniumMine.count = save.uraniumMine.count;
    if (typeof save.uraniumMine.production !== "undefined") uraniumMine.production = save.uraniumMine.production;
    if (typeof save.uraniumMine.upgradeCost !== "undefined") uraniumMine.upgradeCost = save.uraniumMine.upgradeCost;
    if (typeof save.uraniumMine.factories !== "undefined") uraniumMine.factories = save.uraniumMine.factories;
    if (typeof save.uraniumMine.factoryCost !== "undefined") uraniumMine.factoryCost = save.uraniumMine.factoryCost;
  }

  if (typeof save.plutoniumMine !== "undefined") {
    if (typeof save.plutoniumMine.cost !== "undefined") plutoniumMine.cost = save.plutoniumMine.cost;
    if (typeof save.plutoniumMine.count !== "undefined") plutoniumMine.count = save.plutoniumMine.count;
    if (typeof save.plutoniumMine.production !== "undefined") plutoniumMine.production = save.plutoniumMine.production;
    if (typeof save.plutoniumMine.upgradeCost !== "undefined") plutoniumMine.upgradeCost = save.plutoniumMine.upgradeCost;
    if (typeof save.plutoniumMine.factories !== "undefined") plutoniumMine.factories = save.plutoniumMine.factories;
    if (typeof save.plutoniumMine.factoryCost !== "undefined") plutoniumMine.factoryCost = save.plutoniumMine.factoryCost;
  }

  if (typeof save.diamondMine !== "undefined") {
    if (typeof save.diamondMine.cost !== "undefined") diamondMine.cost = save.diamondMine.cost;
    if (typeof save.diamondMine.count !== "undefined") diamondMine.count = save.diamondMine.count;
    if (typeof save.diamondMine.production !== "undefined") diamondMine.production = save.diamondMine.production;
    if (typeof save.diamondMine.upgradeCost !== "undefined") diamondMine.upgradeCost = save.diamondMine.upgradeCost;
    if (typeof save.diamondMine.factories !== "undefined") diamondMine.factories = save.diamondMine.factories;
    if (typeof save.diamondMine.factoryCost !== "undefined") diamondMine.factoryCost = save.diamondMine.factoryCost;
  }

  if (typeof save.emeraldMine !== "undefined") {
    if (typeof save.emeraldMine.cost !== "undefined") emeraldMine.cost = save.emeraldMine.cost;
    if (typeof save.emeraldMine.count !== "undefined") emeraldMine.count = save.emeraldMine.count;
    if (typeof save.emeraldMine.production !== "undefined") emeraldMine.production = save.emeraldMine.production;
    if (typeof save.emeraldMine.upgradeCost !== "undefined") emeraldMine.upgradeCost = save.emeraldMine.upgradeCost;
    if (typeof save.emeraldMine.factories !== "undefined") emeraldMine.factories = save.emeraldMine.factories;
    if (typeof save.emeraldMine.factoryCost !== "undefined") emeraldMine.factoryCost = save.emeraldMine.factoryCost;
  }

  if (typeof save.oganessonMine !== "undefined") {
    if (typeof save.oganessonMine.cost !== "undefined") oganessonMine.cost = save.oganessonMine.cost;
    if (typeof save.oganessonMine.count !== "undefined") oganessonMine.count = save.oganessonMine.count;
    if (typeof save.oganessonMine.production !== "undefined") oganessonMine.production = save.oganessonMine.production;
    if (typeof save.oganessonMine.upgradeCost !== "undefined") oganessonMine.upgradeCost = save.oganessonMine.upgradeCost;
    if (typeof save.oganessonMine.factories !== "undefined") oganessonMine.factories = save.oganessonMine.factories;
    if (typeof save.oganessonMine.factoryCost !== "undefined") oganessonMine.factoryCost = save.oganessonMine.factoryCost;
  }

  if (typeof save.antimatterMine !== "undefined") {
    if (typeof save.antimatterMine.cost !== "undefined") antimatterMine.cost = save.antimatterMine.cost;
    if (typeof save.antimatterMine.count !== "undefined") antimatterMine.count = save.antimatterMine.count;
    if (typeof save.antimatterMine.production !== "undefined") antimatterMine.production = save.antimatterMine.production;
    if (typeof save.antimatterMine.upgradeCost !== "undefined") antimatterMine.upgradeCost = save.antimatterMine.upgradeCost;
    if (typeof save.antimatterMine.factories !== "undefined") antimatterMine.factories = save.antimatterMine.factories;
    if (typeof save.antimatterMine.factoryCost !== "undefined") antimatterMine.factoryCost = save.antimatterMine.factoryCost;
  }

  if (typeof save.prestige !== "undefined") {
    prestige = save.prestige;
  }

  console.log("Loaded game");
  } else {
    let p = localStorage.getItem("prestige");
    if (p !== null) {
      prestige = parseInt(p);
      globalUpgrade.mod += prestige/100;
      localStorage.removeItem("prestige");
      saveGame();
    }
  }

  clicker.updateButton();
  globalUpgrade.updateButton();

  building.updateButton(quarry);
  building.updateButton(copperMine);
  building.updateButton(ironMine);
  building.updateButton(silverMine);
  building.updateButton(tungstenMine);
  building.updateButton(leadMine);
  building.updateButton(quartzMine);
  building.updateButton(rubyMine);
  building.updateButton(sapphireMine);
  building.updateButton(goldMine);
  building.updateButton(platinumMine);
  building.updateButton(titaniumMine);
  building.updateButton(uraniumMine);
  building.updateButton(plutoniumMine);
  building.updateButton(diamondMine);
}

loadGame(false);

let lastTick = new Date().getTime();

setInterval(() => {
  let d = new Date().getTime();
  let income = 0;

  income += Math.floor(quarry.count) * quarry.production;
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
  income += emeraldMine.count * emeraldMine.production;
  income += oganessonMine.count * oganessonMine.production;
  income += antimatterMine.count * antimatterMine.production;

  income = Math.round(income * 100)/100;

  let m = 1; //100/71;

  quarry.percentage = Math.round(((quarry.production * Math.floor(quarry.count)) / income) * 100 * m)
  building.updateButton(quarry);

  copperMine.percentage = Math.round(((copperMine.production * copperMine.count) / income) * 100 * m)
  building.updateButton(copperMine);

  ironMine.percentage = Math.round(((ironMine.production * ironMine.count) / income) * 100 * m)
  building.updateButton(ironMine);

  silverMine.percentage = Math.round(((silverMine.production * silverMine.count) / income) * 100 * m)
  building.updateButton(silverMine);

  tungstenMine.percentage = Math.round(((tungstenMine.production * tungstenMine.count) / income) * 100 * m)
  building.updateButton(tungstenMine);

  leadMine.percentage = Math.round(((leadMine.production * leadMine.count) / income) * 100 * m)
  building.updateButton(leadMine);

  quartzMine.percentage = Math.round(((quartzMine.production * quartzMine.count) / income) * 100 * m)
  building.updateButton(quartzMine);

  rubyMine.percentage = Math.round(((rubyMine.production * rubyMine.count) / income) * 100 * m)
  building.updateButton(rubyMine);

  sapphireMine.percentage = Math.round(((sapphireMine.production * sapphireMine.count) / income) * 100 * m)
  building.updateButton(sapphireMine);

  goldMine.percentage = Math.round(((goldMine.production * goldMine.count) / income) * 100 * m)
  building.updateButton(goldMine);

  platinumMine.percentage = Math.round(((platinumMine.production * platinumMine.count) / income) * 100 * m)
  building.updateButton(platinumMine);

  titaniumMine.percentage = Math.round(((titaniumMine.production * titaniumMine.count) / income) * 100 * m)
  building.updateButton(titaniumMine);

  uraniumMine.percentage = Math.round(((uraniumMine.production * uraniumMine.count) / income) * 100 * m)
  building.updateButton(uraniumMine);

  plutoniumMine.percentage = Math.round(((plutoniumMine.production * plutoniumMine.count) / income) * 100 * m)
  building.updateButton(plutoniumMine);

  diamondMine.percentage = Math.round(((diamondMine.production * diamondMine.count) / income) * 100 * m)
  building.updateButton(diamondMine);

  emeraldMine.percentage = Math.round(((emeraldMine.production * emeraldMine.count) / income) * 100 * m)
  building.updateButton(emeraldMine);

  oganessonMine.percentage = Math.round(((oganessonMine.production * oganessonMine.count) / income) * 100 * m)
  building.updateButton(oganessonMine);

  antimatterMine.percentage = Math.round(((antimatterMine.production * antimatterMine.count) / income) * 100 * m)
  building.updateButton(antimatterMine);

  income *= globalUpgrade.mod;

  let p = d - lastTick;

  if (loggingTicks) {
    console.log("Time since last tick: " + p);
    console.log("Ticks/sec: " + Math.round(1000/p));
  }

  incomeDisplay.innerHTML = "$" + prettifyInt(Math.round(income*10)/10) + "/s";
  document.getElementById('baseIncome').innerHTML = "$" + prettifyInt(Math.round((income/globalUpgrade.mod)*100)/100) + "/s";

  income /= 1000;
  income *= p;

  lastTick = d;

  document.getElementById('actIncome').innerHTML = "$" + prettifyInt(Math.round(income*4000)/100) + "/s";

  quarry.count += quarry.factories/400;
  copperMine.count += copperMine.factories/400;
  ironMine.count += ironMine.factories/400;
  silverMine.count += silverMine.factories/400;
  tungstenMine.count += tungstenMine.factories/400;
  leadMine.count += leadMine.factories/400;
  quartzMine.count += quartzMine.factories/400;
  rubyMine.count += rubyMine.factories/400;
  sapphireMine.count += sapphireMine.factories/400;
  goldMine.count += goldMine.factories/400;
  platinumMine.count += platinumMine.factories/400;
  titaniumMine.count += titaniumMine.factories/400;
  uraniumMine.count += uraniumMine.factories/400;
  plutoniumMine.count += plutoniumMine.factories/400;
  diamondMine.count += diamondMine.factories/400;
  emeraldMine.count += emeraldMine.factories/400;
  oganessonMine.count += oganessonMine.factories/400;
  antimatterMine.count += antimatterMine.factories/400;

  money += income;

  moneyDisplay.innerHTML = '$' + prettifyInt(Math.round(money*100)/100);
  document.getElementById('title').innerHTML = "Idle Miner - $" + prettifyInt(Math.round(money*100)/100);
  updatePrestige();
}, 25)

let saveToText = () => {
  let save = {
    money: money,
    clicker: clicker,
    globalUpgrade: globalUpgrade,
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

  let text = document.querySelector('#textSave')
  let r = document.createRange();

  text.innerHTML = JSON.stringify(save);

  r.selectNodeContents(text);

  let s = window.getSelection();
  s.removeAllRanges();
  s.addRange(r);

  document.execCommand('copy');
  alert("Save copied to the clipboard.");

  text.innerHTML = "";
}

setInterval(() => {
  money = Math.round(money * 100)/100;
  moneyDisplay.innerHTML = '$' + prettifyInt(money);
}, 25)

setInterval(saveGame, 10000);

let wipeSave = () => {
  localStorage.removeItem("save");
  location.reload();
}
