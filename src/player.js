function Player(life) {
  this.life = life;
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

  return !(result > 0);
}

module.exports = Player;
