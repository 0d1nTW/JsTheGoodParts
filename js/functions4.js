'use strict'

const from = function from(startingNumber) {
  return function fromGen() {
    const next = startingNumber;
    startingNumber += 1;
    return next;
  };
};

const to = function to(generatorFunc, upperLimit) {
  return function toGen() {
    const startingNumber = generatorFunc();
    if (startingNumber < upperLimit) {
      return startingNumber;
    }
    return undefined;
  };
};

const fromTo = function fromTo(start, end) {
  return to(
    from(start),
    end
  );
};

const element = function element(arr, generatorFunc) {
  if (generatorFunc === undefined) {
    generatorFunc = fromTo(0, arr.length);
  }
  return function elementGenerator() {
    const index = generatorFunc();
    if (index !== undefined) {
      return arr[index];
    }
    return undefined;
  };
};


module.exports = {
  from,
  to,
  fromTo,
  element,
};
