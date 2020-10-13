const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  /* if(typeof sampleActivity != String) return false;
  const regex = /[0-9\.]/
  if(!regex.test(sampleActivity)) return false;

  const activity = parseFloat(sampleActivity)
  const k = Math.log(2)/HALF_LIFE_PERIOD
  const t = Math.log(MODERN_ACTIVITY/activity)/k
  return Math.ceil(t) */
  
  throw new CustomError('Not implemented');
};