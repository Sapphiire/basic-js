const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return arr.every(element => !Array.isArray(element)) ? 1 : this.calculateDepth(arr.flat()) + 1;
  }
};
