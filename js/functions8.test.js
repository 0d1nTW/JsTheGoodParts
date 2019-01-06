const expect = require('chai').expect;
const functions = require('./functions8');
const fct13 = require('./functions');

describe('Function Challenge 8 tests', () => {
  it('m() takes a value and an optional source string and returns them as an object', () => {
    expect(functions.m(1)).to.deep.equal({ value: 1, source: '1' });
    expect(functions.m(Math.PI, 'pi')).to.deep.equal({ value: Math.PI, source: 'pi' });
  });

  it('addm() takes two m objects and returns an m object', () => {
    expect(functions.addm(functions.m(3), functions.m(4))).to.deep.equal({ value: 7, source: '(3+4)' });
    expect(functions.addm(functions.m(1), functions.m(Math.PI, 'pi'))).to.deep.equal({ value: 1 + Math.PI, source: '(1+pi)' });
  });

  it('liftm() takes a binary function and a string and returns a function that acts on m objects (using the string which will be an operator)', () => {
    const addm = functions.liftm(fct13.add, '+');
    // const mulm = functions.liftm(fct13.mul, '*');

    expect(addm(functions.m(3), functions.m(4)), 'addm').to.deep.equal({ value: 7, source: '(3+4)' });
    expect(functions.liftm(fct13.mul, '*')(functions.m(3), functions.m(4)), 'mulm').to.deep.equal({ value: 12, source: '(3*4)' });
  });
});
