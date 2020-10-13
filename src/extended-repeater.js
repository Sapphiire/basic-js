const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {repeatTimes = 0, separator = '+', addition, additionRepeatTimes = 0, additionSeparator = '|'}) {
  const addition_str = (new Array(additionRepeatTimes || 1)).fill(addition === undefined ? addition :`${addition}`).join(additionSeparator);
  return (new Array(repeatTimes || 1)).fill(str + addition_str).join(separator)
}

// +