function Player(life) {
  this.life = life;
}

Player.prototype.attack = function(die) {
  return die.roll();
}

Player.prototype.defend = function(die) {
  die.roll();
}

module.exports = Player;
