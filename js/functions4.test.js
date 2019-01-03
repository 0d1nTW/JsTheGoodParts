'use strict'

const expect = require('chai').expect;
const functions = require('./functions4');

describe('Function Challenge 4 tests', () => {
  it('from() function produces a generator that will produce a series of values', () => {
    const index = functions.from(0);
    expect(index()).to.equal(0);
    expect(index()).to.equal(1);
    expect(index()).to.equal(2);
  });

  it('to() function that takes a generator and an end value, and returns a generator that will produce numbers up to that limit (end value)', () => {
    const index = functions.to(functions.from(1), 3);
    expect(index()).to.equal(1);
    expect(index()).to.equal(2);
    expect(index()).to.be.undefined;
  });

  it('fromTo() fct produces a generator that will produce values in a range', () => {
    const index = functions.fromTo(0, 3);
    expect(index()).to.equal(0);
    expect(index()).to.equal(1);
    expect(index()).to.equal(2);
    expect(index()).to.be.undefined;
  });

  it('element() takes an array and a generator and returns a generator that will produce elements from the array', () => {
    const ele = functions.element([
      'a', 'b', 'c', 'd',
    ], functions.fromTo(1, 3));

    expect(ele()).to.equal('b');
    expect(ele()).to.equal('c');
    expect(ele()).to.be.undefined;
  });

  it('modify element() so that the generator function argument is optional. If generator is not provided then each of the elements of the array will be produced', () => {
    const ele = functions.element([
      'a', 'b', 'c', 'd',
    ]);
    expect(ele()).to.equal('a');
    expect(ele()).to.equal('b');
    expect(ele()).to.equal('c');
    expect(ele()).to.equal('d');
    expect(ele()).to.be.undefined;
  });
});
