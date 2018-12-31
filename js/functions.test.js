'use strict'
var expect = require('chai').expect;
const functions = require('./functions')

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  })
})

describe('Arithmetical operations test', () => {
  it('Add function test', () => {
    expect(functions.add(3, 4)).to.equal(7);
  })

  it('Subtract function test', () => {
    expect(functions.sub(3, 4)).to.equal(-1);
  })

  it('Multiply function test', () => {
    expect(functions.mul(3, 4)).to.equal(12);
  })

  it('Square function test', () => {
    expect(functions.square(3, 3)).to.equal(9);
  })
})

describe('Function challenge 1 tests', () => {
  it('identityf() function - returns a function that returns its argument', () => {
    var three = functions.identityf(3);
    var val = three();
    expect(val).to.equal(3);
  });

  it('addf() function - adds from 2 invocations ', () => {
    //fct(3)(4) = 7;
    var val = functions.addf(3)(4);
    expect(val).to.equal(7);
  });

  it('liftf() takes a binary fct and makes it callable with two invocations', () => {
    var addf = functions.liftf(functions.add);
    var summation = addf(3)(4);

    var multiplication = functions.liftf(functions.mul)(5)(6);

    expect(summation).to.equal(7);
    expect(multiplication).to.equal(30);
  });
});

describe('Function Challenge 2 tests', () => {
  it('curry(binaryFct,arg) returns function that can take a second arg', () => {
    var add3 = functions.curry2(functions.add, 3);
    var summation = add3(4);
    var multiplication = functions.curry2(functions.mul, 5)(6);
    expect(summation).to.equal(7);
    expect(multiplication).to.equal(30);
  });

  it('1 inc() function adds one to a number and returns it', () => {
    var inc = functions.addf(1);
    expect(inc(5)).to.equal(6);
    expect(inc(inc(5))).to.equal(7);
  });
  it('3 inc() function adds one to a number and returns it', () => {
    var inc = functions.liftf(functions.add)(1);
    expect(inc(5)).to.equal(6);
    expect(inc(inc(5))).to.equal(7);
  });
  it('2 inc() function adds one to a number and returns it', () => {
    var inc = functions.curry(functions.add, 1)
    expect(inc(5)).to.equal(6);
    expect(inc(inc(5))).to.equal(7);
  });
});

describe('Function Challenge 3 tests', () => {
  it('binary() takes a binary function, returns a unary function that passes its argument to the binary function twice', () => {
    var _doubl = functions.doublfct(functions.add);
    var square = functions.twice(functions.mul);

    expect(_doubl(11)).to.equal(22);
    expect(square(11)).to.equal(121);
  });
  it('reverse() a function that reverses the arguments of a binary function', () => {
    var bus = functions.reversefancy(functions.sub);

    expect(bus(3, 2)).to.equal(-1);
  });
  it('composeu() takes two unary functions and returns a unary function that calls them both', () => {
    var _composes = functions.composeu(functions.doubl, functions.square);

    expect(_composes(5)).to.equal(100);
  });
  it('composeb() takes two binary functions and returns a function that calls them both', () => {
    expect(functions.composeb(functions.add, functions.mul)(2, 3, 7)).to.equal(35);
  });

  it('limit() function allows a binary function to be called a limited nr of times', () => {
    var add_ltd = functions.limit(functions.add, 1);
    expect(add_ltd(3, 4)).to.equal(7);
    expect(add_ltd(3, 5)).to.be.undefined;
  });

});

