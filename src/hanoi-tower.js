const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  function recursiveTurns(disks) {
    return disks === 1 ? 1 : 2 * recursiveTurns(disks - 1) + 1
  }
  const turns = recursiveTurns(disksNumber)
  const seconds = Math.floor(turns/turnsSpeed*3600)
  return {turns, seconds}
};
