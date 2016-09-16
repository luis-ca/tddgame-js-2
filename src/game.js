function Game(
  player1,
  player2,
  attackDie,
  defenseDie) {
  this.attacker = player1;
  this.defender = player2;

  this.attackDie = attackDie;
  this.defenseDie = defenseDie;
}

Game.prototype.play = function() {
  var attackValue = this.attacker.attack(
    this.attackDie);

  var defenderSucceeded = this.defender.defend(
    this.defenseDie,
    attackValue);

  if (defenderSucceeded) {
    var player = this.attacker;
    this.attacker = this.defender;
    this.defender = player;
  }
};

Game.prototype.playAll = function() {
  while(this.attacker.life > 0
    && this.defender.life > 0) {
    this.play();
  }

  return (this.attacker.life > 0)
    ? this.attacker
    : this.defender;
};

module.exports = Game;
