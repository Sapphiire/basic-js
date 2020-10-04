const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
  return members.reduce((accumulator, value) => {
    return typeof value == 'string' ? accumulator.concat(value[0]) : accumulator
  }
  ,"").toUpperCase().split('').sort().join('')
};
