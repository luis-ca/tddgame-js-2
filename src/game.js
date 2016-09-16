function Game(
  player1,
  player2,
  attackDie,
  defenseDie) {
  this.attacker = player1;
  this.defender = player2;

  this.attackDie = attackDie;
  this.attackDie = attackDie;
}

Game.prototype.play = function() {
  this.attacker.attack(this.attackDie);
};

module.exports = Game;
