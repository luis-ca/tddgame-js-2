function Player(life) {
  this.life = life;
}

Player.prototype.attack = function(die) {
  return die.roll();
}

module.exports = Player;
