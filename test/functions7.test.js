const expect = require('chai').expect;
const functions = require('../js/functions7');
const fct13 = require('../js/functions');

describe('Function Challenge 7 tests', () => {
  it('counter(nr) function that returns an object containing two functions that implement an up/down counter, hiding the counter', () => {
    const object = functions.counter(10);
    const up = object.up;
    const down = object.down;

    expect(up(), '10 plus 1 equals 11').to.equal(11);
    expect(down(), '11 minus 1 equals 10').to.equal(10);
    expect(down(), '10 minus 1 equals 9').to.equal(9);
    expect(up(), '9 plus 1 equals 10').to.equal(10);
  });

  it('revocable() takes a binary fct and returns an object containing an invoke fct that can invoke our binary fct, and a revoke fct that disables the invoke fct', () => {
    const rev = functions.revocable(fct13.add);
    const addRev = rev.invoke;
    expect(addRev(3, 4), '3 plus 4 eq 7').to.equal(7);
    rev.revoke();
    // eslint-disable-next-line no-unused-expressions
    expect(addRev(5, 7), 'adding is revoked => undefined').to.be.undefined;
  });
});
