const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return Number(matrix.reduce((acc1, cur1) => acc1 + cur1.reduce((acc2, cur2) => cur2 == '^^' || cur2 == "^^" ? acc2 + 1 : acc2, 0), 0))
};
