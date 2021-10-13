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
let sextillion = quintillion * 1000;
let septillion = sextillion * 1000;
let octillion = septillion * 1000;

let prettifyIntBasic = (i) => {
  return Math.floor(i).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

let prettifyInt = (i) => {
  let l = Math.round(i).toString().length;
  // console.log(l);

  let labels = ["Million", "Billion", "Trillion", "Quadrillion", "Quintillion", "Sextillion", "Septillion", "Octillion", "Nonillion", "Decillion", "Undecillion", "Duodecillion", "Tredecillion", "Quattuordecillion", "Quindecillion"];

  if (l <= 6 || money.toString().includes("e")) return prettifyIntBasic(i);

  // console.log(l <= 24)

  for (var x = 0; x < labels.length; x++) {
    if (l <= x * 3 + 9) {
      return (Math.round((i * 100)/(Math.pow(10, 6 + (x*3))))/100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " " + labels[x];
    }
  }

  return prettifyIntBasic(i);
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
        document.getElementById(b.name + 'Factory').innerHTML = b.factories + " Factories - produces 1 " + b.name + " every 10s, costs $" + prettifyInt(b.factoryCost);
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

let offlineUpgrade = {
  mod: .25,
  cost: 500 * trillion,

  upgrade: () => {
    if (money >= offlineUpgrade.cost && offlineUpgrade.mod < 1) {
      money -= offlineUpgrade.cost;
      offlineUpgrade.mod += 0.05;
      offlineUpgrade.cost *= 10;
      offlineUpgrade.updateButton();
    }
  },

  updateButton: () => {
    let btn = document.getElementById('offlineUpgrade');
    btn.innerHTML = Math.round(offlineUpgrade.mod*100) + "% offline income, upgrade (+5%): $" + prettifyInt(offlineUpgrade.cost);
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

let twoDimensionalMatterMine = {
  name: "2 Dimensional Matter Mines",
  cost: 15 * quadrillion,
  count: 0,
  production: 30 * billion,
  upgradeCost: 200 * quadrillion,
  percentage: 0,
  factories: 0,
  factoryCost: 500 * quadrillion,
}

let oneDimensionalMatterMine = {
  name: "1 Dimensional Matter Mines",
  cost: 350 * quadrillion,
  count: 0,
  production: 75 * billion,
  upgradeCost: quintillion,
  percentage: 0,
  factories: 0,
  factoryCost: 5 * quintillion,
}

let fourDimensionalMatterMine = {
  name: "4 Dimensional Matter Mines",
  cost: 2.5 * quintillion,
  count: 0,
  production: 400 * billion,
  upgradeCost: 40 * quintillion,
  percentage: 0,
  factories: 0,
  factoryCost: 250 * quintillion,
}

let eightDimensionalMatterMine = {
  name: "8 Dimensional Matter Mines",
  cost: 50 * quintillion,
  count: 0,
  production: 2 * trillion,
  upgradeCost: 400 * quintillion,
  percentage: 0,
  factories: 0,
  factoryCost: 2500 * quintillion,
}

let sixteenDimensionalMatterMine = {
  name: "16 Dimensional Matter Mines",
  cost: 5000 * quintillion,
  count: 0,
  production: 25 * trillion,
  upgradeCost: 40000 * quintillion,
  percentage: 0,
  factories: 0,
  factoryCost: 250000 * quintillion,
}


let twoFiftySixDimensionalMatterMine = {
  name: "256 Dimensional Matter Mines",
  cost: 5000 * quintillion,
  count: 0,
  production: quadrillion,
  upgradeCost: 0.5 * septillion,
  percentage: 0,
  factories: 0,
  factoryCost: 5 * septillion,
}

let zeroDimensionalMatterMine = {
  name: "0 Dimensional Matter Mines",
  cost: 10 * octillion,
  count: 0,
  production: 100 * quadrillion,
  upgradeCost: 150 * octillion,
  percentage: 0,
  factories: 0,
  factoryCost: 1000 * octillion,
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
    offlineUpgrade: offlineUpgrade,
    prestige: prestige,
    logOut: new Date().getTime(),
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
    twoDimensionalMatterMine: twoDimensionalMatterMine,
    oneDimensionalMatterMine: oneDimensionalMatterMine,
    fourDimensionalMatterMine: fourDimensionalMatterMine,
    eightDimensionalMatterMine: eightDimensionalMatterMine,
    sixteenDimensionalMatterMine: sixteenDimensionalMatterMine,
    twoFiftySixDimensionalMatterMine: twoFiftySixDimensionalMatterMine,
    zeroDimensionalMatterMine: zeroDimensionalMatterMine
  }

  localStorage.setItem("save", JSON.stringify(save));

  gtag('event', 'save', {
    'event_category': 'engagement',
    'event_label': 'save',
    'value': money
  })

  console.log("Saved game")
}

let income;

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

   if (typeof save.offlineUpgrade !== "undefined") {
     if (save.offlineUpgrade.mod !== "undefined") offlineUpgrade.mod = save.offlineUpgrade.mod;
     if (save.offlineUpgrade.cost !== "undefined") offlineUpgrade.cost = save.offlineUpgrade.cost;
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

  if (typeof save.twoDimensionalMatterMine !== "undefined") {
    if (typeof save.twoDimensionalMatterMine.cost !== "undefined") twoDimensionalMatterMine.cost = save.twoDimensionalMatterMine.cost;
    if (typeof save.twoDimensionalMatterMine.count !== "undefined") twoDimensionalMatterMine.count = save.twoDimensionalMatterMine.count;
    if (typeof save.twoDimensionalMatterMine.production !== "undefined") twoDimensionalMatterMine.production = save.twoDimensionalMatterMine.production;
    if (typeof save.twoDimensionalMatterMine.upgradeCost !== "undefined") twoDimensionalMatterMine.upgradeCost = save.twoDimensionalMatterMine.upgradeCost;
    if (typeof save.twoDimensionalMatterMine.factories !== "undefined") twoDimensionalMatterMine.factories = save.twoDimensionalMatterMine.factories;
    if (typeof save.twoDimensionalMatterMine.factoryCost !== "undefined") twoDimensionalMatterMine.factoryCost = save.twoDimensionalMatterMine.factoryCost;
  }

  if (typeof save.oneDimensionalMatterMine !== "undefined") {
    if (typeof save.oneDimensionalMatterMine.cost !== "undefined") oneDimensionalMatterMine.cost = save.oneDimensionalMatterMine.cost;
    if (typeof save.oneDimensionalMatterMine.count !== "undefined") oneDimensionalMatterMine.count = save.oneDimensionalMatterMine.count;
    if (typeof save.oneDimensionalMatterMine.production !== "undefined") oneDimensionalMatterMine.production = save.oneDimensionalMatterMine.production;
    if (typeof save.oneDimensionalMatterMine.upgradeCost !== "undefined") oneDimensionalMatterMine.upgradeCost = save.oneDimensionalMatterMine.upgradeCost;
    if (typeof save.oneDimensionalMatterMine.factories !== "undefined") oneDimensionalMatterMine.factories = save.oneDimensionalMatterMine.factories;
    if (typeof save.oneDimensionalMatterMine.factoryCost !== "undefined") oneDimensionalMatterMine.factoryCost = save.oneDimensionalMatterMine.factoryCost;
  }

  if (typeof save.fourDimensionalMatterMine !== "undefined") {
    if (typeof save.fourDimensionalMatterMine.cost !== "undefined") fourDimensionalMatterMine.cost = save.fourDimensionalMatterMine.cost;
    if (typeof save.fourDimensionalMatterMine.count !== "undefined") fourDimensionalMatterMine.count = save.fourDimensionalMatterMine.count;
    if (typeof save.fourDimensionalMatterMine.production !== "undefined") fourDimensionalMatterMine.production = save.fourDimensionalMatterMine.production;
    if (typeof save.fourDimensionalMatterMine.upgradeCost !== "undefined") fourDimensionalMatterMine.upgradeCost = save.fourDimensionalMatterMine.upgradeCost;
    if (typeof save.fourDimensionalMatterMine.factories !== "undefined") fourDimensionalMatterMine.factories = save.fourDimensionalMatterMine.factories;
    if (typeof save.fourDimensionalMatterMine.factoryCost !== "undefined") fourDimensionalMatterMine.factoryCost = save.fourDimensionalMatterMine.factoryCost;
  }

  if (typeof save.eightDimensionalMatterMine !== "undefined") {
    if (typeof save.eightDimensionalMatterMine.cost !== "undefined") eightDimensionalMatterMine.cost = save.eightDimensionalMatterMine.cost;
    if (typeof save.eightDimensionalMatterMine.count !== "undefined") eightDimensionalMatterMine.count = save.eightDimensionalMatterMine.count;
    if (typeof save.eightDimensionalMatterMine.production !== "undefined") eightDimensionalMatterMine.production = save.eightDimensionalMatterMine.production;
    if (typeof save.eightDimensionalMatterMine.upgradeCost !== "undefined") eightDimensionalMatterMine.upgradeCost = save.eightDimensionalMatterMine.upgradeCost;
    if (typeof save.eightDimensionalMatterMine.factories !== "undefined") eightDimensionalMatterMine.factories = save.eightDimensionalMatterMine.factories;
    if (typeof save.eightDimensionalMatterMine.factoryCost !== "undefined") eightDimensionalMatterMine.factoryCost = save.eightDimensionalMatterMine.factoryCost;
  }

  if (typeof save.sixteenDimensionalMatterMine !== "undefined") {
    if (typeof save.sixteenDimensionalMatterMine.cost !== "undefined") sixteenDimensionalMatterMine.cost = save.sixteenDimensionalMatterMine.cost;
    if (typeof save.sixteenDimensionalMatterMine.count !== "undefined") sixteenDimensionalMatterMine.count = save.sixteenDimensionalMatterMine.count;
    if (typeof save.sixteenDimensionalMatterMine.production !== "undefined") sixteenDimensionalMatterMine.production = save.sixteenDimensionalMatterMine.production;
    if (typeof save.sixteenDimensionalMatterMine.upgradeCost !== "undefined") sixteenDimensionalMatterMine.upgradeCost = save.sixteenDimensionalMatterMine.upgradeCost;
    if (typeof save.sixteenDimensionalMatterMine.factories !== "undefined") sixteenDimensionalMatterMine.factories = save.sixteenDimensionalMatterMine.factories;
    if (typeof save.sixteenDimensionalMatterMine.factoryCost !== "undefined") sixteenDimensionalMatterMine.factoryCost = save.sixteenDimensionalMatterMine.factoryCost;
  }

  if (typeof save.twoFiftySixDimensionalMatterMine !== "undefined") {
    if (typeof save.twoFiftySixDimensionalMatterMine.cost !== "undefined") twoFiftySixDimensionalMatterMine.cost = save.twoFiftySixDimensionalMatterMine.cost;
    if (typeof save.twoFiftySixDimensionalMatterMine.count !== "undefined") twoFiftySixDimensionalMatterMine.count = save.twoFiftySixDimensionalMatterMine.count;
    if (typeof save.twoFiftySixDimensionalMatterMine.production !== "undefined") twoFiftySixDimensionalMatterMine.production = save.twoFiftySixDimensionalMatterMine.production;
    if (typeof save.twoFiftySixDimensionalMatterMine.upgradeCost !== "undefined") twoFiftySixDimensionalMatterMine.upgradeCost = save.twoFiftySixDimensionalMatterMine.upgradeCost;
    if (typeof save.twoFiftySixDimensionalMatterMine.factories !== "undefined") twoFiftySixDimensionalMatterMine.factories = save.twoFiftySixDimensionalMatterMine.factories;
    if (typeof save.twoFiftySixDimensionalMatterMine.factoryCost !== "undefined") twoFiftySixDimensionalMatterMine.factoryCost = save.twoFiftySixDimensionalMatterMine.factoryCost;
  }

  if (typeof save.zeroDimensionalMatterMine !== "undefined") {
    if (typeof save.zeroDimensionalMatterMine.cost !== "undefined") zeroDimensionalMatterMine.cost = save.zeroDimensionalMatterMine.cost;
    if (typeof save.zeroDimensionalMatterMine.count !== "undefined") zeroDimensionalMatterMine.count = save.zeroDimensionalMatterMine.count;
    if (typeof save.zeroDimensionalMatterMine.production !== "undefined") zeroDimensionalMatterMine.production = save.zeroDimensionalMatterMine.production;
    if (typeof save.zeroDimensionalMatterMine.upgradeCost !== "undefined") zeroDimensionalMatterMine.upgradeCost = save.zeroDimensionalMatterMine.upgradeCost;
    if (typeof save.zeroDimensionalMatterMine.factories !== "undefined") zeroDimensionalMatterMine.factories = save.zeroDimensionalMatterMine.factories;
    if (typeof save.zeroDimensionalMatterMine.factoryCost !== "undefined") zeroDimensionalMatterMine.factoryCost = save.zeroDimensionalMatterMine.factoryCost;
  }

  if (typeof save.prestige !== "undefined") {
    prestige = save.prestige;
  }

  if (typeof save.logOut !== "undefined") {
    let s = setInterval(() => {
      let g = Math.round((new Date().getTime() - save.logOut) * (income/1000));
      g *= offlineUpgrade.mod;
      g *= globalUpgrade.mod;
      money += g;
      alert("You gained $" + prettifyInt(g) + " from offline production");
      console.log("Gained $" + g + " from offline production")
      clearInterval(s);
    }, 50);
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
  offlineUpgrade.updateButton();
}

loadGame(false);

let lastTick = new Date().getTime();

setInterval(() => {
  let d = new Date().getTime();
  income = 0;

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
  income += twoDimensionalMatterMine.count * twoDimensionalMatterMine.production;
  income += oneDimensionalMatterMine.count * oneDimensionalMatterMine.production;
  income += fourDimensionalMatterMine.count * fourDimensionalMatterMine.production;
  income += eightDimensionalMatterMine.count * eightDimensionalMatterMine.production;
  income += sixteenDimensionalMatterMine.count * sixteenDimensionalMatterMine.production;
  income += twoFiftySixDimensionalMatterMine.count * twoFiftySixDimensionalMatterMine.production;
  income += zeroDimensionalMatterMine.count * zeroDimensionalMatterMine.production;

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

  twoDimensionalMatterMine.percentage = Math.round(((twoDimensionalMatterMine.production * twoDimensionalMatterMine.count) / income) * 100 * m)
  building.updateButton(twoDimensionalMatterMine);

  oneDimensionalMatterMine.percentage = Math.round(((oneDimensionalMatterMine.production * oneDimensionalMatterMine.count) / income) * 100 * m)
  building.updateButton(oneDimensionalMatterMine);

  fourDimensionalMatterMine.percentage = Math.round(((fourDimensionalMatterMine.production * fourDimensionalMatterMine.count) / income) * 100 * m)
  building.updateButton(fourDimensionalMatterMine);

  eightDimensionalMatterMine.percentage = Math.round(((eightDimensionalMatterMine.production * eightDimensionalMatterMine.count) / income) * 100 * m)
  building.updateButton(eightDimensionalMatterMine);

  sixteenDimensionalMatterMine.percentage = Math.round(((sixteenDimensionalMatterMine.production * sixteenDimensionalMatterMine.count) / income) * 100 * m)
  building.updateButton(sixteenDimensionalMatterMine);

  twoFiftySixDimensionalMatterMine.percentage = Math.round(((twoFiftySixDimensionalMatterMine.production * twoFiftySixDimensionalMatterMine.count) / income) * 100 * m)
  building.updateButton(twoFiftySixDimensionalMatterMine);

  zeroDimensionalMatterMine.percentage = Math.round(((zeroDimensionalMatterMine.production * zeroDimensionalMatterMine.count) / income) * 100 * m)
  building.updateButton(zeroDimensionalMatterMine);

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
  twoDimensionalMatterMine.count += twoDimensionalMatterMine.factories/400;
  oneDimensionalMatterMine.count += oneDimensionalMatterMine.factories/400;
  fourDimensionalMatterMine.count += fourDimensionalMatterMine.factories/400;
  eightDimensionalMatterMine.count += eightDimensionalMatterMine.factories/400;
  sixteenDimensionalMatterMine.count += sixteenDimensionalMatterMine.factories/400;
  twoFiftySixDimensionalMatterMine.count += twoFiftySixDimensionalMatterMine.factories/400;
  zeroDimensionalMatterMine.count += zeroDimensionalMatterMine.factories/400;

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
    offlineUpgrade: offlineUpgrade,
    logOut: new Date().getTime(),
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
    twoDimensionalMatterMine: twoDimensionalMatterMine,
    oneDimensionalMatterMine: oneDimensionalMatterMine,
    fourDimensionalMatterMine: fourDimensionalMatterMine,
    eightDimensionalMatterMine: eightDimensionalMatterMine,
    sixteenDimensionalMatterMine: sixteenDimensionalMatterMine,
    twoFiftySixDimensionalMatterMine: twoFiftySixDimensionalMatterMine,
    zeroDimensionalMatterMine: zeroDimensionalMatterMine
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
