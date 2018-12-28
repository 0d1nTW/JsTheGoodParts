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
        }
    }
};


module.exports = {
    add: add,
    sub: sub,
    mul: mul,
    square: square,
    identityf: identityf,
    addf: addf,
    liftf: liftf
};