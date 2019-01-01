'use strict'
const fct4 = require('./functions4');

var from = fct4.from;
var to = fct4.to;
var fromTo = fct4.fromTo;

var collect = function (generatorFunc, arr) {
  return function () {
    var index = generatorFunc();
    if (index !== undefined) {
      arr.push(index);
    }
    return index;
  };
};

var filter = function (generatorFunc, predFunc) {
  return function () {
    var value;
    do {
      value = generatorFunc();
    } while (value !== undefined && !predFunc(value));
    return value;
  };
};

var concat = function (generatorFunc1, generatorFunc2) {
  return function () {
    var value = generatorFunc1();
    if (value !== undefined) {
      return value;
    }
    value = generatorFunc2();
    return value;
  }
};

var concatMany = function (...gens) {
  var next = fct4.element(gens),
    gen = next();

  return function recur() {
    var value = gen();
    if (value === undefined) {
      gen = next();
      if (gen !== undefined) {
        return recur();
      }
    }
    return value;
  };
};


module.exports = {
  fromTo: fromTo,
  collect: collect,
  filter: filter,
  concat: concat,
  concatMany: concatMany
};
