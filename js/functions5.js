'use strict'
const fct4 = require('./functions4');

const fromTo = fct4.fromTo;

const collect = function collect(generatorFunc, arr) {
  return function collectReturn() {
    const index = generatorFunc();
    if (index !== undefined) {
      arr.push(index);
    }
    return index;
  };
};

const filter = function filter(generatorFunc, predFunc) {
  return function filterGen() {
    let value;
    do {
      value = generatorFunc();
    } while (value !== undefined && !predFunc(value));
    return value;
  };
};

const concat = function concat(generatorFunc1, generatorFunc2) {
  return function concatGen() {
    let value = generatorFunc1();
    if (value !== undefined) {
      return value;
    }
    value = generatorFunc2();
    return value;
  };
};

const concatMany = function concatMany(...gens) {
  const next = fct4.element(gens);
  let gen = next();
  return function recur() {
    const value = gen();
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
  fromTo,
  collect,
  filter,
  concat,
  concatMany,
};
