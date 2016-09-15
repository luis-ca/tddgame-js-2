function Die(numSides) {
  this.sides = numSides;
}

Die.prototype.roll = function() {
  return 1 + Math.floor(this.sides * Math.random());
}

module.exports = Die;
