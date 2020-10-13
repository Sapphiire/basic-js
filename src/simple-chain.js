const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  length: 0,
  getLength() {
   return length
  },
  addLink(value) {
    value === undefined ? this.chain.push('') : this.chain.push(` ${value}`)
    return this
  },
  removeLink(position) {
    if(!Number.isInteger(position)) {
      this.chain = []
      throw Error
    }
    this.chain.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this;
  },
  finishChain() {
    const result = this.chain.map(element => `(${element} )`).join('~~')
    this.chain = []
    return result
  }
  
};

module.exports = chainMaker;

// +