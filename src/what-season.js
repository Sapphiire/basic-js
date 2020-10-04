const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(typeof date != Date) throw Error;
  const month = date.getMonth()
  const season = "";
  if(month == 12 && month <= 2) season = 'winter';
  else if(month >= 3 && month <= 5) season = 'spring';
  else if(month >= 6 && month <= 8) season = 'summer';
  else if(month >= 9 && month <= 11) season = 'autumn';
  return season;
};
