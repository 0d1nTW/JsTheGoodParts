'use strict'

//all functions in challenge 1, 2, 3
const log = function log(arg) {
  console.log(arg);
};
const identity = function identity(x) {
  return x;
};
const add = function add(nr1, nr2) {
  return nr1 + nr2;
};

const sub = function sub(nr1, nr2) {
  return nr1 - nr2;
};
const mul = function mul(nr1, nr2) {
  return nr1 * nr2;
};

const doubl = function doubl(nr1) {
  return 2 * nr1;
};

const square = function square(nr1) {
  return mul(nr1, nr1);
};

const identityf = function identityf(x) {
  return function myIdentity() {
    return x;
  };
};
const addf = function addf(nr1) {
  return function secondTerm(nr2) {
    return add(nr1, nr2);
  };
};

const liftf = function liftf(binary) {
  return function (nr1) {
    return function (nr2) {
      return binary(nr1, nr2);
    };
  };
};

const curry = function curry(binary, nr1) {
  return function (nr2) {
    return binary(nr1, nr2);
  };
};

const curry2 = function curry2(binary, nr1) {
  return liftf(binary)(nr1);
};

const twice = function twice(binary) {
  return function (nr1) {
    return binary(nr1, nr1);
  };
};


const doublfct = function doublfct(binary) {
  return twice(binary);
};

const reverse = function reverse(binary) {
  return function (nr1, nr2) {
    return binary(nr2, nr1);
  };
};

const reversefancy = function reversefancy(func) {
  return function (...args) {
    return func(...args.reverse());
  };
};

const composeu = function composeu(unary1, unary2) {
  return function (nr1) {
    return unary2(unary1(nr1));
  };
};

const composeb = function composeb(binaryFunc1, binaryFunc2) {
  return function (nr1, nr2, nr3) {
    return binaryFunc2(binaryFunc1(nr1, nr2), nr3);
  };
};

const limit = function limit(binaryFunc1, nrOfCallsForBF1) {
  let calls = nrOfCallsForBF1;
  return function (nr1, nr2) {
    if (calls >= 1) {
      calls -= 1;
      return binaryFunc1(nr1, nr2);
    }
    return undefined;
  };
};

module.exports = {
  add,
  sub,
  mul,
  doubl,
  square,
  identityf,
  addf,
  liftf,
  curry,
  curry2,
  twice,
  doublfct,
  reverse,
  reversefancy,
  composeu,
  composeb,
  limit,
};
