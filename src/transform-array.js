const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const control_sequences = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev'
  ]
  for(let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
      case control_sequences[0]: arr.splice(i--, 2);
      break;
      case control_sequences[1]: arr.splice(--i, 2);
      break;
      case control_sequences[2]: arr[i] = arr[i + 1];
      break;
      case control_sequences[3]: arr[i] = arr[i - 1];
      break;
    }
  }
  return arr;
};