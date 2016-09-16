function Player(life, name) {
  this.life = life;
  this.name = name;
}

Player.prototype.attack = function(die) {
  return die.roll();
}

Player.prototype.defend = function(die, attack) {
  var defense = die.roll();
  var result = attack - defense;

  if (result > 0) {
    this.life -= result;
  }

  return defense;
}

module.exports = Player;
