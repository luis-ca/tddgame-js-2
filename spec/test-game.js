var expect = require('chai').expect;
var sinon = require('sinon');

var Game = require('../src/game');
var Player = require('../src/player');
var Die = require('../src/die');

describe('Game', function() {

  var attackDie = new Die(8),
    defenseDie = new Die(12),
    player1,
    player2,
    game;

  beforeEach(function () {
    player1 = new Player(10);
    player2 = new Player(10);
    game = new Game(player1, player2,
      attackDie, defenseDie);
  });

  describe('on play', function() {

    it('player1 attacks the defender', function() {
      player1.attack = sinon.spy();
      game.play();

      expect(player1.attack.called).to.be.true;
    });

    it('player2 defends attack', function() {
      player1.attack = sinon.stub().returns(3);
      player2.defend = sinon.spy();

      game.play();

      expect(player2.defend.calledWith(defenseDie, 3))
        .to.be.true;
    });

  })

});
