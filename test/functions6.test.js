'use strict'

const expect = require('chai').expect;
const functions = require('../js/functions6');
const functions1to3 = require('../js/functions');

describe('Function Challenge 6 tests', () => {
  it('gensymf() is a factory that makes a function that generates unique symbols', () => {
    const geng = functions.gensymf2('G');
    const genh = functions.gensymf2('H');

    expect(geng()).to.equal('G1');
    expect(genh()).to.equal('H1');
    expect(geng()).to.equal('G2');
    expect(genh()).to.equal('H2');
    expect(genh()).to.equal('H3');
    expect(genh()).to.equal('H4');
  });

  it('gensymff() is a factory factory - it takes a unary function and a seed and returns a gensymf', () => {
    const inc = functions1to3.addf(1);
    const gensymf = functions.gensymff(inc, 0);
    const geng = gensymf('G');
    const genh = gensymf('H');

    expect(geng()).to.equal('G1');
    expect(genh()).to.equal('H1');
    expect(geng()).to.equal('G2');
    expect(genh()).to.equal('H2');
  });

  it('fibonaccif() returns a generator that will return the next fibonacci number', () => {
    const fib = functions.fibonaccif(0, 1);

    expect(fib()).to.equal(0);
    expect(fib()).to.equal(1);
    expect(fib()).to.equal(1);
    expect(fib()).to.equal(2);
    expect(fib()).to.equal(3);
    expect(fib()).to.equal(5);
    expect(fib()).to.equal(8);
  });

  it('fibonaccifBetter() returns a generator that will return the next fibonacci number', () => {
    const fib = functions.fibonaccifBetter(0, 1);

    expect(fib()).to.equal(0);
    expect(fib()).to.equal(1);
    expect(fib()).to.equal(1);
    expect(fib()).to.equal(2);
    expect(fib()).to.equal(3);
    expect(fib()).to.equal(5);
    expect(fib()).to.equal(8);
  });

  it('fibonacciFPrevFunctions() returns a generator that will return the next fibonacci number', () => {
    const fib = functions.fibonacciFPrevFunctions(0, 1);

    expect(fib()).to.equal(0);
    expect(fib()).to.equal(1);
    expect(fib()).to.equal(1);
    expect(fib()).to.equal(2);
    expect(fib()).to.equal(3);
    expect(fib()).to.equal(5);
    expect(fib()).to.equal(8);
  });
});
