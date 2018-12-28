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
        var adunare = addf(3)(4);

        var inmultire = functions.liftf(functions.mul)(5)(6);

        expect(adunare).to.equal(7);
        expect(inmultire).to.equal(30);
    });
});

