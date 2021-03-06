var expect = require('chai').expect;
var sinon = require('sinon');

var Die = require('../src/die');

describe('Dice', function() {

  var d = new Die(8);
    originalRandom = Math.random;

  afterEach(function() {
    Math.random = originalRandom;
  });

  it('has x number of sides', function (){
    expect(d.sides).to.equal(8);
  });

  it('has a roll function', function() {
    Math.random = sinon.stub().returns(0.443);

    expect(d.roll()).to.equal(4);
  });

  it('roll works in the border cases', function() {
    Math.random = sinon.stub().returns(0.0);
    expect(d.roll()).to.equal(1);

    Math.random = sinon.stub().returns(0.99);
    expect(d.roll()).to.equal(8);
  });

});
