const CustomError = require("../extensions/custom-error");

const chainMaker = {
  /* chain: [],
  length: 0,
  getLength() {
   return length
  },
  addLink(value) {
    this.chain.push(value)
    return this
  },
  removeLink(position) {
    this.chain.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this;
  },
  finishChain() {
    return this.chain.map(element => `( ${element} )`).join('~~');
  } */
  getLength() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = chainMaker;

//3