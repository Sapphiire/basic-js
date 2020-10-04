const CustomError = require("../extensions/custom-error");

module.exports = function countCats(/* matrix */) {
  let count = 0;
  matrix.forEach(row => row.forEach(element => {
    if(element == '^^') count++; 
    return element
  }
    ));
  return Number(count);
};
