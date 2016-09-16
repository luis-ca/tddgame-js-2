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

    it('changes roles when defence is sucessful', function() {
      player2.attack = sinon.spy();
      player2.defend = sinon.stub().returns(12);

      game.play();

      expect(player2.attack.called).to.be.false;

      game.play();

      expect(player2.attack.called).to.be.true;
    });

  });

  describe('on playAll', function() {

    it('runs until one of the players perish', function() {
      var winner = game.playAll();

      expect(player1.life <= 0 || player2.life <= 0).to.be.true;
      expect(winner.life > 0).to.be.true;
    });

  });

});
