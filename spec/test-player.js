var expect = require('chai').expect;
var sinon = require('sinon');

var Player = require('../src/player');
var Die = require('../src/die');

describe('Player', function() {

  var p;
  var die;

  beforeEach(function() {
    p = new Player(10);
    die = new Die(8);
  });

  it('attacks with a die', function () {
    Die.prototype.roll = sinon.spy();
    p.attack(die);

    expect(Die.prototype.roll.calledOnce).to.be.true;
  });

  it('defends given an attack', function() {
    Die.prototype.roll = sinon.spy();
    p.defend(die, 3);

    expect(Die.prototype.roll.calledOnce).to.be.true;
  });

  it('debits life points when defend less than attack', function() {
    Die.prototype.roll = sinon.stub().returns(2);
    p.defend(die, 5);

    expect(p.life).to.equal(7);
  });

  it('defends sucessfully when defend greater than attack', function() {
    Die.prototype.roll = sinon.stub().returns(8);

    expect(p.defend(die, 5)).to.be.true;
    expect(p.life).to.equal(10);
  });

});
