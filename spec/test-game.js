var expect = require('chai').expect;
var sinon = require('sinon');

var Game = require('../src/game');
var Die = require('../src/die');

describe('Game', function() {

  var player1, player2, game;

  beforeEach(function () {
    player1 = {
      life: 10
    };

    player2 = {
      life: 10
    };

    game = new Game(player1, player2);
  });

  describe('#playRound', function() {

    // game.playRound();

    // expect(game.player2.life).to.equal(8);

  })

});
