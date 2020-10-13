const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
  return members.reduce((accumulator, value) => typeof value === 'string' ? accumulator + value[0].trim() : accumulator, "")
  .toUpperCase().split('').sort().join('')
};
