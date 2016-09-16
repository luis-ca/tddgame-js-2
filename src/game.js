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
};

module.exports = Game;
