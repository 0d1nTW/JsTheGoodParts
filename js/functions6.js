'use strict'

const fct4 = require('./functions4');
const fct5 = require('./functions5');


const gensymf = function gensymf(str) {
  let index = 0;
  return function uniqueSymbols() {
    index += 1;
    return str + index;
  };
};

const gensymf2 = function gensymf2(prefixStr) {
  const index = fct4.from(1);
  return function uniqueSymbols() {
    return prefixStr.toString() + index().toString();
  };
};

const gensymff = function gensymff(unaryFunction, seed) {
  return function uniqueSymbolsFF(prefix) {
    let number = seed;
    return function combineNrAndSymbol() {
      number = unaryFunction(number);
      return prefix + number;
    };
  };
};

const fibonaccif = function fibonaccif(term1, term2) {
  let bunic = term1;
  let tata = term2;
  let count = 0;
  return function fibo() {
    if (bunic === 0 && tata === 1 && count === 0) {
      count += 1;
      return 0;
    }
    if (bunic === 0 && tata === 1 && count === 1) {
      count += 1;
      return 1;
    }
    const me = bunic + tata;
    bunic = tata;
    tata = me;
    return me;
  };
};

const fibonaccifBetter = function fibonaccifBetter(term1, term2) {
  return function fibo() {
    const next = term1;
    term1 = term2;
    term2 += next;
    return next;
  };
};

const fibonacciFPrevFunctions = function fibonacciFPrevFunctions(term1, term2) {
  return fct5.concat(
    fct4.element([term1, term2]),
    function fibonacci() {
      const next = term1 + term2;
      term1 = term2;
      term2 = next;
      return next;
    }
  );
};

module.exports = {
  gensymf,
  gensymf2,
  gensymff,
  fibonaccif,
  fibonaccifBetter,
  fibonacciFPrevFunctions,
};
