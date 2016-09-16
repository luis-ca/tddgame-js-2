var Game = require('./src/game');
var Player = require('./src/player');
var Die = require('./src/die');

var oAttack = Player.prototype.attack;
var oDefend = Player.prototype.defend;

Player.prototype.attack = function() {
  var result = oAttack.apply(this, arguments)
  console.log(this.name + ' attacked with ' + result);
  return result;
}

Player.prototype.defend = function() {
  var lifeBefore = this.life;
  var result = oDefend.apply(this, arguments);

  console.log(this.name + ' defended with ' + result);

  if(this.life !== lifeBefore) {
    console.log(this.name + ' has lost '
      + (lifeBefore - this.life) + ' life points!');
  }
  return result;
}

var player1 = new Player(10, 'Leo');
var player2 = new Player(10, 'Pedro');

var game = new Game(player1, player2,
  new Die(8), new Die(12));

var winner = game.playAll();

console.log(winner.name + ' has won');
