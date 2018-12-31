'use strict'

var log = function (arg) {
  console.log(arg);
};
var identity = function (x) {
  return x;
};
var add = function (nr1, nr2) {
  return nr1 + nr2;
};

var sub = function (nr1, nr2) {
  return nr1 - nr2;
};
var mul = function (nr1, nr2) {
  return nr1 * nr2;
};

var doubl = function (nr1) {
  return 2 * nr1;
};

var square = function (nr1) {
  return mul(nr1, nr1);
};

var identityf = function (x) {
  return function () {
    return x;
  };
};
var addf = function (nr1) {
  return function (nr2) {
    return add(nr1, nr2);
  };
};

var liftf = function (binary) {
  return function (nr1) {
    return function (nr2) {
      return binary(nr1, nr2);
    };
  };
};

var curry = function (binary, nr1) {
  return function (nr2) {
    return binary(nr1, nr2);
  };
};

var curry2 = function (binary, nr1) {
  return liftf(binary)(nr1);
};

var twice = function (binary) {
  return function (nr1) {
    return binary(nr1, nr1);
  };
};


var doublfct = function (binary) {
  return twice(binary);
};

var reverse = function (binary) {
  return function (nr1, nr2) {
    return binary(nr2, nr1);
  };
};

var reversefancy = function (func) {
  return function (...args) {
    return func(...args.reverse());
  };
};

var composeu = function (unary1, unary2) {
  return function (nr1) {
    return unary2(unary1(nr1));
  };
};

var composeb = function (binaryFunc1, binaryFunc2) {
  return function (nr1, nr2, nr3) {
    return binaryFunc2(binaryFunc1(nr1, nr2), nr3);
  };
};

var limit = function (binaryFunc1, nrOfCallsForBF1) {
  var _calls = nrOfCallsForBF1;
  return function (nr1, nr2) {
    if (_calls >= 1) {
      _calls -= 1;
      return binaryFunc1(nr1, nr2);
    }
    return undefined;
  };
};

module.exports = {
  add: add,
  sub: sub,
  mul: mul,
  doubl: doubl,
  square: square,
  identityf: identityf,
  addf: addf,
  liftf: liftf,
  curry: curry,
  curry2: curry2,
  twice: twice,
  doublfct: doublfct,
  reverse: reverse,
  reversefancy: reversefancy,
  composeu: composeu,
  composeb: composeb,
  limit: limit
};
