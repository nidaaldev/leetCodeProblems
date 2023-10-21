/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (parseInt(x.toString().split('').reverse().join('')) === x) {
    return true;
  }

  return false;
};

// I will optimize in the future
