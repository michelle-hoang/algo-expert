const chai = require('chai');

const { expect } = chai;

const BST = require('../data-structures/bst');

describe('binarySearch method', () => {
  xit('Test Case #0', () => {
    chai.expect(BST.binarySearch([1, 5], 1)).to.deep.equal(0);
  });

  xit('Test Case #1', () => {
    chai.expect(BST.binarySearch([1, 5, 23, 111], 111)).to.deep.equal(3);
  });

  xit('Test Case #2', () => {
    chai.expect(BST.binarySearch([1, 5, 23, 111], 5)).to.deep.equal(1);
  });

  xit('Test Case #3', () => {
    chai.expect(BST.binarySearch([1, 5, 23, 111], 35)).to.deep.equal(-1);
  });

  xit('Test Case #4', () => {
    chai.expect(BST.binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33)).to.deep.equal(3);
  });

  xit('Test Case #5', () => {
    chai.expect(BST.binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 72)).to.deep.equal(8);
  });

  xit('Test Case #6', () => {
    chai.expect(BST.binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 73)).to.deep.equal(9);
  });

  xit('Test Case #7', () => {
    chai.expect(BST.binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 70)).to.deep.equal(-1);
  });

  xit('Test Case #8', () => {
    chai
      .expect(BST.binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73, 355], 355))
      .to.deep.equal(10);
  });

  xit('Test Case #9', () => {
    chai
      .expect(BST.binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73, 355], 354))
      .to.deep.equal(-1);
  });
});
