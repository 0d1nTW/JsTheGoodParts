/* eslint-disable prefer-template */
function m(value, optString) {
  return {
    value,
    source: (typeof optString === 'string') ? optString : String(value),
  };
}

function addm(obj1, obj2) {
  const addObj = m(
    obj1.value + obj2.value,
    '(' + obj1.source + '+' + obj2.source + ')'
  );
  return addObj;
}

function liftm(binaryFunc, str) {
  return function lift() {

  };
}

module.exports = {
  m,
  addm,
  liftm,
};
