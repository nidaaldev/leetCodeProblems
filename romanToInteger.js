/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const nums = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  
  let romanToArray = s.split('').reverse();

  let result = 0;
  
  
  romanToArray.forEach((num, i) => {
    const next = nums[romanToArray[i + 1]];
    if (nums[num] > next ) {
      result -= (next * 2) - nums[num];
    } else {
      result += nums[num];
    }
  });
  
  return result;
};
