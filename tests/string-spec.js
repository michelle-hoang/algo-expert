const chai = require('chai');
const expect = chai.expect;

const string = require('../data-structures/strings');

describe('string test method', () => {
  it('takes an input and returns a string', () => {
    chai.expect(string.isPalindrome('a')).to.deep.equal(true);
  });
  it('takes an input and returns a string', () => {
    chai.expect(string.isPalindrome('abc')).to.deep.equal(false);
  });
});
