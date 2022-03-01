let input = document.getElementById('input')
let log = document.getElementById('log');
let stats = document.getElementById('stats');

//Declare classes
class Menu {
  constructor(s, r) {
    this.start = s;
    this.resolveInput = r;
  }
}

class Monster {
  constructor(name, hitChance, damage, points) {
    this.name = name;
    this.hitChance = hitChance;
    this.damage = damage;
    this.points = points;
  }
}

class Room extends Menu {
  constructor(init) {
    super();
    init(this);
  }
}

class Achievement {
  constructor(name, points) {
    this.name = name;
    this.points = points;
    this.amount = 1;
  }
}

let emptyLine = "<br><br>";

let player = {
  name: "",
  className: "",
  hp: 0,
  maxHP: 0,
  attack: 0,
  attackBonus: 0,
  mana: 0,
  score: 0,
  achievements: [],
  inventory: [
    "Sword"
  ],

  addAchievement: (a) => {
    for (var i = 0; i < player.achievements.length; i++) {
      if (player.achievements[i].name == a.name) {
        player.achievements[i].amount += 1;
        player.achievements[i].points += a.points;
        return
      }
    }

    player.achievements.push(a);
  }
}

let playerClasses = [
  {
    name: "Wizard",
    hp: 8,
    attack: 4,
    mana: 10
  }, {
    name: "Fighter",
    hp: 12,
    attack: 6,
    mana: 5
  }, {
    name: "Rogue",
    hp: 10,
    attack: 5,
    mana: 7
  }
]

let updateStats = () => {
  stats.innerHTML = player.name + "<br>" + player.className + "<br>";
  stats.innerHTML += "HP: " + player.hp + "/" + player.maxHP + "<br>";
  stats.innerHTML += "ATK: " + player.attack + "<br>";
  stats.innerHTML += "MANA: " + player.mana + emptyLine;
  stats.innerHTML += "Inventory:<br>";

  for (var i = 0; i < player.inventory.length; i++) {
    stats.innerHTML += player.inventory[i] + "<br>";
  }
}

//Declare menus
let menus = {
  start: new Menu(() => {
    log.innerHTML += "Welcome to the Death Vault!";
    log.innerHTML += emptyLine;
    log.innerHTML += "Enter anything to play..."
  }, (t) => {
    currentMenu = "nameEnter";
    menus[currentMenu].start();
  }),

  nameEnter: new Menu(() => {
    log.innerHTML = "Enter your name...";
  }, (t) => {
    player.name = t;
    currentMenu = "classSelect";
    menus[currentMenu].start();
  }),

  classSelect: new Menu(() => {
    log.innerHTML = "";
    log.innerHTML += "Select your class:";
    log.innerHTML += emptyLine;
    for (var i = 0; i < playerClasses.length; i++) {
      log.innerHTML += "[" + i + "] " + playerClasses[i].name + "<br>";
      log.innerHTML += "HP: " + playerClasses[i].hp + "<br>";
      log.innerHTML += "ATK: " + playerClasses[i].attack + "<br>";
      log.innerHTML += "MANA: " + playerClasses[i].mana + "<br><br>";
    }
    log.innerHTML += "Enter the number of the class you want...";
  }, (t) => {
    if(t >= 0 && t < playerClasses.length) {
      player.maxHP = playerClasses[t].hp;
      player.hp = playerClasses[t].hp;
      player.attack = playerClasses[t].attack;
      player.mana = playerClasses[t].mana;
      player.className = playerClasses[t].name;
      player.inventory = ["Sword"];

      updateStats();
      currentMenu = "tips";
      menus[currentMenu].start();
    }
  }),

  tips: new Menu(() => {
    log.innerHTML = "Before you start:" + emptyLine;
    log.innerHTML += "tips: <br>";
    log.innerHTML += "-Death Vault is hard. Be prepared to die.<br>";
    log.innerHTML += "-Be careful with your resources. They're not easily renewable." + emptyLine;
    log.innerHTML += "Commands:<br>";
    log.innerHTML += "exit <room> - exit the current room through the specified exit. <br>";
    log.innerHTML += "attack - attack the monster in the room (if there is one).";
    log.innerHTML += emptyLine + "Enter anything to continue";
  }, (t) => {
    currentMenu = "room01";
    menus[currentMenu].start();
  }),

  room01: new Room((r) => {
    r.name = "Room 1";
    r.exits = ["Room 2"];
  })
}

let currentMenu = "start";

//Add listener for enter key press
input.addEventListener("keyup", function(event) {
  if(event.keyCode == 13) {
    var text = input.value;
    console.log("Input: " + text);
    input.value = "";
    menus[currentMenu].resolveInput(text);
  }
})

menus[currentMenu].start();
