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

  buy: () => {
    if (money >= quarry.cost) {
      money -= quarry.cost;

      quarry.count++;
      quarry.cost = Math.round(quarry.cost * 1.1);

      quarry.updateButton();
    }
  },

  updateButton: () => {
    let btn = document.getElementById('quarry');
    btn.innerHTML = quarry.count + " " + quarry.name + " - costs $" + quarry.cost + ", produces $" + quarry.production + "/s";
  }
}

let copperMine = {
  name: "Copper Mines",
  cost: 300,
  count: 0,
  production: 6,

  buy: () => {
    if (money >= copperMine.cost) {
      money -= copperMine.cost;

      copperMine.count++;
      copperMine.cost = Math.round(copperMine.cost * 1.1);

      copperMine.updateButton();
    }
  },

  updateButton: () => {
    let btn = document.getElementById('copperMine');
    btn.innerHTML = copperMine.count + " " + copperMine.name + " - costs $" + copperMine.cost + ", produces $" + copperMine.production + "/s";
  }
}

let ironMine = {
  name: "Iron Mines",
  cost: 1000,
  count: 0,
  production: 17,

  buy: () => {
    if (money >= ironMine.cost) {
      money -= ironMine.cost;

      ironMine.count++;
      ironMine.cost = Math.round(ironMine.cost * 1.1);

      ironMine.updateButton();
    }
  },

  updateButton: () => {
    let btn = document.getElementById('ironMine');
    btn.innerHTML = ironMine.count + " " + ironMine.name + " - costs $" + ironMine.cost + ", produces $" + ironMine.production + "/s";
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
  }

  if (typeof save.copperMine !== "undefined") {
    if (typeof save.copperMine.cost !== "undefined") copperMine.cost = save.copperMine.cost;
    if (typeof save.copperMine.count !== "undefined") copperMine.count = save.copperMine.count;
    if (typeof save.copperMine.production !== "undefined") copperMine.production = save.copperMine.production;
  }

  if (typeof save.ironMine !== "undefined") {
    if (typeof save.ironMine.cost !== "undefined") ironMine.cost = save.ironMine.cost;
    if (typeof save.ironMine.count !== "undefined") ironMine.count = save.ironMine.count;
    if (typeof save.ironMine.production !== "undefined") ironMine.production = save.ironMine.production;
  }

  console.log("Loaded game");
  }

  quarry.updateButton();
  copperMine.updateButton();
  ironMine.updateButton();
}

loadGame();

setInterval(() => {
  let income = 0;

  income += quarry.count * quarry.production;
  income += copperMine.count * copperMine.production;
  income += ironMine.count * ironMine.production;

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
