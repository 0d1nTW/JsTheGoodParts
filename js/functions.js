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

var square = function (nr1) {
    return mul(nr1, nr1);
};


module.exports = {
    log: log,
    identity: identity,
    add: add,
    sub: sub,
    mul: mul,
    square: square
};