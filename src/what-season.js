const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  
  throw new CustomError('Not implemented');
  /* if(!(date instanceof Date)) return false;
  const month = date.getMonth()
  let season;
  if(month == 11 || month <= 1) season = 'winter';
  else if(month >= 2 && month <= 4) season = 'spring';
  else if(month >= 5 && month <= 7) season = 'summer';
  else if(month >= 8 && month <= 10) season = 'autumn';
  return season; */
};