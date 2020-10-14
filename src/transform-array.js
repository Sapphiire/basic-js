const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) throw Error;
  const control_sequences = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev'
  ]
  let result = [];
  for(let i = 0; i < arr.length; i++)
    switch(arr[i]) {
      case control_sequences[0]:{if(i < arr.length - 2 && (arr[i + 2] == control_sequences[1] || arr[i + 2] == control_sequences[3]))i++; i++};break;
      case control_sequences[1]:result.pop();break;
      case control_sequences[2]:if(i < arr.length - 1) result.push(arr[i + 1]); break;
      case control_sequences[3]:if(i > 0) result.push(arr[i - 1]);break;
      default: result.push(arr[i]);
    }
  return result;
};

// +