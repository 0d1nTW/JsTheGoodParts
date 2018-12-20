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


