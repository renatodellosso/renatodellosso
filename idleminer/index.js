//Ideas:
//Upgrades that slowly produce buildings

let manualClick = document.getElementById('manual click');
let money = 0;
let moneyDisplay = document.getElementById('money');
let incomeDisplay = document.getElementById('income');

let million = 1000000;
let billion = million * 1000;

let prettifyInt = (i) => {
    return i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

let building = {

    buy: (b) => {
      if (money >= b.cost) {
        money -= b.cost;

        b.count++;
        b.cost = Math.round(b.cost * 1.5);

        building.updateButton(b);
      }
    },

    buyFactory: (b) => {
      if (money >= b.factoryCost) {
        money -= b.factoryCost;

        b.factories++;
        b.factoryCost = Math.round(b.factoryCost * 1.1);

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
      btn.innerHTML = Math.floor(b.count) + " " + b.name + " - costs $" + prettifyInt(b.cost) + ", produces $" + prettifyInt(b.production) + "/s ($" + b.production * Math.floor(b.count) + "/s total, " + b.percentage + "%)";;
      let uBtn = document.getElementById(b.name + 'Upgrade');
      uBtn.innerHTML = "Upgrade (doubles production): $" + prettifyInt(b.upgradeCost);
      if (typeof b.factories !== "undefined") {
        document.getElementById(b.name + 'Factory').innerHTML = b.factories + " Factories - costs $" + prettifyInt(b.factoryCost);
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
}

let tungstenMine = {
  name: "Tungsten Mines",
  cost: 45000,
  count: 0,
  production: 120,
  upgradeCost: 750000,
  percentage: 0,
}

let leadMine = {
  name: "Lead Mines",
  cost: 120000,
  count: 0,
  production: 300,
  upgradeCost: 1250000,
  percentage: 0,
}

let quartzMine = {
  name: "Quartz Mines",
  cost: 500000,
  count: 0,
  production: 600,
  upgradeCost: 3500000,
  percentage: 0,
}

let rubyMine = {
  name: "Ruby Mines",
  cost: 1200000,
  count: 0,
  production: 750,
  upgradeCost: 25000000,
  percentage: 0,
}

let sapphireMine = {
  name: "Sapphire Mines",
  cost: 2000000,
  count: 0,
  production: 1000,
  upgradeCost: 45000000,
  percentage: 0,
}

let goldMine = {
  name: "Gold Mines",
  cost: 25000000,
  count: 0,
  production: 5000,
  upgradeCost: 150000000,
  percentage: 0,
}

let platinumMine = {
  name: "Platinum Mines",
  cost: 150000000,
  count: 0,
  production: 12000,
  upgradeCost: 500000000,
  percentage: 0,
}

let titaniumMine = {
  name: "Titanium Mines",
  cost: 500000000,
  count: 0,
  production: 25000,
  upgradeCost: 1500000000,
  percentage: 0,
}

let uraniumMine = {
  name: "Uranium Mines",
  cost: 2500000000,
  count: 0,
  production: 100000,
  upgradeCost: 10000000000,
  percentage: 0,
}

let plutoniumMine = {
  name: "Plutonium Mines",
  cost: 12 * billion,
  count: 0,
  production: 250000,
  upgradeCost: 400 * billion,
  percentage: 0,
}

let diamondMine = {
  name: "Diamond Mines",
  cost: 50 * billion,
  count: 0,
  production: 800000,
  upgradeCost: 500 * billion,
  percentage: 0,
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

loadGame();

let tick = 1;

setInterval(() => {
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

  income *= globalUpgrade.mod;
  income = Math.round(income * 10)/10;

  let m = 100/71;

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

  income /= 10;

  if (tick % 100 === 0) {
    quarry.count += quarry.factories/10;
    copperMine.count += copperMine.factories/10;
    ironMine.count += ironMine.factories/10;
  }

  money += income;

  moneyDisplay.innerHTML = '$' + prettifyInt(Math.round(money*10)/10);
  incomeDisplay.innerHTML = "$" + prettifyInt(Math.round(income*100)/10) + "/s";
  document.getElementById('title').innerHTML = "Idle Miner - $" + prettifyInt(Math.round(money*10)/10);

  tick++;
  if (tick > 600) tick = 1;
}, 100)

let saveGame = () => {
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
