var calculator = require('../index')
var assert = require('assert')

var calc = new calculator();

it('should add two numbers', function(){
  x =  calc.add(3, 5);
  assert.equal(x, 8);
})

it('should multiply two numbers', function(){
  x =  calc.multiply(3, 5);
  assert.equal(x, 15);
})
