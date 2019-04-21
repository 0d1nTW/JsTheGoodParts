'use strict'

var expect = require('chai').expect;
const functions = require('../js/functions5');

describe('Function Challenge 5 tests', () => {
  it('collect() function takes a generator and an array and produces a function that will collect the results in the array', () => {
    const array = [];
    const col = functions.collect(functions.fromTo(0, 2), array);

    expect(col()).to.equal(0);
    expect(col()).to.equal(1);
    expect(col()).to.be.undefined;
    expect(array).to.eql([0, 1]);
  });

  it('filter() takes a generator func and a predicate (fct that returns true or false) and produces a generator that produces only the values approved by the predicate.', () => {
    const fil = functions.filter(functions.fromTo(0, 5),
      function third(value) {
        return (value % 3) === 0;
      });

    expect(fil()).to.equal(0);
    expect(fil()).to.equal(3);
    expect(fil()).to.be.undefined;
  });

  it('concat() takes two generators and produces a generator that combines the sequences', () => {
    const con = functions.concat(functions.fromTo(0, 3),
      functions.fromTo(0, 2));

    expect(con()).to.equal(0);
    expect(con()).to.equal(1);
    expect(con()).to.equal(2);
    expect(con()).to.equal(0);
    expect(con()).to.equal(1);
    expect(con()).to.be.undefined;
  });

  it('concatMany() takes multiple generators and produces a generator that combines the sequences', () => {
    const conMany = functions.concatMany(functions.fromTo(0, 3),
      functions.fromTo(0, 2),
      functions.fromTo(0, 3));

    expect(conMany()).to.equal(0);
    expect(conMany()).to.equal(1);
    expect(conMany()).to.equal(2);
    expect(conMany()).to.equal(0);
    expect(conMany()).to.equal(1);
    expect(conMany()).to.equal(0);
    expect(conMany()).to.equal(1);
    expect(conMany()).to.equal(2);
    expect(conMany()).to.be.undefined;
  });
});
