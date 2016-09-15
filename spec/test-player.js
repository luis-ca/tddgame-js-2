var expect = require('chai').expect;
var sinon = require('sinon');

var Player = require('../src/player');
var Die = require('../src/die');

describe('Player', function() {
  var p = new Player(10);
  var die = new Die(8);

  it('can attack another player', function () {
    Die.prototype.roll = sinon.spy();
    p.attack(die);

    expect(Die.prototype.roll.calledOnce).to.be.true;
  })
});
