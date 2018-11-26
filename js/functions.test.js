var expect = require('chai').expect;

describe('Our first test', ()=> {
    it('should pass', ()=> {
        expect(true).to.equal(true);
    })
})

describe('Arithmetical operations test', ()=> {
    it('Add function test', ()=> {
        expect(add(3,4)).to.equal(7);
    })

    it('Subtract function test', ()=> {
        expect(sub(3,4)).to.equal(-1);
    })

    it('Subtract function test', ()=> {
        expect(mul(3,4)).to.equal(12);
    })
})


