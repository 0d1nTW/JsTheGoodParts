'use strict'

var from = function (startingNumber) {
  return function () {
    var next = startingNumber;
    startingNumber += 1;
    return next;
  };
};

var to = function (generatorFunc, upperLimit) {
  return function () {
    var startingNumber = generatorFunc();
    if (startingNumber < upperLimit) {
      return startingNumber;
    };
    return undefined;
  };
};

var fromTo = function (start, end) {
  return to(
    from(start),
    end
  );
};

var element = function (arr, generatorFunc) {
  if (generatorFunc === undefined) {
    generatorFunc = fromTo(0, arr.length);
  }
  return function () {
    var _index = generatorFunc();
    if (_index !== undefined) {
      return arr[_index];
    }
    return undefined;
  };
};


module.exports = {
  from: from,
  to: to,
  fromTo: fromTo,
  element: element
};
