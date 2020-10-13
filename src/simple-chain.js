const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
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
  }
};

module.exports = chainMaker;

//3